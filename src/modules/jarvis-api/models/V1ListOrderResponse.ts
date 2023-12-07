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
import type { V1Order } from './V1Order';
import {
    V1OrderFromJSON,
    V1OrderFromJSONTyped,
    V1OrderToJSON,
} from './V1Order';

/**
 * 
 * @export
 * @interface V1ListOrderResponse
 */
export interface V1ListOrderResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListOrderResponse
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListOrderResponse
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof V1ListOrderResponse
     */
    totalCount?: string;
    /**
     * 
     * @type {Array<V1Order>}
     * @memberof V1ListOrderResponse
     */
    entries?: Array<V1Order>;
}

/**
 * Check if a given object implements the V1ListOrderResponse interface.
 */
export function instanceOfV1ListOrderResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListOrderResponseFromJSON(json: any): V1ListOrderResponse {
    return V1ListOrderResponseFromJSONTyped(json, false);
}

export function V1ListOrderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListOrderResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(V1OrderFromJSON)),
    };
}

export function V1ListOrderResponseToJSON(value?: V1ListOrderResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offset': value.offset,
        'limit': value.limit,
        'totalCount': value.totalCount,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(V1OrderToJSON)),
    };
}

