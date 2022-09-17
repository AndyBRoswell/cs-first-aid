# CS 自救指南&emsp;CS First Aid: A Vital Guide for CSE Students

最后更新：2022/7/2

这是主要针对（将）在中国内地就读计算机类专业的学生们准备的一份自救指南，顶校学神以及其他任何天赋异禀人士可以跳过。

计算机类专业包括但不限于：计算机科学与技术、计算机科学与工程、软件工程、信息安全、网络安全、网络空间安全、智能科学与技术、人工智能，等等。

注意：
- “信息与计算科学” 是数学类专业。
- 与大数据或人工智能有关的专业，对数学的要求往往更高。信息安全等安全方向的专业，由于涉及密码学（信安等专业必修），也对数学提出了更高的要求。另一方面，软件工程对数学能力的要求相对较低。

# 前言&emsp;在那内卷时代，没有置身于事外

本部分最后更新于：2022/8/12

相信许多人都有着高考失利未能进入理想大学的遗憾，也深知自己在大学里能够获得的资源远远少于本校和名校的各路学霸。即便侥幸进入名校，也总是很容易因为各种各样的不可抗力，走上许多弯路。

无数同学如履薄冰、步步为营，生怕在某个将自己导向不同世界线的关口做出错误的选择；好不容易下了决定赌一把，却只有在很久之后才有机会判断这一步棋是否走对；在猛然发现走错了的时候，又早已追悔莫及。

行业乃至社会的容错率越来越低：
- 学历歧视
- 年龄危机
- 往往只能找到加班严重、全年无休的岗位
- 缺乏具有一定技术含量的实战经验，找第一份实习都困难，更别说日后的工作
- ……

作为在“大内卷时代”摸爬滚打的一员，私以为：有必要将自己踩过的坑以及总结出来的经验与方法提供给后来者，帮助各位尽可能利用好最珍贵的本科时光。即便没能卷赢一众卷王，也至少能减少光阴的浪费，并为日后的自己积累更多的选择筹码。所谓 “一步错，步步错” ，希望这份《自救指南》也能给到大家一些及时止损的机会，充分降低做错选择并继续错下去的概率。

本《自救指南》将长期更新。也欢迎大家批评指正。

## 注意

撰写本《自救指南》的主要目的，是为了让大家真正学到有用的知识与技能。考研等各类考试并不是《自救指南》主要针对的场景。

# 第零章&emsp;提升效率的工具与思想

本部分最后更新于：2022/9/12

## 计算机

### 多花一点必要的钱，换来随后若干年的效率提升，是一本万利的。

如果你不想：
- 稍微开多点网页就卡，或者爆内存，使得很多网页或程序不能同时开着，干起活儿来（尤其是需要同时参考、核对、整理大量资料的场景）巨麻烦。
- 卡顿到作业都不好做。

那么，还犹豫什么呢？想尽办法搞到一台能用的机子吧。

选机提示：
- 假如想给老机器升级，首选部件是内存或 SSD。这对用户体验的提升是非常明显的。
- 不玩单机游戏，三四千来块（预算宽松一点的可以放宽到五千左右）的机器通常也够做开发了。但是，内存和硬盘的容量一定要管够。
- 目前建议：内存容量不少于 16 GB，硬盘总容量不少于约 500 GB。
  - 大量软件的体积都在不断膨胀。在 Windows 下，有的软件还会强制安装到 C 盘。为了 C 盘空间尽量大，建议不要对硬盘划分过多的分区，单个分区最好。
- 尽量不要选择采用了低压 U 的笔记本。除非你确实十分在意轻薄、续航、发热。
  - 近年来，低压 CPU 提升不少，日常的轻负载应用的性能表现往往不错，且同时能维持相对低的功耗。

如果经济实在困难，考虑常去学校机房或电子阅览室。

这里特别要说一下，有的同学的家里明明是有经济能力的，但是不知道为什么，家长就是不肯让子女用稍微贵一点的机子。
- 我看到过一些读机械、建筑之类的设计类专业的学生的家长，又不是没钱，却非得逼着子女卡死三千多的预算。这样的后果就是作业都难以做完，因为要用到的行业软件相当吃配置。总是不交作业或不按要求完成作业会是什么结局，不用我多说了吧。
- 有的家长呢，买个奢侈品随随便便三四万就出手了，但允许子女买台几千块的 PC 却万般不愿意。真的不知道说什么好。
- 就算子女自己攒钱买机器，被家长发现了还要挨一顿臭骂，也都算轻的。

已知在这样的经济开销无法太高的条件下，也希望大家能够集思广益，一同想想办法，摸索出最适合自己的方法来，并分享给大家，共同进步。

**HARDWARE IS CHEAP. PROGRAMMERS ARE EXPENSIVE.**

为了进一步提升生产力，可以考虑：
- 选用大屏的笔记本，不要怕重（背着当锻炼身体）。屏幕够大，也是生产力；硕大的笔记本，散热通常更好，有机会减少降频程度，提升性能，也是提升生产力。有条件的同学使用台式机亦可，并搭配大尺寸的显示器。但要注意配置 UPS（不间断电源供应系统），防止宿舍停电导致丢失数据。宿舍经常停电在内地大学并不少见。
- **多个屏幕**。可以购买外接显示器，或者使用平板电脑作为第二屏。免费软件 Splashtop Wired XDisplay 可以将 Android 平板电脑作为第二屏，但会给 PC 带来一定的 CPU 占用率。
- 经济能力足够的同学，可考虑使用两台计算机：一台高性能，可以是又厚又重的游戏本（砖头本）或台式机，一般放在宿舍（家里或出租屋）；另一台主打轻薄，带去课室或者其它地方，方便上课做笔记或写代码。

### 让学习工作生活更方便的计算机配件

- USB 集线器（分线器），即 USB Hub。扩展 USB 接口数量，使得可以同时连接多个 U 盘、移动硬盘、手机、平板电脑、读卡器等设备。建议配合 USB 延长线一同使用。
- 置物架。充分利用 z 轴空间。
- 排插。一定要买插座数量多的，省得插各类充电器之类的玩意儿的时候拔来拔去。
- 数位板。打草稿、写材料、画作业的各种乱七八糟的图用。我们不是专业画画的，也没必要买太贵的板。
- 存储，存储，存储！！！！**大学生是典型的经济能力相对不足却又容易因为遭遇意外而导致损失极其惨重的群体**。一定要把金钱尽量花费在能够令自己避免概率不能忽略的极其重大损失的物品上。
  - 内置存储尽量必选 SSD，防震；可选 HDD，相同价格下容量大。
  - 外置存储 SSD 或 HDD 均可。
  - 尽量购买大容量的产品。
    - 大容量的产品往往具有更高的容量价格比。SSD 的容量价格比在 2 TB 左右达到峰值，机械硬盘则不超过 18 TB。使用更小的物理体积和更少的设备数量（也占用更少的接口）获得相同容量，何乐而不为？
  - 根据本人近几个月对存储市场的考察，U 盘基本不值得购买。
    - 除非实在有特殊要求，比如存储设备占用体积极小、保修的高度省心，可考虑 CZ880。
    - 允许体积大一些的条件下，可购买 M.2 2230 / 2242 SSD，然后用硬盘盒转接作为移动 SSD 通过 USB 接口连接到 PC。
