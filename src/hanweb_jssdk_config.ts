import { OpaqueToken } from '@angular/core';
import { PersonalUserInfo } from './models/personal_user_info';
import { EnterpriseUserInfo } from './models/enterprise_user_info';
import { iOSEnterpriseUserInfo } from './models/ios_enterprise_user_info';
import { LocationInfo } from './models/location_info';

export const HANWEB_JSSDK_GLOBAL_CONFIG = new OpaqueToken('HANWEB_JSSDK_GLOBAL_CONFIG');

/**
 * HanwebJssdk配置
 * 
 * @export
 * @interface HanwebJssdkConfig
 */
export interface HanwebJssdkConfig {
    
    /**
     * 模拟的用户信息.
     * 
     *      - 如果配置了此项, 那么登录接口, 和获取用户信息的接口, 将会直接返回模拟的用户信息.
     *      - 主要用于在非app环境下进行调试.
     * 
     * @type {(PersonalUserInfo | EnterpriseUserInfo | iOSEnterpriseUserInfo)}
     * @memberOf HanwebJssdkConfig
     */
    mockUserInfo?: PersonalUserInfo | EnterpriseUserInfo | iOSEnterpriseUserInfo;

    /**
     * 模拟的地理位置信息.
     * 
     * @type {LocationInfo}
     * @memberOf HanwebJssdkConfig
     */
    mockLocationInfo?: LocationInfo;  
}