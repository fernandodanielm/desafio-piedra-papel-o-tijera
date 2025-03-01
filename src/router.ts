type RouterPath = {
    pathRegex: RegExp;
    render: () => HTMLElement; // Eliminar goTo de los parámetros
  };
  
  const routes: RouterPath[] = [
    {
      pathRegex: /^\/$/,
      render: () => document.createElement('welcome-page'),
    },
    {
      pathRegex: /^\/instructions$/,
      render: () => document.createElement('instructions-page'),
    },
    {
      pathRegex: /^\/play$/,
      render: () => document.createElement('play-page'),
    },
    {
      pathRegex: /^\/result$/,
      render: () => document.createElement('result-page'),
    },
    // ... otras rutas
  ];
  
  function goTo(path: string) {
    window.history.pushState({}, "", path);
    renderPath(path);
  }
  
  // Exponer la función goTo globalmente
  (window as any).goTo = goTo;
  
  function renderPath(path: string): void {
    const route = routes.find((route) => route.pathRegex.test(path));
  
    if (route) {
      const app = document.getElementById("app");
      if (app) {
        app.innerHTML = "";
        app.appendChild(route.render()); // Llamar a render sin parámetros
      }
    } else {
      console.warn(`El path '${path}' no fue encontrado.`);
    }
  }
  
  function getCleanPathFromURL() {
    const basePath = '/desafio-piedra-papel-o-tijera';
    const fullPath = window.location.pathname;
  
    if (fullPath.startsWith(basePath)) {
      return fullPath.replace(basePath, '') || '/';
    }
  
    return fullPath;
  }
  
  export function initRouter(): void {
    const initialPath = getCleanPathFromURL();
    renderPath(initialPath);
  }



  