- 云盘：
  - Google Drive：单人免费 15 GB。
  - OneDrive：单人免费 5 GB。
    - 有用户反映：OneDrive 的同步机制不是高度可靠，导致自己的数据丢失。
    - 使用 edu 邮箱虽然能开通 1 TB 的存储空间，但所在高校或科研院所的管理员**能够查看并修改存储内容**。
    - 不要去其它渠道购买所谓的 5 TB（或其它大容量）OneDrive 帐号。
    - 注意事项的详述参见 https://blog.csdn.net/COFACTOR/article/details/103261624 。
  - Mega 网盘。
  - Dropbox：单人免费 20 GB。
  - 百度网盘：5 GB + 1024 GB。
    - 有用户反映：百度网盘的 “秒传” 功能可能 “撞哈希”，导致误判不同文件为相同文件。不过，根据近年来的观察，此问题应该已解决。
  - 微云：单人免费 10 GB。
- **支架及类似物。将计算机或显示器垫高，防止颈椎问题。**

## 电子书

- 方便做笔记，尤其是修改笔记。
- 节省住处的空间。
- 易于携带。
- 易于备份。

有条件的情况下，建议对电子书做 OCR（光学字符识别）。不过，各大软件的 OCR 功能一般都是收费的。

有的教材难以买到电子版，可以先买纸质版，然后在网上找店家扫描成电子版并识别文字（可以将教材在下单后直接寄给店家进行扫描）。

在 PDF 上做笔记，推荐 Drawboard PDF。有免费和收费的版本，但免费版本已经够用。

选用这个软件的一个重要原因是，其它很多软件有一个严重问题：如果增加了笔记又删除，保存的 PDF 文件的大小不会减小。这个软件虽然默认情况下也是这样的，但可以通过在保存 / 另存为时调节选项来压缩其大小。

ABBYY FineReader PDF 在保存时会自动压缩到尽量小，但该软件在未输入序列号时只能保存 100 页 (?)。笔者购买了这个软件，当时花了一大笔 RMB。但因为需要扫描的书非常多，相比之下，这笔一次性的购买很值得。不过，该软件已经改为订阅制，需要按月或按年付费，不再能够通过一次性购买获得长期授权。

## 备份

做好多重备份（本地 + 网盘、异地备份），特别是学习资料和其它重要数据。

## 其它软件

### Mathpix Snipping Tool

可以识别数学公式。成功注册帐户后，每月可以免费识别 50 条。邀请其它用户成功注册后，自己和该用户都可以再获得 50 条免费识别公式的机会。

## 一些重要思想

### 用钱换时间

对于能够提升学习效率的物件，确实有需要就不要犹豫，尽快买。不要老是等什么双十一双十二之类的活动。
- 现在很多商品，特别是数码产品，在这些活动之前经常会悄咪咪涨价，活动一开始再降下来，制造大力度打折的假象，进而使得实际上在这些购物节期间价格并不便宜多少。
- 软件上想省钱的，可以多找找（开源）免费的软件。

不要去抢那些零碎的优惠。比如：
- 学校附近某个奶茶店开张，为了几块十来块的优惠去排队一个下午。真的很没有必要。况且，奶茶喝多了也不好。
- 笔者做志愿活动期间，看到过有商家在某小区门口搞活动，奖品无非是粽子或者其它一些简单的吃的，或者一二十块这种程度的返现，结果那小区里外好多人（特别是老人家）就在那里挤着来参加，折腾了一上午。真替他们觉得累。
- “瓜分XX亿”？收皮啦你！

经济条件不错的，不建议勤工俭学。
- 与志愿活动不同。勤工俭学会有少量的工资，因此不可以算作志愿活动。
- 实在有闲的情况除外（按照现在的卷情，已经基本不可能，除非是有条件继承家产的各种二代）。

### 开通自己学校或科研机构的 edu 邮箱

具体方式一般可参见就读单位的官网，或询问本单位的相关人员。

许多软件使用教育邮箱注册可享受极大优惠。例如：
- Visual Studio Community。**只有通过教育邮箱才可以使用**。另外两个版本 Professional 和 Enterprise 都是收费的。
  - Windows 平台的 VS 主要使用 C# 开发，GUI 框架为 WPF。实践表明，Windows 系统中，其运行速度显著快于 JetBrains 系列 IDE（Java + Swing）。美中不足的是，Visual Studio 尚不支持在 Linux 系统中运行。
  - 请及时升级到 Visual Studio 2022 新版本。因为 VS2022 是 64 位的，允许使用超过 4 GB 的内存，并提升运行于 64 位环境下的性能，有利于顺利打开超大规模的解决方案（solution，VS 里面一个 solution 包含若干个工程或项目，也就是 project，很多 IDE 都只有 project 的概念）。另外，代码补全的改进获得了开发者们的较多好评。
- JetBrains 全家桶——**免费，免费，免费（不要再去找破解版了）！！** 举例：
  - CLion：跨平台 C++ IDE
  - IntelliJ IDEA：最流行的 Java IDE（也支持 Kotlin、Groovy、Scala 等需要 JVM 的语言）
  - Rider：跨平台 C# IDE
  - PyCharm：广受好评的 Python IDE
  - WebStorm：相当不错的 Web 开发 IDE
- Microsoft Office Home & Student

顺带一提，不仅仅是计算机行业的软件，其它领域也有机会充分享受教育优惠。例如：
- Sonarworks SoundID Reference：校正监听音箱和监听耳机的频响曲线和延迟。教育优惠的折扣力度经常都在 40% 以上。

### 千万不要高估自己的记忆力

能记下来的就记下来，特别是那些主要靠记忆的、零散的知识点。
- 有可能因为失眠或者其它各种古怪的身体原因，而使得记忆受影响。
- 又或者，发现自己其实不是很适合这一行，或者兴趣没有预想中的高，进而使得相关的知识不是很好记。
- 还有一个重要理由：许多书的信息密度其实比较低。自己整理笔记，提高信息密度，日后想复习想查阅都很高效。

### 记笔记的效率

对于一些信息密度较低的书，可以开一个新的文档去记笔记。如果书的信息密度比较高，那么建议直接在书上画重点。

如何判断书的信息密度？每个人对信息密度的感觉不同，只能通过多读书来积累自己的直觉。
- 以本人为例，一般而言，数学类书籍的信息密度对本人来说比较高；而许多专业课教材的信息密度较低。
- 有条件的同学可以使用语音输入。

### 不要光学不练

