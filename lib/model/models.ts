export * from './batchRetrieveByKeysReq';
export * from './batchRetrieveByResourcesReq';
export * from './batchRetrieveConfigGroupsResponse';
export * from './batchRetrieveConfigTemplateByKeysReq';
export * from './batchRetrieveConfigTemplateByKeysResponse';
export * from './batchRetrieveConfigTemplatesByGroupResponse';
export * from './batchRetrieveConfigTemplatesByKeysResponse';
export * from './batchRetrieveConfigTemplatesResponse';
export * from './batchRetrieveConfigsByKeysResponse';
export * from './batchRetrieveConfigsByResourcesResponse';
export * from './batchRetrieveConfigsResponse';
export * from './config';
export * from './configGroup';
export * from './configTemplate';
export * from './createConfigGroupReq';
export * from './createConfigGroupResponse';
export * from './createConfigReq';
export * from './createConfigResponse';
export * from './createConfigTemplateReq';
export * from './createConfigTemplateResponse';
export * from './cursorConfigGroupsResponse';
export * from './cursorConfigGroupsResponseData';
export * from './cursorConfigTemplatesResponse';
export * from './cursorConfigTemplatesResponseData';
export * from './cursorConfigsResponse';
export * from './cursorConfigsResponseData';
export * from './cursorExtra';
export * from './cursorQuery';
export * from './deleteResponse';
export * from './getConfigGroupResponse';
export * from './getConfigResponse';
export * from './getConfigTemplateResponse';
export * from './idsReq';
export * from './pageConfigGroupsResponse';
export * from './pageConfigGroupsResponseData';
export * from './pageConfigTemplatesResponse';
export * from './pageConfigTemplatesResponseData';
export * from './pageConfigsResponse';
export * from './pageConfigsResponseData';
export * from './pageQuery';
export * from './retrieveConfigByKeyReq';
export * from './retrieveConfigByKeyResponse';
export * from './retrieveConfigGroupByNameResponse';
export * from './retrieveConfigTemplateByKeyResponse';
export * from './sortSpec';
export * from './updateConfigGroupReq';
export * from './updateConfigGroupResponse';
export * from './updateConfigReq';
export * from './updateConfigResponse';
export * from './updateConfigTemplateReq';
export * from './updateConfigTemplateResponse';
export * from './upsertConfigReq';
export * from './upsertConfigResponse';

import localVarRequest = require('request');

