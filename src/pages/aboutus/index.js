import "../common/index.js";
import "./index.scss";
import "./bootstrap-paginator";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  /*
   * interval为每个轮播项之间的切换时间
   * wrap定义是否循环轮播
   *mediaAllNews
   * */
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n4").addClass("selected");
  // console.log(window.location.search);
  var ids = window.location.search.split("=")[1];
  // 请求新闻数据

  allReq("资料下载", 1, 10);
});
// 封装函数
var strs = function(data, id) {
  var str = "";
  $.each(data, function(ind, item) {
    if (ind < 10) {
      str +=
        `<div class="itemBox">
        <div class="newDetailBoxTitle">` +
        item[1] +
        `</div>
        <div class="newDetailBoxTime">来源：` +
        item[5] +
        `&nbsp; &nbsp;发布时间：` +
        item[3] +
        `</div>
        <div class="newDetailGarid"></div>
        <div class="newDetailContent">` +
        item[2] +
        `</div>
        <div class="newDetailGarid1"></div>
    </div>`;
    }
  });
  $(id).html(str);
  //   将元素最后的灰色线去掉
  $(".newDetailGarid1:last").addClass("newDetailGarid1Last");
};
// 封装函数
var links = function(data, id) {
  let items1 = $(id);
  items1.each(function(index, el) {
    $(this).on("click", function() {
      location.href = "./mediadetail.html?id=" + data[index][0];
    });
  });
};
var AjaxPaginator = function(res, obj, ids, page) {
  var options = {
    currentPage: page, //当前页
    totalPages: res.num_pages, //总页数
    numberOfPages: 5, //设置控件显示的页码数
    bootstrapMajorVersion: 3, //如果是bootstrap3版本需要加此标识，并且设置包含分页内容的DOM元素为UL,如果是bootstrap2版本，则DOM包含元素是DIV
    useBootstrapTooltip: false, //是否显示tip提示框
    itemTexts: function(type, page, current) {
      //文字翻译
      switch (type) {
        case "first":
          return "首页";
        case "prev":
          return "上一页";
        case "next":
          return "下一页";
        case "last":
          return "尾页";
        case "page":
          return page;
      }
    },
    onPageClicked: function(event, originalEvent, type, pages) {
      //给每个页眉绑定一个事件，其实就是ajax请求
      console.log(pages);
      allReq(ids, pages, 10);
    }
  };
  obj.bootstrapPaginator(options);
};
// 全部新闻v
var allReq = function(ids, page, size) {
  var showData = "";
  var tiltw = "";
  if (ids == "资料下载") {
    showData = "资料下载";
    tiltw = "资料下载";
  }
  $("#tilePages").html(tiltw);

  // 静态
  var res = {
    num_pages: 4,
    ret: [
      [
        1,
        "标题1",
        "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
        "2019-01-12",
        "标题4",
        "教育网"
      ],
      [
        2,
        "标题2",
        "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
        "2019-01-12",
        "标题4",
        "教育网"
      ],
      [
        3,
        "标题3",
        "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
        "2019-01-12",
        "标题4",
        "教育网"
      ],
      [
        4,
        "标题4",
        "我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容",
        "2019-01-12",
        "标题4",
        "教育网"
      ]
    ]
  };
  strs(res.ret, "#newDetailBoxs");
  links(res.ret, "#newDetailBoxs  .itemBox");
  AjaxPaginator(res, $(".pagination"), ids, page);
  // 静态

  var new_nndustry =
    "//www.ifepay.com/website/front/" + ids + "/?pg=" + page + "&size=" + size;
  // $.ajax({
  //   url: new_nndustry,
  //   type: "GET",
  //   dataType: "jsonp", //指定服务器返回的数据类型
  //   jsonp: "theFunction", //指定参数名称
  //   jsonpCallback: showData, //指定回调函数名称
  //   success: function(res) {
  //     // console.log(showData);
  //     // console.log(res);
  //     strs(res.ret, "#newDetailBoxs");
  //     links(res.ret, "#newDetailBoxs  .itemBox");
  //     //    设置分页
  //     AjaxPaginator(res, $(".pagination"), ids, page);
  //   },
  //   error: function(XMLHttpRequest, textStatus, errorThrown) {
  //     console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
  //   }
  // });
};