尤其是学习编程语言期间，**必须通过做项目来巩固知识，否则很快会遗忘**。

想不到要做什么项目的，可以：
- 每天做一些数学题，微积分之类的。
- 提前去刷 LeetCode 或 HackerRank，或者到各大学校的 Online Judge（OJ）上做算法题。
- 在开源站点上找一些具有自己感兴趣的功能的软件，模仿它们的实现。
  - 常见的知名开源网站：GitHub、GitLab、BitBucket、SourceForge、Gitee ……
  - 并不是所有高 Star 的开源项目都具有良好的代码结构。每个程序员都应当形成最适合自己的一套代码风格。

### 自动化

觉得用计算机做某件事很麻烦，就可以去想怎样将其自动化。常见的途径是：搜索相关的软件，或自己编程实现。
- 基本目标：避免使用计算机做大量重复的手工工作。按照这个目标，寻找合适的自动化方案并实施。

### 尽早熟悉生产力工具的使用

比如：各类 IDE（集成开发环境）、Microsoft Office、LaTeX，等等。这部分时间是不能省的。不愿意额外花时间去学这些东西，短期来看虽然节省了时间，但从长期来看，带来的麻烦在时间上的开销大得多。
- 实在不想折腾 LaTeX 的，可以使用 Microsoft Word 敲公式。随着版本的更新，Word 公式编辑器的许多操作正越来越接近 LaTeX 。

假如实在不想跟相关的教程去学，那么可以试着：每当用这些软件做某项工作觉得很麻烦时，就去网上搜索可能提高效率的操作方法。

# 第一章&emsp;课程、教材与公开课

本部分最后更新于：2022/8/19

> “上清华的课比上清华简单多了。” 
> 
> —— B站一网友

内地与境外高校计算机类专业的总体差距，主要体现在打基础的本科教学上（这个观点是我们老师说的，他也是教研室主任）。而内地的计算机顶校与非顶校之间，本科教学质量的差距也是十分值得引起重视的。

通过充分利用信息时代以来最伟大的发明——互联网，大家也有机会享受（至少是一部分）以往只有顶校学生才可以享受到的资源。

在没有特殊说明的情况下，对于每门课，只需要从罗列的若干本教材中选择一本即可（不包括习题集）。

对于公开课，没有注明建议倍速，并不代表应当原速播放。可能是为了照顾基础不好的学生，许多大学在录制公开课时，都会将视频的播放速度降低。大家在播放的时候，一般都可以加速播放。

如无意外，应当在不晚于 “建议开课学期” 完成相应课程的学习。

## 基础必修（公共必修）

### 数学分析 || 高等数学（微积分） / Mathematical Analysis || Calculus
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 | 备注 | 
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 数学分析教程 | 常庚哲 | 中国科学技术大学 | 2 | 高等教育出版社 | 2003/5 | 简体中文
|| 史济怀 | 中国科学技术大学
| 数学分析 | 史济怀 | 中国科学技术大学
|| 何琛 | 中国科学技术大学
|| 徐森林 | 中国科学技术大学
| 数学分析讲义 | 程艺 | 中国科学技术大学
| 数学分析 | 陈纪修 | 复旦大学 ||高等教育出版社| | 简体中文
|| 於崇华 | 复旦大学
|| 金路 | 复旦大学
| 数学分析精选习题全解 | 薛春华 | ? || 清华大学出版社 | 2009/12 | 简体中文
|| 徐森林 | 中国科学技术大学

#### 说明
- 常庚哲、史济怀编著的《数学分析教程》可选 2012 年第三版。
- 程艺版本的较新，网上应该也已经有公开课。
- 薛春华、徐森林编著的《习题全解》有解析。
- 限于时间和篇幅，这里没有列出更多课本。多年以来，国内外的几代科教工作者留下了相当多的优秀教材，比如张筑生的《数学分析》（裴礼文 / 周民强 / 谢惠民等版本亦可）和 Владимир Антонович Зорич（B. A. 卓里奇）的《数学分析》共 2 卷（**“难得惨绝人寰”**）。
- 中国科学院大学微积分 A 班选用卓里奇《数学分析》。

**大学的数学分析、高等代数、概率统计、普通物理等课程都已相当成熟的。因此，教材的影响没有那么大，教材之间的差距也没有那么大。如果纠结选择哪一本，不妨随机抽选。只要不是实在写得太烂，教材本身基本上不会带来大问题。**

推荐开课学期：1 ~ 2。

#### 院校开课情况选讲
- 内地大多数院校的计算机类专业，要求学习的是高等数学（有的学校称作微积分）。
- 部分对数学要求较高的院校或专业，则会要求学习（工科）数学分析。
- 一些大学虽然按照高等数学（微积分）的教学大纲与考试要求讲课，但也使用数学分析的教材。
- 中国科学院大学的《微积分》一共有 A、B、C 三个班，课程难度依次降低。但 A 班主要针对数学、物理类专业。很明显，它应当对应其它高校的《数学分析》课程。
- 一般而言，数学和物理等理科专业要求学习数学分析。通常，数学系会学习三个学期，其它院系学习两个学期，且要求有所降低。
- 中国科学技术大学计算机科学与技术专业要求学习两个学期的数学分析 B（2020 年数据）。
- 南京大学人工智能学院要求学习两个学期的工科数学分析。
- 北京大学 “图灵班” 要求学习数学分析。

北京大学&emsp;本科培养方案（2020 · 理科卷）：

http://www.dean.pku.edu.cn/userfiles/upload/download/202009220815142452.pdf

#### 公开课
包括但不限于：

- 复旦和中科大的数学分析课程，在网上都可以找到公开课。建议倍速：1.5 x ~ 2 x。
- https://www.bilibili.com/video/BV1ZW411e7PF?from=search&seid=12091659250493259510
- 
- 数学分析（中国科学技术大学）&emsp;主讲：史济怀
- 公开课录制时间比较早（2003 年秋开始录制），音质比较渣，而且有少量的视频有内容缺损。凑合着看吧。
- https://www.bilibili.com/video/BV12s411h7v4?from=search&seid=12091659250493259510
- 
- 数学分析（复旦大学）&emsp;主讲：陈纪修
- 有比较多的同学反映，中科大的数分比复旦的要难。大家可以根据自己实际的情况选择。

