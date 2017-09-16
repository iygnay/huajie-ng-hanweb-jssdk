import { Injectable, Inject, Optional, NgZone } from '@angular/core';
import { LocationInfo } from '../models/location_info';
import { ChooseImageResult } from '../models/choose_image_result';
import { HANWEB_JSSDK_CONFIG, HanwebJssdkConfig } from './hanweb_jssdk_config';
import { UserId, PersonalUserId, EnterpriseUserId } from '../models/user-id';

@Injectable()
export class HanwebJssdk {
    constructor(
        @Inject(HANWEB_JSSDK_CONFIG) @Optional() private _config: HanwebJssdkConfig,
        private _zone: NgZone,
    ) {
    }

    /**
     * 检测当前是否是`hanweb`浏览器 (浙江政务服务app的内嵌浏览器).
     * 
     * @returns 
     * @memberof HanwebJssdk
     */
    isHanwebBrowser() {
        return /hanweb/i.test(navigator.userAgent);
    }

    private get _mock() {
        return this._config.mock;
    }

    /**
     * 获取地理位置信息
     * 
     * @memberOf HanwebJssdk
     */
    async getLocation() {
        // 检测是否配置了模拟的地理位置信息.
        if (this._mock && this._mock.location) {
            return Promise.resolve(this._mock.location);
        }

        let str = await this._invokeFn('getlocation', null);
        if (typeof str === 'string') {
            throw new Error(str);
        }
        return str as LocationInfo;
    }

    /**
     * 拨打电话.
     * 
     * @param {string} phone 
     * @returns 
     * 
     * @memberOf HanwebJssdk
     */
    async callPhone(phone: string) {
        await this._invokeFn('callPhone', { phone: phone });
    }

    /**
     * 选择图片
     * 
     * @returns 
     * 
     * @memberOf HanwebJssdk
     */
    async chooseImage(size = '200') {
        return await this._invokeFn('chooseImage', { arg: size }) as ChooseImageResult;
    }

    /**
     * 获取当前登录的`UserId`
     *      用于代替旧版的`getUserInfo`
     */
    async getUserId() {
        // 如果配置了mock用户
        //      - 就直接返回mock用户
        if (this._mock && this._mock.userId) {
            return this._mock.userId;
        }

        let str: string = await this._invokeFn('getUserID', null);
        if (str === '未登录') {
            throw new Error(str);
        }
        return <UserId>JSON.parse(str);
    }

    /** 
     * 注销
     */
    async logout() {
        // 如果配置了mock用户
        //      - 就直接resolve
        if (this._mock && this._mock.userId) {
            return;
        }
        await this._invokeFn('logout', null);
    }

    /** 
     * 登录
     *     - 调用接口后, 会唤起原生的登录界面.
     */
    async loginApp() {
        // 如果配置了mock用户
        //      - 就直接返回.
        if (this._mock && this._mock.userId) {
            return;
        }
        await this._invokeFn('loginApp', null);
    }

    /**
     * 执行一个hanweb方法.
     * 
     * @private
     * @param {string} fnName 方法的名称
     * @param {*} argsObj 执行参数
     * @returns 
     * @memberof HanwebJssdk
     */
    private _invokeFn(fnName: string, argsObj: any) {
        let fn = window[fnName];
        if (typeof fn !== 'function') {
            throw new Error(`hanweb jssdk: window.${fnName} is not a function`);
        }
        return new Promise<any>((resolveFn, rejectFn) => {
            argsObj = Object.assign({}, argsObj || {}, {
                success: (r) => { resolveFn(r); },
                fail: (r) => { rejectFn(r) }
            });
            fn(argsObj);
        });
    }
}