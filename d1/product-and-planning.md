# Chalmer's Vision
> _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).
 > Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as an agreement between your team and your partner.**

## Product Details

#### Q1: What are you planning to build?
 
What we are building is a computer vision program to count the number of people inside homeless shelters in Toronto. The problem we are trying to solve is the issue of quickly knowing which homeless shelters have space to refer to clients. The most common use case would be numerous shelters balancing their occupancy among other shelters. For example, consider the following: 

 *Client A walks into Shelter 1, but Shelter 1 is at capacity and cannot accept more people. It is very cold outside and Client A needs a safe and warm place to stay. The staff at Shelter 1 check the occupancy at other shelters around the city using a map that utilizes count data and provide Client A directions to the nearest shelter with space for additional people*

Specifically, what we will be building is the backend model which will provide JSON data on shelter occupancy.  This model will be an artificial intelligence model that will be used to detect faces coming in and out of homeless shelters around the city.  Building the artifical intelligence models will be our main focus.  As well, there will be simple front-end web applications to showcase the various models we use and their effectiveness. Our model will simply provide one piece of information; how many people are in the shelter. This data will then be provided to other applications like a map that staff can use to see vacancies so they or an automated bot that can direct clients to the nearest vacant shelter.

#### Q2: Who are your target users?

   
Our target users are staff at homeless shelters. They would use this product to streamline the process of keeping track of the number of people at other shelters as well as their own. Shelter staff can then use the data from Chalmer's vision to find which shelter has space when theirs is at full capacity. They can also notify others of their vacancies if other shelters are full.
   
#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?
Currently, shelter staff need to count the occupants coming in and out of their shelter by hand in order to determine capacity. This step of the process is mandatory and under their protocol. The problem is for staff to quickly convey their capacity to other shelters. This at the moment would be the slow process of manual phone calls that take time and labor even if the staff have time to do so in their busy jobs.

Our product will help with this by keeping track of the count but sending this information out directly to other shelters in real-time. This product will save hundreds of hours for staff as it removes the role of "communicator". This type of automation application is not currently employed in shelters that are not cumbersome, so we see this project fulfilling this void. 
 
There does, however, exist an already existing application that does this counting called the Shelter Management Information System (SMIS) that publishes shelter occupancy. The problem is that the SMIS is an old and sluggish piece of software that keeps track of this information slowly. This is effectively useless for shelter staff requiring information as soon as possible and usually not as technologically inclined to use such an enterprise piece of software.

Finally, this product aligns with our partner's mission of making the lives of staff and the homeless easier, providing more accurate data, with less overhead of a human tasked to count occupancy which leads to more time being put to directly supporting the homeless.

#### Q4: How will you build it?
 
Our technological stack will be to use Wyzecam Version 2 cameras connected to Rasberry Pis using Raspbian hardware for our input. Information from these cameras will use a model to detect faces and all code is centralized using Python. Our results are then stored in JSON with a Firebase database. Our final result will include a web application most likely using React to display the accuracy of each model.

Our product will be deployed as a proof-of-concept as a web application and as software governing cameras given to shelters to utilize.

The APIs we could possibly use would be different AI model trainers such as AWS, Microsft Azure, and any models online that relate to our project.

Our group will be provided with the hardware (cameras and Raspberry Pi) to directly test our software as we build it and look to use our own input (such as our own videos) or shelter footage with the necessary permission to test as well.

#### Q5: What are the user stories that make up the MVP?

#### 1. Full Service Shelters
- As staff at the full-service shelter, I want to receive real time data keeping track of how many people are currently in my shelter and other shelters around the city so that I know when and where to refer people to other shelters if fire occupancy for my shelter has been reached.
- Acceptance Criteria:
    - I want to have an accurate count of the number of people in various homeless shelters in Toronto.
    - I want to have a simple display of how many people are in my shelter.
