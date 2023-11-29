import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { cloneDeep } from "lodash-es";

const store = createPinia();

/**
 * 重置pinia状态
 * setup模式下$reset不存在 重写清除方法
 *  */
store.use(({ store: item }) => {
  const initialState = cloneDeep(item.$state);
  item.$reset = () => {
    item.$state = cloneDeep(initialState);
  };
});
/**持久化插件  必须放在 $reset之后 否则会导致initialState*/
store.use(piniaPluginPersist);
export { store };
