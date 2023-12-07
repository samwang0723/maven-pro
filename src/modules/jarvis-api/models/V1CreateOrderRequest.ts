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
 * @interface V1CreateOrderRequest
 */
export interface V1CreateOrderRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateOrderRequest
     */
    orderType?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateOrderRequest
     */
    stockID?: string;
    /**
     * 
     * @type {number}
     * @memberof V1CreateOrderRequest
     */
    tradePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof V1CreateOrderRequest
     */
    quantity?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateOrderRequest
     */
    exchangeDate?: string;
}

/**
 * Check if a given object implements the V1CreateOrderRequest interface.
 */
export function instanceOfV1CreateOrderRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CreateOrderRequestFromJSON(json: any): V1CreateOrderRequest {
    return V1CreateOrderRequestFromJSONTyped(json, false);
}

export function V1CreateOrderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CreateOrderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderType': !exists(json, 'orderType') ? undefined : json['orderType'],
        'stockID': !exists(json, 'stockID') ? undefined : json['stockID'],
        'tradePrice': !exists(json, 'tradePrice') ? undefined : json['tradePrice'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'exchangeDate': !exists(json, 'exchangeDate') ? undefined : json['exchangeDate'],
    };
}

export function V1CreateOrderRequestToJSON(value?: V1CreateOrderRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderType': value.orderType,
        'stockID': value.stockID,
        'tradePrice': value.tradePrice,
        'quantity': value.quantity,
        'exchangeDate': value.exchangeDate,
    };
}

