type Play = "piedra" | "papel" | "tijera";

type GameData = {
    currentGame: {
        computerPlay: Play;
        myPlay: Play;
    };
    history: never[];
    statistics: {
        wins: number;
        losses: number;
        draws: number;
    };
    gameOver: boolean;
    readyForNextRound: boolean;
};

type State = {
    currentGame: {
        data: GameData;
    };
    listeners: ((currentState: State) => void)[];
    getState: () => State;
    setState: (newState: State) => void;
    subscribe: (callback: (currentState: State) => void) => void;
    setMove: (myMove: Play, computerMove: Play) => void;
    computerPlay: () => Play;
    resetGame: () => void;
};

const state: State = {
    currentGame: {
        data: {
            currentGame: {
                computerPlay: "piedra",
                myPlay: "piedra",
            },
            history: [],
            statistics: {
                wins: 0,
                losses: 0,
                draws: 0,
            },
            gameOver: false,
            readyForNextRound: false,
        },
    },
    listeners: [],
    getState() {
        return this;
    },
    setState(newState: State) {
        this.currentGame = newState.currentGame;
        for (const cb of this.listeners) {
            cb(newState);
        }
    },
    subscribe(callback: (currentState: State) => void) {
        this.listeners.push(callback);
    },
    setMove(myMove: Play, computerMove: Play) {
        const currentState = this.getState();
        let wins = currentState.currentGame.data.statistics.wins;
        let losses = currentState.currentGame.data.statistics.losses;
        let draws = currentState.currentGame.data.statistics.draws;

        if (myMove === computerMove) {
            draws++;
        } else if (
            (myMove === "piedra" && computerMove === "tijera") ||
            (myMove === "tijera" && computerMove === "papel") ||
            (myMove === "papel" && computerMove === "piedra")
        ) {
            wins++;
        } else {
            losses++;
        }

        const newState = {
            ...currentState,
            currentGame: {
                data: {
                    ...currentState.currentGame.data,
                    currentGame: {
                        myPlay: myMove,
                        computerPlay: computerMove,
                    },
                    statistics: {
                        wins,
                        losses,
                        draws,
                    },
                },
            },
        };
        this.setState(newState);
    },
    computerPlay() {
        const moves: Play[] = ["piedra", "papel", "tijera"];
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        return randomMove;
    },
    resetGame() {
        const initialState: State = {
            currentGame: {
                data: {
                    currentGame: {
                        computerPlay: "piedra",
                        myPlay: "piedra",
                    },
                    history: [],
                    statistics: {
                        wins: 0,
                        losses: 0,
                        draws: 0,
                    },
                    gameOver: false,
                    readyForNextRound: false,
                },
            },
            listeners: this.listeners,
            getState: this.getState,
            setState: this.setState,
            subscribe: this.subscribe,
            setMove: this.setMove,
            computerPlay: this.computerPlay,
            resetGame: this.resetGame,
        };
        this.setState(initialState);
    },
};

export { state, Play };