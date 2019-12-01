const MODEL_INFORMATION = {
	model1: {
		name: "OpenCV Face Detection Model",
		description:
			"This model was the first in development and only used OpenCV to leverage a face detection software. The face detection of this software was incredibly accurate and could detect faces in different lighting conditions and environments effectively. However, through the implementation we realized that this face detection required a lot of computational power, which our hardware could not provide. With this need for computing came low framerate as only a few frames per seconds (1 to 10 fps) could be processed at a time. This left us with an issue of using this model with streamed video as the movement of a person was difficult to follow and whether the persons face or at least head was turned towards the camera. This model we found worked better for recorded video and not our required live video stream which we later decided to not proceed with.",
		videoSrc: "https://www.youtube.com/embed/NpEaa2P7qZI"
	},
	model2: {
		name: "OpenCV Object Detection Model",
		description:
			"This model was our next step to finding one that fit our needs for this project. This project utilized OpenCV with MobileNet's object detection. This object detection used centroid tracking by calculating the center of moving objects with their boundaries. This model worked well as it considered anything moving to be an object to track and determine its movement to see if the object is going in or out of the given building. This model was advantageous as its simplicity meant lower computation. This meant that a video stream could be used with this model as it could process a superior framerate (around 29-32+ fps) than that of the face detection model. Unfortunately, the simplicity of this model made its accuracy fall short in more extreme lighting conditions and angles and thus required the assumption that shelters would be higher contrast environments for this model to work its best. Another issue was the blending of two objects if they passed by each other which affected the accuracy by confusing the model. It was also discovered that using this model at a further distance allowed for better accuracy as the objects would then be in frame longer. ",
		videoSrc: "https://www.youtube.com/embed/NpEaa2P7qZI"
	},
	model3: {
		name: "TensorFlow Object Detection Model",
		description:
			"With the experience and insight gained from the two OpenCV detection models, this model began its development. This model used OpenCV with a lightweight TensorFlow object detector trained under the COCO dataset. The purpose of this model was to test a different approach of object detection using TensorFlow to generate bounding boxes for humans. The accuracy of this model in object detection was highly accurate and provided similar results to the other object detection model with a low demand for computation that resulted in a higher framerate (around 12 fps). Advantageous to the others was this model’s ability to better detect overlap of humans passing by each other which improved the count accuracy. This model however, used a centroid based approach to tracking and thus ran into similar issues as the other models with following objects along the frame of the video stream. A potential improvement to this issue was to instead use Kalman filters which would help with tracking multiple objects and predict through estimates over time rather than independent (and potentially unreliable) centroid calculations. However, with time constraints and the late development of this model, this extension could not be implemented.",
		videoSrc: "https://www.youtube.com/embed/NpEaa2P7qZI"
	}
};

export default MODEL_INFORMATION;
