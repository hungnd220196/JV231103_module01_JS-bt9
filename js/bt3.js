let a = +prompt("mời bạn nhập vào số a");
let b = +prompt("mời bạn nhập vào số b");
let calculation = prompt("mời bạn nhập vào các phép tính (+, -,*, /) ");
let add = a + b;
let sub = a - b;
let multi = a * b;
let devide = a / b;
switch (calculation) {
  case "+":
    alert("kết quả phép tính trên:a +b=" + add);
    break;
  case "-":
    alert("kết quả phép tính trên:a -b=" + sub);
    break;
  case "*":
    alert("kết quả phép tính trên:a *b=" + multi);
    break;
  case "/":
    alert("kết quả phép tính trên:a /b=" + devide);
    break;

  default:
    break;
}
