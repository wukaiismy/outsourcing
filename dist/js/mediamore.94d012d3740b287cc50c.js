!function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],i[o]&&h.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(p&&p(e);h.length;)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={7:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;s.push([12,0]),n()}({1:function(t,e,n){"use strict";(function(t){n(16),n(4),t(function(){t("#carouselMenu").carousel({interval:5e3,wrap:!0}),t(".footAbouts").click(function(){location.href="./applycooperation.html"}),t(".login").click(function(){window.open("//www.ifepay.com/admin")}),t(".footAbout").click(function(){location.href="./aboutus.html"}),t(".navItem").each(function(e,n){t(this).on("click",function(){t(".navItem").removeClass("selected").eq(e).addClass("selected")})})})}).call(this,n(0))},12:function(t,e,n){"use strict";(function(t){n(1),n(37),n(13);var e=i(n(2)),a=i(n(3));function i(t){return t&&t.__esModule?t:{default:t}}t(function(){t("#headerHtml").html(e.default),t("#footHtml").html(a.default),t(".navItem").removeClass("selected"),t(".n5").addClass("selected");var n=window.location.search.split("=")[1];s(n,1,10)});var s=function(e,n,a){var i="",s="";"new_all"==e?(i="showData4",s="全部新闻"):"new_nndustry"==e?(i="showData2",s="行业新闻"):"new_policy"==e?(i="showData1",s="政策法规"):"new_plat"==e&&(i="showData3",s="平台新闻"),t("#tilePages").html(s);var r="//www.ifepay.com/website/front/"+e+"/?pg="+n+"&size="+a;t.ajax({url:r,type:"GET",dataType:"jsonp",jsonp:"theFunction",jsonpCallback:i,success:function(a){var i,s;i=a.ret,s="",t.each(i,function(t,e){t<10&&(s+='<div class="itemBox">\n        <div class="newDetailBoxTitle">'+e[1]+'</div>\n        <div class="newDetailBoxTime">来源：'+e[5]+"&nbsp; &nbsp;发布时间："+e[3]+'</div>\n        <div class="newDetailGarid"></div>\n        <div class="newDetailContent">'+e[2]+'</div>\n        <div class="newDetailGarid1"></div>\n    </div>')}),t("#newDetailBoxs").html(s),t(".newDetailGarid1:last").addClass("newDetailGarid1Last"),function(e,n){t("#newDetailBoxs  .itemBox").each(function(n,a){t(this).on("click",function(){location.href="./mediadetail.html?id="+e[n][0]})})}(a.ret),o(a,t(".pagination"),e,n)},error:function(t,e,n){}})},o=function(t,e,n,a){var i={currentPage:a,totalPages:t.num_pages,numberOfPages:5,bootstrapMajorVersion:3,useBootstrapTooltip:!1,itemTexts:function(t,e,n){switch(t){case"first":return"首页";case"prev":return"上一页";case"next":return"下一页";case"last":return"尾页";case"page":return e}},onPageClicked:function(t,e,a,i){s(n,i,10)}};e.bootstrapPaginator(i)}}).call(this,n(0))},13:function(t,e,n){"use strict";(function(t){var e,n,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e=t,(n=function(t,e){this.init(t,e)}).prototype={init:function(t,n){this.$element=e(t);var a=n&&n.bootstrapMajorVersion?n.bootstrapMajorVersion:e.fn.bootstrapPaginator.defaults.bootstrapMajorVersion;if(this.$element.attr("id"),2===a&&!this.$element.is("div"))throw"in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option";if(a>2&&!this.$element.is("ul"))throw"in Bootstrap version 3 the pagination root item must be an ul element.";this.currentPage=1,this.lastPage=1,this.setOptions(n),this.initialized=!0},setOptions:function(t){this.options=e.extend({},this.options||e.fn.bootstrapPaginator.defaults,t),this.totalPages=parseInt(this.options.totalPages,10),this.numberOfPages=parseInt(this.options.numberOfPages,10),t&&void 0!==t.currentPage&&this.setCurrentPage(t.currentPage),this.listen(),this.render(),this.initialized||this.lastPage===this.currentPage||this.$element.trigger("page-changed",[this.lastPage,this.currentPage])},listen:function(){this.$element.off("page-clicked"),this.$element.off("page-changed"),"function"==typeof this.options.onPageClicked&&this.$element.bind("page-clicked",this.options.onPageClicked),"function"==typeof this.options.onPageChanged&&this.$element.on("page-changed",this.options.onPageChanged),this.$element.bind("page-clicked",this.onPageClicked)},destroy:function(){this.$element.off("page-clicked"),this.$element.off("page-changed"),this.$element.removeData("bootstrapPaginator"),this.$element.empty()},show:function(t){this.setCurrentPage(t),this.render(),this.lastPage!==this.currentPage&&this.$element.trigger("page-changed",[this.lastPage,this.currentPage])},showNext:function(){var t=this.getPages();t.next&&this.show(t.next)},showPrevious:function(){var t=this.getPages();t.prev&&this.show(t.prev)},showFirst:function(){var t=this.getPages();t.first&&this.show(t.first)},showLast:function(){var t=this.getPages();t.last&&this.show(t.last)},onPageItemClicked:function(t){var e=t.data.type,n=t.data.page;this.$element.trigger("page-clicked",[t,e,n])},onPageClicked:function(t,n,a,i){var s=e(t.currentTarget);switch(a){case"first":s.bootstrapPaginator("showFirst");break;case"prev":s.bootstrapPaginator("showPrevious");break;case"next":s.bootstrapPaginator("showNext");break;case"last":s.bootstrapPaginator("showLast");break;case"page":s.bootstrapPaginator("show",i)}},render:function(){var t=this.getValueFromOption(this.options.containerClass,this.$element),n=this.options.size||"normal",a=this.options.alignment||"left",i=this.getPages(),s=2===this.options.bootstrapMajorVersion?e("<ul></ul>"):this.$element,o=2===this.options.bootstrapMajorVersion?this.getValueFromOption(this.options.listContainerClass,s):null,r=null,l=null,c=null,p=null,u=null,h=0;switch(this.$element.prop("class",""),this.$element.addClass("pagination"),n.toLowerCase()){case"large":case"small":case"mini":this.$element.addClass(e.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][n.toLowerCase()])}if(2===this.options.bootstrapMajorVersion)switch(a.toLowerCase()){case"center":this.$element.addClass("pagination-centered");break;case"right":this.$element.addClass("pagination-right")}for(this.$element.addClass(t),this.$element.empty(),2===this.options.bootstrapMajorVersion&&(this.$element.append(s),s.addClass(o)),this.pageRef=[],i.first&&(r=this.buildPageItem("first",i.first))&&s.append(r),i.prev&&(l=this.buildPageItem("prev",i.prev))&&s.append(l),h=0;h<i.length;h+=1)(u=this.buildPageItem("page",i[h]))&&s.append(u);i.next&&(c=this.buildPageItem("next",i.next))&&s.append(c),i.last&&(p=this.buildPageItem("last",i.last))&&s.append(p)},buildPageItem:function(t,n){var a=e("<li></li>"),i=e("<a></a>"),s="",o="",r=this.options.itemContainerClass(t,n,this.currentPage),l=this.getValueFromOption(this.options.itemContentClass,t,n,this.currentPage),c=null;switch(t){case"first":case"last":case"prev":case"next":case"page":if(!this.getValueFromOption(this.options.shouldShowPage,t,n,this.currentPage))return;s=this.options.itemTexts(t,n,this.currentPage),o=this.options.tooltipTitles(t,n,this.currentPage)}return a.addClass(r).append(i),i.addClass(l).html(s).on("click",null,{type:t,page:n},e.proxy(this.onPageItemClicked,this)),this.options.pageUrl&&i.attr("href",this.getValueFromOption(this.options.pageUrl,t,n,this.currentPage)),this.options.useBootstrapTooltip?(c=e.extend({},this.options.bootstrapTooltipOptions,{title:o}),i.tooltip(c)):i.attr("title",o),a},setCurrentPage:function(t){if(t>this.totalPages||t<1)throw"Page out of range";this.lastPage=this.currentPage,this.currentPage=parseInt(t,10)},getPages:function(){var t=this.totalPages,e=this.currentPage%this.numberOfPages==0?(parseInt(this.currentPage/this.numberOfPages,10)-1)*this.numberOfPages+1:parseInt(this.currentPage/this.numberOfPages,10)*this.numberOfPages+1,n=[],a=0,i=0;for(a=e=e<1?1:e,i=0;i<this.numberOfPages&&a<=t;a+=1,i+=1)n.push(a);return n.first=1,this.currentPage>1?n.prev=this.currentPage-1:n.prev=1,this.currentPage<t?n.next=this.currentPage+1:n.next=t,n.last=t,n.current=this.currentPage,n.total=t,n.numberOfPages=this.options.numberOfPages,n},getValueFromOption:function(t){var e=Array.prototype.slice.call(arguments,1);return"function"==typeof t?t.apply(this,e):t}},e.fn.bootstrapPaginator,e.fn.bootstrapPaginator=function(t){var i=arguments,s=null;return e(this).each(function(o,r){var l=e(r),c=l.data("bootstrapPaginator"),p="object"!==(void 0===t?"undefined":a(t))?null:t;if(!c)return c=new n(this,p),void(l=e(c.$element)).data("bootstrapPaginator",c);if("string"==typeof t){if(!c[t])throw"Method "+t+" does not exist";s=c[t].apply(c,Array.prototype.slice.call(i,1))}else s=c.setOptions(t)}),s},e.fn.bootstrapPaginator.sizeArray={2:{large:"pagination-large",small:"pagination-small",mini:"pagination-mini"},3:{large:"pagination-lg",small:"pagination-sm",mini:""}},e.fn.bootstrapPaginator.defaults={containerClass:"",size:"normal",alignment:"left",bootstrapMajorVersion:2,listContainerClass:"",itemContainerClass:function(t,e,n){return e===n?"active":""},itemContentClass:function(t,e,n){return""},currentPage:1,numberOfPages:5,totalPages:1,pageUrl:function(t,e,n){return null},onPageClicked:null,onPageChanged:null,useBootstrapTooltip:!1,shouldShowPage:function(t,e,n){var a=!0;switch(t){case"first":case"prev":a=1!==n;break;case"next":case"last":a=n!==this.totalPages;break;case"page":a=!0}return a},itemTexts:function(t,e,n){switch(t){case"first":return"&lt;&lt;";case"prev":return"&lt;";case"next":return"&gt;";case"last":return"&gt;&gt;";case"page":return e}},tooltipTitles:function(t,e,n){switch(t){case"first":return"Go to first page";case"prev":return"Go to previous page";case"next":return"Go to next page";case"last":return"Go to last page";case"page":return e===n?"Current page is "+e:"Go to page "+e}},bootstrapTooltipOptions:{animation:!0,html:!0,placement:"top",selector:!1,title:"",container:!1}},e.fn.bootstrapPaginator.Constructor=n}).call(this,n(0))},16:function(t,e){},2:function(t,e){t.exports='<div class="hearder">\r\n    <div class="container">\r\n        <img class="logoTop" src="./assets/img/logss.png" alt="信条logo">\r\n        <div class="nav">\r\n            <ul class="navRight">\r\n                <li class="navItem  selected n1"><a href="./index.html">首页</a> </li>\r\n                <li class="navItem n2"><a href="./product.html">产品中心</a></li>\r\n                <li class="navItem n3"><a href="./business.html">商务合作</a></li>\r\n                <li class="navItem n4"><a href="./aboutus.html">关于我们</a></li>\r\n                <li class="navItem n5"><a href="./mediashow.html">媒体资料</a></li>\r\n                <li class="navItem n6"><a href="./applycooperation.html">申请加盟</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>'},3:function(t,e){t.exports='<footer class="footBox">\r\n    <div class="container">\r\n        <div class="row">\r\n            <div class="col-xs-4 col-sm-4">\r\n                <img class="footLogo" src="./assets/img/logofoot.png" alt="">\r\n                <div class="footTel">服务热线：028-86155671</div>\r\n                <div class="footTel">商务合作：028-86155671</div>\r\n                <div class="footTel">邮箱地址：ifepay@163.com</div>\r\n                <div class="footTel">公司地址：成都市天府大道交子金融科技中心</div>\r\n            </div>\r\n            <div class="col-xs-4 col-sm-4 ">\r\n                <div class="footWen_lift">\r\n                    <a href="javascript:;">\r\n                        <div class="footWen">开发文档</div>\r\n                    </a>\r\n                    <a href="javascript:;">\r\n                        <div class="footTel">技术文档</div>\r\n                    </a>\r\n                </div>\r\n                <div class="footWen_right">\r\n                    <a href="./applycooperation.html">\r\n                        <div class="footAbout">关于我们</div>\r\n                    </a>\r\n                    <a href="./applycooperation.html">\r\n                        <div class="footAbouts ">商务合作</div>\r\n                    </a>\r\n                    <a href="./applycooperation.html">\r\n                        <div class="footAbouts">联系我们</div>\r\n                    </a>\r\n                    <a href="//www.ifepay.com/admin" target="_blank">\r\n                        <div class="login hidden-xs">企业登录</div>\r\n                    </a>\r\n                </div>\r\n\r\n            </div>\r\n            \x3c!-- Optional: clear the XS cols if their content doesn\'t match in height --\x3e\r\n           \x3c!--  <div class="clearfix visible-xs-block"></div> --\x3e\r\n            <div class="col-xs-4 col-sm-4 QrcodeS">\r\n                <div class="footWinxinTitle">官方微信</div>\r\n                <img class="qrcodeImg" src="./assets/img/logoFOOT.jpg" alt="">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="footButton">\r\n        Copyright © 2019 成都网易联科技有限公司 All Rights Reserved -蜀ICP备18037181号\r\n    </div>\r\n</footer>'},37:function(t,e){}});