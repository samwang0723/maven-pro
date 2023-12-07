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
import type { V1ListDailyCloseSearchParams } from './V1ListDailyCloseSearchParams';
import {
    V1ListDailyCloseSearchParamsFromJSON,
    V1ListDailyCloseSearchParamsFromJSONTyped,
    V1ListDailyCloseSearchParamsToJSON,
} from './V1ListDailyCloseSearchParams';

/**
 * 
 * @export
 * @interface V1ListDailyCloseRequest
 */
export interface V1ListDailyCloseRequest {
    /**
     * 
     * @type {number}
     * @memberof V1ListDailyCloseRequest
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListDailyCloseRequest
     */
    limit?: number;
    /**
     * 
     * @type {V1ListDailyCloseSearchParams}
     * @memberof V1ListDailyCloseRequest
     */
    searchParams?: V1ListDailyCloseSearchParams;
}

/**
 * Check if a given object implements the V1ListDailyCloseRequest interface.
 */
export function instanceOfV1ListDailyCloseRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListDailyCloseRequestFromJSON(json: any): V1ListDailyCloseRequest {
    return V1ListDailyCloseRequestFromJSONTyped(json, false);
}

export function V1ListDailyCloseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListDailyCloseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'searchParams': !exists(json, 'searchParams') ? undefined : V1ListDailyCloseSearchParamsFromJSON(json['searchParams']),
    };
}

export function V1ListDailyCloseRequestToJSON(value?: V1ListDailyCloseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offset': value.offset,
        'limit': value.limit,
        'searchParams': V1ListDailyCloseSearchParamsToJSON(value.searchParams),
    };
}

