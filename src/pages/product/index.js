import header from "../text/index.txt";
import footer from "../foot/index.txt";
import "../common/index.js";
import "./product.scss";
import "bootstrap/dist/js/bootstrap.min.js";
$(function() {
  /*
   * interval为每个轮播项之间的切换时间
   * wrap定义是否循环轮播
   *
   * */
  // alert("我是产品中心");
  // console.log("我是产品中心");
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n2").addClass("selected");
  var Url = "//www.ifepay.com/website/front/showimg/";
  // 获取初始化数据
  $.ajax({
    url: Url,
    type: "GET",
    data: { id: 2 },
    dataType: "jsonp", //指定服务器返回的数据类型
    jsonp: "theFunction", //指定参数名称
    jsonpCallback: "showData", //指定回调函数名称
    success: function(res) {
      var lis = "";
      var str = "";

      $.each(res, function(ind, item) {
        if (ind < 2) {
          if (ind == "0") {
            str =
              `<div class="item active"><img src="//www.ifepay.com/website/media/` +
              item +
              ` " alt="" /></div>`;
            lis = `<li data-target="#carouselMenu" data-slide-to="0" class="active"></li>`;
          } else {
            str +=
              ` <div class="item "><img src="//www.ifepay.com/website/media/` +
              item +
              ` " alt="" /></div>`;
            lis +=
              ` <li data-target="#carouselMenu" data-slide-to="` +
              ind +
              `"></li>`;
          }
        }
      });
      $("#numbers1").html(lis);
      $("#lunBo1").html(str);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
});
