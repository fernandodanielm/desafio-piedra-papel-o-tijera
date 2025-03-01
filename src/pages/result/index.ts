import { state, Play } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";

export class ResultPage extends HTMLElement {
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
        const currentState = state.getState();
        const { wins, losses, draws } = currentState.currentGame.data.statistics;
        const { myPlay, computerPlay } = currentState.currentGame.data.currentGame;

        // Determina el estado del juego
        let message = "Es un empate.";
        let starColor = "yellow"; // Default yellow for draw

        if (myPlay === computerPlay) {
            message = "Es un empate.";
            starColor = "yellow";
        } else if (
            (myPlay === "piedra" && computerPlay === "tijera") ||
            (myPlay === "tijera" && computerPlay === "papel") ||
            (myPlay === "papel" && computerPlay === "piedra")
        ) {
            message = "¡Ganaste!";
            starColor = "green";
        } else {
            message = "Perdiste.";
            starColor = "red";
        }

        if (shadowRoot) {
            shadowRoot.innerHTML = `
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
                        background-image: url(${backgroundImage});
                        background-size: cover;
                        background-repeat: no-repeat;
                        text-align: center;
                    }
                    .star {
                        position: relative;
                        display: inline-block;
                        color: ${starColor};
                        font-size: 50px;
                        margin-bottom: 20px;
                    }
                    .star:before, .star:after {
                        content: '★';
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
                    <h1>${message}</h1>
                    <h2>Resultados</h2>
                    <p>Tu jugada: ${myPlay}</p>
                    <p>Jugada de la computadora: ${computerPlay}</p>
                    <p>Victorias: ${wins}</p>
                    <p>Derrotas: ${losses}</p>
                    <p>Empates: ${draws}</p>
                    <button id="play-again-button">Volver a jugar</button>
                </div>
            `;

            const playAgainButton = shadowRoot.querySelector("#play-again-button");
      if (playAgainButton) {
        playAgainButton.addEventListener("click", () => {
          (window as any).goTo("/play");
        });
            }
        }
    }
}
customElements.define("result-page", ResultPage);