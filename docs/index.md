---
layout: home
home: true

title: 许小墨のGuide
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: 许小墨の业余小码农
    text: Just Coding...
    tagline: /斜杠青年/菜鸡选手/CV达人/
    image:
        src: /illustration/avatar.png
        alt: avatar
    actions:
    - theme: brand
      text: 进入主页
      link: /column/Guide/
    - theme: alt
      text: 个人成长
      link: /column/Growing/
features:
  - icon: 🤹‍♀️
    title: Web前端
    details: 一个业余程序爱好者，国内某互联网厂搬砖。
  - icon: 🥷🏻
    title: 技术栈
    details: Vue，Webpack，Vite，Pinia，React，Node，Nest，Sentry，SpringBoot，Nginx，Docker，Git，Mongodb，MySQL，Monorepo，Redis...
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---

<div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, 100%); width: 240px; display: flex; justify-content: space-between;">
  <el-dropdown trigger="click">
    <el-button round size="large" type="success">前端小食堂</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item disabled>基本功</el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/html/" :underline="false">Html</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/css/" :underline="false">CSS</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/javascript/" :underline="false">JavaScript</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/typescript/" :underline="false">TypeScript</el-link>
        </el-dropdown-item>
        <el-dropdown-item disabled divided>框架</el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/react/" :underline="false">React</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/next/" :underline="false">NextJS</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/vue/" :underline="false">Vue</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/tauri/" :underline="false">Tauri</el-link>
        </el-dropdown-item>
        <el-dropdown-item disabled divided>丰富资源</el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/frontend/ui/" :underline="false">组件库</el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown trigger="click">
    <el-button round size="large" type="success" plain>后端自习室</el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item disabled>嗨你好吗</el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/backend/nodejs/" :underline="false">Node.js</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/backend/nestjs/" :underline="false">NestJS</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/backend/CPP/" :underline="false">C++</el-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-link href="/xuxiaomo.guide/article/backend/Csharp/" :underline="false">C#NET</el-link>
        </el-dropdown-item>
        <el-dropdown-item disabled divided>服务</el-dropdown-item>
        <el-dropdown-item >
          <el-link href="/xuxiaomo.guide/article/backend/nginx/" :underline="false">Nginx</el-link>
        </el-dropdown-item>
        <el-dropdown-item >
          <el-link href="/xuxiaomo.guide/article/backend/gitLearn/" :underline="false">Git</el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</div>

<style scpod>
  .el-link{
    width: 100%;
    height: 100%;
    display: block !important;
  }
</style>

<!-- 自定义组件 -->
<!-- <script setup>
import home from './.vitepress/components/home.vue';
</script>

<home /> -->