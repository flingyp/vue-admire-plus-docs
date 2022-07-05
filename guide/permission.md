# 权限

在异步路由表中 `RouteMeta` 中的 `permissions` 中可定义访问该路由所需要的权限。

异步路由如未定义权限值，则默认可以访问。

:::warning
采用 `DYNAMIC_PERMISSION` 动态权限来控制权限时，需要确保返回的异步路由表中有相关权限值。

最好返回的数据结构与系统的路由表的数据结构一致。
:::

## 参考

```typescript
const AsyncRouters: SysRouterMenu.VAdmireRoute[] = [
  {
    path: "/permission",
    name: "Permission",
    component: "Layout",
    meta: {
      label: "前端权限测试",
      icon: "arcticons:permissionchecker",
    },
    children: [
      {
        path: "user",
        name: "Permission-User",
        component: "@/views/permission/UserIndex.vue",
        meta: {
          label: "普通用户权限页面",
          permissions: ["sys:user:*"],
        },
      },
      {
        path: "role",
        name: "Permission-Role",
        component: "@/views/permission/RoleIndex.vue",
        meta: {
          label: "超级管理员权限页面",
          permissions: ["sys:root:*"],
        },
      },
      {
        path: "common",
        name: "Permission-Common",
        component: "@/views/permission/CommonIndex.vue",
        meta: {
          label: "均可访问权限页面",
        },
      },
      {
        path: "button",
        name: "Permission-Button",
        component: "@/views/permission/ButtonIndex.vue",
        meta: {
          label: "按钮级权限指令控制",
        },
      },
    ],
  },
];
```
