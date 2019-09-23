import header from "../text/index.txt";
import footer from "../foot/index.txt";

import "../common/index.js";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";
$(function() {
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n7").addClass("selected");
  $(".submit").click(function() {
    $(".models").attr("id", "");
    if ($("#name").val() && $("#mobile").val()) {
      $(".models").attr("id", "myModal");
      var datas = $("form").serialize();
      var targetUrl = "/yanghua_edu/api/other_module/join_hand/";
      $.ajax({
        type: "post",
        url: targetUrl,
        data: datas,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function(data) {
          console.log(data);

          if (data.code == "1") {
            $(".modal-body").html(data.msg);
            // 重置表格
            $("form")[0].reset();
          } else {
            $(".modal-body").html("提交错误，请重试！");
          }
        },
        error: function(err) {
          $(".models").attr("id", "myModal");
          console.log(err);
          $(".modal-body").html("未知错误！");
        }
      });
    } else {
      $(".models").attr("id", "myModal");
      $(".modal-body").html("联系人和联系电话必填！");
    }
  });
});
