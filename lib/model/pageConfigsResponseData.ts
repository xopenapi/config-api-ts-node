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
import { Config } from './config';

export class PageConfigsResponseData {
    /**
    * 页码
    */
    'pageNo'?: number;
    /**
    * 翻页大小
    */
    'pageSize'?: number;
    /**
    * 页数
    */
    'pageCount'?: number;
    /**
    * 总数量
    */
    'total'?: number;
    'content'?: Array<Config>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageNo",
            "baseName": "pageNo",
            "type": "number"
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number"
        },
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<Config>"
        }    ];

    static getAttributeTypeMap() {
        return PageConfigsResponseData.attributeTypeMap;
    }
}

