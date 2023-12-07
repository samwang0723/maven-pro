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
 * @interface V1InsertPickedStocksResponse
 */
export interface V1InsertPickedStocksResponse {
    /**
     * 
     * @type {boolean}
     * @memberof V1InsertPickedStocksResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1InsertPickedStocksResponse
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof V1InsertPickedStocksResponse
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof V1InsertPickedStocksResponse
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the V1InsertPickedStocksResponse interface.
 */
export function instanceOfV1InsertPickedStocksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1InsertPickedStocksResponseFromJSON(json: any): V1InsertPickedStocksResponse {
    return V1InsertPickedStocksResponseFromJSONTyped(json, false);
}

export function V1InsertPickedStocksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1InsertPickedStocksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
    };
}

export function V1InsertPickedStocksResponseToJSON(value?: V1InsertPickedStocksResponse | null): any {
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
    };
}

