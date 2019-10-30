import "../common/index.js";
import "./index.scss";
import "./bootstrap-paginator";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function () {
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
var strs = function (data, id) {
  var str = "";
  $.each(data, function (ind, item) {
    if (ind < 10) {
      str +=
        `<div class="itemBox">
        <div class="newDetailBoxTitle">` +
        item.title +
        `</div>
        <div class="newDetailBoxTime">来源：` +
        item.source_from +
        `&nbsp; &nbsp;发布时间：` +
        item.create_time +
        `</div>
        <div class="newDetailGarid"></div>
        <div class="newDetailContent">` +
        item.description +
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
var links = function (data, id) {
  console.log('下载---')
  console.log(data)
  console.log(id)
  let items1 = $(id);
  items1.each(function (index, el) {
    var fileType = data[index].file_path.split('.').pop();
    console.log(fileType)
    $(this).on("click", function () {
      const a = document.createElement("a"); // 创建a标签
      const titles = data[index].title + '.' + fileType
      console.log(titles)

      a.setAttribute("download", titles); // download属性
      a.setAttribute(
        "href",
        data[index].file_path
      ); // href链接
      a.click(); // 自执行点击事件
    });
  });
};
var AjaxPaginator = function (res, obj, ids, page) {
  var total = res.count / page;
  var options = {
    currentPage: page, //当前页
    totalPages: 1, //总页数
    numberOfPages: 5, //设置控件显示的页码数
    bootstrapMajorVersion: 3, //如果是bootstrap3版本需要加此标识，并且设置包含分页内容的DOM元素为UL,如果是bootstrap2版本，则DOM包含元素是DIV
    useBootstrapTooltip: false, //是否显示tip提示框
    itemTexts: function (type, page, current) {
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
    onPageClicked: function (event, originalEvent, type, pages) {
      //给每个页眉绑定一个事件，其实就是ajax请求
      console.log(pages);
      allReq(ids, pages, 10);
    }
  };
  obj.bootstrapPaginator(options);
};
// 全部新闻v
var allReq = function (ids, page, size) {
  var showData = "";
  var tiltw = "";
  if (ids == "资料下载") {
    showData = "资料下载";
    tiltw = "资料下载";
  }
  $("#tilePages").html(tiltw);

  // 静态

  var new_nndustry =
    "/yanghua_edu/api/other_module/document_file/?pg=" + page + "&size=" + size;
  $.ajax({
    url: new_nndustry,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function (res) {
      console.log("资料下载");
      console.log(res);
      strs(res.data.ret, "#newDetailBoxs");
      links(res.data.ret, "#newDetailBoxs  .itemBox");
      //    设置分页
      AjaxPaginator(res.data, $(".pagination"), ids, page);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