### 高等代数 || 线性代数 / Linear Algebra
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 | 备注 | 
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 高等代数 | 丘维声 | 北京大学 | 2 | 清华大学出版社 | 2019/6 | 简体中文
||| 西安交通大学
| Introduction to Linear Algebra | Gilbert Strang | Massachusetts Institute of Technology | 5 | 2016 |  | English
| 线性代数 | 李炯生 | 中国科学技术大学 || 中国科学技术大学出版社 | 1989 | 简体中文 | **困难**
|| 查建国 | 中国科学技术大学
| Algebra | Michael Artin | Massachusetts Institute of Technology | 2 | Pearson | 2010 | English
| Interactive Linear Algebra | Dan Margalit | Georgia Institute of Technology |  |  |  | English 
||Joseph Rabinoff | Duke University |
| 基础代数 | 席南华 | 中国科学院大学 |||| 简体中文
| Linear Algebra Done Right | Sheldon Axler | University of California, Berkeley | 3 |  | 2015 | English
|| Kenneth Ribet | San Francisco State University
| 线性代数 | 李尚志 | 中国科学技术大学 |||| 简体中文
||| 北京航空航天大学
| 线性代数的几何意义 | 任广千 || 1 | 西安电子科技大学出版社 | 2015/7 | 简体中文
|| 谢聪
|| 胡翠芳

#### 说明
- GATech 的《Interactive Linear Algebra》，可前往以下网页在线浏览：https://textbooks.math.gatech.edu/ila/chap-algebra.html
- 李炯生等编著的《线性代数》可选 2010 年第 2 版。但是，原书面向的是中国科学技术大学数学系或少年班，难度较大，不建议数学功底较弱的同学选用。
- 如果你具有一定的线代基础，那么 MIT 的教材《Introduction to Linear Algebra》及其公开课可能难度偏低（不够深入）。
- 中国科学院大学数学系有班级选用 Алексей Иванович Кострикин（柯斯特利金）的《代数学引论》。

 “高等代数” 是苏联的说法，在欧美高校中没有对应的课程。在中国内地，“高等代数” 一般在数学、物理类专业开设，内容比 “线性代数” 课程要多。

一般地，学习一到两个学期。

推荐开课学期：1 ~ 2。

#### 院校开课情况选讲
- 南京大学人工智能学院要求学习两个学期的高等代数。
- 北京大学 “图灵班” 要求学习高等代数。

#### 公开课与参考资料
包括但不限于：

- https://www.bilibili.com/video/BV19W411G7QU?from=search&seid=14404683565163581636
- 高等代数（北京大学）&emsp;主讲：丘维声
- 本课程是面向清华大学物理系学生的基础必修课。
- 建议倍速：≤ 1.5 x
- 
- https://www.bilibili.com/video/BV1ix411f7Yp?from=search&seid=2805254012188999371
- Introduction to Linear Algebra（Massachusetts Institute of Technology）&emsp;主讲：Gilbert Strang
- 建议倍速：≤ 1.5 x
- https://www.bilibili.com/video/BV1ys411472E
- 
- （参考资料）线性代数的本质&emsp;主讲：3Blue1Brown

### 离散数学 / Discrete Mathematics
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Discrete Mathematics and its Applications | Kenneth H. Rosen |  | 8 | McGraw-Hill Higher Education | 2018/7/9 | English
| 离散数学 | 左孝凌 | 上海交通大学 |||| 简体中文
| 离散数学 | 屈婉玲 | 北京大学 |  | 北京大学出版社 | 2014/2 | 简体中文
|| 耿素云 | 北京大学
|| 张立昂 | 北京大学
| 离散数学教程 | 耿素云 | 北京大学 |  | 北京大学出版社 | 2009/7 | 简体中文
|| 屈婉玲 | 北京大学
|| 王捍贫 | 北京大学
| 离散数学习题解析 | 耿素云 | 北京大学 |  | 北京大学出版社 | 2009/8 | 简体中文
|| 屈婉玲 | 北京大学
|| 王捍贫 | 北京大学
|| 刘田 | 北京大学

#### 说明
离散数学为计算机类专业的必修课。常学习两个学期，也有许多学校学习一个学期，少数学校三个学期。
离散数学的学习内容主要包括：
- 数理逻辑
- 集合论
- 代数系统（代数结构） / 近世代数（抽象代数）
- 组合数学
- 图论
- 数论

在数学类专业，这些内容一般会单独开课。但在计算机类专业，对掌握这些知识的要求要低很多（例如，只教简单的命题逻辑和一阶逻辑，基础的集合论与图论、抽象代数，以及初等数论，等等），因此通常把授课内容合并在一起，统称 “离散数学”。

#### 院校开课情况选讲
- 北京大学计算机类专业（含 “图灵班” ）学习三个学期的离散数学。

推荐开课学期：1 ~ 2。

#### 公开课
包括但不限于：

- https://www.bilibili.com/video/BV1BW411n7gw?from=search&seid=4574874822332206232
- 离散数学（北京大学）&emsp;主讲：刘田、屈婉玲、王捍贫

### 概率论与数理统计 / Probability Theory and Statistics
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 概率论与数理统计 | 陈希孺 | 中国科学技术大学 |  | 中国科学技术大学出版社 | 2009 | 简体中文
| 概率论与数理统计 | 徐全智 | 电子科技大学 |  | 高等教育出版社 | 2004 | 简体中文
|| 吕恕 | 电子科技大学

#### 说明
概率论与数据统计课程是日后的机器学习等众多专业课的基础，请务必落实。

推荐开课学期：3。

### 物理 / Physics
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 大学物理学 | 张三慧 | 清华大学 | 4 | 清华大学出版社 |  | 简体中文
| 普通物理学 | 程守洙 | 南京大学 | 7 | 高等教育出版社 | 2016 | 简体中文
|| 江之永 | 南京大学
| 物理学教程 | 马文蔚 | 东南大学 | 3 | 高等教育出版社 | 2006 | 简体中文
|| 周雨青 | 东南大学

#### 说明
内地各大学通常将大学物理列为工科公共必修课，修习一到两个学期。
- 化学等工科可能需要学习两个学期；
- 生物、医学、农学等专业一般安排一个学期。

一般地，普通物理为物理类专业的必修课程，常分为力学、热学、电磁学、光学和原子物理学五门课。大学物理是非物理专业的公共基础课，也包括力、热、电、光、原，但课时明显比物理系少，学习内容和难度也比物理系低。

物理苦手可以选择难度偏低的《物理学教程》，东南大学编写。

大学物理可以巩固微积分的掌握。因此，一般在学习完单变量微积分（高等数学 I）以后开始学习。

推荐开课学期：1 ~ 2。

#### 院校开课情况选讲
(*) 中国科学技术大学计算机科学与技术专业 2020 级培养方案要求学习三个学期的物理类课程：
- 第一学期：力学 B、热学 B。
- 第二学期：大学物理-基础实验 A、电磁学 C。
- 第三学期：大学物理-综合实验、光学 B、原子物理 B。

学有余力的学霸与学神可以考虑尝试。

中国科学技术大学&emsp;本科培养方案：

https://catalog.ustc.edu.cn/plan

#### 公开课
包括但不限于：

- https://www.bilibili.com/video/BV1Fx411T7sV?from=search&seid=3309839293019551596
- 普通物理学（清华大学）&emsp;主讲：杨振宁

### C 语言 / C Programming Language
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|The C Programming Language | Brian W. Kernighan |  |  |  | 2019/9/6 | English
|| Dennis M. Ritchie
| C Primer Plus | Stephen Prata | College of Marin in Kentfield | 6 | Pearson | 2014 | English

