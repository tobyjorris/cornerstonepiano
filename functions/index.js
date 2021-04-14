const functions = require("firebase-functions");
const axios = require("axios");
const mailgun = require("mailgun-js");

exports.checkRecaptcha = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("success");
  } else {
    if (!req.query.token) {
      res.status(400).send({error: 'Failed to receive reCaptcha token'})
    }else {
      const userToken = req.query.token;
      const config = {
        method: "post",
        url: `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_CAPTCHA_SECRET_KEY}&response=${userToken}`,
      };
      axios(config)
          .then( (response) => {
            if (response.data.score <= '0.5') {
              res.status(401).send({error: 'Sorry, looks like you might be a robot! Please try again'})
            } else if (response.data.score > '0.5') {
              const data = {
                from: 'Cornerstone Piano <cornerstonepiano@contact.com>',
                to: 'tobyjorris@gmail.com',
                subject: `New Contact Form Submission - ${req.query.name}`,
                html: `
                <ul>
                    <li>Name: ${req.query.name}</li>
                    <li>Email: ${req.query.email}</li>
                    <li>Phone Number: ${req.query.phone}</li>
                    <li>Preferred Method of Contact: ${req.query.contactMethod}</li>
                    <li>How They Heard About You: ${req.query.referralSource}</li>
                </ul>              
              `
              }
              const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})
              mg.messages().send(data, function (error, body) {
                if (error) {
                  res.status(500).send({error: 'Error in Mailgun API'})
                } else {
                  res.status(200).send({message: 'Contact Form Submitted Successfully'})
                }
              })
            }
          })
          .catch((error) => {
            res.status(500).send({error: 'Error in call to reCaptcha Verification'})
            console.log(error);
          });
    }

  }
});

