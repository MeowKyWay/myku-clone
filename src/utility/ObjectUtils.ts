export interface ObjectWithAttributesArray{
    Attributes: {
        Name: string;
        Value: string;
    }[];
}

export interface Attribute {
    [key: string]: string;
}

export default class ObjectUtils {

    static convertAttributesArray = <T extends ObjectWithAttributesArray>(input: T) => {
        const attributes: Attribute = {};
        
        console.log(Object.keys(input));

        input.Attributes.forEach(element => {
            attributes[element.Name] = element.Value;
        });
    
        const { Attributes, ...rest } = input;

        const output = {
            Attributes: attributes,
            ...rest
        }
    
        // return {
        //     data: output as { Attribute[],  },
        // };

        // return Attributes //Just for eslint to go away
    };

    static convertAttributesObjectArray = <T extends ObjectWithAttributesArray>(input: T[]) => {
        return input.map((item) => this.convertAttributesArray(item));
    }
    
}