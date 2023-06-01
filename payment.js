$(document).ready(function () {
  $("#close-btn", "#modal3").click(function (e) {
    if (e.target === this) {
      $("#modal3").fadeOut(1000);
    }
  });
  
  document.getElementById("pay").addEventListener("click", () => {
    const name = $("#name").val();
    const date = $("#date").val();
    const time = $("#time").val();
    const needs = $("#needs").val();
    pay();
    $("#yourName").text(name);
    $("#yourDate").text(date);
    $("#yourTime").text(time);
    $("#yourNeeds").text(needs);
  });
});

function pay() {
  if (
    $("#date").val() !== "" &&
    $("#time").val() !== "" &&
    $("#name").val() !== ""
  ) {
    $("#modal3").fadeIn(1000);
  }
}
