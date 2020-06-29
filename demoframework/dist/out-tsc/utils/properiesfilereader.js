"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesFileReader = void 0;
var PropertiesReader = require('properties-reader');
class PropertiesFileReader {
    // constructor(filePath: String) {
    //     this.properties = PropertiesReader(filePath)
    // }
    constructor(filePath) {
        this.properties = PropertiesReader(filePath);
    }
    propertiesFileData(keyValue) {
        var propertyValue = this.properties.get(keyValue);
        console.log(propertyValue);
        return propertyValue.toString();
    }
}
exports.PropertiesFileReader = PropertiesFileReader;
