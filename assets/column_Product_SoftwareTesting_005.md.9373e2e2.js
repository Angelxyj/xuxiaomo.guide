import{_ as t,o,c as r,Q as n}from"./chunks/framework.ab7e7ee0.js";const _=JSON.parse('{"title":"『软件测试5』测开岗只要求会黑白盒测试？NO！还要学会性能测试！","description":"","frontmatter":{"title":"『软件测试5』测开岗只要求会黑白盒测试？NO！还要学会性能测试！","author":"许小墨","date":"2021-06-15","categories":["产品汪"],"tags":["软件测试"],"sidebar":"auto"},"headers":[{"level":1,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":1,"title":"一、🤪 性能测试概念","slug":"一、🤪-性能测试概念","link":"#一、🤪-性能测试概念","children":[{"level":2,"title":"1、为什么要有性能测试？","slug":"_1、为什么要有性能测试","link":"#_1、为什么要有性能测试","children":[]},{"level":2,"title":"2、性能测试是什么？","slug":"_2、性能测试是什么","link":"#_2、性能测试是什么","children":[]},{"level":2,"title":"3、性能测试的目的","slug":"_3、性能测试的目的","link":"#_3、性能测试的目的","children":[]}]},{"level":1,"title":"二、🤐 性能测试指标","slug":"二、🤐-性能测试指标","link":"#二、🤐-性能测试指标","children":[{"level":2,"title":"1、响应时间","slug":"_1、响应时间","link":"#_1、响应时间","children":[]},{"level":2,"title":"2、吞吐量","slug":"_2、吞吐量","link":"#_2、吞吐量","children":[]},{"level":2,"title":"3、并发用户数","slug":"_3、并发用户数","link":"#_3、并发用户数","children":[]},{"level":2,"title":"4、TPS(Transaction Per Second)","slug":"_4、tps-transaction-per-second","link":"#_4、tps-transaction-per-second","children":[]},{"level":2,"title":"5、点击率","slug":"_5、点击率","link":"#_5、点击率","children":[]},{"level":2,"title":"6、资源利用率","slug":"_6、资源利用率","link":"#_6、资源利用率","children":[]}]},{"level":1,"title":"三、😶 性能测试种类","slug":"三、😶-性能测试种类","link":"#三、😶-性能测试种类","children":[{"level":2,"title":"1、负载测试","slug":"_1、负载测试","link":"#_1、负载测试","children":[]},{"level":2,"title":"2、压力测试","slug":"_2、压力测试","link":"#_2、压力测试","children":[]},{"level":2,"title":"3、并发测试","slug":"_3、并发测试","link":"#_3、并发测试","children":[]},{"level":2,"title":"4、配置测试","slug":"_4、配置测试","link":"#_4、配置测试","children":[]},{"level":2,"title":"5、可靠性测试","slug":"_5、可靠性测试","link":"#_5、可靠性测试","children":[]},{"level":2,"title":"6、容量测试","slug":"_6、容量测试","link":"#_6、容量测试","children":[]}]},{"level":1,"title":"四、😲 性能测试流程","slug":"四、😲-性能测试流程","link":"#四、😲-性能测试流程","children":[{"level":2,"title":"1、性能测试流程","slug":"_1、性能测试流程","link":"#_1、性能测试流程","children":[]},{"level":2,"title":"2、性能测试流程分析","slug":"_2、性能测试流程分析","link":"#_2、性能测试流程分析","children":[{"level":3,"title":"（1）分析性能测试需求","slug":"_1-分析性能测试需求","link":"#_1-分析性能测试需求","children":[]},{"level":3,"title":"（2）制定性能测试计划","slug":"_2-制定性能测试计划","link":"#_2-制定性能测试计划","children":[]},{"level":3,"title":"（3）设计测试用例","slug":"_3-设计测试用例","link":"#_3-设计测试用例","children":[]},{"level":3,"title":"（4）编写性能测试脚本","slug":"_4-编写性能测试脚本","link":"#_4-编写性能测试脚本","children":[]},{"level":3,"title":"（5）测试执行及监控","slug":"_5-测试执行及监控","link":"#_5-测试执行及监控","children":[]},{"level":3,"title":"（6）运行结果分析","slug":"_6-运行结果分析","link":"#_6-运行结果分析","children":[]},{"level":3,"title":"（7）性能测试报告","slug":"_7-性能测试报告","link":"#_7-性能测试报告","children":[]}]}]},{"level":1,"title":"五、🤪 结束语","slug":"五、🤪-结束语","link":"#五、🤪-结束语","children":[]}],"relativePath":"column/Product/SoftwareTesting/005.md","filePath":"column/Product/SoftwareTesting/005.md","lastUpdated":1708002454000}'),e={name:"column/Product/SoftwareTesting/005.md"},s=n('<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>很多时候，我们都知道软件有<strong>黑白盒测试</strong>，但往往还遗漏掉了一个<strong>性能测试</strong>。</p><p>在下面的这篇文章中，就带领大家来了解性能测试。一起来学习吧~🧐</p><h1 id="一、🤪-性能测试概念" tabindex="-1">一、🤪 性能测试概念 <a class="header-anchor" href="#一、🤪-性能测试概念" aria-label="Permalink to &quot;一、🤪 性能测试概念&quot;">​</a></h1><h2 id="_1、为什么要有性能测试" tabindex="-1">1、为什么要有性能测试？ <a class="header-anchor" href="#_1、为什么要有性能测试" aria-label="Permalink to &quot;1、为什么要有性能测试？&quot;">​</a></h2><p>（1）2007 年 10 月，北京奥组委实行 2008 年奥运会门票预售，一时间订票官网访问量激增导致系统瘫痪，最终奥运会门票暂停销售 5 天。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270910185.png" alt="门票预售"></p><p>（2）2009 年 11 月 22 日，由于圣诞临近， <code>eBay</code> 网站的商品交易量比去年同期增长 <code>33%</code> ，正是由于多出的这 33%使得 <code>eBay</code> 网站不堪重负而崩溃，导致卖家蒙受当日销售额 <code>80%</code> 的损失，可谓损失惨重。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270910978.png" alt="eBay"></p><p>（3）12306 订票网站，自 2010 年上线以来就饱受诟病，每年春运期间，总会因为抢票高峰而崩溃，用户在买票时出现无法登陆的现象。2014 年，12306 网站甚至出现了安全问题，用户可以轻易获取陌生人的身份证号码、手机号码等信息。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270910675.png" alt="12306订票网站"></p><p>通过以上例子我们可以清楚的认识到，不管是奥运会的门票预售系统，还是 12306 的订票系统崩塌，都是由于软件系统没有经过性能测试或者性能测试不充分而引发的问题。因此，作为一名测试人员，除了要对软件的基本功能测试之外，还需要对软件性能进行测试，<strong>软件性能测试</strong>也是非常重要且非常必要的一项测试。</p><h2 id="_2、性能测试是什么" tabindex="-1">2、性能测试是什么？ <a class="header-anchor" href="#_2、性能测试是什么" aria-label="Permalink to &quot;2、性能测试是什么？&quot;">​</a></h2><p>所谓性能测试，就是通过<strong>性能测试工具</strong>模拟正常、峰值及异常负载状态下对<strong>系统的各项性能指标</strong>进行测试的活动。性能测试能够验证软件系统是否达到了用户期望的性能需求，同时也可以发现系统中可能存在的性能瓶颈及缺陷，从而优化系统的性能。</p><h2 id="_3、性能测试的目的" tabindex="-1">3、性能测试的目的 <a class="header-anchor" href="#_3、性能测试的目的" aria-label="Permalink to &quot;3、性能测试的目的&quot;">​</a></h2><p><strong>性能测试的目的主要有以下四点：</strong></p><ul><li>验<strong>证系统性能</strong>是否满足预期的性能需求，包括系统的执行效率、稳定性、可靠性、安全性等。</li><li>分析软件系统在<strong>各种负载水平下</strong>的运行状态，提高<strong>性能调整效率</strong>。</li><li>识别<strong>系统缺陷</strong>，寻找系统中可能存在的<strong>性能问题</strong>，定位<strong>系统瓶颈</strong>并解决问题。</li><li>系统调优，探测<strong>系统设计与资源之间</strong>的最佳平衡，改善并优化系统的性能。</li></ul><h1 id="二、🤐-性能测试指标" tabindex="-1">二、🤐 性能测试指标 <a class="header-anchor" href="#二、🤐-性能测试指标" aria-label="Permalink to &quot;二、🤐 性能测试指标&quot;">​</a></h1><p><strong>性能测试指标有以下 6 个指标：</strong></p><ul><li>响应时间</li><li>吞吐量</li><li>并发用户数</li><li><code>TPS</code> (Transaction per Second)</li><li>点击率</li><li>资源利用率</li></ul><p>接下来将围绕着这 6 个指标进行一一讲解。</p><h2 id="_1、响应时间" tabindex="-1">1、响应时间 <a class="header-anchor" href="#_1、响应时间" aria-label="Permalink to &quot;1、响应时间&quot;">​</a></h2><p>响应时间 <code>（Response Time）</code> 系统对用户请求作出响应所需要的时间。</p><p>这个时间是指<strong>用户从软件客户端发出请求到用户接收到返回数据的整个过程所需要的时间</strong>，包括各种中间件（如服务器、数据库等）的处理时间。</p><p>如下图所示：</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270910576.png" alt=" 响应时间"></p><p>从上图中可以看到，从客户端发出请求到客户端接收到返回数据的整个过程即为系统的响应时间，为 <code>t1+t2+t3+t4+t5+t6</code> 。</p><p>一般来说，<strong>响应时间越短，表明软件的响应速度越快，性能越好</strong>。但是响应时间需要与用户的具体需求相结合，例如火车订票查询功能响应时间一般 2s 内就可以完成，而在网站下载电影时，如果一部电影能够在几分钟内完成下载，则说明该网站就已经很快了，所以需要依据实际情况而定。</p><h2 id="_2、吞吐量" tabindex="-1">2、吞吐量 <a class="header-anchor" href="#_2、吞吐量" aria-label="Permalink to &quot;2、吞吐量&quot;">​</a></h2><p>吞吐量 <code>（Throughput）</code> 是指单位时间内<strong>系统能够完成的工作量</strong>，它衡量的是<strong>软件系统服务器的处理能力</strong>。</p><p>吞吐量的<strong>度量单位</strong>可以是请求数/秒、页面数/秒、访问人数/天、处理业务数/小时等。</p><p>吞吐量是软件系统衡量<strong>自身负载能力</strong>的一个很重要的指标，<u>吞吐量</u><strong>越大</strong>，<u>系统单位时间内处理的数据</u>就<strong>越多</strong>，<u>系统的负载能力</u>就<strong>越强</strong>。</p><h2 id="_3、并发用户数" tabindex="-1">3、并发用户数 <a class="header-anchor" href="#_3、并发用户数" aria-label="Permalink to &quot;3、并发用户数&quot;">​</a></h2><p>并发用户数是指<strong>同一时间</strong>请求和访问的用户数量。</p><p><strong>并发用户数量越大，对系统的性能影响越大</strong>，并发用户数量较大可能会导致<strong>系统响应变慢</strong>、<strong>系统不稳定</strong>等问题。软件系统在设计时必须要考虑<strong>并发访问</strong>的情况，测试工程师在进行性能测试时也必须进行并发访问的测试。</p><h2 id="_4、tps-transaction-per-second" tabindex="-1">4、TPS(Transaction Per Second) <a class="header-anchor" href="#_4、tps-transaction-per-second" aria-label="Permalink to &quot;4、TPS(Transaction Per Second)&quot;">​</a></h2><p><code>TPS</code> 是指系统每秒钟<strong>能够处理的事务和交易</strong>的数量，它是衡量<strong>系统处理能力</strong>的重要指标。</p><h2 id="_5、点击率" tabindex="-1">5、点击率 <a class="header-anchor" href="#_5、点击率" aria-label="Permalink to &quot;5、点击率&quot;">​</a></h2><p><strong>点击率</strong>是指用户每秒向 <code>Web</code> 服务器提交的 <code>HTTP</code> 请求数，这个指标是 <code>Web</code> 应用特有的一个性能指标，通过<strong>点击率</strong>可以评估用户产生的<strong>负载量</strong>，并且可以判断系统是否稳定。点击率只是一个<strong>参考指标</strong>，帮助衡量 <code>Web</code> 服务器的性能。</p><h2 id="_6、资源利用率" tabindex="-1">6、资源利用率 <a class="header-anchor" href="#_6、资源利用率" aria-label="Permalink to &quot;6、资源利用率&quot;">​</a></h2><p><strong>资源利用率</strong>是指软件对系统资源的使用情况，包括<strong>CPU 利用率</strong>、<strong>内存利用率</strong>、<strong>磁盘利用率</strong>等，资源利用率是分析软件<strong>性能瓶颈</strong>的重要参数。</p><h1 id="三、😶-性能测试种类" tabindex="-1">三、😶 性能测试种类 <a class="header-anchor" href="#三、😶-性能测试种类" aria-label="Permalink to &quot;三、😶 性能测试种类&quot;">​</a></h1><p><strong>性能测试种类主要有以下六种：</strong></p><ul><li>负载测试</li><li>压力测试</li><li>并发测试</li><li>配置测试</li><li>可靠性测试</li><li>容量测试</li></ul><p>接下来将围绕着以上这<strong>六种性能测试种类</strong>进行讲解。</p><h2 id="_1、负载测试" tabindex="-1">1、负载测试 <a class="header-anchor" href="#_1、负载测试" aria-label="Permalink to &quot;1、负载测试&quot;">​</a></h2><p><strong>（1）定义</strong></p><p><strong>负载测试</strong>是指<strong>逐步增加系统负载</strong>，测试系统性能的变化，并最终确定在满足系统性能指标的情况下，系统所能够承受的<strong>最大负载量</strong>。</p><p><strong>（2）举个例子</strong></p><p><strong>负载测试</strong>类似于<strong>举重运动</strong>，通过不断给运动员增加重量，确定运动员身体状况保持正常的情况下所能举起的最大重量。</p><p>对于负载测试来说，前提是满足性能指标要求，例如一个软件系统的响应时间要求不超过 <code>2s</code> ，则在这个前提下，不断增加用户访问量，当<strong>访问量超过 1 万人</strong>时，系统的响应时间就会变慢，响应时间会超过 <code>2s</code> 。因此，可以确定系统响应时间不超过 <code>2s</code> 的前提下最大负载量是 1 万人。</p><h2 id="_2、压力测试" tabindex="-1">2、压力测试 <a class="header-anchor" href="#_2、压力测试" aria-label="Permalink to &quot;2、压力测试&quot;">​</a></h2><p><strong>（1）定义</strong></p><p><strong>压力测试</strong>也叫<strong>强度测试</strong>，它是指<strong>逐步给系统增加压力</strong>，测试系统的性能变化，使系统某些资源<strong>达到饱和或系统崩溃的边缘</strong>，从而确定系统所能承受的最大压力。</p><p><strong>（2）压力测试与负载测试的区别</strong></p><p>负载测试是在保持性能指标要求的前提下系统能够承受的最大负载，而压力测试则是使系统性能达到极限的状态。</p><p>压力测试可以揭露那些只有在高负载条件下才会出现的 <code>Bug</code> ，如同步问题、内存泄露等。</p><p><strong>（3）峰值测试</strong></p><p>性能测试中还有一种压力测试叫做<strong>峰值测试</strong>，它是指瞬间（不是逐步加压）将系统压力加载到最大，使测试软件系统<strong>在极限压力下</strong>的运行情况。</p><h2 id="_3、并发测试" tabindex="-1">3、并发测试 <a class="header-anchor" href="#_3、并发测试" aria-label="Permalink to &quot;3、并发测试&quot;">​</a></h2><p><strong>（1）定义</strong></p><p>并发测试是指通过模拟用户并发访问，测试<strong>多用户并发访问同一个应用、同一个模块或者数据记录</strong>时是否存在死锁或其他性能问题。</p><p><strong>（2）举个例子</strong></p><p>并发测试一般没有标准，只是测试并发时会不会出现意外情况，<strong>几乎所有的性能测试都会涉及到一些并发测试</strong>，例如<strong>多个用户同时访问</strong>某一条件数据，多个用户同时在更新数据，那么数据库可能就会出现<strong>访问错误</strong>、<strong>写入错误</strong>等异常情况。</p><h2 id="_4、配置测试" tabindex="-1">4、配置测试 <a class="header-anchor" href="#_4、配置测试" aria-label="Permalink to &quot;4、配置测试&quot;">​</a></h2><p><strong>（1）定义</strong></p><p><strong>配置测试</strong>是指调整软件系统的软硬件环境，测试各种环境对系统性能的影响，从而找到系统各项资源的<strong>最优分配原则</strong>。</p><p>（<strong>2）举个例子</strong></p><p>配置测试不改变代码，只改变软硬件配置，例如安装版本更高的数据库、配置性能更好的 CPU、内存等，通过更改外部配置来提高软件的性能。</p><h2 id="_5、可靠性测试" tabindex="-1">5、可靠性测试 <a class="header-anchor" href="#_5、可靠性测试" aria-label="Permalink to &quot;5、可靠性测试&quot;">​</a></h2><p><strong>（1）定义</strong></p><p>可靠性测试是指给系统加载一定的业务压力，使其<strong>持续运行一段时间</strong>（如 <code>7*24h</code> ），测试系统在这种条件下是否能够稳定运行。</p><h2 id="_6、容量测试" tabindex="-1">6、容量测试 <a class="header-anchor" href="#_6、容量测试" aria-label="Permalink to &quot;6、容量测试&quot;">​</a></h2><p><strong>（1）定义</strong></p><p><strong>容量测试</strong>是指在一定的软硬件及网络环境下，测试系统所能支持的<strong>最大用户数</strong>、<strong>最大存储量</strong>等。</p><p><strong>（2）举个例子</strong></p><p>容量测试通常与数据库、系统资源（如 <code>CPU</code> 、内存、磁盘等）有关，用于规划将来需求增长（如用户增长、业务量增加等）时，对数据库和系统资源的优化。</p><h1 id="四、😲-性能测试流程" tabindex="-1">四、😲 性能测试流程 <a class="header-anchor" href="#四、😲-性能测试流程" aria-label="Permalink to &quot;四、😲 性能测试流程&quot;">​</a></h1><h2 id="_1、性能测试流程" tabindex="-1">1、性能测试流程 <a class="header-anchor" href="#_1、性能测试流程" aria-label="Permalink to &quot;1、性能测试流程&quot;">​</a></h2><p><strong>先用一张图来查看性能测试的整个流程。如下图所示：</strong></p><p><img src="https://img-blog.csdnimg.cn/20210609220959129.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center" alt="性能测试流程"></p><h2 id="_2、性能测试流程分析" tabindex="-1">2、性能测试流程分析 <a class="header-anchor" href="#_2、性能测试流程分析" aria-label="Permalink to &quot;2、性能测试流程分析&quot;">​</a></h2><h3 id="_1-分析性能测试需求" tabindex="-1">（1）分析性能测试需求 <a class="header-anchor" href="#_1-分析性能测试需求" aria-label="Permalink to &quot;（1）分析性能测试需求&quot;">​</a></h3><p>在性能测试需求分析阶段，测试人员需要收集有关项目的各种资料，并与开发人员进行沟通，对整个项目有一定的了解，针对需要进行性能测试的部分进行分析，确定测试目标。</p><p>例如客户要求软件产品的查询功能响应时间不超过 <code>2s</code> ，则需要明确多少用户量情况下，响应时间不超过 <code>2s</code> 。对于刚上线的产品，用户量不多，但几年之后可能用户量会巨增，那么在性能测试时是否要测试产品的高并发访问，以及高并发访问下的响应时间。</p><h3 id="_2-制定性能测试计划" tabindex="-1">（2）制定性能测试计划 <a class="header-anchor" href="#_2-制定性能测试计划" aria-label="Permalink to &quot;（2）制定性能测试计划&quot;">​</a></h3><ul><li><strong>确定测试环境：</strong> 包括<strong>物理环境</strong>、<strong>生产环境</strong>、测试团队可利用的<strong>工具</strong>和<strong>资源</strong>等。</li><li><strong>确定性能验收标准：</strong> 确定<strong>响应时间</strong>、<strong>吞吐量</strong>和<strong>系统资源</strong>（CPU、内存等）<strong>利用总目标和限制</strong>。</li><li><strong>设计测试场景：</strong> 对<strong>产品业务</strong>、<strong>用户使用场景</strong>进行分析，设计符合用户使用习惯的场景，整理出一个<strong>业务场景表</strong>，为编写测试脚本提供依据。</li><li><strong>准备测试数据：</strong> 性能测试是<strong>模拟现实的使用场景</strong>，例如模拟用户高并发，则需要准备用户数量、工作时间、测试时长等数据。</li></ul><h3 id="_3-设计测试用例" tabindex="-1">（3）设计测试用例 <a class="header-anchor" href="#_3-设计测试用例" aria-label="Permalink to &quot;（3）设计测试用例&quot;">​</a></h3><p>性能测试用例是根据<strong>测试场景</strong>为测试准备数据，例如模拟用户高并发，可以分别设计 <code>100个</code> 用户并发数量、 <code>1000个</code> 用户并发数量等，此外还要考虑用<strong>户活跃时间</strong>、<strong>访问频率</strong>、<strong>场景交互</strong>等各种情况。测试人员可以根据<strong>测试计划</strong>中的业务场景表设计出足够的测试用例以达到<strong>最大的测试覆盖</strong>。</p><h3 id="_4-编写性能测试脚本" tabindex="-1">（4）编写性能测试脚本 <a class="header-anchor" href="#_4-编写性能测试脚本" aria-label="Permalink to &quot;（4）编写性能测试脚本&quot;">​</a></h3><ul><li>正确<strong>选择协议</strong>。</li><li>根据工具的支持情况和测试人员熟悉程度选取脚本语言。</li><li>编写测试脚本时，要遵循代码编写规范，保证代码的质量。</li><li>做好脚本的<strong>维护管理工作</strong>。</li></ul><h3 id="_5-测试执行及监控" tabindex="-1">（5）测试执行及监控 <a class="header-anchor" href="#_5-测试执行及监控" aria-label="Permalink to &quot;（5）测试执行及监控&quot;">​</a></h3><p><strong>1）了解几个指标</strong></p><p><strong>性能指标：</strong> 本次性能测试要测试的性能指标的变化。</p><p><strong>资源占用与释放情况：</strong> <code>CPU</code> 、内存、磁盘、网络等使用情况。性能测试停止后，各项资源是否能正常释放以供后续业务使用。</p><p><strong>警告信息：</strong> 一般软件系统在出现问题时会<strong>发出警告信息</strong>，当有警告信息时，测试人员要及时查看。</p><p><strong>日志检查：</strong> 经常<strong>分析系统日志</strong>，包括<strong>操作系统</strong>、<strong>数据库</strong>等日志。</p><p><strong>2）结果影响</strong></p><p>性能测试监控对<strong>性能测试结果分析</strong>、对<strong>软件的缺陷分析</strong>都起着非常重要的作用。</p><p>在测试过程中，如果遇到与预期结果不符合的情况，测试人员要调整系统配置或修改程序代码来定位问题。</p><p>由于性能测试执行过程需要监控的数据复杂多变，它要求测试人员对监控的<strong>数据指标</strong>有非常清楚的认识，同时还要求测试人员对<strong>性能测试工具</strong>非常熟悉。作为性能测试人员，应该不断努力，深入学习，不断积累知识经验才能做的更好。</p><h3 id="_6-运行结果分析" tabindex="-1">（6）运行结果分析 <a class="header-anchor" href="#_6-运行结果分析" aria-label="Permalink to &quot;（6）运行结果分析&quot;">​</a></h3><p>性能测试完成之后，测试人员需要<strong>收集整理测试数据</strong>并<strong>对数据进行分析</strong>，将<strong>测试数据与客户要求的性能指标</strong>进行对比，若不满足客户的性能要求，需要进行性能调优然后重新测试，直到产品性能满足客户需求。</p><h3 id="_7-性能测试报告" tabindex="-1">（7）性能测试报告 <a class="header-anchor" href="#_7-性能测试报告" aria-label="Permalink to &quot;（7）性能测试报告&quot;">​</a></h3><p>性能测试完成之后需要<strong>编写性能测试报告</strong>，阐述性能测试的目标、性能测试环境、性能测试用例与脚本使用情况、性能测试结果及性能测试过程中遇到的问题和解决办法等。软件产品<strong>不能只进行一次性能测试</strong>，因此性能测试报告需要<strong>备案保存</strong>，<strong>作为下次性能测试的参考</strong>。</p><h1 id="五、🤪-结束语" tabindex="-1">五、🤪 结束语 <a class="header-anchor" href="#五、🤪-结束语" aria-label="Permalink to &quot;五、🤪 结束语&quot;">​</a></h1><p>对于测开人员来说，不能只会黑白盒测试，还要会性能测试。性能测试对于软件来说也是至关重要的一部分，没有经过性能测试的软件一般都会出现 bug 满天飞的问题。相信通过上文的了解，大家对性能测试有一个基础的认识。</p><p>性能测试的内容就讲到这里啦！如有需要了解软件测试相关的其他内容，可到『<a href="/xuxiaomo.guide/column/Product/SoftwareTesting/">软件测试</a>』栏目进行查看学习~</p>',108),a=[s];function l(g,i,d,c,h,p){return o(),r("div",null,a)}const b=t(e,[["render",l]]);export{_ as __pageData,b as default};