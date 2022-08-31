const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelper')
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Database Connected')
});

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});
    // const c = new Campground({ title: 'Purple Field' });
    // await c.save();
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '630340045e4ce3059829ac9f',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis optio recusandae architecto error aperiam dolorum consequuntur, tenetur vero animi in similique, voluptas, autem necessitatibus nam magni incidunt ullam? Nesciunt, expedita?',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dkxslbo7v/image/upload/v1661348818/YelpCamp/pfelknpyrpr7i4s9oxnf.avif',
                    filename: 'YelpCamp/pfelknpyrpr7i4s9oxnf',
                },
                {
                    url: 'https://res.cloudinary.com/dkxslbo7v/image/upload/v1661348800/YelpCamp/d6n1jg5bp8fgvszzp6ri.avif',
                    filename: 'YelpCamp/d6n1jg5bp8fgvszzp6ri',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})
