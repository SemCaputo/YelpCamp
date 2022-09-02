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


Create an account on  Cloudinary:
- https://cloudinary.com/
Create an account on  MapBox:
- https://www.mapbox.com/


Create an .env file in the main directory:
- add the following with your personal details from Cloudinary and MapBox
CLOUDINARY_CLOUD_NAME=[Cloud Name]
CLOUDINARY_KEY=[API Key]
CLOUDINARY_SECRET=[API Secret]
MAPBOX_TOKEN = [Default public token]

Install dependencies:
npm install

Running locally
- run the command mongod in a terminal window

- [First time only: in a separate window select the folder with the project and run command node seeds/index.js]. This wil seed the databse with 300 randomly named Campgrounds.

- in a separate terminal window select the folder with the project and run the command node app.js

Then go to localhost:3000



Built With:

   -   "@mapbox/mapbox-sdk": "^0.13.4",
   -   "cloudinary": "^1.30.1",
   -   "connect-flash": "^0.1.1",
   -   "connect-mongo": "^3.2.0",
   -   "dotenv": "^16.0.1",
   -   "ejs": "^3.1.8",
   -   "ejs-mate": "^4.0.0",
   -   "express": "^4.18.1",
   -   "express-mongo-sanitize": "^2.2.0",
   -   "express-session": "^1.17.3",
   -   "heroku": "^7.63.0",
   -   "joi": "^17.6.0",
   -   "method-override": "^3.0.0",
   -   "mongoose": "^6.5.0",
   -   "morgan": "^1.10.0",
   -   "multer": "^1.4.5-lts.1",
   -   "multer-storage-cloudinary": "^4.0.0",
   -   "passport": "^0.6.0",
   -   "passport-local": "^1.0.0",
   -   "passport-local-mongoose": "^7.1.2",
   -   "sanitize-html": "^2.7.1"

