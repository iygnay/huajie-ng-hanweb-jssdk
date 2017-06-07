
/**
 * 地理位置信息
 * 
 * @export
 * @interface LocationInfo
 */
export interface LocationInfo {

    /**
     * 城市名称
     * 
     * @type {string}
     * @memberOf LocationInfo
     */
    cityName: string;

    /**
     * 区域
     *      例如: 瓯海区
     * 
     * @type {string}
     * @memberOf LocationInfo
     */
    region: string;

    /**
     * 街道地址
     *      例如: 中国浙江省温州市瓯海区xx路xx号
     * 
     * @type {string}
     * @memberOf LocationInfo
     */
    detailAddress: string;

    /**
     * 经度
     * 
     * @type {number}
     * @memberOf LocationInfo
     */
    longitude: number;

    /**
     * 纬度
     * 
     * @type {number}
     * @memberOf LocationInfo
     */
    latitude: number;

}