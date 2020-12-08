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

export class CursorQuery {
    /**
    * 查询条件，传键值对
    */
    'filters'?: object;
    /**
    * 游标值
    */
    'cursor'?: string;
    /**
    * 排序 $ref:\"#/components/schemas/SortSpec\"
    */
    'cursorSort'?: any | null;
    /**
    * 大小
    */
    'size'?: number;
    /**
    * 查询方向，0表示游标前，1表示游标后
    */
    'direction'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filters",
            "baseName": "filters",
            "type": "object"
        },
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string"
        },
        {
            "name": "cursorSort",
            "baseName": "cursorSort",
            "type": "any"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CursorQuery.attributeTypeMap;
    }
}

