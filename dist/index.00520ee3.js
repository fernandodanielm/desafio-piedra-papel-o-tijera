// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cAA9x":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "97e5feae00520ee3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"cUUFz":[function(require,module,exports,__globalThis) {
var _router = require("./router");
var _index = require("./pages/welcome/index");
var _index1 = require("./pages/instructions/index");
var _index2 = require("./pages/play/index");
var _index3 = require("./pages/result/index");
(0, _router.initRouter)();

},{"./router":"DMbGh","./pages/welcome/index":"5UaaE","./pages/instructions/index":"hNbnm","./pages/play/index":"djXbX","./pages/result/index":"dc4bK"}],"DMbGh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
const routes = [
    {
        pathRegex: /^\/$/,
        render: ({ goTo })=>document.createElement('welcome-page')
    },
    {
        pathRegex: /^\/instructions$/,
        render: ({ goTo })=>document.createElement('instructions-page')
    },
    {
        pathRegex: /^\/play$/,
        render: ({ goTo })=>document.createElement('play-page')
    },
    {
        pathRegex: /^\/result$/,
        render: ({ goTo })=>document.createElement('result-page')
    },
    {
        pathRegex: /^\/desafio-piedra-papel-o-tijera\/?$/,
        render: ({ goTo })=>document.createElement('desafio-page')
    }
];
function goTo(path) {
    window.history.pushState({}, "", path);
    renderPath(path);
}
function renderPath(path) {
    const route = routes.find((route)=>route.pathRegex.test(path));
    if (route) {
        const app = document.getElementById("app");
        if (app) {
            app.innerHTML = "";
            app.appendChild(route.render({
                goTo
            }));
        }
    } else console.warn(`El path '${path}' no fue encontrado.`);
}
function getCleanPathFromURL() {
    // Define el basePath que se usará en producción
    const basePath = '/desafio-piedra-papel-o-tijera';
    // Obtiene el pathname completo
    const fullPath = window.location.pathname;
    // Verifica si el pathname comienza con el basePath
    if (fullPath.startsWith(basePath)) // Elimina el basePath del pathname
    return fullPath.replace(basePath, '') || '/'; // Devuelve '/' si queda vacío
    // Si no hay basePath, devuelve el pathname limpio
    return fullPath;
}
function initRouter() {
    const initialPath = getCleanPathFromURL();
    renderPath(initialPath);
    // Escuchar el evento 'goTo' en el elemento 'app'
    const app = document.getElementById("app");
    if (app) app.addEventListener('goTo', (event)=>{
        const { path } = event.detail;
        goTo(path); // Llama a la función goTo con la nueva ruta
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cUP5u"}],"cUP5u":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5UaaE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Welcome", ()=>Welcome);
var _piedrapapelotijeraJpg = require("../../assets/piedrapapelotijera.jpg");
var _piedrapapelotijeraJpgDefault = parcelHelpers.interopDefault(_piedrapapelotijeraJpg);
class Welcome extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });
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
                        background-image: url(${0, _piedrapapelotijeraJpgDefault.default});
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
            `;
            const startButton = this.shadow.querySelector('#start-button');
            if (startButton) startButton.addEventListener('click', ()=>{
                const event = new CustomEvent('goTo', {
                    detail: {
                        path: '/instructions'
                    },
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(event);
            });
        }
    }
}
customElements.define('welcome-page', Welcome);

},{"../../assets/piedrapapelotijera.jpg":"Oepv2","@parcel/transformer-js/src/esmodule-helpers.js":"cUP5u"}],"Oepv2":[function(require,module,exports,__globalThis) {
module.exports = require("11a5c738298a6a5b").getBundleURL('d2ycM') + "piedrapapelotijera.882ca2b5.jpg" + "?" + Date.now();

},{"11a5c738298a6a5b":"bldgi"}],"bldgi":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hNbnm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InstructionsPage", ()=>InstructionsPage);
var _piedrapapelotijeraJpg = require("../../assets/piedrapapelotijera.jpg");
var _piedrapapelotijeraJpgDefault = parcelHelpers.interopDefault(_piedrapapelotijeraJpg);
class InstructionsPage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });
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
                        background-image: url(${0, _piedrapapelotijeraJpgDefault.default});
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
            `;
            const playButton = this.shadow.querySelector('#play-button');
            if (playButton) playButton.addEventListener('click', ()=>{
                const event = new CustomEvent('goTo', {
                    detail: {
                        path: '/play'
                    },
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(event);
            });
        }
    }
}
customElements.define('instructions-page', InstructionsPage);

},{"../../assets/piedrapapelotijera.jpg":"Oepv2","@parcel/transformer-js/src/esmodule-helpers.js":"cUP5u"}],"djXbX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayPage", ()=>PlayPage);
var _state = require("../../state");
var _piedraPng = require("../../assets/piedra.png");
var _piedraPngDefault = parcelHelpers.interopDefault(_piedraPng);
var _tijeraPng = require("../../assets/tijera.png");
var _tijeraPngDefault = parcelHelpers.interopDefault(_tijeraPng);
var _papelPng = require("../../assets/papel.png");
var _papelPngDefault = parcelHelpers.interopDefault(_papelPng);
var _piedrapapelotijeraJpg = require("../../assets/piedrapapelotijera.jpg");
var _piedrapapelotijeraJpgDefault = parcelHelpers.interopDefault(_piedrapapelotijeraJpg);
class PlayPage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });
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
                        background-image: url(${0, _piedrapapelotijeraJpgDefault.default});
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
                        <button id="piedra"><img src="${0, _piedraPngDefault.default}" alt="Piedra"></button>
                        <button id="papel"><img src="${0, _papelPngDefault.default}" alt="Papel"></button>
                        <button id="tijera"><img src="${0, _tijeraPngDefault.default}" alt="Tijera"></button>
                    </div>
                    <div class="computer-move" id="computer-move"></div>
                </div>
            `;
            const moves = shadowRoot.querySelector(".moves");
            const timerElement = shadowRoot.querySelector("#timer");
            const timerContainer = shadowRoot.querySelector(".timer");
            const computerMoveDiv = shadowRoot.querySelector("#computer-move");
            let timeLeft = 3;
            timerContainer.style.animation = `countdown ${timeLeft}s linear forwards`;
            const timerInterval = setInterval(()=>{
                timeLeft--;
                if (timerElement) timerElement.textContent = timeLeft.toString();
                if (timeLeft === 0) {
                    clearInterval(timerInterval);
                    if (moves) moves.style.display = 'none';
                }
            }, 1000);
            moves?.addEventListener("click", (e)=>{
                const target = e.target.closest('button');
                if (target) {
                    clearInterval(timerInterval);
                    const buttons = shadowRoot.querySelectorAll(".moves button");
                    buttons.forEach((button)=>{
                        const img = button.querySelector('img');
                        if (button === target) img?.classList.add('selected');
                        else img?.classList.add('unselected');
                    });
                    const computerMove = (0, _state.state).computerPlay();
                    let computerImage = '';
                    if (computerMove === 'piedra') computerImage = (0, _piedraPngDefault.default);
                    else if (computerMove === 'papel') computerImage = (0, _papelPngDefault.default);
                    else computerImage = (0, _tijeraPngDefault.default);
                    computerMoveDiv.innerHTML = `<img src="${computerImage}" alt="${computerMove}" style="width: 50px; height: 50px;">`;
                    setTimeout(()=>{
                        (0, _state.state).setMove(target.id, computerMove);
                        const event = new CustomEvent('goTo', {
                            detail: {
                                path: '/result'
                            },
                            bubbles: true,
                            composed: true
                        });
                        this.dispatchEvent(event);
                    }, 1000);
                }
            });
        }
    }
}
customElements.define('play-page', PlayPage);

},{"../../state":"byHcS","../../assets/piedra.png":"fnFt5","../../assets/tijera.png":"3CSPU","../../assets/papel.png":"lTBRl","../../assets/piedrapapelotijera.jpg":"Oepv2","@parcel/transformer-js/src/esmodule-helpers.js":"cUP5u"}],"byHcS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    currentGame: {
        data: {
            currentGame: {
                computerPlay: "piedra",
                myPlay: "piedra"
            },
            history: [],
            statistics: {
                wins: 0,
                losses: 0,
                draws: 0
            },
            gameOver: false,
            readyForNextRound: false
        }
    },
    listeners: [],
    getState () {
        return this;
    },
    setState (newState) {
        this.currentGame = newState.currentGame;
        for (const cb of this.listeners)cb(newState);
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (myMove, computerMove) {
        const currentState = this.getState();
        let wins = currentState.currentGame.data.statistics.wins;
        let losses = currentState.currentGame.data.statistics.losses;
        let draws = currentState.currentGame.data.statistics.draws;
        if (myMove === computerMove) draws++;
        else if (myMove === "piedra" && computerMove === "tijera" || myMove === "tijera" && computerMove === "papel" || myMove === "papel" && computerMove === "piedra") wins++;
        else losses++;
        const newState = {
            ...currentState,
            currentGame: {
                data: {
                    ...currentState.currentGame.data,
                    currentGame: {
                        myPlay: myMove,
                        computerPlay: computerMove
                    },
                    statistics: {
                        wins,
                        losses,
                        draws
                    }
                }
            }
        };
        this.setState(newState);
    },
    computerPlay () {
        const moves = [
            "piedra",
            "papel",
            "tijera"
        ];
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        return randomMove;
    },
    resetGame () {
        const initialState = {
            currentGame: {
                data: {
                    currentGame: {
                        computerPlay: "piedra",
                        myPlay: "piedra"
                    },
                    history: [],
                    statistics: {
                        wins: 0,
                        losses: 0,
                        draws: 0
                    },
                    gameOver: false,
                    readyForNextRound: false
                }
            },
            listeners: this.listeners,
            getState: this.getState,
            setState: this.setState,
            subscribe: this.subscribe,
            setMove: this.setMove,
            computerPlay: this.computerPlay,
            resetGame: this.resetGame
        };
        this.setState(initialState);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cUP5u"}],"fnFt5":[function(require,module,exports,__globalThis) {
module.exports = require("e2fe0d1c2e1c4646").getBundleURL('d2ycM') + "piedra.251e9617.png" + "?" + Date.now();

},{"e2fe0d1c2e1c4646":"bldgi"}],"3CSPU":[function(require,module,exports,__globalThis) {
module.exports = require("fe4981b22584e3e5").getBundleURL('d2ycM') + "tijera.bb105e31.png" + "?" + Date.now();

},{"fe4981b22584e3e5":"bldgi"}],"lTBRl":[function(require,module,exports,__globalThis) {
module.exports = require("8fe57121064ffc77").getBundleURL('d2ycM') + "papel.35f7c843.png" + "?" + Date.now();

},{"8fe57121064ffc77":"bldgi"}],"dc4bK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResultPage", ()=>ResultPage);
var _state = require("../../state");
var _piedrapapelotijeraJpg = require("../../assets/piedrapapelotijera.jpg");
var _piedrapapelotijeraJpgDefault = parcelHelpers.interopDefault(_piedrapapelotijeraJpg);
class ResultPage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: 'open'
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const shadowRoot = this.shadow;
        const currentState = (0, _state.state).getState();
        const { wins, losses, draws } = currentState.currentGame.data.statistics;
        const { myPlay, computerPlay } = currentState.currentGame.data.currentGame;
        // Determina el estado del juego
        let message = "Es un empate.";
        let starColor = "yellow"; // Default yellow for draw
        if (myPlay === computerPlay) {
            message = "Es un empate.";
            starColor = "yellow";
        } else if (myPlay === "piedra" && computerPlay === "tijera" || myPlay === "tijera" && computerPlay === "papel" || myPlay === "papel" && computerPlay === "piedra") {
            message = "\xa1Ganaste!";
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
                        background-image: url(${0, _piedrapapelotijeraJpgDefault.default});
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
            if (playAgainButton) playAgainButton.addEventListener("click", ()=>{
                const event = new CustomEvent("goTo", {
                    detail: {
                        path: "/play"
                    },
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(event);
            });
        }
    }
}
customElements.define("result-page", ResultPage);

},{"../../state":"byHcS","../../assets/piedrapapelotijera.jpg":"Oepv2","@parcel/transformer-js/src/esmodule-helpers.js":"cUP5u"}]},["cAA9x","cUUFz"], "cUUFz", "parcelRequire94c2")

//# sourceMappingURL=index.00520ee3.js.map
