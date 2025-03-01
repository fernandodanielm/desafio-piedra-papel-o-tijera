import { state, Play } from "./state"; // Importamos state y Play
import { initRouter } from "./router";
import { Welcome } from "./pages/welcome";
import { InstructionsPage } from "./pages/instructions";
import { PlayPage } from "./pages/play";
import { ResultPage } from "./pages/result";
import "./pages/welcome/index";
import "./pages/instructions/index";
import "./pages/play/index";
import "./pages/result/index";

initRouter();
