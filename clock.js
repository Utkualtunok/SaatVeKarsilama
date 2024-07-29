function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name || "Ziyaretci";
}

function showTime() {
    const date = new Date();
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();

    var clock = document.getElementById("myClock");
    clock.setAttribute("class", "myClock")
    clock.innerText = "Date " + day + " " + time;
}

setInterval(showTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
    askName();
    showTime();
});



