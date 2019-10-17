import header from "../text/index.txt";
import footer from "../foot/index.txt";
import "./index.scss";
import "../common/index.js";
// import { api } from "../../config/httpUrl";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../assets/js/jquery.liMarquee";
// import '../../assets/js/jquery-1.8.3.min';
$(function() {
  /*
   * 引入公共文件
   * wrap定义是否循环轮播
   *
   * */

  $("#headerHtml").html(header);
  $("#footHtml").html(footer);

  $("#product").click(function() {
    console.log("在线报名");
    $(".models").attr("id", "myModal");
    // $(".modal-body").html("联系人和联系电话必填！");
  });
  // 提交在线报名数据
  $(".submit").click(function() {
    $(".models1").attr("id", "");
    if ($("#name").val() && $("#mobile").val()) {
      $(".models1").attr("id", "myModal1");
      var datas = $("form").serialize();
      var targetUrl = "/yanghua_edu/api/other_module/online_sign/";
      $.ajax({
        type: "post",
        url: targetUrl,
        data: datas,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function(data) {
          console.log(data);
          $("#myModal").modal("hide");
          if (data.code == "1") {
            $(".modal-body1").html(data.msg);
            // 重置表格
            $("form")[0].reset();
          } else {
            $(".modal-body1").html("提交错误，请重试！");
          }
        },
        error: function(err) {
          $(".models1").attr("id", "myModal1");
          console.log(err);
          $(".modal-body1").html("未知错误！");
        }
      });
    } else {
      $(".models1").attr("id", "myModal1");
      $(".modal-body1").html("联系人和联系电话必填！");
    }
  });
  $("#serach").click(function() {
    location.href = "./serviceNet.html";
  });
  $("#applycooperation").click(function() {
    location.href = "./applycooperation.html";
  });
  var UrlBanner =
    "/yanghua_edu/api/banner_img/banner_img/?banner_position_name=top";
  // 获取初始化数据
  $.ajax({
    url: UrlBanner,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      console.log(6666);
      console.log(res);
      var lis = "";
      var str = "";
      if (res.code == 1) {
        var dataList = res.data.ret;
      }
      $.each(dataList, function(ind, item) {
        if (ind == "0") {
          str =
            `<div class="item active"><img src="` +
            item.image +
            ` " alt="" /></div>`;
          lis = `<li data-target="#carouselMenu" data-slide-to="0" class="active"></li>`;
        } else {
          str +=
            ` <div class="item "><img src="` +
            item.image +
            ` " alt="" /></div>`;
          lis +=
            ` <li data-target="#carouselMenu" data-slide-to="` +
            ind +
            `"></li>`;
        }
      });

      $("#numbers").html(lis);
      $("#lunBo").html(str);
      // msgReq();
      // msgReq1();
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
  // 获取中部图片
  getImage("center", [".fastPayImg"]);
  // 获取中右图片
  getImage("center-right", [".img-circleS"]);
  // 获取底部图片
  getImage("right-bottom", [".img12"]);

  const dataListArr = [[], [], []];
  // 行业动态
  msgReq(1);
  // 专业指导
  msgReq(2, dataListArr);
  // 考试攻略
  msgReq(3, dataListArr);
  // 报考指南
  msgReq(4, dataListArr);

  // 鼠标移入事件
  $(".navTitlesItem").each(function(ind, item) {
    $(this).on("mouseover", function() {
      console.log(ind);
      tebleShow(dataListArr[ind], choosed);
      $(".navTitlesItem")
        .removeClass("navTitlesItemHover")
        .eq(ind)
        .addClass("navTitlesItemHover");
    });
  });
});

// 封装函数
var strs = function(data, id) {
  var str = "";
  $.each(data, function(ind, item) {
    str +=
      `<div class="item"><div class="logoiMGBox">
      <img class="logoiMG" src="` +
      item.cover_img +
      `" alt="" /></div>
      <div class="rightBox">
        <div class="title">` +
      item.title +
      `</div>
      <div class="ellipsis">
        <div class="">` +
      item.content +
      `</div><span class="ellipsis-after"> ... </span></div> 
      </div>
    </div>
    <div class="garid"></div>`;
  });
  $(id).html(str);
};
// 跳转详情页面
var links = function(data, id) {
  let items1 = $(id);
  items1.each(function(index, el) {
    $(this).on("click", function() {
      location.href = "./mediadetail.html?urls=index&&id=" + data[index].id;
    });
  });
};
// 获取行业动态;
var msgReq = function(id, dataListArr) {
  var new_nndustry =
    "/yanghua_edu/api/graphic_module/graphic/?graphic_type_id=" + id;
  $.ajax({
    url: new_nndustry,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      if (id == 1) {
        console.log("行业动态");
        console.log(res);
        var leftNav = res.data.ret[0];
        $(".fastPayLiftTitle").html(leftNav.title);
        $(".fastPayLiftContent").html(leftNav.content);
        // 中间列表项
        var contents = res.data.ret.slice(1, 5);

        strs(contents, "#fastPayCenter");
        // 跳转到详情
        links(contents, "#fastPayCenter .title");
      } else if (id == 2) {
        dataListArr[1] = res.data.ret;
      } else if (id == 3) {
        dataListArr[0] = res.data.ret;
        tebleShow(dataListArr[0], choosed);
      } else if (id == 4) {
        dataListArr[2] = res.data.ret;
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};

// 获取图片
var getImage = function(url, imgClass) {
  // 获取底部图片
  var UrlImg =
    "/yanghua_edu/api/banner_img/banner_img/?banner_position_name=" + url;
  // 获取初始化数据
  $.ajax({
    url: UrlImg,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      if (res.code == 1) {
        // console.log(res);
        if (res.data.ret) {
          $.each(res.data.ret, function(ind, item) {
            $(imgClass[ind]).attr("src", item.image);
          });
        }
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};

// 教育动态
var tebleShow = function(data, id) {
  var str = "";
  $.each(data, function(ind, item) {
    if (ind < 3) {
      str +=
        ` <div class="contentBox row">
    <div class="col-xs-2 col-sm-2 col-md-2 times">` +
        item.create_time.substr(0, 10) +
        `</div>
    <div class="col-xs-10 col-sm-10 col-md-10">
      <div class="title">` +
        item.title +
        `</div>
        <div class="ellipsis">
      <div class="">` +
        item.content +
        `</div><span class="ellipsis-after"> ... </span></div> 
    </div>
  </div>
  <div class="garids"></div>`;
    }
  });
  $(id).html(str);

  // 跳转到详情
  links(data, "#choosed .title");

  // 通知公告
  var UrlBanner = "/yanghua_edu/api/other_module/notic_manage/";
  // 获取初始化数据
  $.ajax({
    url: UrlBanner,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      console.log("通知公告");
      console.log(res);

      var lis = "";

      if (res.code == 1) {
        var dataList = res.data.ret;
      }
      $.each(dataList, function(ind, item) {
        lis +=
          `<a href="javascript:">` +
          (item.type_of == 1 ? "通知：" : "公告：") +
          item.content +
          `</a>`;
      });
      $(".dowebok").html(lis);
      $(".dowebok").liMarquee({
        direction: "up",
        scrollamount: 5,
        runshort: false,
        hoverstop: false
      });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
