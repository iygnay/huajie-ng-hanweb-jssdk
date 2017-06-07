import { UserInfoBase } from './user_info_base';

export interface EnterpriseUserInfo extends UserInfoBase {
    retcode: string,
    retmsg: string,
    userBasicInfo:{
        orgType: string,
        realLevel: string,
        userid: number,
        username: string
    },
    appBasicInfo:{
        appConEntName: string,
        appConEntType: string,
        appConEntUniCode: string,
        appConLoc: string,
        appConRegNo: string,
        uniscid: string,
        xzqh: string
    }
}

// {
//     "retcode":"0",
//     "userBasicInfo":{
//         "orgType":"3",
//         "realLevel":"2",
//         "userid":9152,
//         "username":
//         "123456789"
//     },
    
//     "retmsg":"请求处理成功",
//     "appBasicInfo":{
//         "appConEntName":"杭州广鸿贸易有限公司",
//         "appConEntType":"企业法人",
//         "appConEntUniCode":"123456789",
//         "appConLoc":"",
//         "appConRegNo":"330082000209300",
//         "uniscid":"330082000209300",
//         "xzqh":""
//     }
// }