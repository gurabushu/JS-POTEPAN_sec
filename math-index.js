
let sbNum = 0

$("#answer").text(sbNum);




$(".input").on("click",function(){
  let num = $(this).text();
  let numZ = $("#answer").text();
  let lonNum = numZ.slice(-1);

  if (numZ.length >= "10"){
    return;
  }

  if (numZ === "0"){
  $("#answer").text(num);
  }else{
  $("#answer").append(num);
  }

});


$(".input_zero").on("click",function(){
  let element_Num = $(this).text();
  let element_Numa =$("#answer").text();

  if (element_Numa === "0"){
  return;
  }

  $("#answer").append(element_Num);     
});


$(".input_op").on("click",function(){
  let sumNum = $(this).text();
  let currentText = $("#answer").text();
  let lastChar = currentText.slice(-1);

  if (["+","-","*","/","."].includes(lastChar)){
  return;
  }

  if (currentText.length >= "10"){
    $("#answer").text("E");
  }

  $("#answer").append(sumNum);
});


$(".input_ans").on("click",function(){
  let exp = $("#answer").text();
  let result = eval(exp);

  $("#answer").text(result);
});


$(".input_ac").on("click",function(){
  let inputText = $("#answer").text(); 
  if (inputText !== 0){
  $("#answer").empty();
  }

  $("#answer").text(sbNum);
});
