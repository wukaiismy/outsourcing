import "../common/index.js";
import "./index.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");

  // console.log(window.location.search);
  var ids = window.location.search.split("?")[1];
  var reUrlName = ids.split("&&")[0].split("=")[1];
  var id = ids.split("&&")[1].split("=")[1];
  var reUrl;
  console.log(reUrlName);
  console.log(id);
  if (reUrlName == "index") {
    $(".n1").addClass("selected");
    reUrl = "/yanghua_edu/api/graphic_module/graphic/";
  } else if (reUrlName == "product") {
    $(".n2").addClass("selected");
    reUrl = "/yanghua_edu/api/project_module/service_content/";
  } else if (reUrlName == "business") {
    $(".n3").addClass("selected");
    reUrl = "/yanghua_edu/api/project_module/server_hall/";
  }
  var datas = { id };
  console.log(datas);
  // 获取初始化数据
  $.ajax({
    url: reUrl,
    type: "patch",
    data: datas,
    dataType: "json", //指定服务器返回的数据类型
    success: function(res) {
      console.log("详情");
      console.log(res);
      var str1 = "";
      str1 +=
        `发布人：` +
        (res.data.author ? res.data.author : "世纪扬华教育") +
        ` &nbsp; &nbsp; &nbsp;发布时间：` +
        res.data.create_time +
        ` &nbsp; &nbsp; &nbsp;来源：` +
        (res.data.graphic_type_name
          ? res.data.graphic_type_name
          : res.data.name);
      $("#mediaNvaList").html(str1);
      $(".mediaNvaContentTitle").html(res.data.title);
      $(".mediaNvaContentDetails").html(res.data.content);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log("请求数据异常，状态码：" + XMLHttpRequest.status);
    }
  });

  $(".mediaNvaRight").click(function() {
    location.href = "./mediashow.html";
  });
});
