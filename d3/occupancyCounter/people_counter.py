'''
-------------------USAGE-------------------
OPEN CV FRAMEWORK USAGE
	To read and write back out to video with display overlayed:
	python people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt \
		--model mobilenet_ssd/MobileNetSSD_deploy.caffemodel --input <path to input video file> \
		--output <path to output video.avi>

	To read from webcam and write back out to disk with display overlayed:
	python people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt \
		--model mobilenet_ssd/MobileNetSSD_deploy.caffemodel \
		--output <path to output video.avi>

TENSORFLOW FRAMEWORK USAGE
	To read and write back out to video with display overlayed:
	python3 people_counter.py --detectfw tensorflow --model ssdlite_mobilenet_v2_coco_2018_05_09/frozen_inference_graph.pb \
	--input  <path to input video file.avi> --output <path to output video.avi>

	To read from webcam and write back out to disk with display overlayed:
	python3 people_counter.py --detectfw tensorflow --model ssdlite_mobilenet_v2_coco_2018_05_09/frozen_inference_graph.pb \
	--output <path to output video.avi>
'''
from pyimagesearch.centroidtracker import CentroidTracker
from pyimagesearch.trackableobject import TrackableObject
import TensorflowDetect as tfd
from imutils.video import VideoStream
from imutils.video import FPS
import numpy as np
import argparse
import imutils
import time
import dlib
import cv2

rtsp = "rtsp://192.168.8.3:8554/unicast"

# Append tracker methods for each framework.
def tensorflowAppendTrackers(object_detector, frame, args, trackers):
	'''
		Returns nothing. Uses tensorflow object detector to create bounding boxes,
		convert to dlib rectangles and create dlib trackers and add to trackers.
	'''
	boxes, scores, classes, num, elapsed_time = object_detector.processFrame(frame)
	# loop over the detections
	for i in range(len(boxes)):
		# filter out weak detections by requiring a minimum
		# confidence and non humans(class = 1 means human)
		if scores[i] > args["confidence"] and classes[i] == 1:
			box = boxes[i]
			# Format tensorflow box values, into dlib rect. values.
			boxTop, boxLeft, boxBottom, boxRight = box[0], box[1], box[2], box[3]
			(startX, startY, endX, endY) = (boxLeft, boxTop, boxRight, boxBottom)
			# construct a dlib rectangle object from the bounding
			# box coordinates and then start the dlib correlation
			# tracker
			tracker = dlib.correlation_tracker()
			rect = dlib.rectangle(startX, startY, endX, endY)
			tracker.start_track(rgb, rect)
			# add the tracker to our list of trackers so we can
			# utilize it during skip frames
			trackers.append(tracker)

def cvAppendTrackers(net, frame, args, trackers):
	'''
		Returns nothing. Uses opencv object detector to create bounding boxes,
		convert to dlib rectangles and create dlib trackers and add to trackers.
	'''
	# convert the frame to a blob and pass the blob through the
	# network and obtain the detections
	blob = cv2.dnn.blobFromImage(frame, 0.007843, (W, H), 127.5)
	net.setInput(blob)
	detections = net.forward()
	# loop over the detections
	for i in np.arange(0, detections.shape[2]):
		# extract the confidence (i.e., probability) associated
		# with the prediction
		confidence = detections[0, 0, i, 2]
		# filter out weak detections by requiring a minimum
		# confidence
		if confidence > args["confidence"]:
			# extract the index of the class label from the
			# detections list
			idx = int(detections[0, 0, i, 1])
			# if the class label is not a person, ignore it
			if CLASSES[idx] != "person":
				continue
			# compute the (x, y)-coordinates of the bounding box
			# for the object
			box = detections[0, 0, i, 3:7] * np.array([W, H, W, H])
			(startX, startY, endX, endY) = box.astype("int")
			# construct a dlib rectangle object from the bounding
			# box coordinates and then start the dlib correlation
			# tracker
			tracker = dlib.correlation_tracker()
			rect = dlib.rectangle(startX, startY, endX, endY)
			tracker.start_track(rgb, rect)
			# add the tracker to our list of trackers so we can
			# utilize it during skip frames
			trackers.append(tracker)


# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-p", "--prototxt",
	help="path to Caffe 'deploy' prototxt file")
ap.add_argument("-m", "--model", required=True,
	help="path to Caffe pre-trained model")
ap.add_argument("-i", "--input", type=str,
	help="path to optional input video file")
