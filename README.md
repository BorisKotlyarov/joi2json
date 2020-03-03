# Joi to JSON converter #
This is a simple utility that converts a Joi schema to JSON format.

## Example ##

```javascript
const j2j = require('joitojson');
const Joi = require('@hapi/joi');


const schema = Joi.object({
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: true}}).lowercase().required(),
    details: Joi.object({
        firstName: Joi.string(),
        secondName: Joi.string()
    })
});



console.log(j2j(schema)) 

/*
result 
    {
        "email": "STRING",
         "details": "{




```