#### 说明
许多专业课给出的代码示例是用 C / C++ 语言编写的。同时，如果想走嵌入式、内核、驱动等方向，对 C 语言的掌握是必不可少的。

自 1972 年推出以来，C 语言已经发布了多个版本。C 语言在 1989 年首次标准化，得到的标准称为 ANSI C（C89）。此后，又陆续发布了 C95、C99、C11 和 C17（2018-10 发布）版本。预计在 2023 年发布新的版本，非正式版本号 C2x。学习 C 语言时，需要注意了解新版本的特性。

2022 年 2 月，Linux 内核作者 Linus Torvalds 表示，Linux 内核将从 C89 迁移至 C11。

推荐开课学期：1。
### C++ / C++
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| C++ Primer | Josée Lajoie |  | 6 | Addison-Wesley Professional | 2023 | English
|| Stanley B. Lippman
|| Barbara E. Moo

#### 说明
笔者认为，C++ 应当是**必修**的。这是因为：相比 Java、Python、C# 等高级语言，C / C++ 更加贴近硬件。打好 C / C++ 的基础，有利于尽快建立对计算机的主要部件与计算机整体的认识，形成硬件软件结合的基本思想，对计算机将如何执行自己编写的语句有一个更加明确的思路。

此外，许多其它高级语言的语法和代码风格等，都可以在 C++ 中找到。如果在熟悉 C++ 以后再去学习其它语言，学习速率就会快得多，因为要学习的很多内容都是自己已经接触过了的。

C / C++ 标准的正式版是要收费的，网上只能找到免费的最终草稿（final draft），最终草稿与正式标准一般只有顺序上的区别。

可以到 http://cplusplus.com/ 和 https://en.cppreference.com/w/ 查阅资料。中文版： https://zh.cppreference.com/w/ 。

【★】Microsoft 的官方文档 https://docs.microsoft.com/en-us/cpp/cpp 也是非常不错的学习现代 C++（Modern C++）的材料。不过，Microsoft 的文档给出的自然是 Microsoft Visual C++（MSVC）的参考，可能与官方标准有一定差异。中文版：https://docs.microsoft.com/zh-cn/cpp/cpp/ （提示：本主题的部分内容可能是由机器翻译）。

不同的 C / C++ 编译器（compiler）对 C / C++ 标准的实现是有出入的，但常见的语法一般都遵循标准。

自 1985 年发布以来，C++ 已经更新了数个版本，主要包括 C++98、C++03、C++11、C++14、C++17、C++20。C++23 标准基本已经接近完成，预计将在 2023 年发布。学习 C++ 时，尤其需要注意 C++11 以来的新特性。

“一年精通，三年熟悉，五年了解，十年用过”，C++ 作为编程语言的复杂度在世界上数一数二，1 个学期能学到的全部知识，充其量连皮毛都算不上。想要掌握 C++，一个学期的学习自然是远远不够的。如果你想向工业软件、图形学、游戏、高性能计算、操作系统、高频交易等方向发展，或者想成为库作者，就更有必要将 C++ 的基础打扎实。因为这些方面需要的软件对性能的要求是很高的。C++ 是编写高性能软件的必备语言。

(*) Rust 是近几年开始快速发展的语言之一，有机会在日后达到与 C++ 分庭抗礼的地位。感兴趣的同学也可以学习 Rust。

建议开课学期：1 ~ 2。

### 数字逻辑电路 / Digital Logic Circuit
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 数字设计基础与应用 | 邓元庆 | 陆军工程大学 | 2 | 清华大学出版社 |  | 简体中文
|| 关宇 | 陆军工程大学
|| 贾鹏 | 陆军工程大学
|| 石会 | ?

#### 说明
本课程是专业必修课计算机组成原理的基础。

数电的书我没有去找别的，反正我们学校用的是这本。计算机类专业的可以不用买书，看我的笔记：

https://blog.csdn.net/COFACTOR/article/details/103862541

至少在目前来看，足够不卡住后面的学习了。

本来想修订一下笔记，然而由于时间关系，暂时鸽了。

推荐开课学期：3

### 汇编语言 / Assembly Language
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Assembly Language for x86 Processors, 8th edition | Kip R. Irvine | Florida International University | 8 | Pearson | 2019/8/27 | English | Recommended by @himself65
#### 说明
感谢 @himself65 推荐了《Assembly Language for x86 Processors》。

本课程是操作系统、组成原理两门专业必修课的基础。

非常多的学校（甚至包括有的顶校）还在教 8086 的汇编，哎……

推荐开课学期：3 ~ 4（最好在学习操作系统和计算机组成原理等专业课之前就开始学习；与这些专业课同步学习亦可）

## 专业必修
### 数据结构 / Data Structures
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 数据结构（C++版） | 邓俊辉 | 清华大学 | 3 | 清华大学出版社 |  | 简体中文
| 数据结构习题解析 | 邓俊辉 | 清华大学 | 3 | 清华大学出版社 |  | 简体中文
| 数据结构（C语言版） | 严蔚敏 | 清华大学 | 2 | 中国工信出版集团 | 2015/2 | 简体中文
|| 李冬梅 | ? || 人民邮电出版社
|| 吴伟民 | 广东工业大学
| 数据结构习题解析与实验指导 | 李冬梅 | ? | 2 | 中国工信出版集团 | 2015/2 | 简体中文
|| 张琪 | ? || 人民邮电出版社
| Data Structures & Algorithm Analysis in C++ | Mark Allen Weiss | Florida International University | 4 | Pearson | 2013/6/23 | English
| The Algorithm Design Manual | Steven S Skiena | Stony Brook University | 2 | Springer | 2011/4/27 | English

#### 说明
有的学校的对应课程为 “数据结构与算法” 。

其实严蔚敏的《数据结构》倒没有一些人骂得那样糟，我个人感觉至少非代码部分还是写得挺清楚的。但严书的代码风格我不喜欢。想考研的同学最好学习 / 复习本书。

推荐开课学期：3

### 操作系统 / Operating Systems
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Operating System: Three Easy Pieces | Remzi H. Arpaci-Dusseau | University of Wisconsin-Madison |  |  |  | English
|| Andrea C. Arpaci-Dusseau | University of Wisconsin-Madison
|| Peter Reiher | University of California, Los Angeles
| 计算机操作系统 | 汤小丹 | ? | 4 | 西安电子科技大学出版社 | 2014 | 简体中文
|| 梁红兵 | ?
|| 哲凤屏 | ?
|| 汤子瀛 | 杭州电子科技大学
| Operating System Concepts | Abraham Silberschatz | Yale University | 10 | Wiley | 2018/5/4 | English
| Modern Operating Systems | Andrew S. Tanenbaum | Vrije Universiteit Amsterdam | 4 | Pearson | 2016/3/25 | English

