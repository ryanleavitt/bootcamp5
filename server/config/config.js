//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://ryan.leavitt:password124@ds145121.mlab.com:45121/ryan_leavitt_bootcamp3',//'mongodb://ryan.leavitt:b73fPrVQkyrQdT3@ds145121.mlab.com:45121/ryan_leavitt_bootcamp3', //place the URI of your mongo database here.
  },
    port: process.env.Port || 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */