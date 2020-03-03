# Joi to JSON converter #
This is a simple utility that converts a Joi schema to JSON format.

## install ##

```bash
npm i joi2j
```

or global
```bash
npm i -g joi2j
```


## Example ##

```javascript

const j2j = require('joi2j');
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
{
    "email": "STRING",
    "details": {
        "firstName": "STRING",
        "secondName": "STRING"
    }
}
*/
```

## CLI usage ##

```bash
j2j /path/to/schema/file.js
```
