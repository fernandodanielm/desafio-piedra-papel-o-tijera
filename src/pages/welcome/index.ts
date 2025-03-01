import { state, Play } from "../../state";
import backgroundImage from "../../assets/piedrapapelotijera.jpg";


export class Welcome extends HTMLElement {
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
                    .welcome-container {
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
                        <h1>Papel ó</h1>
                        <h1>Tijera</h1>
                    </div>
                    <button id="start-button">Empezar</button>
                </div>
            `;
            const startButton = this.shadow.querySelector('#start-button');
            if (startButton) {
                startButton.addEventListener('click', () => {
                    (window as any).goTo('/instructions');
                })
            }
        }
    }
}
customElements.define('welcome-page', Welcome);