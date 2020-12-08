export * from './batchRetrieveByKeysReq';
export * from './batchRetrieveByResourcesReq';
export * from './batchRetrieveConfigTemplateByKeysReq';
export * from './batchRetrieveConfigTemplatesByGroupRsp';
export * from './batchRetrieveConfigTemplatesByKeysRsp';
export * from './batchRetrieveConfigTemplatesRsp';
export * from './batchRetrieveConfigsByKeysRsp';
export * from './batchRetrieveConfigsRsp';
export * from './config';
export * from './configGroup';
export * from './configTemplate';
export * from './createConfigGroupReq';
export * from './createConfigGroupRsp';
export * from './createConfigReq';
export * from './createConfigRsp';
export * from './createConfigTemplateReq';
export * from './createConfigTemplateRsp';
export * from './cursorConfigGroupsRsp';
export * from './cursorConfigGroupsRspData';
export * from './cursorConfigTemplatesRsp';
export * from './cursorConfigTemplatesRspData';
export * from './cursorConfigsRsp';
export * from './cursorConfigsRspData';
export * from './cursorExtra';
export * from './cursorQuery';
export * from './deleteRsp';
export * from './getConfigGroupRsp';
export * from './getConfigGroupsRsp';
export * from './getConfigRsp';
export * from './getConfigTemplateRsp';
export * from './idsReq';
export * from './inlineResponse200';
export * from './pageConfigGroupsRsp';
export * from './pageConfigGroupsRspData';
export * from './pageConfigTemplatesRsp';
export * from './pageConfigTemplatesRspData';
export * from './pageConfigsRsp';
export * from './pageConfigsRspData';
export * from './pageQuery';
export * from './retrieveConfigByKeyReq';
export * from './retrieveConfigByKeyRsp';
export * from './retrieveConfigGroupByNameRsp';
export * from './retrieveConfigTemplateByKeyRsp';
export * from './sortSpec';
export * from './updateConfigGroupReq';
export * from './updateConfigGroupRsp';
export * from './updateConfigReq';
export * from './updateConfigRsp';
export * from './updateConfigTemplateReq';
export * from './updateConfigTemplateRsp';

import localVarRequest = require('request');

