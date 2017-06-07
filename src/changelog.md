# 2.0.0 (2017-06-07)

## breaking changes

1. 使用`generator-angular2-library`重新发布了包, 现在提供`ESM`和`UMD`两种版本的输出, 不再为各个导出方法/服务提供独立的js文件.

# 1.5.3

## 新增功能

1. 尝试修复在正式App下个人法人用户判断不正确的错误, 按照大汉的要求修改判断.

# 1.5.2

## 新增功能

1. 尝试修复在正式App下个人法人用户判断不正确的错误, 添加Hack代码

# 1.5.1

## 新增功能

1. 尝试修复在正式App下个人法人用户判断不正确的错误.

# 1.5.0

## 新增功能

1. 新增`getLocation`接口, 用于获取地理位置信息.
2. 新增给`HanwebJssdkConfig`新增`MockLocationInfo`属性, 用于模拟地理位置信息.

## bug fixes

1. 修复了配置了模拟用户时注销(`logout`)接口不能使用的错误.

# 1.4.1

## 新增功能

1. fix `getUserInfo`返回的用户类型.

# 1.4.0

## 新增功能

1. 添加`iOSEnterpriseUserInfo`返回的用户类型.

# 1.3.0

## 新增功能

1. 添加`callPhone`接口, 用于拨打电话.

# 1.2.1 (2017-04-11)

## bug fixes

1. 导出`HanwebJssdkConfig`和`HANWEB_JSSDK_GLOBAL_CONFIG`

# 1.2.0 (2017-04-11)

## 新增功能

1. 新增`HANWEB_JSSDK_GLOBAL_CONFIG`可以注入hanwebJssdk的配置信息.
2. 新增`mockUserInfo`用于支持模拟用户登录/获取用户信息.

# 1.1.0 (2017-04-07)

## 新增功能

1. `HanwebJssdk`添加拍照/选择照片接口`chooseImage`

# 1.0.0 (2017-04-07)

## 新增功能

1. 添加`HanwebJssdk`服务和`HuajieNgHanwebJssdkModule`模块, 里面包含hanwebJssdk的登录/登出/获取用户信息的接口