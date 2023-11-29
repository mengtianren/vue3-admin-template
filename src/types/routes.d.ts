export {};

declare module "vue-router" {
  // interface RouteRecordRawTg extends RouteRecordRaw {
  //   icon?: tring,
  //   name: string,
  //   title: string,
  //   menu?: boolean,
  //   children?: RouteMeta[]
  // }
  type Tg = {
    icon?: tring;
    name: string;
    title: string;
    menu?: boolean;
    // children?: RouteRecordRawTg[]
  };
  type RouteRecordRawTg = RouteRecordRaw & Tg;
  // console.log(RouteRecordRawTg)
}
