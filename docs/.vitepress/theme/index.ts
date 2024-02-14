import DefaultTheme from 'vitepress/theme';
import './custom.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */);
    app.use(ElementPlus);
  }
};
