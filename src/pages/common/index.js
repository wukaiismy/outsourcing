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
});
