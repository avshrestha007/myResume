

let mode = document.querySelector("body");

let currMode ="Perple";

mode.addEventListener("click", () => {
        if(currMode === "Perple"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "Perple";
        document.querySelector("body").style.backgroundColor = "rgb(183, 109, 233)";
    }
});


