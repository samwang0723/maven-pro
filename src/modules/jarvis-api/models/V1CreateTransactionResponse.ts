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
 * @interface V1CreateTransactionResponse
 */
export interface V1CreateTransactionResponse {
    /**
     * 
     * @type {boolean}
     * @memberof V1CreateTransactionResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof V1CreateTransactionResponse
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof V1CreateTransactionResponse
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateTransactionResponse
     */
    errorCode?: string;
}

/**
 * Check if a given object implements the V1CreateTransactionResponse interface.
 */
export function instanceOfV1CreateTransactionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CreateTransactionResponseFromJSON(json: any): V1CreateTransactionResponse {
    return V1CreateTransactionResponseFromJSONTyped(json, false);
}

export function V1CreateTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateTransactionResponse {
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

export function V1CreateTransactionResponseToJSON(value?: V1CreateTransactionResponse | null): any {
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

