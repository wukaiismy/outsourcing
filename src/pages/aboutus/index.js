import "../common/index.js";
import "./baidu";
import "./index.scss";
import header from "../text/index.txt";
import footer from "../foot/index.txt";
$(function() {
  // console.log("我是关于我们");
  $("#headerHtml").html(header);
  $("#footHtml").html(footer);
  $(".navItem").removeClass("selected");
  $(".n4").addClass("selected");
});
