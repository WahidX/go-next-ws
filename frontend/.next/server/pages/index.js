"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Home = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ws = new WebSocket(\"ws://localhost:3030/websocket?auth=authToken\");\n        ws.onopen = ()=>console.log(\"connected\");\n        ws.onmessage = (message)=>console.log(\"received: \", message.data);\n        ws.onerror = (ev)=>console.log(\"Error: \", ev);\n        ws.onclose = (ev)=>console.log(\"connection closed\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Go-Next Websocket\"\n        }, void 0, false, {\n            fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n            lineNumber: 16,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/dro1dx/Documents/repos/go-next-ws-poc/frontend/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNrQztBQUVsQyxNQUFNQyxJQUFJLEdBQWEsSUFBTTtJQUM1QkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2YsSUFBSUUsRUFBRSxHQUFHLElBQUlDLFNBQVMsQ0FBQyw4Q0FBOEMsQ0FBQztRQUV0RUQsRUFBRSxDQUFDRSxNQUFNLEdBQUcsSUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0NKLEVBQUUsQ0FBQ0ssU0FBUyxHQUFHLENBQUNDLE9BQU8sR0FBS0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFRSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO1FBQ3BFUCxFQUFFLENBQUNRLE9BQU8sR0FBRyxDQUFDQyxFQUFFLEdBQUtOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUssRUFBRSxDQUFDLENBQUM7UUFDaERULEVBQUUsQ0FBQ1UsT0FBTyxHQUFHLENBQUNELEVBQUUsR0FBS04sT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUN0RCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0MsOERBQUNPLEtBQUc7a0JBQ0gsNEVBQUNDLElBQUU7c0JBQUMsbUJBQWlCOzs7OztxQkFBSzs7Ozs7aUJBQ3JCLENBQ0w7Q0FDRjtBQUVELGlFQUFlYixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nby1uZXh0LXdzLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bGV0IHdzID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjMwMzAvd2Vic29ja2V0P2F1dGg9YXV0aFRva2VuXCIpO1xuXG5cdFx0d3Mub25vcGVuID0gKCkgPT4gY29uc29sZS5sb2coXCJjb25uZWN0ZWRcIik7XG5cdFx0d3Mub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IGNvbnNvbGUubG9nKFwicmVjZWl2ZWQ6IFwiLCBtZXNzYWdlLmRhdGEpO1xuXHRcdHdzLm9uZXJyb3IgPSAoZXYpID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBldik7XG5cdFx0d3Mub25jbG9zZSA9IChldikgPT4gY29uc29sZS5sb2coXCJjb25uZWN0aW9uIGNsb3NlZFwiKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5Hby1OZXh0IFdlYnNvY2tldDwvaDE+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkhvbWUiLCJ3cyIsIldlYlNvY2tldCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbm1lc3NhZ2UiLCJtZXNzYWdlIiwiZGF0YSIsIm9uZXJyb3IiLCJldiIsIm9uY2xvc2UiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();