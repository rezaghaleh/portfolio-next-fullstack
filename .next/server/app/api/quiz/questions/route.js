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
exports.id = "app/api/quiz/questions/route";
exports.ids = ["app/api/quiz/questions/route"];
exports.modules = {

/***/ "(rsc)/./app/api/quiz/questions/route.ts":
/*!*****************************************!*\
  !*** ./app/api/quiz/questions/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _data_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/quiz */ \"(rsc)/./data/quiz.ts\");\n\n\nasync function GET() {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        questions: _data_quiz__WEBPACK_IMPORTED_MODULE_1__.publicQuizQuestions\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3F1aXovcXVlc3Rpb25zL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNPO0FBRTNDLGVBQWVFO0lBQ3BCLE9BQU9GLHFEQUFZQSxDQUFDRyxJQUFJLENBQUM7UUFBRUMsV0FBV0gsMkRBQW1CQTtJQUFDO0FBQzVEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1yZ2hhXFxPbmVEcml2ZVxcRGVza3RvcFxcUHJvamVjdHNcXHBvcnRmb2xpby1uZXh0LWZ1bGxzdGFja1xcYXBwXFxhcGlcXHF1aXpcXHF1ZXN0aW9uc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBwdWJsaWNRdWl6UXVlc3Rpb25zIH0gZnJvbSBcIkAvZGF0YS9xdWl6XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHF1ZXN0aW9uczogcHVibGljUXVpelF1ZXN0aW9ucyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwdWJsaWNRdWl6UXVlc3Rpb25zIiwiR0VUIiwianNvbiIsInF1ZXN0aW9ucyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/quiz/questions/route.ts\n");

/***/ }),

