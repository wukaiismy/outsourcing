import header from "../text/index.txt";
import footer from "../foot/index.txt";
import "./index.scss";
import "../common/index.js";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import img1 from "../../images/baanner/20131220135218_6EZzbf.jpg";
import img2 from "../../images/baanner/20140211101609_ZtrES1.jpg";
$(function() {
  /*
   * 引入公共文件
   * wrap定义是否循环轮播
   *
   * */

  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  console.log("我是首页");
  // 轮播图
  var lis1 = "";
  var str1 = "";
  var res1 = [img1, img2];
  $.each(res1, function(ind, item) {
    if (ind < 2) {
      if (ind == "0") {
        str1 =
          `<div class="item active"><img src="` + item + ` " alt="" /></div>`;
        lis1 = `<li data-target="#carouselMenu" data-slide-to="0" class="active"></li>`;
      } else {
        str1 += ` <div class="item "><img src="` + item + ` " alt="" /></div>`;
        lis1 +=
          ` <li data-target="#carouselMenu" data-slide-to="` + ind + `"></li>`;
      }
    }
  });

  $("#numbers").html(lis1);
  $("#lunBo").html(str1);

  $(".serportButton").click(function() {
    location.href = "./applycooperation.html";
  });
  var Url = "//www.ifepay.com/website/front/showimg/";
  // 获取初始化数据
  // $.ajax({
  //   url: Url,
  //   type: "GET",
  //   dataType: "jsonp", //指定服务器返回的数据类型
  //   jsonp: "theFunction", //指定参数名称
  //   jsonpCallback: "showData", //指定回调函数名称
  //   success: function(res) {
  //     // console.log(6666);
  //     // console.log(res);
  //     var lis = "";
  //     var str = "";

  //     $.each(res, function(ind, item) {
  //       if (ind < 2) {
  //         if (ind == "0") {
  //           str =
  //             `<div class="item active"><img src="https://www.ifepay.com/website/media/` +
  //             item +
  //             ` " alt="" /></div>`;
  //           lis = `<li data-target="#carouselMenu" data-slide-to="0" class="active"></li>`;
  //         } else {
  //           str +=
  //             ` <div class="item "><img src="//www.ifepay.com/website/media/` +
  //             item +
  //             ` " alt="" /></div>`;
  //           lis +=
  //             ` <li data-target="#carouselMenu" data-slide-to="` +
  //             ind +
  //             `"></li>`;
  //         }
  //       }
  //     });

  //     $("#numbers").html(lis);
  //     $("#lunBo").html(str);
  //     msgReq();
  //     msgReq1();
  //   },
  //   error: function(XMLHttpRequest, textStatus, errorThrown) {
  //     console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
  //   }
  // });
});

// 封装函数
var strs = function(data, id) {
  var str = "";
  $.each(data, function(ind, item) {
    if (ind < 6) {
      str +=
        '<div class="IndustryDynamicItemShow"><span class="IndustryDynamicItemTitls"> ' +
        item[1] +
        "</span><span  class='times'>" +
        item[3].substr(0, 10) +
        "</span></div>";
    }
  });
  $(id).html(str);
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
// 获取行业新闻列表;
var msgReq = function() {
  var new_nndustry = "//www.ifepay.com/website/front/new_nndustry/";
  $.ajax({
    url: new_nndustry,
    type: "GET",
    dataType: "jsonp", //指定服务器返回的数据类型
    jsonp: "theFunction", //指定参数名称
    jsonpCallback: "showData2", //指定回调函数名称
    success: function(res) {
      // console.log("行业新闻");
      // console.log(res);
      strs(res.ret, "#fastPayRight");
      links(res.ret, "#fastPayRight div");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
// 获取政策法规列表;
var msgReq1 = function() {
  var new_policy = "//www.ifepay.com/website/front/new_policy/";
  $.ajax({
    url: new_policy,
    type: "GET",
    dataType: "jsonp", //指定服务器返回的数据类型
    jsonp: "theFunction", //指定参数名称
    jsonpCallback: "showData1", //指定回调函数名称
    success: function(res) {
      // console.log("政策法规");
      // console.log(res);
      strs(res.ret, "#fastPayNewshow");
      links(res.ret, "#fastPayNewshow div");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
