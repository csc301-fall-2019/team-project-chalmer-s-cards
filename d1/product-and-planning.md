# Chalmer's Vision
> _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).
 > Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as an agreement between your team and your partner.**

## Product Details
 
#### Q1: What are you planning to build?

 * Short (1 - 2 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app,
   browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.
 
What we are building is a computer vision program to count the number of people inside of homeless shelters in Toronto. The problem we are trying to solve is the issue of quickly knowing which homeless shelters have space in order refer clients. The most common use case would be the following: 
 * Client A walks into Shelter 1, but Shelter 1 is at capacity and cannot accept more people. It is very cold outside and Client A needs a safe and warm place to stay. The staff at Shelter 1 check the occuapancy at other shelters around the city and provide Client A directoins to the nearest shelter with space for additional people

Specifcally, what we will be building is the backend api which will provide JSON data on shelter occupancy. As well, there will be simple frontend web application in order to showcase the various models we use and their effectiveness. Our api wil simply provide one piece of informtation: how many people are in the shelter.

#### Q2: Who are your target users?

 * Short (1 - 2 min' read max)
 * Be specific (e.g. a 'a third-year university student studying Computer Science' and not 'a student')
 * Feel free (but not obligated) to use personas.         
   You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).
   
Our target users staff at homeless shelters. They would use this product in order to streamline the process of keeping track of the number of people at shelters. As well, the data from the Chalmer's vision would easily show staff which shelters have space when the current shelter is at capacity.
   
#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

 * Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
    * Does this application exist in another form? If so, how does your differ and provide value to the users?
    * How does this align with your partner's organization's values/mission/mandate?
    
Currently, shelter staff either count the occupants at shelter by hand 

#### Q4: How will you build it?

 * Short (1-2 min' read max)
 * What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS products or tools. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?
 * What is your testing strategy?
 
Our technology stack will be to use Wisecam V2 cameras connected to Rasberry Pis using Debian or Raspbian hardware for our input. Information from these cameras will use a model to detect faces and all code is centralized using Python. Our results are then stored in JSON using a Firebase database. Our final result will include a web application most likely using React to display the accuracy of each model.

Our product will be deployed as a proof-of-concept as a web application and as software governing cameras given to shelters to utilize.

The APIs we could possibly use would be different AI model trainers such as AWS, Microsft Azure, and any models online that relate to our project.

Our group will be provided with the hardware (cameras and Raspberry Pi) to directly test our software as we build it and look to use our own input (such as our own videos) or shelter footage with necessary permission to test as well.

#### Q5: What are the user stories that make up the MVP?

 * At least 5 user stories concerning the main features of the application - note that this can broken down further
 * You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
 * If you have a partner, these must be reviewed and accepted by them
 * The user stories should be written in Github and each one must have clear acceptance criteria
1. Shelter type 1: Full Service Shelters 
- As staff at the Full Service Shelters, we often get clients coming to our facilties looking for a place to stay, however we often at full capacity. I want to be able to use the Chalmer's Vision in order to quicly determine which shelters have space in order to refer the clients to those shelters.
- Acceptance Criteria:
	- have an accurate count of the amount of people in various homeless shelters in Toronto
2. Shelter type 2: Convent Shelters/Transitional Homes
3. Shelter type 3: Respite Centers
- As a respite center staff, the infastructure we have here is not up to standard and my job sometimes gets too difficult to do everything I need to. With this app I want to quickly refer to any clients coming in and out to other shelters so no one will have to be kicked out or left unattended. This is so I can ensure our capacity is within the firecode specifications, the shelter never gets too crowded, and everyone has a place to sleep night.
4. City of Toronto
- As staff managing the various homeless shelters in Tornto, we want to be able to see occupancy rates at various shelters around the city in order to better allocate resources to where they are needed.
- Acceptance Criteria:
	- have an accurate count of occupancy of various shelters around the city at any given time
5. Volunteers at the shelters (food volunteers, etc)
----

## Process Details



#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)
 
 - Zuhab Wasim
 	- Weaknesses
		- Little experience in Javascript, React, Node frameworks
		- Spends alot of time understanding code before producing any code
		- Unfamiliar in working with Raspberry Pi
	- Strengths
		- Experience in using Microsoft Azure AI
		- Knowledge in Google Firebase
		- Experience in software to hardware programming
	- Roles:
		- Designer for AI model (3rd group)
		- Meeting minutes taker (the scribe)
 - Saim Ibrahim
 	- Weaknesses
		- lack of experience with AI/ML
		- limitied exposure to Agile methodologies
		- lack of experience with SQL databases
	- Strengths:
		- experience in Firebase
		- strong background in Python
		- experience in Javascript/Web Development
	- Roles:
		- Will be the front-end developer, developing a website to showcase all the computer vision models developed by other colleagues.
		- Will contribute to CV model 1
 - Alex Quach
 	- Weaknesses
		- lack of experience with web development (JS, Node, React)
		- lack of experience with frameworks
		- lack of experience in AGILE/SCRUM development environments
	- Strengths:
		- experience in AI with Microsoft Azure and Google Firebase
		- strong background in Python and databases
		- strong background in full-stack mobile development and object oriented programming (Android, iOS)
	- Roles:
		- SCRUM Master / AGILE Coach
		- Will develop and design Computer Vision model 3 used to identify people who comes in and out with partner Zuhab Wasim (back-end)
		- Partner and TA Correspondent
 - Brian Quach
    - Weaknesses
		- no experience with AI/ML
		- no experience with firebase
		- no experience with Rasberry Pi
	- Strengths:
		- experience with python
		- experience with full-stack development
		- experience with databases
	- Roles:
		- Will design and develop computer vision model 1 with Rooney and Saim
 - Jingyuan Rooney Gao
   - Weaknesses
      - Lack of experience with Firebase
      - Lack of experience with Rasberry Pi or RTSP stream
      - Lack of experience in Front-End 
   - Strengths:
      - Good foundation in Python
      - Understand and learning ML concepts 
      - Experience with databases
   
   - Roles: 
      - Will design and develop one of the computer vision model with Brian Quach and Saim (back-end dev)

 - Jimmy Tan
 	- Weaknesses:
		- Lack of experience in a larger team
		- Lack of extensive experience with AI/ML
		- Lack of experience in a SCRUM environment.
	- Strengths: 
		- Experience with firebase, which the project is currently using.
		- Strong background in Python
		- Experience with microsoft azure custom vision
	- Role: 
		- Will design and develop computer vision model 2 with Frederick Yao, this consists of researching on the topic of detecting humans moving "in" and moving "out" and then developing the model, in a method which is different from model 1 and 2. 
 
 - Frederick Yao
    - Weaknesses:
		- Lack of experience in a larger team
		- Lack of extensive experience with AI/ML
		- Lack of experience in a SCRUM environment.
	- Strengths: 
		- Experience with firebase, which the project is currently using.
		- Background in Python
		- Experience with microsoft azure custom vision
	- Role: 
		- Will design and develop computer vision model 2 with Jimmy Tang, this consists of researching on the topic of detecting humans moving "in" and moving "out" and then developing the model, in a method which is different from model 1 and 2. 

#### Team Rules

Describe your team's working culture.

Communications:
* As a team, we will meet on Thursdays after 3:00 PM before the meeting with Zach at school (Bahen).  After this meeting as a team, we will meet our project partner.
 * We will be meeting with our project partner weekly on Thursdays at 5:30pm at a pre-arranged location for the week that will be decided over slack or email with the project partner.
     * Meetings alternate every week with one week in person and one week online through Slack/Discord
     * For the online meeting, the application will be decided on Slack beforehand.
 * Our process for communicating with our partner involves talking over slack during the week and during our weekly meetings on Thursday.  On thursday, we will talk about our progress, our next steps and what requirements we need from him (Update our partner on the progress).  During the week, we will message him on Slack if anything is needed.
 
 
Meetings:
 * The SCRUM Master / AGILE coach will keep track of each members attendance and missed meeting catch up, acting as the moderator of the meetings.
 * If a member cannot attend, they will have to provide a reason why they could not attend, and the steps they'll take to get up to speed on what they missed in the meeting. The partner(s) of the absentee will then be responsible for filling in the individual on what happened in the meeting.
 * Partners will send meeting delegates, attending by proxy if they are absent.
 * If a person misses 2 meetings without exceptional circumstances and/or misses 2 action items deadlines (milestones), further escalation will be taken (explained below in conflict resolution).
 
Conflict Resolution:
 * Scenarios:
 * 1) Refusing to communicate
     * In this scenario, the group will attempt to confront the person(s) in person and try to resolve why there is a lack of communication in a respectful manner.  If we cannot resolve it in person, we will go to the course adminstration for further action.
 * 2) Missed milestone
     * In the scenario, we will call a snap group meeting and try to figure out why its going on, and to determine why the milestone was missed, if they need any help, and if the milestone is within the persons' scope.  If we cannot resolve this, we can decide to tackle the missed milestone as a group, or we will go to the course adminstration for further action.
 * 3) Difference in progress between groups
     * In this scenario, the groups that are ahead can decide to help the groups behind.  If it is an issue, we can redistribute the work and assign people to help out the groups that are behind.
 * 4) One member is being too controlling
     * In this scenario, the other members of the group should respectully discuss the dynamic with the person.  If the behaviour is consistent, the problem will be escalated to course adminstration.
 * 5) Two group members have personal issues between each other
     * In this scenario, the rest of the group / SCRUM master should act as mediator and try to find the resolution.  If a resolution cannot be reached, the scrum master will act as the arbitrator.  If there is a conflict of interest, course adminstration will be brought in.
 * 6) All groups experience signifcant setbacks or show a lack of progess
     * For this case, a discussion should be initiated as soon as possible to discuss a change in scope relating the work. We will look to see if we can merge groups and requirements to ensure something is delivered such as creating fewer models.  If this cannot be resolved, we will either discuss it with adminstration or change the MVP of the project.


