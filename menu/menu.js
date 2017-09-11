// 入口函数
window.onload = function () {
    // 初始化获取元素函数
    function $(sel) {
        return document.querySelector(sel)
    };

    function $$(sel) {
        return document.querySelectorAll(sel)
    };

    // 页面初始化
    $(".md-toc").classList.add("left");
    $("#write").classList.add("left");


    // 创建一个按钮
    var lightBtn = document.createElement("button");
    lightBtn.className = "lightBtn";
    document.body.appendChild(lightBtn);
    lightBtn.innerText = "关灯";
    var menu = $("#write");
    var pres = $$("pre");
    var lightFlag = true;
    var huyanFlag = true;
    var rightFlag = true;
    var btnFlag = true;
    // console.log(pres);

    // 给开关灯按钮注册事件
    lightBtn.onclick = function () {
        if (lightFlag == true) {
            menu.classList.remove("xinrenhuang");
            menu.classList.remove("haitianlan");
            menu.classList.add("light");
            lightBtn.innerText = "开灯";

            preColor(true);
            lightFlag = false;
        } else {
            menu.classList.remove("light");
            lightBtn.innerText = "关灯";
            lightFlag = true;

            preColor(false);

        }

    }


    // 改变目录位置
    var rightBtn = document.createElement("button");
    rightBtn.className = "torightbtn";
    document.body.appendChild(rightBtn);
    rightBtn.innerText = "Right";

    rightBtn.onclick = function () {
        if (rightFlag == true) {
            $(".md-toc").classList.remove("left");
            $("#write").classList.remove("left");
            $(".md-toc").classList.add("right");
            $("#write").classList.add("right");
            rightBtn.innerText = "Left";
            // preColor(true);
            BtnWeiZhi();
            rightFlag = false;
        } else {
            $(".md-toc").classList.remove("right");
            $("#write").classList.remove("right");
            $(".md-toc").classList.add("left");
            $("#write").classList.add("left");
            rightBtn.innerText = "Right";
            rightFlag = true;
            BtnWeiZhi();

            // preColor(false);

        }

    }



    // 改变代码区域颜色函数
    function preColor(bool) {
        if (bool) {
            for (var i = 0; i < pres.length; i++) {
                pres[i].classList.add("changeColor");
            }
        } else {
            for (var i = 0; i < pres.length; i++) {
                pres[i].classList.remove("changeColor");
            }
        }
    }



    // 改变护眼颜色
    var huyanBtn = document.createElement("button");
    huyanBtn.className = "huyanbtn";
    document.body.appendChild(huyanBtn);
    huyanBtn.innerText = "金亮绿";

    huyanBtn.onclick = function () {
        if (huyanFlag == true) {
            menu.classList.remove("xinrenhuang");
            menu.classList.add("haitianlan");
            huyanBtn.innerText = "Girl粉";
            preColor(true);
            huyanFlag = false;
        } else {
            menu.classList.remove("haitianlan");
            menu.classList.add("xinrenhuang");
            huyanBtn.innerText = "金亮绿";
            huyanFlag = true;

            preColor(true);

        }

    }

    // 给标题添加emoji表情

    var arrH = ["h1", "h2", "h3", "h4", "h5", "h6"];


    // emoji表情开关
    var emojiBtn = document.createElement("button");
    emojiBtn.className = "emojibtn";
    document.body.appendChild(emojiBtn);
    emojiBtn.innerText = "emoji";
    var emojiFlag = true;

    emojiBtn.onclick = function () {
        if (emojiFlag) {
            for (var x = 0; x < arrH.length; x++) {
                var HList = $$(arrH[x]);

                for (var i = 0; i < HList.length; i++) {
                    HList[i].classList.add("emoji");

                }

            }
            emojiFlag = false;
        } else {
            for (var x = 0; x < arrH.length; x++) {
                var HList = $$(arrH[x]);

                for (var i = 0; i < HList.length; i++) {
                    HList[i].classList.remove("emoji");

                }

            }
            emojiFlag = true;
        }
    }



    // 减少html样式代码

    var headDom = $("head");
    // var styleDom = $("style");
    // // 移除自带的样式
    // headDom.removeChild(styleDom);

    // 引入style.css
    // var styleLink = document.createElement("link");
    // styleLink.rel = "stylesheet";
    // styleLink.href = "style.css";
    // headDom.appendChild(styleLink);

    // var styleTxt = '<link rel="stylesheet" href="menu.css">';

    // 自动引入menu.css
    var menuLink = document.createElement("link");
    menuLink.rel = "stylesheet";
    menuLink.href = "menu/menu.css";

    headDom.appendChild(menuLink);


    var btns = $$("button");

    // console.log(btns[2]);

    // 改变按钮的位置
    function BtnWeiZhi() {
        if (btnFlag == true) {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove("right");
                btns[i].classList.add("left");
            }
            btnFlag = false;
        } else {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove("left");
                btns[i].classList.add("right");
            }
            btnFlag = true;

        }
    }

    BtnWeiZhi();
}

// 页面初始化函数

// function chuShiHua() {
//     BtnWeiZhi();

// }