ap.add_argument("-o", "--output", type=str,
	help="path to optional output video file")
ap.add_argument("-c", "--confidence", type=float, default=0.5,
	help="minimum probability to filter weak detections")
ap.add_argument("-s", "--skip-frames", type=int, default=30,
	help="# of skip frames between detections")
ap.add_argument("-f", "--detectfw", type=str, default="opencv",
	help="detection framework to use.(OpenCV or Tensorflow)")
ap.add_argument("-hd", "--hidedisplay", action='store_true',
	help="Hides opencv drawings for centroids, in/vs out.")
ap.add_argument("-r", "--rtsp", action='store_true',
	help="uses the Real Time Streaming Protocol (RTSP) as input the video stream")
args = vars(ap.parse_args())


'''
Sets the object detector technique to use for CentroidTracker object tracking.
	To add a new object detector framework/technique:
		1. Add a branch to this 'if' arg chain with your corresponding string identifier.
		2. Add corresponding appendTrackers code inside the main while loop.
'''
# Initialize vatiables with potential values, depending on command line input.
net, object_detector = None, None
# load our serialized model from disk
print("[INFO] loading model...")
if args["detectfw"].lower() == "opencv":
	net = cv2.dnn.readNetFromCaffe(args["prototxt"], args["model"])
	# net = cv2.dnn.readNet("yolov3-tiny.weights", "../darknet/cfg/yolov3-tiny.cfg")
elif args["detectfw"].lower() == "tensorflow":
	model_path = args["model"]
	object_detector = tfd.DetectorAPI(path_to_ckpt=model_path)

# initialize the list of class labels MobileNet SSD was trained to detect for openCV framework.
CLASSES = ["background", "aeroplane", "bicycle", "bird", "boat",
	"bottle", "bus", "car", "cat", "chair", "cow", "diningtable",
	"dog", "horse", "motorbike", "person", "pottedplant", "sheep",
	"sofa", "train", "tvmonitor"]
# initialize the video writer (we'll instantiate later if need be)
WRITER = None
# initialize the frame dimensions (we'll set them as soon as we read
# the first frame from the video)
W = None
H = None

# if a video path was not supplied, grab a reference to the webcam
if not args.get("input", False):
	if not args.get("rtsp", False):
		vs = VideoStream(src=0).start()
	else:
		vs = VideoStream(src=rtsp).start()
	print("[INFO] starting video stream...")
	time.sleep(2.0)
# otherwise, grab a reference to the video file
else:
	print("[INFO] opening video file...")
	vs = cv2.VideoCapture(args["input"])

# instantiate our centroid tracker, then initialize a list to store
# each of our dlib correlation trackers, followed by a dictionary to
# map each unique object ID to a TrackableObject
ct = CentroidTracker(maxDisappeared=40, maxDistance=50)
trackers = []
trackableObjects = {}
# initialize the total number of frames processed thus far, along
# with the total number of objects that have moved either up or down
totalFrames = 0
totalOut = 0
totalIn = 0
# start the frames per second throughput estimator
fps = FPS().start()

