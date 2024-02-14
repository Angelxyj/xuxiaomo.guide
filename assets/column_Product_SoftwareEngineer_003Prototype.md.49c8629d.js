import{_ as o,o as t,c as e,Q as n}from"./chunks/framework.ab7e7ee0.js";const b=JSON.parse('{"title":"『软件工程3』你应该知道的三种原型实现模型：抛弃式、演化式、增量式","description":"","frontmatter":{"title":"『软件工程3』你应该知道的三种原型实现模型：抛弃式、演化式、增量式","author":"许小墨","date":"2021-05-18","categories":["产品汪"],"tags":["软件工程"],"sidebar":"auto"},"headers":[{"level":2,"title":"一、抛弃式原型开发","slug":"一、抛弃式原型开发","link":"#一、抛弃式原型开发","children":[]},{"level":2,"title":"二、演化式原型开发","slug":"二、演化式原型开发","link":"#二、演化式原型开发","children":[]},{"level":2,"title":"三、增量式原型开发","slug":"三、增量式原型开发","link":"#三、增量式原型开发","children":[]}],"relativePath":"column/Product/SoftwareEngineer/003Prototype.md","filePath":"column/Product/SoftwareEngineer/003Prototype.md","lastUpdated":1707839101000}'),r={name:"column/Product/SoftwareEngineer/003Prototype.md"},p=n('<h2 id="一、抛弃式原型开发" tabindex="-1">一、抛弃式原型开发 <a class="header-anchor" href="#一、抛弃式原型开发" aria-label="Permalink to &quot;一、抛弃式原型开发&quot;">​</a></h2><p><strong>1、定义</strong>：验证和澄清系统的需求描述，重新构造系统。</p><p><strong>2、流程图</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270941390.png" alt=""></p><p><strong>3、典型例子</strong></p><p>开发者与客户进行沟通交流，之后获取到客户的需求，于是开发者开发了该图形用户界面（GUI）的原型。但是之后呢，系统并没有用 GUI 继续做开发，而是采用 C++或者是其他语言来开发。</p><p><strong>4、有利条件</strong></p><p>（<strong>1</strong>）Reduce risk in a project, see if something can be done.</p><blockquote><p>降低项目中的风险，评估哪些事情可以做，哪些事情不能做；</p></blockquote><p>（<strong>2</strong>）Capture requirements(e.g. whether client likes the GUI or not) .</p><blockquote><p>捕捉需求，比如：客户是否喜欢 GUI 界面。</p></blockquote><p><strong>5、不利条件</strong></p><p>（<strong>1</strong>）Resources can be wasted, so control is needed.</p><blockquote><p>资源可能会被浪费，因此需要控制。</p></blockquote><p>（<strong>2</strong>）Good Project Management is required.</p><blockquote><p>需要良好的项目管理。</p></blockquote><p>（<strong>3</strong>）Good communication with the client is required.</p><blockquote><p>与客户保持良好的沟通。</p></blockquote><p>（<strong>4</strong>）When is it a good time to stop developing the prototype.</p><blockquote><p>无法判断停止开发原型的时间。</p></blockquote><h2 id="二、演化式原型开发" tabindex="-1">二、演化式原型开发 <a class="header-anchor" href="#二、演化式原型开发" aria-label="Permalink to &quot;二、演化式原型开发&quot;">​</a></h2><p><strong>1、定义</strong>：逐步改进和细化原型，将原型进化为最终系统。</p><p><strong>2、流程图</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270941110.png" alt=""></p><p><strong>3、典型例子</strong></p><p>与汽车行业类似，一款车型也在逐步完善。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270941419.png" alt=""></p><p><strong>4、有利条件</strong></p><p>（<strong>1</strong>）The client can see the changes that they want.</p><blockquote><p>客户可以看到他们想要的改变。</p></blockquote><p>（<strong>2</strong>）Very good for improving user interface acceptance.</p><blockquote><p>有利于提高用户界面的接受程度。</p></blockquote><p><strong>5、不利条件</strong></p><p>（<strong>1</strong>）Very weak on documentation (e.g. system keeps changing)</p><blockquote><p>不利于文档撰写，比如：系统持续改变，那么文档就不好落笔。</p></blockquote><p>（<strong>2</strong>）The entire project needs strong project control,the same as leader needs to monitor development.</p><blockquote><p>整个项目需要强有力的项目控制，同时领导者也需要监控项目的发展进程。</p></blockquote><p>（<strong>3</strong>）When is it a good time to stop evolving and finishing the project and possible lead to a badly structured system.</p><blockquote><p>是什么时候停止发展和结束项目，我们都不知道；所以这很有可能会导致系统结构不良。</p></blockquote><p>（<strong>4</strong>）Special development staff may be required.</p><blockquote><p>可能需要特殊的开发人员。</p></blockquote><p><strong>6、适用情况</strong></p><p>（<strong>1</strong>）Small projects.</p><blockquote><p>小型项目。</p></blockquote><p>（<strong>2</strong>）Limited projects that are limited by time or money.</p><blockquote><p>受时间或金钱限制的有限项目。</p></blockquote><p>（<strong>3</strong>）Those projects that need done quickly.</p><blockquote><p>那些需要快速完成的项目。</p></blockquote><p>（<strong>4</strong>）Projects whose details cannot be determined in advance.</p><blockquote><p>无法预先确定其细节的项目。</p></blockquote><p>（<strong>5</strong>）Projects with a high graphical content.</p><blockquote><p>图形内容丰富的项目。</p></blockquote><h2 id="三、增量式原型开发" tabindex="-1">三、增量式原型开发 <a class="header-anchor" href="#三、增量式原型开发" aria-label="Permalink to &quot;三、增量式原型开发&quot;">​</a></h2><p><strong>1、定义</strong>：在建立软件总体设计基础上，采用增量开发方法，使原型成为最终系统。</p><p><strong>2、流程图</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270941801.png" alt=""></p><p><strong>3、典型例子</strong></p><p><strong>英文版</strong>：</p><p><strong>A software company and a client may agree on delivery of system parts. For example, a website delivery might be:</strong></p><p>1st January - Delivery of web-server, web-pages,verification and validation scripts.</p><p>5th February - Delivery of database, security software.</p><p>21st February - Delivery of merchant payment system.</p><p><strong>中文版</strong>：</p><p><strong>一个软件公司和客户就系统部件的交付达成协议。 例如，一个网站交付可能是：</strong></p><p>1 月 1 日 - 交付 ① 网络服务器；② 网页；③ 验证和确认脚本。</p><p>2 月 5 日 - 交付数据库和安全软件。</p><p>2 月 21 日 - 商家付款系统的交付。</p><p><strong>4、有利条件</strong></p><p>（<strong>1</strong>）Good for breaking a larger system into parts, so components can be built easier.</p><blockquote><p>非常适合将较大的系统分解为多个部分，因此组件可以更轻松地被构建。</p></blockquote><p>（<strong>2</strong>）Customer sees the system in stages, so no &quot;big bang&quot; approach.</p><blockquote><p>客户分阶段看到系统，所以可能比较少会有“大爆炸”的态度。</p></blockquote><p><strong>5、不利条件</strong></p><p>（<strong>1</strong>）Requires good communication and agreement.</p><blockquote><p>需要良好的沟通和协商。</p></blockquote><p>（<strong>2</strong>）Requires good project management, control and monitoring work.</p><blockquote><p>需要良好的项目管理，控制和监视工作。</p></blockquote><p>（<strong>3</strong>）communication and agreement.</p><blockquote><p>需要良好的沟通和协商。</p></blockquote><p>（<strong>4</strong>）Requires good project management, control and monitoring work.</p><blockquote><p>需要良好的项目管理，控制和监视工作。</p></blockquote><p>如果这篇文章对你有帮助，记得留下<strong>star</strong>哦~</p>',82),s=[p];function a(c,g,l,i,u,d){return t(),e("div",null,s)}const h=o(r,[["render",a]]);export{b as __pageData,h as default};