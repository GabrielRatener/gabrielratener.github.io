webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\nTechChip.defaultProps = {\n  filter: '',\n  dark: true\n};\nfunction TechChip(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": \"badge rounded-0 align-bottom \".concat(props.dark ? 'light' : 'dark'),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(!props.dark, props.tech.background, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsidGVjaEltYWdlU3R5bGVzIiwiZGFyayIsImJhY2tncm91bmQiLCJkZWZhdWx0U3R5bGVzIiwiY29tYmluZWQiLCJsaWdodCIsImNvbG9yIiwiVGVjaENoaXAiLCJwcm9wVHlwZXMiLCJmaWx0ZXIiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNSZXF1aXJlZCIsInRlY2giLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJwcm9wcyIsImltZyIsInRpdGxlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUEwQztBQUFBLE1BQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUNoRSxNQUFNQyxRQUFRO0FBQ1ZDLFNBQUssRUFBRSxhQURHO0FBRVZKLFFBQUksRUFBRTtBQUZJLEtBR1BDLFVBSE8sQ0FBZDs7QUFLQSxNQUFNSSxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0gsSUFBSSxHQUFHLE1BQUgsR0FBWSxPQUFqQixDQUF0QjtBQUVBLHlDQUNPRSxhQURQO0FBRUksdUJBQW1CRyxLQUZ2QjtBQUdJLG1CQUFlQTtBQUhuQjtBQUtELENBYkQ7O0FBZUFDLFFBQVEsQ0FBQ0MsU0FBVCxHQUFxQjtBQUNuQkMsUUFBTSxFQUFFQyxpREFBUyxDQUFDQyxNQURDO0FBRW5CVixNQUFJLEVBQUVTLGlEQUFTLENBQUNFLElBQVYsQ0FBZUMsVUFGRjtBQUduQkMsTUFBSSxFQUFFSixpREFBUyxDQUFDSyxNQUFWLENBQWlCRjtBQUhKLENBQXJCO0FBTUFOLFFBQVEsQ0FBQ1MsWUFBVCxHQUF3QjtBQUN0QlAsUUFBTSxFQUFFLEVBRGM7QUFFdEJSLE1BQUksRUFBRTtBQUZnQixDQUF4QjtBQUtlLFNBQVNNLFFBQVQsQ0FBa0JVLEtBQWxCLEVBQXlCO0FBQ3RDLHNCQUNFO0FBQ0Usb0RBQXVDQSxLQUFLLENBQUNoQixJQUFOLEdBQWEsT0FBYixHQUF1QixNQUE5RCxDQURGO0FBQUEsNEJBSUU7QUFDRSxlQUFNLE1BRFI7QUFFRSxTQUFHLEVBQUVnQixLQUFLLENBQUNILElBQU4sQ0FBV0ksR0FGbEI7QUFHRSxTQUFHLEVBQUVELEtBQUssQ0FBQ0gsSUFBTixDQUFXSyxLQUhsQjtBQUlFLFdBQUssRUFBRW5CLGVBQWUsQ0FBQyxDQUFDaUIsS0FBSyxDQUFDaEIsSUFBUixFQUFjZ0IsS0FBSyxDQUFDSCxJQUFOLENBQVdaLFVBQXpCLEVBQXFDO0FBQ3pEa0IsY0FBTSxFQUFFO0FBRGlELE9BQXJDO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVlFO0FBQU0sZUFBTSxrQkFBWjtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRUgsS0FBSyxDQUFDSCxJQUFOLENBQVdLLEtBQXBDO0FBQTJDLGFBQUssRUFBRUYsS0FBSyxDQUFDUjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUEsS0FFT1EsS0FBSyxDQUFDSCxJQUFOLENBQVdLLEtBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDtLQW5CdUJaLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlY2gtY2hpcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IE1hdGNoSGlnaGxpZ2h0ZXIgZnJvbSBcIi4vbWF0Y2gtaGlnaGxpZ2h0ZXJcIlxuXG5jb25zdCB0ZWNoSW1hZ2VTdHlsZXMgPSAoZGFyaywgYmFja2dyb3VuZCwgZGVmYXVsdFN0eWxlcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbWJpbmVkID0ge1xuICAgICAgbGlnaHQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkYXJrOiAndHJhbnNwYXJlbnQnLFxuICAgICAgLi4uYmFja2dyb3VuZFxuICB9XG4gIGNvbnN0IGNvbG9yID0gY29tYmluZWRbZGFyayA/ICdkYXJrJyA6ICdsaWdodCddO1xuXG4gIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0U3R5bGVzLFxuICAgICAgJ2JhY2tncm91bmRDb2xvcic6IGNvbG9yLFxuICAgICAgJ2JvcmRlckNvbG9yJzogY29sb3JcbiAgfTtcbn1cblxuVGVjaENoaXAucHJvcFR5cGVzID0ge1xuICBmaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhcms6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRlY2g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5UZWNoQ2hpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbHRlcjogJycsXG4gIGRhcms6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVjaENoaXAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3M9e2BiYWRnZSByb3VuZGVkLTAgYWxpZ24tYm90dG9tICR7cHJvcHMuZGFyayA/ICdsaWdodCcgOiAnZGFyayd9YH1cbiAgICAgIGtleT17cHJvcHMudGVjaC50aXRsZX1cbiAgICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJtci0xXCJcbiAgICAgICAgc3JjPXtwcm9wcy50ZWNoLmltZ31cbiAgICAgICAgYWx0PXtwcm9wcy50ZWNoLnRpdGxlfVxuICAgICAgICBzdHlsZT17dGVjaEltYWdlU3R5bGVzKCFwcm9wcy5kYXJrLCBwcm9wcy50ZWNoLmJhY2tncm91bmQsIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwXG4gICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtLTEgYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgIDxNYXRjaEhpZ2hsaWdodGVyIHZhbHVlPXtwcm9wcy50ZWNoLnRpdGxlfSBxdWVyeT17cHJvcHMuZmlsdGVyfS8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})