/**
 * Locationforecast
 * Weather forecast for a specified place
 *
 * The version of the OpenAPI document: 2.0
 * Contact: weatherapi-adm@met.no
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import type { RequestArgs } from './base';
import { BaseAPI } from './base';
/**
 *
 * @export
 * @interface Forecast
 */
export interface Forecast {
    /**
     *
     * @type {ForecastMeta}
     * @memberof Forecast
     */
    'meta': ForecastMeta;
    /**
     *
     * @type {Array<ForecastTimeStep>}
     * @memberof Forecast
     */
    'timeseries': Array<ForecastTimeStep>;
}
/**
 *
 * @export
 * @interface ForecastMeta
 */
export interface ForecastMeta {
    /**
     *
     * @type {ForecastUnits}
     * @memberof ForecastMeta
     */
    'units': ForecastUnits;
    /**
     * Update time for this forecast
     * @type {string}
     * @memberof ForecastMeta
     */
    'updated_at': string;
}
/**
 * Summary of weather conditions.
 * @export
 * @interface ForecastSummary
 */
export interface ForecastSummary {
    /**
     *
     * @type {WeatherSymbol}
     * @memberof ForecastSummary
     */
    'symbol_code': WeatherSymbol;
}
/**
 * Weather parameters valid for a specific point in time.
 * @export
 * @interface ForecastTimeInstant
 */
export interface ForecastTimeInstant {
    /**
     * Air pressure at sea level
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'air_pressure_at_sea_level'?: number;
    /**
     * Air temperature
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'air_temperature'?: number;
    /**
     * Amount of sky covered by clouds.
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'cloud_area_fraction'?: number;
    /**
     * Amount of sky covered by clouds at high elevation.
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'cloud_area_fraction_high'?: number;
    /**
     * Amount of sky covered by clouds at low elevation.
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'cloud_area_fraction_low'?: number;
    /**
     * Amount of sky covered by clouds at medium elevation.
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'cloud_area_fraction_medium'?: number;
    /**
     * Dew point temperature at sea level
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'dew_point_temperature'?: number;
    /**
     * Amount of area covered by fog.
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'fog_area_fraction'?: number;
    /**
     * Amount of humidity in the air.
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'relative_humidity'?: number;
    /**
     * The direction wind is coming from, in degrees clockwise from North
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'wind_from_direction'?: number;
    /**
     * Speed of wind
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'wind_speed'?: number;
    /**
     * Speed of wind gust
     * @type {number}
     * @memberof ForecastTimeInstant
     */
    'wind_speed_of_gust'?: number;
}
/**
 * Weather parameters valid for a specified time period.
 * @export
 * @interface ForecastTimePeriod
 */
export interface ForecastTimePeriod {
    /**
     * Maximum air temperature in period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'air_temperature_max'?: number;
    /**
     * Minimum air temperature in period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'air_temperature_min'?: number;
    /**
     * Best estimate for amount of precipitation for this period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'precipitation_amount'?: number;
    /**
     * Maximum amount of precipitation for this period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'precipitation_amount_max'?: number;
    /**
     * Minimum amount of precipitation for this period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'precipitation_amount_min'?: number;
    /**
     * Probability of any precipitation coming for this period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'probability_of_precipitation'?: number;
    /**
     * Probability of any thunder coming for this period
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'probability_of_thunder'?: number;
    /**
     * Maximum ultraviolet index if sky is clear
     * @type {number}
     * @memberof ForecastTimePeriod
     */
    'ultraviolet_index_clear_sky_max'?: number;
}
/**
 *
 * @export
 * @interface ForecastTimeStep
 */
export interface ForecastTimeStep {
    /**
     *
     * @type {ForecastTimeStepData}
     * @memberof ForecastTimeStep
     */
    'data': ForecastTimeStepData;
    /**
     * The time these forecast values are valid for. Timestamp in format YYYY-MM-DDThh:mm:ssZ (ISO 8601)
     * @type {string}
     * @memberof ForecastTimeStep
     */
    'time': string;
}
/**
 * Forecast for a specific time
 * @export
 * @interface ForecastTimeStepData
 */
