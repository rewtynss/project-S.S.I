let a = 15
let b = prompt("Угадай число")
switch(true) {
    case b==a:
        alert("Вы угадали")
    break;
    case b>a:
        alert("Вы не угадали подберите число поменьше")
    break;
    case b<a:
        alert("Вы не угадали подберите число побольше")
    break;
}