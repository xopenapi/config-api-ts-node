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

export class CreateConfigReq {
    /**
    * 资源ID
    */
    'resourceId'?: string;
    /**
    * 组ID
    */
    'groupId'?: string;
    /**
    * 模版ID
    */
    'templateId'?: string;
    /**
    * 对应的字段名
    */
    'key'?: string;
    /**
    * json格式的键值对数据
    */
    'value'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string"
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return CreateConfigReq.attributeTypeMap;
    }
}

