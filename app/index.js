// import './css/index.css'
// // import image from './img/test.png'
// import { cube } from './js/math.js'

// console.log("hello worldasd");
// const root = document.getElementById('root')
// root.innerHTML = `hello world! ${cube(5)}`

// var myImage = new Image();
// myImage.src = image;
// root.appendChild(myImage);


import React from "react";
import ReactDom from "react-dom";

// Babel 能够转换 JSX 语法
ReactDom.render(
    <h1>hello, world!</h1>,
    document.getElementById("root")
);

