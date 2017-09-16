
export type UserId = PersonalUserId | EnterpriseUserId;

/**
 * 检测是否法人UserId
 * 
 * @export
 * @param {UserId} userId 
 * @returns {userId is EnterpriseUserId} 
 */
export function isEnterpriseUserId(userId: UserId): userId is EnterpriseUserId {
    return !!(<EnterpriseUserId>userId).appConEntName;
}

/**
 * 个人用户信息
 * 
 * @export
 * @interface PersonalUserId
 */
export interface PersonalUserId {
    /**
     * 用户id
     * 
     * @type {string}
     * @memberof PersonalUserId
     */
    userid: string;
}

/**
 * 企业用户信息
 * 
 * @export
 * @interface EnterpriseUserId
 */
export interface EnterpriseUserId {
    
        /**
         * 用户id
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        userid: string;
    
        /**
         * 法人名称
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        appConEntName: string;
    
        /**
         * 法人类型
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        appConEntType: string;
    
        /**
         * 组织机构代码号
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        appConEntUniCode: string;
    
        /**
         * appConLoc
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        appConLoc: string;
    
        /**
         * 工商注册号
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        appConRegNo: string;
    
        /**
         * 统一社会信用代码
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        uniscid: string;
    
        /**
         * 行政区划
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        xzqh: string;
    
        /**
         * ??
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        orgType: string;
    
        /**
         * realLevel
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        realLevel: string;
    
        /**
         * 登录名
         * 
         * @type {string}
         * @memberof EnterpriseUserInfo
         */
        username: string;
    }