/* tslint:disable */
/* eslint-disable */
/**
 * Javis smart stock analysis API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1LoginResponse
 */
export interface V1LoginResponse {
    /**
     * 
     * @type {boolean}
     * @memberof V1LoginResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1LoginResponse
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof V1LoginResponse
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof V1LoginResponse
     */
    errorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof V1LoginResponse
     */
    accessToken?: string;
}

/**
 * Check if a given object implements the V1LoginResponse interface.
 */
export function instanceOfV1LoginResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1LoginResponseFromJSON(json: any): V1LoginResponse {
    return V1LoginResponseFromJSONTyped(json, false);
}

export function V1LoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1LoginResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
    };
}

export function V1LoginResponseToJSON(value?: V1LoginResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'status': value.status,
        'errorMessage': value.errorMessage,
        'errorCode': value.errorCode,
        'accessToken': value.accessToken,
    };
}

