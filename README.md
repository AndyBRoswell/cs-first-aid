# CS 自救指南&emsp;CS First Aid: A Vital Guide for CSE Students

最后更新：2024/08/18

主要目标人群：
- （将）在中国内地就读计算机类专业的
- 计算机类专业在读，有留学意向
- （准备）自学计算机的人员

计算机类专业包括但不限于：计算机科学与技术、计算机科学与工程、软件工程、网络工程、信息安全、网络安全、网络空间安全、智能科学与技术、人工智能，等等。
- 大数据方向的专业，如 “数据科学与大数据技术” 等，除了划归计算机学院之下，一些学校也可能将其归入数学学院或商学院等。不同学院开设的此类专业代表发展方向的不同。
- 有学校的计算机类专业颁发文学学位（如：文学学士）而非理学或工学学位，这代表该计算机类专业属于与文科的交叉专业，需要修读较多的文科课程。
- 信息管理与信息系统、商业分析等专业，虽可能含有较多的计算机类课程，但通常不认为属于计算机类专业。
- “信息与计算科学” 是数学类专业。
- 与大数据、人工智能、图形图像等有关的专业，对数学的要求往往高得多。信息安全等安全方向的专业，由于涉及密码学（信安等专业必修）等学科，也对数学提出了相当的要求。另一方面，软件工程对数学能力的要求相对较低。
- 近年出现了一些 “披皮” 的专业，例如 “智能制造” 实为机械工程，“智能建造” 实则土木工程。

# 前言&emsp;在那内卷时代，没有置身于事外

本章最后更新于：2024/08/17

相信许多人都有着高考失利未能进入理想大学的遗憾，也深知自己在大学里能够获得的资源远远少于本校和名校的各路学霸。即便侥幸进入名校，也总是很容易因为各种各样的不可抗力，走上许多弯路。

无数同学如履薄冰、步步为营，生怕在某个将自己导向不同世界线的关口做出令自己后悔一世的选择；好不容易下了决定赌一把，却只有在很久之后才有机会判断这一步棋是否走对；终于到了能发现走错了的时候，又早已无法选择退路。

