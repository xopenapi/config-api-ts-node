export * from './configApi';
import { ConfigApi } from './configApi';
export * from './configGroupApi';
import { ConfigGroupApi } from './configGroupApi';
export * from './configTemplateApi';
import { ConfigTemplateApi } from './configTemplateApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [ConfigApi, ConfigGroupApi, ConfigTemplateApi];