export interface ForecastTimeStepData {
    /**
     *
     * @type {ForecastTimeStepDataInstant}
     * @memberof ForecastTimeStepData
     */
    'instant': ForecastTimeStepDataInstant;
    /**
     *
     * @type {ForecastTimeStepDataNext12Hours}
     * @memberof ForecastTimeStepData
     */
    'next_12_hours'?: ForecastTimeStepDataNext12Hours;
    /**
     *
     * @type {ForecastTimeStepDataNext1Hours}
     * @memberof ForecastTimeStepData
     */
    'next_1_hours'?: ForecastTimeStepDataNext1Hours;
    /**
     *
     * @type {ForecastTimeStepDataNext6Hours}
     * @memberof ForecastTimeStepData
     */
    'next_6_hours'?: ForecastTimeStepDataNext6Hours;
}
/**
 * Parameters which applies to this exact point in time
 * @export
 * @interface ForecastTimeStepDataInstant
 */
export interface ForecastTimeStepDataInstant {
    /**
     *
     * @type {ForecastTimeInstant}
     * @memberof ForecastTimeStepDataInstant
     */
    'details'?: ForecastTimeInstant;
}
/**
 * Parameters with validity times over twelve hours. Will not exist for all time steps.
 * @export
 * @interface ForecastTimeStepDataNext12Hours
 */
export interface ForecastTimeStepDataNext12Hours {
    /**
     *
     * @type {ForecastTimePeriod}
     * @memberof ForecastTimeStepDataNext12Hours
     */
    'details': ForecastTimePeriod;
    /**
     *
     * @type {ForecastSummary}
     * @memberof ForecastTimeStepDataNext12Hours
     */
    'summary': ForecastSummary;
}
/**
 * Parameters with validity times over one hour. Will not exist for all time steps.
 * @export
 * @interface ForecastTimeStepDataNext1Hours
 */
export interface ForecastTimeStepDataNext1Hours {
    /**
     *
     * @type {ForecastTimePeriod}
     * @memberof ForecastTimeStepDataNext1Hours
     */
    'details': ForecastTimePeriod;
    /**
     *
     * @type {ForecastSummary}
     * @memberof ForecastTimeStepDataNext1Hours
     */
    'summary': ForecastSummary;
}
/**
 * Parameters with validity times over six hours. Will not exist for all time steps.
 * @export
 * @interface ForecastTimeStepDataNext6Hours
 */
export interface ForecastTimeStepDataNext6Hours {
    /**
     *
     * @type {ForecastTimePeriod}
     * @memberof ForecastTimeStepDataNext6Hours
     */
    'details': ForecastTimePeriod;
    /**
     *
     * @type {ForecastSummary}
     * @memberof ForecastTimeStepDataNext6Hours
     */
    'summary': ForecastSummary;
}
/**
 *
 * @export
 * @interface ForecastUnits
 */
export interface ForecastUnits {
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'air_pressure_at_sea_level'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'air_temperature'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'air_temperature_max'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'air_temperature_min'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'cloud_area_fraction'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'cloud_area_fraction_high'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'cloud_area_fraction_low'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'cloud_area_fraction_medium'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'dew_point_temperature'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'fog_area_fraction'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'precipitation_amount'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'precipitation_amount_max'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'precipitation_amount_min'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'probability_of_precipitation'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'probability_of_thunder'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'relative_humidity'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'ultraviolet_index_clear_sky_max'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'wind_from_direction'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'wind_speed'?: string;
    /**
     *
     * @type {string}
     * @memberof ForecastUnits
     */
    'wind_speed_of_gust'?: string;
}
/**
 *
 * @export
 * @interface METJSONForecast
 */
