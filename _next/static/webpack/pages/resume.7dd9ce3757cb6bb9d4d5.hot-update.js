webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  outlined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\nTechChip.defaultProps = {\n  filter: '',\n  outlined: false,\n  dark: false,\n  link: false\n};\nfunction TechChip(props) {\n  var classes = ['badge', 'rounded-0', 'align-bottom', props.dark ? 'light' : 'dark'];\n\n  if (props.outlined) {\n    classes.push('outlined');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": classes.join(' '),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(!props.dark, props.tech.background, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsidGVjaEltYWdlU3R5bGVzIiwiZGFyayIsImJhY2tncm91bmQiLCJkZWZhdWx0U3R5bGVzIiwiY29tYmluZWQiLCJsaWdodCIsImNvbG9yIiwiVGVjaENoaXAiLCJwcm9wVHlwZXMiLCJ0ZWNoIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZpbHRlciIsInN0cmluZyIsIm91dGxpbmVkIiwiYm9vbCIsImxpbmsiLCJkZWZhdWx0UHJvcHMiLCJwcm9wcyIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsImltZyIsInRpdGxlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUEwQztBQUFBLE1BQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUNoRSxNQUFNQyxRQUFRO0FBQ1ZDLFNBQUssRUFBRSxhQURHO0FBRVZKLFFBQUksRUFBRTtBQUZJLEtBR1BDLFVBSE8sQ0FBZDs7QUFLQSxNQUFNSSxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0gsSUFBSSxHQUFHLE1BQUgsR0FBWSxPQUFqQixDQUF0QjtBQUVBLHlDQUNPRSxhQURQO0FBRUksdUJBQW1CRyxLQUZ2QjtBQUdJLG1CQUFlQTtBQUhuQjtBQUtELENBYkQ7O0FBZUFDLFFBQVEsQ0FBQ0MsU0FBVCxHQUFxQjtBQUNuQkMsTUFBSSxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURKO0FBRW5CQyxRQUFNLEVBQUVILGlEQUFTLENBQUNJLE1BRkM7QUFHbkJDLFVBQVEsRUFBRUwsaURBQVMsQ0FBQ00sSUFIRDtBQUluQmYsTUFBSSxFQUFFUyxpREFBUyxDQUFDTSxJQUpHO0FBS25CQyxNQUFJLEVBQUVQLGlEQUFTLENBQUNNO0FBTEcsQ0FBckI7QUFRQVQsUUFBUSxDQUFDVyxZQUFULEdBQXdCO0FBQ3RCTCxRQUFNLEVBQUUsRUFEYztBQUV0QkUsVUFBUSxFQUFFLEtBRlk7QUFHdEJkLE1BQUksRUFBRSxLQUhnQjtBQUl0QmdCLE1BQUksRUFBRTtBQUpnQixDQUF4QjtBQU9lLFNBQVNWLFFBQVQsQ0FBa0JZLEtBQWxCLEVBQXlCO0FBQ3RDLE1BQU1DLE9BQU8sR0FBRyxDQUNkLE9BRGMsRUFFZCxXQUZjLEVBR2QsY0FIYyxFQUlkRCxLQUFLLENBQUNsQixJQUFOLEdBQWEsT0FBYixHQUF1QixNQUpULENBQWhCOztBQU9BLE1BQUlrQixLQUFLLENBQUNKLFFBQVYsRUFBb0I7QUFDbEJLLFdBQU8sQ0FBQ0MsSUFBUixDQUFhLFVBQWI7QUFDRDs7QUFFRCxzQkFDRTtBQUNFLGFBQU9ELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLEdBQWIsQ0FEVDtBQUFBLDRCQUlFO0FBQ0UsZUFBTSxNQURSO0FBRUUsU0FBRyxFQUFFSCxLQUFLLENBQUNWLElBQU4sQ0FBV2MsR0FGbEI7QUFHRSxTQUFHLEVBQUVKLEtBQUssQ0FBQ1YsSUFBTixDQUFXZSxLQUhsQjtBQUlFLFdBQUssRUFBRXhCLGVBQWUsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDbEIsSUFBUixFQUFja0IsS0FBSyxDQUFDVixJQUFOLENBQVdQLFVBQXpCLEVBQXFDO0FBQ3pEdUIsY0FBTSxFQUFFO0FBRGlELE9BQXJDO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQVlHUixJQUFJLGdCQUNIO0FBQUcsZUFBTSxrQkFBVDtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRUUsS0FBSyxDQUFDVixJQUFOLENBQVdlLEtBQXBDO0FBQTJDLGFBQUssRUFBRUwsS0FBSyxDQUFDTjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGdCQUtIO0FBQU0sZUFBTSxrQkFBWjtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRU0sS0FBSyxDQUFDVixJQUFOLENBQVdlLEtBQXBDO0FBQTJDLGFBQUssRUFBRUwsS0FBSyxDQUFDTjtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBLEtBRU9NLEtBQUssQ0FBQ1YsSUFBTixDQUFXZSxLQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7S0FyQ3VCakIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVjaC1jaGlwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgTWF0Y2hIaWdobGlnaHRlciBmcm9tIFwiLi9tYXRjaC1oaWdobGlnaHRlclwiXG5cbmNvbnN0IHRlY2hJbWFnZVN0eWxlcyA9IChkYXJrLCBiYWNrZ3JvdW5kLCBkZWZhdWx0U3R5bGVzID0ge30pID0+IHtcbiAgY29uc3QgY29tYmluZWQgPSB7XG4gICAgICBsaWdodDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGRhcms6ICd0cmFuc3BhcmVudCcsXG4gICAgICAuLi5iYWNrZ3JvdW5kXG4gIH1cbiAgY29uc3QgY29sb3IgPSBjb21iaW5lZFtkYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J107XG5cbiAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRTdHlsZXMsXG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogY29sb3IsXG4gICAgICAnYm9yZGVyQ29sb3InOiBjb2xvclxuICB9O1xufVxuXG5UZWNoQ2hpcC5wcm9wVHlwZXMgPSB7XG4gIHRlY2g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdXRsaW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhcms6IFByb3BUeXBlcy5ib29sLFxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5UZWNoQ2hpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbHRlcjogJycsXG4gIG91dGxpbmVkOiBmYWxzZSxcbiAgZGFyazogZmFsc2UsXG4gIGxpbms6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlY2hDaGlwKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2JhZGdlJyxcbiAgICAncm91bmRlZC0wJyxcbiAgICAnYWxpZ24tYm90dG9tJyxcbiAgICBwcm9wcy5kYXJrID8gJ2xpZ2h0JyA6ICdkYXJrJyxcbiAgXVxuXG4gIGlmIChwcm9wcy5vdXRsaW5lZCkge1xuICAgIGNsYXNzZXMucHVzaCgnb3V0bGluZWQnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzPXtjbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIGtleT17cHJvcHMudGVjaC50aXRsZX1cbiAgICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJtci0xXCJcbiAgICAgICAgc3JjPXtwcm9wcy50ZWNoLmltZ31cbiAgICAgICAgYWx0PXtwcm9wcy50ZWNoLnRpdGxlfVxuICAgICAgICBzdHlsZT17dGVjaEltYWdlU3R5bGVzKCFwcm9wcy5kYXJrLCBwcm9wcy50ZWNoLmJhY2tncm91bmQsIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwXG4gICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAge2xpbmsgPyAoXG4gICAgICAgIDxhIGNsYXNzPVwibS0xIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgIDxNYXRjaEhpZ2hsaWdodGVyIHZhbHVlPXtwcm9wcy50ZWNoLnRpdGxlfSBxdWVyeT17cHJvcHMuZmlsdGVyfS8+XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibS0xIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgIDxNYXRjaEhpZ2hsaWdodGVyIHZhbHVlPXtwcm9wcy50ZWNoLnRpdGxlfSBxdWVyeT17cHJvcHMuZmlsdGVyfS8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG5cbiAgICA8L3NwYW4+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})