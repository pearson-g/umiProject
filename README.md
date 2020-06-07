# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## API 说明

### 快捷菜单

#### 获取快捷菜单

| 项目 | 内容                   |
| ---- | ---------------------- |
| 请求 | `GET` APIHOST/FavMenus |
| 参数 | 无                     |
| 认证 | **需要**               |

返回：

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "href": "/dashboard/analysis",
      "langId": "menu.dashboard.analysis",
      "msg": "analysis"
    }
  ]
}
```

#### 添加

| 项目 | 内容                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| 请求 | `POST` APIHOST/FavMenus                                                                |
| 参数 | `{"href":"/dashboard/analysis","langId": "menu.dashboard.analysis","msg": "analysis"}` |
| 认证 | **需要**                                                                               |

返回：

```json
{
  "success": true
}
```

#### 删除

| 项目 | 内容                                  |
| ---- | ------------------------------------- |
| 请求 | `POST` `DELETE` APIHOST/FavMenus/{id} |
| 参数 | 无                                    |
| 认证 | **需要**                              |

返回：

```json
{
    "success":true
}
## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
```
