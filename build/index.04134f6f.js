function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},a={},n=t.parcelRequire94c2;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire94c2=n),(0,n.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,a=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.04134f6f.js","8l2yq","piedrapapelotijera.a2838792.jpg","BohIV","piedra.2b6b2e59.png","4n4pf","tijera.4b8c96df.png","2FUzK","papel.7c3d639f.png"]'));const i=[{pathRegex:/^\/$/,render:()=>document.createElement("welcome-page")},{pathRegex:/^\/instructions$/,render:()=>document.createElement("instructions-page")},{pathRegex:/^\/play$/,render:()=>document.createElement("play-page")},{pathRegex:/^\/result$/,render:()=>document.createElement("result-page")}];function o(e){let t=i.find(t=>t.pathRegex.test(e));if(t){let e=document.getElementById("app");e&&(e.innerHTML="",e.appendChild(t.render()))}else console.warn(`El path '${e}' no fue encontrado.`)}window.goTo=function(e){window.history.pushState({},"",e),o(e)};var s={};s=new URL("piedrapapelotijera.a2838792.jpg",import.meta.url).toString();class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadow){this.shadow.innerHTML=`
                <style>
                    body {
                        background-color: white;
                    }
                    .welcome-container {
                        width: 375px;
                        height: 667px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(${e(s)});
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .title-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 36px;
                        text-align: center;
                        background: linear-gradient(to right, green, lightgreen);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-family: 'Arial Rounded MT Bold', sans-serif;
                    }
                    button {
                        width: 322px;
                        height: 87px;
                        border: none;
                        background: linear-gradient(to bottom, #2979FF, #2962FF);
                        color: white;
                        font-size: 24px;
                        margin-top: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: bold;
                    }
                    @media (min-width: 965px) {
                        .welcome-container {
                            width: 1280px;
                            height: 720px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                </style>
                <div class="welcome-container">
                    <div class="title-container">
                        <h1>Piedra</h1>
                        <h1>Papel \xf3</h1>
                        <h1>Tijera</h1>
                    </div>
                    <button id="start-button">Empezar</button>
                </div>
            `;let t=this.shadow.querySelector("#start-button");t&&t.addEventListener("click",()=>{window.goTo("/instructions")})}}}customElements.define("welcome-page",l);class d extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadow){this.shadow.innerHTML=`
                <style>
                    body {
                        background-color: white;
                    }
                    .instructions-container {
                        width: 375px;
                        height: 667px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(${e(s)});
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    h3 {
                        font-size: 24px;
                        text-align: center;
                        font-family: 'Arial Rounded MT Bold', sans-serif;
                        color: black;
                        padding: 20px;
                    }
                    button {
                        width: 322px;
                        height: 87px;
                        border: none;
                        background: linear-gradient(to bottom, #2979FF, #2962FF);
                        color: white;
                        font-size: 24px;
                        margin-top: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: bold;
                    }
                    @media (min-width: 965px) {
                        .instructions-container {
                            width: 1280px;
                            height: 720px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                </style>
                <div class="instructions-container">
                    <h3>Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
                    <button id="play-button">Jugar</button>
                </div>
            `;let t=this.shadow.querySelector("#play-button");t&&t.addEventListener("click",()=>{window.goTo("/play")})}}}customElements.define("instructions-page",d);const c={currentGame:{data:{currentGame:{computerPlay:"piedra",myPlay:"piedra"},history:[],statistics:{wins:0,losses:0,draws:0},gameOver:!1,readyForNextRound:!1}},listeners:[],getState(){return this},setState(e){for(let t of(this.currentGame=e.currentGame,this.listeners))t(e)},subscribe(e){this.listeners.push(e)},setMove(e,t){let r=this.getState(),a=r.currentGame.data.statistics.wins,n=r.currentGame.data.statistics.losses,i=r.currentGame.data.statistics.draws;e===t?i++:"piedra"===e&&"tijera"===t||"tijera"===e&&"papel"===t||"papel"===e&&"piedra"===t?a++:n++;let o={...r,currentGame:{data:{...r.currentGame.data,currentGame:{myPlay:e,computerPlay:t},statistics:{wins:a,losses:n,draws:i}}}};this.setState(o)},computerPlay(){let e=["piedra","papel","tijera"];return e[Math.floor(Math.random()*e.length)]},resetGame(){let e={currentGame:{data:{currentGame:{computerPlay:"piedra",myPlay:"piedra"},history:[],statistics:{wins:0,losses:0,draws:0},gameOver:!1,readyForNextRound:!1}},listeners:this.listeners,getState:this.getState,setState:this.setState,subscribe:this.subscribe,setMove:this.setMove,computerPlay:this.computerPlay,resetGame:this.resetGame};this.setState(e)}};var p={};p=new URL("piedra.2b6b2e59.png",import.meta.url).toString();var u={};u=new URL("tijera.4b8c96df.png",import.meta.url).toString();var m={};m=new URL("papel.7c3d639f.png",import.meta.url).toString();class h extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let t=this.shadow;if(t){t.innerHTML=`
                <style>
                    body {
                        background-color: white;
                    }
                    .play-container {
                        width: 375px;
                        height: 667px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(${e(s)});
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .moves {
                        display: flex;
                        gap: 20px;
                    }
                    .moves button {
                        border: none;
                        background: transparent;
                        padding: 0;
                        cursor: pointer;
                        transition: transform 0.3s ease, opacity 0.3s ease;
                    }
                    .moves button img {
                        width: 50px;
                        height: 50px;
                        pointer-events: none;
                    }
                    .selected {
                        transform: scale(1.5) translateY(-20px);
                    }
                    .unselected {
                        transform: scale(0.8);
                        opacity: 0.5;
                    }
                    .timer {
                        position: relative;
                        width: 100px;
                        height: 100px;
                        border: 10px solid black;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 20px;
                        box-sizing: border-box;
                    }
                    .timer span {
                        position: absolute;
                        color: black;
                        font-size: 24px;
                    }
                    @keyframes countdown {
                        0% {
                            border-color: black;
                        }
                        100% {
                            border-color: transparent;
                        }
                    }
                    .computer-move {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 20px;
                    }
                    @media (min-width: 965px) {
                        .play-container {
                            width: 1280px;
                            height: 720px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                </style>
                <div class="play-container">
                    <h1>Elige tu jugada</h1>
                    <div class="timer">
                        <span id="timer">3</span>
                    </div>
                    <div class="moves">
                        <button id="piedra"><img src="${e(p)}" alt="Piedra"></button>
                        <button id="papel"><img src="${e(m)}" alt="Papel"></button>
                        <button id="tijera"><img src="${e(u)}" alt="Tijera"></button>
                    </div>
                    <div class="computer-move" id="computer-move"></div>
                </div>
            `;let r=t.querySelector(".moves"),a=t.querySelector("#timer"),n=t.querySelector(".timer"),i=t.querySelector("#computer-move"),o=3;n.style.animation=`countdown ${o}s linear forwards`;let l=setInterval(()=>{o--,a&&(a.textContent=o.toString()),0===o&&(clearInterval(l),r&&(r.style.display="none"))},1e3);r?.addEventListener("click",r=>{let a=r.target.closest("button");if(a){clearInterval(l),t.querySelectorAll(".moves button").forEach(e=>{let t=e.querySelector("img");e===a?t?.classList.add("selected"):t?.classList.add("unselected")});let r=c.computerPlay(),n="";n="piedra"===r?e(p):"papel"===r?e(m):e(u),i.innerHTML=`<img src="${n}" alt="${r}" style="width: 50px; height: 50px;">`,setTimeout(()=>{c.setMove(a.id,r),window.goTo("/result")},1e3)}})}}}customElements.define("play-page",h);class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let t=this.shadow,r=c.getState(),{wins:a,losses:n,draws:i}=r.currentGame.data.statistics,{myPlay:o,computerPlay:l}=r.currentGame.data.currentGame,d="Es un empate.",p="yellow";if(o===l?(d="Es un empate.",p="yellow"):"piedra"===o&&"tijera"===l||"tijera"===o&&"papel"===l||"papel"===o&&"piedra"===l?(d="¡Ganaste!",p="green"):(d="Perdiste.",p="red"),t){t.innerHTML=`
                <style>
                    body {
                        background-color: white;
                    }
                    .result-container {
                        width: 375px;
                        height: 667px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(${e(s)});
                        background-size: cover;
                        background-repeat: no-repeat;
                        text-align: center;
                    }
                    .star {
                        position: relative;
                        display: inline-block;
                        color: ${p};
                        font-size: 50px;
                        margin-bottom: 20px;
                    }
                    .star:before, .star:after {
                        content: '\u{2605}';
                    }
                    h1, h2, p {
                        margin: 0;
                    }
                    h2 {
                        margin-top: 10px;
                    }
                    button {
                        width: 322px;
                        height: 87px;
                        border: none;
                        background: linear-gradient(to bottom, #2979FF, #2962FF);
                        color: white;
                        font-size: 24px;
                        margin-top: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: bold;
                    }
                    @media (min-width: 965px) {
                        .result-container {
                            width: 1280px;
                            height: 720px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                </style>
                <div class="result-container">
                    <div class="star"></div>
                    <h1>${d}</h1>
                    <h2>Resultados</h2>
                    <p>Tu jugada: ${o}</p>
                    <p>Jugada de la computadora: ${l}</p>
                    <p>Victorias: ${a}</p>
                    <p>Derrotas: ${n}</p>
                    <p>Empates: ${i}</p>
                    <button id="play-again-button">Volver a jugar</button>
                </div>
            `;let r=t.querySelector("#play-again-button");r&&r.addEventListener("click",()=>{window.goTo("/play")})}}}customElements.define("result-page",g),o(function(){let e="/desafio-piedra-papel-o-tijera",t=window.location.pathname;return t.startsWith(e)?t.replace(e,"")||"/":t}());
//# sourceMappingURL=index.04134f6f.js.map
