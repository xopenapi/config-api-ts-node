/**
 * 配置服务API
 * 配置服务API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { ConfigTemplate } from './configTemplate';

export class BatchRetrieveConfigTemplatesByKeysResponse {
    'code'?: number;
    'msg'?: string;
    'data'?: Array<ConfigTemplate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ConfigTemplate>"
        }    ];

    static getAttributeTypeMap() {
        return BatchRetrieveConfigTemplatesByKeysResponse.attributeTypeMap;
    }
}