#### 说明
- OSTEP 作者主页上有英文版，中文版不能直接从主页里找到，且不会像英文版那样随时更新。前往 http://pages.cs.wisc.edu/~remzi/OSTEP/ 获得最新版本。 http://pages.cs.wisc.edu/~remzi/OSTEP/Chinese 为中译版。
- 汤子瀛等编著的《计算机操作系统》为内地众多知名高校的计算机类专业考研的指定参考书，其中部分内容可以作为 OSTEP 的补充。

推荐开课学期：4

### 计算机组成原理 / Computer Organization
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Computer Organization and Design: The Hardware/Software Interface | David A. Patterson | University of California, Berkeley | 6 | Morgan Kaufmann | 2020/11/20 | English
|| John L. Hennessy | Stanford University
| Computer Systems: A Programmer's Perspective | Randal E. Bryant | Carnegie Mellon University |  | Pearson |  | English
|| David R. O'Hallaron | Carnegie Mellon University
| 计算机组成原理 | 唐朔飞 | 哈尔滨工业大学 | 3 | 高等教育出版社 | 2020/10 | 简体中文
| 计算机组成原理——学习指导与习题解答 | 唐朔飞 | 哈尔滨工业大学 | 2 | 高等教育出版社 |  | 简体中文

#### 说明
考研的同学可以以唐朔飞的《计算机组成原理》为参考资料。

推荐开课学期：4

### 计算机网络 / Computer Networking
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Computer Networking: A Top-Down Approach | James F. Kurose | University of Massachusetts, Amherst | 8 | Pearson | 2020-Spring | English
|| Keith W. Ross | New York University
| 计算机网络 | 谢希仁 | 陆军工程大学 | 8 | 电子工业出版社 | 2021/6 | 简体中文

#### 说明
关于谢希仁编著的《计算机网络》，我们老师说：如果用的是中文教材，那么基本都是用这本。同时，这本书也是很多学校的计算机类考研指定的参考书。用于和《自顶向下方法》互为补充，也是很不错的。

注：有的学校的人工智能等方向不将《计算机网络》列为必修课。

《自顶向下方法》第 8 版删去了第 7 版的第 9 章 “多媒体网络”，作者说明称：由于多媒体应用越来越流行，因此他们选择将这些内容编入前 8 个章节。从书中移除的内容都可以在书本的配套网站找到。

推荐开课学期：5

### 数据库 / Database
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Database System Concepts | Abraham Silberschatz | Yale University | 7 | McGraw-Hill Higher Education | 2019/2/19 | English | Recommended by @vczh
| 数据库系统概论 | 王珊 | 中国人民大学 | 5 | 高等教育出版社 | 2014 | 简体中文
|| 萨师煊 | 中国人民大学

#### 说明
- 感谢 @vczh 推荐了《Database System Concepts》。
- 人大的《数据库系统概论》比较坑的地方在于，它上面的不少 SQL 语句在很多数据库产品里面都是不能被识别的。理论部分总体还 OK。

我们学院的情况是：软工必修，信安选修。

推荐开课学期：5

### 编译原理 / The Principle of Compilation
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Compilers: Principles, Techniques, and Tools | Alfred V. Aho | Columbia University | 2 | Pearson/Addison Wesley | 2006 | English
|| Ravi Sethi | University of Arizona
|| Jeffrey D.Ullman | Stanford University
| Modern Compiler Implementation in C | Andrew W. Appel | Princeton University |  | Cambridge University Press | 2004 | English
| Advanced Compiler Design and Implementation | Steven S. Muchnick |  |  | Morgan Kaufmann | 1997 | English
| Compiler Construction: Principles and Practice | Kenneth C. Louden | San Jose State University | | | 1997 | English
| Engineering a Compiler | Keith D. Cooper | Rice University | 2 | Morgan Kaufmann / Elsevier Science & Technology | 2011 | English |
|| Linda Torczon | Rice University

#### 说明
我们学院的情况是：软工必修，信安选修。

推荐开课学期：6

## 基础选修

### Java
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Thinking in Java | Bruce Eckel |  | 4 | Pearson | 2006/2/20 | English
| Head First Java | Bert Bates |  | 2 | O'Reilly Media | 2005/2/22 | English
|| Kathy Sierra |

#### 说明
【★】随着 Java 的更新，有部分特性已经被弃用，请注意及时查阅最新文档（https://docs.oracle.com/en/java/ ）。

### Python
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Python Crash Course | Eric Matthes |  | 2 |  | 2019/5/3 | English
| Python Cookbook | David Beazley |  | 3 |  | 2013/5/23 | English
|| Brian K. Jones
| Python语言程序设计基础 | 嵩天 | 北京理工大学 | 2 |  | 2017/2 | 简体中文
|| 礼欣 | 北京理工大学
|| 黄天羽 | 北京理工大学

#### 说明
【★】https://docs.python.org/3/ 上具有非常丰富的官方文档。

Python 2 已经被弃用。除非需要编写兼容已有的、不易重构的老代码的 Python 脚本，否则请选用 Python 3。

### C#
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Head First C# | Andrew Stellman |  | 4 |  | 2020/12 | English
|| Jill Alison Hart
| Illustrated C# | Cal Schrotenboer |  | 5 |  | 2018 | English
|| Daniel Solis
| C# 程序设计教程 | 唐大仕 | 北京大学 | 2 | 清华大学出版社；北京交通大学出版社 | 2018/3 | 简体中文 |

#### 说明
【★】Microsoft 为 C# 准备了非常丰富的官方文档： https://docs.microsoft.com/en-us/dotnet/csharp 。可作为相当不错的自学材料。中文版： https://docs.microsoft.com/zh-cn/dotnet/csharp/ 。

### Android 开发

【★】Google 官方： https://developer.android.com/guide

第一行代码——Android（第 3 版）&emsp;郭霖

Kotlin in Action

#### 说明

### HTML+CSS+JS

