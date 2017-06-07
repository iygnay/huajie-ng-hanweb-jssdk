import { Injectable, Inject, Optional } from '@angular/core';
import { PersonalUserInfo } from './models/personal_user_info';
import { EnterpriseUserInfo } from './models/enterprise_user_info';
import { iOSEnterpriseUserInfo } from './models/ios_enterprise_user_info';
import { LocationInfo } from './models/location_info';
import { UserInfoBase } from './models/user_info_base';
import { ChooseImageResult } from './models/choose_image_result';
import { HANWEB_JSSDK_GLOBAL_CONFIG, HanwebJssdkConfig } from './hanweb_jssdk_config';

@Injectable()
export class HanwebJssdk {
    constructor(
        @Inject(HANWEB_JSSDK_GLOBAL_CONFIG) @Optional() private _globalConfig: HanwebJssdkConfig
    ) {
    }

    /**
     * 获取地理位置信息
     * 
     * @memberOf HanwebJssdk
     */
    getLocation() {

        // 检测是否配置了模拟的地理位置信息.
        if (this._globalConfig && this._globalConfig.mockLocationInfo) 
            return Promise.resolve(this._globalConfig.mockLocationInfo);

        return new Promise<LocationInfo>((resolveFn, rejectFn) => {
            try {
                 window['getlocation']({
                    success: (r) => {
                        if (typeof r == 'string' && r.constructor == String) {
                            rejectFn(r);
                        } else {
                            resolveFn(r as LocationInfo);
                        }
                    },
                    fail: (r: string) =>  {
                        rejectFn(r);
                    }
                });
            } catch (error) { 
                rejectFn(error);
            }
        });
    }

    /**
     * 拨打电话.
     * 
     * @param {string} phone 
     * @returns 
     * 
     * @memberOf HanwebJssdk
     */
    callPhone(phone: string) {
        return new Promise<void>((resolveFn, rejectFn) => {
            try {
                 window['callPhone']({
                    phone: phone,
                    success: () => {
                        resolveFn();
                    },
                    fail: (r: string) =>  {
                        rejectFn(r);
                    }
                });
            } catch (error) { 
                rejectFn(error);
            }
        });
    }

    /**
     * 选择图片
     * 
     * @returns 
     * 
     * @memberOf HanwebJssdk
     */
    chooseImage(size = '200') {
        return new Promise<ChooseImageResult>((resolveFn, rejectFn) => {
            try {
                 window['chooseImage']({
                    arg: size,
                    success: (r: any) => {
                        resolveFn(r);
                    },
                    fail: (r: string) =>  {
                        rejectFn(r);
                    }
                });
            } catch (error) { 
                rejectFn(error);
            }
        });
    }

    /**
     * 获取用户信息
     * 
     * 如果未登录, 会返回异常.
     * 如果已经登陆, 则可能返回个人信息或者企业信息, 登录的类型不同.
     * 
     * 返回类型为UserInfoBase, 请根据_type属性的值, 将其转换为真实的类型 (PersonalUserInfo或者EnterpriseUserInfo等)
     */
    getUserInfo() {

        // 如果配置了mock用户
        //      - 就直接返回mock用户
        if (this._globalConfig && this._globalConfig.mockUserInfo)
            return Promise.resolve(this._globalConfig.mockUserInfo);

        return new Promise<UserInfoBase>((resolveFn, rejectFn) => {
            window['getUserInfo']({
                success: (r: string) => {
                    if (r == '未登录')
                        rejectFn('未登录');

                    const info = JSON.parse(r) as UserInfoBase;

                    // 判断用户类型.
                    info._type = (info['appConEntName']) ? 'iosEnterprise' : 'personal';
                    resolveFn(info);
                },
                fail: (r: string) =>  {
                    rejectFn(r);
                }
            });
        });
    }

    /** 
     * 注销
     */
    logout() {
        // 如果配置了mock用户
        //      - 就直接resolve
        if (this._globalConfig && this._globalConfig.mockUserInfo)
            return Promise.resolve();

        return new Promise<void>((resolveFn, rejectFn) => {
            window['logout']({
                success: (r) => {
                    resolveFn();
                },
                fail: (r) => {
                    rejectFn(r);
                }
            })
        });
    }

    /** 
     * 登录
     *     - 调用接口后, 会唤起原生的登录界面.
     */
    loginApp() {
        
        // 如果配置了mock用户
        //      - 就直接resolve
        if (this._globalConfig && this._globalConfig.mockUserInfo)
            return Promise.resolve();

        return new Promise<void>((resolveFn, rejectFn) => {
            window['loginApp']({
                success: (r) => {
                    resolveFn();
                },
                fail: (r) => {
                    rejectFn(r);
                }
            })
        });
    }
}