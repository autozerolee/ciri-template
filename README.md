# React Scaffolding 

### Features
1. 环境配置采用webpack v4 
2. 库框架采用 react v16, react-route v4, redux, redux-saga
3. 分离 redux 至 model, 实现业务逻辑, 工程化的数据流
4. 分离 service, 实现数据请求
5. 数据请求采用定制 fetch, 支持数据加密
6. 统一错误处理
7. 路由组件 
8. jest
9. eslint

### Steps
1. 原始应用搭建, 原生dom,
  - 路由结构, 公有路由, 私有路由 
  - 表格 查询,启用,禁用
  - 表单 有值受控/无值非受控
  - 数据请求,加密解密
  - 权限校验,动态授权
  - 通用组件/业务组件
2. [ ] 重构redux数据流, 引入redux-saga实现model业务逻辑分离，类似dva
3. [ ] 引入UI库，允许配置支持
3. 分离部分库 
  - [ ] lodash-数组对象操作
  - [ ] dayjs-日期
  - [ ] querystring-URL地址解析
  - [ ] storage-WEB缓存
  - [ ] forge-请求加密
4. 支持 jest 测试
  - [ ] Service 接口测试
  - [ ] Model 业务测试
  - [ ] 组件渲染逻辑测试 
  - [ ] 组件交互逻辑测试
5. 支持 lint
6. webpack 打包优化
