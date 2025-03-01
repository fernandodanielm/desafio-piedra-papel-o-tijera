import { state } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg"

export class InstructionsPage extends HTMLElement {
    shadow: ShadowRoot | null;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadow) {
            this.shadow.innerHTML = `
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
                        background-image: url(${backgroundImage});
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
                    <h3>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
                    <button id="play-button">Jugar</button>
                </div>
            `;
            const playButton = this.shadow.querySelector('#play-button');
            if (playButton) {
                playButton.addEventListener('click', () => {
                    (window as any).goTo('/play');
                });
            }
        }
    }
}
customElements.define('instructions-page', InstructionsPage);