

let mode = document.querySelector("body");

let currMode ="white";

mode.addEventListener("click", () => {
        if(currMode === "white"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "white";
        document.querySelector("body").style.backgroundColor = "white";
    }
});


