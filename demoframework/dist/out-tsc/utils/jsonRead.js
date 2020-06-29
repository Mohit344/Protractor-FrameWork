"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonReader = void 0;
class JsonReader {
    constructor(filepath) {
        this.filepath = filepath;
    }
    readData(jsonFile) {
        'use strict';
        //get the fs module
        const fs = require('fs');
        //read the json file Synchronously
        let rawdata = fs.readFileSync(jsonFile);
        //convert into java script object
        let jsonObject = JSON.parse(rawdata);
        return jsonObject;
    }
}
exports.JsonReader = JsonReader;
// module.exports = { readData };
