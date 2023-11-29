import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
const setupVueComponents = () => {
  return Components({
    resolvers: [
      AntDesignVueResolver({ importStyle: 'less', resolveIcons: false }),

    ],
  });
}

export default setupVueComponents