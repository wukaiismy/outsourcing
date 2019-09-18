import "../common/index.js";
import "./mediashow.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n5").addClass("selected");

  // 请求新闻数据
  // msgReq(
  //   "new_all",
  //   "showData4",
  //   "#mediaAllNews",
  //   "#mediaAllNews  .mediaAllNewsListItem"
  // );
  // msgReq(
  //   "new_nndustry",
  //   "showData2",
  //   "#mediaAllNews1",
  //   "#mediaAllNews1  .mediaAllNewsListItem"
  // );
  // msgReq(
  //   "new_policy",
  //   "showData1",
  //   "#mediaAllNews2",
  //   "#mediaAllNews2  .mediaAllNewsListItem"
  // );
  // 平台新闻
  // msgReq(
  //   "new_plat",
  //   "showData3",
  //   "#mediaAllNews3",
  //   "#mediaAllNews3  .mediaAllNewsListItem"
  // );
  // new_plat();
  // $("#mediaAllNewsMore").click(function() {
  //   location.href = "./mediamore.html?id=new_all";
  // });
  // $("#mediaAllNews1More").click(function() {
  //   location.href = "./mediamore.html?id=new_nndustry";
  // });
  // $("#mediaAllNews2More").click(function() {
  //   location.href = "./mediamore.html?id=new_policy";
  // });
  // $("#mediaAllNews3More").click(function() {
  //   location.href = "./mediamore.html?id=new_plat";
  // });
});

// 封装函数
var strs = function(data, id) {
  var str = "";
  $.each(data, function(ind, item) {
    if (ind < 3) {
      str +=
        `<div class="col-xs-4 col-sm-4 itemShows">
        <div class="mediaAllNewsListItem">
            <img class="fastPayImg1" src="//www.ifepay.com/website/media/` +
        item[6] +
        `" alt="">
            <div class="fastPayTitle">` +
        item[1] +
        `</div><span class="fastPayContent">` +
        item[2] +
        `</span>
       <div class="fastPayTime">` +
        item[3] +
        `</div>
       <div class="fastPayTime ft1">来源：` +
        item[5] +
        `</div>  </div>
        </div>`;
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

// 获取新闻列表的函数;msgReq("http://192.168.1.28:8001/front/new_nndustry/","showData2", "#mediaAllNews1","#mediaAllNews1  .mediaAllNewsListItem");
var msgReq = function(Url, cbs, id, idChild) {
  var urls = "//www.ifepay.com/website/front/" + Url + "/?size=3";
  $.ajax({
    url: urls,
    type: "GET",
    dataType: "jsonp", //指定服务器返回的数据类型
    jsonp: "theFunction", //指定参数名称
    jsonpCallback: cbs, //指定回调函数名称
    success: function(res) {
      // console.log(res);
      strs(res.ret, id);
      links(res.ret, idChild);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
