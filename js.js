let add = document.querySelector(".add")

let imgOn = document.createElement("img")
imgOn.src = "./img/on.jpg"
add.appendChild(imgOn)

let btn = document.createElement("button")
btn.innerHTML = "on"
add.appendChild(btn)


let click = true 

btn.onclick = () => {
    
    if (click) 
    {
        click = false;
        btn.innerHTML = "on";
        document.querySelector("img").src = "./img/on.jpg";
    } 
    else 
    {
        document.querySelector("img").src = "./img/off.jpg";
        btn.innerHTML = "off";
        click = true;
    }
};