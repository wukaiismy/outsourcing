import "../common/index.js";
import "./index.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n5").addClass("selected");
  // console.log(window.location.search);
  var ids = window.location.search;
  // console.log(ids);
  var Url = "//www.ifepay.com/website/front/new_one/" + ids;
  // 获取初始化数据
  $.ajax({
    url: Url,
    type: "GET",
    dataType: "jsonp", //指定服务器返回的数据类型
    jsonp: "theFunction", //指定参数名称
    jsonpCallback: "showData", //指定回调函数名称
    success: function(res) {
      // console.log("新闻详情");
      // console.log(res);
      var str1 = "";
      str1 +=
        `发布人：` +
        res.author +
        ` &nbsp; &nbsp; &nbsp;发布时间：` +
        res.create_at +
        ` &nbsp; &nbsp; &nbsp;来源：` +
        res.urls;
      $("#mediaNvaList").html(str1);
      $(".mediaNvaContentTitle").html(res.topic);
      $(".mediaNvaContentDetails").html(res.content);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });

  $(".mediaNvaRight").click(function() {
    location.href = "./mediashow.html";
  });
});