# loop over frames from the video stream
while True:
	# grab the next frame and handle if we are reading from either
	# VideoCapture or VideoStream
	frame = vs.read()
	frame = frame[1] if args.get("input", False) else frame
	# if we are viewing a video and we did not grab a frame then we
	# have reached the end of the video
	if args["input"] is not None and frame is None:
		break
	# resize the frame to have a maximum width of 500 pixels (the
	# less data we have, the faster we can process it), then convert
	# the frame from BGR to RGB for dlib
	frame = imutils.resize(frame, width=500)
	rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
	# if the frame dimensions are empty, set them
	if W is None or H is None:
		(H, W) = frame.shape[:2]
	# if we are supposed to be writing a video to disk, initialize
	# the writer
	if args["output"] is not None and WRITER is None:
		fourcc = cv2.VideoWriter_fourcc(*"MJPG")
		WRITER = cv2.VideoWriter(args["output"], fourcc, 30,
			(W, H), True)
	# initialize the current status along with our list of bounding
	# box rectangles returned by either (1) our object detector or
	# (2) the correlation trackers
	status = "Waiting"
	rects = []
	# check to see if we should run a more computationally expensive
	# object detection method to aid our tracker
	if totalFrames % args["skip_frames"] == 0:
		# set the status and initialize our new set of object trackers
		status = "Detecting"
		trackers = []
		'''
			Add corresponding 'appendTrackers' method, to be use with centroid tracker.
			Method must use dlib rectangles and dlib trackers.
		'''
		if args["detectfw"].lower() == "opencv":
			cvAppendTrackers(net, frame, args, trackers)
		elif args["detectfw"].lower() == "tensorflow":
			tensorflowAppendTrackers(object_detector, frame, args, trackers)
	# otherwise, we should utilize our object *trackers* rather than
	# object *detectors* to obtain a higher frame processing throughput
	else:
		# loop over the trackers
		for tracker in trackers:
			# set the status of our system to be 'tracking' rather
			# than 'waiting' or 'detecting'
			status = "Tracking"
			# update the tracker and grab the updated position
			tracker.update(rgb)
			pos = tracker.get_position()
			# unpack the position object
			startX = int(pos.left())
			startY = int(pos.top())
			endX = int(pos.right())
			endY = int(pos.bottom())
			# add the bounding box coordinates to the rectangles list
			rects.append((startX, startY, endX, endY))
	# draw a horizontal line in showoverlaythe center of the frame -- once an
	# object crosses this line we will determine whether they were
	# moving 'up' or 'down'
	if not args["hidedisplay"]:
		cv2.line(frame, (W // 2, 0), (W // 2, H), (0, 255, 255), 2)
	# use the centroid tracker to associate the (1) old object
	# centroids with (2) the newly computed object centroids
	objects = ct.update(rects)
	# loop over the tracked objects
	for (objectID, centroid) in objects.items():
		# check to see if a trackable object exists for the current
		# object ID
		to = trackableObjects.get(objectID, None)
		# if there is no existing trackable object, create one
		if to is None:
			to = TrackableObject(objectID, centroid)
		# otherwise, there is a trackable object so we can utilize it
		# to determine direction
		else:
			# the difference between the y-coordinate of the *current*
			# centroid and the mean of *previous* centroids will tell
			# us in which direction the object is moving (negative for
			# 'in' and positive for 'out')
			x = [c[0] for c in to.centroids]
			direction = centroid[0] - np.mean(x)
			to.centroids.append(centroid)
			# check to see if the object has been counted or not
			if not to.counted:
				# if the direction is negative (indicating the object
				# is moving in) AND the centroid is above the center
				# line, count the object
				if direction < 0 and centroid[0] < W // 2:
					totalIn += 1
					to.counted = True
				# if the direction is positive (indicating the object
				# is moving down) AND the centroid is below the
				# center line, count the object
				elif direction > 0 and centroid[0] > W // 2:
					totalOut += 1
					to.counted = True
		# store the trackable object in our dictionary
		trackableObjects[objectID] = to
		# draw both the ID of the object and the centroid of the
		# object on the output frame
		text = "ID {}".format(objectID)
		if not args["hidedisplay"]:
			cv2.putText(frame, text, (centroid[0] - 10, centroid[1] - 10),
				cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
			cv2.circle(frame, (centroid[0], centroid[1]), 4, (0, 255, 0), -1)

	# construct a tuple of information we will be displaying on the
	# frame
	info = [
		("In", totalIn),
		("Out", totalOut),
		("Occupancy", totalIn-totalOut if totalIn-totalOut >= 0 else 0),
		("Status", status),
	]
	if not args["hidedisplay"]:
		# loop over the info tuples and draw them on our frame
		for (i, (k, v)) in enumerate(info):
			text = "{}: {}".format(k, v)
			cv2.putText(frame, text, (10, H - ((i * 20) + 20)),
				cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 255), 2)
	# check to see if we should write the frame to disk
	if WRITER is not None:
		WRITER.write(frame)
	# show the output frame
	cv2.imshow("Frame", frame)
	key = cv2.waitKey(1) & 0xFF
	# if the `q` key was pressed, break from the loop
	if key == ord("q"):
		break
	# increment the total number of frames processed thus far and
	# then update the FPS counter
	totalFrames += 1
	fps.update()

# stop the timer and display FPS information
fps.stop()
print("[INFO] elapsed time: {:.2f}".format(fps.elapsed()))
print("[INFO] approx. FPS: {:.2f}".format(fps.fps()))

# check to see if we need to release the video writer pointer
if WRITER is not None:
	WRITER.release()
# if we are not using a video file, stop the camera video stream
if not args.get("input", False):
	vs.stop()
# otherwise, release the video file pointer
else:
	vs.release()
# close any open windows
cv2.destroyAllWindows()
