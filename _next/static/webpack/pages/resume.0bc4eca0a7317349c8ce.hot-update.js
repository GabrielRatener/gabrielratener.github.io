webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar getOverrideImageStyles = function getOverrideImageStyles() {\n  var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var outlined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var isDark = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var lightBackground = outlined ? isDark : !isDark;\n  console.log({\n    outlined: outlined,\n    lightBackground: lightBackground,\n    dark: dark,\n    light: light\n  });\n  return {\n    'light': outlined ? 'transparent' : 'black',\n    'dark': outlined ? 'white' : 'transparent'\n  };\n\n  if (lightBackground && dark) {\n    return {\n      'backgroundColor': 'white'\n    };\n  }\n\n  if (!lightBackground && light) {\n    console.log('raturning');\n    return {\n      'background-color': 'black'\n    };\n  }\n\n  return {};\n};\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  outlined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\nTechChip.defaultProps = {\n  filter: '',\n  outlined: false,\n  dark: false,\n  link: false\n};\nfunction TechChip(props) {\n  var classes = ['badge', 'rounded-0', 'align-bottom', props.dark ? 'light' : 'dark'];\n  var backgroundStyles = getOverrideImageStyles(!!props.tech.dark, !!props.tech.light, props.outlined, props.dark);\n\n  if (props.outlined) {\n    classes.push('outlined');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": classes.join(' '),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(!props.dark, backgroundStyles, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), props.link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"m-1 align-middle\",\n      target: \"blank\",\n      href: props.tech.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsiZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyIsImRhcmsiLCJsaWdodCIsIm91dGxpbmVkIiwiaXNEYXJrIiwibGlnaHRCYWNrZ3JvdW5kIiwiY29uc29sZSIsImxvZyIsInRlY2hJbWFnZVN0eWxlcyIsImJhY2tncm91bmQiLCJkZWZhdWx0U3R5bGVzIiwiY29tYmluZWQiLCJjb2xvciIsIlRlY2hDaGlwIiwicHJvcFR5cGVzIiwidGVjaCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmaWx0ZXIiLCJzdHJpbmciLCJib29sIiwibGluayIsImRlZmF1bHRQcm9wcyIsInByb3BzIiwiY2xhc3NlcyIsImJhY2tncm91bmRTdHlsZXMiLCJwdXNoIiwiam9pbiIsImltZyIsInRpdGxlIiwiaGVpZ2h0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQW1FO0FBQUEsTUFBbEVDLElBQWtFLHVFQUEzRCxLQUEyRDtBQUFBLE1BQXBEQyxLQUFvRCx1RUFBNUMsS0FBNEM7QUFBQSxNQUFyQ0MsUUFBcUMsdUVBQTFCLEtBQTBCO0FBQUEsTUFBbkJDLE1BQW1CLHVFQUFWLEtBQVU7QUFDaEcsTUFBTUMsZUFBZSxHQUFHRixRQUFRLEdBQUdDLE1BQUgsR0FBWSxDQUFDQSxNQUE3QztBQUVBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDSixZQUFRLEVBQVJBLFFBQUQ7QUFBV0UsbUJBQWUsRUFBZkEsZUFBWDtBQUE0QkosUUFBSSxFQUFKQSxJQUE1QjtBQUFrQ0MsU0FBSyxFQUFMQTtBQUFsQyxHQUFaO0FBRUEsU0FBTztBQUNMLGFBQVNDLFFBQVEsR0FBRyxhQUFILEdBQW1CLE9BRC9CO0FBRUwsWUFBUUEsUUFBUSxHQUFHLE9BQUgsR0FBYTtBQUZ4QixHQUFQOztBQUtBLE1BQUlFLGVBQWUsSUFBSUosSUFBdkIsRUFBNkI7QUFDM0IsV0FBTztBQUFDLHlCQUFtQjtBQUFwQixLQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDSSxlQUFELElBQW9CSCxLQUF4QixFQUErQjtBQUM3QkksV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFdBQU87QUFBQywwQkFBb0I7QUFBckIsS0FBUDtBQUNEOztBQUVELFNBQU8sRUFBUDtBQUNELENBcEJEOztBQXNCQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNQLElBQUQsRUFBT1EsVUFBUCxFQUEwQztBQUFBLE1BQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUNoRSxNQUFNQyxRQUFRO0FBQ1pULFNBQUssRUFBRSxhQURLO0FBRVpELFFBQUksRUFBRTtBQUZNLEtBR1RRLFVBSFMsQ0FBZDs7QUFLQSxNQUFNRyxLQUFLLEdBQUdELFFBQVEsQ0FBQ1YsSUFBSSxHQUFHLE1BQUgsR0FBWSxPQUFqQixDQUF0QjtBQUVBLHlDQUNLUyxhQURMO0FBRUUsdUJBQW1CRSxLQUZyQjtBQUdFLG1CQUFlQTtBQUhqQjtBQUtELENBYkQ7O0FBZUFDLFFBQVEsQ0FBQ0MsU0FBVCxHQUFxQjtBQUNuQkMsTUFBSSxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURKO0FBRW5CQyxRQUFNLEVBQUVILGlEQUFTLENBQUNJLE1BRkM7QUFHbkJqQixVQUFRLEVBQUVhLGlEQUFTLENBQUNLLElBSEQ7QUFJbkJwQixNQUFJLEVBQUVlLGlEQUFTLENBQUNLLElBSkc7QUFLbkJDLE1BQUksRUFBRU4saURBQVMsQ0FBQ0s7QUFMRyxDQUFyQjtBQVFBUixRQUFRLENBQUNVLFlBQVQsR0FBd0I7QUFDdEJKLFFBQU0sRUFBRSxFQURjO0FBRXRCaEIsVUFBUSxFQUFFLEtBRlk7QUFHdEJGLE1BQUksRUFBRSxLQUhnQjtBQUl0QnFCLE1BQUksRUFBRTtBQUpnQixDQUF4QjtBQU9lLFNBQVNULFFBQVQsQ0FBa0JXLEtBQWxCLEVBQXlCO0FBQ3RDLE1BQU1DLE9BQU8sR0FBRyxDQUNkLE9BRGMsRUFFZCxXQUZjLEVBR2QsY0FIYyxFQUlkRCxLQUFLLENBQUN2QixJQUFOLEdBQWEsT0FBYixHQUF1QixNQUpULENBQWhCO0FBT0EsTUFBTXlCLGdCQUFnQixHQUNwQjFCLHNCQUFzQixDQUFDLENBQUMsQ0FBQ3dCLEtBQUssQ0FBQ1QsSUFBTixDQUFXZCxJQUFkLEVBQW9CLENBQUMsQ0FBQ3VCLEtBQUssQ0FBQ1QsSUFBTixDQUFXYixLQUFqQyxFQUF3Q3NCLEtBQUssQ0FBQ3JCLFFBQTlDLEVBQXdEcUIsS0FBSyxDQUFDdkIsSUFBOUQsQ0FEeEI7O0FBR0EsTUFBSXVCLEtBQUssQ0FBQ3JCLFFBQVYsRUFBb0I7QUFDbEJzQixXQUFPLENBQUNFLElBQVIsQ0FBYSxVQUFiO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFPRixPQUFPLENBQUNHLElBQVIsQ0FBYSxHQUFiLENBRFQ7QUFBQSw0QkFJRTtBQUNFLGVBQU0sTUFEUjtBQUVFLFNBQUcsRUFBRUosS0FBSyxDQUFDVCxJQUFOLENBQVdjLEdBRmxCO0FBR0UsU0FBRyxFQUFFTCxLQUFLLENBQUNULElBQU4sQ0FBV2UsS0FIbEI7QUFJRSxXQUFLLEVBQUV0QixlQUFlLENBQUMsQ0FBQ2dCLEtBQUssQ0FBQ3ZCLElBQVIsRUFBY3lCLGdCQUFkLEVBQWdDO0FBQ3BESyxjQUFNLEVBQUU7QUFENEMsT0FBaEM7QUFKeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBWUdQLEtBQUssQ0FBQ0YsSUFBTixnQkFDQztBQUFHLGVBQU0sa0JBQVQ7QUFBNEIsWUFBTSxFQUFDLE9BQW5DO0FBQTJDLFVBQUksRUFBRUUsS0FBSyxDQUFDVCxJQUFOLENBQVdpQixHQUE1RDtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRVIsS0FBSyxDQUFDVCxJQUFOLENBQVdlLEtBQXBDO0FBQTJDLGFBQUssRUFBRU4sS0FBSyxDQUFDTDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQUtDO0FBQU0sZUFBTSxrQkFBWjtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRUssS0FBSyxDQUFDVCxJQUFOLENBQVdlLEtBQXBDO0FBQTJDLGFBQUssRUFBRU4sS0FBSyxDQUFDTDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBLEtBRU9LLEtBQUssQ0FBQ1QsSUFBTixDQUFXZSxLQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7S0F4Q3VCakIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVjaC1jaGlwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgTWF0Y2hIaWdobGlnaHRlciBmcm9tIFwiLi9tYXRjaC1oaWdobGlnaHRlclwiXG5cbmNvbnN0IGdldE92ZXJyaWRlSW1hZ2VTdHlsZXMgPSAoZGFyayA9IGZhbHNlLCBsaWdodCA9IGZhbHNlLCBvdXRsaW5lZCA9IGZhbHNlLCBpc0RhcmsgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBsaWdodEJhY2tncm91bmQgPSBvdXRsaW5lZCA/IGlzRGFyayA6ICFpc0Rhcms7XG5cbiAgY29uc29sZS5sb2coe291dGxpbmVkLCBsaWdodEJhY2tncm91bmQsIGRhcmssIGxpZ2h0fSk7XG5cbiAgcmV0dXJuIHtcbiAgICAnbGlnaHQnOiBvdXRsaW5lZCA/ICd0cmFuc3BhcmVudCcgOiAnYmxhY2snLFxuICAgICdkYXJrJzogb3V0bGluZWQgPyAnd2hpdGUnIDogJ3RyYW5zcGFyZW50J1xuICB9XG5cbiAgaWYgKGxpZ2h0QmFja2dyb3VuZCAmJiBkYXJrKSB7XG4gICAgcmV0dXJuIHsnYmFja2dyb3VuZENvbG9yJzogJ3doaXRlJ307XG4gIH1cblxuICBpZiAoIWxpZ2h0QmFja2dyb3VuZCAmJiBsaWdodCkge1xuICAgIGNvbnNvbGUubG9nKCdyYXR1cm5pbmcnKVxuICAgIHJldHVybiB7J2JhY2tncm91bmQtY29sb3InOiAnYmxhY2snfTtcbiAgfVxuXG4gIHJldHVybiB7fTtcbn1cblxuY29uc3QgdGVjaEltYWdlU3R5bGVzID0gKGRhcmssIGJhY2tncm91bmQsIGRlZmF1bHRTdHlsZXMgPSB7fSkgPT4ge1xuICBjb25zdCBjb21iaW5lZCA9IHtcbiAgICBsaWdodDogJ3RyYW5zcGFyZW50JyxcbiAgICBkYXJrOiAndHJhbnNwYXJlbnQnLFxuICAgIC4uLmJhY2tncm91bmRcbiAgfVxuICBjb25zdCBjb2xvciA9IGNvbWJpbmVkW2RhcmsgPyAnZGFyaycgOiAnbGlnaHQnXTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG4gICAgJ2JhY2tncm91bmRDb2xvcic6IGNvbG9yLFxuICAgICdib3JkZXJDb2xvcic6IGNvbG9yXG4gIH07XG59XG5cblRlY2hDaGlwLnByb3BUeXBlcyA9IHtcbiAgdGVjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG91dGxpbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGFyazogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbms6IFByb3BUeXBlcy5ib29sXG59XG5cblRlY2hDaGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsdGVyOiAnJyxcbiAgb3V0bGluZWQ6IGZhbHNlLFxuICBkYXJrOiBmYWxzZSxcbiAgbGluazogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVjaENoaXAocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnYmFkZ2UnLFxuICAgICdyb3VuZGVkLTAnLFxuICAgICdhbGlnbi1ib3R0b20nLFxuICAgIHByb3BzLmRhcmsgPyAnbGlnaHQnIDogJ2RhcmsnLFxuICBdXG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlcyA9XG4gICAgZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyghIXByb3BzLnRlY2guZGFyaywgISFwcm9wcy50ZWNoLmxpZ2h0LCBwcm9wcy5vdXRsaW5lZCwgcHJvcHMuZGFyayk7XG5cbiAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgY2xhc3Nlcy5wdXNoKCdvdXRsaW5lZCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3M9e2NsYXNzZXMuam9pbignICcpfVxuICAgICAga2V5PXtwcm9wcy50ZWNoLnRpdGxlfVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJtci0xXCJcbiAgICAgICAgc3JjPXtwcm9wcy50ZWNoLmltZ31cbiAgICAgICAgYWx0PXtwcm9wcy50ZWNoLnRpdGxlfVxuICAgICAgICBzdHlsZT17dGVjaEltYWdlU3R5bGVzKCFwcm9wcy5kYXJrLCBiYWNrZ3JvdW5kU3R5bGVzLCB7XG4gICAgICAgICAgaGVpZ2h0OiAyMFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgICB7cHJvcHMubGluayA/IChcbiAgICAgICAgPGEgY2xhc3M9XCJtLTEgYWxpZ24tbWlkZGxlXCIgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPXtwcm9wcy50ZWNoLnVybH0+XG4gICAgICAgICAgPE1hdGNoSGlnaGxpZ2h0ZXIgdmFsdWU9e3Byb3BzLnRlY2gudGl0bGV9IHF1ZXJ5PXtwcm9wcy5maWx0ZXJ9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibS0xIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgIDxNYXRjaEhpZ2hsaWdodGVyIHZhbHVlPXtwcm9wcy50ZWNoLnRpdGxlfSBxdWVyeT17cHJvcHMuZmlsdGVyfSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuXG4gICAgPC9zcGFuPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})