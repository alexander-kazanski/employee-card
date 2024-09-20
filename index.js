/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const conversionsEl = document.querySelector(".conversions-container");

const calculations = {
    length: [
        function(meters) {
            return meters * 3.2808399;
        },
        function(feet) {
            return feet * 0.3048;
        },
        "Length (Meters/Feet)",
        "meters",
        "feet"
    ],
    volume: [
        function(liters) {
            return liters * 0.26417205;
        },
        function(gallons) {
            return gallons * 3.78541178;
        },
        "Volume (Liters/Gallons)",
        "liters",
        "gallons"
    ],
    mass: [
        function(kilograms) {
            return kilograms * 2.20462262;
        },
        function(pounds) {
            return pounds * 0.45359237;
        },
        "Mass (Kilograms/Pounds)",
        "kilograms",
        "pounds"
    ]
};
unction calculate() {
    const calculationKeys = ["length", "volume", "mass"];
    let conversionsHTML = ""
    for (let i = 0; i < calculationKeys.length; i++) {
        let equations = calculations[calculationKeys[i]];
        conversionsHTML += `<div class="conversion">
<h3>${equations[2]}</h3>
<p>${inputEl.value} ${equations[3]} = ${equations[0](inputEl.value).toFixed(3)} ${equations[4]} | ${inputEl.value} ${equations[4]} = ${equations[1](inputEl.value).toFixed(3)} ${equations[3]}</p>
</div>`
    }
    conversionsEl.innerHTML = conversionsHTML;
    
}