import { BatchRetrieveByKeysReq } from './batchRetrieveByKeysReq';
import { BatchRetrieveByResourcesReq } from './batchRetrieveByResourcesReq';
import { BatchRetrieveConfigTemplateByKeysReq } from './batchRetrieveConfigTemplateByKeysReq';
import { BatchRetrieveConfigTemplatesByGroupRsp } from './batchRetrieveConfigTemplatesByGroupRsp';
import { BatchRetrieveConfigTemplatesByKeysRsp } from './batchRetrieveConfigTemplatesByKeysRsp';
import { BatchRetrieveConfigTemplatesRsp } from './batchRetrieveConfigTemplatesRsp';
import { BatchRetrieveConfigsByKeysRsp } from './batchRetrieveConfigsByKeysRsp';
import { BatchRetrieveConfigsRsp } from './batchRetrieveConfigsRsp';
import { Config } from './config';
import { ConfigGroup } from './configGroup';
import { ConfigTemplate } from './configTemplate';
import { CreateConfigGroupReq } from './createConfigGroupReq';
import { CreateConfigGroupRsp } from './createConfigGroupRsp';
import { CreateConfigReq } from './createConfigReq';
import { CreateConfigRsp } from './createConfigRsp';
import { CreateConfigTemplateReq } from './createConfigTemplateReq';
import { CreateConfigTemplateRsp } from './createConfigTemplateRsp';
import { CursorConfigGroupsRsp } from './cursorConfigGroupsRsp';
import { CursorConfigGroupsRspData } from './cursorConfigGroupsRspData';
import { CursorConfigTemplatesRsp } from './cursorConfigTemplatesRsp';
import { CursorConfigTemplatesRspData } from './cursorConfigTemplatesRspData';
import { CursorConfigsRsp } from './cursorConfigsRsp';
import { CursorConfigsRspData } from './cursorConfigsRspData';
import { CursorExtra } from './cursorExtra';
import { CursorQuery } from './cursorQuery';
import { DeleteRsp } from './deleteRsp';
import { GetConfigGroupRsp } from './getConfigGroupRsp';
import { GetConfigGroupsRsp } from './getConfigGroupsRsp';
import { GetConfigRsp } from './getConfigRsp';
import { GetConfigTemplateRsp } from './getConfigTemplateRsp';
import { IdsReq } from './idsReq';
import { InlineResponse200 } from './inlineResponse200';
import { PageConfigGroupsRsp } from './pageConfigGroupsRsp';
import { PageConfigGroupsRspData } from './pageConfigGroupsRspData';
import { PageConfigTemplatesRsp } from './pageConfigTemplatesRsp';
import { PageConfigTemplatesRspData } from './pageConfigTemplatesRspData';
import { PageConfigsRsp } from './pageConfigsRsp';
import { PageConfigsRspData } from './pageConfigsRspData';
import { PageQuery } from './pageQuery';
import { RetrieveConfigByKeyReq } from './retrieveConfigByKeyReq';
import { RetrieveConfigByKeyRsp } from './retrieveConfigByKeyRsp';
import { RetrieveConfigGroupByNameRsp } from './retrieveConfigGroupByNameRsp';
import { RetrieveConfigTemplateByKeyRsp } from './retrieveConfigTemplateByKeyRsp';
import { SortSpec } from './sortSpec';
import { UpdateConfigGroupReq } from './updateConfigGroupReq';
import { UpdateConfigGroupRsp } from './updateConfigGroupRsp';
import { UpdateConfigReq } from './updateConfigReq';
import { UpdateConfigRsp } from './updateConfigRsp';
import { UpdateConfigTemplateReq } from './updateConfigTemplateReq';
import { UpdateConfigTemplateRsp } from './updateConfigTemplateRsp';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "BatchRetrieveByKeysReq": BatchRetrieveByKeysReq,
    "BatchRetrieveByResourcesReq": BatchRetrieveByResourcesReq,
    "BatchRetrieveConfigTemplateByKeysReq": BatchRetrieveConfigTemplateByKeysReq,
    "BatchRetrieveConfigTemplatesByGroupRsp": BatchRetrieveConfigTemplatesByGroupRsp,
    "BatchRetrieveConfigTemplatesByKeysRsp": BatchRetrieveConfigTemplatesByKeysRsp,
    "BatchRetrieveConfigTemplatesRsp": BatchRetrieveConfigTemplatesRsp,
    "BatchRetrieveConfigsByKeysRsp": BatchRetrieveConfigsByKeysRsp,
    "BatchRetrieveConfigsRsp": BatchRetrieveConfigsRsp,
    "Config": Config,
    "ConfigGroup": ConfigGroup,
    "ConfigTemplate": ConfigTemplate,
    "CreateConfigGroupReq": CreateConfigGroupReq,
    "CreateConfigGroupRsp": CreateConfigGroupRsp,
    "CreateConfigReq": CreateConfigReq,
    "CreateConfigRsp": CreateConfigRsp,
    "CreateConfigTemplateReq": CreateConfigTemplateReq,
    "CreateConfigTemplateRsp": CreateConfigTemplateRsp,
    "CursorConfigGroupsRsp": CursorConfigGroupsRsp,
    "CursorConfigGroupsRspData": CursorConfigGroupsRspData,
    "CursorConfigTemplatesRsp": CursorConfigTemplatesRsp,
    "CursorConfigTemplatesRspData": CursorConfigTemplatesRspData,
    "CursorConfigsRsp": CursorConfigsRsp,
    "CursorConfigsRspData": CursorConfigsRspData,
    "CursorExtra": CursorExtra,
    "CursorQuery": CursorQuery,
    "DeleteRsp": DeleteRsp,
    "GetConfigGroupRsp": GetConfigGroupRsp,
    "GetConfigGroupsRsp": GetConfigGroupsRsp,
    "GetConfigRsp": GetConfigRsp,
    "GetConfigTemplateRsp": GetConfigTemplateRsp,
    "IdsReq": IdsReq,
    "InlineResponse200": InlineResponse200,
    "PageConfigGroupsRsp": PageConfigGroupsRsp,
    "PageConfigGroupsRspData": PageConfigGroupsRspData,
    "PageConfigTemplatesRsp": PageConfigTemplatesRsp,
    "PageConfigTemplatesRspData": PageConfigTemplatesRspData,
    "PageConfigsRsp": PageConfigsRsp,
    "PageConfigsRspData": PageConfigsRspData,
    "PageQuery": PageQuery,
    "RetrieveConfigByKeyReq": RetrieveConfigByKeyReq,
    "RetrieveConfigByKeyRsp": RetrieveConfigByKeyRsp,
    "RetrieveConfigGroupByNameRsp": RetrieveConfigGroupByNameRsp,
    "RetrieveConfigTemplateByKeyRsp": RetrieveConfigTemplateByKeyRsp,
    "SortSpec": SortSpec,
    "UpdateConfigGroupReq": UpdateConfigGroupReq,
    "UpdateConfigGroupRsp": UpdateConfigGroupRsp,
    "UpdateConfigReq": UpdateConfigReq,
    "UpdateConfigRsp": UpdateConfigRsp,
    "UpdateConfigTemplateReq": UpdateConfigTemplateReq,
    "UpdateConfigTemplateRsp": UpdateConfigTemplateRsp,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
