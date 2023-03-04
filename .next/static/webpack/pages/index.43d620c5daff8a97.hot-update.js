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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Warning = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const modal = document.getElementById(\"modalID\");\n        const showButtons = document.querySelectorAll(\"[data-modal-show]\");\n        const hideButtons = document.querySelectorAll(\"[data-modal-hide]\");\n        const toggleButtons = document.querySelectorAll(\"[data-modal-toggle]\");\n        // Show the modal when a button with data-modal-show=\"modalID\" is clicked\n        showButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.remove(\"hidden\");\n                modal.setAttribute(\"aria-hidden\", \"false\");\n            });\n        });\n        // Hide the modal when a button with data-modal-hide=\"modalID\" is clicked\n        hideButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.add(\"hidden\");\n                modal.setAttribute(\"aria-hidden\", \"true\");\n            });\n        });\n        // Toggle the modal when a button with data-modal-toggle=\"modalID\" is clicked\n        toggleButtons.forEach((button)=>{\n            button.addEventListener(\"click\", ()=>{\n                modal.classList.toggle(\"hidden\");\n                modal.getAttribute(\"aria-hidden\") === \"true\" ? modal.setAttribute(\"aria-hidden\", \"false\") : modal.setAttribute(\"aria-hidden\", \"true\");\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                \"data-modal-target\": \"modalID\",\n                \"data-modal-show\": \"modalID\",\n                \"data-modal-hide\": \"modalID\",\n                \"data-modal-toggle\": \"modalID\",\n                className: \"block w-72 mx-auto text-white border-2 bg-green-700 pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                type: \"button\",\n                children: \"Terms and Conditions\"\n            }, void 0, false, {\n                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                lineNumber: 39,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"modalID\",\n                className: \"hidden fixed top-0 left-0 right-0 z-50 w-full p-20 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full\",\n                tabIndex: \"-1\",\n                \"aria-hidden\": \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-full max-w-2xl md:h-auto mx-auto flex justify-center selection:items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-white rounded-lg shadow dark:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        class: \"text-xl font-semibold text-gray-900 dark:text-white\",\n                                        children: \"Terms of Service\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        class: \"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\",\n                                        \"data-modal-hide\": \"modalID\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                \"aria-hidden\": \"true\",\n                                                class: \"w-5 h-5\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 20 20\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    \"fill-rule\": \"evenodd\",\n                                                    d: \"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\",\n                                                    \"clip-rule\": \"evenodd\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 136\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"sr-only\",\n                                                children: \"hide modal\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"p-6 space-y-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"text-base leading-relaxed text-gray-500 dark:text-gray-400\",\n                                        children: \"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-hide\": \"modalID\",\n                                        type: \"button\",\n                                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                        children: \"I accept\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        \"data-modal-hide\": \"modalID\",\n                                        type: \"button\",\n                                        class: \"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\",\n                                        children: \"Decline\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/harold/Desktop/pucupathfinder/components/subjects/Warning.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Warning, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Warning;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Warning);\nvar _c;\n$RefreshReg$(_c, \"Warning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YmplY3RzL1dhcm5pbmcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXlDO0FBRXpDLE1BQU1FLFVBQVUsSUFBTTs7SUFDcEJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNRSxRQUFRQyxTQUFTQyxjQUFjLENBQUM7UUFDdEMsTUFBTUMsY0FBY0YsU0FBU0csZ0JBQWdCLENBQUM7UUFDOUMsTUFBTUMsY0FBY0osU0FBU0csZ0JBQWdCLENBQUM7UUFDOUMsTUFBTUUsZ0JBQWdCTCxTQUFTRyxnQkFBZ0IsQ0FBQztRQUVoRCx5RUFBeUU7UUFDekVELFlBQVlJLE9BQU8sQ0FBQyxDQUFDQyxTQUFXO1lBQzlCQSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTLElBQU07Z0JBQ3JDVCxNQUFNVSxTQUFTLENBQUNDLE1BQU0sQ0FBQztnQkFDdkJYLE1BQU1ZLFlBQVksQ0FBQyxlQUFlO1lBQ3BDO1FBQ0Y7UUFFQSx5RUFBeUU7UUFDekVQLFlBQVlFLE9BQU8sQ0FBQyxDQUFDQyxTQUFXO1lBQzlCQSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTLElBQU07Z0JBQ3JDVCxNQUFNVSxTQUFTLENBQUNHLEdBQUcsQ0FBQztnQkFDcEJiLE1BQU1ZLFlBQVksQ0FBQyxlQUFlO1lBQ3BDO1FBQ0Y7UUFFQSw2RUFBNkU7UUFDN0VOLGNBQWNDLE9BQU8sQ0FBQyxDQUFDQyxTQUFXO1lBQ2hDQSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTLElBQU07Z0JBQ3JDVCxNQUFNVSxTQUFTLENBQUNJLE1BQU0sQ0FBQztnQkFDdkJkLE1BQU1lLFlBQVksQ0FBQyxtQkFBbUIsU0FDbENmLE1BQU1ZLFlBQVksQ0FBQyxlQUFlLFdBQ2xDWixNQUFNWSxZQUFZLENBQUMsZUFBZSxPQUFPO1lBQy9DO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0csOERBQUNJO2dCQUNBQyxxQkFBa0I7Z0JBQ2xCQyxtQkFBZ0I7Z0JBQ2hCQyxtQkFBZ0I7Z0JBQ2hCQyxxQkFBa0I7Z0JBQ2xCQyxXQUFVO2dCQUNWQyxNQUFLOzBCQUNOOzs7Ozs7MEJBSUQsOERBQUNDO2dCQUNDQyxJQUFHO2dCQUNISCxXQUFVO2dCQUNWSSxVQUFTO2dCQUNUQyxlQUFZOzBCQUVaLDRFQUFDSDtvQkFBSUYsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBSUYsV0FBVTs7a0RBQ2YsOERBQUNNO3dDQUFHQyxPQUFNO2tEQUFzRDs7Ozs7O2tEQUc1RCw4REFBQ3BCO3dDQUFPYyxNQUFLO3dDQUFTTSxPQUFNO3dDQUE0S1QsbUJBQWdCOzswREFDcE4sOERBQUNVO2dEQUFJSCxlQUFZO2dEQUFPRSxPQUFNO2dEQUFVRSxNQUFLO2dEQUFlQyxTQUFRO2dEQUFZQyxPQUFNOzBEQUE2Qiw0RUFBQ0M7b0RBQUtDLGFBQVU7b0RBQVVDLEdBQUU7b0RBQXFNQyxhQUFVOzs7Ozs7Ozs7OzswREFDOVYsOERBQUNDO2dEQUFLVCxPQUFNOzBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzlCLDhEQUFDTDtnQ0FBSUssT0FBTTs7a0RBQ1AsOERBQUNVO3dDQUFFVixPQUFNO2tEQUE2RDs7Ozs7O2tEQUd0RSw4REFBQ1U7d0NBQUVWLE9BQU07a0RBQTZEOzs7Ozs7Ozs7Ozs7MENBSTFFLDhEQUFDTDtnQ0FBSUssT0FBTTs7a0RBQ1AsOERBQUNwQjt3Q0FBT1csbUJBQWdCO3dDQUFVRyxNQUFLO3dDQUFTTSxPQUFNO2tEQUF1Tjs7Ozs7O2tEQUM3USw4REFBQ3BCO3dDQUFPVyxtQkFBZ0I7d0NBQVVHLE1BQUs7d0NBQVNNLE9BQU07a0RBQStUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcFk7R0FoRks3QjtLQUFBQTtBQWlGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N1YmplY3RzL1dhcm5pbmcuanN4P2Q5NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2FybmluZyA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbElEJyk7XG4gICAgY29uc3Qgc2hvd0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1zaG93XScpO1xuICAgIGNvbnN0IGhpZGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtaGlkZV0nKTtcbiAgICBjb25zdCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdG9nZ2xlXScpO1xuXG4gICAgLy8gU2hvdyB0aGUgbW9kYWwgd2hlbiBhIGJ1dHRvbiB3aXRoIGRhdGEtbW9kYWwtc2hvdz1cIm1vZGFsSURcIiBpcyBjbGlja2VkXG4gICAgc2hvd0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgdGhlIG1vZGFsIHdoZW4gYSBidXR0b24gd2l0aCBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCIgaXMgY2xpY2tlZFxuICAgIGhpZGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgbW9kYWwgd2hlbiBhIGJ1dHRvbiB3aXRoIGRhdGEtbW9kYWwtdG9nZ2xlPVwibW9kYWxJRFwiIGlzIGNsaWNrZWRcbiAgICB0b2dnbGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgbW9kYWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZSdcbiAgICAgICAgICA/IG1vZGFsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICAgICAgICAgIDogbW9kYWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICA8YVxuICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsSURcIlxuICAgICAgICBkYXRhLW1vZGFsLXNob3c9XCJtb2RhbElEXCJcbiAgICAgICAgZGF0YS1tb2RhbC1oaWRlPVwibW9kYWxJRFwiXG4gICAgICAgIGRhdGEtbW9kYWwtdG9nZ2xlPVwibW9kYWxJRFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctNzIgbXgtYXV0byB0ZXh0LXdoaXRlIGJvcmRlci0yIGJnLWdyZWVuLTcwMCBwb2ludGVyIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnNcbiAgICAgIDwvYT4gXG5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJtb2RhbElEXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdy1mdWxsIHAtMjAgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIG1kOmluc2V0LTAgaC1tb2RhbCBtZDpoLWZ1bGxcIlxuICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIG1heC13LTJ4bCBtZDpoLWF1dG8gbXgtYXV0byBmbGV4IGp1c3RpZnktY2VudGVyIHNlbGVjdGlvbjppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC00IGJvcmRlci1iIHJvdW5kZWQtdCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIFRlcm1zIG9mIFNlcnZpY2VcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC1ncmF5LTQwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNSBtbC1hdXRvIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiIGRhdGEtbW9kYWwtaGlkZT1cIm1vZGFsSURcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cInctNSBoLTVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+aGlkZSBtb2RhbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNiBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgV2l0aCBsZXNzIHRoYW4gYSBtb250aCB0byBnbyBiZWZvcmUgdGhlIEV1cm9wZWFuIFVuaW9uIGVuYWN0cyBuZXcgY29uc3VtZXIgcHJpdmFjeSBsYXdzIGZvciBpdHMgY2l0aXplbnMsIGNvbXBhbmllcyBhcm91bmQgdGhlIHdvcmxkIGFyZSB1cGRhdGluZyB0aGVpciB0ZXJtcyBvZiBzZXJ2aWNlIGFncmVlbWVudHMgdG8gY29tcGx5LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhlIEV1cm9wZWFuIFVuaW9u4oCZcyBHZW5lcmFsIERhdGEgUHJvdGVjdGlvbiBSZWd1bGF0aW9uIChHLkQuUC5SLikgZ29lcyBpbnRvIGVmZmVjdCBvbiBNYXkgMjUgYW5kIGlzIG1lYW50IHRvIGVuc3VyZSBhIGNvbW1vbiBzZXQgb2YgZGF0YSByaWdodHMgaW4gdGhlIEV1cm9wZWFuIFVuaW9uLiBJdCByZXF1aXJlcyBvcmdhbml6YXRpb25zIHRvIG5vdGlmeSB1c2VycyBhcyBzb29uIGFzIHBvc3NpYmxlIG9mIGhpZ2gtcmlzayBkYXRhIGJyZWFjaGVzIHRoYXQgY291bGQgcGVyc29uYWxseSBhZmZlY3QgdGhlbS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTYgc3BhY2UteC0yIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWIgZGFyazpib3JkZXItZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtbW9kYWwtaGlkZT1cIm1vZGFsSURcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPkkgYWNjZXB0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW1vZGFsLWhpZGU9XCJtb2RhbElEXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNSBweS0yLjUgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czp6LTEwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiPkRlY2xpbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC8+XG4pfVxuZXhwb3J0IGRlZmF1bHQgV2FybmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIldhcm5pbmciLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaG93QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaWRlQnV0dG9ucyIsInRvZ2dsZUJ1dHRvbnMiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldEF0dHJpYnV0ZSIsImFkZCIsInRvZ2dsZSIsImdldEF0dHJpYnV0ZSIsImEiLCJkYXRhLW1vZGFsLXRhcmdldCIsImRhdGEtbW9kYWwtc2hvdyIsImRhdGEtbW9kYWwtaGlkZSIsImRhdGEtbW9kYWwtdG9nZ2xlIiwiY2xhc3NOYW1lIiwidHlwZSIsImRpdiIsImlkIiwidGFiSW5kZXgiLCJhcmlhLWhpZGRlbiIsImgzIiwiY2xhc3MiLCJzdmciLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJzcGFuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/subjects/Warning.jsx\n"));

/***/ })

});