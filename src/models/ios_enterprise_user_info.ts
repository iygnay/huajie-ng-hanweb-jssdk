import { UserInfoBase } from './user_info_base';

export interface iOSEnterpriseUserInfo extends UserInfoBase {
    appConEntName: string,
    appConEntType: string,
    appConEntUniCode: string,
    appConLoc: string,
    appConRegNo: string,
    uniscid: string,
    xzqh: string,
    orgType: string,
    realLevel: string,
    userid: number,
    username: string
}