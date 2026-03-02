let btn = document.getElementById("runBtn");

btn.addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
});

btn.addEventListener("click", function() {
    document.body.innerHTML = "<h1>😂 You finally caught it!</h1>";
});
