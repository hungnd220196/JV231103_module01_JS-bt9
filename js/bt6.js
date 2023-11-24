//bt1


// let age = +prompt(" mời bạn nhập số tuổi: ");

// if (age >= 18) {
//   alert("bạn trên 18 tuổi");
// } else {
//   alert(" bạn chưa dủ 18 tuổi");
// }



//bài tập 2

// let hours = prompt(" mời bạn nhập thời gian");
// hours = parseInt(hours);
// if(hours <= 18){
//     alert(" good day");
// }else{
//     alert(" good evening");
// }




//bài tập 3
// let number = +prompt ("mời bạn nhập vào 1 số: ");

// if(number%2===0){
//     alert("số bạn nhập là số chẵn");

// }else{
//     alert("số bạn nhập là số lẻ");
// }
  


//bt4.
// let number = +prompt("mời bạn nhập vào 1 số: ");

// switch (number % 2) {
//   case 1:
//     alert("số bạn nhập là số lẻ");
//     break;
//   case 0:
//     alert("số bạn nhập là số chẵn");
//     break;
//   default:
//     alert("bạn nhập lại số");
//     break;
// }


//bt5
// let color = prompt("mời bạn nhập màu: ");

// switch (color) {
//   case "red":
//     alert("bạn nhập màu đỏ");
//     break;
//   case "green":
//     alert("bạn nhập màu xanh");
//     break;
//   case "yellow":
//     alert("bạn nhập màu vàng");
//     break;

//   default:
//     alert("bạn nhập màu khác");
//     break;
// }



let integer = +prompt(" mời bạn nhập vào số nguyên: ");

if(integer==0){
    alert("số bạn nhập có giá trị bằng 0");

}else if(integer>0){
    alert("số bạn nhập có giá trị lớn hơn 0");
}else{
    alert("số bạn nhập có giá trị nhỏ hơn 0");
}