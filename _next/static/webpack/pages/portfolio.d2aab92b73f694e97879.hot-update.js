webpackHotUpdate_N_E("pages/portfolio",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
false,

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
false,

/***/ "./node_modules/next/image.js":
false,

/***/ "./pages/portfolio.jsx":
/*!*****************************!*\
  !*** ./pages/portfolio.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PortfolioPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _data_portfolio_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/portfolio.yaml */ \"./data/portfolio.yaml\");\n/* harmony import */ var _data_portfolio_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_portfolio_yaml__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_tech_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/tech.yaml */ \"./data/tech.yaml\");\n/* harmony import */ var _data_tech_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_tech_yaml__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/pages/portfolio.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar expandTech = function expandTech(project) {\n  if (!project.hasOwnProperty('tech')) {\n    return [];\n  }\n\n  return project.tech.map(function (techName) {\n    return _objectSpread(_objectSpread({}, _data_tech_yaml__WEBPACK_IMPORTED_MODULE_4___default.a[techName]), {}, {\n      img: \"images/tech/\".concat(techName, \".png\")\n    });\n  });\n};\n\nfunction PortfolioPage() {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    id: \"portfolio\",\n    \"class\": \"list-unstyled\",\n    children: _data_portfolio_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.projects.map(function (project, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        \"class\": \"shaddow-box\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          \"class\": \"link-unstyled\",\n          target: \"blank\",\n          href: project.link,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            \"class\": \"portfolio image-t\".concat(Math.floor((index + 1) / 2) % 2),\n            src: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"portfolioImage\"])(project.image)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"description \".concat(project.dark ? 'dark' : 'light'),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n              children: project.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"parseBasicMarkdown\"])(project.description).map(function (part) {\n                switch (part.type) {\n                  case 'link':\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      href: part.link,\n                      children: part.content\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 36,\n                      columnNumber: 30\n                    }, _this);\n\n                  case 'text':\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      children: part.content\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 38,\n                      columnNumber: 30\n                    }, _this);\n\n                  case 'bold':\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      \"class\": \"font-weight-bold\",\n                      children: part.content\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 40,\n                      columnNumber: 30\n                    }, _this);\n\n                  case 'italic':\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      \"class\": \"font-italic\",\n                      children: part.content\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 42,\n                      columnNumber: 30\n                    }, _this);\n                }\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"chip-container d-none d-sm-block\",\n              children: expandTech(project).map(function (tech) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  \"class\": \"badge rounded-0 align-bottom \".concat(project.dark ? 'light' : 'dark'),\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    \"class\": \"mr-1\",\n                    src: tech.img,\n                    alt: project.name,\n                    style: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"techImageStyles\"])(!project.dark, tech.background, {\n                      height: 20\n                    })\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    \"class\": \"m-1 align-middle\",\n                    children: tech.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 60,\n                    columnNumber: 21\n                  }, _this)]\n                }, tech.title, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n_c = PortfolioPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"PortfolioPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzeD9mNmVmIl0sIm5hbWVzIjpbImV4cGFuZFRlY2giLCJwcm9qZWN0IiwiaGFzT3duUHJvcGVydHkiLCJ0ZWNoIiwibWFwIiwidGVjaE5hbWUiLCJpbWciLCJQb3J0Zm9saW9QYWdlIiwicG9ydGZvbGlvIiwicHJvamVjdHMiLCJpbmRleCIsImxpbmsiLCJNYXRoIiwiZmxvb3IiLCJwb3J0Zm9saW9JbWFnZSIsImltYWdlIiwiZGFyayIsInRpdGxlIiwicGFyc2VCYXNpY01hcmtkb3duIiwiZGVzY3JpcHRpb24iLCJwYXJ0IiwidHlwZSIsImNvbnRlbnQiLCJuYW1lIiwidGVjaEltYWdlU3R5bGVzIiwiYmFja2dyb3VuZCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBYTtBQUU5QixNQUFJLENBQUNBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QixNQUF2QixDQUFMLEVBQXFDO0FBQ25DLFdBQU8sRUFBUDtBQUNEOztBQUVELFNBQU9ELE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLFFBQUQ7QUFBQSwyQ0FDbkJGLHNEQUFJLENBQUNFLFFBQUQsQ0FEZTtBQUV0QkMsU0FBRyx3QkFBaUJELFFBQWpCO0FBRm1CO0FBQUEsR0FBakIsQ0FBUDtBQUlELENBVkQ7O0FBWWUsU0FBU0UsYUFBVCxHQUF5QjtBQUFBOztBQUV0QyxzQkFDRTtBQUFJLE1BQUUsRUFBQyxXQUFQO0FBQW1CLGFBQU0sZUFBekI7QUFBQSxjQUNHQywyREFBUyxDQUFDQyxRQUFWLENBQW1CTCxHQUFuQixDQUF1QixVQUFDSCxPQUFELEVBQVVTLEtBQVY7QUFBQSwwQkFDdEI7QUFBSSxpQkFBTSxhQUFWO0FBQUEsK0JBQ0U7QUFBRyxtQkFBTSxlQUFUO0FBQXlCLGdCQUFNLEVBQUMsT0FBaEM7QUFBd0MsY0FBSSxFQUFFVCxPQUFPLENBQUNVLElBQXREO0FBQUEsa0NBQ0U7QUFDRSxnREFBNEJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNILEtBQUssR0FBRyxDQUFULElBQWMsQ0FBekIsQ0FBRCxHQUFnQyxDQUEzRCxDQURGO0FBRUUsZUFBRyxFQUFFSSw2REFBYyxDQUFDYixPQUFPLENBQUNjLEtBQVQ7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUssMkNBQXNCZCxPQUFPLENBQUNlLElBQVIsR0FBZSxNQUFmLEdBQXdCLE9BQTlDLENBQUw7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLZixPQUFPLENBQUNnQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUNHQyxpRUFBa0IsQ0FBQ2pCLE9BQU8sQ0FBQ2tCLFdBQVQsQ0FBbEIsQ0FBd0NmLEdBQXhDLENBQTRDLFVBQUNnQixJQUFELEVBQVU7QUFDckQsd0JBQVFBLElBQUksQ0FBQ0MsSUFBYjtBQUNFLHVCQUFLLE1BQUw7QUFDRSx3Q0FBTztBQUFHLDBCQUFJLEVBQUVELElBQUksQ0FBQ1QsSUFBZDtBQUFBLGdDQUFxQlMsSUFBSSxDQUFDRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFQOztBQUNGLHVCQUFLLE1BQUw7QUFDRSx3Q0FBTztBQUFBLGdDQUFPRixJQUFJLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBUDs7QUFDRix1QkFBSyxNQUFMO0FBQ0Usd0NBQU87QUFBTSwrQkFBTSxrQkFBWjtBQUFBLGdDQUFnQ0YsSUFBSSxDQUFDRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFQOztBQUNGLHVCQUFLLFFBQUw7QUFDRSx3Q0FBTztBQUFNLCtCQUFNLGFBQVo7QUFBQSxnQ0FBMkJGLElBQUksQ0FBQ0U7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBUDtBQVJKO0FBVUQsZUFYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFnQkU7QUFBSyx1QkFBTSxrQ0FBWDtBQUFBLHdCQUNHdEIsVUFBVSxDQUFDQyxPQUFELENBQVYsQ0FBb0JHLEdBQXBCLENBQXdCLFVBQUNELElBQUQ7QUFBQSxvQ0FDdkI7QUFDRSxrRUFBdUNGLE9BQU8sQ0FBQ2UsSUFBUixHQUFlLE9BQWYsR0FBeUIsTUFBaEUsQ0FERjtBQUFBLDBDQUlFO0FBQ0UsNkJBQU0sTUFEUjtBQUVFLHVCQUFHLEVBQUViLElBQUksQ0FBQ0csR0FGWjtBQUdFLHVCQUFHLEVBQUVMLE9BQU8sQ0FBQ3NCLElBSGY7QUFJRSx5QkFBSyxFQUFFQyw4REFBZSxDQUFDLENBQUN2QixPQUFPLENBQUNlLElBQVYsRUFBZ0JiLElBQUksQ0FBQ3NCLFVBQXJCLEVBQWlDO0FBQ3JEQyw0QkFBTSxFQUFFO0FBRDZDLHFCQUFqQztBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBWUU7QUFBTSw2QkFBTSxrQkFBWjtBQUFBLDhCQUFnQ3ZCLElBQUksQ0FBQ2M7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFaRjtBQUFBLG1CQUVPZCxJQUFJLENBQUNjLEtBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEdUI7QUFBQSxlQUF4QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUE2QlAsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURzQjtBQUFBLEtBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREO0tBbkR1QkgsYSIsImZpbGUiOiIuL3BhZ2VzL3BvcnRmb2xpby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHBhcnNlQmFzaWNNYXJrZG93biwgdGVjaEltYWdlU3R5bGVzLCBwb3J0Zm9saW9JbWFnZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gXCIuLi9kYXRhL3BvcnRmb2xpby55YW1sXCJcbmltcG9ydCB0ZWNoIGZyb20gXCIuLi9kYXRhL3RlY2gueWFtbFwiXG5cbmNvbnN0IGV4cGFuZFRlY2ggPSAocHJvamVjdCkgPT4ge1xuXG4gIGlmICghcHJvamVjdC5oYXNPd25Qcm9wZXJ0eSgndGVjaCcpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3QudGVjaC5tYXAoKHRlY2hOYW1lKSA9PiAoe1xuICAgIC4uLnRlY2hbdGVjaE5hbWVdLFxuICAgIGltZzogYGltYWdlcy90ZWNoLyR7dGVjaE5hbWV9LnBuZ2BcbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9QYWdlKCkge1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGlkPVwicG9ydGZvbGlvXCIgY2xhc3M9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICB7cG9ydGZvbGlvLnByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGNsYXNzPVwic2hhZGRvdy1ib3hcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8YSBjbGFzcz1cImxpbmstdW5zdHlsZWRcIiB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e3Byb2plY3QubGlua30+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPXtgcG9ydGZvbGlvIGltYWdlLXQkeyhNYXRoLmZsb29yKChpbmRleCArIDEpIC8gMikpICUgMn1gfVxuICAgICAgICAgICAgICBzcmM9e3BvcnRmb2xpb0ltYWdlKHByb2plY3QuaW1hZ2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17YGRlc2NyaXB0aW9uICR7cHJvamVjdC5kYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J31gfT5cbiAgICAgICAgICAgICAgPGg0Pntwcm9qZWN0LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtwYXJzZUJhc2ljTWFya2Rvd24ocHJvamVjdC5kZXNjcmlwdGlvbikubWFwKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsaW5rJzpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17cGFydC5saW5rfT57cGFydC5jb250ZW50fTwvYT47XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3Bhbj57cGFydC5jb250ZW50fTwvc3Bhbj47XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj57cGFydC5jb250ZW50fTwvc3Bhbj47XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0YWxpYyc6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzPVwiZm9udC1pdGFsaWNcIj57cGFydC5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpcC1jb250YWluZXIgZC1ub25lIGQtc20tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICB7ZXhwYW5kVGVjaChwcm9qZWN0KS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgYmFkZ2Ugcm91bmRlZC0wIGFsaWduLWJvdHRvbSAke3Byb2plY3QuZGFyayA/ICdsaWdodCcgOiAnZGFyayd9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXt0ZWNoLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGVjaC5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RlY2hJbWFnZVN0eWxlcyghcHJvamVjdC5kYXJrLCB0ZWNoLmJhY2tncm91bmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm0tMSBhbGlnbi1taWRkbGVcIj57dGVjaC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.jsx\n");

/***/ })

})