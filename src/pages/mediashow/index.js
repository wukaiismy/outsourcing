import "../common/index.js";
import "./mediashow.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n5").addClass("selected");
  msgReq(".mediaAllNewsBox", ".mediaAllNewsBox .items");
});

// 封装函数
var strs = function(data, id) {
  var str = "";
  $.each(data, function(ind, item) {
    if (ind < 3) {
      str +=
        `<div class="col-xs-4 col-sm-4 col-md-4 ">
      <div class="items">
          <div class="mediaAllNewsTitle">` +
        item.title +
        `</div>
          <img class="imgs" src="` +
        item.cover_img +
        `" alt="">
          <div class="content">` +
        item.introduction +
        `</div>
      </div>
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
      window.open(data[index].url, "_blank");
      // location.href = data[index].url;
    });
  });
};

//
var msgReq = function(id, idChild) {
  var urls = "/yanghua_edu/api/learning_platform/learn_plat/";
  $.ajax({
    url: urls,
    type: "GET",
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      console.log("学习平台");
      console.log(res);
      strs(res.data.ret, id);
      links(res.data.ret, idChild);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });
};
