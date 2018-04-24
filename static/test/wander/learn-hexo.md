---
title: 学习HEXO的历程
date: 2018-03-27 20:19:54
tags: 学习HEXO
category: 发现新大陆
---
- [前言:](#%E5%89%8D%E8%A8%80)
- [简介](#%E7%AE%80%E4%BB%8B)
- [开始搭建](#%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA)
- [命令](#%E5%91%BD%E4%BB%A4)
- [API测试](#api%E6%B5%8B%E8%AF%95)
---

# 前言:  
逛github相关的帖子时，发现了hexo。正好想要做一个个人的博客，用来记录自己的各类感悟，所以花一些时间学习学习，以后博客可以放github,省得去注册csdn、掘金这些博客。
也算是一个私人日志，希望能记录下自己关于技术、生活、社会等相关的信息。
本文记录使用hexo遇到的一些坑，算是一个总结。持续更新。
# 简介  
Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
# 开始搭建
从零开始搭建一个个人博客，内容比较多，推荐以下几个文章(官网是必看的)。
* 基本操作：参见官方文档[官方文档](https://hexo.io/zh-cn/docs/)
* 配套`github`建立个人博客网上例子很多，推荐两个：
    * [使用Hexo+Github一步步搭建属于自己的博客（基础）](https://www.cnblogs.com/fengxiongZz/p/7707219.html)    
    * [hexo+github搭建个人博客(超详细教程)](https://blog.csdn.net/ainuser/article/details/77609180)  

# 命令
* `hexo g(hexo generate)`: 渲染source下的文件，生成到public下
* `hexo s(hexo server)`: 启动hexo服务器 启动完毕后可本地访问个人博客
* `hexo l(hexo list)`: 列出当前博客站点的一些信息(page\post\route\tag\category)
    * 示例   
        ```
        > hexo l post
        >
        Date        Title                       Path                                  Category    Tags
        2018-03-06  Base 7                      _posts/Base_7.md                      LeetCode    LeetCode Problem - Base 7
        2018-03-06  Escape The Ghosts           _posts/Escape_The_Ghosts.md           LeetCode    LeetCode Problem - Escape The Ghosts
        2018-03-06  Partition Equal Subset Sum  _posts/Partition_Equal_Subset_Sum.md  LeetCode    LeetCode Problem - Partition Equal Subset Sum
        2018-03-27  学习HEXO的历程              _posts/learn-hexo.md                  发现新大陆  学习HEXO
        2018-04-03  js面向对象入门              _posts/js/js-oop.md                   js base     js
        2018-04-05  ppt-demo                    _posts/ppt/ppt-demo.md                ppt         reveal-demo

        ```
# 文章
* `hexo new <title>`新建title.md文件
* [MARKDOWN语法](http://wowubuntu.com/markdown/index.html)  
* TIP:
    * .md文件的开始采用如下形式描述即可，其中不能带`:`,测试过在tags中带了`:`，编译未通过:  
```
 title: Partition Equal Subset Sum
 date: 2018-03-06 18:00:00
 tags: LeetCode Problem - Partition Equal Subset Sum
 category: LeetCode
 ---
 
 ```
# API测试
* 添加描述:  
`title`: 必填。你文章的名称，尽量简洁高效。  
`path`: 文章路径。  
`category`: 分类策略。其实就是你分类的文件目录。  
`tags`: 额外标签，可以取得小一点，实用就行。  

# hack  
## 静态资源  
要知道hexo的原理是把你写的markdown文件按一定的规则渲染成html+css+js的，最终生成的网站，和我们手写效果是一样的，只不过是让你能够用写文档的方式写一个网站罢了。所以要想引入图片、css还是很容易的。  
*  step1: 在source目录下新建文件夹，用于放置您的静态资源，如/source/__images__，放置一张图片(handsome.png)进去    
*  step2: 在您的md文件中采用相对路径引用您存放的文件`![Alt text](/images/handsome.png)`  
![图片加载失败](/images/boxing.jpg)  
## 页面资源  
上面的例子阐释了如何加载一张图片，但是图片是不可能满足我们的，这辈子都不能满足。比如我们写了一个很酷炫的页面，要怎么去加载它呢？这时候如果把一堆静态资源丢到source下，很可能会报错。博主试过如下目录结构出错。  
```
|-source
  |-ppt
    |-css
      |-print
        |-paper.css
        |-pdf.css
      |-theme
        |...
      |-js
        |reveal.js
      index.html
```
对你没看错，想要在某个md文件内引用我用reveal.js制作的ppt。但是在`hexo g`的时候会报错。这个错误是由js文件产生的，老是说js文件结尾有错。后来上网学了一招。  
* __将ppt目录拷贝至theme/next/source/下__。因为theme的内容在`hexo g`的时候是直接拷贝至public下的，绕过了自带的渲染。这时候在你的md文件内相对链[ppt-demo.html](/ppt/index.html)就可以了。  
# 主题  
在`_config.yml`内设置`theme: next`
* [next](https://github.com/iissnan/hexo-theme-next)  
  * 设置展开阅读:auto_excerpt.enable = true  
  * 设置主题: scheme（有四种可选，可以多设置几个试试）  
  * 设置tags\categories: hexo new page "tags"，然后在`index.md`里面设置`type: "tags"`  

# 样式
hexo是一个静态博客框架，里面的样式自然是高度可配置的。以博主使用的next主题为例：  
```
theme
  |-next
	  |-.github
	  |-languages : 语言包
	  |-layout    : 布局包
	  |-scripts   : 脚本包.swig swig前端模板引擎
  	  |-source    : 源码包
	  |-test      : 测试包
```  
这其中`layout`包内的`_custom`就是用于用户自定义的脚本。其余目录大家可以自由阅读，没有十足把握不要轻易修改，不然搞坏了要恢复回去就不容易了。这讲一下背景图片。  
  * 首先在页面内定位到body元素。他的class为`class="pace-done"`。然后webstorm全局搜索发现这个class是在pace.min.js内写的。  
  * 修改`pace-done`的内容肯定是不允许的，我们继续查看`themes/next/layout/_layout.swig`(这个文件是总的布局文件，最后生成的代码可以在`/public/index.html`内看到)。在`_layout.swig`内搜索body。
  * 忽略swig模板语法。我们只需要关心`body`元素的样式即可，在body内加入`class="wander-background-blue">`。是的，只是在这里加了一个class。因为上一段分析的时候pace-done是在js脚本内添加的，所以这里在元素上直接写class，两者不会存在冲突。 
  * 接着定义您的`.wander-background-blue`即可  
```text
.wander-background-blue {
    background :#1f47bb;
    background-image: -webkit-linear-gradient(135deg, #13498b, #13194b);
    background-image: -moz-linear-gradient(45deg, #13498b, #13194b);
    background-image: -ms-linear-gradient(45deg, #13498b 0, #13194b 100%);
    background-image: -o-linear-gradient(45deg, #13498b, #13194b);
    background-image: linear-gradient(135deg, #13498b, #13194b);
  }
```  
这里需要说明一下:`layout`内是脚本内容，`source`才是源码。所以，这一段脚本应该放在`themes/next/source/css`下，框架开发者已经给我们预留了一个用户自定义文件，`themes/next/source/css/_custom/_custom.styl`。脚本放里面即可。  

>上面讲的是一种定位和修改样式的思路，其余样式大家可以自行开发，充分定制自己的博客。  

实际上大部分样式都可以在`themes/next/_config.yml`内定制。有兴趣的可以查看该文档，英文描述也比较简单易懂，另外，博主的源码也欢迎查看。
