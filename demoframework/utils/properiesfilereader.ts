var PropertiesReader = require('properties-reader');

export class PropertiesFileReader {

    properties: any;

    // constructor(filePath: String) {
    //     this.properties = PropertiesReader(filePath)
    // }
    constructor(filePath: string) {
        this.properties = PropertiesReader(filePath)
    }
    propertiesFileData(keyValue: string): string {
        var propertyValue = this.properties.get(keyValue);
        console.log(propertyValue);

        return propertyValue.toString()


    }

}