#### 2. Respite center
- As a respite center home staff, I want to quickly refer any clients coming in and out of the shelter to other shelters that have available beds so I can ensure everyone has a place to sleep while also ensuring that fire occupancy for the shelter doesn't get out of hand.
- Acceptance Criteria:
    - I want the number of people in the shelter to ensure a legal amount of people are in the building well below the fire code.
#### 3. Out-of-the-cold Shelter
- As a out-of-the-cold shelter staff, I want to have the ability to monitor the number of people coming in and out so I can send the information out to other shelters to ensure other shelters don't refer people to an already full shelter.
- Acceptance Criteria:
    - I want to have a highly accurate count for current occupancy so that the fire code is not violated.
    - I want to be able to know real-time changes so that any change over the fire code can be quickly dealt with.
#### 4. City of Toronto
- As staff managing the various homeless shelters in Toronto, we want to be able to see occupancy rates at various shelters around the city in order to better allocate resources to where they are needed.
- Acceptance Criteria:
    - I want to have an accurate count of occupancy of various shelters around the city at any given time
    - I want to have a counter of people for each shelter to make sure everyone is evenly distributed.
#### 5. Volunteers & Staff at the shelters (food volunteers, etc)
- As volunteers and staff at homeless shelters, we want to see and for the public to see where there are the most clients so that we can help out the shelters that are understaffed for their occupancy.
- Acceptance Criteria
    - We should be able to see the occupancy at various shelters in order to go the one with the most people
    - We also need the occupancy to see exactly how much food is needed for the shelter and how to divide it across everyone.

## Process Details

#### Roles & responsibilities
 
**Zuhab Wasim**
- Weaknesses
    - Little experience in Javascript, React, Node frameworks
    - Spends a lot of time understanding code before producing any code
    - Unfamiliar in working with a Raspberry Pi
- Strengths
    - Experience in using Microsoft Azure AI
    - Knowledge in Google Firebase
    - Experience in software to hardware programming
- Roles
    - Designer for Computer Vision model 3 used to identify the number of people coming in and out with Alex Quach (back-end)
    - Meeting minutes taker (the scribe)

**Saim Ibrahim**
- Weaknesses
    - Lack of experience with AI/ML
    - Limited exposure to Agile methodologies
    - Lack of experience with SQL databases
- Strengths
    - Experience in Firebase
    - Strong background in Python
    - Experience in Javascript/Web Development
- Roles
    - Designer for Computer Vision model 1 used to identify the number of people coming in and out with Brian Quach and Rooney Gao (back-end)
    - Front-end developer for a website showcase all computer vision models developed by colleagues

**Alex Quach**
- Weaknesses
    - Lack of experience with web development (JS, Node, React)
    - Lack of experience with frameworks
    - Lack of experience in AGILE/SCRUM development environments
- Strengths
    - Experience in AI with Microsoft Azure and Google Firebase
    - Strong background in Python and databases
    - Strong background in full-stack mobile development and object-oriented programming (Android, iOS)
- Roles
    - SCRUM Master / AGILE Coach
    - Designer of Computer Vision model 3 used to identify the number of people coming in and out with Zuhab Wasim (back-end)
    - Partner and TA Correspondent

**Brian Quach**
- Weaknesses
    - No experience with AI/ML
    - No experience with Firebase
    - No experience with Rasberry Pi
- Strengths
    - Experience with Python
    - Experience with full-stack development
    - Experience with databases
- Roles
    - Designer for Computer Vision model 1 used to identify the number of people coming in and out with Saim Ibrahim and Rooney Gao (back-end)

**Jingyuan Rooney Gao**
- Weaknesses
  - Lack of experience with Firebase
  - Lack of experience with Rasberry Pi or RTSP stream
  - Lack of experience in Front-End 
- Strengths
  - A good foundation in Python
  - Understand and learning ML concepts 
  - Experience with databases
- Roles
  - Designer for Computer Vision model 1 used to identify the number of people coming in and out with Saim Ibrahim and Brian Quach (back-end)

**Jimmy Tan**
- Weaknesses
    - Lack of experience in a larger team
    - Lack of extensive experience with AI/ML
    - Lack of experience in a SCRUM environment.
