#### This program should be tested on a laptop with a webcam

## Credits 
[this amazing blog from pysource](https://pysource.com/2019/07/08/yolo-real-time-detection-on-cpu/) . 
[this amazing blog from pyimagesearch](https://www.pyimagesearch.com/2018/08/13/opencv-people-counter/)
[example tensorflow usage from medium user @@madhawavidanapathirana] (https://medium.com/@madhawavidanapathirana/real-time-human-detection-in-computer-vision-part-2-c7eda27115c6)
[pretrained models provided by:] (https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md#coco-trained-models-coco-models)


## Demo
note that this is not an ideal environment, I'm surprised that the program didn't pick up my reflections. 
![demo](cvtest.gif)

## Instructions (assuming python 3 is installed)
clone the repo:
`git clone https://github.com/csc301-fall-2019/team-project-chalmer-s-cards.git`
create and activate your virtual environment:
```
cd team-project-chalmer-s-cards
python3 -m venv .venv
source ./.venv/bin/activate
```

go the group 2 directory:
```cd team-project-chalmer-s-cards/d3/occupancyCounter```

Download dependencies:  
```pip install -requirement requirements``` or alternatively ```pip install tensorflow dlib imutils numpy opencv-python scipy```


run `people_counter.py` with the required arguments (this step will open the default webcam on your laptop. Default object detection framework is with OpenCV. OpenCV requires a prototxt.):
```
python3 people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt 
--model mobilenet_ssd/MobileNetSSD_deploy.caffemodel
```

To save the output video, add the --output flag:    
```
python3 people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt \
--model mobilenet_ssd/MobileNetSSD_deploy.caffemodel \
--output <your_output_video.avi>
```


To use a video file instead of your webcam, add the `--input` flag, it supports .MOV, .mp4 and .avi:
```
python3 people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt --model \
mobilenet_ssd/MobileNetSSD_deploy.caffemodel \
--input <you_input_video.avi> --output <your_output_video.avi>
```

To use the tensorflow detection framework, add the --detectfw flag:
```
python3 people_counter.py --model mobilenet_ssd/MobileNetSSD_deploy.caffemodel/frozen_inference_graph.pb \
--detectfw tensorflow
```

Other optional flags:  
`--confidence` or `-c`: default=0.5, float, minimum confidence level for detection  

`--skip-frames` or `-s`: default=30, int, number of frames to skip between detections. The program will only detect at frame numers that are multiples of `skip-frames`.
`--hieedisplay` or `-hd`: default action=store_true. Normally displays overlay for trackers. If you add this flag(with no arguments) there will be no overlay.


## Introduction
This program detects and tracks human from a live or recorded video feed, and keeps track of a counter for the number of times people enter and leave a space. 

The program has 3 states.
***Wating***
When there are no existing objects and not detecting, the program is simply in the waiting state, not doing computations. 
  
***Detecting:***
When the frame number is a multiple of the `skip-frames` parameters, the program detects human only, using MobileNet with OpenCV or Tensorflow depending on command line input.

***Tracking:***
When there are existing obejcts, the program uses centroids for tracking. After detecting the object and determining a bounding box, it finds the centroid of the bounding box and uses the coordinates of it for tracking. We are currently using the simple centroid tracking module implemented by the [pyimagesearch blog](www.pyimagesearch.com).  

***Algorithm for centroid tracking:***
After determining bounding boxes, it calculates the centroid for each box. It then calculates the Euclidean distance between every pair of centroids. The assumption is that pairs with the smallest Euclidean distances must be the same obejct. For every existing centroid, it assigns its object ID to its 1 nearest neighbor. If there is any centroid that is 1) not an existing object, and 2) not a 1 nearest neighbor to any existing centroid, then it will be registered as a new object and added to the list of existing centroids. 

![centroid tracking gif](https://s3-us-west-2.amazonaws.com/static.pyimagesearch.com/people-counting/opencv_people_counter_centroid_tracking.gif) ([credit](https://www.pyimagesearch.com/2018/08/13/opencv-people-counter/))

It works fairly well when the data is not noisy. For example, simple lightning condition (no shadow) and movements (less people, straighforward movements). 


It uses a combination of walking direction and position to determine if a centroid has entered or left a space. Essentially, when the direction is toward the exit of a space and the position of the centroid is on the outside of the exit, then the centroid is considered as "left". Similarly, the the direction is the opposite of the exit of a space and the position of the centroid is on the inside of the exit, then the cnetroid is considered as "left". 

To save computation and achieve a higher processing FPS (frames per second), it counts every object once, when they are in frame. It can made the program more prone to errors when the movements get complicated. For example, when a person corsses the exit but re-enters while still in frame, the program will not capture the re-enter as it has counted the person. 

## OpenCV - just face recognition
Before we created people-counting capabilities, we tried using face recognition package. But we realized that it was unecessarily computationally expensive to do people-counting. We include in in d2 as we do not need it for people-counting at the moment, but we may use it in the future. The product and the readme are included in the folder https://github.com/csc301-fall-2019/team-project-chalmer-s-cards/tree/master/d2/part-2/group-1-humancounter/pureOpenCV. 
