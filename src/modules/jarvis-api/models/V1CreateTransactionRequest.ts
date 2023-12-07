/* tslint:disable */
/* eslint-disable */
/**
 * Javis smart stock analysis API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.3
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
 * @interface V1CreateTransactionRequest
 */
export interface V1CreateTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateTransactionRequest
     */
    orderType?: string;
    /**
     * 
     * @type {number}
     * @memberof V1CreateTransactionRequest
     */
    amount?: number;
}

/**
 * Check if a given object implements the V1CreateTransactionRequest interface.
 */
export function instanceOfV1CreateTransactionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CreateTransactionRequestFromJSON(json: any): V1CreateTransactionRequest {
    return V1CreateTransactionRequestFromJSONTyped(json, false);
}

export function V1CreateTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderType': !exists(json, 'orderType') ? undefined : json['orderType'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
    };
}

export function V1CreateTransactionRequestToJSON(value?: V1CreateTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderType': value.orderType,
        'amount': value.amount,
    };
}

