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

export class UpdateConfigReq {
    /**
    * 配置ID
    */
    'id'?: string;
    /**
    * json格式的键值对数据
    */
    'value'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return UpdateConfigReq.attributeTypeMap;
    }
}

