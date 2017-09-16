
/**
 * getUserID返回的数据类型.
 * 
 * @export
 * @interface RawUserId
 */
export interface RawUserId {
    userid: string;
    appConEntName?: string;
    appConEntType?: string;
    appConEntUniCode?: string;
    appConLoc?: string;
    appConRegNo?: string;
    uniscid?: string;
    xzqh?: string;
    orgType?: string;
    realLevel?: string;
    username?: string;
}

export class EnterpriseUserId {
    userid: string;
    appConEntName: string;
    appConEntType: string;
    appConEntUniCode: string;
    appConLoc: string;
    appConRegNo: string;
    uniscid: string;
    xzqh: string;
    orgType: string;
    realLevel: string;
    username: string;

    constructor(o: RawUserId) {
    }
}

export class PersonalUserId {
}