/***/ "(rsc)/./data/quiz.ts":
/*!**********************!*\
  !*** ./data/quiz.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   publicQuizQuestions: () => (/* binding */ publicQuizQuestions),\n/* harmony export */   quizQuestions: () => (/* binding */ quizQuestions)\n/* harmony export */ });\nconst quizQuestions = [\n    {\n        id: \"js-array-map\",\n        category: \"JavaScript\",\n        prompt: \"What does Array.prototype.map return?\",\n        options: [\n            \"The original array with items changed in place\",\n            \"A new array created from the callback result for each item\",\n            \"Only the first matching item\",\n            \"A boolean indicating whether all items passed\"\n        ],\n        correctOption: 1,\n        explanation: \"map always returns a new array with one output value for each input item.\"\n    },\n    {\n        id: \"java-interface\",\n        category: \"Java\",\n        prompt: \"Which statement best describes a Java interface?\",\n        options: [\n            \"It stores object instances in memory\",\n            \"It defines a contract that classes can implement\",\n            \"It is used only for database access\",\n            \"It replaces all abstract classes in every case\"\n        ],\n        correctOption: 1,\n        explanation: \"Interfaces define behavior contracts that classes agree to implement.\"\n    },\n    {\n        id: \"sql-join\",\n        category: \"SQL\",\n        prompt: \"Which join returns all rows from the left table and matching rows from the right table?\",\n        options: [\n            \"INNER JOIN\",\n            \"RIGHT JOIN\",\n            \"LEFT JOIN\",\n            \"CROSS JOIN\"\n        ],\n        correctOption: 2,\n        explanation: \"LEFT JOIN keeps all rows from the left table even when there is no right-side match.\"\n    },\n    {\n        id: \"api-status-code\",\n        category: \"APIs\",\n        prompt: \"Which HTTP status code is most appropriate when a resource is successfully created?\",\n        options: [\n            \"200\",\n            \"201\",\n            \"204\",\n            \"404\"\n        ],\n        correctOption: 1,\n        explanation: \"201 Created is the standard success response for a new resource.\"\n    },\n    {\n        id: \"debugging-root-cause\",\n        category: \"Debugging\",\n        prompt: \"What is usually the best first step when debugging a bug you can reproduce consistently?\",\n        options: [\n            \"Rewrite the entire feature\",\n            \"Add random fixes until one works\",\n            \"Reproduce it, isolate it, and inspect the failing path\",\n            \"Delete logs to reduce noise\"\n        ],\n        correctOption: 2,\n        explanation: \"Reproducibility and isolation are what make debugging efficient and reliable.\"\n    }\n];\nconst publicQuizQuestions = quizQuestions.map(({ correctOption, ...question })=>question);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYXRhL3F1aXoudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxNQUFNQSxnQkFBZ0M7SUFDM0M7UUFDRUMsSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztZQUNQO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsZUFBZTtRQUNmQyxhQUNFO0lBQ0o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxTQUFTO1lBQ1A7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxlQUFlO1FBQ2ZDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFNBQVM7WUFBQztZQUFjO1lBQWM7WUFBYTtTQUFhO1FBQ2hFQyxlQUFlO1FBQ2ZDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFNBQVM7WUFBQztZQUFPO1lBQU87WUFBTztTQUFNO1FBQ3JDQyxlQUFlO1FBQ2ZDLGFBQWE7SUFDZjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUDtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLGVBQWU7UUFDZkMsYUFDRTtJQUNKO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLHNCQUE0Q1AsY0FBY1EsR0FBRyxDQUN4RSxDQUFDLEVBQUVILGFBQWEsRUFBRSxHQUFHSSxVQUFVLEdBQUtBLFVBQ3BDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1yZ2hhXFxPbmVEcml2ZVxcRGVza3RvcFxcUHJvamVjdHNcXHBvcnRmb2xpby1uZXh0LWZ1bGxzdGFja1xcZGF0YVxccXVpei50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFB1YmxpY1F1aXpRdWVzdGlvbiwgUXVpelF1ZXN0aW9uIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHF1aXpRdWVzdGlvbnM6IFF1aXpRdWVzdGlvbltdID0gW1xuICB7XG4gICAgaWQ6IFwianMtYXJyYXktbWFwXCIsXG4gICAgY2F0ZWdvcnk6IFwiSmF2YVNjcmlwdFwiLFxuICAgIHByb21wdDogXCJXaGF0IGRvZXMgQXJyYXkucHJvdG90eXBlLm1hcCByZXR1cm4/XCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgXCJUaGUgb3JpZ2luYWwgYXJyYXkgd2l0aCBpdGVtcyBjaGFuZ2VkIGluIHBsYWNlXCIsXG4gICAgICBcIkEgbmV3IGFycmF5IGNyZWF0ZWQgZnJvbSB0aGUgY2FsbGJhY2sgcmVzdWx0IGZvciBlYWNoIGl0ZW1cIixcbiAgICAgIFwiT25seSB0aGUgZmlyc3QgbWF0Y2hpbmcgaXRlbVwiLFxuICAgICAgXCJBIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGFsbCBpdGVtcyBwYXNzZWRcIlxuICAgIF0sXG4gICAgY29ycmVjdE9wdGlvbjogMSxcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwibWFwIGFsd2F5cyByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggb25lIG91dHB1dCB2YWx1ZSBmb3IgZWFjaCBpbnB1dCBpdGVtLlwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJqYXZhLWludGVyZmFjZVwiLFxuICAgIGNhdGVnb3J5OiBcIkphdmFcIixcbiAgICBwcm9tcHQ6IFwiV2hpY2ggc3RhdGVtZW50IGJlc3QgZGVzY3JpYmVzIGEgSmF2YSBpbnRlcmZhY2U/XCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgXCJJdCBzdG9yZXMgb2JqZWN0IGluc3RhbmNlcyBpbiBtZW1vcnlcIixcbiAgICAgIFwiSXQgZGVmaW5lcyBhIGNvbnRyYWN0IHRoYXQgY2xhc3NlcyBjYW4gaW1wbGVtZW50XCIsXG4gICAgICBcIkl0IGlzIHVzZWQgb25seSBmb3IgZGF0YWJhc2UgYWNjZXNzXCIsXG4gICAgICBcIkl0IHJlcGxhY2VzIGFsbCBhYnN0cmFjdCBjbGFzc2VzIGluIGV2ZXJ5IGNhc2VcIlxuICAgIF0sXG4gICAgY29ycmVjdE9wdGlvbjogMSxcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiSW50ZXJmYWNlcyBkZWZpbmUgYmVoYXZpb3IgY29udHJhY3RzIHRoYXQgY2xhc3NlcyBhZ3JlZSB0byBpbXBsZW1lbnQuXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcInNxbC1qb2luXCIsXG4gICAgY2F0ZWdvcnk6IFwiU1FMXCIsXG4gICAgcHJvbXB0OiBcIldoaWNoIGpvaW4gcmV0dXJucyBhbGwgcm93cyBmcm9tIHRoZSBsZWZ0IHRhYmxlIGFuZCBtYXRjaGluZyByb3dzIGZyb20gdGhlIHJpZ2h0IHRhYmxlP1wiLFxuICAgIG9wdGlvbnM6IFtcIklOTkVSIEpPSU5cIiwgXCJSSUdIVCBKT0lOXCIsIFwiTEVGVCBKT0lOXCIsIFwiQ1JPU1MgSk9JTlwiXSxcbiAgICBjb3JyZWN0T3B0aW9uOiAyLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJMRUZUIEpPSU4ga2VlcHMgYWxsIHJvd3MgZnJvbSB0aGUgbGVmdCB0YWJsZSBldmVuIHdoZW4gdGhlcmUgaXMgbm8gcmlnaHQtc2lkZSBtYXRjaC5cIlxuICB9LFxuICB7XG4gICAgaWQ6IFwiYXBpLXN0YXR1cy1jb2RlXCIsXG4gICAgY2F0ZWdvcnk6IFwiQVBJc1wiLFxuICAgIHByb21wdDogXCJXaGljaCBIVFRQIHN0YXR1cyBjb2RlIGlzIG1vc3QgYXBwcm9wcmlhdGUgd2hlbiBhIHJlc291cmNlIGlzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkP1wiLFxuICAgIG9wdGlvbnM6IFtcIjIwMFwiLCBcIjIwMVwiLCBcIjIwNFwiLCBcIjQwNFwiXSxcbiAgICBjb3JyZWN0T3B0aW9uOiAxLFxuICAgIGV4cGxhbmF0aW9uOiBcIjIwMSBDcmVhdGVkIGlzIHRoZSBzdGFuZGFyZCBzdWNjZXNzIHJlc3BvbnNlIGZvciBhIG5ldyByZXNvdXJjZS5cIlxuICB9LFxuICB7XG4gICAgaWQ6IFwiZGVidWdnaW5nLXJvb3QtY2F1c2VcIixcbiAgICBjYXRlZ29yeTogXCJEZWJ1Z2dpbmdcIixcbiAgICBwcm9tcHQ6IFwiV2hhdCBpcyB1c3VhbGx5IHRoZSBiZXN0IGZpcnN0IHN0ZXAgd2hlbiBkZWJ1Z2dpbmcgYSBidWcgeW91IGNhbiByZXByb2R1Y2UgY29uc2lzdGVudGx5P1wiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIFwiUmV3cml0ZSB0aGUgZW50aXJlIGZlYXR1cmVcIixcbiAgICAgIFwiQWRkIHJhbmRvbSBmaXhlcyB1bnRpbCBvbmUgd29ya3NcIixcbiAgICAgIFwiUmVwcm9kdWNlIGl0LCBpc29sYXRlIGl0LCBhbmQgaW5zcGVjdCB0aGUgZmFpbGluZyBwYXRoXCIsXG4gICAgICBcIkRlbGV0ZSBsb2dzIHRvIHJlZHVjZSBub2lzZVwiXG4gICAgXSxcbiAgICBjb3JyZWN0T3B0aW9uOiAyLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJSZXByb2R1Y2liaWxpdHkgYW5kIGlzb2xhdGlvbiBhcmUgd2hhdCBtYWtlIGRlYnVnZ2luZyBlZmZpY2llbnQgYW5kIHJlbGlhYmxlLlwiXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBwdWJsaWNRdWl6UXVlc3Rpb25zOiBQdWJsaWNRdWl6UXVlc3Rpb25bXSA9IHF1aXpRdWVzdGlvbnMubWFwKFxuICAoeyBjb3JyZWN0T3B0aW9uLCAuLi5xdWVzdGlvbiB9KSA9PiBxdWVzdGlvblxuKTtcbiJdLCJuYW1lcyI6WyJxdWl6UXVlc3Rpb25zIiwiaWQiLCJjYXRlZ29yeSIsInByb21wdCIsIm9wdGlvbnMiLCJjb3JyZWN0T3B0aW9uIiwiZXhwbGFuYXRpb24iLCJwdWJsaWNRdWl6UXVlc3Rpb25zIiwibWFwIiwicXVlc3Rpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./data/quiz.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquiz%2Fquestions%2Froute&page=%2Fapi%2Fquiz%2Fquestions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fquestions%2Froute.ts&appDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquiz%2Fquestions%2Froute&page=%2Fapi%2Fquiz%2Fquestions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fquestions%2Froute.ts&appDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mrgha_OneDrive_Desktop_Projects_portfolio_next_fullstack_app_api_quiz_questions_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/quiz/questions/route.ts */ \"(rsc)/./app/api/quiz/questions/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/quiz/questions/route\",\n        pathname: \"/api/quiz/questions\",\n        filename: \"route\",\n        bundlePath: \"app/api/quiz/questions/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mrgha\\\\OneDrive\\\\Desktop\\\\Projects\\\\portfolio-next-fullstack\\\\app\\\\api\\\\quiz\\\\questions\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mrgha_OneDrive_Desktop_Projects_portfolio_next_fullstack_app_api_quiz_questions_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZxdWl6JTJGcXVlc3Rpb25zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZxdWl6JTJGcXVlc3Rpb25zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcXVpeiUyRnF1ZXN0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtcmdoYSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1Byb2plY3RzJTVDcG9ydGZvbGlvLW5leHQtZnVsbHN0YWNrJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNtcmdoYSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1Byb2plY3RzJTVDcG9ydGZvbGlvLW5leHQtZnVsbHN0YWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0RDtBQUN6STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbXJnaGFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxwb3J0Zm9saW8tbmV4dC1mdWxsc3RhY2tcXFxcYXBwXFxcXGFwaVxcXFxxdWl6XFxcXHF1ZXN0aW9uc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcXVpei9xdWVzdGlvbnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9xdWl6L3F1ZXN0aW9uc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcXVpei9xdWVzdGlvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtcmdoYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFByb2plY3RzXFxcXHBvcnRmb2xpby1uZXh0LWZ1bGxzdGFja1xcXFxhcHBcXFxcYXBpXFxcXHF1aXpcXFxccXVlc3Rpb25zXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquiz%2Fquestions%2Froute&page=%2Fapi%2Fquiz%2Fquestions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fquestions%2Froute.ts&appDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquiz%2Fquestions%2Froute&page=%2Fapi%2Fquiz%2Fquestions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fquestions%2Froute.ts&appDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrgha%5COneDrive%5CDesktop%5CProjects%5Cportfolio-next-fullstack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();