(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{446:function(v,a,t){"use strict";t.r(a);var r=t(2),_=Object(r.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("Boxx"),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#jvm"}},[v._v("jvm")]),t("ul",[t("li",[t("a",{attrs:{href:"#类装载器"}},[v._v("类装载器")])]),t("li",[t("a",{attrs:{href:"#execution-engine执行引擎"}},[v._v("Execution Engine执行引擎")])]),t("li",[t("a",{attrs:{href:"#native-interface本地接口"}},[v._v("Native Interface本地接口")])]),t("li",[t("a",{attrs:{href:"#永久代（元空间）"}},[v._v("永久代（元空间）")])]),t("li",[t("a",{attrs:{href:"#栈-stack"}},[v._v("栈 stack")])]),t("li",[t("a",{attrs:{href:"#堆-heap"}},[v._v("堆 heap")])]),t("li",[t("a",{attrs:{href:"#jvm调优"}},[v._v("jvm调优")])])])]),t("li",[t("a",{attrs:{href:"#gc"}},[v._v("GC")]),t("ul",[t("li",[t("a",{attrs:{href:"#minorgc的过程（复制-清空-互换）"}},[v._v("MinorGC的过程（复制->清空->互换）")])]),t("li",[t("a",{attrs:{href:"#gc算法"}},[v._v("GC算法")])])])]),t("li",[t("a",{attrs:{href:"#minor-gc-和-full-gc"}},[v._v("Minor GC 和 Full GC")])]),t("li",[t("a",{attrs:{href:"#栈溢出和堆溢出"}},[v._v("栈溢出和堆溢出")])])])]),t("p"),v._v(" "),t("h2",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" jvm")]),v._v(" "),t("ul",[t("li",[v._v("JVM是运行在操作系统之上的，它与硬件没有直接的交互")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/jvm001.png",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"类装载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类装载器"}},[v._v("#")]),v._v(" 类装载器")]),v._v(" "),t("ol",[t("li",[v._v("启动类加载器（Bootstrap）C++编写：Java程序入口，加载Java基础包")]),v._v(" "),t("li",[v._v("扩展类加载器（Extension）Java编写：加载 javax 包")]),v._v(" "),t("li",[v._v("应用类加载器（AppClassLoader）Java编写：加载我们自己写的类")]),v._v(" "),t("li",[v._v("用户自定义加载器：对自带的三种加载器不满足的话，继承ClassLoader，自定义一个我们自己需求的类加载器")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/jvm002.png",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"classloader的双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classloader的双亲委派机制"}},[v._v("#")]),v._v(" ClassLoader的双亲委派机制")]),v._v(" "),t("ul",[t("li",[v._v("比如我们自己也写了一个名为Java.Lang.String的类，但启动会报错，因为Java类加载是从顶部的启动类加载器：Bootstrap开始加载的")])]),v._v(" "),t("blockquote",[t("p",[v._v("当一个类收到了类加载请求，它首先不会尝试自己去加载这个类，而是把这个请求委派给父类去完成。")]),v._v(" "),t("p",[v._v("每一个层次的类加载器都是如此，因此所有的加载请求都应该传送到BootStrap中，只有当父类加载器反馈无法完成这个请求的时候（在它的加载路径下没有找到所需的Class文件），子类加载器才会尝试自己去加载。")])]),v._v(" "),t("ul",[t("li",[v._v("正因为这样，所以Java是沙箱安全的：防止我们自己写的代码污染Java源代码")])]),v._v(" "),t("h3",{attrs:{id:"execution-engine执行引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execution-engine执行引擎"}},[v._v("#")]),v._v(" Execution Engine执行引擎")]),v._v(" "),t("ul",[t("li",[v._v("相当于解释执行器：负责将.Class二进制代码文件翻译为操作系统能读懂的机器码，提交操作系统执行")])]),v._v(" "),t("h3",{attrs:{id:"native-interface本地接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native-interface本地接口"}},[v._v("#")]),v._v(" Native Interface本地接口")]),v._v(" "),t("ul",[t("li",[v._v("本地接口的作用是融合不同的编程语言为 Java 所用，它的初衷是融合 C/C++程序，Java 诞生的时候是 C/C++横行的时候，要想立足，必须调用 C/C++程序，于是就在内存中专门开辟了一块区域处理标记为native的代码，它的具体做法是 Native Method Stack中登记 native方法，在Execution Engine 执行时加载native libraies。")]),v._v(" "),t("li",[v._v("目前该方法使用的越来越少了，除非是与硬件有关的应用，比如通过Java程序驱动打印机或者Java系统管理生产设备，在企业级应用中已经比较少见。因为现在的架构领域间的通信很发达，比如可以使用 Socket通信，也可以使用Web Service等等，不多做介绍。")])]),v._v(" "),t("h3",{attrs:{id:"永久代（元空间）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#永久代（元空间）"}},[v._v("#")]),v._v(" 永久代（元空间）")]),v._v(" "),t("ul",[t("li",[v._v("永久存储区是一个常驻内存区域，用于存放JDK自身所携带的 Class,Interface 的元数据，也就是说它存储的是运行环境必须的类信息，被装载进此区域的数据是不会被垃圾回收器回收掉的，关闭 JVM 才会释放此区域所占用的内存。")])]),v._v(" "),t("h3",{attrs:{id:"栈-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈-stack"}},[v._v("#")]),v._v(" 栈 stack")]),v._v(" "),t("ul",[t("li",[v._v("先进后出，负责Java程序的运行，随着线程的创建而开始，随着线程的消亡而结束")]),v._v(" "),t("li",[v._v("在程序从第一个方法（main）开始运行时，每个方法执行的同时都会创建一个栈帧，用于存储局部变量表、操作数栈、动态链接、方法出口等信息")]),v._v(" "),t("li",[v._v("栈帧中主要保存3 类数据：\n"),t("ol",[t("li",[v._v("本地变量（Local Variables）：输入参数和输出参数以及方法内的变量")]),v._v(" "),t("li",[v._v("栈操作（Operand Stack）：记录出栈、入栈的操作")]),v._v(" "),t("li",[v._v("栈帧数据（Frame Data）：包括类文件、方法等等")])])])]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/jvm003.png",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"堆-heap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆-heap"}},[v._v("#")]),v._v(" 堆 heap")]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/jvm004.png",alt:""}})]),v._v(" "),t("ol",[t("li",[v._v("新生代\n"),t("ul",[t("li",[v._v("伊甸区：占新生代的8/10 （98%的GC回收都在这）")]),v._v(" "),t("li",[v._v("from区： 占新生代的 1/10 （ GC杀完伊甸区没杀干净的 ）")]),v._v(" "),t("li",[v._v("to区： 占新生代的 1/10 （ GC杀伊甸区和from区没杀干净的 ）")])])]),v._v(" "),t("li",[v._v("老年代\n"),t("ul",[t("li",[v._v("GC回收完新生代后残余的（新生代活过15次的）占堆内存的 2/3")]),v._v(" "),t("li",[v._v("GC回收一般只在新生代，只有Full GC的时候才会回收老年代")])])]),v._v(" "),t("li",[v._v("元空间\n"),t("ul",[t("li",[v._v("跟堆内存没有关系")])])])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("堆调优")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("含义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("-Xms")]),v._v(" "),t("td",[v._v("设置初始分配大小，默认为物理内存的 1/64")])]),v._v(" "),t("tr",[t("td",[v._v("-Xmx")]),v._v(" "),t("td",[v._v("最大分配内存，默认为物理内存的 1/4")])]),v._v(" "),t("tr",[t("td",[v._v("-XX:PrintGCDetails")]),v._v(" "),t("td",[v._v("输出详细的GC处理日志")])])])]),v._v(" "),t("p",[v._v("一般jvm调优指的就是堆调优")])])]),v._v(" "),t("h3",{attrs:{id:"jvm调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优"}},[v._v("#")]),v._v(" jvm调优")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如何调优：一般初始内存-Xms和最大内存-Xmx调成一样大小，避免GC和应用程序争抢内存，导致内存值忽高忽低")])]),v._v(" "),t("li",[t("p",[v._v("配置：在IDEA中 -> 菜单栏Run -> Eidt Configurations -> VM optioins 中输入调优参数")])]),v._v(" "),t("li",[t("p",[v._v("OOM: java.lang.OutOfMemory：")])])]),v._v(" "),t("blockquote",[t("p",[v._v("比方说配置的堆内存是4M，但是我们new了一个5M的数组，就会报堆内存溢出异常")])]),v._v(" "),t("blockquote",[t("p",[v._v("如果出现java.lang.OutOfMemoryError: Java heap space异常，说明Java虚拟机的堆内存不够。原因有二：\n（1）Java虚拟机的堆内存设置不够，可以通过参数-Xms、-Xmx来调整。\n（2）代码中创建了大量大对象，并且长时间不能被垃圾收集器收集（存在被引用）。")])]),v._v(" "),t("h2",{attrs:{id:"gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc"}},[v._v("#")]),v._v(" GC")]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/gc001.png",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"minorgc的过程（复制-清空-互换）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minorgc的过程（复制-清空-互换）"}},[v._v("#")]),v._v(" MinorGC的过程（复制->清空->互换）")]),v._v(" "),t("ol",[t("li",[v._v("eden、SurvivorFrom 复制到 SurvivorTo，年龄+1\n首先，当Eden区满的时候会触发第一次GC,把还活着的对象拷贝到SurvivorFrom区，当Eden区再次触发GC的时候会扫描Eden区和From区域,对这两个区域进行垃圾回收，经过这次回收后还存活的对象,则直接复制到To区域（如果有对象的年龄已经达到了老年的标准，则赋值到老年代区），同时把这些对象的年龄+1")]),v._v(" "),t("li",[v._v("清空 eden、SurvivorFrom\n然后，清空Eden和SurvivorFrom中的对象，也即复制之后有交换，谁空谁是to")]),v._v(" "),t("li",[v._v("SurvivorTo和 SurvivorFrom 互换\n最后，SurvivorTo和SurvivorFrom互换，原SurvivorTo成为下一次GC时的SurvivorFrom区。部分对象会在From和To区域中复制来复制去,如此交换15次(由JVM参数MaxTenuringThreshold决定,这个参数默认是15),最终如果还是存活,就存入到老年代")])]),v._v(" "),t("h3",{attrs:{id:"gc算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc算法"}},[v._v("#")]),v._v(" GC算法")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("引用计数法")]),v._v(" "),t("p",[v._v("what：记录的是一个对象被引用的次数（有几个箭头指向我这个地址），如果有人用我就+1，没人用我就-1，到0的时候就被回收")]),v._v(" "),t("p",[v._v("缺点：1）每次对象赋值的时候都要维护计数器，且计数器本身也有一定的消耗。2）较难处理循环引用")]),v._v(" "),t("p",[v._v("谁用了：微软的COM，python")])]),v._v(" "),t("li",[t("p",[v._v("复制算法")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("年轻代")]),v._v("中使用的Minor GC，这种GC算法用的就是复制算法")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/gc002.png",alt:""}})]),v._v(" "),t("p",[v._v("缺点： 消耗空间（每次都从from区复制到to区，也正是from区和to区所占空间为1:1的原因）")]),v._v(" "),t("p",[v._v("​\t\t\t（对象存活率非常低才适合用）")]),v._v(" "),t("p",[v._v("优点：不会产生内存碎片，效率高")])]),v._v(" "),t("li",[t("p",[v._v("标记清除法")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("老年代")]),v._v("一般是由标记清除或者是标记清除与标记整理的混合实现")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/gc003.png",alt:""}})]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/gc004.png",alt:""}})]),v._v(" "),t("p",[v._v("what：算法分为“标记”和“清除”两个阶段，首先标记出所需要回收的对象，在标记完成后统一回收掉所有被标记的对象。")]),v._v(" "),t("p",[v._v("缺点：1）效率问题：标记和清除的效率都不高(遍历)。2）空间问题：标记清除之后会产生大量不连续的内存碎片，空间碎片太多会导致大对象无法分配到足够的连续内存，从而不得不提前触发GC，甚至程序中断。")])]),v._v(" "),t("li",[t("p",[v._v("标记整理法")]),v._v(" "),t("p",[t("img",{attrs:{src:"/znote/img/jvm/gc005.png",alt:""}})]),v._v(" "),t("p",[v._v("在标记清除后，再对存活对象内存和可用内存进行一遍有序整理（相当于解决内存碎片问题），相当于标记清除的升级版，但效率肯定更慢一点。")])]),v._v(" "),t("li",[t("p",[v._v("分代收集算法")]),v._v(" "),t("p",[v._v("次数上频繁收集young区，次数上较少收集old区，基本不动元空间")])])]),v._v(" "),t("h2",{attrs:{id:"minor-gc-和-full-gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minor-gc-和-full-gc"}},[v._v("#")]),v._v(" Minor GC 和 Full GC")]),v._v(" "),t("blockquote",[t("p",[v._v("都发生在堆中")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Minor GC：是新生代GC，指的是发生在新生代的垃圾收集动作。由于Java对象大都是朝生夕死，所以Minor GC的发生非常频繁，一般回收速度也比较快。")])]),v._v(" "),t("li",[t("p",[v._v("Full GC/Major GC：是老年代的GC，出现Major GC一般都伴有Minor GC，Major GC肯定比Minor GC慢很多。")])]),v._v(" "),t("li",[t("p",[v._v("何时发生？")]),v._v(" "),t("p",[v._v("Minor GC：当jvm无法为新对象分配空间的时候就会发生Minor GC，所以new对象的频率越高，越容易触发。")]),v._v(" "),t("p",[v._v("Full GC：① 当老年代空间不足的时候会触发Full GC，Full GC 会同时将老年代和新生代的垃圾进行回收。 ②当发生Minor GC的时候可能触发Full GC，由于老年代要对年轻代进行担保，由于进行一次垃圾回收之前是无法确定有多少对象存活，因此老年代并不知道自己要担保多少空间，因此老年代采用动态估值的方法：也就是上一次回收发送时晋升到老年代的对象容量的平均值作为经验值，这样就会有一个问题，当发生一次Minor GC之后，存活的对象剧增（假设），但此时老年代并没有满，但是此时平均值增加了，就会发生Full GC。")])])]),v._v(" "),t("h2",{attrs:{id:"栈溢出和堆溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈溢出和堆溢出"}},[v._v("#")]),v._v(" 栈溢出和堆溢出")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("栈溢出：栈溢出是指不断的调用方法，不断的压栈，最终超出了栈允许的栈深度，就会发生栈溢出，比如递归操作没有终止，死循环。")])]),v._v(" "),t("li",[t("p",[v._v("栈内存溢出：对于一台服务器而言，每一个用户请求，都会产生一个线程来处理这个请求，每一个线程对应着一个栈，栈会分配内存，此时如果请求过多，这时候内存不够了，就会发生栈内存溢出。")])]),v._v(" "),t("li",[t("p",[v._v("堆溢出：不断的new 一个对象，一直创建新的对象， 或者直接创建的对象太大了超过了堆内存（夸张的说）。")])])])],1)}),[],!1,null,null,null);a.default=_.exports}}]);