#### Events

Describe meetings (and other events) you are planning to have:
Events: 
 * 1) Weekly Meetings after 3PM before partner meeting:
     * When: 3:00PM - 5:00 PM
     * Where: Bahen 2nd floor or 3rd floor
     * Recurring: Every thursday of every week
     * In person or online: In person
     * Purpose: Code reviews, progress updates, SCRUM / AGILE, resolve blockers, reallocation of resources, planning on what to discuss with partner, SPRINT planning, weekly sync
* 2) Weekly Meetings with Project Partner at 5:30 PM:
    * When: 5:30PM - 7:00 PM (Approximately)
     * Where: Will be decided on Slack during the week beforehand
     * Recurring: Every thursday of every week
     * In person or online: In person one week, online one week, rotates
     * Purpose: Progress updates, requirement updates, future plans, issue resolving, additional assistance if needed
* 3) Team socials (Dinners, etc)
    * Occcurs throughout the week depending on the members
     

#### Partner Meetings
You must have at least 2 meetings with your project partner - an initial planning meeting and a document review meeting. Describe the meetings here:

*Meeting 1*
* When and where?
    * Was on Thursday October 10th, 2019, and at the Bampot Tea House on Bathurst and Harbord. The meeting was approximately 2 hours in length. 
* What did you discuss during the meeting (**note you must have meeting minutes**)?
    * The schedule for the meeting was as follows:
    * Introductions with everyone and insight into the Chalmer's history and goals.
    * Discussed possible meeting schedules and structure of each meeting that aligns with the partner's schedule.
    * Asked questions related to what the project will be about and what the project specifies. Also asked questions to properly cast the project in terms of action goals and deliverables as dicussed in the course.
    * Discussed the tech stack of the project pros and cons of possible implementations and general plans of actions.
* What were the outcomes of each meeting?
    * Finalized our method of communication with the partner and group. That being mainly slack and email.
    * Scheduled our next meeting with our partner (will occur on Thursday afternoon). Also finalized our schedule with meeting the partner on sunday or thursday weekly meetings, alternating in online and inperson.
    * Learned the responsibility of our group and what we are solving in the general scope of the problem. 
    * Learned the specific requirements of the project and the tech stack that is needed for it.

*Meeting 2*
* When and where?
    * Occured on Thursday October 17th, 2019 and happened at _______.
* What did you discuss during the meeting (**note you must have meeting minutes**)?
* What were the outcomes of each meeting?


#### Artifacts

List/describe the artifacts you will produce in order to organize your team.       
* Zenhub will be used to keep track of what needs to get done, and will be used to assign tasks to team members.  Zenhub is a free AGILE project management application directly on github.
* We will prioritize tasks by when they are due / need to be displayed.
* We will create a schedule using google docs or something similar to manage when all project deadlines should be due.

----
### Highlights
**Note this section is optional**
YOUR ANSWER GOES HERE ...

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product plan.