- Strengths
    - Experience with firebase, which the project is currently using.
    - Strong background in Python
    - Experience with Microsoft Azure custom vision
- Roles
    - Designer for Computer Vision model 2 used to identify the number of people coming in and out with Frederick Yao (back-end)

**Frederick Yao**
- Weaknesses
    - Lack of experience in a larger team
    - Lack of extensive experience with AI/ML
    - Lack of experience in a SCRUM environment
- Strengths
    - Experience with Firebase, which the project is currently using.
    - Background in Python
    - Experience with Microsoft Azure custom vision
- Roles
    - Designer for Computer Vision model 2 used to identify the number of people coming in and out with Jimmy Tan (back-end)

----
### Team Rules
#### Communications
* As a team, we will meet on Thursdays after 3:00 PM before the meeting with Zach at school (Bahen).  After this meeting as a team, we will meet our project partner.
 * We will be meeting with our project partner weekly on Thursdays at 5:30 pm at a pre-arranged location for the week that will be decided over slack or email with the project partner.
     * Meetings alternate every week with one week in person and one week online through Slack/Discord
     * For the online meeting, the application will be decided on Slack beforehand.
 * Our process for communicating with our partner involves talking over slack during the week and during our weekly meetings on Thursday.  On Thursday, we will talk about our progress, our next steps and what requirements we need from him (Update our partner on the progress).  During the week, we will message him on Slack if anything is needed.
----
#### Meetings
 * The SCRUM Master / AGILE coach will keep track of each member's attendance and missed meeting catch up, acting as the moderator of the meetings.
 * If a member cannot attend, they will have to provide a reason why they could not attend, and the steps they'll take to get up to speed on what they missed in the meeting. The partner(s) of the absentee will then be responsible for filling in the individual on what happened in the meeting.
 * Partners will send meeting delegates, attending by proxy if they are absent.
 * If a person misses 2 meetings without exceptional circumstances and/or misses 2 action items deadlines (milestones), further escalation will be taken (explained below in conflict resolution).
----
#### Conflict Resolution

*Scenarios*
1) Refusing to communicate
     * In this scenario, the group will attempt to confront the person(s) in person and try to resolve why there is a lack of communication in a respectful manner.  If we cannot resolve it in person, we will go to the course administrator for further action.
2) Missed milestone
     * In the scenario, we will call a snap group meeting and try to figure out why it is going on, and to determine why the milestone was missed if they need any help and if the milestone is within the persons' scope.  If we cannot resolve this, we can decide to tackle the missed milestone as a group, or we will go to the course administrator for further action.
3) Difference in progress between groups
     * In this scenario, the groups that are ahead can decide to help the groups behind.  If it is an issue, we can redistribute the work and assign people to help out the groups that are behind.
4) One member is being too controlling
     * In this scenario, the other members of the group should respectfully discuss the dynamic with the person.  If the behavior is consistent, the problem will be escalated to the course administration.
5) Two group members have personal issues between each other
     * In this scenario, the rest of the group / SCRUM master should act as a mediator and try to find the resolution.  If a resolution cannot be reached, the scrum master will act as the arbitrator.  If there is a conflict of interest, course administration will be brought in.
6) All groups experience significant setbacks or show a lack of progress
     * For this case, a discussion should be initiated as soon as possible to discuss a change in scope relating to the work. We will look to see if we can merge groups and requirements to ensure something is delivered such as creating fewer models.  If this cannot be resolved, we will either discuss it with the administration or change the MVP of the project.

----
#### Events

  1) Weekly Meetings after 3 PM before partner meeting:
     * When: 3:00PM - 5:00 PM
     * Where: Bahen 2nd floor or 3rd floor
     * Recurring: Every Thursday of every week
     * In-person or online: In-person
     * Purpose: Code reviews, progress updates, SCRUM / AGILE, resolve blockers, reallocation of resources, planning on what to discuss with a partner, SPRINT planning, weekly sync
