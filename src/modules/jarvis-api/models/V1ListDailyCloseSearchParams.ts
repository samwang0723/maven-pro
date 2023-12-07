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
 * @interface V1ListDailyCloseSearchParams
 */
export interface V1ListDailyCloseSearchParams {
    /**
     * 
     * @type {string}
     * @memberof V1ListDailyCloseSearchParams
     */
    stockID?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListDailyCloseSearchParams
     */
    start?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListDailyCloseSearchParams
     */
    end?: string;
}

/**
 * Check if a given object implements the V1ListDailyCloseSearchParams interface.
 */
export function instanceOfV1ListDailyCloseSearchParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListDailyCloseSearchParamsFromJSON(json: any): V1ListDailyCloseSearchParams {
    return V1ListDailyCloseSearchParamsFromJSONTyped(json, false);
}

export function V1ListDailyCloseSearchParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListDailyCloseSearchParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stockID': !exists(json, 'stockID') ? undefined : json['stockID'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'end': !exists(json, 'end') ? undefined : json['end'],
    };
}

export function V1ListDailyCloseSearchParamsToJSON(value?: V1ListDailyCloseSearchParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stockID': value.stockID,
        'start': value.start,
        'end': value.end,
    };
}

