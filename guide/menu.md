# 菜单

系统菜单数据根据 VueRouter 路由表转换得来

## SysRouterMenu.MenuRecord

```typescript
// 菜单数据结构
interface MenuRecord {
  label: string;
  icon: string;
  key: string;
  children?: MenuRecord[];
}
```

## createSysMenuRecord

`@/router/utils/CreateSysMenu` 文件中 `createSysMenuRecord` 用于创建菜单

```typescript
/**
 * 工具函数：创建菜单 RouteRecordRaw[] -> SysRouterMenu.MenuRecord[]
 * @param Routers
 * @returns
 */
const create = (Routers: RouteRecordRaw[]): SysRouterMenu.MenuRecord[] => {
  const Menus: SysRouterMenu.MenuRecord[] = [];
  Routers.forEach((route) => {
    const AddMenuRecord: SysRouterMenu.MenuRecord = {
      label: "",
      icon: "",
      key: "",
    };
    // 筛选掉不需要显示的路由
    if (route.meta?.isShow === undefined || route.meta.isShow === true) {
      if (route.children) {
        AddMenuRecord.children = create(route.children);
      }
      AddMenuRecord.label = route.meta?.label || "默认菜单";
      AddMenuRecord.icon = route.meta?.icon || "line-md:emoji-smile";
      AddMenuRecord.key = route.name as string;

      // 添加菜单
      Menus.push(AddMenuRecord);
    }
  });
  return Menus;
};

/**
 * 工具函数：创建菜单 RouteRecordRaw[] -> SysRouterMenu.MenuRecord[]
 * @param Routers
 * @returns
 */
const createSysMenuRecord = (Routers: RouteRecordRaw[]) => {
  const MenuRecords = create(Routers);

  // 提取菜单：如果第一节点的父菜单下只有一个 children 那么只显示子菜单
  const HandleMenuRecords = MenuRecords.map((menu) => {
    if (menu.children && menu.children.length === 1) {
      return menu.children[0];
    }
    return menu;
  });

  return HandleMenuRecords;
};
```
