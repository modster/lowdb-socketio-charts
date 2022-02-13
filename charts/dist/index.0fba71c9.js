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
})({"jg8nR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5976371f0fba71c9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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

},{}],"6Fsu0":[function(require,module,exports) {
/**
 * @format
 * @name lightweight-charts
 * @module es
 * @todo integrate trading-vue charts
 */ /** @requires lightweight-charts */ var _lightweightCharts = require("lightweight-charts");
var _socketIoClient = require("socket.io-client");
const chart = _lightweightCharts.createChart(document.getElementById("container"));
const socket = _socketIoClient.io("http://localhost:3000/");
//const socket = io();
const lines = [
    {
        time: "2019-04-11",
        value: 80.01
    },
    {
        time: "2019-04-12",
        value: 96.63
    },
    {
        time: "2019-04-13",
        value: 76.64
    },
    {
        time: "2019-04-14",
        value: 81.89
    },
    {
        time: "2019-04-15",
        value: 74.43
    },
    {
        time: "2019-04-16",
        value: 80.01
    },
    {
        time: "2019-04-17",
        value: 96.63
    },
    {
        time: "2019-04-18",
        value: 76.64
    },
    {
        time: "2019-04-19",
        value: 81.89
    },
    {
        time: "2019-04-20",
        value: 74.43
    }, 
];
/** @event connect */ const lineSeries = chart.addLineSeries({
});
/** @event update */ /** sample line seris data */ lineSeries.setData(lines);
socket.on("connect", ()=>{
    console.log(socket.id);
    /**
   * @param arg
   */ socket.on("chart", (arg)=>{
        console.log(arg);
        lineSeries.update(arg);
    });
}); // socket.on("disconnect", () => {
 //   console.log("Chart Disconnected");
 // });
 // socket.on("data", () => {
 //   /* ... */
 // });
 // // client-side
 // socket.on("connect_error", (err) => {
 //   console.log(err instanceof Error); // true
 //   console.log(err.message); // not authorized
 //   console.log(err.data); // { content: "Please retry later" }
 // });
 // socket.on("disconnect", (reason) => {
 //   if (reason === "io server disconnect") {
 //     // the disconnection was initiated by the server, you need to reconnect manually
 //     socket.connect();
 //   }
 //   // else the socket will automatically try to reconnect
 // });

},{"lightweight-charts":"f897R","socket.io-client":"gcVn7"}],"f897R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorType", ()=>Pt
);
parcelHelpers.export(exports, "CrosshairMode", ()=>j
);
parcelHelpers.export(exports, "LasPriceAnimationMode", ()=>mt
);
parcelHelpers.export(exports, "LastPriceAnimationMode", ()=>mt
);
parcelHelpers.export(exports, "LineStyle", ()=>n
);
parcelHelpers.export(exports, "LineType", ()=>i
);
parcelHelpers.export(exports, "PriceLineSource", ()=>pt
);
parcelHelpers.export(exports, "PriceScaleMode", ()=>dt
);
parcelHelpers.export(exports, "TickMarkType", ()=>Ot
);
parcelHelpers.export(exports, "createChart", ()=>xs
);
parcelHelpers.export(exports, "isBusinessDay", ()=>It
);
parcelHelpers.export(exports, "isUTCTimestamp", ()=>jt
);
parcelHelpers.export(exports, "version", ()=>Ss
);
/*!
 * @license
 * TradingView Lightweight Charts v3.7.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */ var _coordinateSpace = require("fancy-canvas/coordinate-space");