行业乃至社会的容错率越来越低：
- 学历歧视
  - 一本、211/985、[23 所](https://www.zhihu.com/question/618431397)、C9、还有所谓的 [C7](https://www.zhihu.com/question/50656494)，甚至有[只收清北、计算所、自动化所的](https://tieba.baidu.com/p/6197125771)。
- 年龄危机
  - 我上初中的时候就算有年龄限制也还是普遍要求不超过 45 岁左右，当时除了这个词以外还有另一种流行的说法叫做 “中年危机”。上大学的时候就看到很多卡 35 岁的了。读研了以后多次看到卡 25 岁（可在各社交媒体搜索）的了。
- 往往只能找到无偿加班严重、全年无休的岗位
- 缺乏具有技术含量的实战经验，找第一份实习都困难，更别说日后的工作
- 大规模缩招、停招、裁员，就业卷情进一步恶化
- ……

卷，也要讲究方法。作为在 **“大内卷时代”** 摸爬滚打的一员，私以为：有必要将自己踩过的坑以及总结出来的经验与方法提供给后来者，帮助各位减少那些纯粹给自己的发展之路设下绊脚石且浪费社会资源的无效内卷，尽可能利用好最珍贵的在校时光；能运用自己的真才实学获得理想的职位并完成层次更高的任务，比如挤掉那些身居要职却尸位素餐的，或者为本行业乃至其它行业作出重大贡献，自然再好不过；即便没能卷赢一众卷王，也至少能减少光阴的浪费，并为日后的自己积累更多的选择筹码。俗语有云 “一步错，步步错” ，希望这份《自救指南》也能给到大家一些及时止损的机会，充分降低做错选择并继续错下去的概率。虽说 “普通人的人生，怎么选都是错的”，但至少也可以错得不那么离谱。

本《自救指南》长期更新。也欢迎大家批评指正。

## 注意

### 目的

撰写本《自救指南》的主要目的，是为了让大家真正学到有用的知识与技能。考研等各类考试并不是本《指南》主要针对的场景。

# 【📢劝退！劝退！】

本章最后更新于：2024/08/17

**有意向转入计算机类专业的同学**（本科就读期间转专业、跨专业转学境外本科、重读计算机类本科、跨专业考研、跨专业申请境外高校的研究生等，均计入此类情形），**一定要三思而后行。选择专业事关前途大业，万万不要头脑一热就跟着大家一窝蜂挤进来！**
- ⚠️**本行业的卷情进展已经极其迅速，而且仍在猛烈加速，完全没有看到任何减缓趋势**，就业形势相当**危重**（都不可以用“很差”之类的词来描述）！
  - ⚠️Senior（高级，一般不少于 5 年工作经验）受影响相对小**一些**。但 Junior（初级，一般 0 到 2 年工作经验）以及新毕业生（new grad，NG）的就业率早已**惨不忍睹**。
    - 即便是**顶校科班毕业+多段大厂实习（甚至还有对知名开源项目的贡献和/或高分期刊/顶会的科研成果）的也不能幸免！** 大把顶校学生 / 毕业生连那些钱少事多烂简历的外包也进不去。
  - ⚠️中🇨🇳、美🇺🇸、加🇨🇦等 IT 岗位较多的地区已经**无一例外**出现了**非常大规模的招聘冻结（hiring freeze），并且依然在蔓延**。预计**未来相当长的时间内都不会有好转**。
  - ⚠️欧🇪🇺🇬🇧🇳🇴🇮🇸🇱🇮🇨🇭、日🇯🇵、澳🇦🇺、新🇳🇿🇸🇬、港🇭🇰等地区 IT 岗位相比中美等地相对较少，**难以承载疯狂涌入的求职者**。这些地区的就业市场亦受到经济不景气的冲击，求职难度**陡然**上升。比如荷兰🇳🇱，2022 年理工类毕业生找工作号称 “有手就行”（当然薪资未必好看）；然而，自从 2022 秋冬（或 2023 年伊始），**一下子**就**全面崩盘**：**千里冰封**式招聘冻结；裁拿了**永久**合同的；越来越多**具有资质却仍旧拒绝**担保 Kennismigrant（KM）工作签证的；白嫖 Zoekjaar（search year）签证的；2500 欧一个月的前端岗位至少 100 多号人抢的……
  - ⚠️**人工智能（AI）的落地，并非就业的风口**：
    - 相关岗位要求通常非常高，比如：博士学位 + 顶刊顶会（而且完全有可能同时要求业界的实习 / 工作经验）。
    - 虽然 AI 在自动驾驶等领域已经遇到瓶颈，但目前 AI 已经能够取代极其多的岗位。翻译、客服、美术等行业为重灾区；本行业也不例外：无数初级程序员正在因为 AI 而失业。典例：[GitHub Copilot](https://github.com/features/copilot) 代码补全的正确率虽不特别高，但完全可以应付各种各样的课程作业、个人的课外软件项目，乃至工作任务中的相对简单的部分。总之，**AI 创造的岗位数量远远少于消灭的岗位数量**。
  - [翻到了18年的校招 我破大防了](https://www.xiaohongshu.com/explore/66801d02000000001f004fda)
- 请在确认自己具有**极大的**兴趣的条件下，再进入本专业。**编程不是一件容易的事情，而且对你的耐心提出了相当高的要求。如果你只是看重高薪🤑💰而不是发自内心热爱❤️，那么你迟早会发现自己在这条路上根本走不下去。**
  - 事实上，目前只有中🇨🇳、美🇺🇸的 IT 岗位的平均 / 中位薪资远远甩开其它行业。其它国家和地区的 IT 岗位，薪资水平不会比多数行业高出太多。由于经济下行、维持高息，以及本行业的各个泡沫相继破裂，许多 IT 岗位的工资**必将接连跳水**，招聘数量**持续俯冲**。
    - ⚠️⚠️**严重警告！**由于信息传播的滞后性，目前每年冲入计算机类专业的本科生的数量仍然是**天文数字**，并且**几何级数增长的趋势难以刹停**。**全球**的就业市场根本无法消化天量的毕业生！不要再盲目攻读计算机类专业了！按照目前的卷情，别说总体工资被冲到低于其它行业了，整个行业能否**在未来多年仅仅将现有的** Junior 大致消化完毕都是个大问题！**别问能不能勉强糊口了，再这么不顾一切地冲，直接就是铁定要一直都一点饭也没得吃了！**

# 第零章&emsp;提升效率的工具与思想

本章最后更新于：2024/08/18

## 计算机

### 多花一点必要的钱，换来随后若干年的效率提升，是一本万利的。

如果你不想：
- 很多网页或程序不能同时开着，否则会卡，干起活儿来（尤其是需要同时参考、核对、整理大量资料的场景）巨麻烦。
- 卡顿到作业都不好做。

那么，还犹豫什么呢？想尽办法搞到一台能用的机子吧。

选机提示：
- 假如想给老机器升级：
  - 首选部件是内存或 SSD。这对用户体验的提升是非常明显的。如果无法添加内存或硬盘，那么只能购入新机。
  - 升级 CPU 和 GPU 的优先级位于增加内存与硬盘容量之后。除非硬性要求，例如：需要二级地址转换（SLAT）运行高版本的虚拟机监视程序（VMM，如 Hyper-V、VMWare Workstation、VirtualBox），或需要 Tensor Core 加速推理与训练。
- 不玩单机游戏，三四千来块（预算多一点的可以放宽到不低于五千）的机器通常也够做开发了。但是，
  - **内存和硬盘的容量一定要管够**。
    - 最低配置（不推荐）：内存容量不少于 16 GB，硬盘总容量不少于约 500 GB。
    - 次低配置：内存容量不少于 32 GB，硬盘总容量不少于约 1 TB。
    - 推荐配置：内存容量不少于 64 GB，硬盘总容量不少于约 2 TB。
    - 大量软件的体积都在不断膨胀。在 Windows 下，有的软件还会强制安装到 C 盘，或将自己产生的数据记录到 C 盘（无法更改这些目录）。为使 C 盘空间尽量大，避免对硬盘划分过多的分区；只建立单个分区最好。
  - 需要在本地运行机器学习训练任务的，配置需要高不少（CPU、显卡、内存、硬盘）。
- 不优先选择采用低压 U 的笔记本。除非你确实十分在意轻薄、续航、发热。
  - 近年来，低压 CPU 提升不少，日常的轻负载应用的性能表现往往不错，且同时能维持相对低的功耗。

如果经济实在困难，考虑常去学校机房或电子阅览室。

这里特别要说一下，有的同学的家里明明是有经济能力的，但是不知道为什么，家长就是不肯让子女用稍微贵一点的机子：
- 我看到过一些读机械、建筑之类的专业的学生的家长，又不是没钱，却非得逼着子女卡死两三千的预算。这样的后果就是作业都难以做完，因为要用到的行业软件相当吃配置。总是不交作业或不按要求完成作业会是什么结局，不用我多说了吧。
- 有的家长呢，买奢侈品随随便便四五万就出手了，但允许子女买台几千的 PC 却万般不愿意。真不知道说什么好。
- 就算子女自己攒钱买机器，被家长发现了还要挨一顿臭骂，也都算轻的。

已知在这样的经济开销无法太高的条件下，也希望大家能够集思广益，一同想想办法，摸索出最适合自己的方法来，并分享给大家，共同进步。

**HARDWARE IS CHEAP. PROGRAMMERS ARE EXPENSIVE.**

为了进一步提升生产力，可以考虑：
- 选用大屏的笔记本，不要怕重（背着锻炼身体）。屏幕够大，也是生产力；硕大的笔记本，散热通常更好，有机会更多地减少降频程度、提升性能，也是提升生产力。有条件的同学使用台式机亦可，并搭配大尺寸的显示器。但要注意配置 UPS（不间断电源供应系统），防止宿舍停电导致丢失数据。宿舍经常停电在一些大学并不少见。
- **多个屏幕**。
  - 购买外接显示器作为第二屏。如果不搞设计之类的工作，没必要买很贵的。
    - 只要你的住处还有空间，完全可以考虑放置多于两个屏幕。
    - 免费软件 Splashtop Wired XDisplay 可以将 Android 平板作为第二屏，但会给 PC 带来额外的 CPU 占用率。
- 经济能力足够的同学，可考虑使用两台计算机：一台高性能，可以是又厚又重的游戏本（砖头本）或台式机，一般放在住处（宿舍 / 家 / 出租屋）；另一台主打轻薄，带去课室或者其它地方，方便在上课或出差等场合做笔记或写代码。

### 让学习工作生活更方便的计算机配件

- USB 集线器（分线器），即 USB Hub。扩展 USB 接口数量，使得可以同时连接多个 U 盘、移动硬盘、手机、平板电脑、读卡器等设备。建议配合 USB 延长线一同使用。
- 置物架。充分利用 z 轴空间。
- 排插。一定要买插座数量多的，省得插各类充电器之类的玩意儿的时候拔来拔去。
- 数位板。打草稿、写材料、画作业的各种乱七八糟的图用。只要自己不是专业画画的，也没必要买太贵的板，不就写点作业和草稿嘛。
- 存储，存储，存储！！！！**大学生是典型的经济能力相对不足却又容易因为遭遇意外而导致损失极其惨重的群体**：本身就差不多是零资产，一有闪失分分钟等效于疯狂累积负资产，而且这种累积根本不受限。一定要把金钱尽量花费在能够令自己避免概率不能忽略的极其重大损失的物品上。
  - 内置存储，尽量必选 SSD，防震；可选 HDD，相同价格下容量大。
  - 外置存储，SSD 或 HDD 均可。
  - **尽量购买大容量的产品**。
    - 大容量的产品的容量价格比往往更高。
      - 目前，SSD 的容量价格比在 2 TB 左右达到峰值，机械硬盘（HDD）则不超过 18 TB。
      - 虽然容量更高的 SSD 或 HDD 的容量价格比可能降低，但相当于能够使用更小的物理体积和更少的设备数量（也占用更少的接口）获得相同容量，何乐而不为？
      - 考虑到最近 SSD 再次集体涨价，想添置新 SSD 的，建议继续观望。
    - 不必要购买连续（大文件）读写速率特别高的 SSD，一般都用不上：2000 MB/s 左右的峰值（缓内）读写速率已经绰绰有余。有较高要求的，4000 MB/s 应该也足够了。
    - 不要购买使用 QLC 闪存颗粒的 SSD（少量写入的读取密集型使用场景除外）。不要购买杂牌的 SSD。不要在不正规的店铺购入。
      - 对存放重要数据的存储设备（换言之，不用于存储重要数据，专门买来折腾 / 玩儿玩儿的，随便）。
  - 根据本人近些年来对存储市场的考察，U 盘基本不值得购买。
    - 移动 SSD、U 盘使用的闪存颗粒 / 移动硬盘使用的盘片等部件，通常比相同价位的内置硬盘有明显缩水，使得读写速率降低、寿命缩短。
    - 除非实在有特殊要求，比如存储设备占用体积极小、保修的高度省心，可考虑的有 CZ880 等。
    - 允许体积大一些的条件下，可购买内置的 M.2 2230 / 2242 SSD，然后使用硬盘盒转接作为移动 SSD，并通过 USB 接口连接到 PC。即便读写速率受限，也比 U 盘快得多。
- 云盘：
  - Google Drive：单人免费 15 GB。
  - OneDrive：单人免费 5 GB。
    - 有用户反映：OneDrive 的同步机制**不是高度可靠**，导致自己的数据丢失。
      - 最近两年以来，笔者分别目睹了 OneDrive 未同步重命名操作 2 次及意外删除文档 1 次。好在有 Google Drive 的副本，否则丢失文件势必造成损失。
    - 订阅 Office 365 个人版，可获得 1 TB 的存储空间。相比其它云盘，此方案具有较高的容量价格比。
    - 使用 edu 邮箱虽然也能开通 1 TB 的存储空间，但所在高校或科研院所的管理员**能够查看并修改存储内容**。
    - **不要去其它渠道购买所谓的 5 TB（或其它大容量）OneDrive 帐号。**
    - [注意事项的详述](https://blog.csdn.net/COFACTOR/article/details/103261624)。
  - Mega 网盘。
  - Dropbox：单人免费 20 GB。
  - 百度网盘：5 GB + 1024 GB。
    - 有用户反映：百度网盘的 “秒传” 功能可能 “撞哈希”，导致误判不同文件为相同文件，进而丢失数据。不过，根据近年来的观察，此问题应该已解决。
  - 微云：单人免费 10 GB。
- **支架及类似物。将计算机或显示器垫高，防止颈椎问题。**

## 电子书

- 方便做笔记，增加、修改、删除、查找内容及笔记的速率极大提升。
- 节省住处的空间。
- 易于携带。
- 易于备份。

有条件的情况下，建议对电子书做 OCR（光学字符识别）。不过，各大软件的 OCR 功能一般都是收费的。

有的教材难以买到电子版，可以先买纸质版，然后在网上找店家扫描成电子版并识别文字（可将教材在下单后直接寄给店家进行扫描）。

如需在 PDF 上做笔记：
- 推荐 Drawboard PDF（可从 Microsoft Store 获取）。有免费和收费的版本，但免费版本已经够用。
  - 选用这个软件的一个重要原因是：其它很多软件有一个严重问题——如果增加了笔记又删除，保存的 PDF 文件的大小不会减小。Drawboard PDF 虽然默认情况下亦如此，但可以通过在保存 / 另存为时调节选项来压缩其大小。
- ABBYY FineReader PDF 在保存时会自动压缩到尽量小，但该软件在未输入序列号时只能保存少量页面（貌似 100 页？）。笔者购买了这个软件的长期授权，当时花了一大笔 RMB（$210，折合￥1???.??）。但因为需要扫描的书非常多，相比之下，这笔一次性的购买很值得，即便无法升级大版本。不过，现在该软件只支持订阅制，不能再通过一次性付款买到永久授权了。

然而，PDF 并不是被设计为方便进行编辑的格式。因而对 PDF 的编辑并不如一些常见格式（如 DOCX、Markdown）来得方便。

## 备份

做好**多重**备份（本地 + 网盘、乃至异地备份），特别是学习资料和其它重要数据。

## 免费的云服务

主流云厂商提供了一些长期免费（always free）的服务。
- [Azure](https://azure.microsoft.com/en-in/pricing/free-services/)
- [AWS](https://aws.amazon.com/free)
- [GCP](https://cloud.google.com/free)
- [Oracle Cloud](https://www.oracle.com/cloud/free/)
- [IBM Cloud](https://www.ibm.com/cloud/free)
- [DigitalOcean](https://www.digitalocean.com/pricing)

## 其它软件

### [Mathpix Snipping Tool](https://mathpix.com/)

可以识别数学公式，准确率较高。成功注册帐户后，每月可以免费识别 50 条。邀请其它用户成功注册后，自己和该用户都可以再获得 50 条免费识别公式的机会。

## 一些重要思想

### 绝对不要报读培训班！绝对不要购买收费课程！

- 你应当具备足够的能力和**恒心**（其实也可以算是能力的一种，不是吗？）依据包括本《自救指南》在内的高质量自学指导进行自学，并至少达到一个计算机名牌大学科班出身的毕业生的水平。如果你必须通过收费课程 / 培训班才能进行学习，那么，**很遗憾，你不适合这个行业。**
- 培训班与收费课程质量根本无法保证，且收费不菲；有的甚至是骗子。
  - 价格动辄上千的网课，其往往是一些简单的视频教程或毫无挑战性的练习题。
    - Google first！请善用搜索引擎。
    - 1000 多人民币，足够按照本《自救指南》购买大量高质量的书籍📚。
    - 很多时候，往往是买了一门课以后才能发现，并不是全部课程内容都解锁了：如果想继续学习，依然需要不断支付（更高昂的）费用。
  - 至少 2 万起步（且不包吃住）的培训班，往往也没有多少干货，纯粹割韭菜。
    - 2 万多块人民币，能做的事情非常多，包括但不限于下列之一：
      - 一台高配（甚至顶配）计算机🖥️💻，让你在本地训练机器学习模型、执行大型编译任务、多开虚拟机、运行大量容器等等都游刃有余。你还可以同时购买很多硬盘和其它零配件，或者很多收费软件，或者足够长的云主机使用期限。
      - 如果你是游戏🎮🕹️发烧友，PS / Xbox / Switch 外加一大堆游戏，不香吗？这样买完恐怕还能剩一大笔。又或者，你甚至还可以买到相当不错的赛车模拟器🏁🏎️ / 飞行模拟器✈️。
      - 你是二次元？你想想够买多少光碟💿（数字版也成）或者手办等周边。有的还是限量版。某知名歌姬（虽然也不是只出二次元的歌）的 Fan Club 年会费在 2023 年涨了一次以后也就 4000 日元。
      - 想做音乐？音频接口（只有你一个人做的话，几乎没必要买好几千甚至是过万的，音质没多大提升，主要是接口多很多等对个人而言不紧要的提升）+监听耳机🎧（耳机这个行业非常暴利，价格主要靠吹，贵的也未必好，尤其是所谓的 Hi-Fi 耳机），零头都花不完。监听音箱都能买了（当然，想买个更好的，也许得接着加💰）。麦克🎙️（如果你经常在户外录音，也可以是录音笔，买个旗舰产品轻轻松松）也不在话下。你甚至可以买到调音台。也可以选择买个很不错的电子琴 / 合成器🎹。
      - 可以买一辆二手车🚗了。虽然很多人都有驾照🪪，但事实上绝大多人 / 家庭都是没有车的。如果你骑摩托车🏍️，全套装备应该能够搞定了。还没驾照的话，都够报 VIP 班了，一对一的那种（发达国家倒不一定）。
    - 更严重的是，培训班通常会通过夸大乃至作假等方式要求你对简历进行包装。
      - 项目严重同质化。点名：××点评、××商城、××外卖、××管理系统。它们不但很难使你的简历具有亮点，有时甚至是污点。**一个合格的计算机系毕业生必须能够在许多场景中挖掘需求**。你需要自己思考可以做什么项目。
      - 面试时，若对方根据你的简历所写的项目询问整体思路与实现细节等方面的问题，则十分容易露馅。按现在的找工行情，指不定还进黑。
    - 有些更离谱的，一期超过五六万。
- 非科班出身的简历极大概率被机器直接过滤，无法进入笔试或面试。培训班于事无补。

如有来自培训机构的一些书籍，价格比较正常的（比如几十块），可以购买用于**参考**，不建议用于主修。

### 用钱换时间

对于能够提升学习效率的物件，确实有需要就不要犹豫，尽快买。不要老是等什么 618、双十一、双十二之类的活动。
- 现在很多商品，特别是数码产品，在这些活动之前经常会悄咪咪涨价，活动一开始再降下来，制造大力度打折的假象，进而使得实际上在这些购物节期间价格并不便宜多少。
- 软件上想省钱的，可以多找找（开源）免费的软件。
- 对于一门课，**仅学习一本教材但需要多本参考书或其它参考资料是很常见的。多数时候，没有必要省去这些买参考资料的钱，即便这些资料只被自己偶然查阅。**

不要去抢那些零碎的优惠。比如：
- 学校附近某个奶茶店开张，为了几块十来块的优惠去排队一个下午。真的很没有必要。况且，奶茶喝多了也对身体不好。
- 笔者做志愿活动期间（18Q4），看到过有商家在某小区门口搞活动，奖品无非是粽子或者其它一些简单的吃的，或者一二十块这种程度的返现，结果那小区里外好多人（特别是老人家）就在那里挤着来参加，折腾了一上午。真替他们觉得累。
- “瓜分XX亿”？收皮啦你！

经济条件不错的，不建议勤工俭学。
- 与志愿活动不同。勤工俭学会有少量的工资（如，每月 400 块），因此不可以算作志愿活动。
- 实在有闲的情况除外（按照现在的卷情，已经几乎不可能，除非是有条件继承资产与人脉的各种二代）。

### 开通自己学校或科研机构的 edu 邮箱

具体方式一般可参见就读单位的官方网站，或询问本单位的相关人员。

许多软件使用教育邮箱注册可享受极大优惠。例如：
- [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)。**只有通过教育邮箱才可以使用，并且免费**。另外两个版本 Professional 和 Enterprise 都是收费的。
  - Windows 平台的 VS 主要使用 C# 开发，GUI 框架为 WPF。大量实践表明，在 Windows 系统中，其运行速度显著快于 JetBrains 系列 IDE（Java + Swing）。美中不足的是，Visual Studio 尚不支持在 Linux 系统中运行。
  - 请及时升级到 Visual Studio 2022 新版本。因为 VS2022 是 64 位的，允许使用超过 4 GB 的内存，并提升运行于 64 位环境下的性能，有利于顺利打开超大规模的解决方案（solution，VS 里面一个 solution 包含若干个工程或项目，也就是 project，很多 IDE 都只有 project 的概念）。另外，代码补全的改进也获得了较多来自开发者的好评。
- 非教育用户需要付费使用的 [JetBrains 全家桶](https://www.jetbrains.com/)，对教育用户**免费，免费，免费（不要再去找破解版了）！！** 举例：
  - CLion：跨平台 C++ IDE，通过 CMake 完成构建自动化（CMake 已成为跨平台构建自动化的事实标准）。
    - 2023 年 11 月，[CLion Nova](https://www.jetbrains.com/help/clion/clion-nova-introduction.html) 进入早期访问（early access），虽然还有很多 bug，但性能提升明显。
  - IntelliJ IDEA：最流行的 Java IDE，并支持 Kotlin、Groovy、Scala 等需要 JVM 的语言，支持使用 Spring 全家桶等知名 Web 框架的开发。
  - Rider：跨平台 C# IDE，能够打开 Visual Studio 的 C# 解决方案（sln 文件）。
  - PyCharm：广受好评的 Python IDE，支持 Django 等框架。
  - WebStorm：相当不错的 Web 开发 IDE，支持 Angular、React、Vue 等主流的前端框架。
  - DataGrip：支持操纵众多主流的数据库，包括成熟的关系型数据库和新兴的非关系数据库。
  - Fleet（正在公测）：有望挑战 Visual Studio Code 的文本编辑器。
  - RustRover：新鲜出炉的 Rust IDE。
- Microsoft Office Home & Student

[GitHub 学生开发包](https://education.github.com/pack)需要通过教育邮箱注册。

顺带一提，不仅仅是计算机行业的软件，其它领域也有机会充分享受教育优惠。例如：
- [Sonarworks SoundID Reference](https://www.sonarworks.com/soundid-reference)：校正监听音箱和监听耳机的频响曲线和延迟。教育优惠的折扣力度经常都在 40% 以上。

### 千万不要高估自己的记忆力

能记下来的就记下来，特别是那些主要靠记忆的、零散的知识点。
- 有可能因为失眠或者其它各种古怪的身体原因，而使得记忆受影响。
- 又或者，发现自己其实不是很适合这一行，或者兴趣没有预想中的高，进而使得相关的知识不是很好记。
- 还有一个重要理由：许多书的信息密度其实比较低。自己整理笔记，提高信息密度，日后复习查阅会很高效。

### 记笔记的效率

对于信息密度较低的书，可以开一个新的文档去记笔记。如果书的信息密度比较高，那么应当直接在书上画重点。

如何判断书的信息密度？每个人对信息密度的感觉不同，只能通过多读书来积累自己的直觉。
- 以本人为例，一般而言，数学类书籍的信息密度对本人来说比较高；而许多专业课教材的信息密度较低。
- 也可以尝试语音输入。但本人感觉语音输入的准确率还不够高，本专业的术语较难一次识别成功，导致语音录入的文段需要修订，使得语音输入不一定比通常的打字要快。

但无论采用何种笔记方法，笔记都不应过长。否则，需要考虑自己是否没有使用合适的方法记笔记。

### 不要光学不练

尤其是学习编程语言期间，**必须通过做项目来巩固知识，否则很快会遗忘**。

想不到要做什么项目的，至少还可以：
- 每天做一些数学题，微积分、线性代数、概率统计之类的。
- 提前去刷 LeetCode 或 HackerRank，或者到各大学校的 Online Judge（OJ）上做算法题。算法大佬可以刷 Codeforces。
- 在开源站点上找一些具有自己感兴趣的功能的软件，模仿它们的实现。
  - 常见开源网站：GitHub、GitLab、BitBucket、SourceForge、Gitee ……
  - 并不是所有高 Star⭐ 的开源项目都具有良好的代码结构。每个程序员都应当形成最适合自己的一套代码风格。

### 了解行业，获得积累

你是否有经历过：
- 做课设的时候，任课老师没有将需求限定得比较死，甚至直接来个内容不限、自由发挥；或者自己在课下想额外练习一下编程的时候，总是想不到要做些什么功能、使用怎样的技术？
- 框架 / 库这么多，不知道怎么选、从哪里开始学。
- 不清楚自己是否只是在拙劣地重复：会不会正在做的东西其实老早就被前人做得更好了？
- ……

是的，相信你也猜到了：**只是完成课内的要求，是远远不够的**。在平日，就需要不断地进行各种各样的积累。**不熟悉计算机的同学**（比如，因为出身边远地区，经济比较困难；或者因为初中和高中的学业问题而被管得死死的，结果大学之前一直都很少接触计算机）**更要对此引起高度重视**。方法有很多，这里按照个人经验提出一些较为可行的：
- 多看本行业及其它相关行业的新闻。这些网站随手就能搜到很多，选几个内容比较符合兴趣的就行。
- 选择自己感兴趣的，或较大概率作为日后发展方向的细分行业：可以是 Web、音视频、服务端、操作系统、体系结构、嵌入式、云、数据库、无人驾驶、工业软件，等等，了解这些行业目前主要应用哪些技术（以及相应的软件）、取得了哪些主要的重大发展成果、日后的发展趋势，等等。例：
  - React、 Vue、Angular 是前端开发的主流框架；Spring 全家桶在 Web 开发中的重要地位，等等；跨平台等需求正越发受到重视。
  - 在音视频开发中，C / C++ 一般都是首选的编程语言，常用的库有 FFmpeg 等。
  - 关系数据库已高度成熟，常见的关系数据库产品有 Oracle DB、MySQL / MariaDB、PostgreSQL、Microsoft SQL Server 等；非关系数据库有文档型数据库（如 MongoDB）、图数据库、时间序列数据库、空间（地理信息）数据库、键值数据库、面向对象数据库，等等；主流的数据库产品通常都支持多个模型，而不仅仅是关系模型，如：各大关系数据库也在陆续添加 JSON、XML 等非关系数据的支持。
    - [DB-ENGINES 数据库排名](https://db-engines.com/en/ranking)
  - 常见的编程语言，如 C / C++、Java、Python、C#、Kotlin、JavaScript / TypeScript，等等，有什么主要特点，适合或不适合哪些领域；它们的较新版本具有何种改进，有利于解决哪些需求 / 痛点，等等。
  - 人工智能行业的发展成果，譬如：近年来的许多汽车都支持辅助驾驶；语音输入正在普及，准确率不断上升，甚至方言的识别率也能做到比较高；翻译网站的翻译结果正在变得越来越接近信、达、雅的标准；与此同时，人工智能还面临许多问题，譬如：神经网络实质上是一个黑箱，人们目前还不能得知神经网络能够产生特定输出的具体 / 本质的原因；目前人工智能成果的落地，主要还是依靠暴力堆数据、堆算力，导致更多成果的大规模投入应用受到瓶颈（**再次强调：即便如此，这也与包括初级软件工程师在内的无数岗位正在被取代不矛盾！**）；作为风口行业，人工智能产业也没有逃脱不良现象：总有大量人员骗取投资，捞完就跑，大量相关企业其实并没有太多技术功底，等等。
  - ……

这些积累都有机会为自己的未来工作和发展提供独特的指导。

### 尽早熟悉生产力工具的使用

比如：各类 IDE（集成开发环境）、Microsoft Office、LaTeX，等等。这部分时间是不能省的。不愿意额外花时间去学这些东西，短期来看虽然节省了时间，但从长期来看，带来的麻烦在时间上的开销大得多。
- 实在不想折腾 LaTeX 的，可以使用 Microsoft Word 敲公式。随着版本的更新，Word 公式编辑器的许多操作正越来越接近 LaTeX。

假如确实不想跟相关的教程去学，那么可以试着：每当用这些软件做某项工作觉得很麻烦时，就去网上搜索可能提高效率的操作方法。

### 自动化

觉得用计算机做某件事很麻烦，就可以去想怎样将其自动化。常见的途径是：搜索相关的软件，或自己编程实现。
- 基本目标：**避免使用计算机做大量重复的手工工作**。按照这个目标，寻找合适的自动化方案并实施。
- 一般地，**不要重复造轮子**。你能想到的想法，其他人就一定都想不到或者还没有公开实现吗？虽然自己动手写一些“造轮子”的项目的确有助于训练基本功，但不必花费过多的时间。编写代码的过程中，经常要询问自己：我写的项目与同类项目相比，有哪些改进或创新？
- 一些已经问世多年并具有一定市占的大型软件，在使用它们时更要注意这一点：许多你正在重复地、手动进行的工作，实际上极有可能已有相应的功能能够高效地自动化完成你的需求。因此，多去网上搜一搜。
  - Microsoft Office 自动化可以通过[使用 Office.js 编写 Office 插件（add-in）](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/develop-overview)来完成。也可以使用 [OXML SDK](https://learn.microsoft.com/en-us/office/open-xml/open-xml-sdk) 来批量操纵 Office Open XML（OOXML）文件（自 Office 2007 起，Excel、PowerPoint、Word 文档全部采用 OOXML 格式），但对编程能力的要求显然高得多。
  - 许多非线性编辑（非编，NLE）和视觉特效（VFX）软件都提供了自动化机制：
    - 3ds Max 提供 [C++ SDK、.NET API、Python 脚本和 MAXScript 脚本的支持](https://help.autodesk.com/view/MAXDEV/2022/ENU/?guid=MAXDEV_Overview_overview_html)
    - Maya 支持[通过 MEL、Python 和 Dash 编写脚本](https://help.autodesk.com/view/MAYAUL/2022/ENU/?guid=GUID-1C6C0BC0-002C-4035-ADC7-97AD2F390190)
    - Cinema 4D 提供 [Python SDK](https://developers.maxon.net/docs/py/2024_0_0a/manuals/manual_py_in_c4d.html)
    - [Premiere Pro 脚本](https://ppro-scripting.docsforadobe.dev/introduction/extendscript-overview.html)和 [After Effects 脚本](https://helpx.adobe.com/after-effects/using/scripts.html)都是使用 [ExtendScript](https://extendscript.docsforadobe.dev/introduction/extendscript-overview.html)（JavaScript 的 Adobe 扩展）编写的
    - Blackmagic Design 旗下的 Davinci Resolve 和 Fusion 使用 Lua 开发插件（称为 [Fuse](https://documents.blackmagicdesign.com/UserManuals/Fusion_Fuse_SDK.pdf)）
    - VEGAS Pro [提供 .NET API 用于编写脚本](https://www.vegascreativesoftware.com/in/downloads/)
    - Blender [使用 Python 编写自动化脚本](https://docs.blender.org/manual/en/latest/advanced/scripting/introduction.html)
  - Steinberg VST 插件使用 C++ 编写，用于扩展数字音频工作站（DAW）的功能。[VST SDK](https://steinbergmedia.github.io/vst3_doc/vstsdk/index.html)

### 善用人工智能

遗憾的是，绝大多数工作的本质都是简单而重复的。这意味着现有的人工智能很快将能胜任它们。至于那些（哪怕只是相对）不易被取代的工作，都是无一例外的超高要求。本行业的例子包括算法工程师和某些重要软件的开发与测试人员等。以下是一些典例。可以看出大部分属于基础设施：
<details>
<summary>点此展开</summary>
<details>
<summary>编程语言的标准库与工具链，以及高度针对特定编程语言的库或框架</summary>

  - 标准库：C 标准库、C++ 标准库、.NET 基础类库（BCL）
  - 编译器：MSVC、GCC、Clang、Intel C++ Compiler (ICC)、Roslyn、javac、kotlinc、rustc
  - 解释器：Google V8、SpiderMonkey、CPython
  - 运行时（Runtime）：Java Virtual Machine (JVM)、Common Language Runtime (CLR)、Android Runtime（ART）、Node.js
  - 交互环境：Kotlin Interactive (ki)、C# Interactive (csi)、Python REPL、Julia REPL、R REPL
  - 语言服务器：clangd、OmniSharp、tsserver
  - linter：clang-tidy、eslint、pylint
  - 构建自动化：CMake、Make、NMake、MSBuild、Ant、Maven、Gradle、Ninja、qmake、xmake
    - 很多老项目还使用 M4 和 Autoconf 等。
  - Boost、Qt
</details>
<details>
<summary>操作系统内核与其它底层设施</summary>

  - NT 内核、Linux 内核、XNU
  - Windows Runtime (WinRT)
</details>
<details>
<summary>数据库内核</summary>
</details>
<details>
<summary>驱动</summary>

  - 硬件驱动，如：显卡驱动、声卡驱动、网卡驱动、总线驱动
  - 软件驱动，如：VMWare Tools、ODBC / OLE DB
</details>
<details>
<summary>虚拟化</summary>

  - 虚拟机：Hyper-V、ESXi、VMWare Workstation、VirtualBox、QEMU
  - 操作系统层虚拟化（容器）：Docker、Podman、LXC、OpenShift、Kubernetes
</details>
<details>
<summary>服务器</summary>

nginx、httpd、Tomcat、IIS、Kestrel、Exchange Server
</details>
<details>
<summary>中间件</summary>

ZeroMQ（ZMQ）、RabbitMQ、kafka、gRPC
</details>
<details>
<summary>自动化测试框架</summary>

Google Test (GTest)、Qt Test、JUnit、Mockito、NUnit、xUnit.NET、PyTest、unittest、Selenium
</details>
<details>
<summary>Shell</summary>

Bash、zsh、fish、cmd、PowerShell
</details>
<details>
<summary>搜索引擎</summary>
</details>
<details>
<summary>通信协议</summary>
</details>
<details>
<summary>其它特定领域的底层库、框架或套件等</summary>

- 音视频：FFmpeg、HandBrake、x264、x265、libaom、libflac
- 科学 / 高性能计算：CUDA、OpenMP、MPI、MKL、BLAS、LAPACK、NumPy、Octave
- 人工智能：CNTK、NLTK、TensorFlow、Torch、Keras、MXNet
- 大数据：Hadoop、Spark
- GUI：WPF、WinUI、MAUI、GTK、Qt Widgets、Qt Quick、wxWidgets、LVGL、Electron、JetPack Compose、Compose Multiplatform、Swing、JavaFX、Avalonia
  - 许多老旧项目使用 Microsoft Foundation Class（MFC）和 WinForms；部分项目可能使用 Xamarin。
- Web 前端：React、Vue、Angular、Blazor、jQuery、Bootstrap、Tailwind
- Web 后端：Spring MVC、ASP.NET、ASP.NET Core、Django、Flask、FastAPI
  - 对象关系映射（ORM）框架：MyBatis、MyBatis-Plus、Spring Data JPA、Entity Framework、Entity Framework Core
  - 许多老旧项目使用 ASP.NET Web Forms、Struts 2、Hibernate。
- ……
</details>
<details>
<summary>大型的工业（行业）软件等</summary>

- MATLAB、Mathematica、Maple
- Gaussian、ChemDraw
- Solidworks、CATIA、AutoCAD
- Unity、Unreal、CryEngine、Godot
- Adobe Creative Cloud、3DS Max、Maya、Blender、Cinema 4D、DaVinci Resolve、Houdini、ZBrush、Redshift、Octane、Arnold、V-Ray
- ……
</details>
</details>

注意：虽然这些岗位的可替代性较低，但**并不代表相关的职位必然足够多**。

对于普通人，别无选择，只能通过与 AI 充分合作，来降低被迅速淘汰的概率。
- ChatGPT 能够回答多方面的问题并编写一些简单的代码，但它不联网，因而能力受限。
- 相比之下，[Bing Chat (Microsoft Copilot)](https://copilot.microsoft.com/) 能够通过搜索网络内容来增加答案的准确率。[GitHub Copilot](https://github.com/features/copilot) 的代码补全则使用公开仓库中的代码进行训练，是高度针对本行业的人工智能。两者均能为编程和报告撰写等日常任务提供相当多的帮助。
  - 近期发现 Bing Chat 对计算机相关问题的正答率有所下降，不排除是因为访问量过大而对模型进行了调整，令回应每个请求消耗的算力与能源更少。尽管如此，**不影响人工智能正在取代海量工作的结论**。
- 你应当有能力判断人工智能给出的计算机相关知识的作答是否准确。这意味着你要认真对待下述课程与相应技能的培养，包括信息检索的能力。

# 第一章&emsp;课程、教材与公开课

本章最后更新于：2024/08/18

> “上清华的课比上清华简单多了。” 
> 
> —— B站一网友

- 我读本科期间，教研室主任说：在硕博的培养方面，内地的计算机类专业已经不落后太多；内地与境外计算机名校的总体差距，主要体现在打基础的本科教学上。
- 而内地的计算机顶校与非顶校之间，本科教学质量的差距也是十分值得引起重视的。
- 一些发达国家的计算机类专业虽然总体有着更好的教学质量，但其实相当多的学校（包括某些名校）的计算机教学质量很一般。考虑此问题，本章遴选了优质的教材与公开课。
- 通过充分利用信息时代以来最伟大的发明之一——互联网，大家也有机会享受（至少是一部分）以往只有顶校学生才可以享受到的资源。
- 在没有特殊说明的情况下，对于每门课，只需要从罗列的若干本教材中选择一本即可（不包括习题集）。
- 对于公开课，没有注明建议倍速，并不代表应当原速播放。可能是为了照顾基础不好的学生，许多大学在录制公开课时，都会将视频的播放速度降低。大家在播放的时候，一般都可以加速播放。
- 如无意外，应当在不晚于 “建议开课学期” 完成相应课程的学习（假设一年两学期）。

## 基础必修（公共必修）

### 数学分析 || 高等数学（微积分） / Mathematical Analysis || Calculus
#### 课本
[1] 	常庚哲 and 史济怀, 数学分析教程, 1 ed., 北京: 高等教育出版社, 2003.  
[2] 	常庚哲 and 史济怀, 数学分析教程, 3 ed., 合肥, 安徽: 中国科学技术大学出版社, 2012.  
[3] 	薛春华 and 徐森林, 数学分析, 北京: 清华大学出版社, 2005.  
[4] 	陈纪修, 於崇华 and 金路, 数学分析, 2 ed., 北京: 高等教育出版社, 2004.  
[5] 	陈纪修, 於崇华 and 金路, 数学分析, 3 ed., 北京: 高等教育出版社, 2019.  
[6] 	程艺, 陈卿 and 李平, 数学分析讲义, 北京: 高等教育出版社, 2019.  
[7] 	张筑生, 数学分析新讲 重排本, 北京: 北京大学出版社, 2021.  
[8] 	Владимир Антонович Зорич, 数学分析, 北京: 高等教育出版社, 2019.  
[9] 	薛春华 and 徐森林, 数学分析精选习题全解, 北京: 清华大学出版社, 2009.  

#### 说明
网络上可获取的公开课可能使用旧版的教材。但使用新版的影响应当不大。  
多年以来，国内外的几代科教工作者留下了相当多的优秀教材。限于时间和篇幅，这里没有列出更多课本。  
**大学的数学分析、高等代数、概率统计、普通物理等课程都已相当成熟的。因此，教材的影响没有那么大，教材之间的差距也没有那么大。如果纠结选择哪一本，不妨随机抽选（个别太难的书目除外）。只要不是实在写得太烂，教材本身基本上不会带来大问题。**

推荐开课学期：1 ~ 2。

#### 院校开课情况选讲
- 内地大多数院校的计算机类专业，要求学习的是高等数学（有的学校称作微积分）。
- 部分对数学要求较高的院校或专业，则会要求学习（工科）数学分析。
- 一些大学虽然按照高等数学（微积分）的教学大纲与考试要求讲课，但也使用数学分析的教材。
- 中国科学院大学的《微积分》一共有 A、B、C 三个班，课程难度依次降低。但 A 班主要针对数学、物理类专业。很明显，它应当对应其它高校的《数学分析》课程。A 班选用卓里奇（В. А. Зорич）《数学分析》（**“难得惨绝人寰”**，慎选本教材）。
- 一般而言，数学和物理等理科专业要求学习数学分析。通常，数学系会学习三个学期，其它院系学习两个学期，且要求有所降低。
- 中国科学技术大学计算机科学与技术专业要求学习两个学期的数学分析 B（2024 年数据）。
- 南京大学人工智能学院要求学习两个学期的工科数学分析。
- 北京大学 “图灵班” 要求学习数学分析。

[北京大学&emsp;本科培养方案（2023 · 理科卷）](http://www.dean.pku.edu.cn/userfiles/upload/download/202309010917575972.pdf)

#### 公开课
包括但不限于：
- 复旦和中科大的数学分析课程，在网上都可以找到公开课。建议倍速：1.5 x ~ 2 x。
  - [数学分析（中国科学技术大学）](https://www.bilibili.com/video/BV1ZW411e7PF?from=search&seid=12091659250493259510)&emsp;主讲：史济怀
    - 公开课录制时间比较早（2003 年秋开始录制），音质比较渣，而且有少量的视频有内容缺损。凑合着看吧。
    - 配套教材：[1]
  - 数学分析 B（中国科学技术大学少年班）&emsp;主讲：程艺
    - [B1](https://www.bilibili.com/video/BV1Lv411r7wa/?spm_id_from=333.337.search-card.all.click)
    - [B2](https://www.bilibili.com/video/BV1HV411J7sH/?spm_id_from=333.337.search-card.all.click)
  - [数学分析（复旦大学）](https://www.bilibili.com/video/BV12s411h7v4?from=search&seid=12091659250493259510)&emsp;主讲：陈纪修
    - 有比较多的同学反映，中科大的数分比复旦的要难。大家可以根据自己实际的情况选择。

### 高等代数 || 线性代数 / Linear Algebra
#### 课本
[1] 	丘维声, 高等代数, 1 ed., 北京: 清华大学出版社, 2010.  
[2] 	丘维声, 高等代数, 2 ed., 北京: 清华大学出版社, 2019.  
[3] 	李炯生 and 查建国, 线性代数, 1 ed., 合肥, 安徽: 中国科学技术大学出版社, 1989.  
[4] 	李炯生, 查建国 and 王新茂, 线性代数, 2 ed., 合肥, 安徽: 中国科学技术大学出版社, 2010.  
[5] 	Michael Artin, Algebra, 2 ed., Boston, Massachusetts: Addison Wesley, 2010.  
[6] 	Dan Margalit and Joseph Rabinoff, Interactive Linear Algebra, Atlanta, Georgia, 2019.  
[7] 	席南华, 基础代数, 北京: 科学出版社, 2016.  
[8] 	李尚志, 线性代数, 北京: 高等教育出版社.  
[9] 	Алексей Иванович Кострикин, 代数学引论, 北京: 高等教育出版社, 2011.  
[10] 	任广千, 谢聪 and 胡翠芳, 线性代数的几何意义, 1 ed., 西安, 陕西: 西安电子科技大学出版社, 2015.  
[11] 	David C. Lay, Steven R. Lay and Judi J. McDonald, Linear Algebra and Its Applications, 6 ed., Pearson, 2021.  
[12] 	Sheldon Axler and Kenneth Ribet, Linear Algebra Done Right, 4 ed., Springer, 2023.   

#### 说明
- 《线性代数的几何意义》[10]不是教材。
- 在线阅览：[[6]](https://textbooks.math.gatech.edu/ila/chap-algebra.html)、[[12]](https://link.springer.com/content/pdf/10.1007/978-3-031-41026-0.pdf)。
- 李炯生等编著的《线性代数》[3][4]面向的是中国科学技术大学数学系或少年班，**难度大，不建议数学功底较弱的同学选用**。
- 如果你具有一定的线代基础，那么 MIT 的教材《Introduction to Linear Algebra》及其公开课可能难度偏低（不够深入）。
- 中国科学院大学数学系有班级选用 А. И. Кострикин（柯斯特利金）的《代数学引论》[9]。

 “高等代数” 是苏联的说法，在欧美高校中没有对应的课程。在中国内地，“高等代数” 一般在数学、物理类专业开设，内容比 “线性代数” 课程要多。

网络上可获取的公开课可能使用旧版的教材。但使用新版的影响应当不大。  

一般地，学习一到两个学期。

推荐开课学期：1 ~ 2。

#### 院校开课情况选讲
- 南京大学人工智能学院要求学习两个学期的高等代数。
- 北京大学 “图灵班” 要求学习高等代数。

#### 公开课与参考资料
包括但不限于：
- [高等代数（北京大学）](https://www.bilibili.com/video/BV19W411G7QU?from=search&seid=14404683565163581636)&emsp;主讲：丘维声
  - 本课程是面向清华大学物理系学生的基础必修课。
  - 建议倍速：≤ 1.5 x
  - 配套教材：[1]
- [Introduction to Linear Algebra (Massachusetts Institute of Technology)](https://www.bilibili.com/video/BV1ix411f7Yp?from=search&seid=2805254012188999371)&emsp;主讲：Gilbert Strang
  - 建议倍速：≤ 1.5 x
- [（参考资料）线性代数的本质](https://www.bilibili.com/video/BV1ys411472E)&emsp;主讲：3Blue1Brown
  - 注意：线性代数基础较好的同学可能会感觉本视频讲解得过慢。

### 离散数学 / Discrete Mathematics
#### 课本
[1] 	Kenneth H. Rosen, Discrete Mathematics and its Applications, 8 ed., McGraw-Hill Higher Education, 2018.  
[2] 	左孝凌, 李为鑑 and 刘永才, 离散数学, 上海: 上海科学技术文献出版社, 1982.  
[3] 	屈婉玲, 耿素云 and 张立昂, 离散数学, 2 ed., 北京: 高等教育出版社, 2015.  
[4] 	屈婉玲, 耿素云 and 张立昂, 离散数学学习指导与习题解析, 2 ed., 北京: 高等教育出版社, 2015.  
[5] 	屈婉玲, 耿素云 and 王捍贫, 离散数学教程, 1 ed., 北京: 北京大学出版社, 2009.  
[6] 	屈婉玲, 耿素云, 王捍贫 and 刘田, 离散数学习题解析, 1 ed., 北京: 北京大学出版社, 2009.  

#### 说明
离散数学为计算机类专业的必修课。常学习两个学期，也有许多学校学习一个学期，少数学校三个学期。
离散数学的学习内容主要包括：
- 数理逻辑
- 集合论
- 代数系统（代数结构） / 近世代数（抽象代数）
- 组合数学
- 图论
- 初等数论

在数学类专业，这些内容一般会单独开课。但在计算机类专业，对掌握这些知识的要求要低很多（例如，只教简单的命题逻辑和一阶逻辑，基础的集合论与图论、抽象代数，以及初等数论，等等），因此通常把授课内容合并在一起，统称 “离散数学”。有意愿的同学（尤其是有兴趣做科研的）可以深入学习。

#### 院校开课情况选讲
- 北京大学计算机类专业（无论是否为 “图灵班” ）学习三个学期的离散数学。
- 北京大学为《离散数学》课程编著的教材具有多个不同的版本。其中[5]是难度最高的版本，为北京大学计算机系本科生所使用。

推荐开课学期：1 ~ 3。

#### 公开课
包括但不限于：
- [离散数学（北京大学）](https://www.bilibili.com/video/BV1BW411n7gw?from=search&seid=4574874822332206232)&emsp;主讲：刘田、屈婉玲、王捍贫
  - 配套教材：[5]

### 概率论与数理统计 / Probability Theory and Statistics
#### 课本
[1] 	陈希孺, 概率论与数理统计, 1 ed., 合肥, 安徽: 中国科学技术大学出版社, 2009.  
[2] 	徐全智 and 吕恕, 概率论与数理统计, 1 ed., 高等教育出版社, 2004.  
[3] 	徐全智 and 吕恕, 概率论与数理统计, 4 ed., 高等教育出版社, 2021.  

#### 说明
概率论与数据统计课程是日后的机器学习等众多专业课的基础，请务必落实。

在数学系，概率论与数理统计是两门独立的课程。对于非数学类专业，通常合并为一门课程。

推荐开课学期：3。

### 物理 / Physics
#### 课本
[1] 	张三慧, 大学物理学, 4 ed., 北京: 清华大学出版社, 2018.  
[2] 	程守洙 and 江之永, 普通物理学, 8 ed., 高等教育出版社, 2022.  
[3] 	马文蔚 and 周雨青, 物理学教程, 3 ed., 高等教育出版社, 2006.  

#### 说明
内地各大学通常将大学物理列为工科公共必修课，修习一到两个学期。
- 化学等专业可能需要学习两个学期；
- 生物、医学、农学等专业一般安排一个学期。

一般地，普通物理为物理类专业的必修课程，常分为力学、热学、电磁学、光学和原子物理学五门课。大学物理是非物理专业的公共基础课，也包括力、热、电、光、原，但课时明显比物理系少，学习内容和难度也比物理系低。

物理苦手可以选择难度偏低的[3]，东南大学编写。

非物理类专业学习大学物理的主要目的是：**巩固微积分的掌握**。因此，一般在学习完单变量微积分（高等数学 I）以后开始学习。**如时间较紧，可以跳过。**

推荐开课学期：1 ~ 2。

#### 院校开课情况选讲
中国科学技术大学计算机科学与技术专业 2024 级培养方案要求学习三个学期的物理类课程：
- 第二学期：力学 B、热学 B、大学物理-基础实验 B。
- 第三学期：电磁学 C、大学物理-综合实验 B。
- 第四学期：量子物理。  
学有余力的**学霸与学神**可以考虑尝试。

[中国科学技术大学&emsp;本科培养方案](https://catalog.ustc.edu.cn/plan)

#### 公开课
包括但不限于：
- [普通物理学（清华大学）](https://www.bilibili.com/video/BV1Fx411T7sV?from=search&seid=3309839293019551596)&emsp;主讲：杨振宁

### C 语言 / C Programming Language
#### 课本
[1] 	Brian W. Kernighan and Dennis M. Ritchie, The C Programming Language, 2 ed., 1988.  
[2] 	S. Prata, C Primer Plus, 6 ed., Pearson, 2013.  

#### 说明
许多专业课给出的代码示例是用 C / C++ 语言编写的。同时，如果想走嵌入式、内核、驱动等方向，对 C 语言的掌握是必不可少的。

自 1972 年推出以来，C 语言已经发布了多个版本。C 语言在 1989 年首次标准化，得到的标准称为 ANSI C（C89）。此后，又陆续发布了 C95、C99、C11 和 C17（2018-10 发布）版本。预计在 2023 年发布新的版本，非正式版本号 C2x。学习 C 语言时，需要注意了解新版本的特性。

2022 年 2 月，Linux 内核作者 Linus Torvalds 表示：Linux 内核将从 C89 迁移至 C11。

不同的 C 编译器（compiler）对 C 标准的实现是有出入的，但常见的语法一般都遵循标准。

可以到 [cppreference](https://en.cppreference.com/w/c) 查阅资料。[中文版](https://zh.cppreference.com/w/c)  
Microsoft 的[官方文档](https://learn.microsoft.com/en-us/cpp/c-language/c-language-reference)也是非常不错的 C 语言的参考资料。不过，Microsoft 的文档给出的自然是 Microsoft C 的参考。[中文版](https://learn.microsoft.com/zh-cn/cpp/c-language/c-language-reference)  

推荐开课学期：1。

### C++ / C++
#### 课本
[1] 	Stanley B. Lippman, Josée Lajoie and Barbara E. Moo, C++ Primer, 5 ed., Addison Wesley, 2012.  
[2] 	Microsoft, "C++ Language Reference," 3 8 2021. [Online]. Available: https://learn.microsoft.com/en-us/cpp/cpp/cpp-language-reference. [Accessed 4 8 2023].  
[3] 	Bjarne Stroustrup, A Tour of C++, 3 ed., Pearson, 2022.  
[4] 	Marc Gregoire, Professional C++, 5 ed., Wrox, 2021.  

#### 说明
笔者认为，C++ 应当是**必修**的。这是因为：相比 Java、Python、C# 等高级语言，C / C++ 更加贴近硬件，因而暴露了计算机工作时涉及的许多原理与细节。打好 C / C++ 的基础，有利于尽快建立对计算机整体及主要部件的认识，对计算机将如何执行自己编写的语句有一个更加明确而充满细节的思路。  
此外，许多其它高级语言的语法和代码风格等，都可以在 C++ 中找到。如果在熟悉 C++ 以后再去学习其它语言，学习速率就会快得多，因为要学习的很多内容都是自己已经接触过了的。

再次提醒：可使用 [Bing Chat (Microsoft Copilot)](https://copilot.microsoft.com/) 等人工智能辅助自己的学习。虽然此类人工智能在绝大多数时候都能提供正确答案，但你仍然需要结合已有知识、参考资料与搜索引擎，自行判断人工智能给出的计算机相关知识的作答是否准确。

C / C++ 标准的正式版是要收费的，网上只能找到免费的最终草稿（final draft），最终草稿与正式标准一般只有顺序上的区别。

可以到 [cplusplus](http://cplusplus.com/) 和 [cppreference](https://en.cppreference.com/w/) 查阅资料。[中文版](https://zh.cppreference.com/w/)  
【★】Microsoft 的官方文档[2]是非常不错的学习现代 C++（Modern C++）的材料。不过，Microsoft 的文档给出的自然是 Microsoft Visual C++（MSVC）的参考，可能与官方标准和其它编译器的实现（GCC、Clang 等）有一定差异（当然，常见的语法一般都遵循标准）。[中文版](https://docs.microsoft.com/zh-cn/cpp/cpp/cpp-language-reference)（提示：本主题的部分内容可能是由机器翻译）。

自 1985 年发布以来，C++ 已经更新了数个版本，主要包括 C++98、C++03、C++11、C++14、C++17、C++20。C++23 标准基本已经接近完成，预计将在 2023 年发布。学习 C++ 时，尤其需要注意 C++11 以来的新特性。

“一年精通，三年熟悉，五年了解，十年用过”，C++ 作为编程语言的复杂度在世界上数一数二，1 个学期能学到的全部知识，充其量连皮毛都算不上。想要掌握 C++，一个学期的学习自然是远远不够的。如果你想向工业软件、音视频、游戏（温馨提醒：很多工业软件的岗位还未必要求图形学的功底，但游戏肯定是躲不掉的）、高性能计算、操作系统（内核等的开发通常要求使用纯 C，所以 C 语言也不要落下）、高频交易等方向发展，或者想成为（底层）库作者，就更有必要将 C++ 的基础打扎实。因为这些方面需要的软件对性能的要求是很高的。C++ 是编写高性能软件的必备语言。

**注意：请一同练习使用构建自动化工具 [CMake](https://cmake.org/)。CMake 是事实上的 C++ 项目跨平台构建自动化的标准。**

[更多 C++ 书目](https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list)

#### 试行性学习方法
- 有反馈称《C++ Primer》[1]相对冗长。一种替代方案是：先学习[2]一段时间后，继续学习[2]的同时开始学习 C++ 作者编写的[3]。由于[2]是参考而非教程，使用 [Bing Chat (Microsoft Copilot)](https://copilot.microsoft.com/) 等人工智能挑选可以作为入门的章节；向人工智能积极提问，并适时反馈自己的学习情况，以在需要时及时调整。
- Rust 是近几年开始快速发展的语言之一，有机会在日后达到与 C++ 分庭抗礼的地位。感兴趣的同学也可以学习 Rust。

建议开课学期：1 ~ 2。

### Shell

\[TBC\]

### 软件测试 / Software Testing

\[TBC\]

### Web 开发 / Web Development
[1] 	Mozilla Foundation, "Learn Web Development," 20 6 2023. [Online]. Available: https://developer.mozilla.org/en-US/docs/Learn. [Accessed 4 8 2023].  
[2] 	陈恒 and 李正光, SSM + Spring Boot + Vue.js 3全栈开发从入门到实战, 清华大学出版社, 2022. 

#### 说明
【★】**建议首先通过[1]进行学习**。注意：MDN 的中文版文档虽有志愿者进行翻译，但通常不是最新的，因此推荐直接使用英文版。
其余网站也可参考。如：[W3Schools](https://www.w3schools.com/) 、[菜鸟教程](https://www.runoob.com/) 、[CodeCademy](https://www.codecademy.com/)、[web.dev](https://web.dev/)。

### 数字电子学 / Digital Electronics
#### 课本
[1] 	邓元庆, 关宇, 贾鹏 and 石会, 数字设计基础与应用, 2 ed., 清华大学出版社, 2010.  

#### 说明
一些学校可能将本课程称作：数字电路、数字逻辑、数字电子技术，等等。

本课程是专业必修课计算机组成原理的基础。

数电的书我没有去找别的，反正我们学校用的是这本。计算机类专业的可以不用买书，看我的[笔记](https://blog.csdn.net/COFACTOR/article/details/103862541)。至少在目前来看，足够不卡住后面的学习了。  
本来想修订一下笔记，然而由于时间关系，暂时鸽了。

推荐开课学期：2 ~ 3

### 汇编语言 / Assembly Language
#### 课本
[1] 	Kip R. Irvine, Assembly Language for x86 Processors, 8 ed., Pearson, 2019.  

#### 说明
感谢 [@himself65](https://github.com/Himself65) 推荐了《Assembly Language for x86 Processors》。

本课程是操作系统、组成原理两门专业必修课的基础。

非常多的学校（甚至包括有的顶校）还在教 8086 的汇编，哎……

推荐开课学期：2 ~ 4（最好在学习操作系统和计算机组成原理等专业课之前就开始学习；与这些专业课同步学习亦可）

## 专业必修
### 数据结构 / Data Structures
#### 课本
[1] 	邓俊辉, 数据结构（C++语言版）, 3 ed., 北京: 清华大学出版社, 2013.  
[2] 	严蔚敏, 李冬梅 and 吴伟民, 数据结构（C语言版）, 2 ed., 北京: 中国工信出版集团, 2015.  
[3] 	邓俊辉, 数据结构习题解析, 3 ed., 北京: 清华大学出版社, 2013.  
[4] 	李冬梅 and 张琪, 数据结构习题解析与实验指导, 中国工信出版集团, 2015.  
[5] 	Mark Allen Weiss, Data Structures & Algorithm Analysis in C++, 4 ed., Pearson, 2013.  
[6] 	Clifford A. Shaffer, Data Structures and Algorithm Analysis, 3 ed., 2013.  
[7] 	Steven S. Skiena, The Algorithm Design Manual, 3 ed., Springer, 2020.  

#### 说明
可直接获取[7]的[电子版](https://people.cs.vt.edu/shaffer/Book/C++3elatest.pdf)。

有的学校的对应课程为 “数据结构与算法” 。

其实严蔚敏的《数据结构》[2]倒没有一些人骂得那样糟，我个人感觉至少非代码部分还是写得挺清楚的。但严书的代码风格我不喜欢。想考研的同学最好学习 / 复习本书。

推荐开课学期：2 ~ 3

### 操作系统 / Operating Systems
#### 课本
[1] 	Remzi H. Arpaci-Dusseau, Andrea C. Arpaci-Dusseau and Peter Reiher, Operating Systems: Three Easy Pieces.  
[2] 	汤小丹, 梁红兵, 哲凤屏 and 汤子瀛, 计算机操作系统, 4 ed., 西安电子科技大学出版社, 2014.  
[3] 	Abraham Silberschatz, Operating System Concepts, 10 ed., Wiley, 2018.  
[4] 	Andrew S. Tanenbaum, Modern Operating Systems, 5 ed., Pearson, 2022.  
[5] 	陈海波 and 夏虞斌, 操作系统：原理与实现, 机械工业出版社, 2023.  

#### 说明
- OSTEP[1]作者主页上有英文版，中文版不能直接从主页里找到，且不会像英文版那样随时更新。[在此](http://pages.cs.wisc.edu/~remzi/OSTEP/)获得最新版本。[中译版](http://pages.cs.wisc.edu/~remzi/OSTEP/Chinese)
- 汤子瀛等编著的《计算机操作系统》[2]为内地众多知名高校的计算机类专业考研的指定参考书，其中部分内容可以作为 OSTEP 的补充。
- [计算机本科生花大量时间写编译器，操作系统是不是不务正业？](https://www.zhihu.com/question/321433640)
- [为啥南京大学蒋炎岩老师的操作系统课那么难?](https://www.zhihu.com/question/598621331)

推荐开课学期：3 ~ 4

### 计算机组成原理 / Computer Organization
#### 课本
[1] 	D. A. Patterson and J. L. Hennessy, Computer Organization and Design ARM Edition: The Hardware Software Interface, 1 ed., Morgan Kaufmann, 2016.  
[2] 	David A. Patterson and John L. Hennessy, Computer Organization and Design MIPS Edition: The Hardware/Software Interface, 2 ed., Morgan Kaufmann, 2020.  
[3] 	David A. Patterson and John L. Hennessy, Computer Organization and Design RISC-V Edition: The Hardware Software Interface, 2 ed., Morgan Kaufmann, 2020.  
[4] 	Randal E. Bryant and David R. O'Hallaron, Computer Systems: A Programmer's Perspective, 3 ed., Pearson, 2015.  
[5] 	唐朔飞, 计算机组成原理, 3 ed., 高等教育出版社, 2020.  
[6] 	唐朔飞, 计算机组成原理——学习指导与习题解答, 2 ed., 高等教育出版社, 2012.  

#### 说明
- 考研的同学可以以唐朔飞的《计算机组成原理》[5]及其习题解答[6]为参考资料。
- 部分同学反映：CSAPP[4]难度偏低，对于进入计算机类专业之前已时常接触计算机并具有一些基础的同学来说过于简单且冗赘。对于此种情况，推荐《计算机组成与设计》[1][2][3]。

推荐开课学期：3 ~ 4

### 计算机网络 / Computer Networking
#### 课本
[1] 	James F. Kurose and Keith W. Ross, Computer Networking: A Top-Down Approach, 8 ed., Pearson, 2020.  
[2] 	谢希仁, 计算机网络, 8 ed., 电子工业出版社, 2021.  
[3] 	Andrew S. Tanenbaum, Nick Feamster and David J. Wetherall, Computer Networks, 6 ed., Pearson, 2020.  

#### 说明
- 关于谢希仁编著的《计算机网络》[2]，我们老师说：如果用的是中文教材，那么基本都是用这本。同时，这本书也是很多学校的计算机类考研指定的参考书。用于和《自顶向下方法》互为补充，也是很不错的。
- 有的学校的人工智能等方向不将《计算机网络》列为必修课。
- 《自顶向下方法》[1]第 8 版删去了第 7 版的第 9 章 “多媒体网络”，作者说明称：由于多媒体应用越来越流行，因此他们选择将这些内容编入前 8 个章节。从书中移除的内容都可以在书本的[配套网站](https://gaia.cs.umass.edu/kurose_ross/index.php)找到。

#### 参考阅读
- [网络协议列表](https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model))
- [Internet 协议栈（TCP/IP）](https://en.wikipedia.org/wiki/Internet_protocol_suite)
- [分类：应用层协议](https://en.wikipedia.org/wiki/Category:Application_layer_protocols)
- [分类：表示层协议](https://en.wikipedia.org/wiki/Category:Presentation_layer_protocols)
- [分类：会话层协议](https://en.wikipedia.org/wiki/Category:Session_layer_protocols)
- [分类：运输层协议](https://en.wikipedia.org/wiki/Category:Transport_layer_protocols)
- [分类：网络层协议](https://en.wikipedia.org/wiki/Category:Internet_layer_protocols)
- [分类：链路层协议](https://en.wikipedia.org/wiki/Category:Link_protocols)
- [分类：物理层协议](https://en.wikipedia.org/wiki/Category:Physical_layer_protocols)

推荐开课学期：3 ~ 5

### 数据库 / Database
#### 课本
[1] 	Abraham Silberschatz, Database System Concepts, 7 ed., McGraw-Hill Higher Education, 2019.  
[2] 	王珊, 杜小勇 and 陈红, 数据库系统概论, 6 ed., 北京: 高等教育出版社, 2023.  

#### 说明
- 感谢 [@vczh](https://github.com/vczh) 推荐了《Database System Concepts》。
- 人大的《数据库系统概论》[2]比较坑的地方在于，它上面的不少 SQL 语句在很多数据库产品里面都是不能被识别的。理论部分总体还 OK。
- 注意：不同数据库产品使用不同的 **SQL 方言**（SQL dialects），它们与作为标准的 ANSI SQL 不完全相同。如：Oracle DB 使用 PL/SQL，而 Microsoft SQL Server（MSSQL）使用 Transcat-SQL（T-SQL）。
- 我们学院的情况是：软工必修，信安选修。

推荐开课学期：3 ~ 5

### 形式语言与自动机 / Formal Languages and Automata
#### 课本
[1] 	Peter Linz and Susan H. Rodger, An Introduction to Formal Languages and Automata, 7 ed., Jones & Bartlett Learning, 2023.  

### 编译原理 || 编译器设计 / Principles of Compilation || Compiler Design
#### 课本
[1] 	Alfred V. Aho, Ravi Sethi and Jeffrey D.Ullman, Compilers: Principles, Techniques, and Tools, 2 ed., Pearson/Addison Wesley, 2006.  
[2] 	Andrew W. Appel, Modern Compiler Implementation in C, Cambridge University Press, 2004.  
[3] 	Steven S. Muchnick, Advanced Compiler Design and Implementation, Morgan Kaufmann, 1997.  
[4] 	Kenneth C. Louden, Compiler Construction: Principles and Practice, Cengage Learning, 1997.  
[5] 	Dick Grune and Ceriel J. H. Jacobs, Parsing Techniques: A Practical Guide, 2 ed., Springer, 2008.  
[6] 	Dick Grune, Kees van Reeuwijk, Henri E. Bal, Ceriel J. H. Jacobs and Koen Langendoen, Modern Compiler Design, 2 ed., Springer, 2012.  
[7] 	Keith D. Cooper and Linda Torczon, Engineering a Compiler, 3 ed., Morgan Kaufmann / Elsevier Science & Technology, 2022.  

#### 说明
我们学院的情况是：软工必修，信安选修。

推荐开课学期：4 ~ 6

## 基础选修

### Java
#### 课本
[1] 	Bruce Eckel, Thinking in Java, 4 ed., Pearson, 2006.  
[2] 	Bert Bates and Kathy Sierra, Head First Java, 3 ed., O'Reilly Media, 2022.  
[3] 	Oracle, "Learn Java," 26 3 2024. [Online]. Available: https://dev.java/learn/. [Accessed 31 3 2024].  

#### 说明
【★】[3] 是 Oracle 官方的教程，推荐。  
【★】随着 Java 的更新，有部分特性已经被弃用，请注意及时查阅最新文档（https://docs.oracle.com/en/java/ ）。

### Python
#### 课本
[1] 	Eric Matthes, Python Crash Course, 3 ed., No Starch Press, 2023.  
[2] 	David Beazley and Brian K. Jones, Python Cookbook, 3 ed., O'Reilly, 2013.  
[3] 	嵩天, 礼欣 and 黄天羽, Python语言程序设计基础, 2 ed., 北京: 高等教育出版社, 2017.  
[4] 	Python Software Foundation, "The Python Tutorial," 4 8 2023. [Online]. Available: https://docs.python.org/3/tutorial/index.html. [Accessed 4 8 2023]. 

#### 说明
【★】Python 具备非常丰富的官方文档。**建议先使用官方文档[4]进行学习**。  
Python 2 已经被弃用。除非需要编写兼容已有的、不易重构的老代码的 Python 脚本，否则请选用 Python 3。

### C#
#### 课本
[1] 	Andrew Stellman and Jill Alison Hart, Head First C#, 4 ed., O'Reilly Media, 2021.  
[2] 	Cal Schrotenboer and Daniel Solis, Illustrated C# 7, 5 ed., Apress, 2018.  
[3] 	唐大仕, C#程序设计教程, 2 ed., 北京: 清华大学出版社 北京交通大学出版社, 2018.  
[4] 	Microsoft, "C# Documentation," 4 5 2023. [Online]. Available: https://learn.microsoft.com/en-us/dotnet/csharp/. [Accessed 4 8 2023]. 

#### 说明
【★】Microsoft 为 C# 准备了非常丰富的官方文档[4]，**建议首先通过官方文档进行学习**。[中文版](https://docs.microsoft.com/zh-cn/dotnet/csharp/)  
[3] 的 WinForms 部分仅供参考。除非维护老项目，否则不推荐学习。学习 C# 的 GUI 框架可以从 [WPF](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-8.0) 入手。WinUI 2 所属的 UWP 已经被弃用，因而不要学习 WinUI 2；针对移动平台的 Xamarin 也已停止支持。而 WinUI 3 和 MAUI 较新，Bug 或许还很多，触发这些来自依赖的 bug 可能严重影响开发效率。

### Android 开发
[1] 	Google, "Developer Guides," [Online]. Available: https://developer.android.com/guide. [Accessed 4 8 2023].  
[2] 	郭霖, 第一行代码 Android, 3 ed., 人民邮电出版社, 2020.  

#### 说明
【★】**建议首先通过官方文档[1]进行学习**。

### Kotlin
[1] 	JetBrains, "Kotlin Docs," 25 7 2023. [Online]. Available: https://kotlinlang.org/docs. [Accessed 4 8 2023]. 

#### 说明 
【★】**建议首先通过官方文档[1]进行学习**。注意：**Kotlin 官方文档默认你具备一定的 Java 基础**。  
[JetBrains 推荐的 Kotlin 书籍](https://kotlinlang.org/docs/books.html) 

## 专业选修

### 计算机体系结构 / Computer Architecture
#### 课本
[1] 	David A. Patterson and John L. Hennessy, Computer Architecture: A Quantitative Approach, 6 ed., Morgan Kaufmann, 2020.  
[2] 	William Stallings, Computer Organization and Architecture: Designing for Performance, Pearson, 2018.  

#### 说明
要求较高的院校可能将体系结构列为专业必修课。

### 算法 / Algorithms
#### 课本
[1] 	Thomas H. Cormen, Charles E. Leiserson, Ronlad L. Rivest and Clifford Stein, Introduction to Algorithms, 4 ed., MIT Press, 2022.  
[2] 	屈婉玲, 刘田, 张立昂 and 王捍贫, 算法设计与分析, 3 ed., 北京: 科学出版社, 2020.  
[3] 	屈婉玲, 刘田, 张立昂 and 王捍贫, 算法设计与分析习题解答与学习指导, 3 ed., 北京: 科学出版社, 2020.  
[4] 	Jeff Erickson, Algorithms, 1 ed., 2019.  

#### 说明
电子版：[[4]](http://jeffe.cs.illinois.edu/teaching/algorithms)  
公开课包括但不限于：
- [算法设计与分析（北京大学）](https://www.bilibili.com/video/BV1Ls411W7PB?from=search&seid=9038077306193741654)&emsp;主讲：屈婉玲

### 机器学习 / Machine Learning
#### 课本
[1] 	Christopher M. Bishop, Pattern Recognition and Machine Learning, Springer, 2006.  
[2] 	周志华, 机器学习, 清华大学出版社, 2016.  
[3] 	谢文睿 and 秦州, 机器学习公式详解, 人民邮电出版社, 2021.  
[4] 	李航, 机器学习方法, 清华大学出版社, 2022.  
[5] 	Ian Goodfellow, Yoshua Bengio and Aaron Courville, Deep Learning, MIT Press, 2016.  
[6] 	邱锡鹏, 神经网络与深度学习, 2021.  

#### 说明
电子版：[[1]](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)[[6]](https://nndl.github.io/nndl-book.pdf)

### 自然语言处理 / Natural Language Processing
#### 课本

#### 说明

# 第二章&emsp;我应该参加哪些活动？

本章最后更新于：2024/08/17

## 竞赛

- 以 ACM-ICPC 及相似的比赛（CCPC、“蓝桥杯” 等）为例。在中小学有训练过 OI，或者通过其它方式获得了算法基础的同学，可以试着去继续参加。如果之前完全没有基础，大学才起步，风险就十分大了，强烈不建议作为主要任务。
- 信安那边的 CTF 没了解过，不作建议。
- ASC Student Supercomputer Challenge，也没了解过。

## 学界（科研）还是业界（工程）？

想走学术保研道路的（都打算走这条路了，估计日后大半也是去做科研了），本科尽早进组发文章。但是学术保研的名额可能比较有限，具体情况视学校的不同而不同。想去业界发展的，本科以后便可以直接工作，也可以考虑本科毕业以后读 Master（授课硕士，有的学校称为 Coursework）。Master 和 MPhil（研究硕士）分别对应内地的专业硕士（专硕）和学术硕士（学硕）。MPhil 的申请难度远远高于 Master。

通常，若以后打算做科研，才去读博士。博士毕业的要求很高，课业压力十分大，是具有攻读多年仍然无法毕业的风险的。而且，如果最终目标是去企业工作，用四五年甚至更长时间读完博再出来，是否能拼过其它本科或硕士毕业而已有同样长度的工业界经验的人，是很不好把握的。不过，如果经济条件不足以留学，或家里不愿意出钱帮助留学，就另当别论了。在许多国家和地区，博士的全额奖学金（全奖）相对容易拿到。一般而言，授课型硕士非常难拿奖学金，本科会比授课硕更难拿奖学金。**如果不能拿到全奖（包括只拿到半奖），强烈建议不要读博。**

但按照各高校和科研院所的卷况，除非天赋上特别优异，否则十分不建议走科研这条路。**绝大多数人更适合去搞工程**。按现在的大环境，科研岗位总体已经**严重供过于求**。如果更多人能去工业界，既有利于减小学术界的内卷程度，减少灌水论文与灌水专利等 “成果” 的产生，还有利于促进超前的科研成果尽快落地。可以说是真·双赢了。而且，高校和科研院所几乎是绝对躲不掉加班的：如果只是 996，就偷着乐吧；无数教职员和研究人员都是 997 / 8107 起步，经常需要熬夜甚至通宵，节假日也一样要加班加点。  
科研人员不但总是要加班，收入往往也要显著低于业界同行。这并非是中国内地独有的问题，其它国家和地区也不同程度地出现了这种情况。
- [每周工作超100小时还被减薪？Nature：65%博士后曾遭PUA](https://news.sciencenet.cn/htmlnews/2022/8/485197.shtm)
- 早在 2016 年，就有科技媒体报道：[美国知名计算机院校的教职员大量流向工业界](https://www.leiphone.com/category/ai/oU3kqSVCDxu8SgUB.html)。这些成绩斐然的大佬们跳槽到业界后，收入瞬间暴涨：有的收入直接翻倍还多，一点儿也不夸张。工业界的加班通常少得多，即便某些岗位仍然需要经常加班，被迫的因素占比一般也是大大减少的。

算法岗的收入虽通常明显高于开发岗和测试岗，然而大厂算法岗的卷况已极其惨烈（算法的性质更偏向科研）。  
- 一些媒体报道和网友讨论虽不能排除有夸大的成分，但大方向上不会有错：**供大于求→诸神黄昏→灰飞烟灭→人间地狱→无人生还**，高度概括了一类高薪岗位从蓝海迅速演变为红海的全过程。
  - [2019 校招各互联网大厂的算法岗是否存在供大于求的现象？](https://www.zhihu.com/question/293691926)
  - [算法岗诸神黄昏，算法初级职位内卷，如何选择适合自己的方向?](https://www.zhihu.com/question/343743405)
  - [如何看待2021年秋招算法岗灰飞烟灭？](https://www.zhihu.com/question/406974583)
  - [如何看待 2022 年秋招算法岗人间地狱？](https://www.zhihu.com/question/453325429)
  - [如何看待2023年秋招算法岗不招人了？](https://www.zhihu.com/question/525444221)

## 开源项目

无论你选择做学术还是做工程，都应当尽早开始在开源网站上做项目。积累要趁早。  
做了没被其他人点⭐也没关系，总比没有做要强。万一有，而且还很多，比如 100 甚至 1000 以上，你就赚大发了。  
在面试的时候，你可能会被问到关于自己的项目的一些问题，如果担心答不上来，可以稍微提前准备一下。这部分准备应该不会花较多时间的。简历上写的项目在面试的时候不能正确说出要点和一些细节，可能会被对方判定为水项目，并且不排除会对面试的通过产生负面影响。  

## 实习

学校可能将毕业实习作为必修学分，若找不到实习则无法毕业。  
不论你所在专业的培养方案是否要求必须有实习经历才准予毕业，你都**必须**尽力去找实习。一段份量足够的实习经历会为你的简历 / 履历（履历一般是升学用的，比简历要详细）加分不少，一定要引起重视。  

有说法是可以大一就去实习，不过按照我的经验与观察，至少在我们这一行，许多单位不会聘用大一本科生进行实习。大二的话，可能有机会。当然，仍然鼓励在大一或大二期间就多尝试去给工作单位投简历。  

最好尽早向学长打听是否有内推的机会。只是，内推通常只能帮你**争取（不是保证）** 到面试或者至少过简历关，一般不会成为你是否获得实习单位的录取的决定性因素。自己的能力才是硬道理。当然，无论内地还是境外，都有一些公司把内推看得很重，受到内推的应聘人员具有高得多的录用机会。  
- 由于经济下行，情况已经发生了改变。越来越多的岗位都需要通过内推才有机会进入。

简历一定要海投。去 N 多个网站、N 多个 APP 上投，一次总共投几百个岗位也无所谓（照现在的行情，随便破千也是正常的）。有的公司可能会说明只能投一个岗位。如果没有，就大胆投递同一个公司的多个岗位。
- 北美🇺🇸🇨🇦作为招聘冻结的重灾区，投递超过 1000 份简历只获得个位数的面试机会已经是家常便饭。完全没有面试也是意料之中。

## 大创、开放性实验等

假如想做大创（大学生创新创业训练计划）项目，建议先从学长处了解，自己学校报销经费的流程是否繁琐。如果过于繁琐，则大创项目不一定要作为首选。  
需要留意，学校可能会要求每一个本科生修得一定数量的 “创新学分”，否则不准予毕业。这类创新学分往往需要通过参加大创项目和开放性实验获得。如果有这样的要求，那么就要尽早完成这些项目，把该拿的学分拿好。  

## 志愿者

参加志愿活动，积累一定数量的志愿时。志愿活动可能是一些高校（特别是境外高校）招录时的硬性指标。不一定非得干出一些什么大事儿，但最好不要没有。  
当然，考虑到当下的卷情，实在抽不出时间的话，放弃这方面也不是不可以。  

## 我应当参加学校的社团、协会等组织吗？

其实，按理来说，应当是被鼓励的。  
然而，卷况不饶人。至少在我们这一行，（与计算机及其相关学科无关的）社团这些纯课外的经历，几乎不可能对以后的升学和工作有加分。So, it's up to you.  

# 第三章&emsp;哪些事情应当尽早完成、尽早留意或尽早开始？

本章最后更新于：2024/08/17

这一章列出一些不但需要做，而且应尽早开始做的事。相比之下，譬如，大一没什么编程经验，没法找到实习，或者没法做大创，没什么大问题，可以推到大二、大三，乃至大四。然而，有些事情，如果不尽早开始，当发现因为没有做这些事情而蒙受损失时，就已经非常难补救了。

## 日后的发展方向

是本科毕业完就直接工作，还是说要继续深造；是考研保研，抑或是申请境外的学校，**都应当尽快抓定主意，提前做好准备**。

如你想转出计算机类专业，**强烈建议不要选择文科、商科类专业！** 对应行业的需求比理工类少得多，求职只会比计算机类更卷。

注意：当前，**留学的性价比已经非常低**。
- 如你已有计算机相关的工作经验，强烈建议你不要留学，而是直接投递相关岗位应聘（无论境内还是境外工作）。
- 如你未有计算机相关的工作经验，依然要慎重考虑留学。初级岗位的稀缺令大量留学生无法找到相关工作已成定局，最终得不偿失。
- 境外高校的计算机类专业一样有垃圾课。
  - 点名某些学校某些专业的几门必修课，一行代码都不写，光写又臭又长的报告。
- 要上的课不是说过就能过的。
  - 比如我们有一门数学课相当于选择性必修：从一类课程中至少选择一门并通过。由于开课学段、自身基础等问题，很多同学能选的都不多。结果这门课这两年的考试（想什么呢，闭卷）难度一直在增大，今年甚至出现了补考难度比正考还大得多的情况。虽然任课老师似乎会捞人（设法为不及格的学生提分使他们及格），但这种事情谁能保证呢……而且太搞人心态，多少也会影响其它任务的。
- 学生签证拒签风险
  - 2022 年年中，据同学反馈，学签一般是不会被拒的，美签🇺🇸除外。
  - 然而，近年来，加签🇨🇦的拒签率节节攀升。身边有同学申请加拿大学签，到了安调阶段就屁都不放一个了，拖到录取都过期了。目前安调已经超过了一年，还是一声不吭。
  - [中科大惹你们什么了](https://www.xiaohongshu.com/explore/664dd16a0000000015012329)

如你有留学和 / 或境外工作的意愿：
- 在愿意吃苦的条件下，护理和其它蓝领类职业完全有可能是更合适的选择。
- 如果你的最高学历低于本科，**强烈建议你不要进入本行业**，因为无论是直接找工作还是申请境外学校，**你的简历 / 履历几乎 100% 因为学历就会被机器自动拒绝**。同样地，建议优先考虑护理及其它蓝领类职业。
- 移居境外的各种成本**绝对不低**，通常会导致你**阶级掉落**。外面不是天堂，请各位一定不要盲目。对于任何将影响自己的整个人生的决定，做之前必定要反复考量。
  - 很多人对未来道路的设想呀，都 too simple，啊，sometimes naive！各种变数你压根儿就不可能预想得到。但有一点可以确定：资本主义的獠牙已经露出来了，主打的就是连韭菜根都刨掉，骗完大几十万乃至上百万学费和生活费以后就立马给人一脚踹走。
    - [🇬🇧🆕工签38700😳那我走？](https://www.xiaohongshu.com/explore/656e08270000000039032d12)
    - [救命啊！刚交完学费485工签政策就变了！](https://www.xiaohongshu.com/explore/6576a646000000000901a3d7)
    - [加拿大我劝你别来，BCPNC一刀切，还我血汗钱](https://www.xiaohongshu.com/explore/65fdfe54000000000d00c944)

为了能够更好地避雷，你应当及早开始了解不同地区、不同院校、不同专业等的雷点。**假如打听得太迟，避雷失败的风险便会大大增加。许多坑点并不是那么容易通过搜索能够直接找到的：因为你根本想不到需要搜索这些方面。**
- 以荷兰🇳🇱为例。荷兰法律规定：欧经区和瑞士🇪🇺🇮🇸🇱🇮🇳🇴🇨🇭以外的学生若需要在荷兰进行实习，需由本人、实习单位和学校共同签署三方协议（tri-party agreement）。**但实际情况多为：学校会施加各种各样的额外限制，使得非欧洲经济区且非瑞士学生在荷兰实习几乎不可能。** 如果不签三方直接实习，则会被[取消居留并遣返](https://ebcareercentre.uva.nl/students/internships/non-eu-eea-students/non-eu-eea-students.html#Are-you-a-nonEUEEA-student)。因为非法就业被拒签，后果通常比相当多的拒签理由严重得多。常见的惩罚包括数年内不得入境乃至终身不得入境，等等。另外，许多发达国家的签证信息存在互通。被一个发达国家拒签，向其它发达国家申请签证往往也会受到负面影响。
  - [🇳🇱学校不签三方🥰offer cancel😍](https://www.xiaohongshu.com/explore/6656ff49000000001501373a)
  - 虽然目前看来三方查得不严，但依然要强调：
    - 不要跳过三方签署。即使有的公司出于充分利用廉价劳动力（荷兰并没有规定实习单位必须为实习生支付经济报酬）等考虑会配合这么做，但败露以后公司的抗风险能力比个人高出无数倍。
    - 不要为了实习而 PS 一张已签名的三方协议。首先，你真对自己的 PS 功底那么有信心？其次，还有**隐写**等手段可以用于判定是否造假。
    - 你怎么知道一定不会不声不响就突然查得特别严了呢？
- 近年来，**多个发达国家都出现了租房🏠紧张的现象（欧陆为重灾区，尤其是爱🇮🇪、荷🇳🇱、德🇩🇪等地；地广人稀的加🇨🇦、澳🇦🇺甚至也不能幸免，即便情况好很多），且在不断加剧**。做出留学 / 境外工作的决定必须更加谨慎。
  - 还是以荷兰为例。毕业但尚未找到工作的群体，租房最为困难；其次是留学生。这是因为绝大多数房子都要求收入证明方可租赁；若没有收入，则必须为在读学生。毕业以后，通常会要求租户在一定时间内搬走，除非找到工作并达到收入要求。
  - 虽然不清楚其它国家和地区是否有相关的惯例或规定，但看起来很多发达国家与地区的租房市场没有偏差太远：不是在读学生且没有工作的，是最难找房子的群体之一；（国际）学生的租房难度亦不相上下。常见的约束包括需要收入不能过低（某些情况下还不能过高）或担保人等。

## 英语

越早开始抓越好。  
英语的常用语法在高中应当已经学完了，后续的主要工作应当是不断积累词汇量和阅读量。从大一甚至大一入学之前就可以开始每天背单词了：手机上下个 APP，随时随地背起来。免费的就行（一些仅收取一次性的便宜费用的 APP 亦可考虑）。  
考试：
- 尽快考完四六级。最好在大一搞定，不要晚于大二。
- 有留学意向的同学也要尽可能早地开始准备 IELTS 或 TOEFL 等考试。
  - 身边有若干同学反映 IELTS 比 TOEFL 简单。不过也有同学和我说感觉这俩难度差不多。
  - 部分院校可能仅接受 IELTS 成绩而不接受 TOEFL 成绩（也有可能反过来）。在申请院校时需要留意。
  - 部分学校还接受 TOEIC、PTE、Duolingo 等。Duolingo 的考试费用低很多。
  - **线上考试（在家考）得到的成绩，不一定为目标院校所接受。** 随着疫情防控政策的不断放松，对线上进行的标化考试成绩的认可或将逐步走入历史。
  - 注意成绩的有效期，例如 IELTS 成绩有效期仅两年。
- 部分热门理工类专业也会要求 GRE 成绩。
  - GRE 对词汇量的要求明显高于 IELTS 和 TOEFL。以及，在常见的标化考试中，GRE 对词汇的要求是最高的，高于 GMAT 乃至法学院要求的 LSAT。
  - GMAT 一般是商科类要求考的，不过越来越多商科专业乃至法学专业也接受 GRE 成绩了。
- 按本人经验，IELTS 完全可以自学。主要刷官方的 Cambridge IELTS 练习题即可。
  - 本人经历：在大学以来有断断续续背过一些单词，四级和六级均裸考（不做任何练习题）一次通过的条件下，8 月初开始准备 IELTS，每天坚持背单词，到同年 10 月国庆放假期间考试。这期间远远没有达到将全部可用时间都用来准备的程度（总是摸鱼🐟，也还有课内任务），总共只做了 7 套完整的题（口语部分单独多刷了一些题目），总分正好 7.0，单项最低 6.0。

除了升学要求，如果英语水平不过关，在计算机行业也会很吃亏。从学生阶段开始，就应当让自己多接触英语环境。具体方法主要有：
- 将（PC 或手机、平板的）操作系统和常用软件的语言改为英文。
- 多看英文网站、英文资料。
  - 例如，使用 Google 搜索，并且将搜索的默认语言改为英文。
  - 做项目的过程中，多看英文文档和其它英文资料。
  - 如果阅读计算机的英文资料比较枯燥，也可以阅读其它感兴趣的话题的英文资料。这也会成为你的积累。

## GPA

对于非计算机类专业或大类的同学，有转到计算机类专业的意愿的，就需要保持自己的 GPA 在前列，因为很多学校对转专业的要求就包括 GPA 排名靠前。
- 经常看到有人说国外大学转专业没什么限制。这么想就错了！比如我有同学在美国留学，想转到金融类专业，结果商学院要求很多（包括 GPA），很麻烦。

如果拿不定主意是否要去留学，就**应当按照确定需要留学的方向去走**。对 GPA 有高要求的院校不计其数。万一之后决定去留学，但又发现 GPA 可能不够，就晚了。虽然有可能可以通过重修来刷新成绩，但不是所有学校都允许这样做。而且重修是要额外收费的。

极少数工作单位在招聘时会要求应聘者提供成绩单。如你笃定直接工作而不打算深造，放弃高 GPA 转而全力为找工做准备是一个好选择。
- 也可能有例外。比如我们专业的**痕迹量**毕业实习机会，要求在一些工作量巨大的硬核课程中取得高分才给面试。

## 选课时精打细算、留意坑点

每学期选课时，可以找选过这门课的学长去打听，请问他们要选的课是否有坑。举例：
- 课堂讲授大量的过时内容。
- 布置许多意义不大或完全没有意义的作业。
- 给分过低的课也要慎重考虑——这也是没办法的，谁让那么多学校（包括在境内绩点保研）都死认 GPA 呢？  
选修课也并不是想选什么就选什么的。**选课要精打细算，核对清楚培养方案的要求，避免因为满足不同要求的学分不足导致延毕。**

## 养成自学的习惯

- 首先就是因为大多数高校的计算机类专业的教学内容都与前沿严重脱节。在享受不到顶校资源的条件下，当然就唯有靠自学补上来咯。更别说大家第一时间能想到的那些计算机强校，也总有同学反映存在这样的问题。还有一种情况就是：很多老师做科研很牛，但要让他们把课讲好，那就有些为难他们了。即便是海外那些享誉全球的计算机顶校，也会有这样的老师的。
- 以许多同学的能力，至少在本科阶段，如果积极自学，那么学习的速率会远远快于自己和其他人按照教学进度一点一点去学的速率。
- 在这里要特别强调一点，就是现在非常多的学校的计算机类专业，都会使用一个学期的时间，专门去开一门课讲某一门编程语言的基础知识。这样的速率是严重低于社会需要的。那些要求高的院校，往往都没有专门的课程去讲这些基础的东西，而只会在学期初给很短（例如，1 ~ 2 周左右）的时间，让学生迅速将语言的上手，掌握其基本用法。需要用到这些语言的课程在此之后再讲的，就是专业知识（比如算法、机器学习等）了。
  - 当然，老师的讲课速率并不是什么时候都不适合自己的。例如，有的同学从偏远地带考到大学来。在进入计算机类专业之前，几乎没有接触过计算机。这时候，如果老师讲得比较慢，那么他们更容易接受。

## 课外积累

如果只是按部就班完成课堂布置的内容，那么在找工作（也包括升学）的时候，给出一份合格的简历就**根本不可能**。
- 可以通过自己做开源项目，或参加大创或开放性实验，来为简历增加内容。如若有条件发表论文或贡献知名开源项目，当然更好。
- 留学的同学注意：现在**卷况恶化很快**，许多顶校的计算机类专业可能会有硬性的科研要求。不过，应该可用较高含金量的开源项目代替。
- 除此之外：多掌握几门编程语言（以及 HTML 之类的标记语言），并多做一些相关的项目，对工作更有利。
  - 注意：虽然你可以只选择一门语言作为主攻，但你仍然需要**尽快**掌握更多的语言，以为自己留下更多的退路。经常能看到网上有很多提问，诸如：是否要转 C++ / Java / C# / Go 之类的。你的目标应该是：**既要，又要，还要**。万万不可把自己局限在单一一门语言上。**如你发现自己学习多门编程语言有困难，请尽早转行。**
  - 仅仅掌握若干门编程语言依然是不足的，还需要该语言的主要应用领域的配套技能。例如：以 C++ 为重的岗位，往往还需要操作系统、数据库内核、图像处理 / 图形学、编译器等领域的经验；侧重 Java 的，同样需要 Web 开发或大数据等等的经历；以 Python 为主的，亦需要做机器学习、数据分析之类的的项目或实习 / 工作。

## 学车

- 同样是要尽快，最好在大一入学之前就搞定。
- 就算确定自己日后基本不开车，也尽快把驾驶证拿了。万一改变了主意，抑或遇到一些特殊 / 紧急情况（公交🚌🚋🚇🚄因系统故障、自然灾害、交通事故、罢工等突发事件停运，突然遇到危及生命的情况等），就不好办了。
- 在境内，视具体城市的不同，诸如费用进一步攀升、强制要求打卡记学时（学时不够不给考试）之类的蛋疼情形，总体应该是越来越多的。
- 如果在美国🇺🇸、加拿大🇨🇦、澳洲🇦🇺、新西兰🇳🇿学习、工作与生活，那么在前往稍远的地点时，你通常都必须自己开车去。
- 如果你位于公共交通总体较发达的国家 / 地区，也不排除在相对边远的地带出现没有车就相当不便的情形。
- 考虑到高额税费、保养成本、交通拥堵、停车困难等用车🚗问题在主要国家的大城市较为普遍且难以解决，摩托车🏍️是很不错的选择。

# 附录一&emsp;Q&A

# 附录二&emsp;推荐读物

本章最后更新于：2024/01/02

CS自救指北&emsp;迟先生（https://github.com/skyzh ）

https://survivesjtu.gitbook.io/survivesjtumanual/fu-lu/ben-ke-sheng-zhuan-ye-jie-shao-todo/cs-zi-jiu-zhi-bei

本《自救指南》受此《自救指北》的启发。

退学&emsp;himself65

https://www.himself65.com/quit-qhnu/

CS 自学指南

https://csdiy.wiki/

# 后记&emsp;在内卷的天空下

本部分更新于：2023/08/04

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
