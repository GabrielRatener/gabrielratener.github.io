webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ \"./node_modules/@material-ui/core/esm/Collapse/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _data_resume_yaml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/resume.yaml */ \"./data/resume.yaml\");\n/* harmony import */ var _data_resume_yaml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_resume_yaml__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/pages/_app.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar navigation = [{\n  name: 'resume',\n  title: \"Resume\",\n  link: \"/resume\"\n}, {\n  name: 'portfolio',\n  title: \"Portfolio\",\n  link: \"/portfolio\"\n}, {\n  name: 'contact',\n  title: \"Contact\",\n  link: \"/contact\"\n}];\n\nvar routeTitle = function routeTitle(route) {\n  switch (route.slice(1)) {\n    case '':\n    case 'index':\n      return \"Home\";\n\n    case 'contact':\n      return \"Contact\";\n\n    case 'portfolio':\n      return \"Portfolio\";\n\n    case 'resume':\n      return \"Resume\";\n\n    default:\n      return \"4oooo4\";\n  }\n};\n\nvar navClasses = function navClasses(navOpen) {\n  if (navOpen) {\n    return ['nav-hidden'];\n  } else {\n    return ['nav-visible'];\n  }\n};\n\nfunction Layout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children,\n      route = _ref.route;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      navOpen = _useState[0],\n      setNavOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      id: \"background\",\n      \"class\": \"print-omit\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"canvas\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      id: \"app\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        \"class\": \"github-corner right d-none d-lg-block print-omit\",\n        href: \"https://github.com/\".concat(_data_resume_yaml__WEBPACK_IMPORTED_MODULE_9___default.a.profiles.github),\n        target: \"blank\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          src: Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"svgImage\"])('github-corner-right')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n        \"class\": \"navbar navbar-expand-md navbar-light shaddow-box print-omit\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          \"class\": \"navbar-brand\",\n          href: \"/\",\n          children: \"Gabriel Ratener\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n          \"class\": \"d-sm-none\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            onClick: function onClick() {\n              return setNavOpen(!navOpen);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          id: \"thenavigation\",\n          \"class\": \"navbar-collapse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            \"in\": navOpen,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n              className: \"navbar-nav ml-auto\",\n              children: navigation.map(function (navItem) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n                  \"class\": \"nav-item\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                    \"class\": \"nav-link\",\n                    href: navItem.link,\n                    children: navItem.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 99,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                    href: navItem.link,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                      \"class\": \"shoe d-none d-md-block \".concat(navItem.link === route ? 'active' : 'inactive')\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 101,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 100,\n                    columnNumber: 21\n                  }, _this)]\n                }, navItem.link, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"app-content jumbotron shaddow-box\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n          \"class\": \"text-center print-omit\",\n          children: routeTitle(route)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {\n          \"class\": \"print-omit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            \"class\": \"text-muted print-omit\",\n            children: [\"\\xA9 \", Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getCurrentYear\"])(), \" Gabriel Ratener\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            \"class\": \"text-muted print-only\",\n            children: [\"Published \", Object(_utils__WEBPACK_IMPORTED_MODULE_8__[\"getCurrentDate\"])()]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Layout, \"RCKgh/IYwR1ZdtO8C9Yf2WKPJl0=\");\n\n_c = Layout;\n\nfunction MyApp(_ref2) {\n  _s2();\n\n  var Component = _ref2.Component,\n      pageProps = _ref2.pageProps;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Layout, {\n    route: router.route,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Gabriel Ratener - \", routeTitle(router.route)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({\n      route: router.route\n    }, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 134,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c2 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Layout\");\n$RefreshReg$(_c2, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIm5hdmlnYXRpb24iLCJuYW1lIiwidGl0bGUiLCJsaW5rIiwicm91dGVUaXRsZSIsInJvdXRlIiwic2xpY2UiLCJuYXZDbGFzc2VzIiwibmF2T3BlbiIsIkxheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzZXROYXZPcGVuIiwicmVzdW1lIiwicHJvZmlsZXMiLCJnaXRodWIiLCJzdmdJbWFnZSIsIm1hcCIsIm5hdkl0ZW0iLCJnZXRDdXJyZW50WWVhciIsImdldEN1cnJlbnREYXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxNQUFJLEVBQUUsUUFEUjtBQUVFQyxPQUFLLEVBQUUsUUFGVDtBQUdFQyxNQUFJLEVBQUU7QUFIUixDQURpQixFQU1qQjtBQUNFRixNQUFJLEVBQUUsV0FEUjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxNQUFJLEVBQUU7QUFIUixDQU5pQixFQVdqQjtBQUNFRixNQUFJLEVBQUUsU0FEUjtBQUVFQyxPQUFLLEVBQUUsU0FGVDtBQUdFQyxNQUFJLEVBQUU7QUFIUixDQVhpQixDQUFuQjs7QUFrQkEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBRTVCLFVBQVFBLEtBQUssQ0FBQ0MsS0FBTixDQUFZLENBQVosQ0FBUjtBQUNFLFNBQUssRUFBTDtBQUNBLFNBQUssT0FBTDtBQUNFLGFBQU8sTUFBUDs7QUFDRixTQUFLLFNBQUw7QUFDRSxhQUFPLFNBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsYUFBTyxXQUFQOztBQUNGLFNBQUssUUFBTDtBQUNF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c0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIlxuXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZSwgZ2V0Q3VycmVudFllYXIsIHN2Z0ltYWdlIH0gZnJvbSBcIi4uL3V0aWxzXCJcblxuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi4vZGF0YS9yZXN1bWUueWFtbFwiXG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gIHtcbiAgICBuYW1lOiAncmVzdW1lJyxcbiAgICB0aXRsZTogXCJSZXN1bWVcIixcbiAgICBsaW5rOiBcIi9yZXN1bWVcIlxuICB9LFxuICB7XG4gICAgbmFtZTogJ3BvcnRmb2xpbycsXG4gICAgdGl0bGU6IFwiUG9ydGZvbGlvXCIsXG4gICAgbGluazogXCIvcG9ydGZvbGlvXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdjb250YWN0JyxcbiAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgbGluazogXCIvY29udGFjdFwiXG4gIH1cbl1cblxuY29uc3Qgcm91dGVUaXRsZSA9IChyb3V0ZSkgPT4ge1xuXG4gIHN3aXRjaCAocm91dGUuc2xpY2UoMSkpIHtcbiAgICBjYXNlICcnOlxuICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgIHJldHVybiBcIkhvbWVcIjtcbiAgICBjYXNlICdjb250YWN0JzpcbiAgICAgIHJldHVybiBcIkNvbnRhY3RcIjtcbiAgICBjYXNlICdwb3J0Zm9saW8nOlxuICAgICAgcmV0dXJuIFwiUG9ydGZvbGlvXCI7XG4gICAgY2FzZSAncmVzdW1lJzpcbiAgICAgIHJldHVybiBcIlJlc3VtZVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCI0b29vbzRcIjtcbiAgfVxufVxuXG5jb25zdCBuYXZDbGFzc2VzID0gKG5hdk9wZW4pID0+IHtcbiAgaWYgKG5hdk9wZW4pIHtcbiAgICByZXR1cm4gWyduYXYtaGlkZGVuJ107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFsnbmF2LXZpc2libGUnXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgcm91dGUgfSkge1xuICBjb25zdCBbbmF2T3Blbiwgc2V0TmF2T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiIGNsYXNzPVwicHJpbnQtb21pdFwiPlxuICAgICAgICA8Y2FudmFzPlxuICAgICAgICA8L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzPVwiZ2l0aHViLWNvcm5lciByaWdodCBkLW5vbmUgZC1sZy1ibG9jayBwcmludC1vbWl0XCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cmVzdW1lLnByb2ZpbGVzLmdpdGh1Yn1gfVxuICAgICAgICAgIHRhcmdldD0nYmxhbmsnXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPXtzdmdJbWFnZSgnZ2l0aHViLWNvcm5lci1yaWdodCcpfT48L2ltZz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8bmF2XG4gICAgICAgICAgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHQgc2hhZGRvdy1ib3ggcHJpbnQtb21pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZFwiXG4gICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICBHYWJyaWVsIFJhdGVuZXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkLXNtLW5vbmVcIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdk9wZW4oIW5hdk9wZW4pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwidGhlbmF2aWdhdGlvblwiXG4gICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e25hdk9wZW59PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChuYXZJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIGtleT17bmF2SXRlbS5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9e25hdkl0ZW0ubGlua30+e25hdkl0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtuYXZJdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgc2hvZSBkLW5vbmUgZC1tZC1ibG9jayAke25hdkl0ZW0ubGluayA9PT0gcm91dGUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtY29udGVudCBqdW1ib3Ryb24gc2hhZGRvdy1ib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwcmludC1vbWl0XCI+e3JvdXRlVGl0bGUocm91dGUpfTwvaDE+XG4gICAgICAgICAgPGJyIGNsYXNzPVwicHJpbnQtb21pdFwiIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHByaW50LW9taXRcIj7CqSB7Z2V0Q3VycmVudFllYXIoKX0gR2FicmllbCBSYXRlbmVyPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIHByaW50LW9ubHlcIj5QdWJsaXNoZWQge2dldEN1cnJlbnREYXRlKCl9PC9wPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcm91dGU9e3JvdXRlci5yb3V0ZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkdhYnJpZWwgUmF0ZW5lciAtIHtyb3V0ZVRpdGxlKHJvdXRlci5yb3V0ZSl9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgcm91dGU9e3JvdXRlci5yb3V0ZX0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})