---
title: 「offer来了」2种递进学习思维，24道计网题目，保姆级巩固你的计网知识体系
author: 许小墨
date: '2021-11-06'
categories:
  - 前端开发
tags:
  - offer来了
sidebar: 'auto'
---

# ⚾ 序言

大家都知道，计算机网络是前端面试中非常爱考的面试题了，不得不说是八股文的经典。在小墨刚开始接触计网时，也是一直看到类似于**三次握手四次握手之类**的问题。刚开始我是知识比较浮于表面，对计网知识的了解就一直停留在知道有那么一些内容。但随着学习的深入，慢慢地我觉得，在了解一个东西之前，不仅仅要知道它是什么？还要知道它为什么出现？它的出现又解决了什么问题？这样的学习会更加有利于将其运用到我们的日常开发中。

在下面这篇文章中，将分享我学习计网的一个过程，以及自己整理的关于计网常考的一些面经题。

下面开始进入今天文章的讲解~😜

# 🏐 一、基础知识环节

## 1、专栏学习

刚开始面对的是一本非常厚重的书，u1s1，面对那**接近 1000 页**的书，我的心里其实蛮奔溃的。后面在机缘巧合下，在一个公众号上看到了一位前端博主的文章，**零一**。紧接着在 `csdn` 上看到他写的很多精选专栏，看完他的博客之后，才下意识地感觉……原来还有写的这么好的文章。这一段废话有点多……以后有机会再谈。

我当时先学的是零一博主的 `TCP` 专栏，博主的每一篇文章对小白都是极其友好类型，非常地通俗易懂。下面附上 `TCP` 专栏相关的文章链接 👇

