# 路由

系统一共分为两种路由，常量路由和异步路由。

```typescript
// STATIC_PERMISSION 前端（静态权限）、DYNAMIC_PERMISSION 后台（动态权限）
type SysHandlePermission = "STATIC_PERMISSION" | "DYNAMIC_PERMISSION";
```

:::warning
系统如果使用 `STATIC_PERMISSION` 方式来做权限控制则需要定义异步路由，如果使用 `DYNAMIC_PERMISSION` 方式来做则不会读取异步路由的路由表
:::

## SysRouterMenu.VAdmireRoute

系统路由表类型

:::warning
必须确保 路由 name 唯一
:::

```typescript
interface VAdmireRoute {
  path: string;
  name: string;
  /**
   * 页面路径（使用别名，其他方式均不可）
   * 注意：在使用VitePluginMock Mock异步路由数据的时候 @/ 会被处理为 /
   * 例如：component: '@/views/permission/RoleIndex.vue' 会被处理为 component: '@views/permission/RoleIndex.vue' 导致自动引入页面模块失效
   * 还未在真实环境接口做测试，目前解决方案在 GlobModules 做适配处理
   */
  component?: string;
  children?: VAdmireRoute[];
  meta?: RouteMeta;
  redirect?: string; // 重定向路径（设置该属性，不需要设置component）
}
```

## ExtendRouteMeta.ts

ExtendRouteMeta.ts 中扩展了 VueRouter 中路由 meta 的属性

```typescript
declare module "vue-router" {
  interface RouteMeta {
    // 菜单名称
    label?: string;
    // 菜单图标
    icon?: string;
    // 是否显示在菜单中
    isShow?: boolean;
    // 路由权限
    permissions?: Array<string>;
    // 链接（系统链接、内链、外链）
    link?: "SYS_LINK" | "INTERNAL_LINK" | "EXTERNAL_LINK";
    // 内链、外链的链接地址
    url?: string;
    // 路由是否缓存（默认缓存）
    cache?: boolean;
  }
}
```

## TransformVAdmireRoute.ts

文件 `@/router/utils/TransformVAdmireRoute.ts` 中的 `transformVAdmireRouteToRouteRecordRaw` 方法是一个工具函数。用于将 `VAdmireRoute[] 转换为 RouteRecordRaw[]`

## GlobModules.ts

页面模块文件的导入 依靠 Vite 提供的 API `import.meta.glob()` 处理。开发者只需定义 `VAdmireRoute.component` 提供页面路径即可。

:::warning
只支持导入 views 文件夹的页面，如果页面还未定义会默认访问 404 页面
:::

```typescript
/**
 * 导出views文件夹下的页面模块
 * @param path 页面的绝对路径
 */
const GlobFileModule = (path: string) => {
  let ModulePath = path;

  // 检查 component 的字符串格式 具体问题查看 SysRouterMenu.d.ts 文件 component
  const TestPathFormat = /^@views\/.+$/;
  if (TestPathFormat.test(ModulePath)) {
    ModulePath = ModulePath.replace(/@views/, "@/views");
  }

  // 特殊组件-Layout
  if (ModulePath === "Layout") {
    return Layout;
  }
  // 特殊组件-Iframe
  if (ModulePath === "Iframe") {
    return BasicIframe;
  }

  const ComponentAbsolutePath = ModulePath.replace("@/", "../../");
  return AllFileModules[ComponentAbsolutePath];
};
```