export interface METJSONForecast {
    /**
     *
     * @type {PointGeometry}
     * @memberof METJSONForecast
     */
    'geometry': PointGeometry;
    /**
     *
     * @type {Forecast}
     * @memberof METJSONForecast
     */
    'properties': Forecast;
    /**
     *
     * @type {string}
     * @memberof METJSONForecast
     */
    'type': METJSONForecastTypeEnum;
}
export declare const METJSONForecastTypeEnum: {
    readonly Feature: "Feature";
};
export type METJSONForecastTypeEnum = typeof METJSONForecastTypeEnum[keyof typeof METJSONForecastTypeEnum];
/**
 *
 * @export
 * @interface PointGeometry
 */
export interface PointGeometry {
    /**
     * [longitude, latitude, altitude]. All numbers in decimal.
     * @type {Array<number>}
     * @memberof PointGeometry
     */
    'coordinates': Array<number>;
    /**
     *
     * @type {string}
     * @memberof PointGeometry
     */
    'type': PointGeometryTypeEnum;
}
export declare const PointGeometryTypeEnum: {
    readonly Point: "Point";
};
export type PointGeometryTypeEnum = typeof PointGeometryTypeEnum[keyof typeof PointGeometryTypeEnum];
/**
 * A identifier that sums up the weather condition for this time period, see documentation.
 * @export
 * @interface WeatherSymbol
 */
export interface WeatherSymbol {
    [key: string]: any;
}
/**
 * DataApi - axios parameter creator
 * @export
 */