| 序号  |                文章                |                                                           链接                                                           |
| :---: | :--------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| **1** | 【TCP/IP】概述网络分层以及协议介绍 | [https://lpyexplore.blog.csdn.net/article/details/108925528](https://lpyexplore.blog.csdn.net/article/details/108925528) |
| **2** |  【TCP/IP】IP 地址的划分及其分类   | [https://lpyexplore.blog.csdn.net/article/details/108935757](https://lpyexplore.blog.csdn.net/article/details/108935757) |
| **3** |     【TCP/IP】链路层的简单认识     | [https://lpyexplore.blog.csdn.net/article/details/109248705](https://lpyexplore.blog.csdn.net/article/details/109248705) |
| **4** |  【TCP/IP】详解 DNS 具体作用过程   | [https://lpyexplore.blog.csdn.net/article/details/109128967](https://lpyexplore.blog.csdn.net/article/details/109128967) |
| **5** |   【TCP/IP】图解 TCP 的通信机制    | [https://lpyexplore.blog.csdn.net/article/details/109133096](https://lpyexplore.blog.csdn.net/article/details/109133096) |
| **6** |             专栏传送门             |         [https://blog.csdn.net/l_ppp/category_10448348.html](https://blog.csdn.net/l_ppp/category_10448348.html)         |

以上文章可以按顺序学哦~

## 2、书籍学习

学习完上面的 5 篇博客之后，前后大概花了**15-20h**左右的时间。看完之后，算是稍微入了个门。但是计网的内容远远不止这些，所以，在学习了博客文章之后，我继续用书籍来深挖知识点。

搜寻了知乎和豆瓣，还有身边的小伙伴的推荐，大家都说对前端比较友好的书籍是： **《图解 TCP/IP》** 这一本书。**看下图 👇**

![计网书籍推荐](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270821911.jpeg)

这本书以图解的形式，讲解了计算机网络的大部分知识。可以说对入门选手和对看书就容易犯困的小伙伴来说实在是太太太友好了……强烈安利！

看完这本书之后，应对面试基本上算是足够了。如果还有想要深挖的小伙伴，可以去看深色封面的那本书……只是听过，但是我没有看过，所以这里只简单概括一下~

有了基础知识预备之后，就可以看一下一些面经题目，尝试着回顾和用自己的话语来回答。同时在文章下面的内容中，我也将对我遇到的系列题目进行归纳总结~

# ⚽ 二、思维导图环节

我们先用一张思维导图来了解该系列面经题的知识体系。**具体如下图 👇**

![计算机网络面试复习框架](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270821911.png)

思维导图收入囊中，下面开始分享面经题的解答流程~

# 🎳 三、OSI 七层模型

## 1、OSI 模型是什么？

`OSI` 七层模型，即网络通信的七个层次。之所以将其分为七个层次，是为了让开发人员可以在不同领域分别实现整个系统的不同部分。就像一个非常庞大的工程，每个员工都有自己擅长的岗位和专门负责的工作。

那么七个层次主要包括：物理层、数据链路层、网络层、传输层、会话层、表示层以及应用层。

**接下来谈论各个层次的作用。**

**第一个，应用层**。应用层是为应用程序提供服务并规定应用程序中通信相关的细节。包括文件传输、电子邮件、远程登录（虚拟终端）等协议。

**第二个，表示层**。表示层是将应用处理的信息转换为适合网络传输的格式，或将来自下一层的数据转换为上一层能够处理的格式。因此它主要负责数据格式的转换。

**第三个，会话层**。会话层是负责建立和断开通信连接，以及数据的分割等数据传输相关的管理。

**第四个，传输层**。传输层起着可靠传输的作用，它只在通信双方的节点上进行处理，而无需在路由器上处理。

**第五个，网络层**。网络层将数据传输到**目标地址**上，目标地址可以是多个网络通过路由器连接而成的某一个地址。因此这一层主要**负责寻址和路由选择**。

**第六个，数据链路层**。数据链路层负责物理层面上互联的、结点之间的通信传输。

**第七个，物理层**。负责 0、1 比特流（0、1 序列）与电压的高低、光的闪灭之间的互换。

## 2、OSI 七层模型遵循原则

**OSI 参考模型遵循五个原则：**

- 各个层级之间有清晰的边界，便于理解各个层级的功能；

- 每个层实现的功能不一样，并且不会互相影响；

- 层与层之间是**服务与被服务**关系；

- 层次划分有利于国际标准协议的制定；

- 层次数目越多，就越能避免各个层之间的**功能重复**。

# 🏏 四、TCP 与 UDP

## 1、TCP 与 UDP 的区别

|                          TCP                          |                         UDP                         |
| :---------------------------------------------------: | :-------------------------------------------------: |
|                    TCP 在传输层上                     |                   UDP 在传输层上                    |
|                       面向连接                        |                     面向无连接                      |
|                      面向字节流                       |                      面向报文                       |
|                      一对一通信                       |         一对一、一对多、多对一、多对多通信          |
|                  需要建立可靠的连接                   |                不需要建立可靠的连接                 |
| 适用于可靠传输的应用：web browsing、email、文件传输等 | 适用于实时应用：线上游戏、直播、IP 电话、语音会议等 |

**白话文回答：**

- `TCP` 是面向连接的，`UDP` 是面向无连接的，即**发送数据前**不需要建立连接。
- `TCP` 提供可靠的传输服务，通过 `TCP` 连接传送的数据，无差错，不丢失，不重复，且按序到达，而 `UDP` 则是尽最大努力交付，不保证可靠传输。
- 因此，因为 `TCP` 可靠，面向连接且不会丢失数据，所以 `TCP` 适合大数据量的交换。
- `TCP` 面向字节流，实际是 `TCP` 把数据看成是**一连串无结构的字节流**； `UDP` 则是面向报文的，且没有拥塞控制，因此，网络出现拥堵的情况下不会使原主机的发送速率降低，但是这个过程会出现丢包，所以它对实时的应用很有用，比如 `IP` 电话、视频会议和直播等等。
- 每一条 `TCP` 连接，只能是一对一的，`UDP` 则支持一对一、一对多、多对一和多对多的交互通信。
- `TCP` 的首部开销为**20 字节**，而 `UDP` 的只有**8 字节**。
- 综上所述，`TCP` 是面向连接的可靠性传输，而 `UDP` 则是不可靠的。

注： `TCP` 需建立三次连接、且 `TCP` 的包可以进行分组发送，会产生建立连接开销和分组开销。

## 2、TCP/UDP 的优缺点

### （1）TCP 的优点

- **可靠、稳定。**

- `TCP` 的可靠体现在 `TCP` 在传递数据之前，会有三次握手来建立连接；
- 且在数据传递时，有**确认**、**窗口**、**重传**、**拥塞控制**等机制；
- 在数据完成传送以后，还会通过断开连接来节约资源。

### （2）TCP 的缺点

- **慢、效率低、占用系统资源高，易被攻击。**
- `TCP` 在传递数据前，要先建立连接，这会消耗时间；
- 且在传递数据时，确认机制、重传机制、拥塞控制机制等都会消耗大量的时间；
- 同时要在每台设备上维护所有的传输连接，事实上，每个连接都会占用系统的 `CPU` 、内存等硬件资源；
- 而且，因为 `TCP` 有三次握手机制，这些也会导致 `TCP` 容易被人利用，实现 `DOS` 、 `DDOS` 等攻击。

### （3）UDP 的优点

- **快、比 TCP 稍安全。**
- `UDP` 是一个无状态的传输协议，且 `UDP` 没有 `TCP` 的握手、确认、窗口、重传、拥塞控制等机制，所以它在传递数据时非常快。没有 `TCP` 的这些机制，`UDP` 较 `TCP` 能被攻击者利用的漏洞就要少一些。
- 但 `UDP` 也是无法避免攻击的，比如：`UDP flood` 攻击。

### （4）UDP 的缺点

- **不可靠、不稳定。**
- 因为 `UDP` 没有 `TCP` 那些可靠的机制，所以在数据传递时，如果网络质量不好，就会很容易**丢包**。

## 3、DDOS 攻击（由 TCP 和 UDP 的缺点引出 DDOS 攻击问题）

### （1）什么是 DDOS 攻击？

- 分布式拒绝服务攻击（Distributed denial of sevice attack）；
- 即向目标系统同时提出**数量庞大**的服务请求。

### （2）DDOS 攻击方式？

攻击者如何攻击目标主机呢？

- 通过使**网络过载**来<u>干扰甚至阻断</u>正常的网络通讯。
- 通过向服务器提出大量的服务请求、使服务器超负荷。
- 阻断**某一用户**访问服务器。
- 阻断**某服务**<u>与特定系统或个人</u>的通讯。

### （3）如何应对 DDOS 攻击？

- 黑名单。
- `DDOS` 清洗：对用户请求的数据进行**实时监控**，及时发现 `DOS` 攻击等异常流量，在不影响正常业务开展的情况下清洗掉这些异常流量。
- `CDN` 加速。
- 高仿服务器：高仿服务器主要是指能独立防御**50Gbps 以上** ( `1Gbps=1024Mbps，即每秒1000M` ) 的服务器，能够帮助网站**拒绝服务攻击**，定期扫描**网络主节点**。

## 4、TCP 为什么可靠？

- `TCP` 会通过**检验和**、**序列号**、**确认应答**、**重发控制**、**连接管理**及**窗口控制**等机制实现可靠性传输。
- **那如何通过以上机制来实现可靠性传输呢？**
- 在 `TCP` 中，当发送端的数据到达接收主机时，接收端主机会返回一个已收到消息的通知。这个消息叫做确认应答 `（ACK）` 。（确认应答）
- 相反，当发送端发送数据出去之后，且在一段时间内，没有等到确认应答，则数据极有可能出现丢失的情况。
- 如果在一定时间内没有等到确认应答，那么发送方就可以认为数据已经丢失，并进行重发。由此，即使产生了丢包，仍然能够保证数据能够到达对端，实现可靠传输。（丢包重发）
- 此外，也有可能因为一些其他原因导致确认应答**延迟到达**，此时，发送主机同样会按照机制重发数据。（延迟重发）
- 但是这对于目标主机来说，简直是一个巨大的灾难。因为目标主机会反复收到相同的数据。
- 为此，需要引入一种新的机制，**序列号**。序列号能够识别**是否已经接收数据**，及**是否需要接收数据**。（序列号）
- 序列号是按照顺序给发送数据的每一个字节都**标上号码的编号**。接收端会查询所接收数据中 `TCP` 首部的序列号和数据的长度，将自己下一步应该接收的序号作为确认应答返送回去。（序列号）
- 就这样，通过序列号、确认应答等机制，实现 `TCP` 的可靠传输。

**注：** 序列号主要是让接收端可以丢弃数据并返回下一个应答号，这样就不会频繁地收到同一个数据。

## 5、TCP 的三次握手和四次挥手

### （1）TCP 的三次握手

**场景模拟：**

- 如通话一样，比如我现在跟面试官您打电话。那我会先问，喂，您好，听得到吗？
- 你会回我说，听到啦！那你能听到我的话吗？
- 我会再回你说，听到了，我们可以开始聊天了。

**三次握手：**

- 首先，客户端会发送一个带有 `SYN` 标志的数据包给对方；
- 接收方收到以后，会返回一个带有 `SYN/ACK` 标志的数据包返回给发送端，代表成功传达消息；
- 之后发送端再回传一个带有 `ACK` 标志的数据包，代表握手结束。

### （2）TCP 为什么要三次握手？

- 验证服务端和客户端是否遵循 `TCP/IP` 协议；
- 为了防止已失效的**连接请求报文段**突然又传送到服务端，避免错误产生。

### （3）TCP 的四次挥手

**第一次挥手：**

- 客户端进程发出**连接释放报文**，并且**停止发送数据**。

**第二次挥手：**

- 服务器收到**连接释放报文**，发出**确认报文**，此时，服务端就进行了 `close-wait` （关闭等待）状态。（客户端向服务器方向释放了，但是服务器发送数据，客户端依然要接收）
- 客户端收到服务器的确认请求后，客户端就进入了 `Fin-wait-2` （终止等待 2）状态，等待服务器发送**连接释放报文**（在这之前还需要接收服务器发送的最后数据）。

**第三次挥手：**

- 服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，服务器就进入了 `Last-ack` （最后确认）。

**第四次挥手：**

- 客户端收到服务器的连接释放报文后，必须发出确认，客户端就进入了 `time-wait` （时间等待）状态。
- 服务端只要收到了客户端发出的确认，立即进入 `closed` 状态。
- 至此，就结束了这次的 `TCP` 连接。（服务器结束 `TCP` 连接的时间要比客户端早一些）

### （4）TCP 为什么要四次挥手？

- 之所以要四次挥手，其实是**确保双方数据都已发送完毕**。

- `TCP` 是全双工模式，这就意味着，当 `主机1` 发送 `FIN` 报文段时，只是表示 `主机1` 已经没有数据要发送了， `主机1` 告诉 `主机2` ，它的数据已经全部发送完毕了。
- 当 `主机2` 返回 `ACK` 报文段时，表示它已经知道 `主机1` 没有数据发送了，但是 `主机2` 还是可以发送数据到 `主机1` 的。
- 当`主机2` 也发送了 `FIN` 报文段时，这个时候就表示 `主机2` 也没有数据要发送了，就会告诉 `主机1` ，我也没有数据要发送了。
- 最后， `主机1` 再发送 `ACK` 报文段来确认握手结束，之后彼此就会愉快的断开此次的 `TCP` 连接。

### （5）什么是面向连接协议？什么是面向无连接协议？

**面向连接协议：**

- 通信双方在通信时，需要事先建立好一条虚拟的通信线路。
- 通信过程有“<u>建立连接</u>、<u>维护连接</u>、<u>断开连接</u>“三个阶段。

**面向无连接协议：**

- 与面向连接相对，通信双方不需要事先建立<u>通信线路</u>，而是把每个**带有目的地址的报文分组**送到通信线路上，由系统自主<u>选定线路</u>进行传输。
- 面向无连接只有“<u>传送数据</u>”的过程。

### （6）为什么建立连接是三次握手，关闭连接是四次挥手呢？

- 建立连接的时候，服务器在 `listen` 状态下，收到建立连接请求的 `SYN` 报文后，服务器把 `ACK` 和 `SYN` 放在一个报文里发送给客户端。
- 而关闭连接时，服务器收到对方的 `FIN` 报文时，仅仅表示**①**对方不再发送数据了但是还能接收数据，而**②**自己也未必所有数据都已经发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方，之后 ③ 己方再发送 `FIN `报文给对方来表示同意现在关闭连接。因此，己方 `ACK` 和 `FIN` 一般都会**分开发送**，从而导致多了一次。

**注：** ①②③ 表示第一二三次挥手

### （7）如果已经建立了连接，但是客户端突然出现故障了该怎么办？

- `TCP` 还有一个**保活计时器**。
- 当客户端出现故障时，服务器肯定是不会一直等待下去，白白浪费资源的。
- 服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常设置为 `2h` ，若 `2h` 还没有收到客户端的任何数据，服务器就会发送一个 **探测报文段** 给客户端，以后每隔 `75s` 发送一次。
- 若一连发送 **10 个探测报文段** 仍没有反应，服务器就认为客户端出了故障，紧接着就会关闭连接。

**注：** `10x75=750s=12.5min`

# 🏒 五、TCP 的通信机制

## 1、TCP 的重发控制

- 我们都知道，在数据传输过程中可能会因为各种原因出现丢包现象，而当出现丢包现象时，即发送端在发完数据并等待一段时间以后，未接收到接收方应答，则视为丢包，于是就会进行重发。
- 其中，丢包现象分为两种：**①**发送过程丢包；**②**接收过程丢包。
- 那么，发送端发送完数据以后多久没有收到确认应答才判定数据丢包了呢？
- 这个一般都是随着网络环境的变化而变化的， `TCP` 会在每次发包时计算**往返时间**以及**偏差**来决定等待时间。
- 若重发后又出现了丢包，则下一次等待的时间会以**2 倍**、**4 倍**的指数函数增长。
- 但它肯定是不会无限进行重发的，当重发次数达到一定程度后<sup>[1]</sup>，会判定为网络异常，两端通信就会被强制关闭。

[1]：`TCP` 有一个保活计时器，如果在 `2h` 后还没有收到客户端的数据，那么就会重新复位这个计时器，之后每隔 `75s` 会发送一次，如果一连发送 10 个还是没有收到，那么就会断开连接。

## 2、TCP 的滑动窗口控制

**解题：**

- 什么原因导致需要有滑动窗口？
- 有了滑动窗口后可以解决什么问题？

**白话文回答：**

- 我们都知道，数据不应该一次性发送，不然丢失了都不知道往哪里找，因此应该采取 **分段发送** 的措施。
- 但是呢， `TCP` 将数据分段发送，虽然提高了传输的可靠性，但是存在着一个<u>致命的缺点</u>，那就是 **效率非常低** 。
- 因为每发送一段数据，都要等待接收端的确认应答后才能继续发送，若整个数据的分段较多，那么通信的性能就会很低了，因此 `TCP` 引入了 **窗口** 这个概念。
- **所谓窗口**，表示的是<u>无需等待</u>接收方的确认应答而可以**连续发送多段数据**。
- **举个例子**：假设要发送 `4` 段数据，如果每次都要发送后接收完才能再重新发送，那来回就得 `8` 次。但如果用滑动窗口的话，四段数据可以同时发出去，接收端再返回相应的确认应答给发送方。
- 这个时候发送方会根据相应的确认应答继续发送比该确认序列中序列号大的数据即可。

## 3、滑动窗口的重发控制

- 若使用滑动窗口这一技术后，即使某段数据出现**丢包现象**，也不会造成很大的影响。
- 因为接收端会一边接收发送端传过来的数据，一边用某种方式告知发送端前面丢失了哪一段数据。

## 4、TCP 的流量控制机制

**为什么需要流量控制机制？**

- 有时，发送端发送给接收端的数据超过了接收端的**最大承载能力**，就会造成数据**无法接收**的情况，从而导致之后会进行**数据重发**，这样子会非常**浪费性能**。

**如何解决这种问题呢？引出流量控制机制**

- 为了防止上述情况发生，`TCP` 提供了一种**机制**（即<u>流量控制机制</u>）来使得发送端每次发送的数据尽可能的在接收端的**承载范围之内**。
- 而实现方式就是， `接收端` 向 `发送端` 告知自己能够接收的**数据大小**，如此一来，发送端每次发送的数据就都不会超过<u>该值</u>，我们成该值为**窗口大小**。
- 一旦接收端暂时无法接收任何数据，它会告知发送端，因此发送端会**暂停数据的发送**。
- 但为了后续数据的正常发送，发送端会不时地向接收端发送一个 **窗口探测** ，试探性地看一下接收端**能否继续接收数据**。

## 5、TCP 的拥塞控制

- 因为出现了窗口控制，数据不再是一段一段发送，而是连续发送多段数据包，因此有时候如果出现网络拥堵的情况下，而我们又同时发送了大量的数据包，这很有可能会导致网络瘫痪。
- TCP 运用了一种叫做 **慢启动** 的技巧缓解上述问题。那何为 **慢启动** 呢？
- 就是不要在一开始就瞬间发送大量数据包，而是先发送一部分，然后再根据收发情况再发送更多的数据包。
- 总结就是每次发送的数据包会以 `1,2,4` 的指数型增长，但窗口大小也不会无限指数型增大，而是会达到某个值时进行一些调整，该值称为 **慢启动阈值** 。

> 流量控制机制和拥塞控制机制的区别：
>
> - 流量控制是以**接收端**为主导，接收端明确自己想要的窗口大小，然后发送端再把数据发送给接收端；
> - 而拥塞控制机制则是以**发送端**为主导，发送端试探性的以 1,2,4 的指数型增长给接收端发送数据，探测接收端的承载能力，等到接收端不能再接收数据时，发送端就会知道接收端没法承载这么多数据，于是就会进行向下调整。

# 🏸 六、结束语

在上面的这篇文章中，介绍了两种关于计算机网络知识的学习方式，同时，也用了 24 道题目来帮助大家更好地理解计网在前端面试中考察的内容。

对于前端来说，计网考察的内容相对会比较浅层，所以周一也用比较通俗易懂的方式去梳理一些经典的题目。如果有想要再继续深入学习的小伙伴，也可以看书籍继续补充自己的知识深度~

最后，预祝看到这篇文章的小伙伴们，都能够斩获到自己心仪的 `offer` ~

# 🐣 彩蛋 One More Thing

## 🏷️pdf 内容获取

👉 微信关注公众号 `许墨工作室` ，回复关键字 `计网面试pdf` 即可获取相关 `pdf` 内容~

👉 回复 `面试大全pdf` 可获取全专栏内容！

## 🏷️ 更新地址

👉 [offer 来了面试专栏](/column/Interview/)

## 🏷️ 番外篇

- 如果您觉得这篇文章有帮助到您的的话不妨点赞支持一下哟~~😉
- 以上就是本文的全部内容！我们下期见！👋👋👋