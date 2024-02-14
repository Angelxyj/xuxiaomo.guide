import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.ab7e7ee0.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、坎坷旅途","slug":"一、坎坷旅途","link":"#一、坎坷旅途","children":[{"level":3,"title":"1. 普通的build不会打包依赖","slug":"_1-普通的build不会打包依赖","link":"#_1-普通的build不会打包依赖","children":[]},{"level":3,"title":"2. 项目目录下直接使用node运行main.js","slug":"_2-项目目录下直接使用node运行main-js","link":"#_2-项目目录下直接使用node运行main-js","children":[]},{"level":3,"title":"3. 拷贝到其他目录单独执行","slug":"_3-拷贝到其他目录单独执行","link":"#_3-拷贝到其他目录单独执行","children":[]}]},{"level":2,"title":"二、总结","slug":"二、总结","link":"#二、总结","children":[]},{"level":2,"title":"三、其它补充","slug":"三、其它补充","link":"#三、其它补充","children":[{"level":3,"title":"1. docker容器部署","slug":"_1-docker容器部署","link":"#_1-docker容器部署","children":[]},{"level":3,"title":"2. pkg打包","slug":"_2-pkg打包","link":"#_2-pkg打包","children":[]}]}],"relativePath":"article/backend/nestjs/NestJS进阶/3.打包部署(⚑).md","filePath":"article/backend/nestjs/NestJS进阶/3.打包部署(⚑).md","lastUpdated":1707839101000}'),p={name:"article/backend/nestjs/NestJS进阶/3.打包部署(⚑).md"},l=a(`<p>最近学习Nestjs的时候做了一个项目，整合了Typescript+Prisma+MySQL，开发时跑的好好的，没有任何问题，后来想打包部署试一试，中途遇到到了很多问题，也在网上查阅了很多资料，我试了很多办法，包括pkg打包(还没有成功)、docker容器部署等，可行的还是有几个，但是一直不是我要的，不过经过不懈的研究努力，我终于还是达到了自己的目的！</p><blockquote><p>前情提要，需要大家使用过prisma，知道怎么在nestjs中集成prisma，默认的集成非常简单，可以查看官网说明。<a href="https://docs.nestjs.com/recipes/prisma" target="_blank" rel="noreferrer">Prisma | NestJS - A progressive Node.js framework</a></p></blockquote><h2 id="一、坎坷旅途" tabindex="-1">一、坎坷旅途 <a class="header-anchor" href="#一、坎坷旅途" aria-label="Permalink to &quot;一、坎坷旅途&quot;">​</a></h2><h3 id="_1-普通的build不会打包依赖" tabindex="-1">1. 普通的build不会打包依赖 <a class="header-anchor" href="#_1-普通的build不会打包依赖" aria-label="Permalink to &quot;1. 普通的build不会打包依赖&quot;">​</a></h3><p>这里我参阅了掘金另一位大佬的文章，具体里面的细节文章讲的很清楚，想了解学习的可前往<a href="https://juejin.cn/post/7065724860688760862" target="_blank" rel="noreferrer">https://juejin.cn/post/7065724860688760862</a></p><p>简单来说，使用nest build命令进行打包，默认是不会将依赖打包进去的，需要将整个项目拷贝到服务器上才行，如果环境不一样，可能需要重新安装依赖，在服务器上安装node_modules真是太占用资源了！根据前面大佬的文章，我开始研究了webpack模式打包，按照大佬的步骤一步一步走，</p><p>nest build通过webpack-node-externals插件默认屏蔽了依赖的打包，我们手动配置externals为空，让node_modules依赖也参加打包，配置webpack.config.js文件如下(直接拷贝的大佬配置)，</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* eslint-disable @typescript-eslint/no-var-requires */</span></span>
<span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const ForkTsCheckerWebpackPlugin = require(&#39;fork-ts-checker-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&#39;start build&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  entry: &#39;./src/main&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  target: &#39;node&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  externals: {},</span></span>
<span class="line"><span style="color:#e1e4e8;">  module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: /.ts?$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">        use: {</span></span>
<span class="line"><span style="color:#e1e4e8;">          loader: &#39;ts-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          options: { transpileOnly: true },</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  resolve: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    extensions: [&#39;.js&#39;, &#39;.ts&#39;, &#39;.json&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    new webpack.IgnorePlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">      checkResource(resource) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const lazyImports = [</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;@nestjs/microservices&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;@nestjs/microservices/microservices-module&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;cache-manager&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;class-validator&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;class-transformer&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ];</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (!lazyImports.includes(resource)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">          require.resolve(resource, {</span></span>
<span class="line"><span style="color:#e1e4e8;">            paths: [process.cwd()],</span></span>
<span class="line"><span style="color:#e1e4e8;">          });</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (err) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    }),</span></span>
<span class="line"><span style="color:#e1e4e8;">    new ForkTsCheckerWebpackPlugin(),</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* eslint-disable @typescript-eslint/no-var-requires */</span></span>
<span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const ForkTsCheckerWebpackPlugin = require(&#39;fork-ts-checker-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;start build&#39;);</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  entry: &#39;./src/main&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  target: &#39;node&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  externals: {},</span></span>
<span class="line"><span style="color:#24292e;">  module: {</span></span>
<span class="line"><span style="color:#24292e;">    rules: [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        test: /.ts?$/,</span></span>
<span class="line"><span style="color:#24292e;">        use: {</span></span>
<span class="line"><span style="color:#24292e;">          loader: &#39;ts-loader&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          options: { transpileOnly: true },</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  output: {</span></span>
<span class="line"><span style="color:#24292e;">    filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  resolve: {</span></span>
<span class="line"><span style="color:#24292e;">    extensions: [&#39;.js&#39;, &#39;.ts&#39;, &#39;.json&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    new webpack.IgnorePlugin({</span></span>
<span class="line"><span style="color:#24292e;">      checkResource(resource) {</span></span>
<span class="line"><span style="color:#24292e;">        const lazyImports = [</span></span>
<span class="line"><span style="color:#24292e;">          &#39;@nestjs/microservices&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;@nestjs/microservices/microservices-module&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;cache-manager&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;class-validator&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;class-transformer&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        ];</span></span>
<span class="line"><span style="color:#24292e;">        if (!lazyImports.includes(resource)) {</span></span>
<span class="line"><span style="color:#24292e;">          return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">          require.resolve(resource, {</span></span>
<span class="line"><span style="color:#24292e;">            paths: [process.cwd()],</span></span>
<span class="line"><span style="color:#24292e;">          });</span></span>
<span class="line"><span style="color:#24292e;">        } catch (err) {</span></span>
<span class="line"><span style="color:#24292e;">          return true;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return false;</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    }),</span></span>
<span class="line"><span style="color:#24292e;">    new ForkTsCheckerWebpackPlugin(),</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>修改package.json中的scripts代码，增加webpack打包模式，即下面的&quot;build-wp&quot;：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;build&quot;: &quot;nest build&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;build-wp&quot;: &quot;nest build --webpack --webpackPath=./webpack.config.js&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">  &quot;build&quot;: &quot;nest build&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;build-wp&quot;: &quot;nest build --webpack --webpackPath=./webpack.config.js&quot;,</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>而后执行</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">➜ npm run build-wp</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">➜ npm run build-wp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当我欣喜等待的时候，报错了，大致信息是Can&#39;t resolve &#39;class-transformer/storage&#39; in......：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04c909a2de57494da255c24a5acd05fd~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>经过查阅github的相关issue，找到了解决方案：<a href="https://github.com/nestjs/mapped-types/issues/486" target="_blank" rel="noreferrer">https://github.com/nestjs/mapped-types/issues/486</a>，其实也很简单，就是将&#39;class-transformer/storage&#39;也加入到IgnorePlugin的lazyImports中去，这也是无用的依赖包，如果你在打包过程中遇到同样的问题，可以照此执行，将相关依赖放入到lazyImports中：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new webpack.IgnorePlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">      checkResource(resource) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const lazyImports = [</span></span>
<span class="line"><span style="color:#e1e4e8;">          //... ...</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;class-transformer/storage&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ];</span></span>
<span class="line"><span style="color:#e1e4e8;">        ......</span></span>
<span class="line"><span style="color:#e1e4e8;">    }),</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new webpack.IgnorePlugin({</span></span>
<span class="line"><span style="color:#24292e;">      checkResource(resource) {</span></span>
<span class="line"><span style="color:#24292e;">        const lazyImports = [</span></span>
<span class="line"><span style="color:#24292e;">          //... ...</span></span>
<span class="line"><span style="color:#24292e;">          &#39;class-transformer/storage&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        ];</span></span>
<span class="line"><span style="color:#24292e;">        ......</span></span>
<span class="line"><span style="color:#24292e;">    }),</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这样做完后打包成功，没有任何问题。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df6839bbf54a49a8bc0e374427de6db6~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a09b2b5ef86f4e0684d1eaa03d7dfd60~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>可以看到打包后的文件3.4M大小，已经包含了依赖</p><p>接下来就是运行了</p><h3 id="_2-项目目录下直接使用node运行main-js" tabindex="-1">2. 项目目录下直接使用node运行main.js <a class="header-anchor" href="#_2-项目目录下直接使用node运行main-js" aria-label="Permalink to &quot;2. 项目目录下直接使用node运行main.js&quot;">​</a></h3><p>在项目目录下执行node dist/main.js</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a45e654410c4c7dbfb0ddd3f8bd2469~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>可以发现执行完全正常，我觉得大工告成了！</p><h3 id="_3-拷贝到其他目录单独执行" tabindex="-1">3. 拷贝到其他目录单独执行 <a class="header-anchor" href="#_3-拷贝到其他目录单独执行" aria-label="Permalink to &quot;3. 拷贝到其他目录单独执行&quot;">​</a></h3><p>不过我还是想简单测试一下，我把dist目录拷贝到了别的地方，直接进入dist目录，执行同样的操作</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node main.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node main.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>报错又来了！我在写文章的时候，我的webstorm突然崩溃了起不起来，把我气得！换vscode继续撸吧，我想把当时的错误都重现一遍。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44255facf1b44cdd8cc42562b9135479~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>可以看出，缺少了prisma.shcema文件，原来还需要这个文件呀！这简单，我直接把该文件拷贝到dist目录中，继续执行！</p><p>终端教会我做人！在经历了将近仅10s的一顿乱码操作后，终于爆出了错误信息！</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ec3b0d7139e4cedbd52f70c45d8b628~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>赶紧上网查了一下，原来prisma在生成client的时候是需要指定平台的，比如报错中就是我没有指定&quot;darwin&quot;，不过还好报错信息比较友好，一眼就知道大概需要做什么了！提示信息如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">To solve this problem, add the platform &quot;darwin&quot; to the &quot;binaryTargets&quot; attribute in the &quot;generator&quot; block in the &quot;schema.prisma&quot; file:</span></span>
<span class="line"><span style="color:#e1e4e8;">generator client {</span></span>
<span class="line"><span style="color:#e1e4e8;">  provider      = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  binaryTargets = [&quot;native&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Then run &quot;prisma generate&quot; for your changes to take effect.</span></span>
<span class="line"><span style="color:#e1e4e8;">Read more about deploying Prisma Client: https://pris.ly/d/client-generator</span></span>
<span class="line"><span style="color:#e1e4e8;">    at DefaultLibraryLoader.getLibQueryEnginePath (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:909505)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at async DefaultLibraryLoader.loadLibrary (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:906429)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at async LibraryEngine.loadEngine (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:915306)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at async LibraryEngine.instantiateLibrary (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:914257)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at async LibraryEngine.getConfig (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:918644)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at async a._getActiveProvider (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:1008726) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  clientVersion: &#39;4.6.1&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  errorCode: undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">To solve this problem, add the platform &quot;darwin&quot; to the &quot;binaryTargets&quot; attribute in the &quot;generator&quot; block in the &quot;schema.prisma&quot; file:</span></span>
<span class="line"><span style="color:#24292e;">generator client {</span></span>
<span class="line"><span style="color:#24292e;">  provider      = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="color:#24292e;">  binaryTargets = [&quot;native&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Then run &quot;prisma generate&quot; for your changes to take effect.</span></span>
<span class="line"><span style="color:#24292e;">Read more about deploying Prisma Client: https://pris.ly/d/client-generator</span></span>
<span class="line"><span style="color:#24292e;">    at DefaultLibraryLoader.getLibQueryEnginePath (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:909505)</span></span>
<span class="line"><span style="color:#24292e;">    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)</span></span>
<span class="line"><span style="color:#24292e;">    at async DefaultLibraryLoader.loadLibrary (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:906429)</span></span>
<span class="line"><span style="color:#24292e;">    at async LibraryEngine.loadEngine (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:915306)</span></span>
<span class="line"><span style="color:#24292e;">    at async LibraryEngine.instantiateLibrary (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:914257)</span></span>
<span class="line"><span style="color:#24292e;">    at async LibraryEngine.getConfig (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:918644)</span></span>
<span class="line"><span style="color:#24292e;">    at async a._getActiveProvider (/Users/lijing/coder/node/nestjs/scoring-system/dist/main.js:2:1008726) {</span></span>
<span class="line"><span style="color:#24292e;">  clientVersion: &#39;4.6.1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  errorCode: undefined</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>直接根据提示查阅官网<a href="https://www.prisma.io/docs/concepts/components/prisma-schema/generators" target="_blank" rel="noreferrer">https://www.prisma.io/docs/concepts/components/prisma-schema/generators</a></p><p>根据官网描述，如果只是在本地环境进行使用，可以不指定，或者简单指定binaryTargets为&quot;native&quot;，很不幸，我经过测试指定为&quot;native&quot;还是不行，会出现一样的问题。官网还说，可以一次性指定多个，我把windows，mac，linux全部都涵盖进去了</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">generator client {</span></span>
<span class="line"><span style="color:#e1e4e8;">  provider = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  binaryTargets = [&quot;darwin&quot;,&quot;windows&quot;,&quot;linux-musl&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">generator client {</span></span>
<span class="line"><span style="color:#24292e;">  provider = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="color:#24292e;">  binaryTargets = [&quot;darwin&quot;,&quot;windows&quot;,&quot;linux-musl&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这里需要注意，每次修改完prisma.schema文件后需要重新执行一次prisma generate命令来生成新的Client！这个client默认是放在node_modues/.prisma/client中，并在node_modules/@prisma/client进行了导出，所以实际上我们不用更改已经写好的代码（代码中我们都是从@prisma/client这里引入PrismaClient）。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23207b697f5a47c4b543a5db0df3059a~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>我在想，这回总该没问题了吧！！然后显示再次打了我的脸！</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca7a561020b748c6b5dcbe4d2c2a451e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>提示信息说我已经加入了多个平台的生成器配置，但是还是出现了问题！！让我去官方github提issue！！！这把我搞懵逼了，我不信这个邪，我在想这么简单的打包操作怎么会有这么多坑啊！我决定再研究尝试一下！</p><p>问题还是出在prisma，我再次查看了generator相关的信息，我想试试自定义导出位置，会不会是因为node_modules打包后，没有将我们的client导出出来，我做了如下配置，主要是增加了output，自定义导出路径：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">generator client {</span></span>
<span class="line"><span style="color:#e1e4e8;">  provider = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  output = &quot;../src/generated/client&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  binaryTargets = [&quot;darwin&quot;,&quot;windows&quot;,&quot;linux-musl&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">generator client {</span></span>
<span class="line"><span style="color:#24292e;">  provider = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="color:#24292e;">  output = &quot;../src/generated/client&quot;</span></span>
<span class="line"><span style="color:#24292e;">  binaryTargets = [&quot;darwin&quot;,&quot;windows&quot;,&quot;linux-musl&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>而后执行</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">➜ prisma generate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">➜ prisma generate</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67c4a082557442619909e6acd669fb58~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>可以看出新生成的client已经在src目录下生成了</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33a8d030674a4b54bf3dfae5b37efe9d~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>此时我们需要修改自己的代码，修改PrismaClient的引入位置</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/744f2279cf1545e79a63ecb01262fcc5~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>再次打包，并进入dist目录执行main.js！</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">➜ node main.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">➜ node main.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我的个乖乖，终端又开始一顿乱码输出！</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a11b8e803c704d68b8420f2a0fec01a5~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>不过这次的问题不再是Prisma generator的问题了！这是环境变量的配置问题，我感觉到希望就在眼前了！我把url这不使用env，直接写死在里面</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">datasource db {</span></span>
<span class="line"><span style="color:#e1e4e8;">  provider = &quot;mysql&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  url      = &quot;mysql://root:xxxxxx(这里是密码)@localhost:3306/nestjs&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">datasource db {</span></span>
<span class="line"><span style="color:#24292e;">  provider = &quot;mysql&quot;</span></span>
<span class="line"><span style="color:#24292e;">  url      = &quot;mysql://root:xxxxxx(这里是密码)@localhost:3306/nestjs&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>最后真是让我喜极而泣啊！终于成功了！打包成功！<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4267701b24d42dda7388ec98e7b66a3~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>至此，打包完成！</p><h2 id="二、总结" tabindex="-1">二、总结 <a class="header-anchor" href="#二、总结" aria-label="Permalink to &quot;二、总结&quot;">​</a></h2><ul><li>nestjs默认的build打包不会打包依赖，只是简单将ts转为js放到dist目录，想要实现依赖打包需要配置webpack打包方式，并一定注意IgnorePlugin中的配置，当遇到Can&#39;t resolve ...的问题时，可以尝试添加到lazyImports中。</li><li>PrismaClient客户端的生成依赖于schema.prisma文件中的generator配置，一定要记得要配置自定义导出及目标平台。</li><li>schema.prisma中的数据库参数配置不要使用env的方式，直接配置实际值就行。</li></ul><p>最后交付的文件如下，不到5M的大小，部署时直接运行node main.js即可</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f81b42fe902f4b53a70799e81a846d9d~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="三、其它补充" tabindex="-1">三、其它补充 <a class="header-anchor" href="#三、其它补充" aria-label="Permalink to &quot;三、其它补充&quot;">​</a></h2><p>打包的问题困扰了我好几天，因为一直无果，我考虑了其他方式，这里只做一个简单的介绍</p><h3 id="_1-docker容器部署" tabindex="-1">1. docker容器部署 <a class="header-anchor" href="#_1-docker容器部署" aria-label="Permalink to &quot;1. docker容器部署&quot;">​</a></h3><p>Dockerfile如下（文件就在项目根目录下）：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">FROM node:lts-alpine</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKDIR /app</span></span>
<span class="line"><span style="color:#e1e4e8;">COPY package.json .</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN npm install</span></span>
<span class="line"><span style="color:#e1e4e8;">COPY . .</span></span>
<span class="line"><span style="color:#e1e4e8;">COPY dist ./dist</span></span>
<span class="line"><span style="color:#e1e4e8;">EXPOSE 7777</span></span>
<span class="line"><span style="color:#e1e4e8;">CMD [&quot;node&quot;, &quot;dist/main.js&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">FROM node:lts-alpine</span></span>
<span class="line"><span style="color:#24292e;">WORKDIR /app</span></span>
<span class="line"><span style="color:#24292e;">COPY package.json .</span></span>
<span class="line"><span style="color:#24292e;">RUN npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#24292e;">RUN npm install</span></span>
<span class="line"><span style="color:#24292e;">COPY . .</span></span>
<span class="line"><span style="color:#24292e;">COPY dist ./dist</span></span>
<span class="line"><span style="color:#24292e;">EXPOSE 7777</span></span>
<span class="line"><span style="color:#24292e;">CMD [&quot;node&quot;, &quot;dist/main.js&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f41cc9f4cdf344bc8ab3876259766939~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>可以看到生成镜像的体积在1.5个G左右，非常庞大！运行是没问题的，相当于把整个项目copy过去了，还得加上底层的linux核心！</p><h3 id="_2-pkg打包" tabindex="-1">2. pkg打包 <a class="header-anchor" href="#_2-pkg打包" aria-label="Permalink to &quot;2. pkg打包&quot;">​</a></h3><p>需要先安装pkg</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install pkg -g</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install pkg -g</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cfe3ec52efb43d09d9ddda98b9f81f9~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>可以看到，入口文件我使用的是build后的main.js，因为我如果使用源代码下的src/main.ts，打包会报错</p><p>估计是没法pkg没法直接打包，使用src/main.ts作为入口时会出现一下信息</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0e5a774d4384d9d81489002cd615f92~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>使用dist/mian.js这种方式打包有exe产生，打包出来的文件大概200多M，但是放到windows下运行依然会出错。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d30ee414ddf9403baddc2e1d61b3ecd3~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>报错如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1dcfb5ed09e425c99cc5e7b67f98162~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>这个问题在网上搜了一下，没有发现解决方案，希望有大佬可以解疑答惑。</p><p>至此，nestjs + prisma + mysql的打包部署已经讲完了，相比来说，我更喜欢使用webpack的方式进行打包，打包出来的文件只有5M不到，只要有node环境，直接使用node运行main.js文件，就完成了部署，非常简单方便！希望本篇文章能帮到有同样疑惑的你，如果有所帮助，记得给个关注和好评，谢谢！</p>`,84),o=[l];function c(r,i,t,u,d,b){return n(),e("div",null,o)}const g=s(p,[["render",c]]);export{y as __pageData,g as default};
