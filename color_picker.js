let input = Array.from(document.querySelectorAll("input"));
let RGB = document.querySelector(".RGB");
let pick_color = document.querySelector(".pick_color");
let button = document.querySelector("button");

pick_color.innerHTML = RGB.innerHTML;
var R = G = B = 0;
input.forEach(
    (e) => {
        e.addEventListener("input", (color) => {
            if (color.target.id == "red") {
                R = color.target.value;
            }
            else if (color.target.id == "green") {
                G = color.target.value;
            }
            else {
                B = color.target.value;
            }
            var Set_color = "rgb(" + R + ',' + G + ',' + B + ')';
            RGB.innerHTML = Set_color;
            pick_color.style.backgroundColor = Set_color;
            pick_color.innerHTML = RGB.innerHTML;
        })
    }
);

button.addEventListener("click",()=>{
  navigator.clipboard.writeText(RGB.innerHTML);
});