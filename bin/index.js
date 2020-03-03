#!/usr/bin/env node

const pjson = require('./../package.json');
const convert = require('./../');

class J2j {

    constructor() {

        let argv = process.argv.slice();
        argv.splice(0, 2);

        switch (argv[0]) {

            case new RegExp('^-(v||version)$', 'i').test(argv[0]) && argv[0]:
                this.version();
                break;

            case new RegExp('^-(h||help)$', 'i').test(argv[0]) && argv[0]:
                this.help();
                break;

            default:
                if (!argv[0]) {
                    throw new Error('Please add path to schema')
                }

                this.default(argv[0]);
        }

    }

    default(path) {
        //todo check file exist
        const schema = require(path);
        console.log(convert(schema));
    }

    version() {
        console.log(pjson.name + '@' + pjson.version);
    }

    help() {
        let helpText = `    
Example:
    j2j /path/to/schema/file.js
Commands:
    [-h] or [-help]
    Example:
         j2j -h
    
    [-v] or [-version]
    
    Example:
        j2j -v         
`;

        console.log(helpText);
    }
}

new J2j();
