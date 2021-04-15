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


<br>

### Server (Back End)

#### ERD Model

[ERD](https://app.diagrams.net/#G1Pjwc22rUPlm2dJusVYo0kLq2cufKmRdc)
<br>

***

## Post-MVP

- Create the ability for users to like others reviews
- Create an aggregrate rating system where users can rate each album
- Create youtube player functionality within app to listen to each album

***


