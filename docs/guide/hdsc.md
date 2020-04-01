<!-- toc -->
# 快速入门
## 概述
金航业务基础平台V6是面向未来信息化发展趋势，支撑新技术发展要求而产生的新一代软件平台，本平台完全由金航数码自主研发而成。金航数码于2012年启动平台的规划和研发，经过多轮验证和研发的迭代，目前已经发展到R3版本，该版本在Windows、Linux、AIX、Oracle一体机等多种异构环境下进行了大量的兼容性和高并发测试，表现出了良好的性能。基于业务基础平台V6可以构建多个应用共享一个平台的部署架构，实现技术架构统一、基础数据共享、组件可插拔，极大提升了应用系统间的集成能力。目前已经基于业务基础平台V6构建了MES、协同办公、多项目管理、资金管理、合同管理等诸多自主软件，并在航空、航天、国航发、船舶、兵器等装备制造业得到广泛应用，目前使用的客户超过 100 家。在航空行业内，先后在集团总部、西飞、陕飞、洪都、沈阳所等多个用户的关键业务领域进行了应用和验证，实施的项目超过100个。


## 平台架构
###	平台应用架构
**业务基础平台V6** ：是面向企业复杂业务，符合企业中台战略，支持组件重用和积累，适应业务随需而变，符合统一IT架构和集成规范，满足应用系统开发、运行、集成、维护、以及管理需要的软件基础框架。在整个软件系统层次结构中，业务基础平台位于数据库和中间件之上，应用系统之下。
![](../.vuepress/public/ksrm/ztjg.png)
业务基础平台V6主要是由应用平台、大数据平台、PaaS平台构成。

**应用平台**是IT业务应用的综合开发运行环境，面向系统的构建与运行，包含。覆盖了应用系统需求分析、业务设计、代码开发、系统测试、过程管理、系统集成、性能监控的软件研发与运行全过程。
**大数据平台**是企业大数据的赋能平台，主要包含数据采集、数据存储和算法建模三个部分。满足企业对内、外数据的采集、清洗、转换、分析、挖掘。其中，航空专用算法模型库的建设将加速航空工业制造业的智能化与信息化进程。
**PaaS平台**是云计算的基础，包含应用管理、模板管理、应用商店、主机管理、容器管理、镜像管理、容器引擎。通过对物理资源的管理及云端应用的自动部署和管理，为企业开发、部署和实施云化业务应用而提供支撑。
###	平台技术架构
平台技术架构是由运行环境支撑层、核心技术层、基础功能和技术组件层组成，这些内容构成了应用系统运行的最基本内核。业务基础平台V6采用广泛应用的、质量可靠的Java EE开源领域成熟技术组件，经过设计团队的总结和提炼，有机进行组合，形成了经过高度优化的，成熟稳定的应用系统技术架构，并包含了应用系统开发所需的大部分技术组件，内容包含了电子表单、搜索引擎、流程引擎、即时通信、企业网盘、报表等常用功能。
![](../.vuepress/public/ksrm/jsjg.png)
技术架构层是在系统平台层（操作系统、数据库及应用服务器）和业务架构层之间建立的一层技术封装层和系统资源监控和管理层。技术架构层屏蔽不同具体技术实现的细节，减少直接使用系统资源带来的复杂性、异构性、不安全性及不稳定性；技术架构层监控和管理系统资源，保证系统资源的可用性及其合理使用；技术框架层提供最佳编程模式，加快在不同技术平台上开发和部署应用的速度，保证应用的健壮性。技术架构层所屏蔽技术实现细节包括界面风格、多数据库适配、事务处理、并发处理、缓存处理、安全管理等等。
平台运行环境支持多种操作系统（Solaris、Linux、Windows 等），可运行于符合 J2EE 规范的多种应用服务器（Tomcat、JBoss、IBM WebSphere、Oracle WebLogic等），数据库支持Oracle、Mysql、SQLServer、达梦等多种数据库。
平台核心技术层采用多个主流成熟的开源组件，其中展现层使用页面展示功能强大的jQueryEasyUI和Bootstrap3，控制层采用Spring MVC 模式构造，业务逻辑层为Spring，数据层使用MyBatis，服务层采用了轻量化的REST服务，为了提升组织用户、数据字典等基础数据的读性能，平台采用了REDIS作为缓存服务。合理的分层，简化了管理的复杂性，降低软件开发技术难度。
平台的界面技术提供了基于EasyUI和Bootstrap3的两种技术组件。如果客户端浏览器是IE8以上版本或者Chrome、Firefox浏览器，我们强烈推荐使用Bootstrap3 UI组件。
基于EasyUI技术主要用于传统的企业级应用系统，功能丰富，支持IE6+、Chrome、Firefox等主流的浏览器，尤其是对IE6、IE7的支持是目前WEB UI技术的最佳选择。基于Bootstrap3的UI组件，支持响应式布局，拥有丰富的UI组件，和HTML5无缝融合，是未来WEB发展的主流技术，新的UI组件既能满足后台管理系统的需求，也可以开发互联网化的网站界面，在性能和易用性上比easyui更好，支持IE8+、Chrome、Firefox等主流的浏览器。
在基础功能及技术组件层，平台提供了完善的基础功能包括：组织机构、集中授权、数据字典、三员管理、日志审计、登录认证、定时任务、服务管理、用户管理等共计50个功能模块。在基础功能之上是开箱即用的技术组件，包括：电子表单、流程引擎、搜索引擎、企业网盘、即时通讯、Office控件、甘特图控件等30+个，平台将应用软件的业务逻辑和开发技术分开，使得应用软件的开发者可以仅关注应用的业务逻辑，而不必关注其繁琐的技术实现，这使管理层与业务人员参与应用软件的开发成为可能。
平台在支持传统单体应用的基础上还支持分布式的微服务架构。在传统应用架构基础上增加了微服务管控层，应用通过微服务管控层将自身的业务能力以服务的方式公开，其他应用在获取授权的前提下消费该服务。业务基础平台提供的系统管理、流程管理、电子表单等平台组件通过微服务管控将平台的基础服务开放给基于业务基础平台的应用。
![](../.vuepress/public/ksrm/wfw.png)
平台的微服务管控支持服务注册、服务发现、服务监控、服务授权、服务网关、负载均衡、服务熔断、弹性伸缩、分布式事务等功能。


