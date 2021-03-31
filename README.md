# Record-Review

## Overview

**Record Review** is RESTful web application where users review albums.  Users can review albums added to the site by themselves or by other users.


<br>

## MVP

- RESTful web application
- Full CRUD back-end and front-end
- User Authorization
- Full Review functionality


<br>

### Goals

- Create Ruby on Rails back-end to efficiently make API calls
- Create full user authorization
- Create fully functioning React front-end
- Succesfully deploy both back-end and front-end

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front End Framework |
|   React Router   | allow inter page linking and routing for front end |
| Axios |Allows for backend-frontend communication ie API calls|
|     Ruby on Rails     | Back End Framework |
|  bcrypt/jwt  | User authorization setup |

<br>

### Client (Front End)

#### Wireframes


[Wireframes](https://lucid.app/lucidchart/e3702673-6fa2-46fd-897c-a87d9504f0c2/edit?beaconFlowId=6026D460006C0540&page=0_0#)


#### Component Tree


[Component Tree](https://whimsical.com/p4-TcUCFP4VvwiU3JnzTzLQb5)

#### Component Architecture



``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ containers/
            |__ AlbumsContainer.jsx
            |__ ReviewsContainer.jsx
            |__ SignIn.jsx
            |__ SignUp.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ albums.js
      |__ reviews.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create backend/Database  |    H     |     3 hrs      |     0 hrs     |   TBD    |
| Models |    H     |     1 hr      |     0 hrs     |     TBD     |    
| Controllers |   H     |     1 hr  |     0 hrs       |     TBD   |
| Routes |    H     |     1 hr      |     0 hrs     |     TBD     | 
| Full Crud Back-End |    H     |     3 hrs      |     0 hrs     |     TBD     | 
| Structuring React Components|    H     |     3 hrs      |     0 hrs     |     TBD     |
| React Routes/Links |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Full Crud Front-End |    H     |     4 hrs      |     0 hrs     |     TBD     | 
| Styling/CSS |    H     |     6 hrs      |     0 hrs     |     TBD     | 
| TOTAL               |    H     |     31 hrs      |    0 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD](https://app.diagrams.net/#G1Pjwc22rUPlm2dJusVYo0kLq2cufKmRdc)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
