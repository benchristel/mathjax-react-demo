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
        this
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
})({"lC5vx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "723fa4a1b9c1cc99";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jFy3U":[function(require,module,exports) {
!function() {
    "use strict";
    var t, e, r, a, o, i = {
        306: function(t, e) {
            e.q = void 0, e.q = "3.2.2";
        },
        236: function(t, e, r) {
            var a, o = this && this.__extends || (a = function(t, e) {
                return a = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }, a(t, e);
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                function r() {
                    this.constructor = t;
                }
                a(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
            }), i = this && this.__read || function(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var a, o, i = r.call(t), n = [];
                try {
                    for(; (void 0 === e || e-- > 0) && !(a = i.next()).done;)n.push(a.value);
                } catch (t1) {
                    o = {
                        error: t1
                    };
                } finally{
                    try {
                        a && !a.done && (r = i.return) && r.call(i);
                    } finally{
                        if (o) throw o.error;
                    }
                }
                return n;
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MathML = void 0;
            var n = r(309), s = r(77), l = r(898), c = r(794), h = r(332), p = function(t) {
                function e(e) {
                    void 0 === e && (e = {});
                    var r = this, a = i((0, s.separateOptions)(e, c.FindMathML.OPTIONS, h.MathMLCompile.OPTIONS), 3), o = a[0], n = a[1], p = a[2];
                    return (r = t.call(this, o) || this).findMathML = r.options.FindMathML || new c.FindMathML(n), r.mathml = r.options.MathMLCompile || new h.MathMLCompile(p), r.mmlFilters = new l.FunctionList, r;
                }
                return o(e, t), e.prototype.setAdaptor = function(e) {
                    t.prototype.setAdaptor.call(this, e), this.findMathML.adaptor = e, this.mathml.adaptor = e;
                }, e.prototype.setMmlFactory = function(e) {
                    t.prototype.setMmlFactory.call(this, e), this.mathml.setMmlFactory(e);
                }, Object.defineProperty(e.prototype, "processStrings", {
                    get: function() {
                        return !1;
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.compile = function(t, e) {
                    var r = t.start.node;
                    if (!r || !t.end.node || this.options.forceReparse || "#text" === this.adaptor.kind(r)) {
                        var a = this.executeFilters(this.preFilters, t, e, (t.math || "<math></math>").trim()), o = this.checkForErrors(this.adaptor.parse(a, "text/" + this.options.parseAs)), i = this.adaptor.body(o);
                        1 !== this.adaptor.childNodes(i).length && this.error("MathML must consist of a single element"), r = this.adaptor.remove(this.adaptor.firstChild(i)), "math" !== this.adaptor.kind(r).replace(/^[a-z]+:/, "") && this.error("MathML must be formed by a <math> element, not <" + this.adaptor.kind(r) + ">");
                    }
                    return r = this.executeFilters(this.mmlFilters, t, e, r), this.executeFilters(this.postFilters, t, e, this.mathml.compile(r));
                }, e.prototype.checkForErrors = function(t) {
                    var e = this.adaptor.tags(this.adaptor.body(t), "parsererror")[0];
                    return e && ("" === this.adaptor.textContent(e) && this.error("Error processing MathML"), this.options.parseError.call(this, e)), t;
                }, e.prototype.error = function(t) {
                    throw new Error(t);
                }, e.prototype.findMath = function(t) {
                    return this.findMathML.findMath(t);
                }, e.NAME = "MathML", e.OPTIONS = (0, s.defaultOptions)({
                    parseAs: "html",
                    forceReparse: !1,
                    FindMathML: null,
                    MathMLCompile: null,
                    parseError: function(t) {
                        this.error(this.adaptor.textContent(t).replace(/\n.*/g, ""));
                    }
                }, n.AbstractInputJax.OPTIONS), e;
            }(n.AbstractInputJax);
            e.MathML = p;
        },
        794: function(t, e, r) {
            var a, o = this && this.__extends || (a = function(t, e) {
                return a = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }, a(t, e);
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                function r() {
                    this.constructor = t;
                }
                a(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
            }), i = this && this.__values || function(t) {
                var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], a = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && a >= t.length && (t = void 0), {
                            value: t && t[a++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.FindMathML = void 0;
            var n = r(649), s = "http://www.w3.org/1998/Math/MathML", l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this;
                }
                return o(e, t), e.prototype.findMath = function(t) {
                    var e = new Set;
                    this.findMathNodes(t, e), this.findMathPrefixed(t, e);
                    var r = this.adaptor.root(this.adaptor.document);
                    return "html" === this.adaptor.kind(r) && 0 === e.size && this.findMathNS(t, e), this.processMath(e);
                }, e.prototype.findMathNodes = function(t, e) {
                    var r, a;
                    try {
                        for(var o = i(this.adaptor.tags(t, "math")), n = o.next(); !n.done; n = o.next()){
                            var s = n.value;
                            e.add(s);
                        }
                    } catch (t1) {
                        r = {
                            error: t1
                        };
                    } finally{
                        try {
                            n && !n.done && (a = o.return) && a.call(o);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }, e.prototype.findMathPrefixed = function(t, e) {
                    var r, a, o, n, l = this.adaptor.root(this.adaptor.document);
                    try {
                        for(var c = i(this.adaptor.allAttributes(l)), h = c.next(); !h.done; h = c.next()){
                            var p = h.value;
                            if ("xmlns:" === p.name.substr(0, 6) && p.value === s) {
                                var u = p.name.substr(6);
                                try {
                                    for(var d = (o = void 0, i(this.adaptor.tags(t, u + ":math"))), f = d.next(); !f.done; f = d.next()){
                                        var M = f.value;
                                        e.add(M);
                                    }
                                } catch (t1) {
                                    o = {
                                        error: t1
                                    };
                                } finally{
                                    try {
                                        f && !f.done && (n = d.return) && n.call(d);
                                    } finally{
                                        if (o) throw o.error;
                                    }
                                }
                            }
                        }
                    } catch (t2) {
                        r = {
                            error: t2
                        };
                    } finally{
                        try {
                            h && !h.done && (a = c.return) && a.call(c);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }, e.prototype.findMathNS = function(t, e) {
                    var r, a;
                    try {
                        for(var o = i(this.adaptor.tags(t, "math", s)), n = o.next(); !n.done; n = o.next()){
                            var l = n.value;
                            e.add(l);
                        }
                    } catch (t1) {
                        r = {
                            error: t1
                        };
                    } finally{
                        try {
                            n && !n.done && (a = o.return) && a.call(o);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }, e.prototype.processMath = function(t) {
                    var e, r, a = [];
                    try {
                        for(var o = i(Array.from(t)), n = o.next(); !n.done; n = o.next()){
                            var s = n.value, l = "block" === this.adaptor.getAttribute(s, "display") || "display" === this.adaptor.getAttribute(s, "mode"), c = {
                                node: s,
                                n: 0,
                                delim: ""
                            }, h = {
                                node: s,
                                n: 0,
                                delim: ""
                            };
                            a.push({
                                math: this.adaptor.outerHTML(s),
                                start: c,
                                end: h,
                                display: l
                            });
                        }
                    } catch (t1) {
                        e = {
                            error: t1
                        };
                    } finally{
                        try {
                            n && !n.done && (r = o.return) && r.call(o);
                        } finally{
                            if (e) throw e.error;
                        }
                    }
                    return a;
                }, e.OPTIONS = {}, e;
            }(n.AbstractFindMath);
            e.FindMathML = l;
        },
        332: function(t, e, r) {
            var a = this && this.__assign || function() {
                return a = Object.assign || function(t) {
                    for(var e, r = 1, a = arguments.length; r < a; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }, a.apply(this, arguments);
            }, o = this && this.__createBinding || (Object.create ? function(t, e, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(e, r);
                o && !("get" in o ? !e.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return e[r];
                    }
                }), Object.defineProperty(t, a, o);
            } : function(t, e, r, a) {
                void 0 === a && (a = r), t[a] = e[r];
            }), i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                });
            } : function(t, e) {
                t.default = e;
            }), n = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for(var r in t)"default" !== r && Object.prototype.hasOwnProperty.call(t, r) && o(e, t, r);
                return i(e, t), e;
            }, s = this && this.__values || function(t) {
                var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], a = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && a >= t.length && (t = void 0), {
                            value: t && t[a++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MathMLCompile = void 0;
            var l = r(921), c = r(77), h = n(r(29)), p = function() {
                function t(t) {
                    void 0 === t && (t = {});
                    var e = this.constructor;
                    this.options = (0, c.userOptions)((0, c.defaultOptions)({}, e.OPTIONS), t);
                }
                return t.prototype.setMmlFactory = function(t) {
                    this.factory = t;
                }, t.prototype.compile = function(t) {
                    var e = this.makeNode(t);
                    return e.verifyTree(this.options.verify), e.setInheritedAttributes({}, !1, 0, !1), e.walkTree(this.markMrows), e;
                }, t.prototype.makeNode = function(t) {
                    var e, r, a = this.adaptor, o = !1, i = a.kind(t).replace(/^.*:/, ""), n = a.getAttribute(t, "data-mjx-texclass") || "";
                    n && (n = this.filterAttribute("data-mjx-texclass", n) || "");
                    var c = n && "mrow" === i ? "TeXAtom" : i;
                    try {
                        for(var h = s(this.filterClassList(a.allClasses(t))), p = h.next(); !p.done; p = h.next()){
                            var u = p.value;
                            u.match(/^MJX-TeXAtom-/) && "mrow" === i ? (n = u.substr(12), c = "TeXAtom") : "MJX-fixedlimits" === u && (o = !0);
                        }
                    } catch (t1) {
                        e = {
                            error: t1
                        };
                    } finally{
                        try {
                            p && !p.done && (r = h.return) && r.call(h);
                        } finally{
                            if (e) throw e.error;
                        }
                    }
                    this.factory.getNodeClass(c) || this.error('Unknown node type "' + c + '"');
                    var d = this.factory.create(c);
                    return "TeXAtom" !== c || "OP" !== n || o || (d.setProperty("movesupsub", !0), d.attributes.setInherited("movablelimits", !0)), n && (d.texClass = l.TEXCLASS[n], d.setProperty("texClass", d.texClass)), this.addAttributes(d, t), this.checkClass(d, t), this.addChildren(d, t), d;
                }, t.prototype.addAttributes = function(t, e) {
                    var r, a, o = !1;
                    try {
                        for(var i = s(this.adaptor.allAttributes(e)), n = i.next(); !n.done; n = i.next()){
                            var l = n.value, c = l.name, h = this.filterAttribute(c, l.value);
                            if (null !== h && "xmlns" !== c) {
                                if ("data-mjx-" === c.substr(0, 9)) switch(c.substr(9)){
                                    case "alternate":
                                        t.setProperty("variantForm", !0);
                                        break;
                                    case "variant":
                                        t.attributes.set("mathvariant", h), o = !0;
                                        break;
                                    case "smallmatrix":
                                        t.setProperty("scriptlevel", 1), t.setProperty("useHeight", !1);
                                        break;
                                    case "accent":
                                        t.setProperty("mathaccent", "true" === h);
                                        break;
                                    case "auto-op":
                                        t.setProperty("autoOP", "true" === h);
                                        break;
                                    case "script-align":
                                        t.setProperty("scriptalign", h);
                                }
                                else if ("class" !== c) {
                                    var p = h.toLowerCase();
                                    "true" === p || "false" === p ? t.attributes.set(c, "true" === p) : o && "mathvariant" === c || t.attributes.set(c, h);
                                }
                            }
                        }
                    } catch (t1) {
                        r = {
                            error: t1
                        };
                    } finally{
                        try {
                            n && !n.done && (a = i.return) && a.call(i);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }, t.prototype.filterAttribute = function(t, e) {
                    return e;
                }, t.prototype.filterClassList = function(t) {
                    return t;
                }, t.prototype.addChildren = function(t, e) {
                    var r, a;
                    if (0 !== t.arity) {
                        var o = this.adaptor;
                        try {
                            for(var i = s(o.childNodes(e)), n = i.next(); !n.done; n = i.next()){
                                var l = n.value, c = o.kind(l);
                                if ("#comment" !== c) {
                                    if ("#text" === c) this.addText(t, l);
                                    else if (t.isKind("annotation-xml")) t.appendChild(this.factory.create("XML").setXML(l, o));
                                    else {
                                        var h = t.appendChild(this.makeNode(l));
                                        0 === h.arity && o.childNodes(l).length && (this.options.fixMisplacedChildren ? this.addChildren(t, l) : h.mError("There should not be children for " + h.kind + " nodes", this.options.verify, !0));
                                    }
                                }
                            }
                        } catch (t1) {
                            r = {
                                error: t1
                            };
                        } finally{
                            try {
                                n && !n.done && (a = i.return) && a.call(i);
                            } finally{
                                if (r) throw r.error;
                            }
                        }
                    }
                }, t.prototype.addText = function(t, e) {
                    var r = this.adaptor.value(e);
                    (t.isToken || t.getProperty("isChars")) && t.arity ? (t.isToken && (r = h.translate(r), r = this.trimSpace(r)), t.appendChild(this.factory.create("text").setText(r))) : r.match(/\S/) && this.error('Unexpected text node "' + r + '"');
                }, t.prototype.checkClass = function(t, e) {
                    var r, a, o = [];
                    try {
                        for(var i = s(this.filterClassList(this.adaptor.allClasses(e))), n = i.next(); !n.done; n = i.next()){
                            var l = n.value;
                            "MJX-" === l.substr(0, 4) ? "MJX-variant" === l ? t.setProperty("variantForm", !0) : "MJX-TeXAtom" !== l.substr(0, 11) && t.attributes.set("mathvariant", this.fixCalligraphic(l.substr(3))) : o.push(l);
                        }
                    } catch (t1) {
                        r = {
                            error: t1
                        };
                    } finally{
                        try {
                            n && !n.done && (a = i.return) && a.call(i);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                    o.length && t.attributes.set("class", o.join(" "));
                }, t.prototype.fixCalligraphic = function(t) {
                    return t.replace(/caligraphic/, "calligraphic");
                }, t.prototype.markMrows = function(t) {
                    if (t.isKind("mrow") && !t.isInferred && t.childNodes.length >= 2) {
                        var e = t.childNodes[0], r = t.childNodes[t.childNodes.length - 1];
                        e.isKind("mo") && e.attributes.get("fence") && e.attributes.get("stretchy") && r.isKind("mo") && r.attributes.get("fence") && r.attributes.get("stretchy") && (e.childNodes.length && t.setProperty("open", e.getText()), r.childNodes.length && t.setProperty("close", r.getText()));
                    }
                }, t.prototype.trimSpace = function(t) {
                    return t.replace(/[\t\n\r]/g, " ").replace(/^ +/, "").replace(/ +$/, "").replace(/  +/g, " ");
                }, t.prototype.error = function(t) {
                    throw new Error(t);
                }, t.OPTIONS = {
                    MmlFactory: null,
                    fixMisplacedChildren: !0,
                    verify: a({}, l.AbstractMmlNode.verifyDefaults),
                    translateEntities: !0
                }, t;
            }();
            e.MathMLCompile = p;
        },
        723: function(t, e) {
            MathJax._.components.global.isObject, MathJax._.components.global.combineConfig, MathJax._.components.global.combineDefaults, e.r8 = MathJax._.components.global.combineWithMathJax, MathJax._.components.global.MathJax;
        },
        649: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AbstractFindMath = MathJax._.core.FindMath.AbstractFindMath;
        },
        309: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.AbstractInputJax = MathJax._.core.InputJax.AbstractInputJax;
        },
        921: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS, e.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES, e.indentAttributes = MathJax._.core.MmlTree.MmlNode.indentAttributes, e.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode, e.AbstractMmlTokenNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode, e.AbstractMmlLayoutNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode, e.AbstractMmlBaseNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode, e.AbstractMmlEmptyNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode, e.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode, e.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode;
        },
        29: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.options = MathJax._.util.Entities.options, e.entities = MathJax._.util.Entities.entities, e.add = MathJax._.util.Entities.add, e.remove = MathJax._.util.Entities.remove, e.translate = MathJax._.util.Entities.translate, e.numeric = MathJax._.util.Entities.numeric;
        },
        898: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.FunctionList = MathJax._.util.FunctionList.FunctionList;
        },
        77: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isObject = MathJax._.util.Options.isObject, e.APPEND = MathJax._.util.Options.APPEND, e.REMOVE = MathJax._.util.Options.REMOVE, e.OPTIONS = MathJax._.util.Options.OPTIONS, e.Expandable = MathJax._.util.Options.Expandable, e.expandable = MathJax._.util.Options.expandable, e.makeArray = MathJax._.util.Options.makeArray, e.keys = MathJax._.util.Options.keys, e.copy = MathJax._.util.Options.copy, e.insert = MathJax._.util.Options.insert, e.defaultOptions = MathJax._.util.Options.defaultOptions, e.userOptions = MathJax._.util.Options.userOptions, e.selectOptions = MathJax._.util.Options.selectOptions, e.selectOptionsFromKeys = MathJax._.util.Options.selectOptionsFromKeys, e.separateOptions = MathJax._.util.Options.separateOptions, e.lookup = MathJax._.util.Options.lookup;
        }
    }, n = {};
    function s(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var r = n[t] = {
            exports: {}
        };
        return i[t].call(r.exports, r, r.exports, s), r.exports;
    }
    t = s(723), e = s(306), r = s(236), a = s(794), o = s(332), MathJax.loader && MathJax.loader.checkVersion("input/mml", e.q, "input"), (0, t.r8)({
        _: {
            input: {
                mathml_ts: r,
                mathml: {
                    FindMathML: a,
                    MathMLCompile: o
                }
            }
        }
    }), MathJax.startup && (MathJax.startup.registerConstructor("mml", r.MathML), MathJax.startup.useInput("mml")), MathJax.loader && MathJax.loader.pathFilters.add(function(t) {
        return t.name = t.name.replace(/\/util\/entities\/.*?\.js/, "/input/mml/entities.js"), !0;
    });
}();

},{}]},["lC5vx"], null, "parcelRequire01e0")

//# sourceMappingURL=mml.b9c1cc99.js.map
