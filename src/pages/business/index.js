import "../common/index.js";
import "./index.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  /*
   * interval为每个轮播项之间的切换时间
   * wrap定义是否循环轮播
   *
   * */
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n3").addClass("selected");

  var Url = "/yanghua_edu/api/project_module/service_content/";
  // 获取初始化数据
  $.ajax({
    url: Url,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      console.log("我要报考");
      console.log(res);
      if (res.code == 1) {
        strCenter(res.data.ret);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
});

// 服务中心
var strCenter = function(data) {
  var str = "";
  $.each(data, function(index, item) {
    str +=
      `<div class="col-xs-4 col-sm-4 ">
    <div class="fastPay">
      <img class="fastPayImg" src="` +
      item.cover_img +
      `" alt="">
      <div class="fastPayTitle">` +
      item.name +
      `</div>
      <div class="garid2"></div>
      <span class="fastPayContent">` +
      item.introduction +
      `</span>
    </div>
  </div>`;
  });
  $(".productCenterList").html(str);
};
