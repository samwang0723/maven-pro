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
import type { V1StakeConcentration } from './V1StakeConcentration';
import {
    V1StakeConcentrationFromJSON,
    V1StakeConcentrationFromJSONTyped,
    V1StakeConcentrationToJSON,
} from './V1StakeConcentration';

/**
 * 
 * @export
 * @interface V1GetStakeConcentrationResponse
 */
export interface V1GetStakeConcentrationResponse {
    /**
     * 
     * @type {V1StakeConcentration}
     * @memberof V1GetStakeConcentrationResponse
     */
    stakeConcentration?: V1StakeConcentration;
}

/**
 * Check if a given object implements the V1GetStakeConcentrationResponse interface.
 */
export function instanceOfV1GetStakeConcentrationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1GetStakeConcentrationResponseFromJSON(json: any): V1GetStakeConcentrationResponse {
    return V1GetStakeConcentrationResponseFromJSONTyped(json, false);
}

export function V1GetStakeConcentrationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GetStakeConcentrationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stakeConcentration': !exists(json, 'stakeConcentration') ? undefined : V1StakeConcentrationFromJSON(json['stakeConcentration']),
    };
}

export function V1GetStakeConcentrationResponseToJSON(value?: V1GetStakeConcentrationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stakeConcentration': V1StakeConcentrationToJSON(value.stakeConcentration),
    };
}