export declare const DataApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {ClassicFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    classicFormatGet: (lat: number, lon: number, format: ClassicFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    classicGet: (lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompactFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    compactFormatGet: (lat: number, lon: number, format: CompactFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    compactGet: (lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompleteFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeFormatGet: (lat: number, lon: number, format: CompleteFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeGet: (lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {MiniFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    miniFormatGet: (lat: number, lon: number, format: MiniFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    miniGet: (lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {StatusFormatGetFormatEnum} format format code (file extension)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statusFormatGet: (format: StatusFormatGetFormatEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Weather forecast for a specified place
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statusGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * DataApi - functional programming interface
 * @export
 */
export declare const DataApiFp: (configuration?: Configuration) => {
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {ClassicFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    classicFormatGet(lat: number, lon: number, format: ClassicFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    classicGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompactFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    compactFormatGet(lat: number, lon: number, format: CompactFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<METJSONForecast>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    compactGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<METJSONForecast>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompleteFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeFormatGet(lat: number, lon: number, format: CompleteFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<METJSONForecast>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<METJSONForecast>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {MiniFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    miniFormatGet(lat: number, lon: number, format: MiniFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<METJSONForecast>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    miniGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<METJSONForecast>>;
    /**
     * Weather forecast for a specified place
     * @param {StatusFormatGetFormatEnum} format format code (file extension)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statusFormatGet(format: StatusFormatGetFormatEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    /**
     * Weather forecast for a specified place
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statusGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
/**
 * DataApi - factory interface
 * @export
 */
export declare const DataApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {ClassicFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    classicFormatGet(lat: number, lon: number, format: ClassicFormatGetFormatEnum, altitude?: number, options?: any): AxiosPromise<string>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    classicGet(lat: number, lon: number, altitude?: number, options?: any): AxiosPromise<string>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompactFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    compactFormatGet(lat: number, lon: number, format: CompactFormatGetFormatEnum, altitude?: number, options?: any): AxiosPromise<METJSONForecast>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    compactGet(lat: number, lon: number, altitude?: number, options?: any): AxiosPromise<METJSONForecast>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompleteFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeFormatGet(lat: number, lon: number, format: CompleteFormatGetFormatEnum, altitude?: number, options?: any): AxiosPromise<METJSONForecast>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeGet(lat: number, lon: number, altitude?: number, options?: any): AxiosPromise<METJSONForecast>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {MiniFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    miniFormatGet(lat: number, lon: number, format: MiniFormatGetFormatEnum, altitude?: number, options?: any): AxiosPromise<METJSONForecast>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    miniGet(lat: number, lon: number, altitude?: number, options?: any): AxiosPromise<METJSONForecast>;
    /**
     * Weather forecast for a specified place
     * @param {StatusFormatGetFormatEnum} format format code (file extension)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statusFormatGet(format: StatusFormatGetFormatEnum, options?: any): AxiosPromise<string>;
    /**
     * Weather forecast for a specified place
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statusGet(options?: any): AxiosPromise<string>;
};
/**
 * DataApi - object-oriented interface
 * @export
 * @class DataApi
 * @extends {BaseAPI}
 */
export declare class DataApi extends BaseAPI {
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {ClassicFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    classicFormatGet(lat: number, lon: number, format: ClassicFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    classicGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompactFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    compactFormatGet(lat: number, lon: number, format: CompactFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<METJSONForecast, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    compactGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<METJSONForecast, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {CompleteFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    completeFormatGet(lat: number, lon: number, format: CompleteFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<METJSONForecast, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    completeGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<METJSONForecast, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {MiniFormatGetFormatEnum} format format code (file extension)
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    miniFormatGet(lat: number, lon: number, format: MiniFormatGetFormatEnum, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<METJSONForecast, any>>;
    /**
     * Weather forecast for a specified place
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @param {number} [altitude] Whole meters above sea level
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    miniGet(lat: number, lon: number, altitude?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<METJSONForecast, any>>;
    /**
     * Weather forecast for a specified place
     * @param {StatusFormatGetFormatEnum} format format code (file extension)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    statusFormatGet(format: StatusFormatGetFormatEnum, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    /**
     * Weather forecast for a specified place
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    statusGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
/**
 * @export
 */
export declare const ClassicFormatGetFormatEnum: {
    readonly Xml: "xml";
};
export type ClassicFormatGetFormatEnum = typeof ClassicFormatGetFormatEnum[keyof typeof ClassicFormatGetFormatEnum];
/**
 * @export
 */
export declare const CompactFormatGetFormatEnum: {
    readonly Json: "json";
};
export type CompactFormatGetFormatEnum = typeof CompactFormatGetFormatEnum[keyof typeof CompactFormatGetFormatEnum];
/**
 * @export
 */
export declare const CompleteFormatGetFormatEnum: {
    readonly Json: "json";
};
export type CompleteFormatGetFormatEnum = typeof CompleteFormatGetFormatEnum[keyof typeof CompleteFormatGetFormatEnum];
/**
 * @export
 */
export declare const MiniFormatGetFormatEnum: {
    readonly Json: "json";
};
export type MiniFormatGetFormatEnum = typeof MiniFormatGetFormatEnum[keyof typeof MiniFormatGetFormatEnum];
/**
 * @export
 */
export declare const StatusFormatGetFormatEnum: {
    readonly Json: "json";
};
export type StatusFormatGetFormatEnum = typeof StatusFormatGetFormatEnum[keyof typeof StatusFormatGetFormatEnum];
/**
 * MetadataApi - axios parameter creator
 * @export
 */
export declare const MetadataApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * RSS feed of changes to this product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changelogGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Check health status for product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthzGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Schema for XML data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    schemaGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * MetadataApi - functional programming interface
 * @export
 */
export declare const MetadataApiFp: (configuration?: Configuration) => {
    /**
     * RSS feed of changes to this product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changelogGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Check health status for product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthzGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Schema for XML data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    schemaGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * MetadataApi - factory interface
 * @export
 */
export declare const MetadataApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * RSS feed of changes to this product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changelogGet(options?: any): AxiosPromise<void>;
    /**
     * Check health status for product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthzGet(options?: any): AxiosPromise<void>;
    /**
     * Schema for XML data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    schemaGet(options?: any): AxiosPromise<void>;
};
/**
 * MetadataApi - object-oriented interface
 * @export
 * @class MetadataApi
 * @extends {BaseAPI}
 */
export declare class MetadataApi extends BaseAPI {
    /**
     * RSS feed of changes to this product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    changelogGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Check health status for product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    healthzGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Schema for XML data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataApi
     */
    schemaGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