- W3Schools
- Codecademy
- MDN (https://developer.mozilla.org/en-US/docs/Learn)

#### 说明

## 专业选修

### 计算机体系结构 / Computer Architecture
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Computer Architecture, A Quantitative Approach | David A Patterson | University of California, Berkeley | 6 | Morgan Kaufmann | 2020/11/20 | English
|| John L. Hennessy | Stanford University
| Computer Organization and Architecture: Designing for Performance | William Stallings |  | 11 | Pearson | 2018/3/1 | English

#### 说明
要求较高的院校可能将体系结构列为专业必修课。

### 算法 / Algorithms
#### 课本
| 书名 | 作者 | 作者所在单位 | 版次 | 出版社 | 出版日期 | 语言 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Introduction to Algorithms | Thomas H. Cormen |  | 3 | MIT Press | 2009/7/31 | English
|| Charles E. Leiserson
|| Ronlad L. Rivest
|| Clifford Stein
| 算法设计与分析 | 屈婉玲 | 北京大学 | 2 | 清华大学出版社 | 2016/2 | 简体中文
|| 刘田 | 北京大学
|| 张立昂 | 北京大学
|| 王捍贫 | 北京大学
| 算法设计与分析习题解答与学习指导 | 屈婉玲 | 北京大学 | 2 | 清华大学出版社 | 2016/3 | 简体中文
|| 刘田 | 北京大学
|| 张立昂 | 北京大学
|| 王捍贫 | 北京大学

#### 说明
公开课包括但不限于：

https://www.bilibili.com/video/BV1Ls411W7PB?from=search&seid=9038077306193741654

算法设计与分析（北京大学）&emsp;主讲：屈婉玲

### 机器学习 / Machine Learning
#### 课本

#### 说明

### 自然语言处理 / Natural Language Processing
#### 课本

#### 说明

# 第二章&emsp;我应该参加哪些活动？

本部分最后更新于：2022/8/19

## 竞赛
- 以 ACM-ICPC 及相似的比赛（CCPC、“蓝桥杯”等）为例。在中学有训练过 OI，或者通过其它方式获得了算法基础的同学，可以试着去继续参加。如果之前完全没有基础，大学才起步，风险就很大了，不建议作为主要任务。
- 信安那边的 CTF 没了解过，不作建议。
- ASC Student Supercomputer Challenge，也没了解过。

## 学界（科研）还是业界（工程）？
想走学术保研道路的（都打算走这条路了，估计日后大半也是去做科研了），本科尽早进组发文章。但是学校的学术保研名额可能比较有限，具体情况视学校的不同而不同。想去业界发展的，一般是本科以后读 Master（授课硕士），有的学校称为 Coursework。Master 和 MPhil 分别对应内地的专业硕士（专硕）和学术硕士（学硕）。

通常，以后打算做科研，才去读博士。博士毕业的要求很高，课业压力十分大，是有攻读多年仍然无法毕业的风险的。而且，如果最终目标是去企业工作，读完博四五年出来，是否能拼过其它硕士毕业而已有同样长度的工业界经验的人，是不好把握的。不过，如果经济条件不足以留学，或家里不愿意出钱留学，就另当别论了。在许多国家和地区，博士的全额奖学金（全奖）相对容易拿到。授课型硕士非常难拿奖学金，本科会比授课硕更难拿奖学金。**如果不能拿到全奖（包括只拿到半奖），强烈建议不要读博。**

但按照各高校和科研院所的卷况，除非天赋上特别优异，否则十分不建议走科研这条路。**绝大多数人更适合去搞工程**。按现在的大环境，科研岗位已经**严重供过于求**。如果更多人能去工业界，既有利于减小学术界的内卷程度，减少灌水论文与灌水专利等 “成果” 的产生，还有利于促进超前的科研成果尽快落地。可以说是真·双赢了。

科研人员的收入往往也要显著低于业界人员。这并非是中国内地独有的问题，其它国家和地区也不同程度地出现了这种情况。例如，早在 2018 年，就有科技媒体报道：美国知名计算机院校的教职员大量流向工业界。这些成绩斐然的大佬们跳槽到业界后，收入瞬间暴涨。有的收入直接翻倍还多，一点儿也不夸张。

算法岗的收入往往高于开发岗和测试岗，然而大厂算法岗的卷况已极其惨烈（算法的性质更偏向科研）。另：可搜索 “供大于求 诸神黄昏 灰飞烟灭 人间地狱”。一些媒体报道和网友讨论虽不能排除有夸大的成分，但大方向上不会有错。

## 开源项目
无论你选择做学术还是做工程，都应当尽早开始在开源网站上做项目。积累要趁早。

做了没被其他人点⭐也没关系，总比没有做要强。万一有，而且比较多，比如 100 甚至 1000 以上，你就赚大发了。

在面试的时候，你可能会被问到关于自己的项目的一些问题，如果担心答不上来，可以稍微提前准备一下。这部分准备应该不会花较多时间的。

## 实习

学校可能将毕业实习作为必修学分，若找不到实习则无法毕业。

不论你所在专业的培养方案是否要求必须有实习经历才准予毕业，你都应当尽力去找实习。一个份量足够的实习经历会为你的简历 / 履历（履历一般是升学用的，比简历要详细）加分不少。

有说法是可以大一就去实习，不过按照我的经验与观察，至少在我们这一行，许多单位不会招还在读大一的本科生进行实习。大二的话，可能有机会。当然，你也可以在大一或大二期间就多尝试去给工作单位投简历。

最好尽早向学长打听是否有内推的机会。只是，内推基本上只能帮你争取（注意，不是保证）到面试或者至少过简历关，并不会成为你是否获得实习单位的录取的决定性因素。自己的能力才是硬道理。

简历一定要海投。去 N 多个网站、N 多个 APP 上投，一次总共投几百个岗位也无所谓。有的公司可能会说明只能投一个岗位。如果没有，可以投同一个公司的多个岗位。

## 大创、开放性实验等
假如想做大创（大学生创新创业训练计划）项目，建议先从学长处了解，自己学校报销经费的流程是否繁琐。如果过于繁琐，则大创项目不一定要作为首选。

需要留意，学校可能会要求每一个本科生修得一定数量的 “创新学分”，否则不准予毕业。这类创新学分往往需要通过参加大创项目和开放性实验获得。如果有这样的要求，那么就要尽早完成这些项目，把该拿的学分拿好。

## 志愿者
参加志愿活动，积累一定数量的志愿时。志愿活动可能是一些高校（特别是境外高校）招录时的硬性指标。不一定非得干出一些什么大事儿，但起码不要没有。

## 我应当参加学校的社团、协会等组织吗？
其实，按理来说，应当是被鼓励的。

然而，卷况不饶人。至少在我们这一行，（与计算机及其相关学科无关的）社团这些纯课外的经历，基本不会对以后的升学和工作有加分。So, it's up to you.

# 第三章&emsp;哪些事情应当尽早完成、尽早留意或尽早开始？

本部分最后更新于：2022/8/20

## 日后的发展方向
是本科毕业完就直接工作，还是说要继续深造；是考研保研，抑或是申请境外的学校，都应当尽快抓定主意，提前做好准备。

## 英语
越早开始抓越好。

英语的常用语法在高中应当已经学完了，后续主要是需要不断积累词汇量。从大一甚至大一入学之前就可以开始每天背单词了。手机上下个 APP，随时随地背起来。免费的就行。

考试：
- 开学以后，尽快考完四六级。最好在大一搞定，最好不要超过大二。
- 有留学意向的同学也要尽可能早地开始准备 IELTS 或 TOEFL 等考试。
  - 身边有若干同学反映 IELTS 比 TOEFL 简单。不过也有同学和我说这俩难度差不多。
  - 部分学校还接受 TOEIC、PTE、Duolingo 等。Duolingo 的考试费用低很多。
  - 部分热门理工类专业会要求 GRE 成绩。GRE 对词汇量的要求明显高于 IELTS 和 TOEFL。GMAT 一般是商科类要求考的，不过越来越多商科专业也接受 GRE 成绩了。
- 按本人经验，IELTS 完全可以自学。主要刷官方的 Cambridge IELTS 练习题即可。
  - 本人经历：8 月初开始准备 IELTS，每天坚持背单词，到 10 月国庆放假期间考试。全程摸鱼式准备（因为课内任务还很多），总共只做了 7 套完整的题（口语部分单独多刷了一些题目），总分正好 7.0，单项最低 6.0。

除了升学要求，如果英语水平不过关，在计算机行业也会很吃亏。从进入这一行（包括学生阶段）开始，就应当让自己多接触英语环境。具体方法主要有：
- 将（PC 或手机、平板的）操作系统和常用软件的语言改为英文。
- 多看英文网站、英文资料。
  - 例如，使用 Google 搜索，并且将搜索的默认语言改为英文。
  - 做项目的过程中，多看英文文档和其它英文资料。
  - 如果阅读计算机的英文资料比较枯燥，也可以阅读其它话题的英文资料。这也会成为你的积累。

## GPA
对于非计算机类专业或大类的同学，有转到计算机类专业的意愿的，就需要保持自己的 GPA 在前列，因为很多学校对转专业的要求就包括 GPA 排名靠前。

如果拿不定主意是否要去留学，就**应当按照确定需要留学的方向去走**。对 GPA 有高要求的院校不计其数。万一之后决定去留学，但又发现 GPA 可能不够，就晚了。虽然有可能可以通过重修来刷新成绩，但不是所有学校都允许这样做。而且重修是要额外收费的。

一些工作单位（目前看来，应该是少数）招聘时会要求应聘者提供成绩单。

## 选课时精打细算、留意坑点
每学期选课时，可以找选过这门课的学长去打听，请问他们要选的课是否有坑。举例：
- 课堂讲授大量的过时内容。
- 布置许多无意义的作业。
- 给分过低的课也要慎重考虑——这也是没办法的，谁让那么多学校（包括在境内绩点保研）都死认 GPA 呢？

选修课也并不是想选什么就选什么的。**选课要精打细算，核对清楚培养方案的要求，避免因为学分不足导致延毕。**

## 养成自学的习惯
- 首先就是因为大多数高校的计算机类专业的教学内容都与前沿严重脱节。在享受不到顶校资源的条件下，当然就唯有靠自学补上来咯。更别说大家第一时间能想到的那些计算机强校，也总有同学反映存在这样的问题。还有一种情况就是：很多老师做科研很牛，但要让他们把课讲好，那就有些为难他们了。即便是海外那些享誉全球的计算机顶校，也会有这样的老师的。
- 笔者相信，以许多同学的能力，至少在本科阶段，如果积极进行自学，那么学习的速率会远远快于自己和其他人按照教学进度一点一点去学的速率。
- 在这里要特别强调一点，就是现在非常多的学校的计算机类专业，都会使用一个学期的时间，专门去开一门课讲某一门编程语言的基础知识。这样的速率是严重低于社会需要的。那些要求高的院校，往往都没有专门的课程去讲这些基础的东西，而只会在学期初给 1 ~ 2 周左右的时间，让学生迅速将语言的上手，掌握其基本用法。需要用到这些语言的课程在此之后再讲的，就是专业知识（比如算法、机器学习等）了。

## 课外积累
如果只是按部就班完成课堂布置的内容，那么在找工作（也包括升学）的时候，就难以给出一份合格的简历。
- 可以通过自己做开源项目，或参加大创（最好是省创、国创）和开放性实验，来为简历增加内容。如若有条件发表论文或贡献知名开源项目，当然更好。
- 去留学的同学要注意：现在卷况进展很快，排名靠前的许多院校的计算机类专业可能会有硬性的科研要求。不过，应该可以用高含金量的开源项目代替。
- 除此之外还要留意：多掌握几门编程语言（以及 HTML 之类的标记语言），并多做一些相关的项目，对工作更有利。

## 学车
- 同样是要尽快，最好在大一入学之前就搞定。
- 就算确定自己日后不开车，也尽快把驾驶证拿了。万一改变了主意，抑或遇到一些紧急情况，就不好办了。
- 视具体城市的不同，诸如费用进一步攀升、强制要求打卡记学时（学时不够不给考试）之类的蛋疼情形，总体应该是越来越多的。

# 附录一&emsp;Q&A

# 附录二&emsp;推荐读物

本部分最后更新于：2022/7/2

CS自救指北&emsp;迟先生

https://survivesjtu.gitbook.io/survivesjtumanual/fu-lu/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei

退学&emsp;himself65

https://www.himself65.com/quit-qhnu/

CS 自学指南

https://csdiy.wiki/

# 后记&emsp;在内卷的天空下

本部分更新于：2022/8/19

---

张开眼中　一扇暖暖的窗　驱走这赤地里的荒凉

从大地头上　初升的朝阳　照出生存永远方向

懂得爱心　知道怎么分享　不枉爱过活过这一场

谁亦是同样　奔波于骄阳　你我从来没有筑墙

人和人年和月都太内卷　我们怎么能只卷一次

内卷的天空中找到生息的真意　人才能无悔旧时

在人潮和围墙下只要愿意　凭着一双手总是可以

内卷的天空中跨过彼此的疆界　连潮流亦会转移

(Music...)

一早决心　将我热炽的心　感染世上迷惘的人

曾立下宏愿　可不可都能　唱出真正壮阔声音

关心眼光　仿似最美的灯　终于会照亮远方的人

如未尽全力　怎么可消沉　能抬头凡事也可能

人和人年和月都太内卷　我们怎么能只卷一次

内卷的天空中找到生息的真意　人才能无悔旧时

在人潮和围墙下只要愿意　凭着一双手总是可以

内卷的天空中跨过彼此的疆界　连潮流亦会转移

人和人年和月都太内卷　我们怎么能只卷一次

内卷的天空中找到生息的真意　人才能无悔旧时

在人潮和围墙下只要愿意　凭着一双手总是可以

内卷的天空中跨过彼此的疆界　连潮流亦会转移

啦啦啦啦啦啦啦啦啦啦　啦啦啦啦啦啦啦啦啦

啦啦啦啦啦啦啦啦啦啦啦啦啦　啦啦啦啦啦啦啦

在人潮和围墙下只要愿意　凭着一双手总是可以

内卷的天空中跨过彼此的疆界　连潮流亦会转移

内卷的天空中跨过彼此的疆界　连潮流亦会转移

---

原曲&emsp;在晴朗的天空下

林&emsp;夕&emsp;词

李宗盛&emsp;曲

成&emsp;龙&emsp;黄耀明&emsp;周华健&emsp;李宗盛&emsp;歌

年&emsp;代&emsp;1993
