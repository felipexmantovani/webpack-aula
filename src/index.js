// const _ = require('lodash');
import _ from "lodash";
import "./style.css";
import paisagem from "./paisagem.jpg"

function component() {
    var element = document.createElement("div");
    element.innerHTML = _.join(["Olá", "webpack", "!"], " ");
    element.classList.add("hello");

    var image = document.createElement("img");
    image.src = paisagem;
    image.height = 200;
    element.appendChild(image);

    return element;
}
document.body.appendChild(component());
