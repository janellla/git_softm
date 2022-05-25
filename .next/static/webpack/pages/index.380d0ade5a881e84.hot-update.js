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

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ \"./components/Search.js\");\n/* harmony import */ var _Poster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Poster */ \"./components/Poster.js\");\n/* harmony import */ var _Track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Track */ \"./components/Track.js\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dropdown */ \"./components/Dropdown.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Body(param) {\n    var spotifyApi = param.spotifyApi, chooseTrack = param.chooseTrack;\n    var _this = this;\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref.data;\n    var accessToken = session.accessToken;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), search = ref1[0], setSearch = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), searchResults = ref2[0], setSearchResults = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), newReleases = ref3[0], setNewReleases = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!accessToken) return;\n        spotifyApi.setAccessToken(accessToken);\n    }, [\n        accessToken\n    ]);\n    //searching...\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!search) return setSearchResults([]);\n        if (!accessToken) return;\n        spotifyApi.searchTracks(search).then(function(res) {\n            setSearchResults(res.body.tracks.items.map(function(track) {\n                return {\n                    id: track.id,\n                    artist: track.artists[0].name,\n                    title: track.name,\n                    uri: track.uri,\n                    albumUrl: track.album.images[0].url,\n                    popularity: track.popularity\n                };\n            }));\n        });\n    }, [\n        search,\n        accessToken\n    ]);\n    //new releases...\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!accessToken) return;\n        spotifyApi.getNewReleases().then(function(res) {\n            setNewReleases(res.body.albums.items.map(function(track) {\n                return {\n                    id: track.id,\n                    artist: track.artists[0].name,\n                    title: track.name,\n                    uri: track.uri,\n                    albumUrl: track.images[0].url\n                };\n            }));\n        });\n    }, [\n        accessToken\n    ]);\n    console.log(newReleases);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-neutral-800 ml-24 py-0 space-y-8 md:max-w-8xl flex-grow md:mr-2.5 mb-14\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                search: search,\n                setSearch: setSearch\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-2xl py-10 pb-10 bg-[#beaae95e] shadow-2xl drop-shadow-2xl mr-\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid overflow-y-scroll scrollbar-hide py-2 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-1 p-14 sm:grid-cols-3 h-[500px]\",\n                        children: searchResults.length === 0 ? newReleases.slice(0, 10).map(function(track) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Poster__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                track: track,\n                                chooseTrack: chooseTrack\n                            }, track.id, false, {\n                                fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, _this);\n                        }) : searchResults.slice(0, 10).map(function(track) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Poster__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                track: track,\n                                chooseTrack: chooseTrack\n                            }, track.id, false, {\n                                fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white font-bold mb-3 ml-11 text-[20px] mt-3\",\n                                children: searchResults.length === 0 ? \"New Releases\" : \"Tracks\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-3 border-2 border-[#262626] rounded-2xl p-2 bg-neutral-800 overflow-y-scroll h-[1000px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[1390px] ml-4 shadow-xl drop-shadow-xl\",\n                                children: searchResults.length === 0 ? newReleases.slice(10, newReleases.length).map(function(track) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Track__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        track: track,\n                                        chooseTrack: chooseTrack\n                                    }, track.id, false, {\n                                        fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, _this);\n                                }) : searchResults.slice(10, searchResults.length).map(function(track) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Track__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        track: track,\n                                        chooseTrack: chooseTrack\n                                    }, track.id, false, {\n                                        fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 25\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zhane\\\\WebstormProjects\\\\softm_codlab\\\\project_softm\\\\components\\\\Body.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Body, \"S0Y9vCxVM+XDl+hjbYQ4nwITKDQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixTQUFTLEVBQUMsa0RBQWtEOzBDQUMzRDdCLGFBQWEsQ0FBQytCLE1BQU0sS0FBSyxDQUFDLEdBQUcsY0FBYyxHQUFHLFFBQVE7Ozs7O29DQUN0RDswQ0FDTCw4REFBQ0QsS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLGlQQUcwQjswQ0FDeEM3QixhQUFhLENBQUMrQixNQUFNLEtBQUssQ0FBQyxHQUN6QjdCLFdBQVcsQ0FDUjhCLEtBQUssQ0FBQyxFQUFFLEVBQUU5QixXQUFXLENBQUM2QixNQUFNLENBQUMsQ0FDN0JwQixHQUFHLENBQUMsU0FBQ0MsS0FBSzt5REFDUCw4REFBQ3RCLDhDQUFLO3dDQUVOc0IsS0FBSyxFQUFFQSxLQUFLO3dDQUNabEIsV0FBVyxFQUFFQSxXQUFXO3VDQUZuQmtCLEtBQUssQ0FBQ0MsRUFBRTs7Ozs2Q0FHWDtpQ0FDTCxDQUFDLEdBQ0piLGFBQWEsQ0FDVmdDLEtBQUssQ0FBQyxFQUFFLEVBQUVoQyxhQUFhLENBQUMrQixNQUFNLENBQUMsQ0FDL0JwQixHQUFHLENBQUMsU0FBQ0MsS0FBSzt5REFDUCw4REFBQ3RCLDhDQUFLO3dDQUVOc0IsS0FBSyxFQUFFQSxLQUFLO3dDQUNabEIsV0FBVyxFQUFFQSxXQUFXO3VDQUZuQmtCLEtBQUssQ0FBQ0MsRUFBRTs7Ozs2Q0FHWDtpQ0FDTCxDQUFDOzs7OztvQ0FDQTs7Ozs7OzRCQUNKOzs7Ozs7b0JBQ0o7Ozs7OztZQUNBLENBQ1I7Q0FDTDtHQTlHUXJCLElBQUk7O1FBQ2dCUCx1REFBVTs7O0FBRDlCTyxLQUFBQSxJQUFJO0FBZ0hiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb2R5LmpzP2IxMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFjcmggZnJvbSBcIi4vU2VhcmNoXCI7XHJcbmltcG9ydCBQb3N0ZXIgZnJvbSBcIi4vUG9zdGVyXCI7XHJcbmltcG9ydCBUcmFjayBmcm9tIFwiLi9UcmFja1wiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vRHJvcGRvd25cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBCb2R5KHtzcG90aWZ5QXBpLCBjaG9vc2VUcmFja30pe1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IHthY2Nlc3NUb2tlbn0gPSBzZXNzaW9uO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25ld1JlbGVhc2VzLCBzZXROZXdSZWxlYXNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoIWFjY2Vzc1Rva2VuKSByZXR1cm47XHJcbiAgICAgICAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbik7XHJcbiAgICB9LCBbYWNjZXNzVG9rZW5dKTtcclxuXHJcbiAgICAvL3NlYXJjaGluZy4uLlxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiBzZXRTZWFyY2hSZXN1bHRzKFtdKTtcclxuICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNwb3RpZnlBcGkuc2VhcmNoVHJhY2tzKHNlYXJjaCkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hSZXN1bHRzKHJlcy5ib2R5LnRyYWNrcy5pdGVtcy5tYXAoKHRyYWNrKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdHJhY2suaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0OiB0cmFjay5hcnRpc3RzWzBdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRyYWNrLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiB0cmFjay51cmksXHJcbiAgICAgICAgICAgICAgICAgICAgYWxidW1Vcmw6IHRyYWNrLmFsYnVtLmltYWdlc1swXS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhcml0eTogdHJhY2sucG9wdWxhcml0eSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbc2VhcmNoLCBhY2Nlc3NUb2tlbl0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8vbmV3IHJlbGVhc2VzLi4uXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIWFjY2Vzc1Rva2VuKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNwb3RpZnlBcGkuZ2V0TmV3UmVsZWFzZXMoKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIHNldE5ld1JlbGVhc2VzXHJcbiAgICAgICAgICAgIChyZXMuYm9keS5hbGJ1bXMuaXRlbXMubWFwKCh0cmFjayk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRyYWNrLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogdHJhY2suYXJ0aXN0c1swXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0cmFjay5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogdHJhY2sudXJpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsYnVtVXJsOiB0cmFjay5pbWFnZXNbMF0udXJsLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFthY2Nlc3NUb2tlbl0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG5ld1JlbGVhc2VzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctbmV1dHJhbC04MDAgbWwtMjQgcHktMCBzcGFjZS15LTggbWQ6bWF4LXctOHhsIGZsZXgtZ3JvdyBtZDptci0yLjUgbWItMTRcIj5cclxuICAgICAgICA8U2VhY3JoIHNlYXJjaD17c2VhcmNofSBzZXRTZWFyY2g9e3NldFNlYXJjaH0vPiBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHB5LTEwIHBiLTEwIGJnLVsjYmVhYWU5NWVdIHNoYWRvdy0yeGwgZHJvcC1zaGFkb3ctMnhsIG1yLVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgb3ZlcmZsb3cteS1zY3JvbGwgc2Nyb2xsYmFyLWhpZGUgcHktMiBncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFxyXG4gICAgICAgICAgICB4bDpncmlkLWNvbHMtNSBnYXAteC0zIGdhcC15LTEgcC0xNCBzbTpncmlkLWNvbHMtMyBoLVs1MDBweF1cIj5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCA/IG5ld1JlbGVhc2VzLnNsaWNlKDAsMTApLm1hcCgodHJhY2spPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cmFjay5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrPXt0cmFja30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZVRyYWNrPXtjaG9vc2VUcmFja30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpIDogc2VhcmNoUmVzdWx0cy5zbGljZSgwLDEwKS5tYXAoKHRyYWNrKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJhY2suaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjaz17dHJhY2t9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VUcmFjaz17Y2hvb3NlVHJhY2t9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIG1iLTMgbWwtMTEgdGV4dC1bMjBweF0gbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA9PT0gMCA/IFwiTmV3IFJlbGVhc2VzXCIgOiBcIlRyYWNrc1wifVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIGJvcmRlci0yIGJvcmRlci1bIzI2MjYyNl0gcm91bmRlZC0yeGwgcC0yIFxyXG4gICAgICAgICAgICAgICAgYmctbmV1dHJhbC04MDAgb3ZlcmZsb3cteS1zY3JvbGwgaC1bMTAwMHB4XSBtZDpoLTk2IHNjcm9sbGJhci10aGluIFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyLXRodW1iLWdyYXktNjAwIHNjcm9sbGJhci10aHVtYi1yb3VuZGVkIGhvdmVyOnNjcm9sbGJhci10aHVtYi1ncmF5LTUwMFxyXG4gICAgICAgICAgICAgICAgdy1bMTM5MHB4XSBtbC00IHNoYWRvdy14bCBkcm9wLXNoYWRvdy14bFwiPlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICA/IG5ld1JlbGVhc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDEwLCBuZXdSZWxlYXNlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgodHJhY2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJhY2suaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrPXt0cmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlVHJhY2s9e2Nob29zZVRyYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IHNlYXJjaFJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMTAsIHNlYXJjaFJlc3VsdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHRyYWNrKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RyYWNrLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjaz17dHJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZVRyYWNrPXtjaG9vc2VUcmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7Il0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYWNyaCIsIlBvc3RlciIsIlRyYWNrIiwiRHJvcGRvd24iLCJCb2R5Iiwic3BvdGlmeUFwaSIsImNob29zZVRyYWNrIiwiZGF0YSIsInNlc3Npb24iLCJhY2Nlc3NUb2tlbiIsInNlYXJjaCIsInNldFNlYXJjaCIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibmV3UmVsZWFzZXMiLCJzZXROZXdSZWxlYXNlcyIsInNldEFjY2Vzc1Rva2VuIiwic2VhcmNoVHJhY2tzIiwidGhlbiIsInJlcyIsImJvZHkiLCJ0cmFja3MiLCJpdGVtcyIsIm1hcCIsInRyYWNrIiwiaWQiLCJhcnRpc3QiLCJhcnRpc3RzIiwibmFtZSIsInRpdGxlIiwidXJpIiwiYWxidW1VcmwiLCJhbGJ1bSIsImltYWdlcyIsInVybCIsInBvcHVsYXJpdHkiLCJnZXROZXdSZWxlYXNlcyIsImFsYnVtcyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVuZ3RoIiwic2xpY2UiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Body.js\n");

/***/ })

});