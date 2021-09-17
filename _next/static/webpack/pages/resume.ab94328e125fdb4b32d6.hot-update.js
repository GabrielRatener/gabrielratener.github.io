webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  outlined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\nTechChip.defaultProps = {\n  filter: '',\n  dark: false\n};\nfunction TechChip(props) {\n  var classes = ['badge', 'rounded-0', 'align-bottom', props.dark ? 'light' : 'dark'];\n\n  if (props.outlined) {\n    classes.push('outlined');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": classes.join(' '),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(!props.dark, props.tech.background, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsidGVjaEltYWdlU3R5bGVzIiwiZGFyayIsImJhY2tncm91bmQiLCJkZWZhdWx0U3R5bGVzIiwiY29tYmluZWQiLCJsaWdodCIsImNvbG9yIiwiVGVjaENoaXAiLCJwcm9wVHlwZXMiLCJmaWx0ZXIiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvdXRsaW5lZCIsImJvb2wiLCJpc1JlcXVpcmVkIiwidGVjaCIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsInByb3BzIiwiY2xhc3NlcyIsInB1c2giLCJqb2luIiwiaW1nIiwidGl0bGUiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxVQUFQLEVBQTBDO0FBQUEsTUFBdkJDLGFBQXVCLHVFQUFQLEVBQU87O0FBQ2hFLE1BQU1DLFFBQVE7QUFDVkMsU0FBSyxFQUFFLGFBREc7QUFFVkosUUFBSSxFQUFFO0FBRkksS0FHUEMsVUFITyxDQUFkOztBQUtBLE1BQU1JLEtBQUssR0FBR0YsUUFBUSxDQUFDSCxJQUFJLEdBQUcsTUFBSCxHQUFZLE9BQWpCLENBQXRCO0FBRUEseUNBQ09FLGFBRFA7QUFFSSx1QkFBbUJHLEtBRnZCO0FBR0ksbUJBQWVBO0FBSG5CO0FBS0QsQ0FiRDs7QUFlQUMsUUFBUSxDQUFDQyxTQUFULEdBQXFCO0FBQ25CQyxRQUFNLEVBQUVDLGlEQUFTLENBQUNDLE1BREM7QUFFbkJDLFVBQVEsRUFBRUYsaURBQVMsQ0FBQ0csSUFGRDtBQUduQlosTUFBSSxFQUFFUyxpREFBUyxDQUFDRyxJQUFWLENBQWVDLFVBSEY7QUFJbkJDLE1BQUksRUFBRUwsaURBQVMsQ0FBQ00sTUFBVixDQUFpQkY7QUFKSixDQUFyQjtBQU9BUCxRQUFRLENBQUNVLFlBQVQsR0FBd0I7QUFDdEJSLFFBQU0sRUFBRSxFQURjO0FBRXRCUixNQUFJLEVBQUU7QUFGZ0IsQ0FBeEI7QUFLZSxTQUFTTSxRQUFULENBQWtCVyxLQUFsQixFQUF5QjtBQUN0QyxNQUFNQyxPQUFPLEdBQUcsQ0FDZCxPQURjLEVBRWQsV0FGYyxFQUdkLGNBSGMsRUFJZEQsS0FBSyxDQUFDakIsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFKVCxDQUFoQjs7QUFPQSxNQUFJaUIsS0FBSyxDQUFDTixRQUFWLEVBQW9CO0FBQ2xCTyxXQUFPLENBQUNDLElBQVIsQ0FBYSxVQUFiO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFPRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxHQUFiLENBRFQ7QUFBQSw0QkFJRTtBQUNFLGVBQU0sTUFEUjtBQUVFLFNBQUcsRUFBRUgsS0FBSyxDQUFDSCxJQUFOLENBQVdPLEdBRmxCO0FBR0UsU0FBRyxFQUFFSixLQUFLLENBQUNILElBQU4sQ0FBV1EsS0FIbEI7QUFJRSxXQUFLLEVBQUV2QixlQUFlLENBQUMsQ0FBQ2tCLEtBQUssQ0FBQ2pCLElBQVIsRUFBY2lCLEtBQUssQ0FBQ0gsSUFBTixDQUFXYixVQUF6QixFQUFxQztBQUN6RHNCLGNBQU0sRUFBRTtBQURpRCxPQUFyQztBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFZRTtBQUFNLGVBQU0sa0JBQVo7QUFBQSw2QkFDRSxxRUFBQywwREFBRDtBQUFrQixhQUFLLEVBQUVOLEtBQUssQ0FBQ0gsSUFBTixDQUFXUSxLQUFwQztBQUEyQyxhQUFLLEVBQUVMLEtBQUssQ0FBQ1Q7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBLEtBRU9TLEtBQUssQ0FBQ0gsSUFBTixDQUFXUSxLQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7S0E5QnVCaEIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVjaC1jaGlwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgTWF0Y2hIaWdobGlnaHRlciBmcm9tIFwiLi9tYXRjaC1oaWdobGlnaHRlclwiXG5cbmNvbnN0IHRlY2hJbWFnZVN0eWxlcyA9IChkYXJrLCBiYWNrZ3JvdW5kLCBkZWZhdWx0U3R5bGVzID0ge30pID0+IHtcbiAgY29uc3QgY29tYmluZWQgPSB7XG4gICAgICBsaWdodDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGRhcms6ICd0cmFuc3BhcmVudCcsXG4gICAgICAuLi5iYWNrZ3JvdW5kXG4gIH1cbiAgY29uc3QgY29sb3IgPSBjb21iaW5lZFtkYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J107XG5cbiAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRTdHlsZXMsXG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogY29sb3IsXG4gICAgICAnYm9yZGVyQ29sb3InOiBjb2xvclxuICB9O1xufVxuXG5UZWNoQ2hpcC5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3V0bGluZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXJrOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0ZWNoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuVGVjaENoaXAuZGVmYXVsdFByb3BzID0ge1xuICBmaWx0ZXI6ICcnLFxuICBkYXJrOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWNoQ2hpcChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdiYWRnZScsXG4gICAgJ3JvdW5kZWQtMCcsXG4gICAgJ2FsaWduLWJvdHRvbScsXG4gICAgcHJvcHMuZGFyayA/ICdsaWdodCcgOiAnZGFyaycsXG4gIF1cblxuICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICBjbGFzc2VzLnB1c2goJ291dGxpbmVkJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzcz17Y2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICBrZXk9e3Byb3BzLnRlY2gudGl0bGV9XG4gICAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwibXItMVwiXG4gICAgICAgIHNyYz17cHJvcHMudGVjaC5pbWd9XG4gICAgICAgIGFsdD17cHJvcHMudGVjaC50aXRsZX1cbiAgICAgICAgc3R5bGU9e3RlY2hJbWFnZVN0eWxlcyghcHJvcHMuZGFyaywgcHJvcHMudGVjaC5iYWNrZ3JvdW5kLCB7XG4gICAgICAgICAgaGVpZ2h0OiAyMFxuICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwibS0xIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICA8TWF0Y2hIaWdobGlnaHRlciB2YWx1ZT17cHJvcHMudGVjaC50aXRsZX0gcXVlcnk9e3Byb3BzLmZpbHRlcn0vPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})