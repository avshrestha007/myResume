

let mode = document.querySelector("body");

let currMode ="Light";

mode.addEventListener("click", () => {
        if(currMode === "Light"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});


