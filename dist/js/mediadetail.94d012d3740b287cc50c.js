!function(n){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],d=0,u=[];d<l.length;d++)i=l[d],r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);for(f&&f(t);u.length;)u.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],o=!0,l=1;l<e.length;l++){var s=e[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),n=i(i.s=e[0]))}return n}var o={},r={6:0},a=[];function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)i.d(e,o,function(t){return n[t]}.bind(null,o));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=s;a.push([11,0]),e()}({1:function(n,t,e){"use strict";(function(n){e(16),e(4),n(function(){n("#carouselMenu").carousel({interval:5e3,wrap:!0}),n(".footAbouts").click(function(){location.href="./applycooperation.html"}),n(".login").click(function(){window.open("//www.ifepay.com/admin")}),n(".footAbout").click(function(){location.href="./aboutus.html"}),n(".navItem").each(function(t,e){n(this).on("click",function(){n(".navItem").removeClass("selected").eq(t).addClass("selected")})})})}).call(this,e(0))},11:function(n,t,e){"use strict";(function(n){e(1),e(35);var t=r(e(2)),o=r(e(3));function r(n){return n&&n.__esModule?n:{default:n}}n(function(){n("#headerHtml").html(t.default),n("#footHtml").html(o.default),n(".navItem").removeClass("selected"),n(".n5").addClass("selected");var e="//www.ifepay.com/website/front/new_one/"+window.location.search;n.ajax({url:e,type:"GET",dataType:"jsonp",jsonp:"theFunction",jsonpCallback:"showData",success:function(t){var e="";e+="发布人："+t.author+" &nbsp; &nbsp; &nbsp;发布时间："+t.create_at+" &nbsp; &nbsp; &nbsp;来源："+t.urls,n("#mediaNvaList").html(e),n(".mediaNvaContentTitle").html(t.topic),n(".mediaNvaContentDetails").html(t.content)},error:function(n,t,e){}}),n(".mediaNvaRight").click(function(){location.href="./mediashow.html"})})}).call(this,e(0))},16:function(n,t){},2:function(n,t){n.exports='<div class="hearder">\r\n    <div class="container">\r\n        <img class="logoTop" src="./assets/img/logss.png" alt="信条logo">\r\n        <div class="nav">\r\n            <ul class="navRight">\r\n                <li class="navItem  selected n1"><a href="./index.html">首页</a> </li>\r\n                <li class="navItem n2"><a href="./product.html">产品中心</a></li>\r\n                <li class="navItem n3"><a href="./business.html">商务合作</a></li>\r\n                <li class="navItem n4"><a href="./aboutus.html">关于我们</a></li>\r\n                <li class="navItem n5"><a href="./mediashow.html">媒体资料</a></li>\r\n                <li class="navItem n6"><a href="./applycooperation.html">申请加盟</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>'},3:function(n,t){n.exports='<footer class="footBox">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-xs-4 col-sm-4">\r\n                <img class="footLogo" src="./assets/img/logofoot.png" alt="">\r\n                <div class="footTel">服务热线：028-86155671</div>\r\n                <div class="footTel">商务合作：028-86155671</div>\r\n                <div class="footTel">邮箱地址：ifepay@163.com</div>\r\n                <div class="footTel">公司地址：成都市天府大道交子金融科技中心</div>\r\n            </div>\r\n            <div class="col-xs-4 col-sm-4 ">\r\n                <div class="footWen_lift">\r\n                    <a href="javascript:;">\r\n                        <div class="footWen">开发文档</div>\r\n                    </a>\r\n                    <a href="javascript:;">\r\n                        <div class="footTel">技术文档</div>\r\n                    </a>\r\n                </div>\r\n                <div class="footWen_right">\r\n                    <a href="./applycooperation.html">\r\n                        <div class="footAbout">关于我们</div>\r\n                    </a>\r\n                    <a href="./applycooperation.html">\r\n                        <div class="footAbouts ">商务合作</div>\r\n                    </a>\r\n                    <a href="./applycooperation.html">\r\n                        <div class="footAbouts">联系我们</div>\r\n                    </a>\r\n                    <a href="//www.ifepay.com/admin" target="_blank">\r\n                        <div class="login hidden-xs">企业登录</div>\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n            \x3c!-- Optional: clear the XS cols if their content doesn\'t match in height --\x3e\r\n           \x3c!--  <div class="clearfix visible-xs-block"></div> --\x3e\r\n            <div class="col-xs-4 col-sm-4 QrcodeS">\r\n                <div class="footWinxinTitle">官方微信</div>\r\n                <img class="qrcodeImg" src="./assets/img/logoFOOT.jpg" alt="">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="footButton">\r\n        Copyright © 2019 成都网易联科技有限公司 All Rights Reserved -蜀ICP备18037181号\r\n    </div>\r\n</footer>'},35:function(n,t){}});