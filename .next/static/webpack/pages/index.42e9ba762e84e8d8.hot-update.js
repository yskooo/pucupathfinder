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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Warning = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function handleGoBack() {\n        router.back();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modal = document.getElementById(\"modalID\");\n        const showButtons = document.querySelectorAll(\"[data-modal-show]\");\n        const hideButtons = document.querySelectorAll(\"[data-modal-hide]\");\n        const toggleButtons = document.querySelectorAll(\"[data-modal-toggle]\");\n        // Show the modal when a button with data-modal-show=\"modalID\" is clicked\n        showButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.remove(\"hidden\");\n                modal.setAttribute(\"aria-hidden\", \"false\");\n            });\n        });\n        // Hide the modal when a button with data-modal-hide=\"modalID\" is clicked\n        hideButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.add(\"hidden\");\n                modal.setAttribute(\"aria-hidden\", \"true\");\n            });\n        });\n        // Toggle the modal when a button with data-modal-toggle=\"modalID\" is clicked\n        toggleButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.toggle(\"hidden\");\n                modal.getAttribute(\"aria-hidden\") === \"true\" ? modal.setAttribute(\"aria-hidden\", \"false\") : modal.setAttribute(\"aria-hidden\", \"true\");\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                \"data-modal-target\": \"modalID\",\n                \"data-modal-show\": \"modalID\",\n                \"data-modal-hide\": \"modalID\",\n                \"data-modal-toggle\": \"modalID\",\n                className: \"block w-72 mx-auto text-white border-2 bg-green-700 hover:bg-[#D3B306] pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                type: \"button\",\n                children: \"Terms and Conditions\"\n            }, void 0, false, {\n                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                lineNumber: 46,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"modalID\",\n                className: \"hidden fixed top-0 left-0 right-0 z-50 w-full p-20 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full\",\n                tabIndex: \"-1\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-full max-w-2xl md:h-auto mx-auto flex justify-center selection:items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        class: \"text-xl font-semibold text-gray-900 dark:text-white\",\n                                        children: \"Terms and Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                                        \"data-modal-hide\": \"modalID\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                \"aria-hidden\": \"true\",\n                                                class: \"w-5 h-5\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 20 20\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    \"fill-rule\": \"evenodd\",\n                                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                    \"clip-rule\": \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 136\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"sr-only\",\n                                                children: \"hide modal\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"p-6 space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Welcome to our online library of research studies! Before accessing our resources, please carefully read and understand our terms and conditions:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"Proper Citations and References: All users are required to provide accurate and appropriate citations and references when using the research studies for academic or professional purposes. Privacy and Confidentiality: All users must respect the privacy and confidentiality of any personal information contained in the research studies. Commercial and Illegal Use: The research studies are strictly for professional and academic use only. Any commercial or illegal use is strictly prohibited. Modification and Alteration: The users are prohibited from modifying, manipulating, or altering the research studies in any way without prior written permission from the library management. We take the violation of these terms and conditions very seriously, and any offenders will face appropriate legal action. The library management reserves the right to remove any research study from our online library without prior notice or explanation. By accessing our online library of research studies, you agree to comply with the above terms and conditions. Please note that the library is not liable for any consequences arising from the use or misuse of the research studies. We request all users to use the resources for academic and professional purposes only and to respect the intellectual property rights of the authors. We welcome all individuals to access our online library of research studies, which is intended to serve as a valuable resource for professional and academic use only. We encourage all users to make the best use of these resources while respecting the terms and conditions outlined above. Thank you for your cooperation!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-hide\": \"modalID\",\n                                        type: \"button\",\n                                        class: \"text-white bg-green-700 hover:bg-[#D3B306] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                        children: \"I accept\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-hide\": \"modalID\",\n                                        onClick: handleGoBack,\n                                        type: \"button\",\n                                        class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                        children: \"Decline\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Warning, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Warning;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Warning);\nvar _c;\n$RefreshReg$(_c, \"Warning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWJqZWN0cy9XYXJuaW5nLmpzeD9kOTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFdhcm5pbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlR29CYWNrKCkge1xuICAgICAgICByb3V0ZXIuYmFjaygpO1xuICAgIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsSUQnKTtcbiAgICBjb25zdCBzaG93QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXNob3ddJyk7XG4gICAgY29uc3QgaGlkZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1oaWRlXScpO1xuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10b2dnbGVdJyk7XG5cbiAgICAvLyBTaG93IHRoZSBtb2RhbCB3aGVuIGEgYnV0dG9uIHdpdGggZGF0YS1tb2RhbC1zaG93PVwibW9kYWxJRFwiIGlzIGNsaWNrZWRcbiAgICBzaG93QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSGlkZSB0aGUgbW9kYWwgd2hlbiBhIGJ1dHRvbiB3aXRoIGRhdGEtbW9kYWwtaGlkZT1cIm1vZGFsSURcIiBpcyBjbGlja2VkXG4gICAgaGlkZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBtb2RhbCB3aGVuIGEgYnV0dG9uIHdpdGggZGF0YS1tb2RhbC10b2dnbGU9XCJtb2RhbElEXCIgaXMgY2xpY2tlZFxuICAgIHRvZ2dsZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJ1xuICAgICAgICAgID8gbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gICAgICAgICAgOiBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgIDxhXG4gICAgICAgIGRhdGEtbW9kYWwtdGFyZ2V0PVwibW9kYWxJRFwiXG4gICAgICAgIGRhdGEtbW9kYWwtc2hvdz1cIm1vZGFsSURcIlxuICAgICAgICBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCJcbiAgICAgICAgZGF0YS1tb2RhbC10b2dnbGU9XCJtb2RhbElEXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy03MiBteC1hdXRvIHRleHQtd2hpdGUgYm9yZGVyLTIgYmctZ3JlZW4tNzAwIGhvdmVyOmJnLVsjRDNCMzA2XSBwb2ludGVyIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnNcbiAgICAgIDwvYT4gXG5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJtb2RhbElEXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdy1mdWxsIHAtMjAgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIG1kOmluc2V0LTAgaC1tb2RhbCBtZDpoLWZ1bGxcIlxuICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIG1heC13LTJ4bCBtZDpoLWF1dG8gbXgtYXV0byBmbGV4IGp1c3RpZnktY2VudGVyIHNlbGVjdGlvbjppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC00IGJvcmRlci1iIHJvdW5kZWQtdCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRleHQtZ3JheS00MDAgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JheS0yMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIHRleHQtc20gcC0xLjUgbWwtYXV0byBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3LTUgaC01XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPmhpZGUgbW9kYWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTYgc3BhY2UteS02XCI+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byBvdXIgb25saW5lIGxpYnJhcnkgb2YgcmVzZWFyY2ggc3R1ZGllcyEgQmVmb3JlIGFjY2Vzc2luZyBvdXIgcmVzb3VyY2VzLCBwbGVhc2UgY2FyZWZ1bGx5IHJlYWQgYW5kIHVuZGVyc3RhbmQgb3VyIHRlcm1zIGFuZCBjb25kaXRpb25zOjwvaDE+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cblByb3BlciBDaXRhdGlvbnMgYW5kIFJlZmVyZW5jZXM6IEFsbCB1c2VycyBhcmUgcmVxdWlyZWQgdG8gcHJvdmlkZSBhY2N1cmF0ZSBhbmQgYXBwcm9wcmlhdGUgY2l0YXRpb25zIGFuZCByZWZlcmVuY2VzIHdoZW4gdXNpbmcgdGhlIHJlc2VhcmNoIHN0dWRpZXMgZm9yIGFjYWRlbWljIG9yIHByb2Zlc3Npb25hbCBwdXJwb3Nlcy5cblxuUHJpdmFjeSBhbmQgQ29uZmlkZW50aWFsaXR5OiBBbGwgdXNlcnMgbXVzdCByZXNwZWN0IHRoZSBwcml2YWN5IGFuZCBjb25maWRlbnRpYWxpdHkgb2YgYW55IHBlcnNvbmFsIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBpbiB0aGUgcmVzZWFyY2ggc3R1ZGllcy5cblxuQ29tbWVyY2lhbCBhbmQgSWxsZWdhbCBVc2U6IFRoZSByZXNlYXJjaCBzdHVkaWVzIGFyZSBzdHJpY3RseSBmb3IgcHJvZmVzc2lvbmFsIGFuZCBhY2FkZW1pYyB1c2Ugb25seS4gQW55IGNvbW1lcmNpYWwgb3IgaWxsZWdhbCB1c2UgaXMgc3RyaWN0bHkgcHJvaGliaXRlZC5cblxuTW9kaWZpY2F0aW9uIGFuZCBBbHRlcmF0aW9uOiBUaGUgdXNlcnMgYXJlIHByb2hpYml0ZWQgZnJvbSBtb2RpZnlpbmcsIG1hbmlwdWxhdGluZywgb3IgYWx0ZXJpbmcgdGhlIHJlc2VhcmNoIHN0dWRpZXMgaW4gYW55IHdheSB3aXRob3V0IHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbiBmcm9tIHRoZSBsaWJyYXJ5IG1hbmFnZW1lbnQuXG5cbldlIHRha2UgdGhlIHZpb2xhdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyB2ZXJ5IHNlcmlvdXNseSwgYW5kIGFueSBvZmZlbmRlcnMgd2lsbCBmYWNlIGFwcHJvcHJpYXRlIGxlZ2FsIGFjdGlvbi4gVGhlIGxpYnJhcnkgbWFuYWdlbWVudCByZXNlcnZlcyB0aGUgcmlnaHQgdG8gcmVtb3ZlIGFueSByZXNlYXJjaCBzdHVkeSBmcm9tIG91ciBvbmxpbmUgbGlicmFyeSB3aXRob3V0IHByaW9yIG5vdGljZSBvciBleHBsYW5hdGlvbi5cblxuQnkgYWNjZXNzaW5nIG91ciBvbmxpbmUgbGlicmFyeSBvZiByZXNlYXJjaCBzdHVkaWVzLCB5b3UgYWdyZWUgdG8gY29tcGx5IHdpdGggdGhlIGFib3ZlIHRlcm1zIGFuZCBjb25kaXRpb25zLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBsaWJyYXJ5IGlzIG5vdCBsaWFibGUgZm9yIGFueSBjb25zZXF1ZW5jZXMgYXJpc2luZyBmcm9tIHRoZSB1c2Ugb3IgbWlzdXNlIG9mIHRoZSByZXNlYXJjaCBzdHVkaWVzLiBXZSByZXF1ZXN0IGFsbCB1c2VycyB0byB1c2UgdGhlIHJlc291cmNlcyBmb3IgYWNhZGVtaWMgYW5kIHByb2Zlc3Npb25hbCBwdXJwb3NlcyBvbmx5IGFuZCB0byByZXNwZWN0IHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzIG9mIHRoZSBhdXRob3JzLlxuXG5XZSB3ZWxjb21lIGFsbCBpbmRpdmlkdWFscyB0byBhY2Nlc3Mgb3VyIG9ubGluZSBsaWJyYXJ5IG9mIHJlc2VhcmNoIHN0dWRpZXMsIHdoaWNoIGlzIGludGVuZGVkIHRvIHNlcnZlIGFzIGEgdmFsdWFibGUgcmVzb3VyY2UgZm9yIHByb2Zlc3Npb25hbCBhbmQgYWNhZGVtaWMgdXNlIG9ubHkuIFdlIGVuY291cmFnZSBhbGwgdXNlcnMgdG8gbWFrZSB0aGUgYmVzdCB1c2Ugb2YgdGhlc2UgcmVzb3VyY2VzIHdoaWxlIHJlc3BlY3RpbmcgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG91dGxpbmVkIGFib3ZlLiBUaGFuayB5b3UgZm9yIHlvdXIgY29vcGVyYXRpb24hXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcC02IHNwYWNlLXgtMiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1iIGRhcms6Ym9yZGVyLWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmVlbi03MDAgaG92ZXI6YmctWyNEM0IzMDZdIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPkkgYWNjZXB0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCIgb25DbGljaz17aGFuZGxlR29CYWNrfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1zbSBmb250LW1lZGl1bSBweC01IHB5LTIuNSBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOnotMTAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCI+RGVjbGluZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48Lz5cbil9XG5leHBvcnQgZGVmYXVsdCBXYXJuaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiV2FybmluZyIsInJvdXRlciIsImhhbmRsZUdvQmFjayIsImJhY2siLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaWRlQnV0dG9ucyIsInRvZ2dsZUJ1dHRvbnMiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldEF0dHJpYnV0ZSIsImFkZCIsInRvZ2dsZSIsImdldEF0dHJpYnV0ZSIsImEiLCJkYXRhLW1vZGFsLXRhcmdldCIsImRhdGEtbW9kYWwtc2hvdyIsImRhdGEtbW9kYWwtaGlkZSIsImRhdGEtbW9kYWwtdG9nZ2xlIiwiY2xhc3NOYW1lIiwidHlwZSIsImRpdiIsImlkIiwidGFiSW5kZXgiLCJhcmlhLWhpZGRlbiIsImgzIiwiY2xhc3MiLCJzdmciLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJzcGFuIiwiaDEiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subjects/Warning.jsx\n"));

/***/ })

});