export function changeColor(){
  var bgcolor = $('div.color').prop("style");
  document.querySelector("body").style = bgcolor;
}

export function changeName(name){
  console.log(name);
}
