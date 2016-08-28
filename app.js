var alexa = require('alexa-app');
var app = new alexa.app('alexa-rutgers-bus');

app.launch((req, res)=>{
  res.say('Carlin is cooler than Toni').reprompt('Hi I\'m Alexa.').shouldEndSession(false);
});

app.error = (exception, req, res)=>{
  console.log(exception);
  res.say('Sorry something happened: ' + error.message );
};

app.intent('sayNumber', {
  "slots": { "number":"NUMBER" },
  "utterances":[
    "say the number {1-100|number}",
    "give me the number {1-100|number}",
    "tell me the number {1-100|number}"
  ]}, (req, res)=>{
    var number = req.slot('number');
    res.say("You wanted number " + number);
  }
);

module.exports = app;
