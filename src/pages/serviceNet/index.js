import "../common/index.js";
// import "./baidu";
// import "./baidu1";
import "./index.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  // console.log("我是关于我们");
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n6").addClass("selected");
  aboutUs();
  // 获取服务点列表
  var UrlBanner = "/yanghua_edu/api/service_point/service_point/";
  $.ajax({
    url: UrlBanner,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    // jsonp: "theFunction", //指定参数名称
    // jsonpCallback: "showData", //指定回调函数名称
    success: function(res) {
      console.log("服务点列表");
      console.log(res);
      if (res.code == 1) {
        serviceNet(res.data.ret);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
});
// 关于我们
var aboutUs = function() {
  var UrlBanner = "/yanghua_edu/api/other_module/company_profile/";
  $.ajax({
    url: UrlBanner,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    // jsonp: "theFunction", //指定参数名称
    // jsonpCallback: "showData", //指定回调函数名称
    success: function(res) {
      console.log("关于我们");
      console.log(res);
      if (res.code == 1) {
        $(".main-title").html(res.data.main_title);
        $(".subtitle").html(res.data.subtitle);
        $(".aboutUsContents").html(res.data.content);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
// 服务站点列表
var serviceNet = function(data) {
  var str = "";
  $.each(data, function(index, item) {
    str +=
      ` <div class="contactUsTitle"><img class="picLogo" src="` +
      item.address_map +
      `" alt="">
      <div class="contactUsDetail1">
        公司名称：<span>` +
      item.name +
      `</span>
      </div>
      <div class="contactUsDetail1 De1">
        公司地址：<span>` +
      item.address[0] +
      item.address[1] +
      item.address[2] +
      item.detailed_address +
      `</span>
      </div>
      <div class="contactUsDetail1 De2">
        工作时间：<span>10:00～18:00（工作日）</span>
      </div>
      <div class="contactUsDetail1 De3">
        客服邮箱：<span>` +
      (item.postal_no ? item.postal_no : "-") +
      `</span>
      </div>
      <div class="contactUsDetail1 De4">
        客服电话：<span>` +
      item.principal_mobile +
      `</span>
      </div>
      <div class="contactUsDetail1 De5">
        负责人：<span>` +
      item.principal_name +
      `</span>
      </div>
      <div class="contactUsDetail1 De6">
        投诉建议：<span>` +
      item.support_hotline +
      `</span>
      </div>
    </div>`;
  });
  $(".serviceBox").html(str);
};
