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

/***/ "./components/subjects/Warning.jsx":
/*!*****************************************!*\
  !*** ./components/subjects/Warning.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Warning = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function handleGoBack() {\n        router.back();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modal = document.getElementById(\"modalID\");\n        const showButtons = document.querySelectorAll(\"[data-modal-show]\");\n        const hideButtons = document.querySelectorAll(\"[data-modal-hide]\");\n        const toggleButtons = document.querySelectorAll(\"[data-modal-toggle]\");\n        // Show the modal when a button with data-modal-show=\"modalID\" is clicked\n        showButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.remove(\"hidden\");\n                modal.setAttribute(\"aria-hidden\", \"false\");\n            });\n        });\n        // Hide the modal when a button with data-modal-hide=\"modalID\" is clicked\n        hideButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.add(\"hidden\");\n                modal.setAttribute(\"aria-hidden\", \"true\");\n            });\n        });\n        // Toggle the modal when a button with data-modal-toggle=\"modalID\" is clicked\n        toggleButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.toggle(\"hidden\");\n                modal.getAttribute(\"aria-hidden\") === \"true\" ? modal.setAttribute(\"aria-hidden\", \"false\") : modal.setAttribute(\"aria-hidden\", \"true\");\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                \"data-modal-target\": \"modalID\",\n                \"data-modal-show\": \"modalID\",\n                \"data-modal-hide\": \"modalID\",\n                \"data-modal-toggle\": \"modalID\",\n                className: \"block w-72 mx-auto text-white border-2 bg-green-700 hover:bg-[#D3B306] pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                type: \"button\",\n                children: \"Terms and Conditions\"\n            }, void 0, false, {\n                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                lineNumber: 46,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"modalID\",\n                className: \"hidden fixed top-0 left-0 right-0 z-50 w-full p-20 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full\",\n                tabIndex: \"-1\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-full max-w-2xl md:h-auto mx-auto flex justify-center selection:items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        class: \"text-xl font-semibold text-gray-900 dark:text-white\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                                        \"data-modal-hide\": \"modalID\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                \"aria-hidden\": \"true\",\n                                                class: \"w-5 h-5\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 20 20\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    \"fill-rule\": \"evenodd\",\n                                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                    \"clip-rule\": \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 136\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"sr-only\",\n                                                children: \"hide modal\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"p-6 space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-hide\": \"modalID\",\n                                        type: \"button\",\n                                        class: \"text-white bg-green-700 hover:bg-[#D3B306] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                        children: \"I accept\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-hide\": \"modalID\",\n                                        onClick: handleGoBack,\n                                        type: \"button\",\n                                        class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                        children: \"Decline\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Warning, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Warning;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Warning);\nvar _c;\n$RefreshReg$(_c, \"Warning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3ViamVjdHMvV2FybmluZy5qc3g/ZDk1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBXYXJuaW5nID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUdvQmFjaygpIHtcbiAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbElEJyk7XG4gICAgY29uc3Qgc2hvd0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1zaG93XScpO1xuICAgIGNvbnN0IGhpZGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtaGlkZV0nKTtcbiAgICBjb25zdCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdG9nZ2xlXScpO1xuXG4gICAgLy8gU2hvdyB0aGUgbW9kYWwgd2hlbiBhIGJ1dHRvbiB3aXRoIGRhdGEtbW9kYWwtc2hvdz1cIm1vZGFsSURcIiBpcyBjbGlja2VkXG4gICAgc2hvd0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgdGhlIG1vZGFsIHdoZW4gYSBidXR0b24gd2l0aCBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCIgaXMgY2xpY2tlZFxuICAgIGhpZGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgbW9kYWwgd2hlbiBhIGJ1dHRvbiB3aXRoIGRhdGEtbW9kYWwtdG9nZ2xlPVwibW9kYWxJRFwiIGlzIGNsaWNrZWRcbiAgICB0b2dnbGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgbW9kYWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZSdcbiAgICAgICAgICA/IG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICAgICAgICAgIDogbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICA8YVxuICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsSURcIlxuICAgICAgICBkYXRhLW1vZGFsLXNob3c9XCJtb2RhbElEXCJcbiAgICAgICAgZGF0YS1tb2RhbC1oaWRlPVwibW9kYWxJRFwiXG4gICAgICAgIGRhdGEtbW9kYWwtdG9nZ2xlPVwibW9kYWxJRFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctNzIgbXgtYXV0byB0ZXh0LXdoaXRlIGJvcmRlci0yIGJnLWdyZWVuLTcwMCBob3ZlcjpiZy1bI0QzQjMwNl0gcG9pbnRlciBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXG4gICAgICA8L2E+IFxuXG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwibW9kYWxJRFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIHctZnVsbCBwLTIwIG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBtZDppbnNldC0wIGgtbW9kYWwgbWQ6aC1mdWxsXCJcbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbCBtYXgtdy0yeGwgbWQ6aC1hdXRvIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBzZWxlY3Rpb246aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtNCBib3JkZXItYiByb3VuZGVkLXQgZGFyazpib3JkZXItZ3JheS02MDBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LWdyYXktNDAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgcm91bmRlZC1sZyB0ZXh0LXNtIHAtMS41IG1sLWF1dG8gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCIgZGF0YS1tb2RhbC1oaWRlPVwibW9kYWxJRFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidy01IGgtNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5oaWRlIG1vZGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC02IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICBXaXRoIGxlc3MgdGhhbiBhIG1vbnRoIHRvIGdvIGJlZm9yZSB0aGUgRXVyb3BlYW4gVW5pb24gZW5hY3RzIG5ldyBjb25zdW1lciBwcml2YWN5IGxhd3MgZm9yIGl0cyBjaXRpemVucywgY29tcGFuaWVzIGFyb3VuZCB0aGUgd29ybGQgYXJlIHVwZGF0aW5nIHRoZWlyIHRlcm1zIG9mIHNlcnZpY2UgYWdyZWVtZW50cyB0byBjb21wbHkuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICBUaGUgRXVyb3BlYW4gVW5pb27igJlzIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEcuRC5QLlIuKSBnb2VzIGludG8gZWZmZWN0IG9uIE1heSAyNSBhbmQgaXMgbWVhbnQgdG8gZW5zdXJlIGEgY29tbW9uIHNldCBvZiBkYXRhIHJpZ2h0cyBpbiB0aGUgRXVyb3BlYW4gVW5pb24uIEl0IHJlcXVpcmVzIG9yZ2FuaXphdGlvbnMgdG8gbm90aWZ5IHVzZXJzIGFzIHNvb24gYXMgcG9zc2libGUgb2YgaGlnaC1yaXNrIGRhdGEgYnJlYWNoZXMgdGhhdCBjb3VsZCBwZXJzb25hbGx5IGFmZmVjdCB0aGVtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHAtNiBzcGFjZS14LTIgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtYiBkYXJrOmJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1tb2RhbC1oaWRlPVwibW9kYWxJRFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRleHQtd2hpdGUgYmctZ3JlZW4tNzAwIGhvdmVyOmJnLVsjRDNCMzA2XSBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5JIGFjY2VwdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1tb2RhbC1oaWRlPVwibW9kYWxJRFwiIG9uQ2xpY2s9e2hhbmRsZUdvQmFja30gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNSBweS0yLjUgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czp6LTEwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiPkRlY2xpbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC8+XG4pfVxuZXhwb3J0IGRlZmF1bHQgV2FybmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIldhcm5pbmciLCJyb3V0ZXIiLCJoYW5kbGVHb0JhY2siLCJiYWNrIiwibW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd0J1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGlkZUJ1dHRvbnMiLCJ0b2dnbGVCdXR0b25zIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJhZGQiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJhIiwiZGF0YS1tb2RhbC10YXJnZXQiLCJkYXRhLW1vZGFsLXNob3ciLCJkYXRhLW1vZGFsLWhpZGUiLCJkYXRhLW1vZGFsLXRvZ2dsZSIsImNsYXNzTmFtZSIsInR5cGUiLCJkaXYiLCJpZCIsInRhYkluZGV4IiwiYXJpYS1oaWRkZW4iLCJoMyIsImNsYXNzIiwic3ZnIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsLXJ1bGUiLCJkIiwiY2xpcC1ydWxlIiwic3BhbiIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/subjects/Warning.jsx\n"));

/***/ })

});