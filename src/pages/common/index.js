import "./header.scss";
import "bootstrap/dist/js/bootstrap.min.js";
$(function() {
  /*
   * interval为每个轮播项之间的切换时间
   * wrap定义是否循环轮播
   *
   * */
  // alert("我是公用");
  // console.log("我是公用");
  $("#carouselMenu").carousel({
    interval: 5000,
    wrap: true
  });
  $(".footAbouts").click(function() {
    location.href = "./applycooperation.html";
  });
  $(".login").click(function() {
    window.open("//www.ifepay.com/admin");
  });
  $(".footAbout").click(function() {
    location.href = "./aboutus.html";
  });
  $(".navItem").each(function(ind, item) {
    console.log(ind);
    console.log(item);
    console.log(this);
    $(this).on("click", function() {
      console.log(ind);
      $(".navItem")
        .removeClass("selected")
        .eq(ind)
        .addClass("selected");
    });
  });

  // 获取底部信息
  var Url = "/yanghua_edu/api/other_module/bottom_content/";
  // 获取初始化数据
  $.ajax({
    url: Url,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      console.log("底部信息");
      console.log(res);
      if (res.code == 1) {
        var str =
          ` <div class="giass"></div>
        <div class="footTel">服务热线：` +
          res.data.service_hotline +
          `</div>
        <div class="footTel">商务合作：` +
          res.data.business_cooperation +
          `</div>
        <div class="footTel">邮箱：` +
          res.data.mailbox +
          `</div>
        <div class="footTel">公司地址：` +
          res.data.company_address +
          `</div>`;
        $(".myBotton").html(str);
        $(".qrcodeImg").attr("src", res.data.official_wechat);
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
});
