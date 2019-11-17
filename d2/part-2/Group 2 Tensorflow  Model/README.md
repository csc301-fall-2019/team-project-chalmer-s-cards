### Group 2 Model Details
 Credit to medium user, https://medium.com/@madhawavidanapathirana for providing an extremely intuitive explanation to object detection.

 Python Skeleton provided by : https://medium.com/@madhawavidanapathirana/real-time-human-detection-in-computer-vision-part-2-c7eda27115c6

  Tensorflow Model provided by : https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md#coco-trained-models-coco-models

 Specifically, we tested multiple models, and found that the mobile ver 2. model was best fitted for this project, as it was accurate and quick, even on my slower laptop. Additionally we put together a quick fps counter to showcase this. 

## NOTE: Only one model is here, but we did test others as well. Also tried using YOLO (You only look once), but this was extremely GPU intensive.

# Dependencies:
- Opencv (used pip install opencv-python on linux)
- Tensorflow (used pip install pip install tensorflow)
- Numpy (used pip install numpy)

# To run:
1. Install dependencies as stated above.
2. Run the python script (type 'python3 tensorflow-human-detection.py'). Uses webcam. Press q to quit program.
