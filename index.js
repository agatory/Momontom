const title = document.getElementById("title");

function handleClick(event) {
    title.style.color = "red"
    console.log(event);
}

title.addEventListener("click", handleClick);