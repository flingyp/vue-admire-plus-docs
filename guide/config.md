# 系统配置

## SysBaseConfig

::: tip
系统基础配置用于初始化系统相关配置
:::

```typescript
// 系统基础配置（对应SysBasicConfig.ts文件）
{
  title: string; // 系统名称
  logo: string; // 系统Logo路径
  layoutMode: SysLayoutMode; // 布局模式
  handleSysPermission: SysHandlePermission; // 权限控制方式
}
```

## SysConfig.Config

::: tip
系统所有相关配置
:::

```typescript
// 系统配置
{
    layoutMode: SysBasicConfig.SysLayoutMode // 布局模式
    leftMenuIsCollapsed: boolean // 左侧菜单布局模式是否收缩
    isShowSysDrawer: boolean // 系统设置抽屉是否显示
    themeMode: ThemeMode // 主题模式
    themeColor: string // 主题颜色
    themeColorArray: string[] // 系统内置的主题颜色数组
    primaryColorGather: SysConfig.PrimaryColorGatherObject | undefined // 系统主题色相关变量集合
    isNeedReload: boolean // 页面是否需要重新加载
    customHeaderHeight: number // 自定义头部高度
    customTagHeight: number // 自定义Tag高度
}
```

## Axios 请求

### 基础服务路径定义

系统的服务路径定义在 .env 相关文件中，根据不同的模式区别。

`.env.dev` 对应 `"dev": "vite --mode dev"`

```
VITE_BASE_URL = "/mock"
```

`.env.prod_mock` 对应 `"build:mock": "vite build --mode prod_mock"`

```
VITE_BASE_URL = "/mock"
```

### 默认 Axios 实例

系统默认提供一个 Axios 实例对象，也可以根据自身需要去自定义 Axios

- 创建 Axios 实例方法：`@/utils/https/CreateRequestInstance.ts`

- 默认 Axios 实例：`@/utils/https/index.ts`

### 自定义封装全局请求方法

::: warning
扩展 Axios 实例的属性或方法，需要在 `@/types/ExtendAxiosInstance.ts` 中扩展相关的类型声明
:::

```typescript
import {
  AxiosResponse,
  AxiosRequestConfig,
  Method,
  AxiosRequestHeaders,
} from "axios";

// 自定义请求方法
export interface YPlusRequestParams {
  url: string;
  method: Method;
  params?: unknown;
  data?: unknown;
  isLoading?: boolean;
  loadingText?: string;
  headers?: AxiosRequestHeaders;
}

// 扩展Axios实例属性或方法
declare module "axios" {
  interface AxiosInstance {
    YPlusRequest<R = any>(params: YPlusRequestParams): Promise<Awaited<R>>;
  }
}
```

```typescript
/**
 * 添加自定义请求方法（可根据项目需要扩展）
 * @param params：YPlusRequestParams
 * @param R：返回的数据格式
 * @returns
 */
RequestInstance.YPlusRequest = async <R>(
  params: YPlusRequestParams
): Promise<Awaited<R>> => {
  let loadingInstance = null;
  // 加载Loading
  if (params.isLoading) {
    loadingInstance = ElLoading.service({
      lock: true,
      text: params.loadingText || "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
  }
  const Response = await RequestInstance.request<any, R>({
    url: params.url,
    method: params.method,
    params: params.params,
    data: params.data,
    headers: params.headers,
  });
  // 关闭Loading
  if (params.isLoading) {
    loadingInstance?.close();
  }
  return Response;
};
```
