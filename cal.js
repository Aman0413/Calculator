let string = "";

$("button").click((e) => {
  if (e.target.innerHTML == "x") {
    e.target.innerHTML = "*";
  }
  if (e.target.innerHTML == "=") {
    string = eval(string);
    $("#result").val(string);
  } else if (e.target.innerHTML == "c") {
    string = "";
    $("#result").val(string);
  } else {
    console.log(e.target);
    string = string + e.target.innerHTML;
    $("#result").val(string);
  }
});
