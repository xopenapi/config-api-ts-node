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
import { ConfigGroup } from './configGroup';

export class UpdateConfigGroupRsp {
    'code'?: number;
    'msg'?: string;
    'data'?: ConfigGroup;

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
            "type": "ConfigGroup"
        }    ];

    static getAttributeTypeMap() {
        return UpdateConfigGroupRsp.attributeTypeMap;
    }
}