2) Weekly Meetings with Project Partner at 5:30 PM:
    * When: 5:30 PM - 7:00 PM (Approximately)
     * Where: Will be decided on Slack during the week beforehand
     * Recurring: Every Thursday of every week
     * In-person or online: In-person one week, online one week, rotates between the two
     * Purpose: Progress updates, requirement updates, future plans, issue-resolving, additional assistance if needed
3) Team socials (Dinners, etc)
    * Occurs throughout the week depending on the members
     
----
#### Partner Meetings
You must have at least 2 meetings with your project partner - an initial planning meeting and a document review meeting. Describe the meetings here:

*Meeting #1*
* When and where
    * Was on Thursday, October 10th, 2019, and at the Bampot Tea House on Bathurst and Harbord. The meeting was approximately 2 hours in length. 
* What we discussed during the meeting
    * The schedule for the meeting was as follows:
    * Introductions with everyone and insight into the Chalmer's history and goals.
    * Discussed possible meeting schedules and structure of each meeting that aligns with the partner's schedule.
    * Asked questions related to what the project will be about and what the project specifies. We also asked questions to properly cast the project in terms of action goals and deliverables as discussed in the course.
    * Discussed the tech stack of the project pros and cons of possible implementations and general plans of actions.
* The outcomes of the meeting
    * Finalized our method of communication with the partner and group. That being mainly slack and email.
    * Scheduled our next meeting with our partner (will occur on Thursday afternoon). We also finalized our schedule by meeting the partner on Sunday or Thursday weekly meetings, alternating in online and in-person.
    * Learned the responsibility of our group and what we are solving in the general scope of the problem. 
    * Learned the specific requirements of the project and the tech stack that is needed for it.

*Meeting #2*
* When and where
    * Was on Thursday, October 10th, 2019, and at the Bampot Tea House on Bathurst and Harbord. The meeting was approximately 2 hours in length. 
* What we discussed during the meeting
    * Retrieved the necessary hardware needed to test our code. Specifically, the cameras, the Raspberry Pi, and any wiring/components associated.
    * Showed our partner the answers for the deliverable questions to see if they correctly aligned with his vision.
    * Discussed our user stories and possible others that we may add.
    * Asked questions relating to training, models, and general questions relating to the whole project.
* The outcomes of the meeting
    * Obtained the hardware relating to the project and discussed how to use it.
    * Got input from our partner with his edits on what our questions portrayed wrongly and got his additions as well.
    * Discussed our plan of action after having doubts relating to particular issues with our original plan.


----
#### Artifacts

* Zenhub will be used to keep track of what needs to get done and will be used to assign tasks to team members.  Zenhub is a free AGILE project management application directly on Github.
* We will prioritize tasks by when they are due / need to be displayed.
* We will create a schedule using google docs or something similar to manage when all project deadlines should be due.

----
### Highlights

1) Fixing our insight into what our project we would be doing
In our first meeting, our partner discussed with us the two options we had of creating the computer vision model for shelters or to develop a front end map displaying the information from the model. These were called Ample Maps or Chalmers' Vision. Our group initially considered the Ample Maps but we eventually went towards developing Chalmers' Vision as we realized our combined knowledge of front-end development was weak and they already code established.
2) Changing our user stories
Before talking to our partner, our user stories discussed verbally were to define each one as a shelter that had a certain condition such as being empty or full. After recalling the information our partner gave in the first meeting, we saw the option of defining some of the user stories as the types of shelters themselves. This provided more specifics in comparison to generalizing every shelter to specific states they could be in. We finally stuck with this format and confirmed with our partner in our second meeting that it was, in fact, a good approach to take.
3) Changing our method of developing the models
Initially, our goal as a team was to train our own three models and determine which one would be best suited as our final. However, this was deemed difficult and we instead looked to see an option of a healthy balance of educating ourselves on online models and looking to develop our own only if necessary. We ended up choosing this approach as it will save some time trying to utilize the tools already provided but using our own as well.
