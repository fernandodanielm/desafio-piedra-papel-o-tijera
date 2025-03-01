import { state, Play } from "../../state";
import piedraImage from "../../assets/piedra.png";
import tijeraImage from "../../assets/tijera.png";
import papelImage from "../../assets/papel.png";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";




export class PlayPage extends HTMLElement {
    shadow: ShadowRoot | null;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const shadowRoot = this.shadow;
        if (shadowRoot) {
            shadowRoot.innerHTML = `
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
                        background-image: url(${backgroundImage});
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
                        <button id="piedra"><img src="${piedraImage}" alt="Piedra"></button>
                        <button id="papel"><img src="${papelImage}" alt="Papel"></button>
                        <button id="tijera"><img src="${tijeraImage}" alt="Tijera"></button>
                    </div>
                    <div class="computer-move" id="computer-move"></div>
                </div>
            `;

            const moves = shadowRoot.querySelector(".moves") as HTMLElement | null;
            const timerElement = shadowRoot.querySelector("#timer") as HTMLElement;
            const timerContainer = shadowRoot.querySelector(".timer") as HTMLElement;
            const computerMoveDiv = shadowRoot.querySelector("#computer-move") as HTMLElement;

            let timeLeft = 3;
            timerContainer.style.animation = `countdown ${timeLeft}s linear forwards`;

            const timerInterval = setInterval(() => {
                timeLeft--;
                if (timerElement) {
                    timerElement.textContent = timeLeft.toString();
                }
                if (timeLeft === 0) {
                    clearInterval(timerInterval);
                    if (moves) {
                        moves.style.display = 'none';
                    }
                }
            }, 1000);

            moves?.addEventListener("click", (e) => {
                const target = (e.target as HTMLElement).closest('button') as HTMLButtonElement;
                if (target) {
                    clearInterval(timerInterval);
                    const buttons = shadowRoot.querySelectorAll(".moves button");
                    buttons.forEach(button => {
                        const img = button.querySelector('img');
                        if (button === target) {
                            img?.classList.add('selected');
                        } else {
                            img?.classList.add('unselected');
                        }
                    });

                    const computerMove = state.computerPlay();
                    let computerImage = '';
                    if (computerMove === 'piedra') {
                        computerImage = piedraImage;
                    } else if (computerMove === 'papel') {
                        computerImage = papelImage;
                    } else {
                        computerImage = tijeraImage;
                    }

                    computerMoveDiv.innerHTML = `<img src="${computerImage}" alt="${computerMove}" style="width: 50px; height: 50px;">`;

                    setTimeout(() => {
                        state.setMove(target.id as Play, computerMove);
                        (window as any).goTo('/result');
                      }, 1000);
                }
            });
        }
    }
}
customElements.define('play-page', PlayPage);