import { BatchRetrieveByKeysReq } from './batchRetrieveByKeysReq';
import { BatchRetrieveByResourcesReq } from './batchRetrieveByResourcesReq';
import { BatchRetrieveConfigGroupsResponse } from './batchRetrieveConfigGroupsResponse';
import { BatchRetrieveConfigTemplateByKeysReq } from './batchRetrieveConfigTemplateByKeysReq';
import { BatchRetrieveConfigTemplateByKeysResponse } from './batchRetrieveConfigTemplateByKeysResponse';
import { BatchRetrieveConfigTemplatesByGroupResponse } from './batchRetrieveConfigTemplatesByGroupResponse';
import { BatchRetrieveConfigTemplatesByKeysResponse } from './batchRetrieveConfigTemplatesByKeysResponse';
import { BatchRetrieveConfigTemplatesResponse } from './batchRetrieveConfigTemplatesResponse';
import { BatchRetrieveConfigsByKeysResponse } from './batchRetrieveConfigsByKeysResponse';
import { BatchRetrieveConfigsByResourcesResponse } from './batchRetrieveConfigsByResourcesResponse';
import { BatchRetrieveConfigsResponse } from './batchRetrieveConfigsResponse';
import { Config } from './config';
import { ConfigGroup } from './configGroup';
import { ConfigTemplate } from './configTemplate';
import { CreateConfigGroupReq } from './createConfigGroupReq';
import { CreateConfigGroupResponse } from './createConfigGroupResponse';
import { CreateConfigReq } from './createConfigReq';
import { CreateConfigResponse } from './createConfigResponse';
import { CreateConfigTemplateReq } from './createConfigTemplateReq';
import { CreateConfigTemplateResponse } from './createConfigTemplateResponse';
import { CursorConfigGroupsResponse } from './cursorConfigGroupsResponse';
import { CursorConfigGroupsResponseData } from './cursorConfigGroupsResponseData';
import { CursorConfigTemplatesResponse } from './cursorConfigTemplatesResponse';
import { CursorConfigTemplatesResponseData } from './cursorConfigTemplatesResponseData';
import { CursorConfigsResponse } from './cursorConfigsResponse';
import { CursorConfigsResponseData } from './cursorConfigsResponseData';
import { CursorExtra } from './cursorExtra';
import { CursorQuery } from './cursorQuery';
import { DeleteResponse } from './deleteResponse';
import { GetConfigGroupResponse } from './getConfigGroupResponse';
import { GetConfigResponse } from './getConfigResponse';
import { GetConfigTemplateResponse } from './getConfigTemplateResponse';
import { IdsReq } from './idsReq';
import { PageConfigGroupsResponse } from './pageConfigGroupsResponse';
import { PageConfigGroupsResponseData } from './pageConfigGroupsResponseData';
import { PageConfigTemplatesResponse } from './pageConfigTemplatesResponse';
import { PageConfigTemplatesResponseData } from './pageConfigTemplatesResponseData';
import { PageConfigsResponse } from './pageConfigsResponse';
import { PageConfigsResponseData } from './pageConfigsResponseData';
import { PageQuery } from './pageQuery';
import { RetrieveConfigByKeyReq } from './retrieveConfigByKeyReq';
import { RetrieveConfigByKeyResponse } from './retrieveConfigByKeyResponse';
import { RetrieveConfigGroupByNameResponse } from './retrieveConfigGroupByNameResponse';
import { RetrieveConfigTemplateByKeyResponse } from './retrieveConfigTemplateByKeyResponse';
import { SortSpec } from './sortSpec';
import { UpdateConfigGroupReq } from './updateConfigGroupReq';
import { UpdateConfigGroupResponse } from './updateConfigGroupResponse';
import { UpdateConfigReq } from './updateConfigReq';
import { UpdateConfigResponse } from './updateConfigResponse';
import { UpdateConfigTemplateReq } from './updateConfigTemplateReq';
import { UpdateConfigTemplateResponse } from './updateConfigTemplateResponse';
import { UpsertConfigReq } from './upsertConfigReq';
import { UpsertConfigResponse } from './upsertConfigResponse';

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
    "BatchRetrieveConfigGroupsResponse": BatchRetrieveConfigGroupsResponse,
    "BatchRetrieveConfigTemplateByKeysReq": BatchRetrieveConfigTemplateByKeysReq,
    "BatchRetrieveConfigTemplateByKeysResponse": BatchRetrieveConfigTemplateByKeysResponse,
    "BatchRetrieveConfigTemplatesByGroupResponse": BatchRetrieveConfigTemplatesByGroupResponse,
    "BatchRetrieveConfigTemplatesByKeysResponse": BatchRetrieveConfigTemplatesByKeysResponse,
    "BatchRetrieveConfigTemplatesResponse": BatchRetrieveConfigTemplatesResponse,
    "BatchRetrieveConfigsByKeysResponse": BatchRetrieveConfigsByKeysResponse,
    "BatchRetrieveConfigsByResourcesResponse": BatchRetrieveConfigsByResourcesResponse,
    "BatchRetrieveConfigsResponse": BatchRetrieveConfigsResponse,
    "Config": Config,
    "ConfigGroup": ConfigGroup,
    "ConfigTemplate": ConfigTemplate,
    "CreateConfigGroupReq": CreateConfigGroupReq,
    "CreateConfigGroupResponse": CreateConfigGroupResponse,
    "CreateConfigReq": CreateConfigReq,
    "CreateConfigResponse": CreateConfigResponse,
    "CreateConfigTemplateReq": CreateConfigTemplateReq,
    "CreateConfigTemplateResponse": CreateConfigTemplateResponse,
    "CursorConfigGroupsResponse": CursorConfigGroupsResponse,
    "CursorConfigGroupsResponseData": CursorConfigGroupsResponseData,
    "CursorConfigTemplatesResponse": CursorConfigTemplatesResponse,
    "CursorConfigTemplatesResponseData": CursorConfigTemplatesResponseData,
    "CursorConfigsResponse": CursorConfigsResponse,
    "CursorConfigsResponseData": CursorConfigsResponseData,
    "CursorExtra": CursorExtra,
    "CursorQuery": CursorQuery,
    "DeleteResponse": DeleteResponse,
    "GetConfigGroupResponse": GetConfigGroupResponse,
    "GetConfigResponse": GetConfigResponse,
    "GetConfigTemplateResponse": GetConfigTemplateResponse,
    "IdsReq": IdsReq,
    "PageConfigGroupsResponse": PageConfigGroupsResponse,
    "PageConfigGroupsResponseData": PageConfigGroupsResponseData,
    "PageConfigTemplatesResponse": PageConfigTemplatesResponse,
    "PageConfigTemplatesResponseData": PageConfigTemplatesResponseData,
    "PageConfigsResponse": PageConfigsResponse,
    "PageConfigsResponseData": PageConfigsResponseData,
    "PageQuery": PageQuery,
    "RetrieveConfigByKeyReq": RetrieveConfigByKeyReq,
    "RetrieveConfigByKeyResponse": RetrieveConfigByKeyResponse,
    "RetrieveConfigGroupByNameResponse": RetrieveConfigGroupByNameResponse,
    "RetrieveConfigTemplateByKeyResponse": RetrieveConfigTemplateByKeyResponse,
    "SortSpec": SortSpec,
    "UpdateConfigGroupReq": UpdateConfigGroupReq,
    "UpdateConfigGroupResponse": UpdateConfigGroupResponse,
    "UpdateConfigReq": UpdateConfigReq,
    "UpdateConfigResponse": UpdateConfigResponse,
    "UpdateConfigTemplateReq": UpdateConfigTemplateReq,
    "UpdateConfigTemplateResponse": UpdateConfigTemplateResponse,
    "UpsertConfigReq": UpsertConfigReq,
    "UpsertConfigResponse": UpsertConfigResponse,
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
