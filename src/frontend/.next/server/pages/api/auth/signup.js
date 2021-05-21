/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "./src/pages/api/auth/signup.ts":
/*!**************************************!*\
  !*** ./src/pages/api/auth/signup.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ signup; }\n/* harmony export */ });\n/* harmony import */ var infra_lib_dependency_injection_SignUp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/lib/dependency-injection/SignUp/container */ \"infra/lib/dependency-injection/SignUp/container\");\n/* harmony import */ var infra_lib_dependency_injection_SignUp_container__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(infra_lib_dependency_injection_SignUp_container__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function signup(req, res) {\n  const {\n    email,\n    password,\n    name,\n    roles,\n    createdAt\n  } = req.body;\n  const useCase = infra_lib_dependency_injection_SignUp_container__WEBPACK_IMPORTED_MODULE_0___default().resolve('useCase');\n\n  if (!email || !password) {\n    return res.status(400).send('Email and Password not provided');\n  }\n\n  try {\n    await useCase.handle({\n      email,\n      password,\n      name,\n      roles,\n      createdAt\n    });\n    let presenter = infra_lib_dependency_injection_SignUp_container__WEBPACK_IMPORTED_MODULE_0___default().resolve('useCase');\n    presenter.getResponse(); // setAuthCookie(res, auth.secret);\n    // Cookies.set('token', token, { expires: 60 })\n\n    res.status(200).end();\n  } catch (error) {\n    console.error(error);\n    res.status(error.requestResult.statusCode).send(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHM/MTRkMSJdLCJuYW1lcyI6WyJzaWdudXAiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwibmFtZSIsInJvbGVzIiwiY3JlYXRlZEF0IiwiYm9keSIsInVzZUNhc2UiLCJzaWduVXBDb250YWluZXIiLCJzdGF0dXMiLCJzZW5kIiwiaGFuZGxlIiwicHJlc2VudGVyIiwiZ2V0UmVzcG9uc2UiLCJlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJyZXF1ZXN0UmVzdWx0Iiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBR2UsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdDLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxZQUFUO0FBQW1CQyxRQUFuQjtBQUF5QkMsU0FBekI7QUFBZ0NDO0FBQWhDLE1BQThDTixHQUFHLENBQUNPLElBQXhEO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw4RkFBQSxDQUF1RCxTQUF2RCxDQUFoQjs7QUFFQSxNQUFJLENBQUNQLEtBQUQsSUFBVSxDQUFDQyxRQUFmLEVBQXlCO0FBQ3ZCLFdBQU9GLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLGlDQUFyQixDQUFQO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFVBQU1ILE9BQU8sQ0FBQ0ksTUFBUixDQUFlO0FBQUVWLFdBQUY7QUFBU0MsY0FBVDtBQUFtQkMsVUFBbkI7QUFBeUJDLFdBQXpCO0FBQWdDQztBQUFoQyxLQUFmLENBQU47QUFFQSxRQUFJTyxTQUFTLEdBQUdKLDhGQUFBLENBQXlELFNBQXpELENBQWhCO0FBRUFJLGFBQVMsQ0FBQ0MsV0FBVixHQUxFLENBTUY7QUFDQTs7QUFFQWIsT0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkssR0FBaEI7QUFDRCxHQVZELENBVUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FmLE9BQUcsQ0FBQ1MsTUFBSixDQUFXTSxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLFVBQS9CLEVBQTJDUixJQUEzQyxDQUFnREssS0FBSyxDQUFDSSxPQUF0RDtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvc2lnbnVwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnblVwRW1haWxQYXNzd29yZEludGVyYWN0b3IgfSBmcm9tICdkb21haW4vbGliL3VzZWNhc2UvYXV0aCc7XG5pbXBvcnQgc2lnblVwQ29udGFpbmVyIGZyb20gJ2luZnJhL2xpYi9kZXBlbmRlbmN5LWluamVjdGlvbi9TaWduVXAvY29udGFpbmVyJztcbmltcG9ydCB7IEdxbFNpZ25VcEVtYWlsUGFzc3dvcmRQcmVzZW50ZXIgfSBmcm9tICdpbmZyYS9saWIvcHJlc2VudGVyL2F1dGgvU2lnblVwRW1haWxQYXNzd29yZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNpZ251cChyZXEsIHJlcykge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcm9sZXMsIGNyZWF0ZWRBdCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHVzZUNhc2UgPSBzaWduVXBDb250YWluZXIucmVzb2x2ZTxTaWduVXBFbWFpbFBhc3N3b3JkSW50ZXJhY3Rvcj4oJ3VzZUNhc2UnKTtcblxuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRW1haWwgYW5kIFBhc3N3b3JkIG5vdCBwcm92aWRlZCcpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCB1c2VDYXNlLmhhbmRsZSh7IGVtYWlsLCBwYXNzd29yZCwgbmFtZSwgcm9sZXMsIGNyZWF0ZWRBdCB9KTtcblxuICAgIGxldCBwcmVzZW50ZXIgPSBzaWduVXBDb250YWluZXIucmVzb2x2ZTxHcWxTaWduVXBFbWFpbFBhc3N3b3JkUHJlc2VudGVyPigndXNlQ2FzZScpO1xuXG4gICAgcHJlc2VudGVyLmdldFJlc3BvbnNlKCk7XG4gICAgLy8gc2V0QXV0aENvb2tpZShyZXMsIGF1dGguc2VjcmV0KTtcbiAgICAvLyBDb29raWVzLnNldCgndG9rZW4nLCB0b2tlbiwgeyBleHBpcmVzOiA2MCB9KVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoZXJyb3IucmVxdWVzdFJlc3VsdC5zdGF0dXNDb2RlKS5zZW5kKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/signup.ts\n");

/***/ }),

/***/ "infra/lib/dependency-injection/SignUp/container":
/*!******************************************************************!*\
  !*** external "infra/lib/dependency-injection/SignUp/container" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("infra/lib/dependency-injection/SignUp/container");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();