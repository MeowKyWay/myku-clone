import { InvokeCommandOutput } from "@aws-sdk/client-lambda";

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

        input.Attributes.forEach(element => {
            attributes[element.Name] = element.Value;
        });
    
        const { Attributes, ...rest } = input;

        this.doSomething(Attributes)

        return {
            Attributes: attributes,
            ...rest
        };
    };

    static convertAttributesObjectArray = <T extends ObjectWithAttributesArray>(input: T[]) => {
        return input.map((item) => this.convertAttributesArray(item));
    }

    static lambdaDecode = (response: InvokeCommandOutput) => {
        const decoder = new TextDecoder('utf-8');
        const payload = JSON.parse(decoder.decode(response.Payload));
        const body = JSON.parse(payload.body);
        return body;
    }

    static doSomething = (attributes: Attribute[]) => {
        return attributes;
    }
    
}