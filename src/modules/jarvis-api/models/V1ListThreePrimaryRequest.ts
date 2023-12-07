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
import type { V1ListThreePrimarySearchParams } from './V1ListThreePrimarySearchParams';
import {
    V1ListThreePrimarySearchParamsFromJSON,
    V1ListThreePrimarySearchParamsFromJSONTyped,
    V1ListThreePrimarySearchParamsToJSON,
} from './V1ListThreePrimarySearchParams';

/**
 * 
 * @export
 * @interface V1ListThreePrimaryRequest
 */
export interface V1ListThreePrimaryRequest {
    /**
     * 
     * @type {number}
     * @memberof V1ListThreePrimaryRequest
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListThreePrimaryRequest
     */
    limit?: number;
    /**
     * 
     * @type {V1ListThreePrimarySearchParams}
     * @memberof V1ListThreePrimaryRequest
     */
    searchParams?: V1ListThreePrimarySearchParams;
}

/**
 * Check if a given object implements the V1ListThreePrimaryRequest interface.
 */
export function instanceOfV1ListThreePrimaryRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListThreePrimaryRequestFromJSON(json: any): V1ListThreePrimaryRequest {
    return V1ListThreePrimaryRequestFromJSONTyped(json, false);
}

export function V1ListThreePrimaryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListThreePrimaryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'searchParams': !exists(json, 'searchParams') ? undefined : V1ListThreePrimarySearchParamsFromJSON(json['searchParams']),
    };
}

export function V1ListThreePrimaryRequestToJSON(value?: V1ListThreePrimaryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offset': value.offset,
        'limit': value.limit,
        'searchParams': V1ListThreePrimarySearchParamsToJSON(value.searchParams),
    };
}

