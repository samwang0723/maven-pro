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
 * @interface V1ListStockSearchParams
 */
export interface V1ListStockSearchParams {
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ListStockSearchParams
     */
    stockIDs?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1ListStockSearchParams
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListStockSearchParams
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListStockSearchParams
     */
    category?: string;
}

/**
 * Check if a given object implements the V1ListStockSearchParams interface.
 */
export function instanceOfV1ListStockSearchParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListStockSearchParamsFromJSON(json: any): V1ListStockSearchParams {
    return V1ListStockSearchParamsFromJSONTyped(json, false);
}

export function V1ListStockSearchParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListStockSearchParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stockIDs': !exists(json, 'stockIDs') ? undefined : json['stockIDs'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'category': !exists(json, 'category') ? undefined : json['category'],
    };
}

export function V1ListStockSearchParamsToJSON(value?: V1ListStockSearchParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stockIDs': value.stockIDs,
        'country': value.country,
        'name': value.name,
        'category': value.category,
    };
}

