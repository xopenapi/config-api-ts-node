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

export class ConfigGroup {
    /**
    * 配置ID
    */
    'id'?: string;
    /**
    * 名称
    */
    'name'?: string;
    /**
    * 创建时间，返回时间戳
    */
    'ctime'?: number;
    /**
    * 更新时间，返回时间戳
    */
    'mtime'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ctime",
            "baseName": "ctime",
            "type": "number"
        },
        {
            "name": "mtime",
            "baseName": "mtime",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ConfigGroup.attributeTypeMap;
    }
}
