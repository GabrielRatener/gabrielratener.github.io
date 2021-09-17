webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar getOverrideImageStyles = function getOverrideImageStyles() {\n  var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var outlined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  if (outlined) {\n    return {\n      'light': dark ? 'black' : 'transparent',\n      'dark': light ? 'white' : 'transparent'\n    };\n  } else {}\n\n  return {\n    'light': outlined && light ? 'white' : 'transparent',\n    'dark': outlined && dark ? 'black' : 'transparent'\n  };\n};\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  outlined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\nTechChip.defaultProps = {\n  filter: '',\n  outlined: false,\n  dark: false,\n  link: false\n};\nfunction TechChip(props) {\n  var classes = ['badge', 'rounded-0', 'align-bottom', props.dark ? 'light' : 'dark'];\n  var backgroundStyles = getOverrideImageStyles(!!props.tech.dark, !!props.tech.light, props.outlined);\n\n  if (props.outlined) {\n    classes.push('outlined');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": classes.join(' '),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(props.dark, backgroundStyles, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), props.link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"m-1 align-middle\",\n      target: \"blank\",\n      href: props.tech.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsiZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyIsImRhcmsiLCJsaWdodCIsIm91dGxpbmVkIiwidGVjaEltYWdlU3R5bGVzIiwiYmFja2dyb3VuZCIsImRlZmF1bHRTdHlsZXMiLCJjb21iaW5lZCIsImNvbG9yIiwiVGVjaENoaXAiLCJwcm9wVHlwZXMiLCJ0ZWNoIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZpbHRlciIsInN0cmluZyIsImJvb2wiLCJsaW5rIiwiZGVmYXVsdFByb3BzIiwicHJvcHMiLCJjbGFzc2VzIiwiYmFja2dyb3VuZFN0eWxlcyIsInB1c2giLCJqb2luIiwiaW1nIiwidGl0bGUiLCJoZWlnaHQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBbUQ7QUFBQSxNQUFsREMsSUFBa0QsdUVBQTNDLEtBQTJDO0FBQUEsTUFBcENDLEtBQW9DLHVFQUE1QixLQUE0QjtBQUFBLE1BQXJCQyxRQUFxQix1RUFBVixLQUFVOztBQUVoRixNQUFJQSxRQUFKLEVBQWM7QUFDWixXQUFPO0FBQ0wsZUFBU0YsSUFBSSxHQUFHLE9BQUgsR0FBYSxhQURyQjtBQUVMLGNBQVFDLEtBQUssR0FBRyxPQUFILEdBQWE7QUFGckIsS0FBUDtBQUlELEdBTEQsTUFLTyxDQUVOOztBQUNELFNBQU87QUFDTCxhQUFVQyxRQUFRLElBQUlELEtBQWIsR0FBc0IsT0FBdEIsR0FBZ0MsYUFEcEM7QUFFTCxZQUFTQyxRQUFRLElBQUlGLElBQWIsR0FBcUIsT0FBckIsR0FBK0I7QUFGbEMsR0FBUDtBQUlELENBZEQ7O0FBZ0JBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0gsSUFBRCxFQUFPSSxVQUFQLEVBQTBDO0FBQUEsTUFBdkJD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c0NvbnRlbnQiOlsiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBNYXRjaEhpZ2hsaWdodGVyIGZyb20gXCIuL21hdGNoLWhpZ2hsaWdodGVyXCJcblxuY29uc3QgZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyA9IChkYXJrID0gZmFsc2UsIGxpZ2h0ID0gZmFsc2UsIG91dGxpbmVkID0gZmFsc2UpID0+IHtcblxuICBpZiAob3V0bGluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2xpZ2h0JzogZGFyayA/ICdibGFjaycgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgJ2RhcmsnOiBsaWdodCA/ICd3aGl0ZScgOiAndHJhbnNwYXJlbnQnXG4gICAgfVxuICB9IGVsc2Uge1xuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICAnbGlnaHQnOiAob3V0bGluZWQgJiYgbGlnaHQpID8gJ3doaXRlJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgJ2RhcmsnOiAob3V0bGluZWQgJiYgZGFyaykgPyAnYmxhY2snIDogJ3RyYW5zcGFyZW50J1xuICB9XG59XG5cbmNvbnN0IHRlY2hJbWFnZVN0eWxlcyA9IChkYXJrLCBiYWNrZ3JvdW5kLCBkZWZhdWx0U3R5bGVzID0ge30pID0+IHtcbiAgY29uc3QgY29tYmluZWQgPSB7XG4gICAgbGlnaHQ6ICd0cmFuc3BhcmVudCcsXG4gICAgZGFyazogJ3RyYW5zcGFyZW50JyxcbiAgICAuLi5iYWNrZ3JvdW5kXG4gIH1cbiAgY29uc3QgY29sb3IgPSBjb21iaW5lZFtkYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J107XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiBjb2xvcixcbiAgICAnYm9yZGVyQ29sb3InOiBjb2xvclxuICB9O1xufVxuXG5UZWNoQ2hpcC5wcm9wVHlwZXMgPSB7XG4gIHRlY2g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdXRsaW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhcms6IFByb3BUeXBlcy5ib29sLFxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5UZWNoQ2hpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbHRlcjogJycsXG4gIG91dGxpbmVkOiBmYWxzZSxcbiAgZGFyazogZmFsc2UsXG4gIGxpbms6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlY2hDaGlwKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2JhZGdlJyxcbiAgICAncm91bmRlZC0wJyxcbiAgICAnYWxpZ24tYm90dG9tJyxcbiAgICBwcm9wcy5kYXJrID8gJ2xpZ2h0JyA6ICdkYXJrJyxcbiAgXVxuXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZXMgPVxuICAgIGdldE92ZXJyaWRlSW1hZ2VTdHlsZXMoISFwcm9wcy50ZWNoLmRhcmssICEhcHJvcHMudGVjaC5saWdodCwgcHJvcHMub3V0bGluZWQpO1xuXG4gIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgIGNsYXNzZXMucHVzaCgnb3V0bGluZWQnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzPXtjbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIGtleT17cHJvcHMudGVjaC50aXRsZX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwibXItMVwiXG4gICAgICAgIHNyYz17cHJvcHMudGVjaC5pbWd9XG4gICAgICAgIGFsdD17cHJvcHMudGVjaC50aXRsZX1cbiAgICAgICAgc3R5bGU9e3RlY2hJbWFnZVN0eWxlcyhwcm9wcy5kYXJrLCBiYWNrZ3JvdW5kU3R5bGVzLCB7XG4gICAgICAgICAgaGVpZ2h0OiAyMFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgICB7cHJvcHMubGluayA/IChcbiAgICAgICAgPGEgY2xhc3M9XCJtLTEgYWxpZ24tbWlkZGxlXCIgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPXtwcm9wcy50ZWNoLnVybH0+XG4gICAgICAgICAgPE1hdGNoSGlnaGxpZ2h0ZXIgdmFsdWU9e3Byb3BzLnRlY2gudGl0bGV9IHF1ZXJ5PXtwcm9wcy5maWx0ZXJ9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibS0xIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgIDxNYXRjaEhpZ2hsaWdodGVyIHZhbHVlPXtwcm9wcy50ZWNoLnRpdGxlfSBxdWVyeT17cHJvcHMuZmlsdGVyfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuXG4gICAgPC9zcGFuPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})