var i, n;
function s(t, i) {
    var n1, s1 = ((n1 = {
    })[0] = [], n1[1] = [
        t.lineWidth,
        t.lineWidth
    ], n1[2] = [
        2 * t.lineWidth,
        2 * t.lineWidth
    ], n1[3] = [
        6 * t.lineWidth,
        6 * t.lineWidth
    ], n1[4] = [
        t.lineWidth,
        4 * t.lineWidth
    ], n1)[i];
    t.setLineDash(s1);
}
function h(t, i1, n2, s2) {
    t.beginPath();
    var h1 = t.lineWidth % 2 ? 0.5 : 0;
    t.moveTo(n2, i1 + h1), t.lineTo(s2, i1 + h1), t.stroke();
}
!function(t) {
    t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps";
}(i || (i = {
})), (function(t) {
    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
})(n || (n = {
}));
var r = function(t1, i2) {
    return r = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, i3) {
        t.__proto__ = i3;
    } || function(t, i4) {
        for(var n3 in i4)Object.prototype.hasOwnProperty.call(i4, n3) && (t[n3] = i4[n3]);
    }, r(t1, i2);
};
function e(t, i5) {
    if ("function" != typeof i5 && null !== i5) throw new TypeError("Class extends value " + String(i5) + " is not a constructor or null");
    function n4() {
        this.constructor = t;
    }
    r(t, i5), t.prototype = null === i5 ? Object.create(i5) : (n4.prototype = i5.prototype, new n4);
}
var u = function() {
    return u = Object.assign || function(t) {
        for(var i6, n5 = 1, s3 = arguments.length; n5 < s3; n5++)for(var h2 in i6 = arguments[n5])Object.prototype.hasOwnProperty.call(i6, h2) && (t[h2] = i6[h2]);
        return t;
    }, u.apply(this, arguments);
};
function a(t, i7, n6) {
    if (n6 || 2 === arguments.length) for(var s4, h3 = 0, r1 = i7.length; h3 < r1; h3++)!s4 && h3 in i7 || (s4 || (s4 = Array.prototype.slice.call(i7, 0, h3)), s4[h3] = i7[h3]);
    return t.concat(s4 || Array.prototype.slice.call(i7));
}
function o(t, i8) {
    if (!t) throw new Error("Assertion failed" + (i8 ? ": " + i8 : ""));
}
function l(t) {
    if (void 0 === t) throw new Error("Value is undefined");
    return t;
}
function f(t) {
    if (null === t) throw new Error("Value is null");
    return t;
}
function c(t) {
    return f(l(t));
}
function v(t) {
    for(var i9 = [], n7 = 1; n7 < arguments.length; n7++)i9[n7 - 1] = arguments[n7];
    for(var s5 = 0, h4 = i9; s5 < h4.length; s5++){
        var r2 = h4[s5];
        for(var e in r2)void 0 !== r2[e] && ("object" != typeof r2[e] || void 0 === t[e] ? t[e] = r2[e] : v(t[e], r2[e]));
    }
    return t;
}
function _(t) {
    return "number" == typeof t && isFinite(t);
}
function d(t) {
    return "number" == typeof t && t % 1 == 0;
}
function w(t) {
    return "string" == typeof t;
}
function M(t) {
    return "boolean" == typeof t;
}
function b(t) {
    var i10, n8, s6, h5 = t;
    if (!h5 || "object" != typeof h5) return h5;
    for(n8 in i10 = Array.isArray(h5) ? [] : {
    }, h5)h5.hasOwnProperty(n8) && (s6 = h5[n8], i10[n8] = s6 && "object" == typeof s6 ? b(s6) : s6);
    return i10;
}
function m(t) {
    return null !== t;
}
function p(t) {
    return null === t ? void 0 : t;
}
var g = function() {
    function t2() {
        this.t = [];
    }
    return t2.prototype.i = function(t) {
        this.t = t;
    }, t2.prototype.h = function(t, i11, n9, s7) {
        this.t.forEach(function(h6) {
            t.save(), h6.h(t, i11, n9, s7), t.restore();
        });
    }, t2;
}(), y = function() {
    function t3() {
    }
    return t3.prototype.h = function(t, i12, n10, s8) {
        t.save(), t.scale(i12, i12), this.u(t, n10, s8), t.restore();
    }, t3.prototype.o = function(t, i13, n11, s9) {
        t.save(), t.scale(i13, i13), this.l(t, n11, s9), t.restore();
    }, t3.prototype.l = function(t, i, n) {
    }, t3;
}(), k = function(t4) {
    function i14() {
        var i15 = null !== t4 && t4.apply(this, arguments) || this;
        return i15.v = null, i15;
    }
    return e(i14, t4), i14.prototype._ = function(t) {
        this.v = t;
    }, i14.prototype.u = function(t) {
        if (null !== this.v && null !== this.v.M) {
            var i16 = this.v.M, n12 = this.v, s10 = function(s12) {
                t.beginPath();
                for(var h7 = i16.to - 1; h7 >= i16.from; --h7){
                    var r3 = n12.m[h7];
                    t.moveTo(r3.p, r3.g), t.arc(r3.p, r3.g, s12, 0, 2 * Math.PI);
                }
                t.fill();
            };
            t.fillStyle = n12.k, s10(n12.C + 2), t.fillStyle = n12.N, s10(n12.C);
        }
    }, i14;
}(y);
function C() {
    return {
        m: [
            {
                p: 0,
                g: 0,
                S: 0,
                D: 0
            }
        ],
        N: "",
        k: "",
        C: 0,
        M: null
    };
}
var N = {
    from: 0,
    to: 1
}, x = function() {
    function t5(t, i17) {
        this.A = new g, this.T = [], this.B = [], this.L = !0, this.F = t, this.V = i17, this.A.i(this.T);
    }
    return t5.prototype.O = function(t6) {
        var i18 = this.F.W();
        i18.length !== this.T.length && (this.B = i18.map(C), this.T = this.B.map(function(t) {
            var i19 = new k;
            return i19._(t), i19;
        }), this.A.i(this.T)), this.L = !0;
    }, t5.prototype.P = function(t, i, n) {
        return this.L && (this.R(t), this.L = !1), this.A;
    }, t5.prototype.R = function(t) {
        var i20 = this, n13 = this.F.W(), s13 = this.V.I(), h8 = this.F.j();
        n13.forEach(function(n14, r) {
            var e1, u1 = i20.B[r], a1 = n14.q(s13);
            if (null !== a1 && n14.U()) {
                var o1 = f(n14.H());
                u1.N = a1.Y, u1.C = a1.C, u1.m[0].D = a1.D, u1.m[0].g = n14.$().K(a1.D, o1.X), u1.k = null !== (e1 = a1.Z) && void 0 !== e1 ? e1 : i20.F.J(u1.m[0].g / t), u1.m[0].S = s13, u1.m[0].p = h8.G(s13), u1.M = N;
            } else u1.M = null;
        });
    }, t5;
}(), S = function() {
    function t7(t) {
        this.tt = t;
    }
    return t7.prototype.h = function(t8, i21, n15, r) {
        if (null !== this.tt) {
            var e2 = this.tt.it.U, u2 = this.tt.nt.U;
            if (e2 || u2) {
                t8.save();
                var a2 = Math.round(this.tt.p * i21), o2 = Math.round(this.tt.g * i21), l1 = Math.ceil(this.tt.st * i21), f1 = Math.ceil(this.tt.ht * i21);
                t8.lineCap = "butt", e2 && a2 >= 0 && (t8.lineWidth = Math.floor(this.tt.it.rt * i21), t8.strokeStyle = this.tt.it.et, t8.fillStyle = this.tt.it.et, s(t8, this.tt.it.ut), (function(t, i22, n16, s14) {
                    t.beginPath();
                    var h9 = t.lineWidth % 2 ? 0.5 : 0;
                    t.moveTo(i22 + h9, n16), t.lineTo(i22 + h9, s14), t.stroke();
                })(t8, a2, 0, f1)), u2 && o2 >= 0 && (t8.lineWidth = Math.floor(this.tt.nt.rt * i21), t8.strokeStyle = this.tt.nt.et, t8.fillStyle = this.tt.nt.et, s(t8, this.tt.nt.ut), h(t8, o2, 0, l1)), t8.restore();
            }
        }
    }, t7;
}(), D = function() {
    function t9(t) {
        this.L = !0, this.at = {
            it: {
                rt: 1,
                ut: 0,
                et: "",
                U: !1
            },
            nt: {
                rt: 1,
                ut: 0,
                et: "",
                U: !1
            },
            st: 0,
            ht: 0,
            p: 0,
            g: 0
        }, this.ot = new S(this.at), this.lt = t;
    }
    return t9.prototype.O = function() {
        this.L = !0;
    }, t9.prototype.P = function(t, i) {
        return this.L && (this.R(), this.L = !1), this.ot;
    }, t9.prototype.R = function() {
        var t = this.lt.U(), i23 = f(this.lt.ft()), n17 = i23.vt().ct().crosshair, s15 = this.at;
        s15.nt.U = t && this.lt._t(i23), s15.it.U = t && this.lt.dt(), s15.nt.rt = n17.horzLine.width, s15.nt.ut = n17.horzLine.style, s15.nt.et = n17.horzLine.color, s15.it.rt = n17.vertLine.width, s15.it.ut = n17.vertLine.style, s15.it.et = n17.vertLine.color, s15.st = i23.wt(), s15.ht = i23.Mt(), s15.p = this.lt.bt(), s15.g = this.lt.gt();
    }, t9;
}(), A = {
    khaki: "#f0e68c",
    azure: "#f0ffff",
    aliceblue: "#f0f8ff",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gainsboro: "#dcdcdc",
    gray: "#808080",
    green: "#008000",
    honeydew: "#f0fff0",
    floralwhite: "#fffaf0",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lemonchiffon: "#fffacd",
    hotpink: "#ff69b4",
    lightyellow: "#ffffe0",
    greenyellow: "#adff2f",
    lightgoldenrodyellow: "#fafad2",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    lightcyan: "#e0ffff",
    magenta: "#f0f",
    maroon: "#800000",
    olive: "#808000",
    orange: "#ffa500",
    oldlace: "#fdf5e6",
    mediumblue: "#0000cd",
    transparent: "#0000",
    lime: "#0f0",
    lightpink: "#ffb6c1",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    midnightblue: "#191970",
    orchid: "#da70d6",
    mediumorchid: "#ba55d3",
    mediumturquoise: "#48d1cc",
    orangered: "#ff4500",
    royalblue: "#4169e1",
    powderblue: "#b0e0e6",
    red: "#f00",
    coral: "#ff7f50",
    turquoise: "#40e0d0",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    wheat: "#f5deb3",
    teal: "#008080",
    steelblue: "#4682b4",
    bisque: "#ffe4c4",
    aquamarine: "#7fffd4",
    aqua: "#0ff",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    springgreen: "#00ff7f",
    antiquewhite: "#faebd7",
    burlywood: "#deb887",
    brown: "#a52a2a",
    beige: "#f5f5dc",
    chocolate: "#d2691e",
    chartreuse: "#7fff00",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cadetblue: "#5f9ea0",
    tomato: "#ff6347",
    fuchsia: "#f0f",
    blue: "#00f",
    salmon: "#fa8072",
    blanchedalmond: "#ffebcd",
    slateblue: "#6a5acd",
    slategray: "#708090",
    thistle: "#d8bfd8",
    tan: "#d2b48c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    blueviolet: "#8a2be2",
    black: "#000",
    darkmagenta: "#8b008b",
    darkslateblue: "#483d8b",
    darkkhaki: "#bdb76b",
    darkorchid: "#9932cc",
    darkorange: "#ff8c00",
    darkgreen: "#006400",
    darkred: "#8b0000",
    dodgerblue: "#1e90ff",
    darkslategray: "#2f4f4f",
    dimgray: "#696969",
    deepskyblue: "#00bfff",
    firebrick: "#b22222",
    forestgreen: "#228b22",
    indigo: "#4b0082",
    ivory: "#fffff0",
    lavenderblush: "#fff0f5",
    feldspar: "#d19275",
    indianred: "#cd5c5c",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslateblue: "#8470ff",
    snow: "#fffafa",
    lightseagreen: "#20b2aa",
    lightsalmon: "#ffa07a",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    mediumpurple: "#9370d8",
    mediumaquamarine: "#66cdaa",
    skyblue: "#87ceeb",
    lavender: "#e6e6fa",
    lightsteelblue: "#b0c4de",
    mediumvioletred: "#c71585",
    mintcream: "#f5fffa",
    navajowhite: "#ffdead",
    navy: "#000080",
    olivedrab: "#6b8e23",
    palevioletred: "#d87093",
    violetred: "#d02090",
    yellow: "#ff0",
    yellowgreen: "#9acd32",
    lawngreen: "#7cfc00",
    pink: "#ffc0cb",
    paleturquoise: "#afeeee",
    palegoldenrod: "#eee8aa",
    darkolivegreen: "#556b2f",
    darkseagreen: "#8fbc8f",
    darkturquoise: "#00ced1",
    peachpuff: "#ffdab9",
    deeppink: "#ff1493",
    violet: "#ee82ee",
    palegreen: "#98fb98",
    mediumseagreen: "#3cb371",
    peru: "#cd853f",
    saddlebrown: "#8b4513",
    sandybrown: "#f4a460",
    rosybrown: "#bc8f8f",
    purple: "#800080",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    papayawhip: "#ffefd5",
    mediumslateblue: "#7b68ee",
    plum: "#dda0dd",
    mediumspringgreen: "#00fa9a"
};
function T(t) {
    return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function B(t) {
    return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(10000 * t) / 10000 : 0;
}
var L = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i, F = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i, E = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, V = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
function O(t) {
    var i24;
    if ((t = t.toLowerCase()) in A && (t = A[t]), i24 = V.exec(t) || E.exec(t)) return [
        T(parseInt(i24[1], 10)),
        T(parseInt(i24[2], 10)),
        T(parseInt(i24[3], 10)),
        B(i24.length < 5 ? 1 : parseFloat(i24[4]))
    ];
    if (i24 = F.exec(t)) return [
        T(parseInt(i24[1], 16)),
        T(parseInt(i24[2], 16)),
        T(parseInt(i24[3], 16)),
        1
    ];
    if (i24 = L.exec(t)) return [
        T(17 * parseInt(i24[1], 16)),
        T(17 * parseInt(i24[2], 16)),
        T(17 * parseInt(i24[3], 16)),
        1
    ];
    throw new Error("Cannot parse color: " + t);
}
function W(t) {
    var i25, n18 = O(t);
    return {
        yt: "rgb(" + n18[0] + ", " + n18[1] + ", " + n18[2] + ")",
        kt: (i25 = n18, 0.199 * i25[0] + 0.687 * i25[1] + 0.114 * i25[2] > 160 ? "black" : "white")
    };
}
function z(t, i26, n19, s16, h10, r4) {
    t.fillRect(i26 + r4, n19, s16 - 2 * r4, r4), t.fillRect(i26 + r4, n19 + h10 - r4, s16 - 2 * r4, r4), t.fillRect(i26, n19, r4, h10), t.fillRect(i26 + s16 - r4, n19, r4, h10);
}
function P(t, i27, n20) {
    t.save(), t.scale(i27, i27), n20(), t.restore();
}
function R(t, i28, n21, s17, h11, r5) {
    t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r5, t.fillRect(i28, n21, s17, h11), t.restore();
}
function I(t, i29, n22, s18, h12, r6, e3) {
    t.save(), t.globalCompositeOperation = "copy";
    var u3 = t.createLinearGradient(0, 0, 0, h12);
    u3.addColorStop(0, r6), u3.addColorStop(1, e3), t.fillStyle = u3, t.fillRect(i29, n22, s18, h12), t.restore();
}
var j, q = function() {
    function t10(t, i30) {
        this._(t, i30);
    }
    return t10.prototype._ = function(t, i31) {
        this.tt = t, this.Ct = i31;
    }, t10.prototype.h = function(t, i32, n23, s19, h13, r7) {
        if (this.tt.U) {
            t.font = i32.Nt;
            var e4 = this.tt.xt || !this.tt.St ? i32.Dt : 0, u4 = i32.At, a3 = i32.Tt, o3 = i32.Bt, l2 = i32.Lt, f2 = i32.Ft, c1 = this.tt.Et, v1 = Math.ceil(n23.Vt(t, c1)), _1 = i32.Ot, d1 = i32.Wt + a3 + o3, w1 = Math.ceil(0.5 * d1), M1 = u4 + v1 + l2 + f2 + e4, b1 = this.Ct.zt;
            this.Ct.Pt && (b1 = this.Ct.Pt);
            var m1, p1, g1 = (b1 = Math.round(b1)) - w1, y1 = g1 + d1, k1 = "right" === h13, C1 = k1 ? s19 : 0, N1 = Math.ceil(s19 * r7), x1 = C1;
            if (t.fillStyle = this.Ct.yt, t.lineWidth = 1, t.lineCap = "butt", c1) {
                k1 ? (m1 = C1 - e4, p1 = (x1 = C1 - M1) + f2) : (x1 = C1 + M1, m1 = C1 + e4, p1 = C1 + u4 + e4 + l2);
                var S1 = Math.max(1, Math.floor(r7)), D1 = Math.max(1, Math.floor(u4 * r7)), A1 = k1 ? N1 : 0, T1 = Math.round(g1 * r7), B1 = Math.round(x1 * r7), L1 = Math.round(b1 * r7) - Math.floor(0.5 * r7), F1 = L1 + S1 + (L1 - T1), E1 = Math.round(m1 * r7);
                t.save(), t.beginPath(), t.moveTo(A1, T1), t.lineTo(B1, T1), t.lineTo(B1, F1), t.lineTo(A1, F1), t.fill(), t.fillStyle = this.tt.Z, t.fillRect(k1 ? N1 - D1 : 0, T1, D1, F1 - T1), this.tt.xt && (t.fillStyle = this.Ct.et, t.fillRect(A1, L1, E1 - A1, S1)), t.textAlign = "left", t.fillStyle = this.Ct.et, P(t, r7, function() {
                    t.fillText(c1, p1, y1 - o3 - _1);
                }), t.restore();
            }
        }
    }, t10.prototype.Mt = function(t, i) {
        return this.tt.U ? t.Wt + t.Tt + t.Bt : 0;
    }, t10;
}(), U = function() {
    function t11(t) {
        this.Rt = {
            zt: 0,
            et: "#FFF",
            yt: "#000"
        }, this.It = {
            Et: "",
            U: !1,
            xt: !0,
            St: !1,
            Z: ""
        }, this.jt = {
            Et: "",
            U: !1,
            xt: !1,
            St: !0,
            Z: ""
        }, this.L = !0, this.qt = new (t || q)(this.It, this.Rt), this.Ut = new (t || q)(this.jt, this.Rt);
    }
    return t11.prototype.Et = function() {
        return this.It.Et;
    }, t11.prototype.zt = function() {
        return this.Ht(), this.Rt.zt;
    }, t11.prototype.O = function() {
        this.L = !0;
    }, t11.prototype.Mt = function(t, i33) {
        return void 0 === i33 && (i33 = !1), Math.max(this.qt.Mt(t, i33), this.Ut.Mt(t, i33));
    }, t11.prototype.Yt = function() {
        return this.Rt.Pt || 0;
    }, t11.prototype.Kt = function(t) {
        this.Rt.Pt = t;
    }, t11.prototype.$t = function() {
        return this.Ht(), this.It.U || this.jt.U;
    }, t11.prototype.Xt = function() {
        return this.Ht(), this.It.U;
    }, t11.prototype.P = function(t) {
        return this.Ht(), this.It.xt = this.It.xt && t.ct().drawTicks, this.jt.xt = this.jt.xt && t.ct().drawTicks, this.qt._(this.It, this.Rt), this.Ut._(this.jt, this.Rt), this.qt;
    }, t11.prototype.Zt = function() {
        return this.Ht(), this.qt._(this.It, this.Rt), this.Ut._(this.jt, this.Rt), this.Ut;
    }, t11.prototype.Ht = function() {
        this.L && (this.It.xt = !0, this.jt.xt = !1, this.Jt(this.It, this.jt, this.Rt));
    }, t11;
}(), H = function(t12) {
    function i34(i35, n24, s20) {
        var h14 = t12.call(this) || this;
        return h14.lt = i35, h14.Gt = n24, h14.Qt = s20, h14;
    }
    return e(i34, t12), i34.prototype.Jt = function(t, i, n25) {
        t.U = !1;
        var s21 = this.lt.ct().horzLine;
        if (s21.labelVisible) {
            var h15 = this.Gt.H();
            if (this.lt.U() && !this.Gt.ti() && null !== h15) {
                var r8 = W(s21.labelBackgroundColor);
                n25.yt = r8.yt, n25.et = r8.kt;
                var e5 = this.Qt(this.Gt);
                n25.zt = e5.zt, t.Et = this.Gt.ii(e5.D, h15), t.U = !0;
            }
        }
    }, i34;
}(U), Y = /[1-9]/g, K = function() {
    function t13() {
        this.tt = null;
    }
    return t13.prototype._ = function(t) {
        this.tt = t;
    }, t13.prototype.h = function(t, i36, n26) {
        var s22 = this;
        if (null !== this.tt && !1 !== this.tt.U && 0 !== this.tt.Et.length) {
            t.font = i36.Nt;
            var h16 = Math.round(i36.ni.Vt(t, this.tt.Et, Y));
            if (!(h16 <= 0)) {
                t.save();
                var r9 = i36.si, e6 = h16 + 2 * r9, u5 = e6 / 2, a4 = this.tt.wt, o4 = this.tt.zt, l3 = Math.floor(o4 - u5) + 0.5;
                l3 < 0 ? (o4 += Math.abs(0 - l3), l3 = Math.floor(o4 - u5) + 0.5) : l3 + e6 > a4 && (o4 -= Math.abs(a4 - (l3 + e6)), l3 = Math.floor(o4 - u5) + 0.5);
                var c2 = l3 + e6, v2 = 0 + i36.At + i36.Tt + i36.Wt + i36.Bt;
                t.fillStyle = this.tt.yt;
                var _2 = Math.round(l3 * n26), d2 = Math.round(0 * n26), w2 = Math.round(c2 * n26), M2 = Math.round(v2 * n26);
                t.fillRect(_2, d2, w2 - _2, M2 - d2);
                var b2 = Math.round(this.tt.zt * n26), m2 = d2, p2 = Math.round((m2 + i36.At + i36.Dt) * n26);
                t.fillStyle = this.tt.et;
                var g2 = Math.max(1, Math.floor(n26)), y2 = Math.floor(0.5 * n26);
                t.fillRect(b2 - y2, m2, g2, p2 - m2);
                var k2 = v2 - i36.Ot - i36.Bt;
                t.textAlign = "left", t.fillStyle = this.tt.et, P(t, n26, function() {
                    t.fillText(f(s22.tt).Et, l3 + r9, k2);
                }), t.restore();
            }
        }
    }, t13;
}(), $ = function() {
    function t14(t, i37, n27) {
        this.L = !0, this.ot = new K, this.at = {
            U: !1,
            yt: "#4c525e",
            et: "white",
            Et: "",
            wt: 0,
            zt: NaN
        }, this.V = t, this.hi = i37, this.Qt = n27;
    }
    return t14.prototype.O = function() {
        this.L = !0;
    }, t14.prototype.P = function() {
        return this.L && (this.R(), this.L = !1), this.ot._(this.at), this.ot;
    }, t14.prototype.R = function() {
        var t = this.at;
        t.U = !1;
        var i38 = this.V.ct().vertLine;
        if (i38.labelVisible) {
            var n28 = this.hi.j();
            if (!n28.ti()) {
                var s23 = n28.ri(this.V.I());
                t.wt = n28.wt();
                var h17 = this.Qt();
                if (h17.S) {
                    t.zt = h17.zt, t.Et = n28.ei(f(s23)), t.U = !0;
                    var r10 = W(i38.labelBackgroundColor);
                    t.yt = r10.yt, t.et = r10.kt;
                }
            }
        }
    }, t14;
}(), X = function() {
    function t15() {
        this.ui = null, this.ai = 0;
    }
    return t15.prototype.oi = function() {
        return this.ai;
    }, t15.prototype.li = function(t) {
        this.ai = t;
    }, t15.prototype.$ = function() {
        return this.ui;
    }, t15.prototype.fi = function(t) {
        this.ui = t;
    }, t15.prototype.ci = function() {
        return [];
    }, t15.prototype.U = function() {
        return !0;
    }, t15;
}();
!function(t) {
    t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet";
}(j || (j = {
}));
var Z = function(t16) {
    function i39(i40, n29) {
        var s24 = t16.call(this) || this;
        s24.vi = null, s24._i = NaN, s24.di = 0, s24.wi = !0, s24.Mi = new Map, s24.bi = !1, s24.mi = NaN, s24.pi = NaN, s24.gi = NaN, s24.yi = NaN, s24.hi = i40, s24.ki = n29, s24.Ci = new x(i40, s24);
        var h18, r11;
        s24.Ni = (h18 = function() {
            return s24._i;
        }, r11 = function() {
            return s24.pi;
        }, function(t) {
            var i41 = r11(), n30 = h18();
            if (t === f(s24.vi).xi()) return {
                D: n30,
                zt: i41
            };
            var e8 = f(t.H());
            return {
                D: t.Si(i41, e8),
                zt: i41
            };
        });
        var e7 = function(t, i42) {
            return function() {
                return {
                    S: s24.hi.j().ri(t()),
                    zt: i42()
                };
            };
        }(function() {
            return s24.di;
        }, function() {
            return s24.bt();
        });
        return s24.Di = new $(s24, i40, e7), s24.Ai = new D(s24), s24;
    }
    return e(i39, t16), i39.prototype.ct = function() {
        return this.ki;
    }, i39.prototype.Ti = function(t, i43) {
        this.gi = t, this.yi = i43;
    }, i39.prototype.Bi = function() {
        this.gi = NaN, this.yi = NaN;
    }, i39.prototype.Li = function() {
        return this.gi;
    }, i39.prototype.Fi = function() {
        return this.yi;
    }, i39.prototype.Ei = function(t, i44, n31) {
        this.bi || (this.bi = !0), this.wi = !0, this.Vi(t, i44, n31);
    }, i39.prototype.I = function() {
        return this.di;
    }, i39.prototype.bt = function() {
        return this.mi;
    }, i39.prototype.gt = function() {
        return this.pi;
    }, i39.prototype.U = function() {
        return this.wi;
    }, i39.prototype.Oi = function() {
        this.wi = !1, this.Wi(), this._i = NaN, this.mi = NaN, this.pi = NaN, this.vi = null, this.Bi();
    }, i39.prototype.zi = function(t) {
        return null !== this.vi ? [
            this.Ai,
            this.Ci
        ] : [];
    }, i39.prototype._t = function(t) {
        return t === this.vi && this.ki.horzLine.visible;
    }, i39.prototype.dt = function() {
        return this.ki.vertLine.visible;
    }, i39.prototype.Pi = function(t, i45) {
        this.wi && this.vi === t || this.Mi.clear();
        var n32 = [];
        return this.vi === t && n32.push(this.Ri(this.Mi, i45, this.Ni)), n32;
    }, i39.prototype.ci = function() {
        return this.wi ? [
            this.Di
        ] : [];
    }, i39.prototype.ft = function() {
        return this.vi;
    }, i39.prototype.Ii = function() {
        this.Ai.O(), this.Mi.forEach(function(t) {
            return t.O();
        }), this.Di.O(), this.Ci.O();
    }, i39.prototype.ji = function(t) {
        return t && !t.xi().ti() ? t.xi() : null;
    }, i39.prototype.Vi = function(t, i46, n33) {
        this.qi(t, i46, n33) && this.Ii();
    }, i39.prototype.qi = function(t, i47, n34) {
        var s25 = this.mi, h19 = this.pi, r12 = this._i, e9 = this.di, u6 = this.vi, a5 = this.ji(n34);
        this.di = t, this.mi = isNaN(t) ? NaN : this.hi.j().G(t), this.vi = n34;
        var o5 = null !== a5 ? a5.H() : null;
        return null !== a5 && null !== o5 ? (this._i = i47, this.pi = a5.K(i47, o5)) : (this._i = NaN, this.pi = NaN), s25 !== this.mi || h19 !== this.pi || e9 !== this.di || r12 !== this._i || u6 !== this.vi;
    }, i39.prototype.Wi = function() {
        var t17 = this.hi.W().map(function(t) {
            return t.Hi().Ui();
        }).filter(m), i48 = 0 === t17.length ? null : Math.max.apply(Math, t17);
        this.di = null !== i48 ? i48 : NaN;
    }, i39.prototype.Ri = function(t, i49, n35) {
        var s26 = t.get(i49);
        return void 0 === s26 && (s26 = new H(this, i49, n35), t.set(i49, s26)), s26;
    }, i39;
}(X), J = ".";
function G(t, i50) {
    if (!_(t)) return "n/a";
    if (!d(i50)) throw new TypeError("invalid length");
    if (i50 < 0 || i50 > 16) throw new TypeError("invalid length");
    if (0 === i50) return t.toString();
    return ("0000000000000000" + t.toString()).slice(-i50);
}
var Q = function() {
    function t18(t, i51) {
        if (i51 || (i51 = 1), _(t) && d(t) || (t = 100), t < 0) throw new TypeError("invalid base");
        this.Gt = t, this.Yi = i51, this.Ki();
    }
    return t18.prototype.format = function(t) {
        var i52 = t < 0 ? "−" : "";
        return t = Math.abs(t), i52 + this.$i(t);
    }, t18.prototype.Ki = function() {
        if (this.Xi = 0, this.Gt > 0 && this.Yi > 0) for(var t = this.Gt; t > 1;)t /= 10, this.Xi++;
    }, t18.prototype.$i = function(t) {
        var i53 = this.Gt / this.Yi, n36 = Math.floor(t), s27 = "", h20 = void 0 !== this.Xi ? this.Xi : NaN;
        if (i53 > 1) {
            var r13 = +(Math.round(t * i53) - n36 * i53).toFixed(this.Xi);
            r13 >= i53 && (r13 -= i53, n36 += 1), s27 = J + G(+r13.toFixed(this.Xi) * this.Yi, h20);
        } else n36 = Math.round(n36 * i53) / i53, h20 > 0 && (s27 = J + G(0, h20));
        return n36.toFixed(0) + s27;
    }, t18;
}(), tt = function(t) {
    function i54(i55) {
        return void 0 === i55 && (i55 = 100), t.call(this, i55) || this;
    }
    return e(i54, t), i54.prototype.format = function(i56) {
        return t.prototype.format.call(this, i56) + "%";
    }, i54;
}(Q), it = function() {
    function t19() {
        this.Zi = [];
    }
    return t19.prototype.Ji = function(t, i57, n37) {
        var s28 = {
            Gi: t,
            Qi: i57,
            tn: !0 === n37
        };
        this.Zi.push(s28);
    }, t19.prototype.nn = function(t) {
        var i58 = this.Zi.findIndex(function(i59) {
            return t === i59.Gi;
        });
        i58 > -1 && this.Zi.splice(i58, 1);
    }, t19.prototype.sn = function(t) {
        this.Zi = this.Zi.filter(function(i60) {
            return i60.Qi === t;
        });
    }, t19.prototype.hn = function(t20, i61) {
        var n38 = a([], this.Zi, !0);
        this.Zi = this.Zi.filter(function(t) {
            return !t.tn;
        }), n38.forEach(function(n39) {
            return n39.Gi(t20, i61);
        });
    }, t19.prototype.rn = function() {
        return this.Zi.length > 0;
    }, t19.prototype.en = function() {
        this.Zi = [];
    }, t19;
}(), nt = function() {
    function t21(t, i62) {
        this.un = t, this.an = i62;
    }
    return t21.prototype.on = function(t) {
        return null !== t && this.un === t.un && this.an === t.an;
    }, t21.prototype.ln = function() {
        return new t21(this.un, this.an);
    }, t21.prototype.fn = function() {
        return this.un;
    }, t21.prototype.cn = function() {
        return this.an;
    }, t21.prototype.vn = function() {
        return this.an - this.un;
    }, t21.prototype.ti = function() {
        return this.an === this.un || Number.isNaN(this.an) || Number.isNaN(this.un);
    }, t21.prototype._n = function(i63) {
        return null === i63 ? this : new t21(Math.min(this.fn(), i63.fn()), Math.max(this.cn(), i63.cn()));
    }, t21.prototype.dn = function(t) {
        if (_(t) && 0 !== this.an - this.un) {
            var i64 = 0.5 * (this.an + this.un), n40 = this.an - i64, s29 = this.un - i64;
            n40 *= t, s29 *= t, this.an = i64 + n40, this.un = i64 + s29;
        }
    }, t21.prototype.wn = function(t) {
        _(t) && (this.an += t, this.un += t);
    }, t21.prototype.Mn = function() {
        return {
            minValue: this.un,
            maxValue: this.an
        };
    }, t21.bn = function(i65) {
        return null === i65 ? null : new t21(i65.minValue, i65.maxValue);
    }, t21;
}();
function st(t, i66, n41) {
    return Math.min(Math.max(t, i66), n41);
}
function ht(t, i67, n42) {
    return i67 - t <= n42;
}
function rt(t) {
    return t <= 0 ? NaN : Math.log(t) / Math.log(10);
}
function et(t) {
    var i68 = Math.ceil(t);
    return i68 % 2 != 0 ? i68 - 1 : i68;
}
function ut(t) {
    var i69 = Math.ceil(t);
    return i69 % 2 == 0 ? i69 - 1 : i69;
}
function at(t, i70) {
    var n43 = 100 * (t - i70) / i70;
    return i70 < 0 ? -n43 : n43;
}
function ot(t, i71) {
    var n44 = at(t.fn(), i71), s30 = at(t.cn(), i71);
    return new nt(n44, s30);
}
function lt(t, i72) {
    var n45 = 100 * (t - i72) / i72 + 100;
    return i72 < 0 ? -n45 : n45;
}
function ft(t, i73) {
    var n46 = lt(t.fn(), i73), s31 = lt(t.cn(), i73);
    return new nt(n46, s31);
}
function ct(t) {
    var i74 = Math.abs(t);
    if (i74 < 0.00000001) return 0;
    var n47 = rt(i74 + 0.0001) + 4;
    return t < 0 ? -n47 : n47;
}
function vt(t) {
    var i75 = Math.abs(t);
    if (i75 < 0.00000001) return 0;
    var n48 = Math.pow(10, i75 - 4) - 0.0001;
    return t < 0 ? -n48 : n48;
}
function _t(t) {
    if (null === t) return null;
    var i76 = ct(t.fn()), n49 = ct(t.cn());
    return new nt(i76, n49);
}
var dt, wt = function() {
    function t22(t23, i77) {
        if (this.mn = t23, this.pn = i77, (function(t) {
            if (t < 0) return !1;
            for(var i78 = t; i78 > 1; i78 /= 10)if (i78 % 10 != 0) return !1;
            return !0;
        })(this.mn)) this.gn = [
            2,
            2.5,
            2
        ];
        else {
            this.gn = [];
            for(var n50 = this.mn; 1 !== n50;){
                if (n50 % 2 == 0) this.gn.push(2), n50 /= 2;
                else {
                    if (n50 % 5 != 0) throw new Error("unexpected base");
                    this.gn.push(2, 2.5), n50 /= 5;
                }
                if (this.gn.length > 100) throw new Error("something wrong with base");
            }
        }
    }
    return t22.prototype.yn = function(t, i79, n51) {
        for(var s32, h21, r14, e10 = 0 === this.mn ? 0 : 1 / this.mn, u7 = Math.pow(10, Math.max(0, Math.ceil(rt(t - i79)))), a6 = 0, o6 = this.pn[0];;){
            var l4 = ht(u7, e10, 0.00000000000001) && u7 > e10 + 0.00000000000001, f3 = ht(u7, n51 * o6, 0.00000000000001), c3 = ht(u7, 1, 0.00000000000001);
            if (!(l4 && f3 && c3)) break;
            u7 /= o6, o6 = this.pn[++a6 % this.pn.length];
        }
        if (u7 <= e10 + 0.00000000000001 && (u7 = e10), u7 = Math.max(1, u7), this.gn.length > 0 && (s32 = u7, h21 = 1, r14 = 0.00000000000001, Math.abs(s32 - h21) < r14)) for(a6 = 0, o6 = this.gn[0]; ht(u7, n51 * o6, 0.00000000000001) && u7 > e10 + 0.00000000000001;)u7 /= o6, o6 = this.gn[++a6 % this.gn.length];
        return u7;
    }, t22;
}(), Mt = function() {
    function t24(t, i80, n52, s33) {
        this.kn = [], this.Gt = t, this.mn = i80, this.Cn = n52, this.Nn = s33;
    }
    return t24.prototype.yn = function(t25, i81) {
        if (t25 < i81) throw new Error("high < low");
        var n53 = this.Gt.Mt(), s34 = (t25 - i81) * this.xn() / n53, h22 = new wt(this.mn, [
            2,
            2.5,
            2
        ]), r15 = new wt(this.mn, [
            2,
            2,
            2.5
        ]), e11 = new wt(this.mn, [
            2.5,
            2,
            2
        ]), u8 = [];
        return u8.push(h22.yn(t25, i81, s34), r15.yn(t25, i81, s34), e11.yn(t25, i81, s34)), (function(t) {
            if (t.length < 1) throw Error("array is empty");
            for(var i82 = t[0], n54 = 1; n54 < t.length; ++n54)t[n54] < i82 && (i82 = t[n54]);
            return i82;
        })(u8);
    }, t24.prototype.Sn = function() {
        var t = this.Gt, i83 = t.H();
        if (null !== i83) {
            var n55 = t.Mt(), s35 = this.Cn(n55 - 1, i83), h23 = this.Cn(0, i83), r16 = this.Gt.ct().entireTextOnly ? this.Dn() / 2 : 0, e12 = r16, u9 = n55 - 1 - r16, a7 = Math.max(s35, h23), o7 = Math.min(s35, h23);
            if (a7 !== o7) {
                for(var l5 = this.yn(a7, o7), f4 = a7 % l5, c4 = a7 >= o7 ? 1 : -1, v3 = null, _3 = 0, d3 = a7 - (f4 += f4 < 0 ? l5 : 0); d3 > o7; d3 -= l5){
                    var w3 = this.Nn(d3, i83, !0);
                    null !== v3 && Math.abs(w3 - v3) < this.xn() || w3 < e12 || w3 > u9 || (_3 < this.kn.length ? (this.kn[_3].An = w3, this.kn[_3].Tn = t.Bn(d3)) : this.kn.push({
                        An: w3,
                        Tn: t.Bn(d3)
                    }), _3++, v3 = w3, t.Ln() && (l5 = this.yn(d3 * c4, o7)));
                }
                this.kn.length = _3;
            } else this.kn = [];
        } else this.kn = [];
    }, t24.prototype.Fn = function() {
        return this.kn;
    }, t24.prototype.Dn = function() {
        return this.Gt.Wt();
    }, t24.prototype.xn = function() {
        return Math.ceil(2.5 * this.Dn());
    }, t24;
}();
function bt(t26) {
    return t26.slice().sort(function(t, i84) {
        return f(t.oi()) - f(i84.oi());
    });
}
!function(t) {
    t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
}(dt || (dt = {
}));
var mt, pt, gt = new tt, yt = new Q(100, 1), kt = function() {
    function t27(t, i85, n56, s36) {
        this.En = 0, this.Vn = null, this.On = null, this.Wn = null, this.zn = {
            Pn: !1,
            Rn: null
        }, this.In = 0, this.jn = 0, this.qn = new it, this.Un = new it, this.Hn = [], this.Yn = null, this.Kn = null, this.$n = null, this.Xn = null, this.Zn = yt, this.Jn = t, this.ki = i85, this.Gn = n56, this.Qn = s36, this.ts = new Mt(this, 100, this.ns.bind(this), this.ss.bind(this));
    }
    return t27.prototype.hs = function() {
        return this.Jn;
    }, t27.prototype.ct = function() {
        return this.ki;
    }, t27.prototype.rs = function(t) {
        if (v(this.ki, t), this.es(), void 0 !== t.mode && this.us({
            os: t.mode
        }), void 0 !== t.scaleMargins) {
            var i86 = l(t.scaleMargins.top), n57 = l(t.scaleMargins.bottom);
            if (i86 < 0 || i86 > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=" + i86);
            if (n57 < 0 || n57 > 1 || i86 + n57 > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + n57);
            if (i86 + n57 > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (i86 + n57));
            this.ls(), this.Kn = null;
        }
    }, t27.prototype.fs = function() {
        return this.ki.autoScale;
    }, t27.prototype.Ln = function() {
        return 1 === this.ki.mode;
    }, t27.prototype.cs = function() {
        return 2 === this.ki.mode;
    }, t27.prototype.vs = function() {
        return 3 === this.ki.mode;
    }, t27.prototype.os = function() {
        return {
            _s: this.ki.autoScale,
            ds: this.ki.invertScale,
            os: this.ki.mode
        };
    }, t27.prototype.us = function(t28) {
        var i87 = this.os(), n58 = null;
        void 0 !== t28._s && (this.ki.autoScale = t28._s), void 0 !== t28.os && (this.ki.mode = t28.os, 2 !== t28.os && 3 !== t28.os || (this.ki.autoScale = !0), this.zn.Pn = !1), 1 === i87.os && t28.os !== i87.os && (!function(t) {
            if (null === t) return !1;
            var i88 = vt(t.fn()), n59 = vt(t.cn());
            return isFinite(i88) && isFinite(n59);
        }(this.On) ? this.ki.autoScale = !0 : (n58 = (function(t) {
            if (null === t) return null;
            var i89 = vt(t.fn()), n60 = vt(t.cn());
            return new nt(i89, n60);
        })(this.On), null !== n58 && this.ws(n58))), 1 === t28.os && t28.os !== i87.os && null !== (n58 = _t(this.On)) && this.ws(n58);
        var s37 = i87.os !== this.ki.mode;
        s37 && (2 === i87.os || this.cs()) && this.es(), s37 && (3 === i87.os || this.vs()) && this.es(), void 0 !== t28.ds && i87.ds !== t28.ds && (this.ki.invertScale = t28.ds, this.Ms()), this.Un.hn(i87, this.os());
    }, t27.prototype.bs = function() {
        return this.Un;
    }, t27.prototype.Wt = function() {
        return this.Gn.fontSize;
    }, t27.prototype.Mt = function() {
        return this.En;
    }, t27.prototype.ps = function(t) {
        this.En !== t && (this.En = t, this.ls(), this.Kn = null);
    }, t27.prototype.gs = function() {
        if (this.Vn) return this.Vn;
        var t = this.Mt() - this.ys() - this.ks();
        return this.Vn = t, t;
    }, t27.prototype.Cs = function() {
        return this.Ns(), this.On;
    }, t27.prototype.ws = function(t, i90) {
        var n61 = this.On;
        (i90 || null === n61 && null !== t || null !== n61 && !n61.on(t)) && (this.Kn = null, this.On = t);
    }, t27.prototype.ti = function() {
        return this.Ns(), 0 === this.En || !this.On || this.On.ti();
    }, t27.prototype.xs = function(t) {
        return this.ds() ? t : this.Mt() - 1 - t;
    }, t27.prototype.K = function(t, i91) {
        return this.cs() ? t = at(t, i91) : this.vs() && (t = lt(t, i91)), this.ss(t, i91);
    }, t27.prototype.Ss = function(t, i92, n62) {
        this.Ns();
        for(var s38 = this.ks(), h24 = f(this.Cs()), r17 = h24.fn(), e13 = h24.cn(), u10 = this.gs() - 1, a8 = this.ds(), o8 = u10 / (e13 - r17), l6 = void 0 === n62 ? 0 : n62.from, c5 = void 0 === n62 ? t.length : n62.to, v4 = this.Ds(), _4 = l6; _4 < c5; _4++){
            var d4 = t[_4], w4 = d4.D;
            if (!isNaN(w4)) {
                var M3 = w4;
                null !== v4 && (M3 = v4(d4.D, i92));
                var b3 = s38 + o8 * (M3 - r17), m3 = a8 ? b3 : this.En - 1 - b3;
                d4.g = m3;
            }
        }
    }, t27.prototype.As = function(t, i93, n63) {
        this.Ns();
        for(var s39 = this.ks(), h25 = f(this.Cs()), r18 = h25.fn(), e14 = h25.cn(), u11 = this.gs() - 1, a9 = this.ds(), o9 = u11 / (e14 - r18), l7 = void 0 === n63 ? 0 : n63.from, c6 = void 0 === n63 ? t.length : n63.to, v5 = this.Ds(), _5 = l7; _5 < c6; _5++){
            var d5 = t[_5], w5 = d5.open, M4 = d5.high, b4 = d5.low, m4 = d5.close;
            null !== v5 && (w5 = v5(d5.open, i93), M4 = v5(d5.high, i93), b4 = v5(d5.low, i93), m4 = v5(d5.close, i93));
            var p3 = s39 + o9 * (w5 - r18), g3 = a9 ? p3 : this.En - 1 - p3;
            d5.Ts = g3, p3 = s39 + o9 * (M4 - r18), g3 = a9 ? p3 : this.En - 1 - p3, d5.Bs = g3, p3 = s39 + o9 * (b4 - r18), g3 = a9 ? p3 : this.En - 1 - p3, d5.Ls = g3, p3 = s39 + o9 * (m4 - r18), g3 = a9 ? p3 : this.En - 1 - p3, d5.Fs = g3;
        }
    }, t27.prototype.Si = function(t, i94) {
        var n64 = this.ns(t, i94);
        return this.Es(n64, i94);
    }, t27.prototype.Es = function(t29, i95) {
        var n65 = t29;
        return this.cs() ? n65 = (function(t, i96) {
            return i96 < 0 && (t = -t), t / 100 * i96 + i96;
        })(n65, i95) : this.vs() && (n65 = (function(t, i97) {
            return t -= 100, i97 < 0 && (t = -t), t / 100 * i97 + i97;
        })(n65, i95)), n65;
    }, t27.prototype.Vs = function() {
        return this.Hn;
    }, t27.prototype.Os = function() {
        if (this.Yn) return this.Yn;
        for(var t = [], i98 = 0; i98 < this.Hn.length; i98++){
            var n66 = this.Hn[i98];
            null === n66.oi() && n66.li(i98 + 1), t.push(n66);
        }
        return t = bt(t), this.Yn = t, this.Yn;
    }, t27.prototype.Ws = function(t) {
        -1 === this.Hn.indexOf(t) && (this.Hn.push(t), this.es(), this.zs());
    }, t27.prototype.Ps = function(t) {
        var i99 = this.Hn.indexOf(t);
        if (-1 === i99) throw new Error("source is not attached to scale");
        this.Hn.splice(i99, 1), 0 === this.Hn.length && (this.us({
            _s: !0
        }), this.ws(null)), this.es(), this.zs();
    }, t27.prototype.H = function() {
        for(var t = null, i100 = 0, n67 = this.Hn; i100 < n67.length; i100++){
            var s40 = n67[i100].H();
            null !== s40 && (null === t || s40.Rs < t.Rs) && (t = s40);
        }
        return null === t ? null : t.X;
    }, t27.prototype.ds = function() {
        return this.ki.invertScale;
    }, t27.prototype.Fn = function() {
        return this.Kn || (this.ts.Sn(), this.Kn = this.ts.Fn(), this.qn.hn()), this.Kn;
    }, t27.prototype.Is = function() {
        return this.qn;
    }, t27.prototype.js = function(t) {
        this.cs() || this.vs() || null === this.$n && null === this.Wn && (this.ti() || (this.$n = this.En - t, this.Wn = f(this.Cs()).ln()));
    }, t27.prototype.qs = function(t) {
        if (!this.cs() && !this.vs() && null !== this.$n) {
            this.us({
                _s: !1
            }), (t = this.En - t) < 0 && (t = 0);
            var i101 = (this.$n + 0.2 * (this.En - 1)) / (t + 0.2 * (this.En - 1)), n68 = f(this.Wn).ln();
            i101 = Math.max(i101, 0.1), n68.dn(i101), this.ws(n68);
        }
    }, t27.prototype.Us = function() {
        this.cs() || this.vs() || (this.$n = null, this.Wn = null);
    }, t27.prototype.Hs = function(t) {
        this.fs() || null === this.Xn && null === this.Wn && (this.ti() || (this.Xn = t, this.Wn = f(this.Cs()).ln()));
    }, t27.prototype.Ys = function(t) {
        if (!this.fs() && null !== this.Xn) {
            var i102 = f(this.Cs()).vn() / (this.gs() - 1), n69 = t - this.Xn;
            this.ds() && (n69 *= -1);
            var s41 = n69 * i102, h26 = f(this.Wn).ln();
            h26.wn(s41), this.ws(h26, !0), this.Kn = null;
        }
    }, t27.prototype.Ks = function() {
        this.fs() || null !== this.Xn && (this.Xn = null, this.Wn = null);
    }, t27.prototype.$s = function() {
        return this.Zn || this.es(), this.Zn;
    }, t27.prototype.ii = function(t, i103) {
        switch(this.ki.mode){
            case 2:
                return this.$s().format(at(t, i103));
            case 3:
                return this.$s().format(lt(t, i103));
            default:
                return this.Xs(t);
        }
    }, t27.prototype.Bn = function(t) {
        switch(this.ki.mode){
            case 2:
            case 3:
                return this.$s().format(t);
            default:
                return this.Xs(t);
        }
    }, t27.prototype.Zs = function(t) {
        return this.Xs(t, f(this.Js()).$s());
    }, t27.prototype.Gs = function(t, i104) {
        return t = at(t, i104), gt.format(t);
    }, t27.prototype.Qs = function() {
        return this.Hn;
    }, t27.prototype.th = function(t) {
        this.zn = {
            Rn: t,
            Pn: !1
        };
    }, t27.prototype.Ii = function() {
        this.Hn.forEach(function(t) {
            return t.Ii();
        });
    }, t27.prototype.es = function() {
        this.Kn = null;
        var t = this.Js(), i105 = 100;
        null !== t && (i105 = Math.round(1 / t.ih())), this.Zn = yt, this.cs() ? (this.Zn = gt, i105 = 100) : this.vs() ? (this.Zn = new Q(100, 1), i105 = 100) : null !== t && (this.Zn = t.$s()), this.ts = new Mt(this, i105, this.ns.bind(this), this.ss.bind(this)), this.ts.Sn();
    }, t27.prototype.zs = function() {
        this.Yn = null;
    }, t27.prototype.Js = function() {
        return this.Hn[0] || null;
    }, t27.prototype.ys = function() {
        return this.ds() ? this.ki.scaleMargins.bottom * this.Mt() + this.jn : this.ki.scaleMargins.top * this.Mt() + this.In;
    }, t27.prototype.ks = function() {
        return this.ds() ? this.ki.scaleMargins.top * this.Mt() + this.In : this.ki.scaleMargins.bottom * this.Mt() + this.jn;
    }, t27.prototype.Ns = function() {
        this.zn.Pn || (this.zn.Pn = !0, this.nh());
    }, t27.prototype.ls = function() {
        this.Vn = null;
    }, t27.prototype.ss = function(t, i) {
        if (this.Ns(), this.ti()) return 0;
        t = this.Ln() && t ? ct(t) : t;
        var n70 = f(this.Cs()), s42 = this.ks() + (this.gs() - 1) * (t - n70.fn()) / n70.vn();
        return this.xs(s42);
    }, t27.prototype.ns = function(t, i) {
        if (this.Ns(), this.ti()) return 0;
        var n71 = this.xs(t), s43 = f(this.Cs()), h27 = s43.fn() + s43.vn() * ((n71 - this.ks()) / (this.gs() - 1));
        return this.Ln() ? vt(h27) : h27;
    }, t27.prototype.Ms = function() {
        this.Kn = null, this.ts.Sn();
    }, t27.prototype.nh = function() {
        var t = this.zn.Rn;
        if (null !== t) {
            for(var i106 = null, n72 = 0, s44 = 0, h28 = 0, r19 = this.Qs(); h28 < r19.length; h28++){
                var e15 = r19[h28];
                if (e15.U()) {
                    var u12 = e15.H();
                    if (null !== u12) {
                        var a10 = e15.sh(t.hh(), t.rh()), o10 = a10 && a10.Cs();
                        if (null !== o10) {
                            switch(this.ki.mode){
                                case 1:
                                    o10 = _t(o10);
                                    break;
                                case 2:
                                    o10 = ot(o10, u12.X);
                                    break;
                                case 3:
                                    o10 = ft(o10, u12.X);
                            }
                            if (i106 = null === i106 ? o10 : i106._n(f(o10)), null !== a10) {
                                var l8 = a10.eh();
                                null !== l8 && (n72 = Math.max(n72, l8.above), s44 = Math.max(n72, l8.below));
                            }
                        }
                    }
                }
            }
            if (n72 === this.In && s44 === this.jn || (this.In = n72, this.jn = s44, this.Kn = null, this.ls()), null !== i106) {
                if (i106.fn() === i106.cn()) {
                    var c7 = this.Js(), v6 = 5 * (null === c7 || this.cs() || this.vs() ? 1 : c7.ih());
                    i106 = new nt(i106.fn() - v6, i106.cn() + v6);
                }
                this.ws(i106);
            } else null === this.On && this.ws(new nt(-0.5, 0.5));
            this.zn.Pn = !0;
        }
    }, t27.prototype.Ds = function() {
        return this.cs() ? at : this.vs() ? lt : this.Ln() ? ct : null;
    }, t27.prototype.Xs = function(t, i107) {
        return void 0 === this.Qn.priceFormatter ? (void 0 === i107 && (i107 = this.$s()), i107.format(t)) : this.Qn.priceFormatter(t);
    }, t27;
}();
function Ct(t) {
    void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor);
}
!function(t) {
    t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
}(mt || (mt = {
})), (function(t) {
    t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
})(pt || (pt = {
}));
var Nt = function(t) {
    return t.getUTCFullYear();
};
function xt(t30, i108, n73) {
    return i108.replace(/yyyy/g, function(t) {
        return G(Nt(t), 4);
    }(t30)).replace(/yy/g, function(t) {
        return G(Nt(t) % 100, 2);
    }(t30)).replace(/MMMM/g, function(t, i109) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i109, {
            month: "long"
        });
    }(t30, n73)).replace(/MMM/g, function(t, i110) {
        return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i110, {
            month: "short"
        });
    }(t30, n73)).replace(/MM/g, function(t31) {
        return G(function(t) {
            return t.getUTCMonth() + 1;
        }(t31), 2);
    }(t30)).replace(/dd/g, function(t32) {
        return G(function(t) {
            return t.getUTCDate();
        }(t32), 2);
    }(t30));
}
var St = function() {
    function t33(t, i111) {
        void 0 === t && (t = "yyyy-MM-dd"), void 0 === i111 && (i111 = "default"), this.uh = t, this.ah = i111;
    }
    return t33.prototype.oh = function(t) {
        return xt(t, this.uh, this.ah);
    }, t33;
}(), Dt = function() {
    function t34(t) {
        this.lh = t || "%h:%m:%s";
    }
    return t34.prototype.oh = function(t) {
        return this.lh.replace("%h", G(t.getUTCHours(), 2)).replace("%m", G(t.getUTCMinutes(), 2)).replace("%s", G(t.getUTCSeconds(), 2));
    }, t34;
}(), At = {
    fh: "yyyy-MM-dd",
    _h: "%h:%m:%s",
    dh: " ",
    wh: "default"
}, Tt = function() {
    function t35(t) {
        void 0 === t && (t = {
        });
        var i112 = u(u({
        }, At), t);
        this.Mh = new St(i112.fh, i112.wh), this.bh = new Dt(i112._h), this.mh = i112.dh;
    }
    return t35.prototype.oh = function(t) {
        return "" + this.Mh.oh(t) + this.mh + this.bh.oh(t);
    }, t35;
}();
function Bt(t, i113, n74, s45, h29) {
    void 0 === s45 && (s45 = 0), void 0 === h29 && (h29 = t.length);
    for(var r20 = h29 - s45; 0 < r20;){
        var e16 = r20 >> 1, u13 = s45 + e16;
        n74(t[u13], i113) ? (s45 = u13 + 1, r20 -= e16 + 1) : r20 = e16;
    }
    return s45;
}
function Lt(t, i114, n75, s46, h30) {
    void 0 === s46 && (s46 = 0), void 0 === h30 && (h30 = t.length);
    for(var r21 = h30 - s46; 0 < r21;){
        var e17 = r21 >> 1, u14 = s46 + e17;
        n75(i114, t[u14]) ? r21 = e17 : (s46 = u14 + 1, r21 -= e17 + 1);
    }
    return s46;
}
var Ft = function() {
    function t36(t, i115) {
        void 0 === i115 && (i115 = 50), this.ph = 0, this.gh = 1, this.yh = 1, this.kh = new Map, this.Ch = new Map, this.Nh = t, this.xh = i115;
    }
    return t36.prototype.oh = function(t) {
        var i116 = void 0 === t.Sh ? new Date(1000 * t.Dh).getTime() : new Date(Date.UTC(t.Sh.year, t.Sh.month - 1, t.Sh.day)).getTime(), n76 = this.kh.get(i116);
        if (void 0 !== n76) return n76.Ah;
        if (this.ph === this.xh) {
            var s47 = this.Ch.get(this.yh);
            this.Ch.delete(this.yh), this.kh.delete(l(s47)), this.yh++, this.ph--;
        }
        var h31 = this.Nh(t);
        return this.kh.set(i116, {
            Ah: h31,
            Th: this.gh
        }), this.Ch.set(this.gh, i116), this.ph++, this.gh++, h31;
    }, t36;
}(), Et = function() {
    function t37(t, i117) {
        o(t <= i117, "right should be >= left"), this.Bh = t, this.Lh = i117;
    }
    return t37.prototype.hh = function() {
        return this.Bh;
    }, t37.prototype.rh = function() {
        return this.Lh;
    }, t37.prototype.Fh = function() {
        return this.Lh - this.Bh + 1;
    }, t37.prototype.Eh = function(t) {
        return this.Bh <= t && t <= this.Lh;
    }, t37.prototype.on = function(t) {
        return this.Bh === t.hh() && this.Lh === t.rh();
    }, t37;
}();
function Vt(t, i118) {
    return null === t || null === i118 ? t === i118 : t.on(i118);
}
var Ot, Wt = function() {
    function t38() {
        this.Vh = new Map, this.kh = null;
    }
    return t38.prototype.Oh = function(t, i119) {
        this.Wh(i119), this.kh = null;
        for(var n77 = i119; n77 < t.length; ++n77){
            var s48 = t[n77], h32 = this.Vh.get(s48.zh);
            void 0 === h32 && (h32 = [], this.Vh.set(s48.zh, h32)), h32.push({
                Ph: n77,
                S: s48.S,
                Rh: s48.zh
            });
        }
    }, t38.prototype.Ih = function(t, i120) {
        var n78 = Math.ceil(i120 / t);
        return null !== this.kh && this.kh.jh === n78 || (this.kh = {
            Fn: this.qh(n78),
            jh: n78
        }), this.kh.Fn;
    }, t38.prototype.Wh = function(t) {
        if (0 !== t) {
            var i121 = [];
            this.Vh.forEach(function(n81, s51) {
                t <= n81[0].Ph ? i121.push(s51) : n81.splice(Bt(n81, t, function(i122) {
                    return i122.Ph < t;
                }), 1 / 0);
            });
            for(var n79 = 0, s49 = i121; n79 < s49.length; n79++){
                var h33 = s49[n79];
                this.Vh.delete(h33);
            }
        } else this.Vh.clear();
    }, t38.prototype.qh = function(t39) {
        for(var i123 = [], n82 = 0, s52 = Array.from(this.Vh.keys()).sort(function(t, i124) {
            return i124 - t;
        }); n82 < s52.length; n82++){
            var h34 = s52[n82];
            if (this.Vh.get(h34)) {
                var r22 = i123;
                i123 = [];
                for(var e18 = r22.length, u15 = 0, a11 = l(this.Vh.get(h34)), o11 = a11.length, f5 = 1 / 0, c8 = -1 / 0, v7 = 0; v7 < o11; v7++){
                    for(var _6 = a11[v7], d6 = _6.Ph; u15 < e18;){
                        var w6 = r22[u15], M5 = w6.Ph;
                        if (!(M5 < d6)) {
                            f5 = M5;
                            break;
                        }
                        u15++, i123.push(w6), c8 = M5, f5 = 1 / 0;
                    }
                    f5 - d6 >= t39 && d6 - c8 >= t39 && (i123.push(_6), c8 = d6);
                }
                for(; u15 < e18; u15++)i123.push(r22[u15]);
            }
        }
        return i123;
    }, t38;
}(), zt = function() {
    function t40(t) {
        this.Uh = t;
    }
    return t40.prototype.Hh = function() {
        return null === this.Uh ? null : new Et(Math.floor(this.Uh.hh()), Math.ceil(this.Uh.rh()));
    }, t40.prototype.Yh = function() {
        return this.Uh;
    }, t40.Kh = function() {
        return new t40(null);
    }, t40;
}();
!function(t) {
    t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
}(Ot || (Ot = {
}));
var Pt, Rt = function() {
    function t41(t, i125, n83) {
        this.$h = 0, this.Xh = null, this.Zh = [], this.Xn = null, this.$n = null, this.Jh = new Wt, this.Gh = new Map, this.Qh = zt.Kh(), this.tr = !0, this.ir = new it, this.nr = new it, this.sr = new it, this.hr = null, this.rr = null, this.er = [], this.ki = i125, this.Qn = n83, this.ur = i125.rightOffset, this.ar = i125.barSpacing, this.hi = t, this.lr();
    }
    return t41.prototype.ct = function() {
        return this.ki;
    }, t41.prototype.cr = function(t) {
        v(this.Qn, t), this.vr(), this.lr();
    }, t41.prototype.rs = function(t, i) {
        var n84;
        v(this.ki, t), this.ki.fixLeftEdge && this._r(), this.ki.fixRightEdge && this.dr(), void 0 !== t.barSpacing && this.hi.wr(t.barSpacing), void 0 !== t.rightOffset && this.hi.Mr(t.rightOffset), void 0 !== t.minBarSpacing && this.hi.wr(null !== (n84 = t.barSpacing) && void 0 !== n84 ? n84 : this.ar), this.vr(), this.lr(), this.sr.hn();
    }, t41.prototype.ri = function(t) {
        var i126;
        return (null === (i126 = this.Zh[t]) || void 0 === i126 ? void 0 : i126.S) || null;
    }, t41.prototype.br = function(t42, i127) {
        if (this.Zh.length < 1) return null;
        if (t42.Dh > this.Zh[this.Zh.length - 1].S.Dh) return i127 ? this.Zh.length - 1 : null;
        var n85 = Bt(this.Zh, t42.Dh, function(t, i128) {
            return t.S.Dh < i128;
        });
        return t42.Dh < this.Zh[n85].S.Dh ? i127 ? n85 : null : n85;
    }, t41.prototype.ti = function() {
        return 0 === this.$h || 0 === this.Zh.length;
    }, t41.prototype.mr = function() {
        return this.pr(), this.Qh.Hh();
    }, t41.prototype.gr = function() {
        return this.pr(), this.Qh.Yh();
    }, t41.prototype.yr = function() {
        var t = this.mr();
        if (null === t) return null;
        var i129 = {
            from: t.hh(),
            to: t.rh()
        };
        return this.kr(i129);
    }, t41.prototype.kr = function(t) {
        var i130 = Math.round(t.from), n86 = Math.round(t.to), s53 = f(this.Cr()), h35 = f(this.Nr());
        return {
            from: f(this.ri(Math.max(s53, i130))),
            to: f(this.ri(Math.min(h35, n86)))
        };
    }, t41.prototype.Sr = function(t) {
        return {
            from: f(this.br(t.from, !0)),
            to: f(this.br(t.to, !0))
        };
    }, t41.prototype.wt = function() {
        return this.$h;
    }, t41.prototype.Dr = function(t) {
        if (isFinite(t) && !(t <= 0) && this.$h !== t) {
            if (this.ki.lockVisibleTimeRangeOnResize && this.$h) {
                var i131 = this.ar * t / this.$h;
                this.ar = i131;
            }
            if (this.ki.fixLeftEdge) {
                var n87 = this.mr();
                if (null !== n87) {
                    if (n87.hh() <= 0) {
                        var s54 = this.$h - t;
                        this.ur -= Math.round(s54 / this.ar) + 1;
                    }
                }
            }
            this.$h = t, this.tr = !0, this.Ar(), this.Tr();
        }
    }, t41.prototype.G = function(t) {
        if (this.ti() || !d(t)) return 0;
        var i132 = this.Br() + this.ur - t;
        return this.$h - (i132 + 0.5) * this.ar - 1;
    }, t41.prototype.Lr = function(t, i133) {
        for(var n88 = this.Br(), s55 = void 0 === i133 ? 0 : i133.from, h36 = void 0 === i133 ? t.length : i133.to, r23 = s55; r23 < h36; r23++){
            var e19 = t[r23].S, u16 = n88 + this.ur - e19, a12 = this.$h - (u16 + 0.5) * this.ar - 1;
            t[r23].p = a12;
        }
    }, t41.prototype.Fr = function(t) {
        return Math.ceil(this.Er(t));
    }, t41.prototype.Mr = function(t) {
        this.tr = !0, this.ur = t, this.Tr(), this.hi.Vr(), this.hi.Or();
    }, t41.prototype.Wr = function() {
        return this.ar;
    }, t41.prototype.wr = function(t) {
        this.zr(t), this.Tr(), this.hi.Vr(), this.hi.Or();
    }, t41.prototype.Pr = function() {
        return this.ur;
    }, t41.prototype.Fn = function() {
        if (this.ti()) return null;
        if (null !== this.rr) return this.rr;
        for(var t = this.ar, i134 = 5 * (this.hi.ct().layout.fontSize + 4), n89 = Math.round(i134 / t), s56 = f(this.mr()), h37 = Math.max(s56.hh(), s56.hh() - n89), r24 = Math.max(s56.rh(), s56.rh() - n89), e20 = this.Jh.Ih(t, i134), u17 = this.Cr() + n89, a13 = this.Nr() - n89, o12 = 0, l9 = 0, c9 = e20; l9 < c9.length; l9++){
            var v8 = c9[l9];
            if (h37 <= v8.Ph && v8.Ph <= r24) {
                var _7 = void 0;
                o12 < this.er.length ? ((_7 = this.er[o12]).An = this.G(v8.Ph), _7.Tn = this.Rr(v8.S, v8.Rh), _7.Rh = v8.Rh) : (_7 = {
                    Ir: !1,
                    An: this.G(v8.Ph),
                    Tn: this.Rr(v8.S, v8.Rh),
                    Rh: v8.Rh
                }, this.er.push(_7)), this.ar > i134 / 2 ? _7.Ir = !1 : _7.Ir = this.ki.fixLeftEdge && v8.Ph <= u17 || this.ki.fixRightEdge && v8.Ph >= a13, o12++;
            }
        }
        return this.er.length = o12, this.rr = this.er, this.er;
    }, t41.prototype.jr = function() {
        this.tr = !0, this.wr(this.ki.barSpacing), this.Mr(this.ki.rightOffset);
    }, t41.prototype.qr = function(t) {
        this.tr = !0, this.Xh = t, this.Tr(), this._r();
    }, t41.prototype.Ur = function(t, i135) {
        var n90 = this.Er(t), s57 = this.Wr(), h38 = s57 + i135 * (s57 / 10);
        this.wr(h38), this.ki.rightBarStaysOnScroll || this.Mr(this.Pr() + (n90 - this.Er(t)));
    }, t41.prototype.js = function(t) {
        this.Xn && this.Ks(), null === this.$n && null === this.hr && (this.ti() || (this.$n = t, this.Hr()));
    }, t41.prototype.qs = function(t) {
        if (null !== this.hr) {
            var i136 = st(this.$h - t, 0, this.$h), n91 = st(this.$h - f(this.$n), 0, this.$h);
            0 !== i136 && 0 !== n91 && this.wr(this.hr.Wr * i136 / n91);
        }
    }, t41.prototype.Us = function() {
        null !== this.$n && (this.$n = null, this.Yr());
    }, t41.prototype.Hs = function(t) {
        null === this.Xn && null === this.hr && (this.ti() || (this.Xn = t, this.Hr()));
    }, t41.prototype.Ys = function(t) {
        if (null !== this.Xn) {
            var i137 = (this.Xn - t) / this.Wr();
            this.ur = f(this.hr).Pr + i137, this.tr = !0, this.Tr();
        }
    }, t41.prototype.Ks = function() {
        null !== this.Xn && (this.Xn = null, this.Yr());
    }, t41.prototype.Kr = function() {
        this.$r(this.ki.rightOffset);
    }, t41.prototype.$r = function(t, i138) {
        var n92 = this;
        if (void 0 === i138 && (i138 = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number");
        if (!isFinite(i138) || i138 <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
        var s58 = this.ur, h39 = performance.now(), r25 = function() {
            var e21 = (performance.now() - h39) / i138, u18 = e21 >= 1, a14 = u18 ? t : s58 + (t - s58) * e21;
            n92.Mr(a14), u18 || setTimeout(r25, 20);
        };
        r25();
    }, t41.prototype.O = function(t, i139) {
        this.tr = !0, this.Zh = t, this.Jh.Oh(t, i139), this.Tr();
    }, t41.prototype.Xr = function() {
        return this.ir;
    }, t41.prototype.Zr = function() {
        return this.nr;
    }, t41.prototype.Jr = function() {
        return this.sr;
    }, t41.prototype.Br = function() {
        return this.Xh || 0;
    }, t41.prototype.Gr = function(t) {
        var i140 = t.Fh();
        this.zr(this.$h / i140), this.ur = t.rh() - this.Br(), this.Tr(), this.tr = !0, this.hi.Vr(), this.hi.Or();
    }, t41.prototype.Qr = function() {
        var t = this.Cr(), i141 = this.Nr();
        null !== t && null !== i141 && this.Gr(new Et(t, i141 + this.ki.rightOffset));
    }, t41.prototype.te = function(t) {
        var i142 = new Et(t.from, t.to);
        this.Gr(i142);
    }, t41.prototype.ei = function(t) {
        return void 0 !== this.Qn.timeFormatter ? this.Qn.timeFormatter(t.Sh || t.Dh) : this.ie.oh(new Date(1000 * t.Dh));
    }, t41.prototype.Cr = function() {
        return 0 === this.Zh.length ? null : 0;
    }, t41.prototype.Nr = function() {
        return 0 === this.Zh.length ? null : this.Zh.length - 1;
    }, t41.prototype.ne = function(t) {
        return (this.$h - 1 - t) / this.ar;
    }, t41.prototype.Er = function(t) {
        var i143 = this.ne(t), n93 = this.Br() + this.ur - i143;
        return Math.round(1000000 * n93) / 1000000;
    }, t41.prototype.zr = function(t) {
        var i144 = this.ar;
        this.ar = t, this.Ar(), i144 !== this.ar && (this.tr = !0, this.se());
    }, t41.prototype.pr = function() {
        if (this.tr) {
            if (this.tr = !1, this.ti()) this.he(zt.Kh());
            else {
                var t = this.Br(), i145 = this.$h / this.ar, n94 = this.ur + t, s59 = new Et(n94 - i145 + 1, n94);
                this.he(new zt(s59));
            }
        }
    }, t41.prototype.Ar = function() {
        var t = this.re();
        if (this.ar < t && (this.ar = t, this.tr = !0), 0 !== this.$h) {
            var i146 = 0.5 * this.$h;
            this.ar > i146 && (this.ar = i146, this.tr = !0);
        }
    }, t41.prototype.re = function() {
        return this.ki.fixLeftEdge && this.ki.fixRightEdge && 0 !== this.Zh.length ? this.$h / this.Zh.length : this.ki.minBarSpacing;
    }, t41.prototype.Tr = function() {
        var t = this.ee();
        this.ur > t && (this.ur = t, this.tr = !0);
        var i147 = this.ue();
        null !== i147 && this.ur < i147 && (this.ur = i147, this.tr = !0);
    }, t41.prototype.ue = function() {
        var t = this.Cr(), i148 = this.Xh;
        return null === t || null === i148 ? null : t - i148 - 1 + (this.ki.fixLeftEdge ? this.$h / this.ar : Math.min(2, this.Zh.length));
    }, t41.prototype.ee = function() {
        return this.ki.fixRightEdge ? 0 : this.$h / this.ar - Math.min(2, this.Zh.length);
    }, t41.prototype.Hr = function() {
        this.hr = {
            Wr: this.Wr(),
            Pr: this.Pr()
        };
    }, t41.prototype.Yr = function() {
        this.hr = null;
    }, t41.prototype.Rr = function(t43, i149) {
        var n95 = this, s60 = this.Gh.get(i149);
        return void 0 === s60 && (s60 = new Ft(function(t) {
            return n95.ae(t, i149);
        }), this.Gh.set(i149, s60)), s60.oh(t43);
    }, t41.prototype.ae = function(t44, i150) {
        var n96, s61 = function(t, i151, n97) {
            switch(t){
                case 0:
                case 10:
                    return i151 ? n97 ? 4 : 3 : 2;
                case 20:
                case 21:
                case 22:
                case 30:
                case 31:
                case 32:
                case 33:
                    return i151 ? 3 : 2;
                case 50:
                    return 2;
                case 60:
                    return 1;
                case 70:
                    return 0;
            }
        }(i150, this.ki.timeVisible, this.ki.secondsVisible);
        return void 0 !== this.ki.tickMarkFormatter ? this.ki.tickMarkFormatter(null !== (n96 = t44.Sh) && void 0 !== n96 ? n96 : t44.Dh, s61, this.Qn.locale) : (function(t, i152, n98) {
            var s62 = {
            };
            switch(i152){
                case 0:
                    s62.year = "numeric";
                    break;
                case 1:
                    s62.month = "short";
                    break;
                case 2:
                    s62.day = "numeric";
                    break;
                case 3:
                    s62.hour12 = !1, s62.hour = "2-digit", s62.minute = "2-digit";
                    break;
                case 4:
                    s62.hour12 = !1, s62.hour = "2-digit", s62.minute = "2-digit", s62.second = "2-digit";
            }
            var h40 = void 0 === t.Sh ? new Date(1000 * t.Dh) : new Date(Date.UTC(t.Sh.year, t.Sh.month - 1, t.Sh.day));
            return new Date(h40.getUTCFullYear(), h40.getUTCMonth(), h40.getUTCDate(), h40.getUTCHours(), h40.getUTCMinutes(), h40.getUTCSeconds(), h40.getUTCMilliseconds()).toLocaleString(n98, s62);
        })(t44, s61, this.Qn.locale);
    }, t41.prototype.he = function(t) {
        var i153 = this.Qh;
        this.Qh = t, Vt(i153.Hh(), this.Qh.Hh()) || this.ir.hn(), Vt(i153.Yh(), this.Qh.Yh()) || this.nr.hn(), this.se();
    }, t41.prototype.se = function() {
        this.rr = null;
    }, t41.prototype.vr = function() {
        this.se(), this.Gh.clear();
    }, t41.prototype.lr = function() {
        var t = this.Qn.dateFormat;
        this.ki.timeVisible ? this.ie = new Tt({
            fh: t,
            _h: this.ki.secondsVisible ? "%h:%m:%s" : "%h:%m",
            dh: "   ",
            wh: this.Qn.locale
        }) : this.ie = new St(t, this.Qn.locale);
    }, t41.prototype._r = function() {
        if (this.ki.fixLeftEdge) {
            var t = this.Cr();
            if (null !== t) {
                var i154 = this.mr();
                if (null !== i154) {
                    var n99 = i154.hh() - t;
                    if (n99 < 0) {
                        var s63 = this.ur - n99 - 1;
                        this.Mr(s63);
                    }
                    this.Ar();
                }
            }
        }
    }, t41.prototype.dr = function() {
        this.Tr(), this.Ar();
    }, t41;
}();
function It(t) {
    return !_(t) && !w(t);
}
function jt(t) {
    return _(t);
}
!function(t) {
    t.Solid = "solid", t.VerticalGradient = "gradient";
}(Pt || (Pt = {
}));
var qt = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function Ut(t, i155, n100) {
    return void 0 !== n100 ? n100 += " " : n100 = "", void 0 === i155 && (i155 = qt), "" + n100 + t + "px " + i155;
}
var Ht = function() {
    function t45(t) {
        this.oe = {
            At: 1,
            Dt: 4,
            Wt: NaN,
            Nt: "",
            le: "",
            et: "",
            Bt: 0,
            Lt: 0,
            Ft: 0,
            Tt: 0,
            Ot: 0
        }, this.F = t;
    }
    return t45.prototype.ct = function() {
        var t = this.oe, i156 = this.fe(), n101 = this.ce();
        return t.Wt === i156 && t.le === n101 || (t.Wt = i156, t.le = n101, t.Nt = Ut(i156, n101), t.Tt = Math.floor(i156 / 3.5), t.Bt = t.Tt, t.Lt = Math.max(Math.ceil(i156 / 2 - t.Dt / 2), 0), t.Ft = Math.ceil(i156 / 2 + t.Dt / 2), t.Ot = Math.round(i156 / 10)), t.et = this.ve(), this.oe;
    }, t45.prototype.ve = function() {
        return this.F.ct().layout.textColor;
    }, t45.prototype.fe = function() {
        return this.F.ct().layout.fontSize;
    }, t45.prototype.ce = function() {
        return this.F.ct().layout.fontFamily;
    }, t45;
}();
function Yt(t) {
    return "left" === t || "right" === t;
}
var Kt = function() {
    function t46(t) {
        this._e = new Map, this.de = !1, this.we = [], this.Me = t;
    }
    return t46.prototype.be = function(t47, i157) {
        var n102 = function(t, i158) {
            return void 0 === t ? i158 : {
                me: Math.max(t.me, i158.me),
                _s: t._s || i158._s
            };
        }(this._e.get(t47), i157);
        this._e.set(t47, n102);
    }, t46.prototype.pe = function() {
        return this.Me;
    }, t46.prototype.ge = function(t) {
        var i159 = this._e.get(t);
        return void 0 === i159 ? {
            me: this.Me
        } : {
            me: Math.max(this.Me, i159.me),
            _s: i159._s
        };
    }, t46.prototype.ye = function() {
        this.we = [
            {
                ke: 0
            }
        ];
    }, t46.prototype.Ce = function(t) {
        this.we = [
            {
                ke: 1,
                X: t
            }
        ];
    }, t46.prototype.Ne = function() {
        this.we = [
            {
                ke: 4
            }
        ];
    }, t46.prototype.wr = function(t) {
        this.we.push({
            ke: 2,
            X: t
        });
    }, t46.prototype.Mr = function(t) {
        this.we.push({
            ke: 3,
            X: t
        });
    }, t46.prototype.xe = function() {
        return this.we;
    }, t46.prototype._n = function(t48) {
        var i160 = this;
        this.de = this.de || t48.de, this.we = this.we.concat(t48.we);
        for(var n103 = 0, s64 = t48.we; n103 < s64.length; n103++){
            var h41 = s64[n103];
            this.Se(h41);
        }
        this.Me = Math.max(this.Me, t48.Me), t48._e.forEach(function(t, n104) {
            i160.be(n104, t);
        });
    }, t46.prototype.Se = function(t) {
        switch(t.ke){
            case 0:
                this.ye();
                break;
            case 1:
                this.Ce(t.X);
                break;
            case 2:
                this.wr(t.X);
                break;
            case 3:
                this.Mr(t.X);
                break;
            case 4:
                this.Ne();
        }
    }, t46;
}(), $t = function() {
    function t49(t) {
        this.De = t;
    }
    return t49.prototype.format = function(t) {
        var i161 = "";
        return t < 0 && (i161 = "-", t = -t), t < 995 ? i161 + this.Ae(t) : t < 999995 ? i161 + this.Ae(t / 1000) + "K" : t < 999999995 ? (t = 1000 * Math.round(t / 1000), i161 + this.Ae(t / 1000000) + "M") : (t = 1000000 * Math.round(t / 1000000), i161 + this.Ae(t / 1000000000) + "B");
    }, t49.prototype.Ae = function(t) {
        var i162 = Math.pow(10, this.De);
        return ((t = Math.round(t * i162) / i162) >= 0.000000000000001 && t < 1 ? t.toFixed(this.De).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, function(t, i163) {
            return i163;
        });
    }, t49;
}();
function Xt(t, i164, n105, s65) {
    if (0 !== i164.length) {
        var h42 = i164[s65.from].p, r26 = i164[s65.from].g;
        t.moveTo(h42, r26);
        for(var e22 = s65.from + 1; e22 < s65.to; ++e22){
            var u19 = i164[e22];
            if (1 === n105) {
                var a15 = i164[e22 - 1].g, o13 = u19.p;
                t.lineTo(o13, a15);
            }
            t.lineTo(u19.p, u19.g);
        }
    }
}
var Zt = function(t50) {
    function i165() {
        var i166 = null !== t50 && t50.apply(this, arguments) || this;
        return i166.v = null, i166;
    }
    return e(i165, t50), i165.prototype._ = function(t) {
        this.v = t;
    }, i165.prototype.u = function(t) {
        if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
            if (t.lineCap = "butt", t.lineJoin = "round", t.lineWidth = this.v.rt, s(t, this.v.ut), t.lineWidth = 1, t.beginPath(), 1 === this.v.m.length) {
                var i167 = this.v.m[0], n106 = this.v.Te / 2;
                t.moveTo(i167.p - n106, this.v.Be), t.lineTo(i167.p - n106, i167.g), t.lineTo(i167.p + n106, i167.g), t.lineTo(i167.p + n106, this.v.Be);
            } else t.moveTo(this.v.m[this.v.M.from].p, this.v.Be), t.lineTo(this.v.m[this.v.M.from].p, this.v.m[this.v.M.from].g), Xt(t, this.v.m, this.v.Le, this.v.M), this.v.M.to > this.v.M.from && (t.lineTo(this.v.m[this.v.M.to - 1].p, this.v.Be), t.lineTo(this.v.m[this.v.M.from].p, this.v.Be));
            t.closePath(), t.fillStyle = this.Fe(t), t.fill();
        }
    }, i165;
}(y), Jt = function(t51) {
    function i168() {
        return null !== t51 && t51.apply(this, arguments) || this;
    }
    return e(i168, t51), i168.prototype.Fe = function(t) {
        var i169 = this.v, n107 = t.createLinearGradient(0, 0, 0, i169.Ee);
        return n107.addColorStop(0, i169.Ve), n107.addColorStop(1, i169.Oe), n107;
    }, i168;
}(Zt), Gt = function(t52) {
    function i170() {
        var i171 = null !== t52 && t52.apply(this, arguments) || this;
        return i171.v = null, i171;
    }
    return e(i170, t52), i170.prototype._ = function(t) {
        this.v = t;
    }, i170.prototype.u = function(t) {
        if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
            if (t.lineCap = "butt", t.lineWidth = this.v.rt, s(t, this.v.ut), t.strokeStyle = this.We(t), t.lineJoin = "round", t.beginPath(), 1 === this.v.m.length) {
                var i172 = this.v.m[0];
                t.moveTo(i172.p - this.v.Te / 2, i172.g), t.lineTo(i172.p + this.v.Te / 2, i172.g);
            } else Xt(t, this.v.m, this.v.Le, this.v.M);
            t.stroke();
        }
    }, i170;
}(y), Qt = function(t) {
    function i173() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e(i173, t), i173.prototype.We = function() {
        return this.v.N;
    }, i173;
}(Gt);
function ti(t, i174) {
    return t.S < i174;
}
function ii(t, i175) {
    return t < i175.S;
}
function ni(t, i176, n108) {
    var s66 = i176.hh(), h43 = i176.rh(), r27 = Bt(t, s66, ti), e23 = Lt(t, h43, ii);
    if (!n108) return {
        from: r27,
        to: e23
    };
    var u20 = r27, a16 = e23;
    return r27 > 0 && r27 < t.length && t[r27].S >= s66 && (u20 = r27 - 1), e23 > 0 && e23 < t.length && t[e23 - 1].S <= h43 && (a16 = e23 + 1), {
        from: u20,
        to: a16
    };
}
var si = function() {
    function t53(t, i177, n109) {
        this.ze = !0, this.Pe = !0, this.Re = !0, this.Ie = [], this.je = null, this.qe = t, this.Ue = i177, this.He = n109;
    }
    return t53.prototype.O = function(t) {
        this.ze = !0, "data" === t && (this.Pe = !0), "options" === t && (this.Re = !0);
    }, t53.prototype.Ye = function() {
        this.Pe && (this.Ke(), this.Pe = !1), this.ze && (this.$e(), this.ze = !1), this.Re && (this.Xe(), this.Re = !1);
    }, t53.prototype.Ze = function() {
        this.je = null;
    }, t53.prototype.$e = function() {
        var t = this.qe.$(), i178 = this.Ue.j();
        if (this.Ze(), !i178.ti() && !t.ti()) {
            var n110 = i178.mr();
            if (null !== n110 && 0 !== this.qe.Hi().Je()) {
                var s67 = this.qe.H();
                null !== s67 && (this.je = ni(this.Ie, n110, this.He), this.Ge(t, i178, s67.X));
            }
        }
    }, t53;
}(), hi = function(t54) {
    function i179(i180, n111) {
        return t54.call(this, i180, n111, !0) || this;
    }
    return e(i179, t54), i179.prototype.Ge = function(t, i181, n112) {
        i181.Lr(this.Ie, p(this.je)), t.Ss(this.Ie, n112, p(this.je));
    }, i179.prototype.Qe = function(t, i182) {
        return {
            S: t,
            D: i182,
            p: NaN,
            g: NaN
        };
    }, i179.prototype.Xe = function() {
    }, i179.prototype.Ke = function() {
        var t = this, i183 = this.qe.tu();
        this.Ie = this.qe.Hi().iu().map(function(n113) {
            var s68 = n113.X[3];
            return t.nu(n113.Ph, s68, i183);
        });
    }, i179;
}(si), ri = function(t55) {
    function i184(i185, n114) {
        var s69 = t55.call(this, i185, n114) || this;
        return s69.ot = new g, s69.su = new Jt, s69.hu = new Qt, s69.ot.i([
            s69.su,
            s69.hu
        ]), s69;
    }
    return e(i184, t55), i184.prototype.P = function(t, i) {
        if (!this.qe.U()) return null;
        var n115 = this.qe.ct();
        return this.Ye(), this.su._({
            Le: n115.lineType,
            m: this.Ie,
            ut: n115.lineStyle,
            rt: n115.lineWidth,
            Ve: n115.topColor,
            Oe: n115.bottomColor,
            Be: t,
            Ee: t,
            M: this.je,
            Te: this.Ue.j().Wr()
        }), this.hu._({
            Le: n115.lineType,
            m: this.Ie,
            N: n115.lineColor,
            ut: n115.lineStyle,
            rt: n115.lineWidth,
            M: this.je,
            Te: this.Ue.j().Wr()
        }), this.ot;
    }, i184.prototype.nu = function(t, i186) {
        return this.Qe(t, i186);
    }, i184;
}(hi);
var ei = function() {
    function t56() {
        this.tt = null, this.ru = 0, this.eu = 0;
    }
    return t56.prototype._ = function(t) {
        this.tt = t;
    }, t56.prototype.h = function(t, i187, n, s) {
        if (null !== this.tt && 0 !== this.tt.Hi.length && null !== this.tt.M) {
            if (this.ru = this.uu(i187), this.ru >= 2) Math.max(1, Math.floor(i187)) % 2 != this.ru % 2 && this.ru--;
            this.eu = this.tt.au ? Math.min(this.ru, Math.floor(i187)) : this.ru;
            for(var h44 = null, r28 = this.eu <= this.ru && this.tt.Wr >= Math.floor(1.5 * i187), e24 = this.tt.M.from; e24 < this.tt.M.to; ++e24){
                var u21 = this.tt.Hi[e24];
                h44 !== u21.et && (t.fillStyle = u21.et, h44 = u21.et);
                var a17 = Math.floor(0.5 * this.eu), o14 = Math.round(u21.p * i187), l10 = o14 - a17, f6 = this.eu, c10 = l10 + f6 - 1, v9 = Math.min(u21.Bs, u21.Ls), _8 = Math.max(u21.Bs, u21.Ls), d7 = Math.round(v9 * i187) - a17, w7 = Math.round(_8 * i187) + a17, M6 = Math.max(w7 - d7, this.eu);
                t.fillRect(l10, d7, f6, M6);
                var b5 = Math.ceil(1.5 * this.ru);
                if (r28) {
                    if (this.tt.ou) {
                        var m5 = o14 - b5, p4 = Math.max(d7, Math.round(u21.Ts * i187) - a17), g4 = p4 + f6 - 1;
                        g4 > d7 + M6 - 1 && (p4 = (g4 = d7 + M6 - 1) - f6 + 1), t.fillRect(m5, p4, l10 - m5, g4 - p4 + 1);
                    }
                    var y3 = o14 + b5, k3 = Math.max(d7, Math.round(u21.Fs * i187) - a17), C2 = k3 + f6 - 1;
                    C2 > d7 + M6 - 1 && (k3 = (C2 = d7 + M6 - 1) - f6 + 1), t.fillRect(c10 + 1, k3, y3 - c10, C2 - k3 + 1);
                }
            }
        }
    }, t56.prototype.uu = function(t57) {
        var i188 = Math.floor(t57);
        return Math.max(i188, Math.floor(function(t, i189) {
            return Math.floor(0.3 * t * i189);
        }(f(this.tt).Wr, t57)));
    }, t56;
}(), ui = function(t58) {
    function i190(i191, n116) {
        return t58.call(this, i191, n116, !1) || this;
    }
    return e(i190, t58), i190.prototype.Ge = function(t, i192, n117) {
        i192.Lr(this.Ie, p(this.je)), t.As(this.Ie, n117, p(this.je));
    }, i190.prototype.lu = function(t, i193, n) {
        return {
            S: t,
            open: i193.X[0],
            high: i193.X[1],
            low: i193.X[2],
            close: i193.X[3],
            p: NaN,
            Ts: NaN,
            Bs: NaN,
            Ls: NaN,
            Fs: NaN
        };
    }, i190.prototype.Ke = function() {
        var t = this, i194 = this.qe.tu();
        this.Ie = this.qe.Hi().iu().map(function(n118) {
            return t.nu(n118.Ph, n118, i194);
        });
    }, i190;
}(si), ai = function(t59) {
    function i195() {
        var i196 = null !== t59 && t59.apply(this, arguments) || this;
        return i196.ot = new ei, i196;
    }
    return e(i195, t59), i195.prototype.P = function(t, i) {
        if (!this.qe.U()) return null;
        var n119 = this.qe.ct();
        this.Ye();
        var s70 = {
            Hi: this.Ie,
            Wr: this.Ue.j().Wr(),
            ou: n119.openVisible,
            au: n119.thinBars,
            M: this.je
        };
        return this.ot._(s70), this.ot;
    }, i195.prototype.Xe = function() {
        var t = this;
        this.Ie.forEach(function(i197) {
            i197.et = t.qe.tu().cu(i197.S).fu;
        });
    }, i195.prototype.nu = function(t, i198, n120) {
        return u(u({
        }, this.lu(t, i198, n120)), {
            et: n120.cu(t).fu
        });
    }, i195;
}(ui), oi = function(t60) {
    function i199() {
        return null !== t60 && t60.apply(this, arguments) || this;
    }
    return e(i199, t60), i199.prototype.Fe = function(t) {
        var i200 = this.v, n121 = t.createLinearGradient(0, 0, 0, i200.Ee), s71 = st(i200.Be / i200.Ee, 0, 1);
        return n121.addColorStop(0, i200.vu), n121.addColorStop(s71, i200._u), n121.addColorStop(s71, i200.du), n121.addColorStop(1, i200.wu), n121;
    }, i199;
}(Zt), li = function(t61) {
    function i201() {
        return null !== t61 && t61.apply(this, arguments) || this;
    }
    return e(i201, t61), i201.prototype.We = function(t) {
        var i202 = this.v, n122 = t.createLinearGradient(0, 0, 0, i202.Ee), s72 = st(i202.Be / i202.Ee, 0, 1);
        return n122.addColorStop(0, i202.Ve), n122.addColorStop(s72, i202.Ve), n122.addColorStop(s72, i202.Oe), n122.addColorStop(1, i202.Oe), n122;
    }, i201;
}(Gt), fi = function(t62) {
    function i203(i204, n123) {
        var s73 = t62.call(this, i204, n123) || this;
        return s73.Mu = new oi, s73.bu = new li, s73.A = new g, s73.A.i([
            s73.Mu,
            s73.bu
        ]), s73;
    }
    return e(i203, t62), i203.prototype.P = function(t, i) {
        if (!this.qe.U()) return null;
        var n124 = this.qe.H();
        if (null === n124) return null;
        var s74 = this.qe.ct();
        this.Ye();
        var h45 = this.qe.$().K(s74.baseValue.price, n124.X), r29 = this.Ue.j().Wr();
        return this.Mu._({
            m: this.Ie,
            vu: s74.topFillColor1,
            _u: s74.topFillColor2,
            du: s74.bottomFillColor1,
            wu: s74.bottomFillColor2,
            rt: s74.lineWidth,
            ut: s74.lineStyle,
            Le: 0,
            Be: h45,
            Ee: t,
            M: this.je,
            Te: r29
        }), this.bu._({
            m: this.Ie,
            Ve: s74.topLineColor,
            Oe: s74.bottomLineColor,
            rt: s74.lineWidth,
            ut: s74.lineStyle,
            Le: 0,
            Be: h45,
            Ee: t,
            M: this.je,
            Te: r29
        }), this.A;
    }, i203.prototype.nu = function(t, i205) {
        return this.Qe(t, i205);
    }, i203;
}(hi), ci = function() {
    function t63() {
        this.tt = null, this.ru = 0;
    }
    return t63.prototype._ = function(t) {
        this.tt = t;
    }, t63.prototype.h = function(t64, i206, n125, s75) {
        if (null !== this.tt && 0 !== this.tt.Hi.length && null !== this.tt.M) {
            if (this.ru = (function(t, i207) {
                if (t >= 2.5 && t <= 4) return Math.floor(3 * i207);
                var n126 = 1 - 0.2 * Math.atan(Math.max(4, t) - 4) / (0.5 * Math.PI), s76 = Math.floor(t * n126 * i207), h48 = Math.floor(t * i207), r32 = Math.min(s76, h48);
                return Math.max(Math.floor(i207), r32);
            })(this.tt.Wr, i206), this.ru >= 2) Math.floor(i206) % 2 != this.ru % 2 && this.ru--;
            var h46 = this.tt.Hi;
            this.tt.mu && this.pu(t64, h46, this.tt.M, i206), this.tt.gu && this.yu(t64, h46, this.tt.M, this.tt.Wr, i206);
            var r30 = this.ku(i206);
            (!this.tt.gu || this.ru > 2 * r30) && this.Cu(t64, h46, this.tt.M, i206);
        }
    }, t63.prototype.pu = function(t, i208, n127, s77) {
        if (null !== this.tt) {
            var h49 = "", r33 = Math.min(Math.floor(s77), Math.floor(this.tt.Wr * s77));
            r33 = Math.max(Math.floor(s77), Math.min(r33, this.ru));
            for(var e25 = Math.floor(0.5 * r33), u22 = null, a18 = n127.from; a18 < n127.to; a18++){
                var o15 = i208[a18];
                o15.Nu !== h49 && (t.fillStyle = o15.Nu, h49 = o15.Nu);
                var l11 = Math.round(Math.min(o15.Ts, o15.Fs) * s77), f7 = Math.round(Math.max(o15.Ts, o15.Fs) * s77), c11 = Math.round(o15.Bs * s77), v10 = Math.round(o15.Ls * s77), _9 = Math.round(s77 * o15.p) - e25, d8 = _9 + r33 - 1;
                null !== u22 && (_9 = Math.max(u22 + 1, _9), _9 = Math.min(_9, d8));
                var w8 = d8 - _9 + 1;
                t.fillRect(_9, c11, w8, l11 - c11), t.fillRect(_9, f7 + 1, w8, v10 - f7), u22 = d8;
            }
        }
    }, t63.prototype.ku = function(t) {
        var i209 = Math.floor(1 * t);
        this.ru <= 2 * i209 && (i209 = Math.floor(0.5 * (this.ru - 1)));
        var n128 = Math.max(Math.floor(t), i209);
        return this.ru <= 2 * n128 ? Math.max(Math.floor(t), Math.floor(1 * t)) : n128;
    }, t63.prototype.yu = function(t, i210, n129, s, h50) {
        if (null !== this.tt) for(var r34 = "", e26 = this.ku(h50), u23 = null, a19 = n129.from; a19 < n129.to; a19++){
            var o16 = i210[a19];
            o16.Z !== r34 && (t.fillStyle = o16.Z, r34 = o16.Z);
            var l12 = Math.round(o16.p * h50) - Math.floor(0.5 * this.ru), f8 = l12 + this.ru - 1, c12 = Math.round(Math.min(o16.Ts, o16.Fs) * h50), v11 = Math.round(Math.max(o16.Ts, o16.Fs) * h50);
            if (null !== u23 && (l12 = Math.max(u23 + 1, l12), l12 = Math.min(l12, f8)), this.tt.Wr * h50 > 2 * e26) z(t, l12, c12, f8 - l12 + 1, v11 - c12 + 1, e26);
            else {
                var _10 = f8 - l12 + 1;
                t.fillRect(l12, c12, _10, v11 - c12 + 1);
            }
            u23 = f8;
        }
    }, t63.prototype.Cu = function(t, i211, n130, s78) {
        if (null !== this.tt) for(var h51 = "", r35 = this.ku(s78), e27 = n130.from; e27 < n130.to; e27++){
            var u24 = i211[e27], a20 = Math.round(Math.min(u24.Ts, u24.Fs) * s78), o17 = Math.round(Math.max(u24.Ts, u24.Fs) * s78), l13 = Math.round(u24.p * s78) - Math.floor(0.5 * this.ru), f9 = l13 + this.ru - 1;
            if (u24.et !== h51) {
                var c13 = u24.et;
                t.fillStyle = c13, h51 = c13;
            }
            this.tt.gu && (l13 += r35, a20 += r35, f9 -= r35, o17 -= r35), a20 > o17 || t.fillRect(l13, a20, f9 - l13 + 1, o17 - a20 + 1);
        }
    }, t63;
}(), vi = function(t65) {
    function i212() {
        var i213 = null !== t65 && t65.apply(this, arguments) || this;
        return i213.ot = new ci, i213;
    }
    return e(i212, t65), i212.prototype.P = function(t, i) {
        if (!this.qe.U()) return null;
        var n131 = this.qe.ct();
        this.Ye();
        var s79 = {
            Hi: this.Ie,
            Wr: this.Ue.j().Wr(),
            mu: n131.wickVisible,
            gu: n131.borderVisible,
            M: this.je
        };
        return this.ot._(s79), this.ot;
    }, i212.prototype.Xe = function() {
        var t = this;
        this.Ie.forEach(function(i214) {
            var n132 = t.qe.tu().cu(i214.S);
            i214.et = n132.fu, i214.Nu = n132.xu, i214.Z = n132.Su;
        });
    }, i212.prototype.nu = function(t, i215, n133) {
        var s80 = n133.cu(t);
        return u(u({
        }, this.lu(t, i215, n133)), {
            et: s80.fu,
            Nu: s80.xu,
            Z: s80.Su
        });
    }, i212;
}(ui), _i = function() {
    function t66() {
        this.tt = null, this.Du = [];
    }
    return t66.prototype._ = function(t) {
        this.tt = t, this.Du = [];
    }, t66.prototype.h = function(t, i216, n, s) {
        if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
            this.Du.length || this.Au(i216);
            for(var h52 = Math.max(1, Math.floor(i216)), r36 = Math.round(this.tt.Tu * i216) - Math.floor(h52 / 2), e28 = r36 + h52, u25 = this.tt.M.from; u25 < this.tt.M.to; u25++){
                var a21 = this.tt.m[u25], o18 = this.Du[u25 - this.tt.M.from], l14 = Math.round(a21.g * i216);
                t.fillStyle = a21.et;
                var f10 = void 0, c14 = void 0;
                l14 <= r36 ? (f10 = l14, c14 = e28) : (f10 = r36, c14 = l14 - Math.floor(h52 / 2) + h52), t.fillRect(o18.hh, f10, o18.rh - o18.hh + 1, c14 - f10);
            }
        }
    }, t66.prototype.Au = function(t) {
        if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
            var i217 = Math.ceil(this.tt.Wr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)), n134 = Math.round(this.tt.Wr * t) - i217;
            this.Du = new Array(this.tt.M.to - this.tt.M.from);
            for(var s81 = this.tt.M.from; s81 < this.tt.M.to; s81++){
                var h53, r37 = this.tt.m[s81], e29 = Math.round(r37.p * t), u26 = void 0, a22 = void 0;
                if (n134 % 2) u26 = e29 - (h53 = (n134 - 1) / 2), a22 = e29 + h53;
                else u26 = e29 - (h53 = n134 / 2), a22 = e29 + h53 - 1;
                this.Du[s81 - this.tt.M.from] = {
                    hh: u26,
                    rh: a22,
                    Bu: e29,
                    Lu: r37.p * t,
                    S: r37.S
                };
            }
            for(s81 = this.tt.M.from + 1; s81 < this.tt.M.to; s81++){
                var o19 = this.Du[s81 - this.tt.M.from], l15 = this.Du[s81 - this.tt.M.from - 1];
                o19.S === l15.S + 1 && o19.hh - l15.rh !== i217 + 1 && (l15.Bu > l15.Lu ? l15.rh = o19.hh - i217 - 1 : o19.hh = l15.rh + i217 + 1);
            }
            var f11 = Math.ceil(this.tt.Wr * t);
            for(s81 = this.tt.M.from; s81 < this.tt.M.to; s81++){
                (o19 = this.Du[s81 - this.tt.M.from]).rh < o19.hh && (o19.rh = o19.hh);
                var c15 = o19.rh - o19.hh + 1;
                f11 = Math.min(c15, f11);
            }
            if (i217 > 0 && f11 < 4) for(s81 = this.tt.M.from; s81 < this.tt.M.to; s81++)(c15 = (o19 = this.Du[s81 - this.tt.M.from]).rh - o19.hh + 1) > f11 && (o19.Bu > o19.Lu ? o19.rh -= 1 : o19.hh += 1);
        } else this.Du = [];
    }, t66;
}();
function di(t) {
    return {
        m: [],
        Wr: t,
        Tu: NaN,
        M: null
    };
}
function wi(t, i218, n135) {
    return {
        S: t,
        D: i218,
        p: NaN,
        g: NaN,
        et: n135
    };
}
var Mi = function(t67) {
    function i219(i220, n136) {
        var s82 = t67.call(this, i220, n136, !1) || this;
        return s82.A = new g, s82.Fu = di(0), s82.ot = new _i, s82;
    }
    return e(i219, t67), i219.prototype.P = function(t, i) {
        return this.qe.U() ? (this.Ye(), this.A) : null;
    }, i219.prototype.Ke = function() {
        var t = this.Ue.j().Wr();
        this.Fu = di(t);
        for(var i221 = 0, n = 0, s83 = this.qe.ct().color, h54 = 0, r38 = this.qe.Hi().iu(); h54 < r38.length; h54++){
            var e30 = r38[h54], u27 = e30.X[3], a23 = void 0 !== e30.et ? e30.et : s83, o20 = wi(e30.Ph, u27, a23);
            ++i221 < this.Fu.m.length ? this.Fu.m[i221] = o20 : this.Fu.m.push(o20), this.Ie[n++] = {
                S: e30.Ph,
                p: 0
            };
        }
        this.ot._(this.Fu), this.A.i([
            this.ot
        ]);
    }, i219.prototype.Xe = function() {
    }, i219.prototype.Ze = function() {
        t67.prototype.Ze.call(this), this.Fu.M = null;
    }, i219.prototype.Ge = function(t, i222, n137) {
        if (null !== this.je) {
            var s84 = i222.Wr(), h55 = f(i222.mr()), r39 = t.K(this.qe.ct().base, n137);
            i222.Lr(this.Fu.m), t.Ss(this.Fu.m, n137), this.Fu.Tu = r39, this.Fu.M = ni(this.Fu.m, h55, !1), this.Fu.Wr = s84, this.ot._(this.Fu);
        }
    }, i219;
}(si), bi = function(t68) {
    function i223(i224, n138) {
        var s85 = t68.call(this, i224, n138) || this;
        return s85.hu = new Qt, s85;
    }
    return e(i223, t68), i223.prototype.P = function(t, i) {
        if (!this.qe.U()) return null;
        var n139 = this.qe.ct();
        this.Ye();
        var s86 = {
            m: this.Ie,
            N: n139.color,
            ut: n139.lineStyle,
            Le: n139.lineType,
            rt: n139.lineWidth,
            M: this.je,
            Te: this.Ue.j().Wr()
        };
        return this.hu._(s86), this.hu;
    }, i223.prototype.nu = function(t, i225) {
        return this.Qe(t, i225);
    }, i223;
}(hi), mi = /[2-9]/g, pi = function() {
    function t69(t) {
        void 0 === t && (t = 50), this.kh = new Map, this.Eu = 0, this.Vu = Array.from(new Array(t));
    }
    return t69.prototype.Ou = function() {
        this.kh.clear(), this.Vu.fill(void 0);
    }, t69.prototype.Vt = function(t, i226, n140) {
        var s87 = n140 || mi, h56 = String(i226).replace(s87, "0"), r40 = this.kh.get(h56);
        if (void 0 === r40) {
            if (0 === (r40 = t.measureText(h56).width) && 0 !== i226.length) return 0;
            var e31 = this.Vu[this.Eu];
            void 0 !== e31 && this.kh.delete(e31), this.Vu[this.Eu] = h56, this.Eu = (this.Eu + 1) % this.Vu.length, this.kh.set(h56, r40);
        }
        return r40;
    }, t69;
}(), gi = function() {
    function t70(t) {
        this.Wu = null, this.oe = null, this.zu = "right", this.$h = 0, this.Pu = t;
    }
    return t70.prototype.Ru = function(t, i227, n141, s88) {
        this.Wu = t, this.oe = i227, this.$h = n141, this.zu = s88;
    }, t70.prototype.h = function(t, i228) {
        null !== this.oe && null !== this.Wu && this.Wu.h(t, this.oe, this.Pu, this.$h, this.zu, i228);
    }, t70;
}(), yi = function() {
    function t71(t, i229, n142) {
        this.Iu = t, this.Pu = new pi(50), this.ju = i229, this.F = n142, this.fe = -1, this.ot = new gi(this.Pu);
    }
    return t71.prototype.P = function(t, i230) {
        var n143 = this.F.qu(this.ju);
        if (null === n143) return null;
        var s89 = n143.Uu(this.ju) ? n143.xi() : this.ju.$();
        if (null === s89) return null;
        var h57 = n143.Hu(s89);
        if ("overlay" === h57) return null;
        var r41 = this.F.Yu();
        return r41.Wt !== this.fe && (this.fe = r41.Wt, this.Pu.Ou()), this.ot.Ru(this.Iu.Zt(), r41, i230, h57), this.ot;
    }, t71;
}(), ki = function() {
    function t72() {
        this.tt = null;
    }
    return t72.prototype._ = function(t) {
        this.tt = t;
    }, t72.prototype.h = function(t, i231, n, r) {
        if (null !== this.tt && !1 !== this.tt.U) {
            var e32 = Math.round(this.tt.g * i231);
            if (!(e32 < 0 || e32 > Math.ceil(this.tt.Mt * i231))) {
                var u28 = Math.ceil(this.tt.wt * i231);
                t.lineCap = "butt", t.strokeStyle = this.tt.et, t.lineWidth = Math.floor(this.tt.rt * i231), s(t, this.tt.ut), h(t, e32, 0, u28);
            }
        }
    }, t72;
}(), Ci = function() {
    function t73(t) {
        this.Ku = {
            wt: 0,
            Mt: 0,
            g: 0,
            et: "rgba(0, 0, 0, 0)",
            rt: 1,
            ut: 0,
            U: !1
        }, this.$u = new ki, this.L = !0, this.qe = t, this.Ue = t.vt(), this.$u._(this.Ku);
    }
    return t73.prototype.O = function() {
        this.L = !0;
    }, t73.prototype.P = function(t, i232) {
        return this.qe.U() ? (this.L && (this.Xu(t, i232), this.L = !1), this.$u) : null;
    }, t73;
}(), Ni = function(t74) {
    function i233(i234) {
        return t74.call(this, i234) || this;
    }
    return e(i233, t74), i233.prototype.Xu = function(t, i235) {
        this.Ku.U = !1;
        var n144 = this.qe.$(), s90 = n144.os().os;
        if (2 === s90 || 3 === s90) {
            var h58 = this.qe.ct();
            if (h58.baseLineVisible && this.qe.U()) {
                var r42 = this.qe.H();
                null !== r42 && (this.Ku.U = !0, this.Ku.g = n144.K(r42.X, r42.X), this.Ku.wt = i235, this.Ku.Mt = t, this.Ku.et = h58.baseLineColor, this.Ku.rt = h58.baseLineWidth, this.Ku.ut = h58.baseLineStyle);
            }
        }
    }, i233;
}(Ci), xi = function() {
    function t75() {
        this.tt = null;
    }
    return t75.prototype._ = function(t) {
        this.tt = t;
    }, t75.prototype.Zu = function() {
        return this.tt;
    }, t75.prototype.h = function(t, i236, n, s) {
        var h59 = this.tt;
        if (null !== h59) {
            t.save();
            var r43 = Math.max(1, Math.floor(i236)), e33 = r43 % 2 / 2, u29 = Math.round(h59.Lu.x * i236) + e33, a24 = h59.Lu.y * i236;
            t.fillStyle = h59.Ju, t.beginPath();
            var o21 = Math.max(2, 1.5 * h59.Gu) * i236;
            t.arc(u29, a24, o21, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = h59.Qu, t.beginPath(), t.arc(u29, a24, h59.C * i236, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = r43, t.strokeStyle = h59.ta, t.beginPath(), t.arc(u29, a24, h59.C * i236 + r43 / 2, 0, 2 * Math.PI, !1), t.stroke(), t.restore();
        }
    }, t75;
}(), Si = [
    {
        ia: 0,
        na: 0.25,
        sa: 4,
        ha: 10,
        ra: 0.25,
        ea: 0,
        ua: 0.4,
        aa: 0.8
    },
    {
        ia: 0.25,
        na: 0.525,
        sa: 10,
        ha: 14,
        ra: 0,
        ea: 0,
        ua: 0.8,
        aa: 0
    },
    {
        ia: 0.525,
        na: 1,
        sa: 14,
        ha: 14,
        ra: 0,
        ea: 0,
        ua: 0,
        aa: 0
    }
];
function Di(t76, i237, n145, s91) {
    return (function(t, i238) {
        if ("transparent" === t) return t;
        var n146 = O(t), s92 = n146[3];
        return "rgba(" + n146[0] + ", " + n146[1] + ", " + n146[2] + ", " + i238 * s92 + ")";
    })(t76, n145 + (s91 - n145) * i237);
}
function Ai(t, i239) {
    for(var n147, s93 = t % 2600 / 2600, h60 = 0, r44 = Si; h60 < r44.length; h60++){
        var e34 = r44[h60];
        if (s93 >= e34.ia && s93 <= e34.na) {
            n147 = e34;
            break;
        }
    }
    o(void 0 !== n147, "Last price animation internal logic error");
    var u30, a25, l16, f12 = (s93 - n147.ia) / (n147.na - n147.ia);
    return {
        Qu: Di(i239, f12, n147.ra, n147.ea),
        ta: Di(i239, f12, n147.ua, n147.aa),
        C: (u30 = f12, a25 = n147.sa, l16 = n147.ha, a25 + (l16 - a25) * u30)
    };
}
var Ti = function() {
    function t77(t) {
        this.ot = new xi, this.L = !0, this.oa = !0, this.la = performance.now(), this.fa = this.la - 1, this.ca = t;
    }
    return t77.prototype.O = function(t) {
        if (this.L = !0, "data" === t && 2 === this.ca.ct().lastPriceAnimation) {
            var i240 = performance.now(), n148 = this.fa - i240;
            if (n148 > 0) return void (n148 < 650 && (this.fa += 2600));
            this.la = i240, this.fa = i240 + 2600;
        }
    }, t77.prototype.va = function() {
        this.oa = !0;
    }, t77.prototype.U = function() {
        return 0 !== this.ca.ct().lastPriceAnimation;
    }, t77.prototype._a = function() {
        switch(this.ca.ct().lastPriceAnimation){
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                return performance.now() <= this.fa;
        }
    }, t77.prototype.P = function(t, i241) {
        return this.L ? (this.R(t, i241), this.L = !1, this.oa = !1) : this.oa && (this.da(), this.oa = !1), this.ot;
    }, t77.prototype.R = function(t, i) {
        this.ot._(null);
        var n149 = this.ca.vt().j(), s94 = n149.mr(), h61 = this.ca.H();
        if (null !== s94 && null !== h61) {
            var r45 = this.ca.wa(!0);
            if (!r45.Ma && s94.Eh(r45.Ph)) {
                var e35 = {
                    x: n149.G(r45.Ph),
                    y: this.ca.$().K(r45.D, h61.X)
                }, u31 = r45.et, a26 = this.ca.ct().lineWidth, o22 = Ai(this.ba(), u31);
                this.ot._({
                    Ju: u31,
                    Gu: a26,
                    Qu: o22.Qu,
                    ta: o22.ta,
                    C: o22.C,
                    Lu: e35
                });
            }
        }
    }, t77.prototype.da = function() {
        var t = this.ot.Zu();
        if (null !== t) {
            var i242 = Ai(this.ba(), t.Ju);
            t.Qu = i242.Qu, t.ta = i242.ta, t.C = i242.C;
        }
    }, t77.prototype.ba = function() {
        return this._a() ? performance.now() - this.la : 2599;
    }, t77;
}();
function Bi(t, i243) {
    return ut(Math.min(Math.max(t, 12), 30) * i243);
}
function Li(t, i244) {
    switch(t){
        case "arrowDown":
        case "arrowUp":
            return Bi(i244, 1);
        case "circle":
            return Bi(i244, 0.8);
        case "square":
            return Bi(i244, 0.7);
    }
}
function Fi(t) {
    return et(Bi(t, 1));
}
function Ei(t) {
    return Math.max(Bi(t, 0.1), 3);
}
function Vi(t, i245, n150, s95, h62) {
    var r46 = Li("square", n150), e36 = (r46 - 1) / 2, u32 = t - e36, a27 = i245 - e36;
    return s95 >= u32 && s95 <= u32 + r46 && h62 >= a27 && h62 <= a27 + r46;
}
function Oi(t, i246, n151, s96, h63) {
    var r47 = (Li("arrowUp", h63) - 1) / 2, e37 = (ut(h63 / 2) - 1) / 2;
    i246.beginPath(), t ? (i246.moveTo(n151 - r47, s96), i246.lineTo(n151, s96 - r47), i246.lineTo(n151 + r47, s96), i246.lineTo(n151 + e37, s96), i246.lineTo(n151 + e37, s96 + r47), i246.lineTo(n151 - e37, s96 + r47), i246.lineTo(n151 - e37, s96)) : (i246.moveTo(n151 - r47, s96), i246.lineTo(n151, s96 + r47), i246.lineTo(n151 + r47, s96), i246.lineTo(n151 + e37, s96), i246.lineTo(n151 + e37, s96 - r47), i246.lineTo(n151 - e37, s96 - r47), i246.lineTo(n151 - e37, s96)), i246.fill();
}
function Wi(t, i247, n152, s97, h64, r48) {
    return Vi(i247, n152, s97, h64, r48);
}
var zi = function(t78) {
    function i248() {
        var i249 = null !== t78 && t78.apply(this, arguments) || this;
        return i249.tt = null, i249.Pu = new pi, i249.fe = -1, i249.ce = "", i249.ma = "", i249;
    }
    return e(i248, t78), i248.prototype._ = function(t) {
        this.tt = t;
    }, i248.prototype.Ru = function(t, i250) {
        this.fe === t && this.ce === i250 || (this.fe = t, this.ce = i250, this.ma = Ut(t, i250), this.Pu.Ou());
    }, i248.prototype.pa = function(t, i251) {
        if (null === this.tt || null === this.tt.M) return null;
        for(var n153 = this.tt.M.from; n153 < this.tt.M.to; n153++){
            var s98 = this.tt.m[n153];
            if (Ri(s98, t, i251)) return {
                ga: s98.ya,
                ka: s98.ka
            };
        }
        return null;
    }, i248.prototype.u = function(t, i, n) {
        if (null !== this.tt && null !== this.tt.M) {
            t.textBaseline = "middle", t.font = this.ma;
            for(var s99 = this.tt.M.from; s99 < this.tt.M.to; s99++){
                var h65 = this.tt.m[s99];
                void 0 !== h65.Et && (h65.Et.wt = this.Pu.Vt(t, h65.Et.Ca), h65.Et.Mt = this.fe), Pi(h65, t);
            }
        }
    }, i248;
}(y);
function Pi(t79, i252) {
    i252.fillStyle = t79.et, void 0 !== t79.Et && (function(t, i253, n154, s100) {
        t.fillText(i253, n154, s100);
    })(i252, t79.Et.Ca, t79.p - t79.Et.wt / 2, t79.Et.g), (function(t80, i254) {
        if (0 === t80.Je) return;
        switch(t80.Na){
            case "arrowDown":
                return void Oi(!1, i254, t80.p, t80.g, t80.Je);
            case "arrowUp":
                return void Oi(!0, i254, t80.p, t80.g, t80.Je);
            case "circle":
                return void function(t, i255, n155, s101) {
                    var h66 = (Li("circle", s101) - 1) / 2;
                    t.beginPath(), t.arc(i255, n155, h66, 0, 2 * Math.PI, !1), t.fill();
                }(i254, t80.p, t80.g, t80.Je);
            case "square":
                return void function(t, i256, n156, s102) {
                    var h67 = Li("square", s102), r49 = (h67 - 1) / 2, e38 = i256 - r49, u33 = n156 - r49;
                    t.fillRect(e38, u33, h67, h67);
                }(i254, t80.p, t80.g, t80.Je);
        }
        t80.Na;
    })(t79, i252);
}
function Ri(t81, i257, n157) {
    return !(void 0 === t81.Et || !function(t, i258, n158, s103, h68, r50) {
        var e39 = s103 / 2;
        return h68 >= t && h68 <= t + n158 && r50 >= i258 - e39 && r50 <= i258 + e39;
    }(t81.p, t81.Et.g, t81.Et.wt, t81.Et.Mt, i257, n157)) || (function(t82, i259, n159) {
        if (0 === t82.Je) return !1;
        switch(t82.Na){
            case "arrowDown":
            case "arrowUp":
                return Wi(0, t82.p, t82.g, t82.Je, i259, n159);
            case "circle":
                return (function(t, i260, n160, s104, h69) {
                    var r51 = 2 + Li("circle", n160) / 2, e40 = t - s104, u34 = i260 - h69;
                    return Math.sqrt(e40 * e40 + u34 * u34) <= r51;
                })(t82.p, t82.g, t82.Je, i259, n159);
            case "square":
                return Vi(t82.p, t82.g, t82.Je, i259, n159);
        }
    })(t81, i257, n157);
}
function Ii(t, i261, n161, s105, h70, r52, e41, u35, a28) {
    var o23 = _(n161) ? n161 : n161.close, l17 = _(n161) ? n161 : n161.high, f13 = _(n161) ? n161 : n161.low, c16 = _(i261.size) ? Math.max(i261.size, 0) : 1, v12 = Fi(u35.Wr()) * c16, d9 = v12 / 2;
    switch(t.Je = v12, i261.position){
        case "inBar":
            return t.g = e41.K(o23, a28), void (void 0 !== t.Et && (t.Et.g = t.g + d9 + r52 + 0.6 * h70));
        case "aboveBar":
            return t.g = e41.K(l17, a28) - d9 - s105.xa, void 0 !== t.Et && (t.Et.g = t.g - d9 - 0.6 * h70, s105.xa += 1.2 * h70), void (s105.xa += v12 + r52);
        case "belowBar":
            return t.g = e41.K(f13, a28) + d9 + s105.Sa, void 0 !== t.Et && (t.Et.g = t.g + d9 + r52 + 0.6 * h70, s105.Sa += 1.2 * h70), void (s105.Sa += v12 + r52);
    }
    i261.position;
}
var ji = function() {
    function t83(t, i262) {
        this.L = !0, this.Da = !0, this.Aa = !0, this.Ta = null, this.ot = new zi, this.ca = t, this.hi = i262, this.tt = {
            m: [],
            M: null
        };
    }
    return t83.prototype.O = function(t) {
        this.L = !0, this.Aa = !0, "data" === t && (this.Da = !0);
    }, t83.prototype.P = function(t, i, n) {
        if (!this.ca.U()) return null;
        this.L && this.Ye();
        var s106 = this.hi.ct().layout;
        return this.ot.Ru(s106.fontSize, s106.fontFamily), this.ot._(this.tt), this.ot;
    }, t83.prototype.Ba = function() {
        if (this.Aa) {
            if (this.ca.La().length > 0) {
                var t = this.hi.j().Wr(), i263 = Ei(t), n162 = 1.5 * Fi(t) + 2 * i263;
                this.Ta = {
                    above: n162,
                    below: n162
                };
            } else this.Ta = null;
            this.Aa = !1;
        }
        return this.Ta;
    }, t83.prototype.Ye = function() {
        var t84 = this.ca.$(), i264 = this.hi.j(), n163 = this.ca.La();
        this.Da && (this.tt.m = n163.map(function(t) {
            return {
                S: t.time,
                p: 0,
                g: 0,
                Je: 0,
                Na: t.shape,
                et: t.color,
                ya: t.ya,
                ka: t.id,
                Et: void 0
            };
        }), this.Da = !1);
        var s107 = this.hi.ct().layout;
        this.tt.M = null;
        var h71 = i264.mr();
        if (null !== h71) {
            var r53 = this.ca.H();
            if (null !== r53 && 0 !== this.tt.m.length) {
                var e42 = NaN, u36 = Ei(i264.Wr()), a29 = {
                    xa: u36,
                    Sa: u36
                };
                this.tt.M = ni(this.tt.m, h71, !0);
                for(var o24 = this.tt.M.from; o24 < this.tt.M.to; o24++){
                    var l18 = n163[o24];
                    l18.time !== e42 && (a29.xa = u36, a29.Sa = u36, e42 = l18.time);
                    var f14 = this.tt.m[o24];
                    f14.p = i264.G(l18.time), void 0 !== l18.text && l18.text.length > 0 && (f14.Et = {
                        Ca: l18.text,
                        g: 0,
                        wt: 0,
                        Mt: 0
                    });
                    var c17 = this.ca.Fa(l18.time);
                    null !== c17 && Ii(f14, l18, c17, a29, s107.fontSize, u36, t84, i264, r53.X);
                }
                this.L = !1;
            }
        }
    }, t83;
}(), qi = function(t85) {
    function i265(i266) {
        return t85.call(this, i266) || this;
    }
    return e(i265, t85), i265.prototype.Xu = function(t, i267) {
        var n164 = this.Ku;
        n164.U = !1;
        var s108 = this.qe.ct();
        if (s108.priceLineVisible && this.qe.U()) {
            var h72 = this.qe.wa(0 === s108.priceLineSource);
            h72.Ma || (n164.U = !0, n164.g = h72.zt, n164.et = this.qe.Ea(h72.et), n164.wt = i267, n164.Mt = t, n164.rt = s108.priceLineWidth, n164.ut = s108.priceLineStyle);
        }
    }, i265;
}(Ci), Ui = function(t86) {
    function i268(i269) {
        var n165 = t86.call(this) || this;
        return n165.lt = i269, n165;
    }
    return e(i268, t86), i268.prototype.Jt = function(t, i270, n166) {
        t.U = !1, i270.U = !1;
        var s109 = this.lt;
        if (s109.U()) {
            var h73 = s109.ct(), r54 = h73.lastValueVisible, e43 = "" !== s109.Va(), u37 = 0 === h73.seriesLastValueMode, a30 = s109.wa(!1);
            if (!a30.Ma) {
                r54 && (t.Et = this.Oa(a30, r54, u37), t.U = 0 !== t.Et.length), (e43 || u37) && (i270.Et = this.Wa(a30, r54, e43, u37), i270.U = i270.Et.length > 0);
                var o25 = s109.Ea(a30.et), l19 = W(o25);
                n166.yt = l19.yt, n166.et = l19.kt, n166.zt = a30.zt, i270.Z = s109.vt().J(a30.zt / s109.$().Mt()), t.Z = o25;
            }
        }
    }, i268.prototype.Wa = function(t, i271, n167, s110) {
        var h74 = "", r55 = this.lt.Va();
        return n167 && 0 !== r55.length && (h74 += r55 + " "), i271 && s110 && (h74 += this.lt.$().cs() ? t.za : t.Pa), h74.trim();
    }, i268.prototype.Oa = function(t, i272, n168) {
        return i272 ? n168 ? this.lt.$().cs() ? t.Pa : t.za : t.Et : "";
    }, i268;
}(U), Hi = function() {
    function t87(t, i273) {
        this.On = t, this.Ra = i273 || null;
    }
    return t87.prototype.Cs = function() {
        return this.On;
    }, t87.prototype.eh = function() {
        return this.Ra;
    }, t87.prototype.Mn = function() {
        return null === this.On ? null : {
            priceRange: this.On.Mn(),
            margins: this.Ra || void 0
        };
    }, t87.bn = function(i274) {
        return null === i274 ? null : new t87(nt.bn(i274.priceRange), i274.margins);
    }, t87;
}(), Yi = function(t88) {
    function i275(i276, n169) {
        var s111 = t88.call(this, i276) || this;
        return s111.Ia = n169, s111;
    }
    return e(i275, t88), i275.prototype.Xu = function(t, i277) {
        var n170 = this.Ku;
        if (n170.U = !1, this.qe.U()) {
            var s112 = this.Ia.ja();
            if (null !== s112) {
                var h75 = this.Ia.ct();
                n170.U = !0, n170.g = s112, n170.et = h75.color, n170.wt = i277, n170.Mt = t, n170.rt = h75.lineWidth, n170.ut = h75.lineStyle;
            }
        }
    }, i275;
}(Ci), Ki = function(t89) {
    function i278(i279, n171) {
        var s113 = t89.call(this) || this;
        return s113.ca = i279, s113.Ia = n171, s113;
    }
    return e(i278, t89), i278.prototype.Jt = function(t, i280, n172) {
        t.U = !1, i280.U = !1;
        var s114 = this.Ia.ct(), h76 = s114.axisLabelVisible, r56 = "" !== s114.title, e44 = this.ca;
        if (h76 && e44.U()) {
            var u38 = this.Ia.ja();
            if (null !== u38) {
                r56 && (i280.Et = s114.title, i280.U = !0), i280.Z = e44.vt().J(u38 / e44.$().Mt()), t.Et = e44.$().Zs(s114.price), t.U = !0;
                var a31 = W(s114.color);
                n172.yt = a31.yt, n172.et = a31.kt, n172.zt = u38;
            }
        }
    }, i278;
}(U), $i = function() {
    function t90(t, i281) {
        this.ca = t, this.ki = i281, this.qa = new Yi(t, this), this.Iu = new Ki(t, this), this.Ua = new yi(this.Iu, t, t.vt());
    }
    return t90.prototype.rs = function(t) {
        v(this.ki, t), this.O(), this.ca.vt().Or();
    }, t90.prototype.ct = function() {
        return this.ki;
    }, t90.prototype.zi = function() {
        return [
            this.qa,
            this.Ua
        ];
    }, t90.prototype.Ha = function() {
        return this.Iu;
    }, t90.prototype.O = function() {
        this.qa.O(), this.Iu.O();
    }, t90.prototype.ja = function() {
        var t = this.ca, i282 = t.$();
        if (t.vt().j().ti() || i282.ti()) return null;
        var n173 = t.H();
        return null === n173 ? null : i282.K(this.ki.price, n173.X);
    }, t90;
}(), Xi = function(t) {
    function i283(i284) {
        var n174 = t.call(this) || this;
        return n174.hi = i284, n174;
    }
    return e(i283, t), i283.prototype.vt = function() {
        return this.hi;
    }, i283;
}(X), Zi = {
    fu: "",
    Su: "",
    xu: ""
}, Ji = function() {
    function t91(t) {
        this.ca = t;
    }
    return t91.prototype.cu = function(t, i285) {
        var n175 = this.ca.Ya(), s115 = this.ca.ct();
        switch(n175){
            case "Line":
                return this.Ka(s115);
            case "Area":
                return this.$a(s115);
            case "Baseline":
                return this.Xa(s115, t, i285);
            case "Bar":
                return this.Za(s115, t, i285);
            case "Candlestick":
                return this.Ja(s115, t, i285);
            case "Histogram":
                return this.Ga(s115, t, i285);
        }
        throw new Error("Unknown chart style");
    }, t91.prototype.Za = function(t, i286, n176) {
        var s116 = u({
        }, Zi), h77 = t.upColor, r57 = t.downColor, e45 = h77, a32 = r57, o26 = f(this.Qa(i286, n176)), l20 = c(o26.X[0]) <= c(o26.X[3]);
        return s116.fu = l20 ? h77 : r57, s116.Su = l20 ? e45 : a32, s116;
    }, t91.prototype.Ja = function(t, i287, n177) {
        var s117 = u({
        }, Zi), h78 = t.upColor, r58 = t.downColor, e46 = t.borderUpColor, a33 = t.borderDownColor, o27 = t.wickUpColor, l21 = t.wickDownColor, v13 = f(this.Qa(i287, n177)), _11 = c(v13.X[0]) <= c(v13.X[3]);
        return s117.fu = _11 ? h78 : r58, s117.Su = _11 ? e46 : a33, s117.xu = _11 ? o27 : l21, s117;
    }, t91.prototype.$a = function(t) {
        return u(u({
        }, Zi), {
            fu: t.lineColor
        });
    }, t91.prototype.Xa = function(t, i288, n178) {
        var s118 = f(this.Qa(i288, n178)).X[3] >= t.baseValue.price;
        return u(u({
        }, Zi), {
            fu: s118 ? t.topLineColor : t.bottomLineColor
        });
    }, t91.prototype.Ka = function(t) {
        return u(u({
        }, Zi), {
            fu: t.color
        });
    }, t91.prototype.Ga = function(t, i289, n179) {
        var s119 = u({
        }, Zi), h79 = f(this.Qa(i289, n179));
        return s119.fu = void 0 !== h79.et ? h79.et : t.color, s119;
    }, t91.prototype.Qa = function(t, i290) {
        return void 0 !== i290 ? i290.X : this.ca.Hi().io(t);
    }, t91;
}(), Gi = function() {
    function t92() {
        this.no = [], this.so = new Map, this.ho = new Map;
    }
    return t92.prototype.ro = function() {
        return this.Je() > 0 ? this.no[this.no.length - 1] : null;
    }, t92.prototype.eo = function() {
        return this.Je() > 0 ? this.uo(0) : null;
    }, t92.prototype.Ui = function() {
        return this.Je() > 0 ? this.uo(this.no.length - 1) : null;
    }, t92.prototype.Je = function() {
        return this.no.length;
    }, t92.prototype.ti = function() {
        return 0 === this.Je();
    }, t92.prototype.Eh = function(t) {
        return null !== this.ao(t, 0);
    }, t92.prototype.io = function(t) {
        return this.oo(t);
    }, t92.prototype.oo = function(t, i291) {
        void 0 === i291 && (i291 = 0);
        var n180 = this.ao(t, i291);
        return null === n180 ? null : u(u({
        }, this.lo(n180)), {
            Ph: this.uo(n180)
        });
    }, t92.prototype.iu = function() {
        return this.no;
    }, t92.prototype.fo = function(t, i292, n181) {
        if (this.ti()) return null;
        for(var s120 = null, h80 = 0, r59 = n181; h80 < r59.length; h80++){
            var e47 = r59[h80];
            s120 = Qi(s120, this.co(t, i292, e47));
        }
        return s120;
    }, t92.prototype._ = function(t) {
        this.ho.clear(), this.so.clear(), this.no = t;
    }, t92.prototype.uo = function(t) {
        return this.no[t].Ph;
    }, t92.prototype.lo = function(t) {
        return this.no[t];
    }, t92.prototype.ao = function(t, i293) {
        var n182 = this.vo(t);
        if (null === n182 && 0 !== i293) switch(i293){
            case -1:
                return this._o(t);
            case 1:
                return this.do(t);
            default:
                throw new TypeError("Unknown search mode");
        }
        return n182;
    }, t92.prototype._o = function(t) {
        var i294 = this.wo(t);
        return i294 > 0 && (i294 -= 1), i294 !== this.no.length && this.uo(i294) < t ? i294 : null;
    }, t92.prototype.do = function(t) {
        var i295 = this.Mo(t);
        return i295 !== this.no.length && t < this.uo(i295) ? i295 : null;
    }, t92.prototype.vo = function(t) {
        var i296 = this.wo(t);
        return i296 === this.no.length || t < this.no[i296].Ph ? null : i296;
    }, t92.prototype.wo = function(t93) {
        return Bt(this.no, t93, function(t, i297) {
            return t.Ph < i297;
        });
    }, t92.prototype.Mo = function(t94) {
        return Lt(this.no, t94, function(t, i298) {
            return i298.Ph > t;
        });
    }, t92.prototype.bo = function(t, i299, n) {
        for(var s121 = null, h81 = t; h81 < i299; h81++){
            var r60 = this.no[h81].X[n];
            Number.isNaN(r60) || (null === s121 ? s121 = {
                mo: r60,
                po: r60
            } : (r60 < s121.mo && (s121.mo = r60), r60 > s121.po && (s121.po = r60)));
        }
        return s121;
    }, t92.prototype.co = function(t, i300, n183) {
        if (this.ti()) return null;
        var s122 = null, h82 = f(this.eo()), r61 = f(this.Ui()), e48 = Math.max(t, h82), u39 = Math.min(i300, r61), a34 = 30 * Math.ceil(e48 / 30), o28 = Math.max(a34, 30 * Math.floor(u39 / 30)), l22 = this.wo(e48), c18 = this.Mo(Math.min(u39, a34, i300));
        s122 = Qi(s122, this.bo(l22, c18, n183));
        var v14 = this.so.get(n183);
        void 0 === v14 && (v14 = new Map, this.so.set(n183, v14));
        for(var _12 = Math.max(a34 + 1, e48); _12 < o28; _12 += 30){
            var d10 = Math.floor(_12 / 30), w9 = v14.get(d10);
            if (void 0 === w9) {
                var M7 = this.wo(30 * d10), b6 = this.Mo(30 * (d10 + 1) - 1);
                w9 = this.bo(M7, b6, n183), v14.set(d10, w9);
            }
            s122 = Qi(s122, w9);
        }
        l22 = this.wo(o28), c18 = this.Mo(u39);
        return s122 = Qi(s122, this.bo(l22, c18, n183));
    }, t92;
}();
function Qi(t, i301) {
    return null === t ? i301 : null === i301 ? t : {
        mo: Math.min(t.mo, i301.mo),
        po: Math.max(t.po, i301.po)
    };
}
var tn = function(t95) {
    function i302(i303, n184, s123) {
        var h83 = t95.call(this, i303) || this;
        h83.tt = new Gi, h83.qa = new qi(h83), h83.yo = [], h83.ko = new Ni(h83), h83.Co = null, h83.No = null, h83.xo = [], h83.So = [], h83.Do = null, h83.ki = n184, h83.Ao = s123;
        var r62 = new Ui(h83);
        return h83.Mi = [
            r62
        ], h83.Ua = new yi(r62, h83, i303), "Area" !== s123 && "Line" !== s123 && "Baseline" !== s123 || (h83.Co = new Ti(h83)), h83.To(), h83.Bo(), h83;
    }
    return e(i302, t95), i302.prototype.en = function() {
        null !== this.Do && clearTimeout(this.Do);
    }, i302.prototype.Ea = function(t) {
        return this.ki.priceLineColor || t;
    }, i302.prototype.wa = function(t) {
        var i304 = {
            Ma: !0
        }, n185 = this.$();
        if (this.vt().j().ti() || n185.ti() || this.tt.ti()) return i304;
        var s124, h84, r63 = this.vt().j().mr(), e49 = this.H();
        if (null === r63 || null === e49) return i304;
        if (t) {
            var u40 = this.tt.ro();
            if (null === u40) return i304;
            s124 = u40, h84 = u40.Ph;
        } else {
            var a35 = this.tt.oo(r63.rh(), -1);
            if (null === a35) return i304;
            if (null === (s124 = this.tt.io(a35.Ph))) return i304;
            h84 = a35.Ph;
        }
        var o29 = s124.X[3], l23 = this.tu().cu(h84, {
            X: s124
        }), f15 = n185.K(o29, e49.X);
        return {
            Ma: !1,
            D: o29,
            Et: n185.ii(o29, e49.X),
            za: n185.Zs(o29),
            Pa: n185.Gs(o29, e49.X),
            et: l23.fu,
            zt: f15,
            Ph: h84
        };
    }, i302.prototype.tu = function() {
        return null !== this.No || (this.No = new Ji(this)), this.No;
    }, i302.prototype.ct = function() {
        return this.ki;
    }, i302.prototype.rs = function(t) {
        var i305 = t.priceScaleId;
        void 0 !== i305 && i305 !== this.ki.priceScaleId && this.vt().Lo(this, i305), v(this.ki, t), null !== this.ui && void 0 !== t.scaleMargins && this.ui.rs({
            scaleMargins: t.scaleMargins
        }), void 0 !== t.priceFormat && this.To(), this.vt().Fo(this), this.vt().Eo(), this.Ai.O("options");
    }, i302.prototype._ = function(t) {
        var i306;
        this.tt._(t), this.Vo(), this.Ai.O("data"), this.Ci.O("data"), null === (i306 = this.Co) || void 0 === i306 || i306.O("data");
        var n186 = this.vt().qu(this);
        this.vt().Oo(n186), this.vt().Fo(this), this.vt().Eo(), this.vt().Or();
    }, i302.prototype.Wo = function(t96) {
        this.xo = t96.map(function(t) {
            return u({
            }, t);
        }), this.Vo();
        var i307 = this.vt().qu(this);
        this.Ci.O("data"), this.vt().Oo(i307), this.vt().Fo(this), this.vt().Eo(), this.vt().Or();
    }, i302.prototype.La = function() {
        return this.So;
    }, i302.prototype.zo = function(t) {
        var i308 = new $i(this, t);
        return this.yo.push(i308), this.vt().Fo(this), i308;
    }, i302.prototype.Po = function(t) {
        var i309 = this.yo.indexOf(t);
        -1 !== i309 && this.yo.splice(i309, 1), this.vt().Fo(this);
    }, i302.prototype.Ya = function() {
        return this.Ao;
    }, i302.prototype.H = function() {
        var t = this.Ro();
        return null === t ? null : {
            X: t.X[3],
            Rs: t.S
        };
    }, i302.prototype.Ro = function() {
        var t = this.vt().j().mr();
        if (null === t) return null;
        var i310 = t.hh();
        return this.tt.oo(i310, 1);
    }, i302.prototype.Hi = function() {
        return this.tt;
    }, i302.prototype.Fa = function(t) {
        var i311 = this.tt.io(t);
        return null === i311 ? null : "Bar" === this.Ao || "Candlestick" === this.Ao ? {
            open: i311.X[0],
            high: i311.X[1],
            low: i311.X[2],
            close: i311.X[3]
        } : i311.X[3];
    }, i302.prototype.Io = function(t) {
        var i312 = this, n187 = this.Co;
        return null !== n187 && n187.U() ? (null === this.Do && n187._a() && (this.Do = setTimeout(function() {
            i312.Do = null, i312.vt().jo();
        }, 0)), n187.va(), [
            n187
        ]) : [];
    }, i302.prototype.zi = function() {
        var t = [];
        this.qo() || t.push(this.ko);
        for(var i313 = 0, n188 = this.yo; i313 < n188.length; i313++){
            var s125 = n188[i313];
            t.push.apply(t, s125.zi());
        }
        return t.push(this.Ai, this.qa, this.Ua, this.Ci), t;
    }, i302.prototype.Pi = function(t, i314) {
        if (i314 !== this.ui && !this.qo()) return [];
        for(var n189 = a([], this.Mi, !0), s126 = 0, h85 = this.yo; s126 < h85.length; s126++){
            var r64 = h85[s126];
            n189.push(r64.Ha());
        }
        return n189;
    }, i302.prototype.sh = function(t, i315) {
        var n190 = this;
        if (void 0 !== this.ki.autoscaleInfoProvider) {
            var s127 = this.ki.autoscaleInfoProvider(function() {
                var s129 = n190.Uo(t, i315);
                return null === s129 ? null : s129.Mn();
            });
            return Hi.bn(s127);
        }
        return this.Uo(t, i315);
    }, i302.prototype.ih = function() {
        return this.ki.priceFormat.minMove;
    }, i302.prototype.$s = function() {
        return this.Zn;
    }, i302.prototype.Ii = function() {
        var t;
        this.Ai.O(), this.Ci.O();
        for(var i316 = 0, n191 = this.Mi; i316 < n191.length; i316++)n191[i316].O();
        for(var s130 = 0, h86 = this.yo; s130 < h86.length; s130++)h86[s130].O();
        this.qa.O(), this.ko.O(), null === (t = this.Co) || void 0 === t || t.O();
    }, i302.prototype.$ = function() {
        return f(t95.prototype.$.call(this));
    }, i302.prototype.q = function(t) {
        if (!(("Line" === this.Ao || "Area" === this.Ao || "Baseline" === this.Ao) && this.ki.crosshairMarkerVisible)) return null;
        var i317 = this.tt.io(t);
        return null === i317 ? null : {
            D: i317.X[3],
            C: this.Ho(),
            Z: this.Yo(),
            Y: this.Ko(t)
        };
    }, i302.prototype.Va = function() {
        return this.ki.title;
    }, i302.prototype.U = function() {
        return this.ki.visible;
    }, i302.prototype.qo = function() {
        return !Yt(this.$().hs());
    }, i302.prototype.Uo = function(t, i318) {
        if (!d(t) || !d(i318) || this.tt.ti()) return null;
        var n192 = "Line" === this.Ao || "Area" === this.Ao || "Baseline" === this.Ao || "Histogram" === this.Ao ? [
            3
        ] : [
            2,
            1
        ], s131 = this.tt.fo(t, i318, n192), h87 = null !== s131 ? new nt(s131.mo, s131.po) : null;
        if ("Histogram" === this.Ya()) {
            var r65 = this.ki.base, e50 = new nt(r65, r65);
            h87 = null !== h87 ? h87._n(e50) : e50;
        }
        return new Hi(h87, this.Ci.Ba());
    }, i302.prototype.Ho = function() {
        switch(this.Ao){
            case "Line":
            case "Area":
            case "Baseline":
                return this.ki.crosshairMarkerRadius;
        }
        return 0;
    }, i302.prototype.Yo = function() {
        switch(this.Ao){
            case "Line":
            case "Area":
            case "Baseline":
                var t = this.ki.crosshairMarkerBorderColor;
                if (0 !== t.length) return t;
        }
        return null;
    }, i302.prototype.Ko = function(t) {
        switch(this.Ao){
            case "Line":
            case "Area":
            case "Baseline":
                var i319 = this.ki.crosshairMarkerBackgroundColor;
                if (0 !== i319.length) return i319;
        }
        return this.tu().cu(t).fu;
    }, i302.prototype.To = function() {
        switch(this.ki.priceFormat.type){
            case "custom":
                this.Zn = {
                    format: this.ki.priceFormat.formatter
                };
                break;
            case "volume":
                this.Zn = new $t(this.ki.priceFormat.precision);
                break;
            case "percent":
                this.Zn = new tt(this.ki.priceFormat.precision);
                break;
            default:
                var t = Math.pow(10, this.ki.priceFormat.precision);
                this.Zn = new Q(t, this.ki.priceFormat.minMove * t);
        }
        null !== this.ui && this.ui.es();
    }, i302.prototype.Vo = function() {
        var t = this, i320 = this.vt().j();
        if (i320.ti() || 0 === this.tt.Je()) this.So = [];
        else {
            var n193 = f(this.tt.eo());
            this.So = this.xo.map(function(s132, h88) {
                var r66 = f(i320.br(s132.time, !0)), e51 = r66 < n193 ? 1 : -1;
                return {
                    time: f(t.tt.oo(r66, e51)).Ph,
                    position: s132.position,
                    shape: s132.shape,
                    color: s132.color,
                    id: s132.id,
                    ya: h88,
                    text: s132.text,
                    size: s132.size
                };
            });
        }
    }, i302.prototype.Bo = function() {
        switch(this.Ci = new ji(this, this.vt()), this.Ao){
            case "Bar":
                this.Ai = new ai(this, this.vt());
                break;
            case "Candlestick":
                this.Ai = new vi(this, this.vt());
                break;
            case "Line":
                this.Ai = new bi(this, this.vt());
                break;
            case "Area":
                this.Ai = new ri(this, this.vt());
                break;
            case "Baseline":
                this.Ai = new fi(this, this.vt());
                break;
            case "Histogram":
                this.Ai = new Mi(this, this.vt());
                break;
            default:
                throw Error("Unknown chart style assigned: " + this.Ao);
        }
    }, i302;
}(Xi), nn = function() {
    function t97(t) {
        this.ki = t;
    }
    return t97.prototype.$o = function(t98, i321, n194) {
        var s133 = t98;
        if (0 === this.ki.mode) return s133;
        var h89 = n194.xi(), r67 = h89.H();
        if (null === r67) return s133;
        var e52 = h89.K(t98, r67), u41 = n194.Vs().filter(function(t) {
            return t instanceof tn;
        }).reduce(function(t, s134) {
            if (n194.Uu(s134) || !s134.U()) return t;
            var h90 = s134.$(), r68 = s134.Hi();
            if (h90.ti() || !r68.Eh(i321)) return t;
            var e53 = r68.io(i321);
            if (null === e53) return t;
            var u42 = c(s134.H());
            return t.concat([
                h90.K(e53.X[3], u42.X)
            ]);
        }, []);
        if (0 === u41.length) return s133;
        u41.sort(function(t, i322) {
            return Math.abs(t - e52) - Math.abs(i322 - e52);
        });
        var a36 = u41[0];
        return s133 = h89.Si(a36, r67);
    }, t97;
}(), sn = function() {
    function t99() {
        this.tt = null;
    }
    return t99.prototype._ = function(t) {
        this.tt = t;
    }, t99.prototype.h = function(t100, i323, n195, h91) {
        var r69 = this;
        if (null !== this.tt) {
            var e54 = Math.max(1, Math.floor(i323));
            t100.lineWidth = e54;
            var u43 = Math.ceil(this.tt.ht * i323), a37 = Math.ceil(this.tt.st * i323);
            !function(t, i324) {
                t.save(), t.lineWidth % 2 && t.translate(0.5, 0.5), i324(), t.restore();
            }(t100, function() {
                var n196 = f(r69.tt);
                if (n196.Xo) {
                    t100.strokeStyle = n196.Zo, s(t100, n196.Jo), t100.beginPath();
                    for(var h92 = 0, o30 = n196.Go; h92 < o30.length; h92++){
                        var l24 = o30[h92], c19 = Math.round(l24.An * i323);
                        t100.moveTo(c19, -e54), t100.lineTo(c19, u43 + e54);
                    }
                    t100.stroke();
                }
                if (n196.Qo) {
                    t100.strokeStyle = n196.tl, s(t100, n196.il), t100.beginPath();
                    for(var v15 = 0, _13 = n196.nl; v15 < _13.length; v15++){
                        var d11 = _13[v15], w10 = Math.round(d11.An * i323);
                        t100.moveTo(-e54, w10), t100.lineTo(a37 + e54, w10);
                    }
                    t100.stroke();
                }
            });
        }
    }, t99;
}(), hn = function() {
    function t101(t) {
        this.ot = new sn, this.L = !0, this.vi = t;
    }
    return t101.prototype.O = function() {
        this.L = !0;
    }, t101.prototype.P = function(t, i325) {
        if (this.L) {
            var n197 = this.vi.vt().ct().grid, s135 = {
                ht: t,
                st: i325,
                Qo: n197.horzLines.visible,
                Xo: n197.vertLines.visible,
                tl: n197.horzLines.color,
                Zo: n197.vertLines.color,
                il: n197.horzLines.style,
                Jo: n197.vertLines.style,
                nl: this.vi.xi().Fn(),
                Go: this.vi.vt().j().Fn() || []
            };
            this.ot._(s135), this.L = !1;
        }
        return this.ot;
    }, t101;
}(), rn = function() {
    function t102(t) {
        this.Ai = new hn(t);
    }
    return t102.prototype.sl = function() {
        return this.Ai;
    }, t102;
}(), en = function() {
    function t103(t, i326) {
        this.Hn = [], this.hl = new Map, this.En = 0, this.$h = 0, this.rl = 1000, this.Yn = null, this.el = new it, this.ul = t, this.hi = i326, this.al = new rn(this);
        var n198 = i326.ct();
        this.ol = this.ll("left", n198.leftPriceScale), this.fl = this.ll("right", n198.rightPriceScale), this.ol.bs().Ji(this.cl.bind(this, this.ol), this), this.fl.bs().Ji(this.cl.bind(this, this.ol), this), this.vl(n198);
    }
    return t103.prototype.vl = function(t) {
        if (t.leftPriceScale && this.ol.rs(t.leftPriceScale), t.rightPriceScale && this.fl.rs(t.rightPriceScale), t.localization && (this.ol.es(), this.fl.es()), t.overlayPriceScales) for(var i327 = 0, n199 = Array.from(this.hl.values()); i327 < n199.length; i327++){
            var s136 = f(n199[i327][0].$());
            s136.rs(t.overlayPriceScales), t.localization && s136.es();
        }
    }, t103.prototype._l = function(t) {
        switch(t){
            case "left":
                return this.ol;
            case "right":
                return this.fl;
        }
        return this.hl.has(t) ? l(this.hl.get(t))[0].$() : null;
    }, t103.prototype.en = function() {
        this.vt().dl().sn(this), this.ol.bs().sn(this), this.fl.bs().sn(this), this.Hn.forEach(function(t) {
            t.en && t.en();
        }), this.el.hn();
    }, t103.prototype.wl = function() {
        return this.rl;
    }, t103.prototype.Ml = function(t) {
        this.rl = t;
    }, t103.prototype.vt = function() {
        return this.hi;
    }, t103.prototype.wt = function() {
        return this.$h;
    }, t103.prototype.Mt = function() {
        return this.En;
    }, t103.prototype.Dr = function(t) {
        this.$h = t, this.bl();
    }, t103.prototype.ps = function(t) {
        var i328 = this;
        this.En = t, this.ol.ps(t), this.fl.ps(t), this.Hn.forEach(function(n200) {
            if (i328.Uu(n200)) {
                var s137 = n200.$();
                null !== s137 && s137.ps(t);
            }
        }), this.bl();
    }, t103.prototype.Vs = function() {
        return this.Hn;
    }, t103.prototype.Uu = function(t) {
        var i329 = t.$();
        return null === i329 || this.ol !== i329 && this.fl !== i329;
    }, t103.prototype.Ws = function(t, i330, n201) {
        var s138 = void 0 !== n201 ? n201 : this.pl().ml + 1;
        this.gl(t, i330, s138);
    }, t103.prototype.Ps = function(t) {
        var i331 = this.Hn.indexOf(t);
        o(-1 !== i331, "removeDataSource: invalid data source"), this.Hn.splice(i331, 1);
        var n202 = f(t.$()).hs();
        if (this.hl.has(n202)) {
            var s139 = l(this.hl.get(n202)), h93 = s139.indexOf(t);
            -1 !== h93 && (s139.splice(h93, 1), 0 === s139.length && this.hl.delete(n202));
        }
        var r70 = t.$();
        r70 && r70.Vs().indexOf(t) >= 0 && r70.Ps(t), null !== r70 && (r70.zs(), this.yl(r70)), this.Yn = null;
    }, t103.prototype.Hu = function(t) {
        return t === this.ol ? "left" : t === this.fl ? "right" : "overlay";
    }, t103.prototype.kl = function() {
        return this.ol;
    }, t103.prototype.Cl = function() {
        return this.fl;
    }, t103.prototype.Nl = function(t, i332) {
        t.js(i332);
    }, t103.prototype.xl = function(t, i333) {
        t.qs(i333), this.bl();
    }, t103.prototype.Sl = function(t) {
        t.Us();
    }, t103.prototype.Dl = function(t, i334) {
        t.Hs(i334);
    }, t103.prototype.Al = function(t, i335) {
        t.Ys(i335), this.bl();
    }, t103.prototype.Tl = function(t) {
        t.Ks();
    }, t103.prototype.bl = function() {
        this.Hn.forEach(function(t) {
            t.Ii();
        });
    }, t103.prototype.xi = function() {
        var t = null;
        return this.hi.ct().rightPriceScale.visible && 0 !== this.fl.Vs().length ? t = this.fl : this.hi.ct().leftPriceScale.visible && 0 !== this.ol.Vs().length ? t = this.ol : 0 !== this.Hn.length && (t = this.Hn[0].$()), null === t && (t = this.fl), t;
    }, t103.prototype.yl = function(t) {
        null !== t && t.fs() && this.Bl(t);
    }, t103.prototype.Ll = function(t) {
        var i336 = this.ul.mr();
        t.us({
            _s: !0
        }), null !== i336 && t.th(i336), this.bl();
    }, t103.prototype.Fl = function() {
        this.Bl(this.ol), this.Bl(this.fl);
    }, t103.prototype.El = function() {
        var t = this;
        this.yl(this.ol), this.yl(this.fl), this.Hn.forEach(function(i337) {
            t.Uu(i337) && t.yl(i337.$());
        }), this.bl(), this.hi.Or();
    }, t103.prototype.Os = function() {
        return null === this.Yn && (this.Yn = bt(this.Hn)), this.Yn;
    }, t103.prototype.Vl = function() {
        return this.el;
    }, t103.prototype.Ol = function() {
        return this.al;
    }, t103.prototype.Bl = function(t) {
        var i338 = t.Qs();
        if (i338 && i338.length > 0 && !this.ul.ti()) {
            var n203 = this.ul.mr();
            null !== n203 && t.th(n203);
        }
        t.Ii();
    }, t103.prototype.pl = function() {
        var t = this.Os();
        if (0 === t.length) return {
            Wl: 0,
            ml: 0
        };
        for(var i339 = 0, n204 = 0, s140 = 0; s140 < t.length; s140++){
            var h94 = t[s140].oi();
            null !== h94 && (h94 < i339 && (i339 = h94), h94 > n204 && (n204 = h94));
        }
        return {
            Wl: i339,
            ml: n204
        };
    }, t103.prototype.gl = function(t, i340, n205) {
        var s141 = this._l(i340);
        if (null === s141 && (s141 = this.ll(i340, this.hi.ct().overlayPriceScales)), this.Hn.push(t), !Yt(i340)) {
            var h95 = this.hl.get(i340) || [];
            h95.push(t), this.hl.set(i340, h95);
        }
        s141.Ws(t), t.fi(s141), t.li(n205), this.yl(s141), this.Yn = null;
    }, t103.prototype.cl = function(t, i341, n206) {
        i341.os !== n206.os && this.Bl(t);
    }, t103.prototype.ll = function(t, i342) {
        var n207 = u({
            visible: !0,
            autoScale: !0
        }, b(i342)), s142 = new kt(t, n207, this.hi.ct().layout, this.hi.ct().localization);
        return s142.ps(this.Mt()), s142;
    }, t103;
}(), un = function(t104) {
    function i343(i344) {
        var n208 = t104.call(this) || this;
        return n208.zl = new Map, n208.tt = i344, n208;
    }
    return e(i343, t104), i343.prototype.u = function(t) {
    }, i343.prototype.l = function(t) {
        if (this.tt.U) {
            t.save();
            for(var i345 = 0, n209 = 0, s143 = this.tt.Pl; n209 < s143.length; n209++)if (0 !== (a38 = s143[n209]).Et.length) {
                t.font = a38.Nt;
                var h96 = this.Rl(t, a38.Et);
                h96 > this.tt.wt ? a38.Ur = this.tt.wt / h96 : a38.Ur = 1, i345 += a38.Il * a38.Ur;
            }
            var r71 = 0;
            switch(this.tt.jl){
                case "top":
                    r71 = 0;
                    break;
                case "center":
                    r71 = Math.max((this.tt.Mt - i345) / 2, 0);
                    break;
                case "bottom":
                    r71 = Math.max(this.tt.Mt - i345, 0);
            }
            t.fillStyle = this.tt.et;
            for(var e55 = 0, u44 = this.tt.Pl; e55 < u44.length; e55++){
                var a38 = u44[e55];
                t.save();
                var o31 = 0;
                switch(this.tt.ql){
                    case "left":
                        t.textAlign = "left", o31 = a38.Il / 2;
                        break;
                    case "center":
                        t.textAlign = "center", o31 = this.tt.wt / 2;
                        break;
                    case "right":
                        t.textAlign = "right", o31 = this.tt.wt - 1 - a38.Il / 2;
                }
                t.translate(o31, r71), t.textBaseline = "top", t.font = a38.Nt, t.scale(a38.Ur, a38.Ur), t.fillText(a38.Et, 0, a38.Ul), t.restore(), r71 += a38.Il * a38.Ur;
            }
            t.restore();
        }
    }, i343.prototype.Rl = function(t, i346) {
        var n210 = this.Hl(t.font), s144 = n210.get(i346);
        return void 0 === s144 && (s144 = t.measureText(i346).width, n210.set(i346, s144)), s144;
    }, i343.prototype.Hl = function(t) {
        var i347 = this.zl.get(t);
        return void 0 === i347 && (i347 = new Map, this.zl.set(t, i347)), i347;
    }, i343;
}(y), an = function() {
    function t105(t) {
        this.L = !0, this.at = {
            U: !1,
            et: "",
            Mt: 0,
            wt: 0,
            Pl: [],
            jl: "center",
            ql: "center"
        }, this.ot = new un(this.at), this.lt = t;
    }
    return t105.prototype.O = function() {
        this.L = !0;
    }, t105.prototype.P = function(t, i348) {
        return this.L && (this.R(t, i348), this.L = !1), this.ot;
    }, t105.prototype.R = function(t, i349) {
        var n211 = this.lt.ct(), s145 = this.at;
        s145.U = n211.visible, s145.U && (s145.et = n211.color, s145.wt = i349, s145.Mt = t, s145.ql = n211.horzAlign, s145.jl = n211.vertAlign, s145.Pl = [
            {
                Et: n211.text,
                Nt: Ut(n211.fontSize, n211.fontFamily, n211.fontStyle),
                Il: 1.2 * n211.fontSize,
                Ul: 0,
                Ur: 0
            }
        ]);
    }, t105;
}(), on = function(t) {
    function i350(i, n212) {
        var s146 = t.call(this) || this;
        return s146.ki = n212, s146.Ai = new an(s146), s146;
    }
    return e(i350, t), i350.prototype.Pi = function() {
        return [];
    }, i350.prototype.zi = function() {
        return [
            this.Ai
        ];
    }, i350.prototype.ct = function() {
        return this.ki;
    }, i350.prototype.Ii = function() {
        this.Ai.O();
    }, i350;
}(X), ln = function() {
    function t106(t, i351) {
        this.Yl = [], this.Kl = [], this.$h = 0, this.$l = null, this.Xl = null, this.Zl = new it, this.Jl = new it, this.Gl = null, this.Ql = t, this.ki = i351, this.tf = new Ht(this), this.ul = new Rt(this, i351.timeScale, this.ki.localization), this.V = new Z(this, i351.crosshair), this.if = new nn(i351.crosshair), this.nf = new on(this, i351.watermark), this.sf(), this.Yl[0].Ml(2000), this.hf = this.rf(0), this.ef = this.rf(1);
    }
    return t106.prototype.uf = function() {
        this.af(new Kt(3));
    }, t106.prototype.Or = function() {
        this.af(new Kt(2));
    }, t106.prototype.jo = function() {
        this.af(new Kt(1));
    }, t106.prototype.Fo = function(t) {
        var i352 = this.lf(t);
        this.af(i352);
    }, t106.prototype.ff = function() {
        return this.Xl;
    }, t106.prototype.cf = function(t) {
        var i353 = this.Xl;
        this.Xl = t, null !== i353 && this.Fo(i353.vf), null !== t && this.Fo(t.vf);
    }, t106.prototype.ct = function() {
        return this.ki;
    }, t106.prototype.rs = function(t) {
        v(this.ki, t), this.Yl.forEach(function(i354) {
            return i354.vl(t);
        }), void 0 !== t.timeScale && this.ul.rs(t.timeScale), void 0 !== t.localization && this.ul.cr(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Zl.hn(), this.hf = this.rf(0), this.ef = this.rf(1), this.uf();
    }, t106.prototype._f = function(t, i355) {
        var n213 = this.df(t);
        null !== n213 && (n213.$.rs(i355), this.Zl.hn());
    }, t106.prototype.df = function(t) {
        for(var i356 = 0, n214 = this.Yl; i356 < n214.length; i356++){
            var s147 = n214[i356], h97 = s147._l(t);
            if (null !== h97) return {
                ft: s147,
                $: h97
            };
        }
        return null;
    }, t106.prototype.j = function() {
        return this.ul;
    }, t106.prototype.wf = function() {
        return this.Yl;
    }, t106.prototype.Mf = function() {
        return this.nf;
    }, t106.prototype.bf = function() {
        return this.V;
    }, t106.prototype.mf = function() {
        return this.Jl;
    }, t106.prototype.pf = function(t, i357) {
        t.ps(i357), this.Vr();
    }, t106.prototype.Dr = function(t) {
        this.$h = t, this.ul.Dr(this.$h), this.Yl.forEach(function(i358) {
            return i358.Dr(t);
        }), this.Vr();
    }, t106.prototype.sf = function(t) {
        var i359 = new en(this.ul, this);
        void 0 !== t ? this.Yl.splice(t, 0, i359) : this.Yl.push(i359);
        var n215 = void 0 === t ? this.Yl.length - 1 : t, s148 = new Kt(3);
        return s148.be(n215, {
            me: 0,
            _s: !0
        }), this.af(s148), i359;
    }, t106.prototype.Nl = function(t, i360, n216) {
        t.Nl(i360, n216);
    }, t106.prototype.xl = function(t, i361, n217) {
        t.xl(i361, n217), this.Eo(), this.af(this.gf(t, 2));
    }, t106.prototype.Sl = function(t, i362) {
        t.Sl(i362), this.af(this.gf(t, 2));
    }, t106.prototype.Dl = function(t, i363, n218) {
        i363.fs() || t.Dl(i363, n218);
    }, t106.prototype.Al = function(t, i364, n219) {
        i364.fs() || (t.Al(i364, n219), this.Eo(), this.af(this.gf(t, 2)));
    }, t106.prototype.Tl = function(t, i365) {
        i365.fs() || (t.Tl(i365), this.af(this.gf(t, 2)));
    }, t106.prototype.Ll = function(t, i366) {
        t.Ll(i366), this.af(this.gf(t, 2));
    }, t106.prototype.yf = function(t) {
        this.ul.js(t);
    }, t106.prototype.kf = function(t, i367) {
        var n220 = this.j();
        if (!n220.ti() && 0 !== i367) {
            var s149 = n220.wt();
            t = Math.max(1, Math.min(t, s149)), n220.Ur(t, i367), this.Vr();
        }
    }, t106.prototype.Cf = function(t) {
        this.Nf(0), this.xf(t), this.Sf();
    }, t106.prototype.Df = function(t) {
        this.ul.qs(t), this.Vr();
    }, t106.prototype.Af = function() {
        this.ul.Us(), this.Or();
    }, t106.prototype.Nf = function(t) {
        this.$l = t, this.ul.Hs(t);
    }, t106.prototype.xf = function(t) {
        var i368 = !1;
        return null !== this.$l && Math.abs(t - this.$l) > 20 && (this.$l = null, i368 = !0), this.ul.Ys(t), this.Vr(), i368;
    }, t106.prototype.Sf = function() {
        this.ul.Ks(), this.Or(), this.$l = null;
    }, t106.prototype.W = function() {
        return this.Kl;
    }, t106.prototype.Tf = function(t, i369, n221) {
        this.V.Ti(t, i369);
        var s150 = NaN, h98 = this.ul.Fr(t), r72 = this.ul.mr();
        null !== r72 && (h98 = Math.min(Math.max(r72.hh(), h98), r72.rh()));
        var e56 = n221.xi(), u45 = e56.H();
        null !== u45 && (s150 = e56.Si(i369, u45)), s150 = this.if.$o(s150, h98, n221), this.V.Ei(h98, s150, n221), this.jo(), this.Jl.hn(this.V.I(), {
            x: t,
            y: i369
        });
    }, t106.prototype.Bf = function() {
        this.bf().Oi(), this.jo(), this.Jl.hn(null, null);
    }, t106.prototype.Eo = function() {
        var t = this.V.ft();
        if (null !== t) {
            var i370 = this.V.Li(), n222 = this.V.Fi();
            this.Tf(i370, n222, t);
        }
        this.V.Ii();
    }, t106.prototype.Lf = function(t, i371, n223) {
        var s151 = this.ul.ri(0);
        void 0 !== i371 && void 0 !== n223 && this.ul.O(i371, n223);
        var h99 = this.ul.ri(0), r73 = this.ul.Br(), e57 = this.ul.mr();
        if (null !== e57 && null !== s151 && null !== h99) {
            var u46 = e57.Eh(r73), a39 = s151.Dh > h99.Dh, o32 = null !== t && t > r73 && !a39, l25 = u46 && this.ul.ct().shiftVisibleRangeOnNewBar;
            if (o32 && !l25) {
                var f16 = t - r73;
                this.ul.Mr(this.ul.Pr() - f16);
            }
        }
        this.ul.qr(t);
    }, t106.prototype.Oo = function(t) {
        null !== t && t.El();
    }, t106.prototype.qu = function(t) {
        var i372 = this.Yl.find(function(i373) {
            return i373.Os().includes(t);
        });
        return void 0 === i372 ? null : i372;
    }, t106.prototype.Vr = function() {
        this.nf.Ii(), this.Yl.forEach(function(t) {
            return t.El();
        }), this.Eo();
    }, t106.prototype.en = function() {
        this.Yl.forEach(function(t) {
            return t.en();
        }), this.Yl.length = 0, this.ki.localization.priceFormatter = void 0, this.ki.localization.timeFormatter = void 0;
    }, t106.prototype.Ff = function() {
        return this.tf;
    }, t106.prototype.Yu = function() {
        return this.tf.ct();
    }, t106.prototype.dl = function() {
        return this.Zl;
    }, t106.prototype.Ef = function(t, i374) {
        var n224 = this.Yl[0], s152 = this.Vf(i374, t, n224);
        return this.Kl.push(s152), 1 === this.Kl.length ? this.uf() : this.Or(), s152;
    }, t106.prototype.Of = function(t) {
        var i375 = this.qu(t), n225 = this.Kl.indexOf(t);
        o(-1 !== n225, "Series not found"), this.Kl.splice(n225, 1), f(i375).Ps(t), t.en && t.en();
    }, t106.prototype.Lo = function(t, i376) {
        var n226 = f(this.qu(t));
        n226.Ps(t);
        var s153 = this.df(i376);
        if (null === s153) {
            var h100 = t.oi();
            n226.Ws(t, i376, h100);
        } else {
            h100 = s153.ft === n226 ? t.oi() : void 0;
            s153.ft.Ws(t, i376, h100);
        }
    }, t106.prototype.Qr = function() {
        var t = new Kt(2);
        t.ye(), this.af(t);
    }, t106.prototype.Wf = function(t) {
        var i377 = new Kt(2);
        i377.Ce(t), this.af(i377);
    }, t106.prototype.Ne = function() {
        var t = new Kt(2);
        t.Ne(), this.af(t);
    }, t106.prototype.wr = function(t) {
        var i378 = new Kt(2);
        i378.wr(t), this.af(i378);
    }, t106.prototype.Mr = function(t) {
        var i379 = new Kt(2);
        i379.Mr(t), this.af(i379);
    }, t106.prototype.zf = function() {
        return this.ki.rightPriceScale.visible ? "right" : "left";
    }, t106.prototype.Pf = function() {
        return this.ef;
    }, t106.prototype.Rf = function() {
        return this.hf;
    }, t106.prototype.J = function(t107) {
        var i380 = this.ef, n227 = this.hf;
        if (i380 === n227) return i380;
        if (t107 = Math.max(0, Math.min(100, Math.round(100 * t107))), null === this.Gl || this.Gl.Ve !== n227 || this.Gl.Oe !== i380) this.Gl = {
            Ve: n227,
            Oe: i380,
            If: new Map
        };
        else {
            var s154 = this.Gl.If.get(t107);
            if (void 0 !== s154) return s154;
        }
        var h101 = function(t, i381, n228) {
            var s155 = O(t), h102 = s155[0], r74 = s155[1], e58 = s155[2], u47 = s155[3], a40 = O(i381), o33 = a40[0], l26 = a40[1], f17 = a40[2], c20 = a40[3], v16 = [
                T(h102 + n228 * (o33 - h102)),
                T(r74 + n228 * (l26 - r74)),
                T(e58 + n228 * (f17 - e58)),
                B(u47 + n228 * (c20 - u47))
            ];
            return "rgba(" + v16[0] + ", " + v16[1] + ", " + v16[2] + ", " + v16[3] + ")";
        }(n227, i380, t107 / 100);
        return this.Gl.If.set(t107, h101), h101;
    }, t106.prototype.gf = function(t, i382) {
        var n229 = new Kt(i382);
        if (null !== t) {
            var s156 = this.Yl.indexOf(t);
            n229.be(s156, {
                me: i382
            });
        }
        return n229;
    }, t106.prototype.lf = function(t, i383) {
        return void 0 === i383 && (i383 = 2), this.gf(this.qu(t), i383);
    }, t106.prototype.af = function(t108) {
        this.Ql && this.Ql(t108), this.Yl.forEach(function(t) {
            return t.Ol().sl().O();
        });
    }, t106.prototype.Vf = function(t, i384, n230) {
        var s157 = new tn(this, t, i384), h103 = void 0 !== t.priceScaleId ? t.priceScaleId : this.zf();
        return n230.Ws(s157, h103), Yt(h103) || s157.rs(t), s157;
    }, t106.prototype.rf = function(t) {
        var i385 = this.ki.layout;
        return "gradient" === i385.background.type ? 0 === t ? i385.background.topColor : i385.background.bottomColor : i385.background.color;
    }, t106;
}(), fn = function() {
    function t109(t, i386) {
        this.st = t, this.ht = i386;
    }
    return t109.prototype.on = function(t) {
        return this.st === t.st && this.ht === t.ht;
    }, t109;
}();
function cn(t) {
    return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1;
}
function vn(t) {
    var i387 = f(t.getContext("2d"));
    return i387.setTransform(1, 0, 0, 1, 0, 0), i387;
}
function _n(t, i388) {
    var n231 = t.createElement("canvas"), s158 = cn(n231);
    return n231.style.width = i388.st + "px", n231.style.height = i388.ht + "px", n231.width = i388.st * s158, n231.height = i388.ht * s158, n231;
}
function dn(i389, n232) {
    var s159 = f(i389.ownerDocument).createElement("canvas");
    i389.appendChild(s159);
    var h104 = _coordinateSpace.bindToDevicePixelRatio(s159);
    return h104.resizeCanvas({
        width: n232.st,
        height: n232.ht
    }), h104;
}
function wn(t, i390) {
    return t.jf - i390.jf;
}
function Mn(t, i391, n233) {
    var s160 = (t.jf - i391.jf) / (t.S - i391.S);
    return Math.sign(s160) * Math.min(Math.abs(s160), n233);
}
var bn = function() {
    function t110(t, i392, n234, s161) {
        this.qf = null, this.Uf = null, this.Hf = null, this.Yf = null, this.Kf = null, this.$f = 0, this.Xf = 0, this.Zf = !1, this.Jf = t, this.Gf = i392, this.Qf = n234, this.Yi = s161;
    }
    return t110.prototype.tc = function(t, i393) {
        if (null !== this.qf) {
            if (this.qf.S === i393) return void (this.qf.jf = t);
            if (Math.abs(this.qf.jf - t) < this.Yi) return;
        }
        this.Yf = this.Hf, this.Hf = this.Uf, this.Uf = this.qf, this.qf = {
            S: i393,
            jf: t
        };
    }, t110.prototype.ia = function(t, i394) {
        if (null !== this.qf && null !== this.Uf && !(i394 - this.qf.S > 50)) {
            var n235 = 0, s162 = Mn(this.qf, this.Uf, this.Gf), h105 = wn(this.qf, this.Uf), r75 = [
                s162
            ], e59 = [
                h105
            ];
            if (n235 += h105, null !== this.Hf) {
                var u48 = Mn(this.Uf, this.Hf, this.Gf);
                if (Math.sign(u48) === Math.sign(s162)) {
                    var a41 = wn(this.Uf, this.Hf);
                    if (r75.push(u48), e59.push(a41), n235 += a41, null !== this.Yf) {
                        var o34 = Mn(this.Hf, this.Yf, this.Gf);
                        if (Math.sign(o34) === Math.sign(s162)) {
                            var l27 = wn(this.Hf, this.Yf);
                            r75.push(o34), e59.push(l27), n235 += l27;
                        }
                    }
                }
            }
            for(var f18, c21, v17, _14 = 0, d12 = 0; d12 < r75.length; ++d12)_14 += e59[d12] / n235 * r75[d12];
            if (!(Math.abs(_14) < this.Jf)) this.Kf = {
                jf: t,
                S: i394
            }, this.Xf = _14, this.$f = (f18 = Math.abs(_14), c21 = this.Qf, v17 = Math.log(c21), Math.log(1 * v17 / -f18) / v17);
        }
    }, t110.prototype.ic = function(t) {
        var i395 = f(this.Kf), n236 = t - i395.S;
        return i395.jf + this.Xf * (Math.pow(this.Qf, n236) - 1) / Math.log(this.Qf);
    }, t110.prototype.nc = function(t) {
        return null === this.Kf || this.sc(t) === this.$f;
    }, t110.prototype.hc = function() {
        return this.Zf;
    }, t110.prototype.rc = function() {
        this.Zf = !0;
    }, t110.prototype.sc = function(t) {
        var i396 = t - f(this.Kf).S;
        return Math.min(i396, this.$f);
    }, t110;
}(), mn = "undefined" != typeof window;
var pn = function() {
    if (!mn) return !1;
    var t = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || !!mn && ("ontouchstart" in window || Boolean(window.DocumentTouch && document instanceof window.DocumentTouch));
    return "onorientationchange" in window && t;
}();
var gn = function() {
    if (!mn) return !1;
    var t = /Android/i.test(navigator.userAgent), i397 = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
    return t || i397;
}(), yn = function() {
    function t111(t, i398, n237) {
        this.ec = 0, this.uc = null, this.ac = null, this.oc = !1, this.lc = null, this.fc = !1, this.cc = !1, this.vc = null, this._c = null, this.dc = null, this.wc = null, this.Mc = 0, this.bc = !1, this.mc = !1, this.gc = !1, this.yc = t, this.kc = i398, this.ki = n237, this.Cc();
    }
    return t111.prototype.en = function() {
        null !== this.vc && (this.vc(), this.vc = null), null !== this._c && (this._c(), this._c = null), null !== this.dc && (this.dc(), this.dc = null), this.Nc(), this.xc();
    }, t111.prototype.Sc = function(t) {
        var i399 = this;
        this._c && this._c();
        var n238 = this.Dc.bind(this);
        this._c = function() {
            i399.yc.removeEventListener("mousemove", n238);
        }, this.yc.addEventListener("mousemove", n238), Nn(t) && this.Dc(t);
        var s163 = this.Ac(t);
        this.Tc(s163, this.kc.Bc);
    }, t111.prototype.xc = function() {
        null !== this.uc && clearTimeout(this.uc), this.ec = 0, this.uc = null;
    }, t111.prototype.Dc = function(t) {
        if (!this.gc || Nn(t)) {
            var i400 = this.Ac(t);
            this.Tc(i400, this.kc.Lc);
        }
    }, t111.prototype.Fc = function(t) {
        if ((!("button" in t) || 0 === t.button) && null === this.wc) {
            var i401 = Nn(t);
            if (!this.mc || !i401) {
                this.bc = !0;
                var n239 = this.Ac(t), s164 = c(this.lc), h106 = Math.abs(s164.p - n239.Ec), r76 = Math.abs(s164.g - n239.Vc), e60 = h106 + r76 > 5;
                if (e60 || !i401) {
                    if (e60 && !this.fc && i401) {
                        var u49 = 0.5 * h106, a42 = r76 >= u49 && !this.ki.Oc, o35 = u49 > r76 && !this.ki.Wc;
                        a42 || o35 || (this.mc = !0);
                    }
                    e60 && (this.fc = !0, this.cc = !0, i401 && this.Nc()), this.mc || (this.Tc(n239, this.kc.zc), i401 && xn(t));
                }
            }
        }
    }, t111.prototype.Pc = function(t) {
        if (!("button" in t) || 0 === t.button) {
            var i402 = this.Ac(t);
            this.Nc(), this.lc = null, this.gc = !1, this.dc && (this.dc(), this.dc = null), Nn(t) && this.Rc(t), this.Tc(i402, this.kc.Ic), ++this.ec, this.uc && this.ec > 1 ? (this.Tc(i402, this.kc.jc), this.xc()) : this.cc || this.Tc(i402, this.kc.qc), Nn(t) && (xn(t), this.Rc(t), 0 === t.touches.length && (this.oc = !1));
        }
    }, t111.prototype.Nc = function() {
        null !== this.ac && (clearTimeout(this.ac), this.ac = null);
    }, t111.prototype.Uc = function(t) {
        if (!("button" in t) || 0 === t.button) {
            var i403 = this.Ac(t);
            this.cc = !1, this.fc = !1, this.mc = !1, Nn(t) && this.Sc(t), this.lc = {
                p: i403.Ec,
                g: i403.Vc
            }, this.dc && (this.dc(), this.dc = null);
            var n240 = this.Fc.bind(this), s165 = this.Pc.bind(this), h107 = this.yc.ownerDocument.documentElement;
            this.dc = function() {
                h107.removeEventListener("touchmove", n240), h107.removeEventListener("touchend", s165), h107.removeEventListener("mousemove", n240), h107.removeEventListener("mouseup", s165);
            }, h107.addEventListener("touchmove", n240, {
                passive: !1
            }), h107.addEventListener("touchend", s165, {
                passive: !1
            }), this.Nc(), Nn(t) && 1 === t.touches.length ? this.ac = setTimeout(this.Hc.bind(this, t), 240) : (h107.addEventListener("mousemove", n240), h107.addEventListener("mouseup", s165)), this.gc = !0, this.Tc(i403, this.kc.Yc), this.uc || (this.ec = 0, this.uc = setTimeout(this.xc.bind(this), 500));
        }
    }, t111.prototype.Cc = function() {
        var t = this;
        this.yc.addEventListener("mouseenter", this.Sc.bind(this)), this.yc.addEventListener("touchcancel", this.Nc.bind(this));
        var i404 = this.yc.ownerDocument, n241 = function(i405) {
            t.kc.Kc && (i405.composed && t.yc.contains(i405.composedPath()[0]) || i405.target && t.yc.contains(i405.target) || t.kc.Kc());
        };
        this.vc = function() {
            i404.removeEventListener("mousedown", n241), i404.removeEventListener("touchstart", n241);
        }, i404.addEventListener("mousedown", n241), i404.addEventListener("touchstart", n241, {
            passive: !0
        }), this.yc.addEventListener("mouseleave", this.Rc.bind(this)), this.yc.addEventListener("touchstart", this.Uc.bind(this), {
            passive: !0
        }), pn || this.yc.addEventListener("mousedown", this.Uc.bind(this)), this.$c(), this.yc.addEventListener("touchmove", function() {
        }, {
            passive: !1
        });
    }, t111.prototype.$c = function() {
        var t = this;
        void 0 === this.kc.Xc && void 0 === this.kc.Zc && void 0 === this.kc.Jc || (this.yc.addEventListener("touchstart", function(i406) {
            return t.Gc(i406.touches);
        }, {
            passive: !0
        }), this.yc.addEventListener("touchmove", function(i407) {
            if (2 === i407.touches.length && null !== t.wc && void 0 !== t.kc.Zc) {
                var n242 = Cn(i407.touches[0], i407.touches[1]) / t.Mc;
                t.kc.Zc(t.wc, n242), xn(i407);
            }
        }, {
            passive: !1
        }), this.yc.addEventListener("touchend", function(i408) {
            t.Gc(i408.touches);
        }));
    }, t111.prototype.Gc = function(t) {
        1 === t.length && (this.bc = !1), 2 !== t.length || this.bc || this.oc ? this.Qc() : this.tv(t);
    }, t111.prototype.tv = function(t) {
        var i409 = kn(this.yc);
        this.wc = {
            p: (t[0].clientX - i409.left + (t[1].clientX - i409.left)) / 2,
            g: (t[0].clientY - i409.top + (t[1].clientY - i409.top)) / 2
        }, this.Mc = Cn(t[0], t[1]), void 0 !== this.kc.Xc && this.kc.Xc(), this.Nc();
    }, t111.prototype.Qc = function() {
        null !== this.wc && (this.wc = null, void 0 !== this.kc.Jc && this.kc.Jc());
    }, t111.prototype.Rc = function(t) {
        this._c && this._c();
        var i410 = this.Ac(t);
        this.Tc(i410, this.kc.iv);
    }, t111.prototype.Hc = function(t) {
        var i411 = this.Ac(t);
        this.Tc(i411, this.kc.nv), this.cc = !0, this.oc = !0;
    }, t111.prototype.Tc = function(t, i412) {
        i412 && i412.call(this.kc, t);
    }, t111.prototype.Ac = function(t) {
        var i413;
        i413 = "touches" in t && t.touches.length ? t.touches[0] : "changedTouches" in t && t.changedTouches.length ? t.changedTouches[0] : t;
        var n243 = kn(this.yc);
        return {
            sv: i413.clientX,
            hv: i413.clientY,
            Ec: i413.pageX,
            Vc: i413.pageY,
            rv: i413.screenX,
            ev: i413.screenY,
            uv: i413.clientX - n243.left,
            av: i413.clientY - n243.top,
            ov: t.ctrlKey,
            lv: t.altKey,
            fv: t.shiftKey,
            cv: t.metaKey,
            ke: t.type.startsWith("mouse") ? "mouse" : "touch",
            vv: t.view
        };
    }, t111;
}();
function kn(t) {
    return t.getBoundingClientRect() || {
        left: 0,
        top: 0
    };
}
function Cn(t, i414) {
    var n244 = t.clientX - i414.clientX, s166 = t.clientY - i414.clientY;
    return Math.sqrt(n244 * n244 + s166 * s166);
}
function Nn(t) {
    return Boolean(t.touches);
}
function xn(t) {
    t.cancelable && t.preventDefault();
}
var Sn = function() {
    function t112(t, i415, n245, s167) {
        this.Pu = new pi(200), this.fe = 0, this._v = "", this.ma = "", this.Vu = [], this.dv = new Map, this.fe = t, this._v = i415, this.ma = Ut(t, n245, s167);
    }
    return t112.prototype.en = function() {
        this.Pu.Ou(), this.Vu = [], this.dv.clear();
    }, t112.prototype.wv = function(t, i416, n246, s168, h108) {
        var r77 = this.Mv(t, i416);
        if ("left" !== h108) {
            var e61 = cn(t.canvas);
            n246 -= Math.floor(r77.bv * e61);
        }
        s168 -= Math.floor(r77.Mt / 2), t.drawImage(r77.mv, n246, s168, r77.wt, r77.Mt);
    }, t112.prototype.Mv = function(t, i417) {
        var n247, s169 = this;
        if (this.dv.has(i417)) n247 = l(this.dv.get(i417));
        else {
            if (this.Vu.length >= 200) {
                var h109 = l(this.Vu.shift());
                this.dv.delete(h109);
            }
            var r78 = cn(t.canvas), e62 = Math.ceil(this.fe / 4.5), u50 = Math.round(this.fe / 10), a43 = Math.ceil(this.Pu.Vt(t, i417)), o36 = et(Math.round(a43 + 2 * e62)), f19 = et(this.fe + 2 * e62), c22 = _n(document, new fn(o36, f19));
            n247 = {
                Et: i417,
                bv: Math.round(Math.max(1, a43)),
                wt: Math.ceil(o36 * r78),
                Mt: Math.ceil(f19 * r78),
                mv: c22
            }, 0 !== a43 && (this.Vu.push(n247.Et), this.dv.set(n247.Et, n247)), P(t = vn(n247.mv), r78, function() {
                t.font = s169.ma, t.fillStyle = s169._v, t.fillText(i417, 0, f19 - e62 - u50);
            });
        }
        return n247;
    }, t112;
}(), Dn = function() {
    function t113(t, i418, n248, s170) {
        var h110 = this;
        this.Gt = null, this.pv = null, this.gv = null, this.yv = !1, this.kv = new pi(50), this.Cv = new Sn(11, "#000"), this._v = null, this.ma = null, this.Nv = 0, this.xv = function() {
            h110.Sv(h110.tf.ct()), h110.vi.Dv().vt().Or();
        }, this.Av = function() {
            h110.vi.Dv().vt().Or();
        }, this.vi = t, this.ki = i418, this.tf = n248, this.Tv = "left" === s170, this.Bv = document.createElement("div"), this.Bv.style.height = "100%", this.Bv.style.overflow = "hidden", this.Bv.style.width = "25px", this.Bv.style.left = "0", this.Bv.style.position = "relative", this.Lv = dn(this.Bv, new fn(16, 16)), this.Lv.subscribeCanvasConfigured(this.xv);
        var r79 = this.Lv.canvas;
        r79.style.position = "absolute", r79.style.zIndex = "1", r79.style.left = "0", r79.style.top = "0", this.Fv = dn(this.Bv, new fn(16, 16)), this.Fv.subscribeCanvasConfigured(this.Av);
        var e63 = this.Fv.canvas;
        e63.style.position = "absolute", e63.style.zIndex = "2", e63.style.left = "0", e63.style.top = "0";
        var u51 = {
            Yc: this.Ev.bind(this),
            zc: this.Vv.bind(this),
            Kc: this.Ov.bind(this),
            Ic: this.Wv.bind(this),
            jc: this.zv.bind(this),
            Bc: this.Pv.bind(this),
            iv: this.Rv.bind(this)
        };
        this.Iv = new yn(this.Fv.canvas, u51, {
            Oc: !1,
            Wc: !0
        });
    }
    return t113.prototype.en = function() {
        this.Iv.en(), this.Fv.unsubscribeCanvasConfigured(this.Av), this.Fv.destroy(), this.Lv.unsubscribeCanvasConfigured(this.xv), this.Lv.destroy(), null !== this.Gt && this.Gt.Is().sn(this), this.Gt = null, null !== this.gv && (clearTimeout(this.gv), this.gv = null), this.Cv.en();
    }, t113.prototype.jv = function() {
        return this.Bv;
    }, t113.prototype.N = function() {
        return f(this.Gt).ct().borderColor;
    }, t113.prototype.qv = function() {
        return this.ki.textColor;
    }, t113.prototype.Wt = function() {
        return this.ki.fontSize;
    }, t113.prototype.Uv = function() {
        return Ut(this.Wt(), this.ki.fontFamily);
    }, t113.prototype.Hv = function() {
        var t = this.tf.ct(), i419 = this._v !== t.et, n249 = this.ma !== t.Nt;
        return (i419 || n249) && (this.Sv(t), this._v = t.et), n249 && (this.kv.Ou(), this.ma = t.Nt), t;
    }, t113.prototype.Yv = function() {
        if (null === this.Gt) return 0;
        var t = 34, i420 = this.Hv(), n250 = vn(this.Lv.canvas), s171 = this.Gt.Fn();
        n250.font = this.Uv(), s171.length > 0 && (t = Math.max(this.kv.Vt(n250, s171[0].Tn), this.kv.Vt(n250, s171[s171.length - 1].Tn)));
        for(var h111 = this.Kv(), r80 = h111.length; r80--;){
            var e64 = this.kv.Vt(n250, h111[r80].Et());
            e64 > t && (t = e64);
        }
        var u52 = this.Gt.H();
        if (null !== u52 && null !== this.pv) {
            var a44 = this.Gt.Si(1, u52), o37 = this.Gt.Si(this.pv.ht - 2, u52);
            t = Math.max(t, this.kv.Vt(n250, this.Gt.ii(Math.floor(Math.min(a44, o37)) + 0.11111111111111, u52)), this.kv.Vt(n250, this.Gt.ii(Math.ceil(Math.max(a44, o37)) - 0.11111111111111, u52)));
        }
        var l28 = Math.ceil(i420.At + i420.Dt + i420.Lt + i420.Ft + t);
        return l28 += l28 % 2;
    }, t113.prototype.$v = function(t) {
        if (t.st < 0 || t.ht < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
        null !== this.pv && this.pv.on(t) || (this.pv = t, this.Lv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.Fv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.Bv.style.width = t.st + "px", this.Bv.style.height = t.ht + "px", this.Bv.style.minWidth = t.st + "px");
    }, t113.prototype.Xv = function() {
        return f(this.pv).st;
    }, t113.prototype.fi = function(t) {
        this.Gt !== t && (null !== this.Gt && this.Gt.Is().sn(this), this.Gt = t, t.Is().Ji(this.qn.bind(this), this));
    }, t113.prototype.$ = function() {
        return this.Gt;
    }, t113.prototype.Ou = function() {
        var t = this.vi.Zv();
        this.vi.Dv().vt().Ll(t, f(this.$()));
    }, t113.prototype.Jv = function(t) {
        if (null !== this.pv) {
            if (1 !== t) {
                var i421 = vn(this.Lv.canvas);
                this.Gv(), this.Qv(i421, this.Lv.pixelRatio), this.yu(i421, this.Lv.pixelRatio), this.t_(i421, this.Lv.pixelRatio), this.i_(i421, this.Lv.pixelRatio);
            }
            var n251 = vn(this.Fv.canvas), s172 = this.pv.st, h112 = this.pv.ht;
            P(n251, this.Fv.pixelRatio, function() {
                n251.clearRect(0, 0, s172, h112);
            }), this.n_(n251, this.Fv.pixelRatio);
        }
    }, t113.prototype.s_ = function() {
        return this.Lv.canvas;
    }, t113.prototype.Ev = function(t) {
        if (null !== this.Gt && !this.Gt.ti() && this.vi.Dv().ct().handleScale.axisPressedMouseMove.price) {
            var i422 = this.vi.Dv().vt(), n252 = this.vi.Zv();
            this.yv = !0, i422.Nl(n252, this.Gt, t.av);
        }
    }, t113.prototype.Vv = function(t) {
        if (null !== this.Gt && this.vi.Dv().ct().handleScale.axisPressedMouseMove.price) {
            var i423 = this.vi.Dv().vt(), n253 = this.vi.Zv(), s173 = this.Gt;
            i423.xl(n253, s173, t.av);
        }
    }, t113.prototype.Ov = function() {
        if (null !== this.Gt && this.vi.Dv().ct().handleScale.axisPressedMouseMove.price) {
            var t = this.vi.Dv().vt(), i424 = this.vi.Zv(), n254 = this.Gt;
            this.yv && (this.yv = !1, t.Sl(i424, n254));
        }
    }, t113.prototype.Wv = function(t) {
        if (null !== this.Gt && this.vi.Dv().ct().handleScale.axisPressedMouseMove.price) {
            var i425 = this.vi.Dv().vt(), n255 = this.vi.Zv();
            this.yv = !1, i425.Sl(n255, this.Gt);
        }
    }, t113.prototype.zv = function(t) {
        this.vi.Dv().ct().handleScale.axisDoubleClickReset && this.Ou();
    }, t113.prototype.Pv = function(t) {
        null !== this.Gt && (!this.vi.Dv().vt().ct().handleScale.axisPressedMouseMove.price || this.Gt.cs() || this.Gt.vs() || this.h_(1));
    }, t113.prototype.Rv = function(t) {
        this.h_(0);
    }, t113.prototype.Kv = function() {
        var t = this, i426 = [], n256 = null === this.Gt ? void 0 : this.Gt;
        return (function(s174) {
            for(var h113 = 0; h113 < s174.length; ++h113)for(var r81 = s174[h113].Pi(t.vi.Zv(), n256), e65 = 0; e65 < r81.length; e65++)i426.push(r81[e65]);
        })(this.vi.Zv().Os()), i426;
    }, t113.prototype.Qv = function(t, i427) {
        var n257 = this;
        if (null !== this.pv) {
            var s175 = this.pv.st, h114 = this.pv.ht;
            P(t, i427, function() {
                var i428 = n257.vi.Zv().vt(), r82 = i428.Rf(), e66 = i428.Pf();
                r82 === e66 ? R(t, 0, 0, s175, h114, r82) : I(t, 0, 0, s175, h114, r82, e66);
            });
        }
    }, t113.prototype.yu = function(t, i429) {
        if (null !== this.pv && null !== this.Gt && this.Gt.ct().borderVisible) {
            t.save(), t.fillStyle = this.N();
            var n258, s176 = Math.max(1, Math.floor(this.Hv().At * i429));
            n258 = this.Tv ? Math.floor(this.pv.st * i429) - s176 : 0, t.fillRect(n258, 0, s176, Math.ceil(this.pv.ht * i429)), t.restore();
        }
    }, t113.prototype.t_ = function(t, i430) {
        if (null !== this.pv && null !== this.Gt) {
            var n259 = this.Gt.Fn();
            t.save(), t.strokeStyle = this.N(), t.font = this.Uv(), t.fillStyle = this.N();
            var s177 = this.Hv(), h115 = this.Gt.ct().borderVisible && this.Gt.ct().drawTicks, r83 = this.Tv ? Math.floor((this.pv.st - s177.Dt) * i430 - s177.At * i430) : Math.floor(s177.At * i430), e67 = this.Tv ? Math.round(r83 - s177.Lt * i430) : Math.round(r83 + s177.Dt * i430 + s177.Lt * i430), u53 = this.Tv ? "right" : "left", a45 = Math.max(1, Math.floor(i430)), o38 = Math.floor(0.5 * i430);
            if (h115) {
                var l29 = Math.round(s177.Dt * i430);
                t.beginPath();
                for(var f20 = 0, c23 = n259; f20 < c23.length; f20++){
                    var v18 = c23[f20];
                    t.rect(r83, Math.round(v18.An * i430) - o38, l29, a45);
                }
                t.fill();
            }
            t.fillStyle = this.qv();
            for(var _15 = 0, d13 = n259; _15 < d13.length; _15++){
                v18 = d13[_15];
                this.Cv.wv(t, v18.Tn, e67, Math.round(v18.An * i430), u53);
            }
            t.restore();
        }
    }, t113.prototype.Gv = function() {
        if (null !== this.pv && null !== this.Gt) {
            var t114 = this.pv.ht / 2, i431 = [], n260 = this.Gt.Os().slice(), s178 = this.vi.Zv(), h116 = this.Hv();
            this.Gt === s178.xi() && this.vi.Zv().Os().forEach(function(t) {
                s178.Uu(t) && n260.push(t);
            });
            var r84 = this.Gt.Vs()[0], e68 = this.Gt;
            n260.forEach(function(n261) {
                var h118 = n261.Pi(s178, e68);
                h118.forEach(function(t) {
                    t.Kt(null), t.$t() && i431.push(t);
                }), r84 === n261 && h118.length > 0 && (t114 = h118[0].zt());
            });
            var u54 = i431.filter(function(i432) {
                return i432.zt() <= t114;
            }), a46 = i431.filter(function(i433) {
                return i433.zt() > t114;
            });
            if (u54.sort(function(t, i434) {
                return i434.zt() - t.zt();
            }), u54.length && a46.length && a46.push(u54[0]), a46.sort(function(t, i435) {
                return t.zt() - i435.zt();
            }), i431.forEach(function(t) {
                return t.Kt(t.zt());
            }), this.Gt.ct().alignLabels) {
                for(var o39 = 1; o39 < u54.length; o39++){
                    var l30 = u54[o39], f21 = (v19 = u54[o39 - 1]).Mt(h116, !1);
                    l30.zt() > (_16 = v19.Yt()) - f21 && l30.Kt(_16 - f21);
                }
                for(var c24 = 1; c24 < a46.length; c24++){
                    var v19, _16;
                    l30 = a46[c24], f21 = (v19 = a46[c24 - 1]).Mt(h116, !0);
                    l30.zt() < (_16 = v19.Yt()) + f21 && l30.Kt(_16 + f21);
                }
            }
        }
    }, t113.prototype.i_ = function(t, i436) {
        var n262 = this;
        if (null !== this.pv) {
            t.save();
            var s179 = this.pv, h119 = this.Kv(), r85 = this.Hv(), e69 = this.Tv ? "right" : "left";
            h119.forEach(function(h120) {
                if (h120.Xt()) {
                    var u55 = h120.P(f(n262.Gt));
                    t.save(), u55.h(t, r85, n262.kv, s179.st, e69, i436), t.restore();
                }
            }), t.restore();
        }
    }, t113.prototype.n_ = function(t, i437) {
        var n263 = this;
        if (null !== this.pv && null !== this.Gt) {
            t.save();
            var s180 = this.pv, h121 = this.vi.Dv().vt(), r86 = [], e70 = this.vi.Zv(), u56 = h121.bf().Pi(e70, this.Gt);
            u56.length && r86.push(u56);
            var a47 = this.Hv(), o40 = this.Tv ? "right" : "left";
            r86.forEach(function(h122) {
                h122.forEach(function(h123) {
                    t.save(), h123.P(f(n263.Gt)).h(t, a47, n263.kv, s180.st, o40, i437), t.restore();
                });
            }), t.restore();
        }
    }, t113.prototype.h_ = function(t) {
        this.Bv.style.cursor = 1 === t ? "ns-resize" : "default";
    }, t113.prototype.qn = function() {
        var t = this, i438 = this.Yv();
        if (this.Nv < i438) {
            var n264 = this.vi.Dv();
            null === this.gv && (this.gv = setTimeout(function() {
                n264 && n264.vt().uf(), t.gv = null;
            }, 100));
        }
        this.Nv = i438;
    }, t113.prototype.Sv = function(t) {
        this.Cv.en(), this.Cv = new Sn(t.Wt, t.et, t.le);
    }, t113;
}(), An = gn;
function Tn(t, i439, n265, s181, h124) {
    t.o && t.o(i439, n265, s181, h124);
}
function Bn(t, i440, n266, s182, h125) {
    t.h(i440, n266, s182, h125);
}
function Ln(t, i441) {
    return t.zi(i441);
}
function Fn(t, i442) {
    return void 0 !== t.Io ? t.Io(i442) : [];
}
var En = function() {
    function t116(t, i443) {
        var n267 = this;
        this.pv = new fn(0, 0), this.r_ = null, this.e_ = null, this.u_ = null, this.a_ = !1, this.o_ = new it, this.l_ = 0, this.f_ = !1, this.c_ = null, this.v_ = !1, this.__ = null, this.d_ = null, this.xv = function() {
            return n267.w_ && n267.hi().Or();
        }, this.Av = function() {
            return n267.w_ && n267.hi().Or();
        }, this.M_ = t, this.w_ = i443, this.w_.Vl().Ji(this.b_.bind(this), this, !0), this.m_ = document.createElement("td"), this.m_.style.padding = "0", this.m_.style.position = "relative";
        var s183 = document.createElement("div");
        s183.style.width = "100%", s183.style.height = "100%", s183.style.position = "relative", s183.style.overflow = "hidden", this.p_ = document.createElement("td"), this.p_.style.padding = "0", this.g_ = document.createElement("td"), this.g_.style.padding = "0", this.m_.appendChild(s183), this.Lv = dn(s183, new fn(16, 16)), this.Lv.subscribeCanvasConfigured(this.xv);
        var h126 = this.Lv.canvas;
        h126.style.position = "absolute", h126.style.zIndex = "1", h126.style.left = "0", h126.style.top = "0", this.Fv = dn(s183, new fn(16, 16)), this.Fv.subscribeCanvasConfigured(this.Av);
        var r87 = this.Fv.canvas;
        r87.style.position = "absolute", r87.style.zIndex = "2", r87.style.left = "0", r87.style.top = "0", this.y_ = document.createElement("tr"), this.y_.appendChild(this.p_), this.y_.appendChild(this.m_), this.y_.appendChild(this.g_), this.k_();
        var e71 = this.Dv().ct().handleScroll;
        this.Iv = new yn(this.Fv.canvas, this, {
            Oc: !e71.vertTouchDrag,
            Wc: !e71.horzTouchDrag
        });
    }
    return t116.prototype.en = function() {
        null !== this.r_ && this.r_.en(), null !== this.e_ && this.e_.en(), this.Fv.unsubscribeCanvasConfigured(this.Av), this.Fv.destroy(), this.Lv.unsubscribeCanvasConfigured(this.xv), this.Lv.destroy(), null !== this.w_ && this.w_.Vl().sn(this), this.Iv.en();
    }, t116.prototype.Zv = function() {
        return f(this.w_);
    }, t116.prototype.C_ = function(i444) {
        null !== this.w_ && this.w_.Vl().sn(this), this.w_ = i444, null !== this.w_ && this.w_.Vl().Ji(t116.prototype.b_.bind(this), this, !0), this.k_();
    }, t116.prototype.Dv = function() {
        return this.M_;
    }, t116.prototype.jv = function() {
        return this.y_;
    }, t116.prototype.k_ = function() {
        if (null !== this.w_ && (this.N_(), 0 !== this.hi().W().length)) {
            if (null !== this.r_) {
                var t = this.w_.kl();
                this.r_.fi(f(t));
            }
            if (null !== this.e_) {
                var i445 = this.w_.Cl();
                this.e_.fi(f(i445));
            }
        }
    }, t116.prototype.wl = function() {
        return null !== this.w_ ? this.w_.wl() : 0;
    }, t116.prototype.Ml = function(t) {
        this.w_ && this.w_.Ml(t);
    }, t116.prototype.Bc = function(t) {
        if (this.w_) {
            var i446 = t.uv, n268 = t.av;
            pn || this.x_(i446, n268);
        }
    }, t116.prototype.Yc = function(t) {
        if (this.f_ = !1, this.v_ = null !== this.c_, this.w_) {
            if (this.S_(), document.activeElement !== document.body && document.activeElement !== document.documentElement) f(document.activeElement).blur();
            else {
                var i447 = document.getSelection();
                null !== i447 && i447.removeAllRanges();
            }
            var n269 = this.hi();
            if (!this.w_.xi().ti() && !n269.j().ti()) {
                if (null !== this.c_) {
                    var s184 = n269.bf();
                    this.__ = {
                        x: s184.bt(),
                        y: s184.gt()
                    }, this.c_ = {
                        x: t.uv,
                        y: t.av
                    };
                }
                pn || this.x_(t.uv, t.av);
            }
        }
    }, t116.prototype.Lc = function(t) {
        if (this.w_) {
            var i448 = t.uv, n270 = t.av;
            if (this.D_() && this.A_(), !pn) {
                this.x_(i448, n270);
                var s185 = this.pa(i448, n270);
                this.hi().cf(s185 && {
                    vf: s185.vf,
                    T_: s185.T_
                });
            }
        }
    }, t116.prototype.qc = function(t) {
        if (null !== this.w_) {
            var i449 = t.uv, n271 = t.av;
            if (this.o_.rn()) {
                var s186 = this.hi().bf().I();
                this.o_.hn(s186, {
                    x: i449,
                    y: n271
                });
            }
            this.B_();
        }
    }, t116.prototype.zc = function(t) {
        if (null !== this.w_) {
            var i450 = this.hi(), n272 = t.uv, s187 = t.av;
            if (null !== this.c_) {
                this.v_ = !1;
                var h127 = f(this.__), r88 = h127.x + (n272 - this.c_.x), e72 = h127.y + (s187 - this.c_.y);
                this.x_(r88, e72);
            } else this.D_() || this.x_(n272, s187);
            if (!i450.j().ti()) {
                var u57 = this.M_.ct(), a48 = u57.handleScroll, o41 = u57.kineticScroll;
                if (a48.pressedMouseMove && "touch" !== t.ke || (a48.horzTouchDrag || a48.vertTouchDrag) && "mouse" !== t.ke) {
                    var l31 = this.w_.xi(), c25 = performance.now();
                    null !== this.u_ || this.L_() || (this.u_ = {
                        x: t.sv,
                        y: t.hv,
                        Dh: c25,
                        uv: t.uv,
                        av: t.av
                    }), null !== this.d_ && this.d_.tc(t.uv, c25), null === this.u_ || this.a_ || this.u_.x === t.sv && this.u_.y === t.hv || (null === this.d_ && ("touch" === t.ke && o41.touch || "mouse" === t.ke && o41.mouse) && (this.d_ = new bn(0.2, 7, 0.997, 15), this.d_.tc(this.u_.uv, this.u_.Dh), this.d_.tc(t.uv, c25)), l31.ti() || i450.Dl(this.w_, l31, t.av), i450.Nf(t.uv), this.a_ = !0), this.a_ && (l31.ti() || i450.Al(this.w_, l31, t.av), i450.xf(t.uv));
                }
            }
        }
    }, t116.prototype.Ic = function(t) {
        null !== this.w_ && (this.f_ = !1, this.F_(t));
    }, t116.prototype.nv = function(t) {
        if (this.f_ = !0, null === this.c_ && An) {
            var i451 = {
                x: t.uv,
                y: t.av
            };
            this.E_(i451, i451);
        }
    }, t116.prototype.iv = function(t) {
        null !== this.w_ && (this.w_.vt().cf(null), gn || this.A_());
    }, t116.prototype.V_ = function() {
        return this.o_;
    }, t116.prototype.Xc = function() {
        this.l_ = 1, this.S_();
    }, t116.prototype.Zc = function(t, i452) {
        if (this.M_.ct().handleScale.pinch) {
            var n273 = 5 * (i452 - this.l_);
            this.l_ = i452, this.hi().kf(t.p, n273);
        }
    }, t116.prototype.pa = function(t, i453) {
        var n274 = this.w_;
        if (null === n274) return null;
        for(var s188 = 0, h128 = n274.Os(); s188 < h128.length; s188++){
            var r89 = h128[s188], e73 = this.O_(r89.zi(n274), t, i453);
            if (null !== e73) return {
                vf: r89,
                vv: e73.vv,
                T_: e73.T_
            };
        }
        return null;
    }, t116.prototype.W_ = function(t, i454) {
        f("left" === i454 ? this.r_ : this.e_).$v(new fn(t, this.pv.ht));
    }, t116.prototype.z_ = function() {
        return this.pv;
    }, t116.prototype.$v = function(t) {
        if (t.st < 0 || t.ht < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
        this.pv.on(t) || (this.pv = t, this.Lv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.Fv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.m_.style.width = t.st + "px", this.m_.style.height = t.ht + "px");
    }, t116.prototype.P_ = function() {
        var t = f(this.w_);
        t.yl(t.kl()), t.yl(t.Cl());
        for(var i455 = 0, n275 = t.Vs(); i455 < n275.length; i455++){
            var s189 = n275[i455];
            if (t.Uu(s189)) {
                var h129 = s189.$();
                null !== h129 && t.yl(h129), s189.Ii();
            }
        }
    }, t116.prototype.s_ = function() {
        return this.Lv.canvas;
    }, t116.prototype.Jv = function(t) {
        if (0 !== t && null !== this.w_) {
            if (t > 1 && this.P_(), null !== this.r_ && this.r_.Jv(t), null !== this.e_ && this.e_.Jv(t), 1 !== t) {
                var i456 = vn(this.Lv.canvas);
                i456.save(), this.Qv(i456, this.Lv.pixelRatio), this.w_ && (this.R_(i456, this.Lv.pixelRatio), this.I_(i456, this.Lv.pixelRatio), this.j_(i456, this.Lv.pixelRatio, Ln)), i456.restore();
            }
            var n276 = vn(this.Fv.canvas);
            n276.clearRect(0, 0, Math.ceil(this.pv.st * this.Fv.pixelRatio), Math.ceil(this.pv.ht * this.Fv.pixelRatio)), this.j_(n276, this.Lv.pixelRatio, Fn), this.q_(n276, this.Fv.pixelRatio);
        }
    }, t116.prototype.U_ = function() {
        return this.r_;
    }, t116.prototype.H_ = function() {
        return this.e_;
    }, t116.prototype.b_ = function() {
        null !== this.w_ && this.w_.Vl().sn(this), this.w_ = null;
    }, t116.prototype.Qv = function(t, i457) {
        var n277 = this;
        P(t, i457, function() {
            var i458 = n277.hi(), s190 = i458.Rf(), h130 = i458.Pf();
            s190 === h130 ? R(t, 0, 0, n277.pv.st, n277.pv.ht, h130) : I(t, 0, 0, n277.pv.st, n277.pv.ht, s190, h130);
        });
    }, t116.prototype.R_ = function(t, i459) {
        var n278 = f(this.w_), s191 = n278.Ol().sl().P(n278.Mt(), n278.wt());
        null !== s191 && (t.save(), s191.h(t, i459, !1), t.restore());
    }, t116.prototype.I_ = function(t, i460) {
        var n279 = this.hi().Mf();
        this.Y_(t, i460, Ln, Tn, n279), this.Y_(t, i460, Ln, Bn, n279);
    }, t116.prototype.q_ = function(t, i461) {
        this.Y_(t, i461, Ln, Bn, this.hi().bf());
    }, t116.prototype.j_ = function(t, i462, n280) {
        for(var s192 = f(this.w_).Os(), h131 = 0, r90 = s192; h131 < r90.length; h131++){
            var e74 = r90[h131];
            this.Y_(t, i462, n280, Tn, e74);
        }
        for(var u58 = 0, a49 = s192; u58 < a49.length; u58++){
            e74 = a49[u58];
            this.Y_(t, i462, n280, Bn, e74);
        }
    }, t116.prototype.Y_ = function(t, i463, n281, s193, h132) {
        for(var r91 = f(this.w_), e75 = n281(h132, r91), u59 = r91.Mt(), a50 = r91.wt(), o42 = r91.vt().ff(), l32 = null !== o42 && o42.vf === h132, c26 = null !== o42 && l32 && void 0 !== o42.T_ ? o42.T_.ga : void 0, v20 = 0, _17 = e75; v20 < _17.length; v20++){
            var d14 = _17[v20].P(u59, a50);
            null !== d14 && (t.save(), s193(d14, t, i463, l32, c26), t.restore());
        }
    }, t116.prototype.O_ = function(t, i464, n282) {
        for(var s194 = 0, h133 = t; s194 < h133.length; s194++){
            var r92 = h133[s194], e76 = r92.P(this.pv.ht, this.pv.st);
            if (null !== e76 && e76.pa) {
                var u60 = e76.pa(i464, n282);
                if (null !== u60) return {
                    vv: r92,
                    T_: u60
                };
            }
        }
        return null;
    }, t116.prototype.N_ = function() {
        if (null !== this.w_) {
            var t = this.M_, i465 = this.w_.kl().ct().visible, n283 = this.w_.Cl().ct().visible;
            i465 || null === this.r_ || (this.p_.removeChild(this.r_.jv()), this.r_.en(), this.r_ = null), n283 || null === this.e_ || (this.g_.removeChild(this.e_.jv()), this.e_.en(), this.e_ = null);
            var s195 = t.vt().Ff();
            i465 && null === this.r_ && (this.r_ = new Dn(this, t.ct().layout, s195, "left"), this.p_.appendChild(this.r_.jv())), n283 && null === this.e_ && (this.e_ = new Dn(this, t.ct().layout, s195, "right"), this.g_.appendChild(this.e_.jv()));
        }
    }, t116.prototype.D_ = function() {
        return An && null === this.c_;
    }, t116.prototype.L_ = function() {
        return An && this.f_ || null !== this.c_;
    }, t116.prototype.K_ = function(t) {
        return Math.max(0, Math.min(t, this.pv.st - 1));
    }, t116.prototype.X_ = function(t) {
        return Math.max(0, Math.min(t, this.pv.ht - 1));
    }, t116.prototype.x_ = function(t, i466) {
        this.hi().Tf(this.K_(t), this.X_(i466), f(this.w_));
    }, t116.prototype.A_ = function() {
        this.hi().Bf();
    }, t116.prototype.B_ = function() {
        this.v_ && (this.c_ = null, this.A_());
    }, t116.prototype.E_ = function(t, i467) {
        this.c_ = t, this.v_ = !1, this.x_(i467.x, i467.y);
        var n284 = this.hi().bf();
        this.__ = {
            x: n284.bt(),
            y: n284.gt()
        };
    }, t116.prototype.hi = function() {
        return this.M_.vt();
    }, t116.prototype.Z_ = function() {
        var t = this.hi(), i468 = this.Zv(), n285 = i468.xi();
        t.Tl(i468, n285), t.Sf(), this.u_ = null, this.a_ = !1;
    }, t116.prototype.F_ = function(t117) {
        var i469 = this;
        if (this.a_) {
            var n286 = performance.now();
            if (null !== this.d_ && this.d_.ia(t117.uv, n286), null === this.d_ || this.d_.nc(n286)) this.Z_();
            else {
                var s196 = this.hi(), h134 = s196.j(), r93 = this.d_, e77 = function() {
                    if (!r93.hc()) {
                        var t = performance.now(), n287 = r93.nc(t);
                        if (!r93.hc()) {
                            var u61 = h134.Pr();
                            s196.xf(r93.ic(t)), u61 === h134.Pr() && (n287 = !0, i469.d_ = null);
                        }
                        n287 ? i469.Z_() : requestAnimationFrame(e77);
                    }
                };
                requestAnimationFrame(e77);
            }
        }
    }, t116.prototype.S_ = function() {
        var t = performance.now(), i470 = null === this.d_ || this.d_.nc(t);
        null !== this.d_ && (i470 || this.Z_()), null !== this.d_ && (this.d_.rc(), this.d_ = null);
    }, t116;
}(), Vn = function() {
    function t118(t, i471, n288, s197, h135) {
        var r94 = this;
        this.L = !0, this.pv = new fn(0, 0), this.xv = function() {
            return r94.Jv(3);
        }, this.Tv = "left" === t, this.tf = n288.Ff, this.ki = i471, this.J_ = s197, this.G_ = h135, this.Bv = document.createElement("div"), this.Bv.style.width = "25px", this.Bv.style.height = "100%", this.Bv.style.overflow = "hidden", this.Lv = dn(this.Bv, new fn(16, 16)), this.Lv.subscribeCanvasConfigured(this.xv);
    }
    return t118.prototype.en = function() {
        this.Lv.unsubscribeCanvasConfigured(this.xv), this.Lv.destroy();
    }, t118.prototype.jv = function() {
        return this.Bv;
    }, t118.prototype.z_ = function() {
        return this.pv;
    }, t118.prototype.$v = function(t) {
        if (t.st < 0 || t.ht < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
        this.pv.on(t) || (this.pv = t, this.Lv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.Bv.style.width = t.st + "px", this.Bv.style.minWidth = t.st + "px", this.Bv.style.height = t.ht + "px", this.L = !0);
    }, t118.prototype.Jv = function(t) {
        if ((!(t < 3) || this.L) && 0 !== this.pv.st && 0 !== this.pv.ht) {
            this.L = !1;
            var i472 = vn(this.Lv.canvas);
            this.Qv(i472, this.Lv.pixelRatio), this.yu(i472, this.Lv.pixelRatio);
        }
    }, t118.prototype.s_ = function() {
        return this.Lv.canvas;
    }, t118.prototype.yu = function(t, i473) {
        if (this.J_()) {
            var n289 = this.pv.st;
            t.save(), t.fillStyle = this.ki.timeScale.borderColor;
            var s198 = Math.floor(this.tf.ct().At * i473), h136 = this.Tv ? Math.round(n289 * i473) - s198 : 0;
            t.fillRect(h136, 0, s198, s198), t.restore();
        }
    }, t118.prototype.Qv = function(t, i474) {
        var n290 = this;
        P(t, i474, function() {
            R(t, 0, 0, n290.pv.st, n290.pv.ht, n290.G_());
        });
    }, t118;
}();
function On(t, i475) {
    return t.Rh > i475.Rh ? t : i475;
}
var Wn = function() {
    function t119(t) {
        var i476 = this;
        this.Q_ = null, this.td = null, this.oe = null, this.nd = !1, this.pv = new fn(0, 0), this.sd = new it, this.kv = new pi(5), this.xv = function() {
            return i476.M_.vt().Or();
        }, this.Av = function() {
            return i476.M_.vt().Or();
        }, this.M_ = t, this.ki = t.ct().layout, this.hd = document.createElement("tr"), this.rd = document.createElement("td"), this.rd.style.padding = "0", this.ed = document.createElement("td"), this.ed.style.padding = "0", this.Bv = document.createElement("td"), this.Bv.style.height = "25px", this.Bv.style.padding = "0", this.ud = document.createElement("div"), this.ud.style.width = "100%", this.ud.style.height = "100%", this.ud.style.position = "relative", this.ud.style.overflow = "hidden", this.Bv.appendChild(this.ud), this.Lv = dn(this.ud, new fn(16, 16)), this.Lv.subscribeCanvasConfigured(this.xv);
        var n291 = this.Lv.canvas;
        n291.style.position = "absolute", n291.style.zIndex = "1", n291.style.left = "0", n291.style.top = "0", this.Fv = dn(this.ud, new fn(16, 16)), this.Fv.subscribeCanvasConfigured(this.Av);
        var s199 = this.Fv.canvas;
        s199.style.position = "absolute", s199.style.zIndex = "2", s199.style.left = "0", s199.style.top = "0", this.hd.appendChild(this.rd), this.hd.appendChild(this.Bv), this.hd.appendChild(this.ed), this.ad(), this.M_.vt().dl().Ji(this.ad.bind(this), this), this.Iv = new yn(this.Fv.canvas, this, {
            Oc: !0,
            Wc: !1
        });
    }
    return t119.prototype.en = function() {
        this.Iv.en(), null !== this.Q_ && this.Q_.en(), null !== this.td && this.td.en(), this.Fv.unsubscribeCanvasConfigured(this.Av), this.Fv.destroy(), this.Lv.unsubscribeCanvasConfigured(this.xv), this.Lv.destroy();
    }, t119.prototype.jv = function() {
        return this.hd;
    }, t119.prototype.od = function() {
        return this.Q_;
    }, t119.prototype.ld = function() {
        return this.td;
    }, t119.prototype.Yc = function(t) {
        if (!this.nd) {
            this.nd = !0;
            var i477 = this.M_.vt();
            !i477.j().ti() && this.M_.ct().handleScale.axisPressedMouseMove.time && i477.yf(t.uv);
        }
    }, t119.prototype.Kc = function() {
        var t = this.M_.vt();
        !t.j().ti() && this.nd && (this.nd = !1, this.M_.ct().handleScale.axisPressedMouseMove.time && t.Af());
    }, t119.prototype.zc = function(t) {
        var i478 = this.M_.vt();
        !i478.j().ti() && this.M_.ct().handleScale.axisPressedMouseMove.time && i478.Df(t.uv);
    }, t119.prototype.Ic = function(t) {
        this.nd = !1;
        var i479 = this.M_.vt();
        i479.j().ti() && !this.M_.ct().handleScale.axisPressedMouseMove.time || i479.Af();
    }, t119.prototype.jc = function() {
        this.M_.ct().handleScale.axisDoubleClickReset && this.M_.vt().Ne();
    }, t119.prototype.Bc = function(t) {
        this.M_.vt().ct().handleScale.axisPressedMouseMove.time && this.h_(1);
    }, t119.prototype.iv = function(t) {
        this.h_(0);
    }, t119.prototype.z_ = function() {
        return this.pv;
    }, t119.prototype.fd = function() {
        return this.sd;
    }, t119.prototype.vd = function(t, i480, n292) {
        this.pv && this.pv.on(t) || (this.pv = t, this.Lv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.Fv.resizeCanvas({
            width: t.st,
            height: t.ht
        }), this.Bv.style.width = t.st + "px", this.Bv.style.height = t.ht + "px", this.sd.hn(t)), null !== this.Q_ && this.Q_.$v(new fn(i480, t.ht)), null !== this.td && this.td.$v(new fn(n292, t.ht));
    }, t119.prototype._d = function() {
        var t = this.dd();
        return Math.ceil(t.At + t.Dt + t.Wt + t.Tt + t.Bt);
    }, t119.prototype.O = function() {
        this.M_.vt().j().Fn();
    }, t119.prototype.s_ = function() {
        return this.Lv.canvas;
    }, t119.prototype.Jv = function(t) {
        if (0 !== t) {
            if (1 !== t) {
                var i481 = vn(this.Lv.canvas);
                this.Qv(i481, this.Lv.pixelRatio), this.yu(i481, this.Lv.pixelRatio), this.t_(i481, this.Lv.pixelRatio), null !== this.Q_ && this.Q_.Jv(t), null !== this.td && this.td.Jv(t);
            }
            var n293 = vn(this.Fv.canvas), s200 = this.Fv.pixelRatio;
            n293.clearRect(0, 0, Math.ceil(this.pv.st * s200), Math.ceil(this.pv.ht * s200)), this.wd([
                this.M_.vt().bf()
            ], n293, s200);
        }
    }, t119.prototype.Qv = function(t, i482) {
        var n294 = this;
        P(t, i482, function() {
            R(t, 0, 0, n294.pv.st, n294.pv.ht, n294.M_.vt().Pf());
        });
    }, t119.prototype.yu = function(t, i483) {
        if (this.M_.ct().timeScale.borderVisible) {
            t.save(), t.fillStyle = this.Md();
            var n295 = Math.max(1, Math.floor(this.dd().At * i483));
            t.fillRect(0, 0, Math.ceil(this.pv.st * i483), n295), t.restore();
        }
    }, t119.prototype.t_ = function(t, i484) {
        var n296 = this, s201 = this.M_.vt().j().Fn();
        if (s201 && 0 !== s201.length) {
            var h137 = s201.reduce(On, s201[0]).Rh;
            h137 > 30 && h137 < 50 && (h137 = 30), t.save(), t.strokeStyle = this.Md();
            var r95 = this.dd(), e78 = r95.At + r95.Dt + r95.Tt + r95.Wt - r95.Ot;
            t.textAlign = "center", t.fillStyle = this.Md();
            var u62 = Math.floor(this.dd().At * i484), a51 = Math.max(1, Math.floor(i484)), o43 = Math.floor(0.5 * i484);
            if (this.M_.vt().j().ct().borderVisible) {
                t.beginPath();
                for(var l33 = Math.round(r95.Dt * i484), f22 = s201.length; f22--;){
                    var c27 = Math.round(s201[f22].An * i484);
                    t.rect(c27 - o43, u62, a51, l33);
                }
                t.fill();
            }
            t.fillStyle = this.ve(), P(t, i484, function() {
                t.font = n296.bd();
                for(var i485 = 0, r96 = s201; i485 < r96.length; i485++)if ((l34 = r96[i485]).Rh < h137) {
                    var u63 = l34.Ir ? n296.md(t, l34.An, l34.Tn) : l34.An;
                    t.fillText(l34.Tn, u63, e78);
                }
                t.font = n296.pd();
                for(var a52 = 0, o44 = s201; a52 < o44.length; a52++){
                    var l34;
                    if ((l34 = o44[a52]).Rh >= h137) {
                        u63 = l34.Ir ? n296.md(t, l34.An, l34.Tn) : l34.An;
                        t.fillText(l34.Tn, u63, e78);
                    }
                }
            });
        }
    }, t119.prototype.md = function(t, i486, n297) {
        var s202 = this.kv.Vt(t, n297), h138 = s202 / 2, r97 = Math.floor(i486 - h138) + 0.5;
        return r97 < 0 ? i486 += Math.abs(0 - r97) : r97 + s202 > this.pv.st && (i486 -= Math.abs(this.pv.st - (r97 + s202))), i486;
    }, t119.prototype.wd = function(t, i487, n298) {
        for(var s203 = this.dd(), h139 = 0, r98 = t; h139 < r98.length; h139++)for(var e79 = 0, u64 = r98[h139].ci(); e79 < u64.length; e79++){
            var a53 = u64[e79];
            i487.save(), a53.P().h(i487, s203, n298), i487.restore();
        }
    }, t119.prototype.Md = function() {
        return this.M_.ct().timeScale.borderColor;
    }, t119.prototype.ve = function() {
        return this.ki.textColor;
    }, t119.prototype.fe = function() {
        return this.ki.fontSize;
    }, t119.prototype.bd = function() {
        return Ut(this.fe(), this.ki.fontFamily);
    }, t119.prototype.pd = function() {
        return Ut(this.fe(), this.ki.fontFamily, "bold");
    }, t119.prototype.dd = function() {
        null === this.oe && (this.oe = {
            At: 1,
            Ot: NaN,
            Tt: NaN,
            Bt: NaN,
            si: NaN,
            Dt: 3,
            Wt: NaN,
            Nt: "",
            ni: new pi
        });
        var t = this.oe, i488 = this.bd();
        if (t.Nt !== i488) {
            var n299 = this.fe();
            t.Wt = n299, t.Nt = i488, t.Tt = Math.ceil(n299 / 2.5), t.Bt = t.Tt, t.si = Math.ceil(n299 / 2), t.Ot = Math.round(this.fe() / 5), t.ni.Ou();
        }
        return this.oe;
    }, t119.prototype.h_ = function(t) {
        this.Bv.style.cursor = 1 === t ? "ew-resize" : "default";
    }, t119.prototype.ad = function() {
        var t = this.M_.vt(), i489 = t.ct();
        i489.leftPriceScale.visible || null === this.Q_ || (this.rd.removeChild(this.Q_.jv()), this.Q_.en(), this.Q_ = null), i489.rightPriceScale.visible || null === this.td || (this.ed.removeChild(this.td.jv()), this.td.en(), this.td = null);
        var n300 = {
            Ff: this.M_.vt().Ff()
        }, s204 = function() {
            return i489.leftPriceScale.borderVisible && t.j().ct().borderVisible;
        }, h140 = function() {
            return t.Pf();
        };
        i489.leftPriceScale.visible && null === this.Q_ && (this.Q_ = new Vn("left", i489, n300, s204, h140), this.rd.appendChild(this.Q_.jv())), i489.rightPriceScale.visible && null === this.td && (this.td = new Vn("right", i489, n300, s204, h140), this.ed.appendChild(this.td.jv()));
    }, t119;
}(), zn = function() {
    function t120(t, i490) {
        var n301;
        this.gd = [], this.yd = 0, this.En = 0, this.$h = 0, this.kd = 0, this.Cd = 0, this.Nd = null, this.xd = !1, this.o_ = new it, this.Jl = new it, this.ki = i490, this.hd = document.createElement("div"), this.hd.classList.add("tv-lightweight-charts"), this.hd.style.overflow = "hidden", this.hd.style.width = "100%", this.hd.style.height = "100%", (n301 = this.hd).style.userSelect = "none", n301.style.webkitUserSelect = "none", n301.style.msUserSelect = "none", n301.style.MozUserSelect = "none", n301.style.webkitTapHighlightColor = "transparent", this.Sd = document.createElement("table"), this.Sd.setAttribute("cellspacing", "0"), this.hd.appendChild(this.Sd), this.Dd = this.Ad.bind(this), this.hd.addEventListener("wheel", this.Dd, {
            passive: !1
        }), this.hi = new ln(this.Ql.bind(this), this.ki), this.vt().mf().Ji(this.Td.bind(this), this), this.Bd = new Wn(this), this.Sd.appendChild(this.Bd.jv());
        var s205 = this.ki.width, h141 = this.ki.height;
        if (0 === s205 || 0 === h141) {
            var r99 = t.getBoundingClientRect();
            0 === s205 && (s205 = Math.floor(r99.width), s205 -= s205 % 2), 0 === h141 && (h141 = Math.floor(r99.height), h141 -= h141 % 2);
        }
        this.Ld(s205, h141), this.Fd(), t.appendChild(this.hd), this.Ed(), this.hi.j().Jr().Ji(this.hi.uf.bind(this.hi), this), this.hi.dl().Ji(this.hi.uf.bind(this.hi), this);
    }
    return t120.prototype.vt = function() {
        return this.hi;
    }, t120.prototype.ct = function() {
        return this.ki;
    }, t120.prototype.Vd = function() {
        return this.gd;
    }, t120.prototype.Od = function() {
        return this.Bd;
    }, t120.prototype.en = function() {
        this.hd.removeEventListener("wheel", this.Dd), 0 !== this.yd && window.cancelAnimationFrame(this.yd), this.hi.mf().sn(this), this.hi.j().Jr().sn(this), this.hi.dl().sn(this), this.hi.en();
        for(var t = 0, i491 = this.gd; t < i491.length; t++){
            var n302 = i491[t];
            this.Sd.removeChild(n302.jv()), n302.V_().sn(this), n302.en();
        }
        this.gd = [], f(this.Bd).en(), null !== this.hd.parentElement && this.hd.parentElement.removeChild(this.hd), this.Jl.en(), this.o_.en();
    }, t120.prototype.Ld = function(t, i492, n303) {
        if (void 0 === n303 && (n303 = !1), this.En !== i492 || this.$h !== t) {
            this.En = i492, this.$h = t;
            var s206 = i492 + "px", h142 = t + "px";
            f(this.hd).style.height = s206, f(this.hd).style.width = h142, this.Sd.style.height = s206, this.Sd.style.width = h142, n303 ? this.Wd(new Kt(3)) : this.hi.uf();
        }
    }, t120.prototype.Jv = function(t) {
        void 0 === t && (t = new Kt(3));
        for(var i493 = 0; i493 < this.gd.length; i493++)this.gd[i493].Jv(t.ge(i493).me);
        this.ki.timeScale.visible && this.Bd.Jv(t.pe());
    }, t120.prototype.rs = function(t) {
        this.hi.rs(t), this.Ed();
        var i494 = t.width || this.$h, n304 = t.height || this.En;
        this.Ld(i494, n304);
    }, t120.prototype.V_ = function() {
        return this.o_;
    }, t120.prototype.mf = function() {
        return this.Jl;
    }, t120.prototype.zd = function() {
        var t = this;
        null !== this.Nd && (this.Wd(this.Nd), this.Nd = null);
        var i495 = this.gd[0], n305 = _n(document, new fn(this.$h, this.En)), s207 = vn(n305), h143 = cn(n305);
        return P(s207, h143, function() {
            var n306 = 0, h144 = 0, r100 = function(i496) {
                for(var r101 = 0; r101 < t.gd.length; r101++){
                    var e81 = t.gd[r101], u66 = e81.z_().ht, a55 = f("left" === i496 ? e81.U_() : e81.H_()), o46 = a55.s_();
                    s207.drawImage(o46, n306, h144, a55.Xv(), u66), h144 += u66;
                }
            };
            t.Pd() && (r100("left"), n306 = f(i495.U_()).Xv()), h144 = 0;
            for(var e80 = 0; e80 < t.gd.length; e80++){
                var u65 = t.gd[e80], a54 = u65.z_(), o45 = u65.s_();
                s207.drawImage(o45, n306, h144, a54.st, a54.ht), h144 += a54.ht;
            }
            n306 += i495.z_().st, t.Rd() && (h144 = 0, r100("right"));
            var l35 = function(i497) {
                var r102 = f("left" === i497 ? t.Bd.od() : t.Bd.ld()), e82 = r102.z_(), u67 = r102.s_();
                s207.drawImage(u67, n306, h144, e82.st, e82.ht);
            };
            if (t.ki.timeScale.visible) {
                n306 = 0, t.Pd() && (l35("left"), n306 = f(i495.U_()).Xv());
                var c28 = t.Bd.z_();
                o45 = t.Bd.s_();
                s207.drawImage(o45, n306, h144, c28.st, c28.ht), t.Rd() && (n306 += i495.z_().st, l35("right"), s207.restore());
            }
        }), n305;
    }, t120.prototype.Id = function(t) {
        return "none" === t ? 0 : ("left" !== t || this.Pd()) && ("right" !== t || this.Rd()) ? 0 === this.gd.length ? 0 : f("left" === t ? this.gd[0].U_() : this.gd[0].H_()).Xv() : 0;
    }, t120.prototype.jd = function() {
        for(var t = 0, i498 = 0, n307 = 0, s208 = 0, h145 = this.gd; s208 < h145.length; s208++){
            var r103 = h145[s208];
            this.Pd() && (i498 = Math.max(i498, f(r103.U_()).Yv())), this.Rd() && (n307 = Math.max(n307, f(r103.H_()).Yv())), t += r103.wl();
        }
        var e83 = this.$h, u68 = this.En, a56 = Math.max(e83 - i498 - n307, 0), o47 = this.ki.timeScale.visible, l36 = o47 ? this.Bd._d() : 0;
        l36 % 2 && (l36 += 1);
        for(var c29 = 0 + l36, v21 = u68 < c29 ? 0 : u68 - c29, _18 = v21 / t, d15 = 0, w11 = 0; w11 < this.gd.length; ++w11){
            (r103 = this.gd[w11]).C_(this.hi.wf()[w11]);
            var M8, b7 = 0;
            b7 = w11 === this.gd.length - 1 ? v21 - d15 : Math.round(r103.wl() * _18), d15 += M8 = Math.max(b7, 2), r103.$v(new fn(a56, M8)), this.Pd() && r103.W_(i498, "left"), this.Rd() && r103.W_(n307, "right"), r103.Zv() && this.hi.pf(r103.Zv(), M8);
        }
        this.Bd.vd(new fn(o47 ? a56 : 0, l36), o47 ? i498 : 0, o47 ? n307 : 0), this.hi.Dr(a56), this.kd !== i498 && (this.kd = i498), this.Cd !== n307 && (this.Cd = n307);
    }, t120.prototype.Ad = function(t) {
        var i499 = t.deltaX / 100, n308 = -t.deltaY / 100;
        if (0 !== i499 && this.ki.handleScroll.mouseWheel || 0 !== n308 && this.ki.handleScale.mouseWheel) {
            switch(t.cancelable && t.preventDefault(), t.deltaMode){
                case t.DOM_DELTA_PAGE:
                    i499 *= 120, n308 *= 120;
                    break;
                case t.DOM_DELTA_LINE:
                    i499 *= 32, n308 *= 32;
            }
            if (0 !== n308 && this.ki.handleScale.mouseWheel) {
                var s209 = Math.sign(n308) * Math.min(1, Math.abs(n308)), h146 = t.clientX - this.hd.getBoundingClientRect().left;
                this.vt().kf(h146, s209);
            }
            0 !== i499 && this.ki.handleScroll.mouseWheel && this.vt().Cf(-80 * i499);
        }
    }, t120.prototype.Wd = function(t) {
        var i500 = t.pe();
        if (3 === i500 && this.qd(), 3 === i500 || 2 === i500) {
            for(var n309 = this.hi.wf(), s210 = 0; s210 < n309.length; s210++)t.ge(s210)._s && n309[s210].Fl();
            for(var h147 = t.xe(), r104 = 0, e84 = h147; r104 < e84.length; r104++){
                var u69 = e84[r104];
                this.Se(u69);
            }
            h147.length > 0 && (this.hi.Vr(), this.hi.Eo(), this.hi.Or()), this.Bd.O();
        }
        this.Jv(t);
    }, t120.prototype.Se = function(t) {
        var i501 = this.hi.j();
        switch(t.ke){
            case 0:
                i501.Qr();
                break;
            case 1:
                i501.te(t.X);
                break;
            case 2:
                i501.wr(t.X);
                break;
            case 3:
                i501.Mr(t.X);
                break;
            case 4:
                i501.jr();
        }
    }, t120.prototype.Ql = function(t) {
        var i502 = this;
        null !== this.Nd ? this.Nd._n(t) : this.Nd = t, this.xd || (this.xd = !0, this.yd = window.requestAnimationFrame(function() {
            i502.xd = !1, i502.yd = 0, null !== i502.Nd && (i502.Wd(i502.Nd), i502.Nd = null);
        }));
    }, t120.prototype.qd = function() {
        this.Fd();
    }, t120.prototype.Fd = function() {
        for(var t = this.hi.wf(), i503 = t.length, n310 = this.gd.length, s211 = i503; s211 < n310; s211++){
            var h148 = l(this.gd.pop());
            this.Sd.removeChild(h148.jv()), h148.V_().sn(this), h148.en();
        }
        for(s211 = n310; s211 < i503; s211++)(h148 = new En(this, t[s211])).V_().Ji(this.Ud.bind(this), this), this.gd.push(h148), this.Sd.insertBefore(h148.jv(), this.Bd.jv());
        for(s211 = 0; s211 < i503; s211++){
            var r105 = t[s211];
            (h148 = this.gd[s211]).Zv() !== r105 ? h148.C_(r105) : h148.k_();
        }
        this.Ed(), this.jd();
    }, t120.prototype.Hd = function(t, i504) {
        var n311, s212 = new Map;
        null !== t && this.hi.W().forEach(function(i505) {
            var n312 = i505.Fa(t);
            null !== n312 && s212.set(i505, n312);
        });
        if (null !== t) {
            var h149 = this.hi.j().ri(t);
            null !== h149 && (n311 = h149);
        }
        var r106 = this.vt().ff(), e85 = null !== r106 && r106.vf instanceof tn ? r106.vf : void 0, u70 = null !== r106 && void 0 !== r106.T_ ? r106.T_.ka : void 0;
        return {
            S: n311,
            Yd: i504 || void 0,
            Kd: e85,
            $d: s212,
            Xd: u70
        };
    }, t120.prototype.Ud = function(t, i506) {
        var n313 = this;
        this.o_.hn(function() {
            return n313.Hd(t, i506);
        });
    }, t120.prototype.Td = function(t, i507) {
        var n314 = this;
        this.Jl.hn(function() {
            return n314.Hd(t, i507);
        });
    }, t120.prototype.Ed = function() {
        var t = this.ki.timeScale.visible ? "" : "none";
        this.Bd.jv().style.display = t;
    }, t120.prototype.Pd = function() {
        return this.gd[0].Zv().kl().ct().visible;
    }, t120.prototype.Rd = function() {
        return this.gd[0].Zv().Cl().ct().visible;
    }, t120;
}();
function Pn(t, i508, n315) {
    var s213 = n315.value, h150 = {
        Ph: i508,
        S: t,
        X: [
            s213,
            s213,
            s213,
            s213
        ]
    };
    return "color" in n315 && void 0 !== n315.color && (h150.et = n315.color), h150;
}
function Rn(t, i509, n316) {
    return {
        Ph: i509,
        S: t,
        X: [
            n316.open,
            n316.high,
            n316.low,
            n316.close
        ]
    };
}
function In(t) {
    return void 0 !== t.X;
}
function jn(t) {
    return function(i510, n317, s214) {
        var h151;
        return void 0 === (h151 = s214).open && void 0 === h151.value ? {
            S: i510,
            Ph: n317
        } : t(i510, n317, s214);
    };
}
var qn = {
    Candlestick: jn(Rn),
    Bar: jn(Rn),
    Area: jn(Pn),
    Baseline: jn(Pn),
    Histogram: jn(Pn),
    Line: jn(Pn)
};
function Un(t) {
    return qn[t];
}
function Hn(t) {
    return 60 * t * 60000;
}
function Yn(t) {
    return 60 * t * 1000;
}
var Kn, $n = [
    {
        Zd: (Kn = 1, 1000 * Kn),
        Rh: 10
    },
    {
        Zd: Yn(1),
        Rh: 20
    },
    {
        Zd: Yn(5),
        Rh: 21
    },
    {
        Zd: Yn(30),
        Rh: 22
    },
    {
        Zd: Hn(1),
        Rh: 30
    },
    {
        Zd: Hn(3),
        Rh: 31
    },
    {
        Zd: Hn(6),
        Rh: 32
    },
    {
        Zd: Hn(12),
        Rh: 33
    }
];
function Xn(t, i511) {
    if (t.getUTCFullYear() !== i511.getUTCFullYear()) return 70;
    if (t.getUTCMonth() !== i511.getUTCMonth()) return 60;
    if (t.getUTCDate() !== i511.getUTCDate()) return 50;
    for(var n318 = $n.length - 1; n318 >= 0; --n318)if (Math.floor(i511.getTime() / $n[n318].Zd) !== Math.floor(t.getTime() / $n[n318].Zd)) return $n[n318].Rh;
    return 0;
}
function Zn(t, i512) {
    if (void 0 === i512 && (i512 = 0), 0 !== t.length) {
        for(var n319 = 0 === i512 ? null : t[i512 - 1].S.Dh, s215 = null !== n319 ? new Date(1000 * n319) : null, h152 = 0, r107 = i512; r107 < t.length; ++r107){
            var e86 = t[r107], u71 = new Date(1000 * e86.S.Dh);
            null !== s215 && (e86.zh = Xn(u71, s215)), h152 += e86.S.Dh - (n319 || e86.S.Dh), n319 = e86.S.Dh, s215 = u71;
        }
        if (0 === i512 && t.length > 1) {
            var a57 = Math.ceil(h152 / (t.length - 1)), o48 = new Date(1000 * (t[0].S.Dh - a57));
            t[0].zh = Xn(new Date(1000 * t[0].S.Dh), o48);
        }
    }
}
function Jn(t) {
    if (!It(t)) throw new Error("time must be of type BusinessDay");
    var i513 = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
    return {
        Dh: Math.round(i513.getTime() / 1000),
        Sh: t
    };
}
function Gn(t) {
    if (!jt(t)) throw new Error("time must be of type isUTCTimestamp");
    return {
        Dh: t
    };
}
function Qn(t) {
    return 0 === t.length ? null : It(t[0].time) ? Jn : Gn;
}
function ts(t) {
    return jt(t) ? Gn(t) : It(t) ? Jn(t) : Jn(is(t));
}
function is(t) {
    var i514 = new Date(t);
    if (isNaN(i514.getTime())) throw new Error("Invalid date string=" + t + ", expected format=yyyy-mm-dd");
    return {
        day: i514.getUTCDate(),
        month: i514.getUTCMonth() + 1,
        year: i514.getUTCFullYear()
    };
}
function ns(t) {
    w(t.time) && (t.time = is(t.time));
}
function ss(t) {
    return {
        Ph: 0,
        Jd: new Map,
        Rs: t
    };
}
var hs = function() {
    function t121() {
        this.Gd = new Map, this.Qd = new Map, this.tw = new Map, this.iw = [];
    }
    return t121.prototype.en = function() {
        this.Gd.clear(), this.Qd.clear(), this.tw.clear(), this.iw = [];
    }, t121.prototype.nw = function(t122, i515) {
        var n320 = this, s216 = 0 !== this.Gd.size, h153 = !1;
        if (this.Qd.has(t122)) {
            if (1 === this.Qd.size) s216 = !1, h153 = !0, this.Gd.clear();
            else for(var r108 = 0, e87 = this.iw; r108 < e87.length; r108++)e87[r108].pointData.Jd.delete(t122) && (h153 = !0);
        }
        var u72 = [];
        if (0 !== i515.length) {
            !function(t) {
                t.forEach(ns);
            }(i515);
            var a58 = f(Qn(i515)), o49 = Un(t122.Ya());
            u72 = i515.map(function(i516) {
                var s217 = a58(i516.time), r109 = n320.Gd.get(s217.Dh);
                void 0 === r109 && (r109 = ss(s217), n320.Gd.set(s217.Dh, r109), h153 = !0);
                var e88 = o49(s217, r109.Ph, i516);
                return r109.Jd.set(t122, e88), e88;
            });
        }
        s216 && this.sw(), this.hw(t122, u72);
        var l37 = -1;
        if (h153) {
            var c30 = [];
            this.Gd.forEach(function(t) {
                c30.push({
                    zh: 0,
                    S: t.Rs,
                    pointData: t
                });
            }), c30.sort(function(t, i517) {
                return t.S.Dh - i517.S.Dh;
            }), l37 = this.rw(c30);
        }
        return this.ew(t122, l37);
    }, t121.prototype.Of = function(t) {
        return this.nw(t, []);
    }, t121.prototype.uw = function(t123, i518) {
        ns(i518);
        var n321 = f(Qn([
            i518
        ]))(i518.time), s218 = this.tw.get(t123);
        if (void 0 !== s218 && n321.Dh < s218.Dh) throw new Error("Cannot update oldest data, last time=" + s218.Dh + ", new time=" + n321.Dh);
        var h154 = this.Gd.get(n321.Dh), r110 = void 0 === h154;
        void 0 === h154 && (h154 = ss(n321), this.Gd.set(n321.Dh, h154));
        var e89 = Un(t123.Ya())(n321, h154.Ph, i518);
        if (h154.Jd.set(t123, e89), this.aw(t123, e89), !r110) return this.ew(t123, -1);
        var u73 = {
            zh: 0,
            S: h154.Rs,
            pointData: h154
        }, a59 = Bt(this.iw, u73.S.Dh, function(t, i519) {
            return t.S.Dh < i519;
        });
        this.iw.splice(a59, 0, u73);
        for(var o50 = a59; o50 < this.iw.length; ++o50)rs(this.iw[o50].pointData, o50);
        return Zn(this.iw, a59), this.ew(t123, a59);
    }, t121.prototype.aw = function(t, i520) {
        var n322 = this.Qd.get(t);
        void 0 === n322 && (n322 = [], this.Qd.set(t, n322));
        var s219 = 0 !== n322.length ? n322[n322.length - 1] : null;
        null === s219 || i520.S.Dh > s219.S.Dh ? In(i520) && n322.push(i520) : In(i520) ? n322[n322.length - 1] = i520 : n322.splice(-1, 1), this.tw.set(t, i520.S);
    }, t121.prototype.hw = function(t, i521) {
        0 !== i521.length ? (this.Qd.set(t, i521.filter(In)), this.tw.set(t, i521[i521.length - 1].S)) : (this.Qd.delete(t), this.tw.delete(t));
    }, t121.prototype.sw = function() {
        for(var t = 0, i522 = this.iw; t < i522.length; t++){
            var n323 = i522[t];
            0 === n323.pointData.Jd.size && this.Gd.delete(n323.S.Dh);
        }
    }, t121.prototype.rw = function(t) {
        for(var i523 = -1, n324 = 0; n324 < this.iw.length && n324 < t.length; ++n324){
            var s220 = this.iw[n324], h155 = t[n324];
            if (s220.S.Dh !== h155.S.Dh) {
                i523 = n324;
                break;
            }
            h155.zh = s220.zh, rs(h155.pointData, n324);
        }
        if (-1 === i523 && this.iw.length !== t.length && (i523 = Math.min(this.iw.length, t.length)), -1 === i523) return -1;
        for(n324 = i523; n324 < t.length; ++n324)rs(t[n324].pointData, n324);
        return Zn(t, i523), this.iw = t, i523;
    }, t121.prototype.ow = function() {
        if (0 === this.Qd.size) return null;
        var t = 0;
        return this.Qd.forEach(function(i524) {
            0 !== i524.length && (t = Math.max(t, i524[i524.length - 1].Ph));
        }), t;
    }, t121.prototype.ew = function(t124, i525) {
        var n325 = {
            lw: new Map,
            j: {
                Br: this.ow()
            }
        };
        if (-1 !== i525) this.Qd.forEach(function(t, i526) {
            n325.lw.set(i526, {
                Zu: t
            });
        }), this.Qd.has(t124) || n325.lw.set(t124, {
            Zu: []
        }), n325.j.fw = this.iw, n325.j.cw = i525;
        else {
            var s221 = this.Qd.get(t124);
            n325.lw.set(t124, {
                Zu: s221 || []
            });
        }
        return n325;
    }, t121;
}();
function rs(t125, i527) {
    t125.Ph = i527, t125.Jd.forEach(function(t) {
        t.Ph = i527;
    });
}
var es = {
    color: "#FF0000",
    price: 0,
    lineStyle: 2,
    lineWidth: 1,
    axisLabelVisible: !0,
    title: ""
}, us = function() {
    function t126(t) {
        this.Ia = t;
    }
    return t126.prototype.applyOptions = function(t) {
        this.Ia.rs(t);
    }, t126.prototype.options = function() {
        return this.Ia.ct();
    }, t126.prototype._w = function() {
        return this.Ia;
    }, t126;
}();
function as(t127) {
    var i528 = t127.overlay, n326 = function(t, i529) {
        var n327 = {
        };
        for(var s222 in t)Object.prototype.hasOwnProperty.call(t, s222) && i529.indexOf(s222) < 0 && (n327[s222] = t[s222]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var h156 = 0;
            for(s222 = Object.getOwnPropertySymbols(t); h156 < s222.length; h156++)i529.indexOf(s222[h156]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s222[h156]) && (n327[s222[h156]] = t[s222[h156]]);
        }
        return n327;
    }(t127, [
        "overlay"
    ]);
    return i528 && (n326.priceScaleId = ""), n326;
}
var os = function() {
    function t128(t, i530, n328) {
        this.qe = t, this.dw = i530, this.ww = n328;
    }
    return t128.prototype.priceFormatter = function() {
        return this.qe.$s();
    }, t128.prototype.priceToCoordinate = function(t) {
        var i531 = this.qe.H();
        return null === i531 ? null : this.qe.$().K(t, i531.X);
    }, t128.prototype.coordinateToPrice = function(t) {
        var i532 = this.qe.H();
        return null === i532 ? null : this.qe.$().Si(t, i532.X);
    }, t128.prototype.barsInLogicalRange = function(t) {
        if (null === t) return null;
        var i533 = new zt(new Et(t.from, t.to)).Hh(), n329 = this.qe.Hi();
        if (n329.ti()) return null;
        var s223 = n329.oo(i533.hh(), 1), h157 = n329.oo(i533.rh(), -1), r111 = f(n329.eo()), e90 = f(n329.Ui());
        if (null !== s223 && null !== h157 && s223.Ph > h157.Ph) return {
            barsBefore: t.from - r111,
            barsAfter: e90 - t.to
        };
        var u74 = {
            barsBefore: null === s223 || s223.Ph === r111 ? t.from - r111 : s223.Ph - r111,
            barsAfter: null === h157 || h157.Ph === e90 ? e90 - t.to : e90 - h157.Ph
        };
        return null !== s223 && null !== h157 && (u74.from = s223.S.Sh || s223.S.Dh, u74.to = h157.S.Sh || h157.S.Dh), u74;
    }, t128.prototype.setData = function(t) {
        this.qe.Ya(), this.dw.Mw(this.qe, t);
    }, t128.prototype.update = function(t) {
        this.qe.Ya(), this.dw.bw(this.qe, t);
    }, t128.prototype.setMarkers = function(t129) {
        var i534 = t129.map(function(t) {
            return u(u({
            }, t), {
                time: ts(t.time)
            });
        });
        this.qe.Wo(i534);
    }, t128.prototype.applyOptions = function(t) {
        var i535 = as(t);
        this.qe.rs(i535);
    }, t128.prototype.options = function() {
        return b(this.qe.ct());
    }, t128.prototype.priceScale = function() {
        return this.ww.priceScale(this.qe.$().hs());
    }, t128.prototype.createPriceLine = function(t) {
        var i536 = v(b(es), t), n330 = this.qe.zo(i536);
        return new us(n330);
    }, t128.prototype.removePriceLine = function(t) {
        this.qe.Po(t._w());
    }, t128.prototype.seriesType = function() {
        return this.qe.Ya();
    }, t128;
}(), ls = function(t) {
    function i537() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return e(i537, t), i537.prototype.applyOptions = function(i538) {
        Ct(i538), t.prototype.applyOptions.call(this, i538);
    }, i537;
}(os), fs = {
    autoScale: !0,
    mode: 0,
    invertScale: !1,
    alignLabels: !0,
    borderVisible: !0,
    borderColor: "#2B2B43",
    entireTextOnly: !1,
    visible: !1,
    drawTicks: !0,
    scaleMargins: {
        bottom: 0.1,
        top: 0.2
    }
}, cs = {
    color: "rgba(0, 0, 0, 0)",
    visible: !1,
    fontSize: 48,
    fontFamily: qt,
    fontStyle: "",
    text: "",
    horzAlign: "center",
    vertAlign: "center"
}, vs = {
    width: 0,
    height: 0,
    layout: {
        background: {
            type: "solid",
            color: "#FFFFFF"
        },
        textColor: "#191919",
        fontSize: 11,
        fontFamily: qt
    },
    crosshair: {
        vertLine: {
            color: "#758696",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#4c525e"
        },
        horzLine: {
            color: "#758696",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#4c525e"
        },
        mode: 1
    },
    grid: {
        vertLines: {
            color: "#D6DCDE",
            style: 0,
            visible: !0
        },
        horzLines: {
            color: "#D6DCDE",
            style: 0,
            visible: !0
        }
    },
    overlayPriceScales: u({
    }, fs),
    leftPriceScale: u(u({
    }, fs), {
        visible: !1
    }),
    rightPriceScale: u(u({
    }, fs), {
        visible: !0
    }),
    timeScale: {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: 0.5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0
    },
    watermark: cs,
    localization: {
        locale: mn ? navigator.language : "",
        dateFormat: "dd MMM 'yy"
    },
    handleScroll: {
        mouseWheel: !0,
        pressedMouseMove: !0,
        horzTouchDrag: !0,
        vertTouchDrag: !0
    },
    handleScale: {
        axisPressedMouseMove: {
            time: !0,
            price: !0
        },
        axisDoubleClickReset: !0,
        mouseWheel: !0,
        pinch: !0
    },
    kineticScroll: {
        mouse: !1,
        touch: !0
    }
}, _s = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickVisible: !0,
    borderVisible: !0,
    borderColor: "#378658",
    borderUpColor: "#26a69a",
    borderDownColor: "#ef5350",
    wickColor: "#737375",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350"
}, ds = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    openVisible: !0,
    thinBars: !0
}, ws = {
    color: "#2196f3",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
}, Ms = {
    topColor: "rgba( 46, 220, 135, 0.4)",
    bottomColor: "rgba( 40, 221, 100, 0)",
    lineColor: "#33D778",
    lineStyle: 0,
    lineWidth: 3,
    lineType: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
}, bs = {
    baseValue: {
        type: "price",
        price: 0
    },
    topFillColor1: "rgba(38, 166, 154, 0.28)",
    topFillColor2: "rgba(38, 166, 154, 0.05)",
    topLineColor: "rgba(38, 166, 154, 1)",
    bottomFillColor1: "rgba(239, 83, 80, 0.05)",
    bottomFillColor2: "rgba(239, 83, 80, 0.28)",
    bottomLineColor: "rgba(239, 83, 80, 1)",
    lineWidth: 3,
    lineStyle: 0,
    crosshairMarkerVisible: !0,
    crosshairMarkerRadius: 4,
    crosshairMarkerBorderColor: "",
    crosshairMarkerBackgroundColor: "",
    lastPriceAnimation: 0
}, ms = {
    color: "#26a69a",
    base: 0
}, ps = {
    title: "",
    visible: !0,
    lastValueVisible: !0,
    priceLineVisible: !0,
    priceLineSource: 0,
    priceLineWidth: 1,
    priceLineColor: "",
    priceLineStyle: 2,
    baseLineVisible: !0,
    baseLineWidth: 1,
    baseLineColor: "#B2B5BE",
    baseLineStyle: 0,
    priceFormat: {
        type: "price",
        precision: 2,
        minMove: 0.01
    }
}, gs = function() {
    function t130(t, i539) {
        this.mw = t, this.pw = i539;
    }
    return t130.prototype.applyOptions = function(t) {
        this.mw.vt()._f(this.pw, t);
    }, t130.prototype.options = function() {
        return this.Gt().ct();
    }, t130.prototype.width = function() {
        return Yt(this.pw) ? this.mw.Id("left" === this.pw ? "left" : "right") : 0;
    }, t130.prototype.Gt = function() {
        return f(this.mw.vt().df(this.pw)).$;
    }, t130;
}(), ys = function() {
    function t131(t, i540) {
        this.gw = new it, this.nr = new it, this.sd = new it, this.hi = t, this.ul = t.j(), this.Bd = i540, this.ul.Xr().Ji(this.yw.bind(this)), this.ul.Zr().Ji(this.kw.bind(this)), this.Bd.fd().Ji(this.Cw.bind(this));
    }
    return t131.prototype.en = function() {
        this.ul.Xr().sn(this), this.ul.Zr().sn(this), this.Bd.fd().sn(this), this.gw.en(), this.nr.en(), this.sd.en();
    }, t131.prototype.scrollPosition = function() {
        return this.ul.Pr();
    }, t131.prototype.scrollToPosition = function(t, i541) {
        i541 ? this.ul.$r(t, 1000) : this.hi.Mr(t);
    }, t131.prototype.scrollToRealTime = function() {
        this.ul.Kr();
    }, t131.prototype.getVisibleRange = function() {
        var t, i542, n331 = this.ul.yr();
        return null === n331 ? null : {
            from: null !== (t = n331.from.Sh) && void 0 !== t ? t : n331.from.Dh,
            to: null !== (i542 = n331.to.Sh) && void 0 !== i542 ? i542 : n331.to.Dh
        };
    }, t131.prototype.setVisibleRange = function(t) {
        var i543 = {
            from: ts(t.from),
            to: ts(t.to)
        }, n332 = this.ul.Sr(i543);
        this.hi.Wf(n332);
    }, t131.prototype.getVisibleLogicalRange = function() {
        var t = this.ul.gr();
        return null === t ? null : {
            from: t.hh(),
            to: t.rh()
        };
    }, t131.prototype.setVisibleLogicalRange = function(t) {
        o(t.from <= t.to, "The from index cannot be after the to index."), this.hi.Wf(t);
    }, t131.prototype.resetTimeScale = function() {
        this.hi.Ne();
    }, t131.prototype.fitContent = function() {
        this.hi.Qr();
    }, t131.prototype.logicalToCoordinate = function(t) {
        var i544 = this.hi.j();
        return i544.ti() ? null : i544.G(t);
    }, t131.prototype.coordinateToLogical = function(t) {
        return this.ul.ti() ? null : this.ul.Fr(t);
    }, t131.prototype.timeToCoordinate = function(t) {
        var i545 = ts(t), n333 = this.ul.br(i545, !1);
        return null === n333 ? null : this.ul.G(n333);
    }, t131.prototype.coordinateToTime = function(t) {
        var i546, n334 = this.hi.j(), s224 = n334.Fr(t), h158 = n334.ri(s224);
        return null === h158 ? null : null !== (i546 = h158.Sh) && void 0 !== i546 ? i546 : h158.Dh;
    }, t131.prototype.width = function() {
        return this.Bd.z_().st;
    }, t131.prototype.height = function() {
        return this.Bd.z_().ht;
    }, t131.prototype.subscribeVisibleTimeRangeChange = function(t) {
        this.gw.Ji(t);
    }, t131.prototype.unsubscribeVisibleTimeRangeChange = function(t) {
        this.gw.nn(t);
    }, t131.prototype.subscribeVisibleLogicalRangeChange = function(t) {
        this.nr.Ji(t);
    }, t131.prototype.unsubscribeVisibleLogicalRangeChange = function(t) {
        this.nr.nn(t);
    }, t131.prototype.subscribeSizeChange = function(t) {
        this.sd.Ji(t);
    }, t131.prototype.unsubscribeSizeChange = function(t) {
        this.sd.nn(t);
    }, t131.prototype.applyOptions = function(t) {
        this.ul.rs(t);
    }, t131.prototype.options = function() {
        return b(this.ul.ct());
    }, t131.prototype.yw = function() {
        this.gw.rn() && this.gw.hn(this.getVisibleRange());
    }, t131.prototype.kw = function() {
        this.nr.rn() && this.nr.hn(this.getVisibleLogicalRange());
    }, t131.prototype.Cw = function(t) {
        this.sd.hn(t.st, t.ht);
    }, t131;
}();
function ks(t132) {
    if (void 0 !== t132 && "custom" !== t132.type) {
        var i547 = t132;
        void 0 !== i547.minMove && void 0 === i547.precision && (i547.precision = (function(t) {
            if (t >= 1) return 0;
            for(var i548 = 0; i548 < 8; i548++){
                var n335 = Math.round(t);
                if (Math.abs(n335 - t) < 0.00000001) return i548;
                t *= 10;
            }
            return i548;
        })(i547.minMove));
    }
}
function Cs(t133) {
    return (function(t) {
        if (M(t.handleScale)) {
            var i549 = t.handleScale;
            t.handleScale = {
                axisDoubleClickReset: i549,
                axisPressedMouseMove: {
                    time: i549,
                    price: i549
                },
                mouseWheel: i549,
                pinch: i549
            };
        } else if (void 0 !== t.handleScale && M(t.handleScale.axisPressedMouseMove)) {
            var n336 = t.handleScale.axisPressedMouseMove;
            t.handleScale.axisPressedMouseMove = {
                time: n336,
                price: n336
            };
        }
        var s225 = t.handleScroll;
        M(s225) && (t.handleScroll = {
            horzTouchDrag: s225,
            vertTouchDrag: s225,
            mouseWheel: s225,
            pressedMouseMove: s225
        });
    })(t133), (function(t) {
        if (t.priceScale) {
            t.leftPriceScale = t.leftPriceScale || {
            }, t.rightPriceScale = t.rightPriceScale || {
            };
            var i550 = t.priceScale.position;
            delete t.priceScale.position, t.leftPriceScale = v(t.leftPriceScale, t.priceScale), t.rightPriceScale = v(t.rightPriceScale, t.priceScale), "left" === i550 && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === i550 && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === i550 && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1), t.overlayPriceScales = t.overlayPriceScales || {
            }, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
        }
    })(t133), (function(t) {
        t.layout && t.layout.backgroundColor && !t.layout.background && (t.layout.background = {
            type: "solid",
            color: t.layout.backgroundColor
        });
    })(t133), t133;
}
var Ns = function() {
    function t134(t135, i551) {
        var n337 = this;
        this.Nw = new hs, this.xw = new Map, this.Sw = new Map, this.Dw = new it, this.Aw = new it;
        var s226 = void 0 === i551 ? b(vs) : v(b(vs), Cs(i551));
        this.mw = new zn(t135, s226), this.mw.V_().Ji(function(t) {
            n337.Dw.rn() && n337.Dw.hn(n337.Tw(t()));
        }, this), this.mw.mf().Ji(function(t) {
            n337.Aw.rn() && n337.Aw.hn(n337.Tw(t()));
        }, this);
        var h159 = this.mw.vt();
        this.Bw = new ys(h159, this.mw.Od());
    }
    return t134.prototype.remove = function() {
        this.mw.V_().sn(this), this.mw.mf().sn(this), this.Bw.en(), this.mw.en(), this.xw.clear(), this.Sw.clear(), this.Dw.en(), this.Aw.en(), this.Nw.en();
    }, t134.prototype.resize = function(t, i552, n338) {
        this.mw.Ld(t, i552, n338);
    }, t134.prototype.addAreaSeries = function(t) {
        void 0 === t && (t = {
        }), ks((t = as(t)).priceFormat);
        var i553 = v(b(ps), Ms, t), n339 = this.mw.vt().Ef("Area", i553), s227 = new os(n339, this, this);
        return this.xw.set(s227, n339), this.Sw.set(n339, s227), s227;
    }, t134.prototype.addBaselineSeries = function(t) {
        void 0 === t && (t = {
        }), ks((t = as(t)).priceFormat);
        var i554 = v(b(ps), bs, t), n340 = this.mw.vt().Ef("Baseline", i554), s228 = new os(n340, this, this);
        return this.xw.set(s228, n340), this.Sw.set(n340, s228), s228;
    }, t134.prototype.addBarSeries = function(t) {
        void 0 === t && (t = {
        }), ks((t = as(t)).priceFormat);
        var i555 = v(b(ps), ds, t), n341 = this.mw.vt().Ef("Bar", i555), s229 = new os(n341, this, this);
        return this.xw.set(s229, n341), this.Sw.set(n341, s229), s229;
    }, t134.prototype.addCandlestickSeries = function(t) {
        void 0 === t && (t = {
        }), Ct(t = as(t)), ks(t.priceFormat);
        var i556 = v(b(ps), _s, t), n342 = this.mw.vt().Ef("Candlestick", i556), s230 = new ls(n342, this, this);
        return this.xw.set(s230, n342), this.Sw.set(n342, s230), s230;
    }, t134.prototype.addHistogramSeries = function(t) {
        void 0 === t && (t = {
        }), ks((t = as(t)).priceFormat);
        var i557 = v(b(ps), ms, t), n343 = this.mw.vt().Ef("Histogram", i557), s231 = new os(n343, this, this);
        return this.xw.set(s231, n343), this.Sw.set(n343, s231), s231;
    }, t134.prototype.addLineSeries = function(t) {
        void 0 === t && (t = {
        }), ks((t = as(t)).priceFormat);
        var i558 = v(b(ps), ws, t), n344 = this.mw.vt().Ef("Line", i558), s232 = new os(n344, this, this);
        return this.xw.set(s232, n344), this.Sw.set(n344, s232), s232;
    }, t134.prototype.removeSeries = function(t) {
        var i559 = l(this.xw.get(t)), n345 = this.Nw.Of(i559);
        this.mw.vt().Of(i559), this.Lw(n345), this.xw.delete(t), this.Sw.delete(i559);
    }, t134.prototype.Mw = function(t, i560) {
        this.Lw(this.Nw.nw(t, i560));
    }, t134.prototype.bw = function(t, i561) {
        this.Lw(this.Nw.uw(t, i561));
    }, t134.prototype.subscribeClick = function(t) {
        this.Dw.Ji(t);
    }, t134.prototype.unsubscribeClick = function(t) {
        this.Dw.nn(t);
    }, t134.prototype.subscribeCrosshairMove = function(t) {
        this.Aw.Ji(t);
    }, t134.prototype.unsubscribeCrosshairMove = function(t) {
        this.Aw.nn(t);
    }, t134.prototype.priceScale = function(t) {
        return void 0 === t && (t = this.mw.vt().zf()), new gs(this.mw, t);
    }, t134.prototype.timeScale = function() {
        return this.Bw;
    }, t134.prototype.applyOptions = function(t) {
        this.mw.rs(Cs(t));
    }, t134.prototype.options = function() {
        return this.mw.ct();
    }, t134.prototype.takeScreenshot = function() {
        return this.mw.zd();
    }, t134.prototype.Lw = function(t136) {
        var i562 = this.mw.vt();
        i562.Lf(t136.j.Br, t136.j.fw, t136.j.cw), t136.lw.forEach(function(t, i563) {
            return i563._(t.Zu);
        }), i562.Vr();
    }, t134.prototype.Fw = function(t) {
        return l(this.Sw.get(t));
    }, t134.prototype.Tw = function(t137) {
        var i564 = this, n346 = new Map;
        t137.$d.forEach(function(t, s234) {
            n346.set(i564.Fw(s234), t);
        });
        var s233 = void 0 === t137.Kd ? void 0 : this.Fw(t137.Kd);
        return {
            time: t137.S && (t137.S.Sh || t137.S.Dh),
            point: t137.Yd,
            hoveredSeries: s233,
            hoveredMarkerId: t137.Xd,
            seriesPrices: n346
        };
    }, t134;
}();
function xs(t, i565) {
    var n347;
    if (w(t)) {
        var s235 = document.getElementById(t);
        o(null !== s235, "Cannot find element in DOM with id=" + t), n347 = s235;
    } else n347 = t;
    return new Ns(n347, i565);
}
function Ss() {
    return "3.7.0";
}

},{"fancy-canvas/coordinate-space":"hkNCr","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"hkNCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindToDevicePixelRatio", ()=>bindToDevicePixelRatio
);
var defaultBindingOptions = {
    allowDownsampling: true
};
function bindToDevicePixelRatio(canvas, options) {
    if (options === void 0) options = defaultBindingOptions;
    return new DevicePixelRatioBinding(canvas, options);
}
var DevicePixelRatioBinding = function() {
    function DevicePixelRatioBinding1(canvas, options) {
        var _this = this;
        this._resolutionMediaQueryList = null;
        this._resolutionListener = function(ev) {
            return _this._onResolutionChanged();
        };
        this._canvasConfiguredListeners = [];
        this.canvas = canvas;
        this._canvasSize = {
            width: this.canvas.clientWidth,
            height: this.canvas.clientHeight
        };
        this._options = options;
        this._configureCanvas();
        this._installResolutionListener();
    }
    DevicePixelRatioBinding1.prototype.destroy = function() {
        this._canvasConfiguredListeners.length = 0;
        this._uninstallResolutionListener();
        this.canvas = null;
    };
    Object.defineProperty(DevicePixelRatioBinding1.prototype, "canvasSize", {
        get: function() {
            return {
                width: this._canvasSize.width,
                height: this._canvasSize.height
            };
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding1.prototype.resizeCanvas = function(size) {
        this._canvasSize = {
            width: size.width,
            height: size.height
        };
        this._configureCanvas();
    };
    Object.defineProperty(DevicePixelRatioBinding1.prototype, "pixelRatio", {
        get: function() {
            // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
            // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
            var win = this.canvas.ownerDocument.defaultView;
            if (win == null) throw new Error('No window is associated with the canvas');
            return win.devicePixelRatio > 1 || this._options.allowDownsampling ? win.devicePixelRatio : 1;
        },
        enumerable: true,
        configurable: true
    });
    DevicePixelRatioBinding1.prototype.subscribeCanvasConfigured = function(listener) {
        this._canvasConfiguredListeners.push(listener);
    };
    DevicePixelRatioBinding1.prototype.unsubscribeCanvasConfigured = function(listener) {
        this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(function(l) {
            return l != listener;
        });
    };
    DevicePixelRatioBinding1.prototype._configureCanvas = function() {
        var ratio = this.pixelRatio;
        this.canvas.style.width = this._canvasSize.width + "px";
        this.canvas.style.height = this._canvasSize.height + "px";
        this.canvas.width = this._canvasSize.width * ratio;
        this.canvas.height = this._canvasSize.height * ratio;
        this._emitCanvasConfigured();
    };
    DevicePixelRatioBinding1.prototype._emitCanvasConfigured = function() {
        var _this = this;
        this._canvasConfiguredListeners.forEach(function(listener) {
            return listener.call(_this);
        });
    };
    DevicePixelRatioBinding1.prototype._installResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) throw new Error('Resolution listener is already installed');
        // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
        // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
        var win = this.canvas.ownerDocument.defaultView;
        if (win == null) throw new Error('No window is associated with the canvas');
        var dppx = win.devicePixelRatio;
        this._resolutionMediaQueryList = win.matchMedia("all and (resolution: " + dppx + "dppx)");
        // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
        this._resolutionMediaQueryList.addListener(this._resolutionListener);
    };
    DevicePixelRatioBinding1.prototype._uninstallResolutionListener = function() {
        if (this._resolutionMediaQueryList !== null) {
            // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
            this._resolutionMediaQueryList.removeListener(this._resolutionListener);
            this._resolutionMediaQueryList = null;
        }
    };
    DevicePixelRatioBinding1.prototype._reinstallResolutionListener = function() {
        this._uninstallResolutionListener();
        this._installResolutionListener();
    };
    DevicePixelRatioBinding1.prototype._onResolutionChanged = function() {
        this._configureCanvas();
        this._reinstallResolutionListener();
    };
    return DevicePixelRatioBinding1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"9oVu4":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"gcVn7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Protocol version.
 *
 * @public
 */ parcelHelpers.export(exports, "protocol", ()=>_socketIoParser.protocol
);
/**
 * Expose constructors for standalone build.
 *
 * @public
 */ parcelHelpers.export(exports, "Manager", ()=>_managerJs.Manager
);
parcelHelpers.export(exports, "Socket", ()=>_socketJs.Socket
);
parcelHelpers.export(exports, "io", ()=>lookup
);
parcelHelpers.export(exports, "connect", ()=>lookup
);
parcelHelpers.export(exports, "default", ()=>lookup
);
var _urlJs = require("./url.js");
var _managerJs = require("./manager.js");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
/**
 * Managers cache.
 */ const cache = {
};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {
    };
    const parsed = _urlJs.url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) io = new _managerJs.Manager(source, opts);
    else {
        if (!cache[id]) cache[id] = new _managerJs.Manager(source, opts);
        io = cache[id];
    }
    if (parsed.query && !opts.query) opts.query = parsed.queryKey;
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: _managerJs.Manager,
    Socket: _socketJs.Socket,
    io: lookup,
    connect: lookup
});

},{"./url.js":"ia4y4","./manager.js":"9lgsw","./socket.js":"cBWCy","socket.io-parser":"kNQA3","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"ia4y4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */ parcelHelpers.export(exports, "url", ()=>url
);
var _parseuri = require("parseuri");
var _parseuriDefault = parcelHelpers.interopDefault(_parseuri);
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) uri = loc.protocol + uri;
            else uri = loc.host + uri;
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) uri = loc.protocol + "//" + uri;
            else uri = "https://" + uri;
        }
        // parse
        obj = _parseuriDefault.default(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) obj.port = "80";
        else if (/^(http|ws)s$/.test(obj.protocol)) obj.port = "443";
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

},{"parseuri":"fej7l","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"fej7l":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
module.exports = function parseuri(str) {
    var src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    var m = re.exec(str || ''), uri = {
    }, i = 14;
    while(i--)uri[parts[i]] = m[i] || '';
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
};
function pathNames(obj, path) {
    var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == '/' || path.length === 0) names.splice(0, 1);
    if (path.substr(path.length - 1, 1) == '/') names.splice(names.length - 1, 1);
    return names;
}
function queryKey(uri, query) {
    var data = {
    };
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) data[$1] = $2;
    });
    return data;
}

},{}],"9lgsw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Manager", ()=>Manager
);
var _engineIoClient = require("engine.io-client");
var _socketJs = require("./socket.js");
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _backo2 = require("backo2");
var _backo2Default = parcelHelpers.interopDefault(_backo2);
var _componentEmitter = require("@socket.io/component-emitter");
class Manager extends _componentEmitter.Emitter {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {
        };
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {
        };
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        _engineIoClient.installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new _backo2Default.default({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || _socketIoParser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 || _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new _engineIoClient.Socket(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = _onJs.on(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        // emit `error`
        const errorSub = _onJs.on(socket, "error", (err)=>{
            self.cleanup();
            self._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) fn(err);
            else // Only do this if there is no fn to handle the error
            self.maybeReconnectOnOpen();
        });
        if (false !== this._timeout) {
            const timeout = this._timeout;
            if (timeout === 0) openSubDestroy(); // prevents a race condition with the 'open' event
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                socket.close();
                // @ts-ignore
                socket.emit("error", new Error("timeout"));
            }, timeout);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(_onJs.on(socket, "ping", this.onping.bind(this)), _onJs.on(socket, "data", this.ondata.bind(this)), _onJs.on(socket, "error", this.onerror.bind(this)), _onJs.on(socket, "close", this.onclose.bind(this)), _onJs.on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        this.decoder.add(data);
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        this.emitReserved("packet", packet);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new _socketJs.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) return;
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++)this.engine.write(encodedPackets[i], packet.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy()
        );
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine) this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */ onclose(reason) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason);
        if (this._reconnection && !this.skipReconnect) this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else self.onreconnect();
                });
            }, delay);
            if (this.opts.autoUnref) timer.unref();
            this.subs.push(function subDestroy() {
                clearTimeout(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

},{"engine.io-client":"1DbUx","./socket.js":"cBWCy","socket.io-parser":"kNQA3","./on.js":"i8IIZ","backo2":"jdGlR","@socket.io/component-emitter":"8R9dt","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"1DbUx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>_socketJs.Socket
);
parcelHelpers.export(exports, "protocol", ()=>protocol
);
parcelHelpers.export(exports, "Transport", ()=>_transportJs.Transport
);
parcelHelpers.export(exports, "transports", ()=>_indexJs.transports
);
parcelHelpers.export(exports, "installTimerFunctions", ()=>_utilJs.installTimerFunctions
);
var _socketJs = require("./socket.js");
var _transportJs = require("./transport.js");
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
const protocol = _socketJs.Socket.protocol;

},{"./socket.js":"cGEc3","./transport.js":"dhU5l","./transports/index.js":"krEwx","./util.js":"lSrl3","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"cGEc3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>Socket
);
var _indexJs = require("./transports/index.js");
var _utilJs = require("./util.js");
var _parseqs = require("parseqs");
var _parseqsDefault = parcelHelpers.interopDefault(_parseqs);
var _parseuri = require("parseuri");
var _parseuriDefault = parcelHelpers.interopDefault(_parseuri);
var _componentEmitter = require("@socket.io/component-emitter");
var _engineIoParser = require("engine.io-parser");
class Socket extends _componentEmitter.Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri or options
     * @param {Object} opts - options
     * @api public
     */ constructor(uri, opts = {
    }){
        super();
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = _parseuriDefault.default(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
        } else if (opts.host) opts.hostname = _parseuriDefault.default(opts.host).host;
        _utilJs.installTimerFunctions(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) // if no port is specified manually, use the protocol default
        opts.port = this.secure ? "443" : "80";
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = opts.transports || [
            "polling",
            "websocket"
        ];
        this.readyState = "";
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {
            },
            closeOnBeforeunload: true
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
        if (typeof this.opts.query === "string") this.opts.query = _parseqsDefault.default.decode(this.opts.query);
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
            // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
            // closed/reloaded)
            addEventListener("beforeunload", ()=>{
                if (this.transport) {
                    // silently close the transport
                    this.transport.removeAllListeners();
                    this.transport.close();
                }
            }, false);
            if (this.hostname !== "localhost") {
                this.offlineEventListener = ()=>{
                    this.onClose("transport close");
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} transport name
     * @return {Transport}
     * @api private
     */ createTransport(name) {
        const query = clone(this.opts.query);
        // append engine.io protocol identifier
        query.EIO = _engineIoParser.protocol;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({
        }, this.opts.transportOptions[name], this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        });
        return new _indexJs.transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */ open() {
        let transport;
        if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) transport = "websocket";
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else transport = this.transports[0];
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        } catch (e) {
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */ setTransport(transport) {
        if (this.transport) this.transport.removeAllListeners();
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", ()=>{
            this.onClose("transport close");
        });
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */ probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        Socket.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) freezeTransport();
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api private
     */ onOpen() {
        this.readyState = "open";
        Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
            let i = 0;
            const l = this.upgrades.length;
            for(; i < l; i++)this.probe(this.upgrades[i]);
        }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */ onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.resetPingTimeout();
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @api private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */ resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(()=>{
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) this.pingTimeoutTimer.unref();
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */ onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) this.emitReserved("drain");
        else this.flush();
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            this.transport.send(this.writeBuffer);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = this.writeBuffer.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */ write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */ sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) return;
        options = options || {
        };
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api public
     */ close() {
        const close = ()=>{
            this.onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) this.once("drain", ()=>{
                if (this.upgrading) waitForUpgrade();
                else close();
            });
            else if (this.upgrading) waitForUpgrade();
            else close();
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */ onError(err) {
        Socket.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */ onClose(reason, desc) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") removeEventListener("offline", this.offlineEventListener, false);
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, desc);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */ filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for(; i < j; i++)if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        return filteredUpgrades;
    }
}
Socket.protocol = _engineIoParser.protocol;
function clone(obj) {
    const o = {
    };
    for(let i in obj)if (obj.hasOwnProperty(i)) o[i] = obj[i];
    return o;
}

},{"./transports/index.js":"krEwx","./util.js":"lSrl3","parseqs":"7jCH3","parseuri":"fej7l","@socket.io/component-emitter":"8R9dt","engine.io-parser":"2hvGg","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"krEwx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transports", ()=>transports
);
var _pollingXhrJs = require("./polling-xhr.js");
var _websocketJs = require("./websocket.js");
const transports = {
    websocket: _websocketJs.WS,
    polling: _pollingXhrJs.XHR
};

},{"./polling-xhr.js":"j8Btq","./websocket.js":"dtSxR","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"j8Btq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "XHR", ()=>XHR
);
parcelHelpers.export(exports, "Request", ()=>Request
);
/* global attachEvent */ var _xmlhttprequestJs = require("./xmlhttprequest.js");
var _xmlhttprequestJsDefault = parcelHelpers.interopDefault(_xmlhttprequestJs);
var _globalThisJs = require("../globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
var _utilJs = require("../util.js");
var _componentEmitter = require("@socket.io/component-emitter");
var _pollingJs = require("./polling.js");
/**
 * Empty function
 */ function empty() {
}
const hasXHR2 = function() {
    const xhr = new _xmlhttprequestJsDefault.default({
        xdomain: false
    });
    return null != xhr.responseType;
}();
class XHR extends _pollingJs.Polling {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */ constructor(opts){
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) port = isSSL ? "443" : "80";
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
            this.xs = opts.secure !== isSSL;
        }
        /**
         * XHR supports binary
         */ const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */ request(opts = {
    }) {
        Object.assign(opts, {
            xd: this.xd,
            xs: this.xs
        }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (err)=>{
            this.onError("xhr post error", err);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @api private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (err)=>{
            this.onError("xhr poll error", err);
        });
        this.pollXhr = req;
    }
}
class Request extends _componentEmitter.Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */ constructor(uri, opts){
        super();
        _utilJs.installTimerFunctions(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.async = false !== opts.async;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */ create() {
        const opts = _utilJs.pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        opts.xscheme = !!this.opts.xs;
        const xhr = this.xhr = new _xmlhttprequestJsDefault.default(opts);
        try {
            xhr.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this.opts.extraHeaders)if (this.opts.extraHeaders.hasOwnProperty(i)) xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch (e) {
            }
            if ("POST" === this.method) try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e1) {
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e2) {
            }
            // ie6 check
            if ("withCredentials" in xhr) xhr.withCredentials = this.opts.withCredentials;
            if (this.opts.requestTimeout) xhr.timeout = this.opts.requestTimeout;
            xhr.onreadystatechange = ()=>{
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) this.onLoad();
                else // make sure the `error` event handler that's user-set
                // does not throw in the same tick and gets caught here
                this.setTimeoutFn(()=>{
                    this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
            };
            xhr.send(this.data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon successful response.
     *
     * @api private
     */ onSuccess() {
        this.emit("success");
        this.cleanup();
    }
    /**
     * Called if we have data.
     *
     * @api private
     */ onData(data) {
        this.emit("data", data);
        this.onSuccess();
    }
    /**
     * Called upon error.
     *
     * @api private
     */ onError(err) {
        this.emit("error", err);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @api private
     */ cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) return;
        this.xhr.onreadystatechange = empty;
        if (fromError) try {
            this.xhr.abort();
        } catch (e) {
        }
        if (typeof document !== "undefined") delete Request.requests[this.index];
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @api private
     */ onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) this.onData(data);
    }
    /**
     * Aborts the request.
     *
     * @api public
     */ abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") // @ts-ignore
    attachEvent("onunload", unloadHandler);
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in _globalThisJsDefault.default ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests)if (Request.requests.hasOwnProperty(i)) Request.requests[i].abort();
}

},{"./xmlhttprequest.js":"e5w3L","../globalThis.js":"9rE3H","../util.js":"lSrl3","@socket.io/component-emitter":"8R9dt","./polling.js":"bV2hw","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"e5w3L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// browser shim for xmlhttprequest module
var _hasCors = require("has-cors");
var _hasCorsDefault = parcelHelpers.interopDefault(_hasCors);
var _globalThisJs = require("../globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
exports.default = function(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || _hasCorsDefault.default)) return new XMLHttpRequest();
    } catch (e) {
    }
    if (!xdomain) try {
        return new _globalThisJsDefault.default[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e1) {
    }
};

},{"has-cors":"etwVF","../globalThis.js":"9rE3H","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"etwVF":[function(require,module,exports) {
/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */ try {
    module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
}

},{}],"9rE3H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (()=>{
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"lSrl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pick", ()=>pick
);
parcelHelpers.export(exports, "installTimerFunctions", ()=>installTimerFunctions
);
var _globalThisJs = require("./globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) acc[k] = obj[k];
        return acc;
    }, {
    });
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = setTimeout;
const NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(_globalThisJsDefault.default);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(_globalThisJsDefault.default);
    } else {
        obj.setTimeoutFn = setTimeout.bind(_globalThisJsDefault.default);
        obj.clearTimeoutFn = clearTimeout.bind(_globalThisJsDefault.default);
    }
}

},{"./globalThis.js":"9rE3H","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"8R9dt":[function(require,module,exports) {
/**
 * Expose `Emitter`.
 */ exports.Emitter = Emitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype)obj[key] = Emitter.prototype[key];
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {
    };
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {
    };
    // all
    if (0 == arguments.length) {
        this._callbacks = {
        };
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) delete this._callbacks['$' + event];
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {
    };
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i)callbacks[i].apply(this, args);
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {
    };
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};

},{}],"bV2hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Polling", ()=>Polling
);
var _transportJs = require("../transport.js");
var _yeast = require("yeast");
var _yeastDefault = parcelHelpers.interopDefault(_yeast);
var _parseqs = require("parseqs");
var _parseqsDefault = parcelHelpers.interopDefault(_parseqs);
var _engineIoParser = require("engine.io-parser");
class Polling extends _transportJs.Transport {
    constructor(){
        super(...arguments);
        this.polling = false;
    }
    /**
     * Transport name.
     */ get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */ doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else pause();
    }
    /**
     * Starts polling cycle.
     *
     * @api public
     */ poll() {
        this.polling = true;
        this.doPoll();
        this.emit("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") this.onOpen();
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose();
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        _engineIoParser.decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emit("pollComplete");
            if ("open" === this.readyState) this.poll();
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @api private
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) close();
        else // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */ write(packets) {
        this.writable = false;
        _engineIoParser.encodePayload(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emit("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */ uri() {
        let query = this.query || {
        };
        const schema = this.opts.secure ? "https" : "http";
        let port = "";
        // cache busting is forced
        if (false !== this.opts.timestampRequests) query[this.opts.timestampParam] = _yeastDefault.default();
        if (!this.supportsBinary && !query.sid) query.b64 = 1;
        // avoid port if default for schema
        if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
        const encodedQuery = _parseqsDefault.default.encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
}

},{"../transport.js":"dhU5l","yeast":"wEq3V","parseqs":"7jCH3","engine.io-parser":"2hvGg","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"dhU5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transport", ()=>Transport
);
var _engineIoParser = require("engine.io-parser");
var _componentEmitter = require("@socket.io/component-emitter");
var _utilJs = require("./util.js");
class Transport extends _componentEmitter.Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */ constructor(opts){
        super();
        this.writable = false;
        _utilJs.installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.readyState = "";
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} str
     * @return {Transport} for chaining
     * @api protected
     */ onError(msg, desc) {
        const err = new Error(msg);
        // @ts-ignore
        err.type = "TransportError";
        // @ts-ignore
        err.description = desc;
        super.emit("error", err);
        return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */ open() {
        if ("closed" === this.readyState || "" === this.readyState) {
            this.readyState = "opening";
            this.doOpen();
        }
        return this;
    }
    /**
     * Closes the transport.
     *
     * @api public
     */ close() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */ send(packets) {
        if ("open" === this.readyState) this.write(packets);
    }
    /**
     * Called upon open
     *
     * @api protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emit("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */ onData(data) {
        const packet = _engineIoParser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */ onPacket(packet) {
        super.emit("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api protected
     */ onClose() {
        this.readyState = "closed";
        super.emit("close");
    }
}

},{"engine.io-parser":"2hvGg","@socket.io/component-emitter":"8R9dt","./util.js":"lSrl3","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"2hvGg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol
);
parcelHelpers.export(exports, "encodePacket", ()=>_encodePacketJsDefault.default
);
parcelHelpers.export(exports, "encodePayload", ()=>encodePayload
);
parcelHelpers.export(exports, "decodePacket", ()=>_decodePacketJsDefault.default
);
parcelHelpers.export(exports, "decodePayload", ()=>decodePayload
);
var _encodePacketJs = require("./encodePacket.js");
var _encodePacketJsDefault = parcelHelpers.interopDefault(_encodePacketJs);
var _decodePacketJs = require("./decodePacket.js");
var _decodePacketJsDefault = parcelHelpers.interopDefault(_decodePacketJs);
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        _encodePacketJsDefault.default(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) callback(encodedPackets.join(SEPARATOR));
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = _decodePacketJsDefault.default(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") break;
    }
    return packets;
};
const protocol = 4;

},{"./encodePacket.js":"17kYA","./decodePacket.js":"3C0Om","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"17kYA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonsJs = require("./commons.js");
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type , data  }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(data, callback);
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) return callback(data);
        else return encodeBlobAsBase64(new Blob([
            data
        ]), callback);
    }
    // plain string
    return callback(_commonsJs.PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
};
exports.default = encodePacket;

},{"./commons.js":"3vem6","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"3vem6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PACKET_TYPES", ()=>PACKET_TYPES
);
parcelHelpers.export(exports, "PACKET_TYPES_REVERSE", ()=>PACKET_TYPES_REVERSE
);
parcelHelpers.export(exports, "ERROR_PACKET", ()=>ERROR_PACKET
);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"3C0Om":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonsJs = require("./commons.js");
var _base64Arraybuffer = require("@socket.io/base64-arraybuffer");
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
    };
    const type = encodedPacket.charAt(0);
    if (type === "b") return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
    const packetType = _commonsJs.PACKET_TYPES_REVERSE[type];
    if (!packetType) return _commonsJs.ERROR_PACKET;
    return encodedPacket.length > 1 ? {
        type: _commonsJs.PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
    } : {
        type: _commonsJs.PACKET_TYPES_REVERSE[type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = _base64Arraybuffer.decode(data);
        return mapBinary(decoded, binaryType);
    } else return {
        base64: true,
        data
    }; // fallback for old browsers
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            return data instanceof ArrayBuffer ? new Blob([
                data
            ]) : data;
        case "arraybuffer":
        default:
            return data; // assuming the data is already an ArrayBuffer
    }
};
exports.default = decodePacket;

},{"./commons.js":"3vem6","@socket.io/base64-arraybuffer":"fGO9t","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"fGO9t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "encode", ()=>encode
);
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for(var i = 0; i < chars.length; i++)lookup[chars.charCodeAt(i)] = i;
var encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i1, len = bytes.length, base64 = '';
    for(i1 = 0; i1 < len; i1 += 3){
        base64 += chars[bytes[i1] >> 2];
        base64 += chars[(bytes[i1] & 3) << 4 | bytes[i1 + 1] >> 4];
        base64 += chars[(bytes[i1 + 1] & 15) << 2 | bytes[i1 + 2] >> 6];
        base64 += chars[bytes[i1 + 2] & 63];
    }
    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + '=';
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + '==';
    return base64;
};
var decode = function(base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') bufferLength--;
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i2 = 0; i2 < len; i2 += 4){
        encoded1 = lookup[base64.charCodeAt(i2)];
        encoded2 = lookup[base64.charCodeAt(i2 + 1)];
        encoded3 = lookup[base64.charCodeAt(i2 + 2)];
        encoded4 = lookup[base64.charCodeAt(i2 + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"wEq3V":[function(require,module,exports) {
'use strict';
var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {
}, seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */ function encode(num) {
    var encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    }while (num > 0)
    return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */ function decode(str) {
    var decoded = 0;
    for(i = 0; i < str.length; i++)decoded = decoded * length + map[str.charAt(i)];
    return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */ function yeast() {
    var now = encode(+new Date());
    if (now !== prev) return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for(; i < length; i++)map[alphabet[i]] = i;
//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],"7jCH3":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ exports.encode = function(obj) {
    var str = '';
    for(var i in obj)if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
    return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */ exports.decode = function(qs) {
    var qry = {
    };
    var pairs = qs.split('&');
    for(var i = 0, l = pairs.length; i < l; i++){
        var pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
};

},{}],"dtSxR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WS", ()=>WS
);
var _transportJs = require("../transport.js");
var _parseqs = require("parseqs");
var _parseqsDefault = parcelHelpers.interopDefault(_parseqs);
var _yeast = require("yeast");
var _yeastDefault = parcelHelpers.interopDefault(_yeast);
var _utilJs = require("../util.js");
var _websocketConstructorJs = require("./websocket-constructor.js");
var _engineIoParser = require("engine.io-parser");
var Buffer = require("buffer").Buffer;
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends _transportJs.Transport {
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */ constructor(opts){
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Transport name.
     *
     * @api public
     */ get name() {
        return "websocket";
    }
    /**
     * Opens socket.
     *
     * @api private
     */ doOpen() {
        if (!this.check()) // let probe timeout
        return;
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {
        } : _utilJs.pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) opts.headers = this.opts.extraHeaders;
        try {
            this.ws = _websocketConstructorJs.usingBrowserWebSocket && !isReactNative ? protocols ? new _websocketConstructorJs.WebSocket(uri, protocols) : new _websocketConstructorJs.WebSocket(uri) : new _websocketConstructorJs.WebSocket(uri, protocols, opts);
        } catch (err) {
            return this.emit("error", err);
        }
        this.ws.binaryType = this.socket.binaryType || _websocketConstructorJs.defaultBinaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) this.ws._socket.unref();
            this.onOpen();
        };
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onmessage = (ev)=>this.onData(ev.data)
        ;
        this.ws.onerror = (e)=>this.onError("websocket error", e)
        ;
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */ write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            _engineIoParser.encodePacket(packet, this.supportsBinary, (data)=>{
                // always create a new object (GH-437)
                const opts = {
                };
                if (!_websocketConstructorJs.usingBrowserWebSocket) {
                    if (packet.options) opts.compress = packet.options.compress;
                    if (this.opts.perMessageDeflate) {
                        const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
                        if (len < this.opts.perMessageDeflate.threshold) opts.compress = false;
                    }
                }
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    if (_websocketConstructorJs.usingBrowserWebSocket) // TypeError is thrown when passing the second argument on Safari
                    this.ws.send(data);
                    else this.ws.send(data, opts);
                } catch (e) {
                }
                if (lastPacket) // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                _websocketConstructorJs.nextTick(()=>{
                    this.writable = true;
                    this.emit("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    /**
     * Closes socket.
     *
     * @api private
     */ doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */ uri() {
        let query = this.query || {
        };
        const schema = this.opts.secure ? "wss" : "ws";
        let port = "";
        // avoid port if default for schema
        if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) port = ":" + this.opts.port;
        // append timestamp to URI
        if (this.opts.timestampRequests) query[this.opts.timestampParam] = _yeastDefault.default();
        // communicate binary support capabilities
        if (!this.supportsBinary) query.b64 = 1;
        const encodedQuery = _parseqsDefault.default.encode(query);
        const ipv6 = this.opts.hostname.indexOf(":") !== -1;
        return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */ check() {
        return !!_websocketConstructorJs.WebSocket && !("__initialize" in _websocketConstructorJs.WebSocket && this.name === WS.prototype.name);
    }
}

},{"../transport.js":"dhU5l","parseqs":"7jCH3","yeast":"wEq3V","../util.js":"lSrl3","./websocket-constructor.js":"3yMSF","engine.io-parser":"2hvGg","buffer":"bPTDe","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"3yMSF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "WebSocket", ()=>WebSocket
);
parcelHelpers.export(exports, "usingBrowserWebSocket", ()=>usingBrowserWebSocket
);
parcelHelpers.export(exports, "defaultBinaryType", ()=>defaultBinaryType
);
var _globalThisJs = require("../globalThis.js");
var _globalThisJsDefault = parcelHelpers.interopDefault(_globalThisJs);
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) return (cb)=>Promise.resolve().then(cb)
    ;
    else return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0)
    ;
})();
const WebSocket = _globalThisJsDefault.default.WebSocket || _globalThisJsDefault.default.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";

},{"../globalThis.js":"9rE3H","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"bPTDe":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require('base64-js');
const ieee754 = require('ieee754');
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24) // Overflow
    ;
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {
};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"base64-js":"6DCTP","ieee754":"dbgnf"}],"6DCTP":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"dbgnf":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"cBWCy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>Socket
);
var _socketIoParser = require("socket.io-parser");
var _onJs = require("./on.js");
var _componentEmitter = require("@socket.io/component-emitter");
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends _componentEmitter.Emitter {
    /**
     * `Socket` constructor.
     *
     * @public
     */ constructor(io, nsp, opts){
        super();
        this.connected = false;
        this.disconnected = true;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.ids = 0;
        this.acks = {
        };
        this.flags = {
        };
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) this.auth = opts.auth;
        if (this.io._autoConnect) this.open();
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            _onJs.on(io, "open", this.onopen.bind(this)),
            _onJs.on(io, "packet", this.onpacket.bind(this)),
            _onJs.on(io, "error", this.onerror.bind(this)),
            _onJs.on(io, "close", this.onclose.bind(this)), 
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @public
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for connect()
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * @return self
     * @public
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @return self
     * @public
     */ emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) throw new Error('"' + ev + '" is a reserved event name');
        args.unshift(ev);
        const packet = {
            type: _socketIoParser.PacketType.EVENT,
            data: args
        };
        packet.options = {
        };
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) ;
        else if (this.connected) this.packet(packet);
        else this.sendBuffer.push(packet);
        this.flags = {
        };
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        const timeout = this.flags.timeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++)if (this.sendBuffer[i].id === id) this.sendBuffer.splice(i, 1);
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        this.acks[id] = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, [
                null,
                ...args
            ]);
        };
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") this.auth((data)=>{
            this.packet({
                type: _socketIoParser.PacketType.CONNECT,
                data
            });
        });
        else this.packet({
            type: _socketIoParser.PacketType.CONNECT,
            data: this.auth
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) this.emitReserved("connect_error", err);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @private
     */ onclose(reason) {
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emitReserved("disconnect", reason);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case _socketIoParser.PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    const id = packet.data.sid;
                    this.onconnect(id);
                } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case _socketIoParser.PacketType.EVENT:
                this.onevent(packet);
                break;
            case _socketIoParser.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case _socketIoParser.PacketType.ACK:
                this.onack(packet);
                break;
            case _socketIoParser.PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case _socketIoParser.PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case _socketIoParser.PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) args.push(this.ack(packet.id));
        if (this.connected) this.emitEvent(args);
        else this.receiveBuffer.push(Object.freeze(args));
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners)listener.apply(this, args);
        }
        super.emit.apply(this, args);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: _socketIoParser.PacketType.ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if ("function" === typeof ack) {
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id) {
        this.id = id;
        this.connected = true;
        this.disconnected = false;
        this.emitBuffered();
        this.emitReserved("connect");
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args)
        );
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>this.packet(packet)
        );
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy()
            );
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually.
     *
     * @return self
     * @public
     */ disconnect() {
        if (this.connected) this.packet({
            type: _socketIoParser.PacketType.DISCONNECT
        });
        // remove socket from pool
        this.destroy();
        if (this.connected) // fire events
        this.onclose("io client disconnect");
        return this;
    }
    /**
     * Alias for disconnect()
     *
     * @return self
     * @public
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     * @public
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns self
     * @public
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * ```
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     * ```
     *
     * @returns self
     * @public
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */ offAny(listener) {
        if (!this._anyListeners) return this;
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++)if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
            }
        } else this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */ listenersAny() {
        return this._anyListeners || [];
    }
}

},{"socket.io-parser":"kNQA3","./on.js":"i8IIZ","@socket.io/component-emitter":"8R9dt","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"kNQA3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocol", ()=>protocol
);
parcelHelpers.export(exports, "PacketType", ()=>PacketType
);
/**
 * A socket.io Encoder instance
 */ parcelHelpers.export(exports, "Encoder", ()=>Encoder
);
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */ parcelHelpers.export(exports, "Decoder", ()=>Decoder
);
var _componentEmitter = require("@socket.io/component-emitter");
var _binaryJs = require("./binary.js");
var _isBinaryJs = require("./is-binary.js");
const protocol = 5;
var PacketType;
(function(PacketType1) {
    PacketType1[PacketType1["CONNECT"] = 0] = "CONNECT";
    PacketType1[PacketType1["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType1[PacketType1["EVENT"] = 2] = "EVENT";
    PacketType1[PacketType1["ACK"] = 3] = "ACK";
    PacketType1[PacketType1["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType1[PacketType1["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType1[PacketType1["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {
}));
class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (_isBinaryJs.hasBinary(obj)) {
                obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
            }
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) str += obj.attachments + "-";
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) str += obj.nsp + ",";
        // immediately followed by the id
        if (null != obj.id) str += obj.id;
        // json data
        if (null != obj.data) str += JSON.stringify(obj.data);
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = _binaryJs.deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
class Decoder extends _componentEmitter.Emitter {
    constructor(){
        super();
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            packet = this.decodeString(obj);
            if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) super.emitReserved("decoded", packet);
            } else // non-binary full packet
            super.emitReserved("decoded", packet);
        } else if (_isBinaryJs.isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else throw new Error("Unknown type: " + obj);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) throw new Error("unknown packet type " + p.type);
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length);
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") throw new Error("Illegal attachments");
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else p.nsp = "/";
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) p.data = payload;
            else throw new Error("invalid payload");
        }
        return p;
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return typeof payload === "object";
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object";
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) this.reconstructor.finishedReconstruction();
    }
}
function tryParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return false;
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = _binaryJs.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

},{"@socket.io/component-emitter":"8R9dt","./binary.js":"ht6fK","./is-binary.js":"3US8r","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"ht6fK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */ parcelHelpers.export(exports, "deconstructPacket", ()=>deconstructPacket
);
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */ parcelHelpers.export(exports, "reconstructPacket", ()=>reconstructPacket
);
var _isBinaryJs = require("./is-binary.js");
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if (_isBinaryJs.isBinary(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++)newData[i] = _deconstructPacket(data[i], buffers);
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {
        };
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = _deconstructPacket(data[key], buffers);
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = undefined; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder) return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    else if (Array.isArray(data)) for(let i = 0; i < data.length; i++)data[i] = _reconstructPacket(data[i], buffers);
    else if (typeof data === "object") {
        for(const key in data)if (data.hasOwnProperty(key)) data[key] = _reconstructPacket(data[key], buffers);
    }
    return data;
}

},{"./is-binary.js":"3US8r","@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"3US8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */ parcelHelpers.export(exports, "isBinary", ()=>isBinary
);
parcelHelpers.export(exports, "hasBinary", ()=>hasBinary
);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") return false;
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) return true;
        }
        return false;
    }
    if (isBinary(obj)) return true;
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) return hasBinary(obj.toJSON(), true);
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"i8IIZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "on", ()=>on
);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9oVu4"}],"jdGlR":[function(require,module,exports) {
/**
 * Expose `Backoff`.
 */ module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ function Backoff(opts) {
    opts = opts || {
    };
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};

},{}]},["jg8nR","6Fsu0"], "6Fsu0", "parcelRequire99c6")

//# sourceMappingURL=index.0fba71c9.js.map
