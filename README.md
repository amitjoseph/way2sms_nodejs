# Way2sms Nodejs
## Internal Functioms
```
auth = way2smsAuth(<userid>,<password>)
//this returns the Auth Token

sendsms(auth,<to_number>,<message>);
//this is used to send the message
```

###Use with Promise 

```
way2smsAuth(<userid>,<password>).then(auth => {sendsms(auth,<to_number>,<message>);});
```
