"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), response = ref[0], setResponse = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref1[0], setMessage = ref1[1];\n    var ws;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (ws) {\n            ws.close();\n        }\n        ws = new WebSocket(\"ws://localhost:3030/websocket?auth=authToken\");\n        ws.onopen = function() {\n            return console.log(\"connected\");\n        };\n        ws.onmessage = function(message) {\n            console.log(\"received: \", message.data);\n            setResponse([\n                message.data\n            ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(response)));\n        };\n        ws.onerror = function(ev) {\n            return console.log(\"Error: \", ev);\n        };\n        ws.onclose = function(ev) {\n            return console.log(\"connection closed\");\n        };\n    }, []);\n    var sendMessage = function() {\n        return ws.send(message);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Go-Next Websocket\"\n            }, void 0, false, {\n                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"parent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Send message to server\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 7\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                onChange: function(e) {\n                                    return setMessage(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return sendMessage();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Message from server\"\n                            }, void 0, false, {\n                                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 6\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: response.map(function(resp) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: resp\n                                    }, void 0, false, {\n                                        fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 8\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 6\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, _this);\n};\n_s(Home, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXHRjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cdGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGxldCB3czogV2ViU29ja2V0O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHdzKSB7XG5cdFx0XHR3cy5jbG9zZSgpO1xuXHRcdH1cblx0XHR3cyA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDozMDMwL3dlYnNvY2tldD9hdXRoPWF1dGhUb2tlblwiKTtcblxuXHRcdHdzLm9ub3BlbiA9ICgpID0+IGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpO1xuXHRcdHdzLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlY2VpdmVkOiBcIiwgbWVzc2FnZS5kYXRhKTtcblx0XHRcdHNldFJlc3BvbnNlKFttZXNzYWdlLmRhdGEsIC4uLnJlc3BvbnNlXSk7XG5cdFx0fTtcblx0XHR3cy5vbmVycm9yID0gKGV2KSA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXYpO1xuXHRcdHdzLm9uY2xvc2UgPSAoZXYpID0+IGNvbnNvbGUubG9nKFwiY29ubmVjdGlvbiBjbG9zZWRcIik7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHdzLnNlbmQobWVzc2FnZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPkdvLU5leHQgV2Vic29ja2V0PC9oMT5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXJlbnRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aDI+U2VuZCBtZXNzYWdlIHRvIHNlcnZlcjwvaDI+XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZE1lc3NhZ2UoKX0+PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgyPk1lc3NhZ2UgZnJvbSBzZXJ2ZXI8L2gyPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtyZXNwb25zZS5tYXAoKHJlc3ApID0+IChcblx0XHRcdFx0XHRcdFx0PGxpPntyZXNwfTwvbGk+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ3cyIsImNsb3NlIiwiV2ViU29ja2V0Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9ubWVzc2FnZSIsImRhdGEiLCJvbmVycm9yIiwiZXYiLCJvbmNsb3NlIiwic2VuZE1lc3NhZ2UiLCJzZW5kIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImgyIiwiYnIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsInJlc3AiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});