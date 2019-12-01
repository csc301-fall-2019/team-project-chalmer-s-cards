
# Our experience with YOLO
  This folder is our groups attempt to utilize existing YOLO models that are online and open for usage. Cloning this model and testing it lead to the following results.
  
  The YOLO model although incredibly accurate takes a tremendous amount of power to run. Most of our computers could only handle about 1-2 frames with detection on live video. This resulted in the inability to proceed with YOLO as the model itself requires to much computational power to run on a Raspberry Pi which is what we are limited to for installing into shelters.
  
  The video titled yolo_test_jimmy.avi shows the performance of YOLO on Jimmy's laptop. The shelters that would be using this technology also may not have internet access to be able to outsource the computation to a server and the budget at the moment does not allow for more powerful hardware. Hence, we did not choose to proceed with YOLO and hope that if this project becomes more elaborate than we may choose to use YOLO in the future.
  
  Also, note that the YOLO model was trained on a data set (a file called yolo.h5) that was about 240MB in size. We decided to not commit this to our repository as it is not required to run the program and serves as proof of the performance of the model. If the reader of this so wishes to see this dataset, it is available in the original repository linked to down below in the credits.

# Running YOLO
  Information about running this YOLO such as its dependencies and testing instructions can be found within the deep_sort_yolov3 folder provided by the original creator(s) of the repository we are using.
  
# Credits
  The information in this repository is in no way our creation and credits belong to the users and repositories down below that graciously kept their code open-source for us to test. 
  
  https://github.com/nwojke/deep_sort
  
  https://github.com/qqwweee/keras-yolo3
  
  https://github.com/Qidian213/deep_sort_yolov3
