# YelpCamp
Project completed during Web Developer Bootcamp 2022 by Colt Steele.


Yelp Camp is created to simulate a Campsite review app similar to Yelp.
Users can create their own campgrounds or review others' campgrounds.
YelpCamp is created using Node.js, Express, and MongoDB.
It has a collection of Campgrounds which have been seeded and named using Mongo DB.

The Node Modules used can be found in the package.json file included in the repository.

At the moment Yelp Camp runs locally at the address http://localhost:3000/ on your brower.



Features:
- User can create, edit and delete posts and comments
- User can search existing campgrounds by name
- Authentication
- Authorization
- User login with username and password
- User cannot manage posts without being authenticated
- User cannot edit or delete posts and comments created by other users
- Flash messages responding to users' interaction with the app
- Responsive web design



Getting Started:
Clone or download this repository
git clone https://github.com/SemCaputo/YelpCamp

Get mongoDB:
https://www.mongodb.com/
- macOS
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
- Windows 
https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328


Install dependencies:
npm install


Running locally
run the command mongod in a terminal 
run the command mongo in another terminal
run the command node app.js in another terminal with the project

Then go to localhost:3000



Built With:

ejs
Bootstrap
Nodejs
Express
mongoDB
mongoose
Passport
passport-local
passport-local-mongoose
express-session
method-override
Moment
connect-flash
Platforms
Heroku


