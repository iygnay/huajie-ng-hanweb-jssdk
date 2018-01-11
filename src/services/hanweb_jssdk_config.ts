import { InjectionToken } from '@angular/core';
import { LocationInfo } from '../models/location_info';
import { UserId } from '../models/user-id';

export const HANWEB_JSSDK_CONFIG = new InjectionToken('HANWEB_JSSDK_CONFIG');

/**
 * HanwebJssdk配置
 * 
 * @export
 * @interface HanwebJssdkConfig
 */
export interface HanwebJssdkConfig {
    
    mock?: {
        /**
         * 模拟的用户信息.
         * - 如果配置了此项, 那么登录接口, 和获取用户信息的接口, 将会直接返回模拟的用户信息.
         * - 主要用于在非app环境下进行调试.
         * 
         * @type {UserId}
         */
        userId?: UserId,

        /**
         * 模拟的地理位置信息
         * 
         * @type {LocationInfo}
         */
        location?: LocationInfo,
    }
}