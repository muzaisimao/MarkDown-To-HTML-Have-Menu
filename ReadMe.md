[TOC]



# MarkDown To HTML 

## 一.插件介绍

> **插件名称:menu.js**

> **版本信息:menu 1.0(永远也不会更新了!!!)**

> **开发人员:木仔四毛**

> **联系方式:QQ 3350077822  微信:3350077822**

> **GitHub求关注,帐号:muzaisimao**

## 二.功能介绍

* 字体

   * 1.标题h1-h6(彩色标题)

   * 2.link连接(a标签变为青色)

   * 3.字体加粗(微调)

* 阅读背景

    * **1.关灯阅读**

    * **2.金亮绿**

    * **3.Girl粉** 

* 目录

    * 1.根据标题生成一个侧边目录

    * 2.鼠标移入高亮显示

    * 3.快速跳转到你想去的地方

    * 4.目录内容过多会自动换行和添加滚动条

* emoji表情

    * 1.在每个标题的前后添加emoji表情

    * 2.不同的标题对应不同的emoji(共有6个)

* 代码框

    * 改为不刺眼的背景(海军蓝)

    ---

### 字体

#### **标题h1-h6(彩色标题)**

---

###### 六级标题

##### 五级标题

#### 四级标题

### 三级标题

## 二级标题

# 一级标题

#### **link连接(a标签变为青色)**

[这是个毒网址](www.baidu.com)

### 代码框

#### js代码

```javascript

function $(sel) {
    return document.querySelector(sel);
}

function $$(sel) {
    return document.querySelectorAll(sel);
}

var $ = function (sel) { return document.querySelector(sel); }

var $$ = function (sel) { return document.querySelectorAll(sel); }

```

#### html代码

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
    </style>
</head>

<body>

</body>

</html>
```

---

## 三.使用方法

* 方法1步骤

    * 1.需要typora支持 [下载Typora](https://www.typora.io/)
    * 2.讲你写好的markdown用Typora打开
    * 3.在markdown的最顶端输入[toc]+回车(生成目录)
    * 4.依次点开 file-->Export-->HTML(保存至menu文件夹)
    * 5.用记事本打开导出的HTML,再文件的最后引入menu.js
* 方法2步骤
    * 1.双击addStyle.bat自动给当前目录下所有的.html添加目录
    * 2.想删除样式 就双击 clearStyle.bat一键清除所有目录样式


