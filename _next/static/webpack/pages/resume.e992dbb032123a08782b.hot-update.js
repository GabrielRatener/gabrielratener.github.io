webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar getOverrideImageStyles = function getOverrideImageStyles() {\n  var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var outlined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  return {\n    'light': outlined && dark ? 'black' : 'tranparent',\n    'dark': outlined && light ? 'tranparent' : 'white'\n  };\n};\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  outlined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\nTechChip.defaultProps = {\n  filter: '',\n  outlined: false,\n  dark: false,\n  link: false\n};\nfunction TechChip(props) {\n  var classes = ['badge', 'rounded-0', 'align-bottom', props.dark ? 'light' : 'dark'];\n  var backgroundStyles = getOverrideImageStyles(!!props.tech.dark, !!props.tech.light, props.outlined);\n\n  if (props.outlined) {\n    classes.push('outlined');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": classes.join(' '),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(!props.dark, backgroundStyles, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), props.link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"m-1 align-middle\",\n      target: \"blank\",\n      href: props.tech.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsiZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyIsImRhcmsiLCJsaWdodCIsIm91dGxpbmVkIiwidGVjaEltYWdlU3R5bGVzIiwiYmFja2dyb3VuZCIsImRlZmF1bHRTdHlsZXMiLCJjb21iaW5lZCIsImNvbG9yIiwiVGVjaENoaXAiLCJwcm9wVHlwZXMiLCJ0ZWNoIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZpbHRlciIsInN0cmluZyIsImJvb2wiLCJsaW5rIiwiZGVmYXVsdFByb3BzIiwicHJvcHMiLCJjbGFzc2VzIiwiYmFja2dyb3VuZFN0eWxlcyIsInB1c2giLCJqb2luIiwiaW1nIiwidGl0bGUiLCJoZWlnaHQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBbUQ7QUFBQSxNQUFsREMsSUFBa0QsdUVBQTNDLEtBQTJDO0FBQUEsTUFBcENDLEtBQW9DLHVFQUE1QixLQUE0QjtBQUFBLE1BQXJCQyxRQUFxQix1RUFBVixLQUFVO0FBRWhGLFNBQU87QUFDTCxhQUFVQSxRQUFRLElBQUlGLElBQWIsR0FBcUIsT0FBckIsR0FBK0IsWUFEbkM7QUFFTCxZQUFTRSxRQUFRLElBQUlELEtBQWIsR0FBc0IsWUFBdEIsR0FBcUM7QUFGeEMsR0FBUDtBQUlELENBTkQ7O0FBUUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSCxJQUFELEVBQU9JLFVBQVAsRUFBMEM7QUFBQSxNQUF2QkMsYUFBdUIsdUVBQVAsRUFBTzs7QUFDaEUsTUFBTUMsUUFBUTtBQUNaTCxTQUFLLEVBQUUsYUFESztBQUVaRCxRQUFJLEVBQUU7QUFGTSxLQUdUSSxVQUhTLENBQWQ7O0FBS0EsTUFBTUcsS0FBSyxHQUFHRCxRQUFRLENBQUNOLElBQUksR0FBRyxNQUFILEdBQVksT0FBakIsQ0FBdEI7QUFFQSx5Q0FDS0ssYUFETDtBQUVFLHVCQUFtQkUsS0FGckI7QUFHRSxtQkFBZUE7QUFIakI7QUFLRCxDQWJEOztBQWVBQyxRQUFRLENBQUNDLFNBQVQsR0FBcUI7QUFDbkJDLE1BQUksRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESjtBQUVuQkMsUUFBTSxFQUFFSCxpREFBUyxDQUFDSSxNQUZDO0FBR25CYixVQUFRLEVBQUVTLGlEQUFTLENBQUNLLElBSEQ7QUFJbkJoQixNQUFJLEVBQUVXLGlEQUFTLENBQUNLLElBSkc7QUFLbkJDLE1BQUksRUFBRU4saURBQVMsQ0FBQ0s7QUFMRyxDQUFyQjtBQVFBUixRQUFRLENBQUNVLFlBQVQsR0FBd0I7QUFDdEJKLFFBQU0sRUFBRSxFQURjO0FBRXRCWixVQUFRLEVBQUUsS0FGWTtBQUd0QkYsTUFBSSxFQUFFLEtBSGdCO0FBSXRCaUIsTUFBSSxFQUFFO0FBSmdCLENBQXhCO0FBT2UsU0FBU1QsUUFBVCxDQUFrQlcsS0FBbEIsRUFBeUI7QUFDdEMsTUFBTUMsT0FBTyxHQUFHLENBQ2QsT0FEYyxFQUVkLFdBRmMsRUFHZCxjQUhjLEVBSWRELEtBQUssQ0FBQ25CLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BSlQsQ0FBaEI7QUFPQSxNQUFNcUIsZ0JBQWdCLEdBQ3BCdEIsc0JBQXNCLENBQUMsQ0FBQyxDQUFDb0IsS0FBSyxDQUFDVCxJQUFOLENBQVdWLElBQWQsRUFBb0IsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDVCxJQUFOLENBQVdULEtBQWpDLEVBQXdDa0IsS0FBSyxDQUFDakIsUUFBOUMsQ0FEeEI7O0FBR0EsTUFBSWlCLEtBQUssQ0FBQ2pCLFFBQVYsRUFBb0I7QUFDbEJrQixXQUFPLENBQUNFLElBQVIsQ0FBYSxVQUFiO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFDRSxhQUFPRixPQUFPLENBQUNHLElBQVIsQ0FBYSxHQUFiLENBRFQ7QUFBQSw0QkFJRTtBQUNFLGVBQU0sTUFEUjtBQUVFLFNBQUcsRUFBRUosS0FBSyxDQUFDVCxJQUFOLENBQVdjLEdBRmxCO0FBR0UsU0FBRyxFQUFFTCxLQUFLLENBQUNULElBQU4sQ0FBV2UsS0FIbEI7QUFJRSxXQUFLLEVBQUV0QixlQUFlLENBQUMsQ0FBQ2dCLEtBQUssQ0FBQ25CLElBQVIsRUFBY3FCLGdCQUFkLEVBQWdDO0FBQ3BESyxjQUFNLEVBQUU7QUFENEMsT0FBaEM7QUFKeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBWUdQLEtBQUssQ0FBQ0YsSUFBTixnQkFDQztBQUFHLGVBQU0sa0JBQVQ7QUFBNEIsWUFBTSxFQUFDLE9BQW5DO0FBQTJDLFVBQUksRUFBRUUsS0FBSyxDQUFDVCxJQUFOLENBQVdpQixHQUE1RDtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRVIsS0FBSyxDQUFDVCxJQUFOLENBQVdlLEtBQXBDO0FBQTJDLGFBQUssRUFBRU4sS0FBSyxDQUFDTDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQUtDO0FBQU0sZUFBTSxrQkFBWjtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQWtCLGFBQUssRUFBRUssS0FBSyxDQUFDVCxJQUFOLENBQVdlLEtBQXBDO0FBQTJDLGFBQUssRUFBRU4sS0FBSyxDQUFDTDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBLEtBRU9LLEtBQUssQ0FBQ1QsSUFBTixDQUFXZSxLQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7S0F4Q3VCakIsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvdGVjaC1jaGlwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgTWF0Y2hIaWdobGlnaHRlciBmcm9tIFwiLi9tYXRjaC1oaWdobGlnaHRlclwiXG5cbmNvbnN0IGdldE92ZXJyaWRlSW1hZ2VTdHlsZXMgPSAoZGFyayA9IGZhbHNlLCBsaWdodCA9IGZhbHNlLCBvdXRsaW5lZCA9IGZhbHNlKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICAnbGlnaHQnOiAob3V0bGluZWQgJiYgZGFyaykgPyAnYmxhY2snIDogJ3RyYW5wYXJlbnQnLFxuICAgICdkYXJrJzogKG91dGxpbmVkICYmIGxpZ2h0KSA/ICd0cmFucGFyZW50JyA6ICd3aGl0ZSdcbiAgfVxufVxuXG5jb25zdCB0ZWNoSW1hZ2VTdHlsZXMgPSAoZGFyaywgYmFja2dyb3VuZCwgZGVmYXVsdFN0eWxlcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbWJpbmVkID0ge1xuICAgIGxpZ2h0OiAndHJhbnNwYXJlbnQnLFxuICAgIGRhcms6ICd0cmFuc3BhcmVudCcsXG4gICAgLi4uYmFja2dyb3VuZFxuICB9XG4gIGNvbnN0IGNvbG9yID0gY29tYmluZWRbZGFyayA/ICdkYXJrJyA6ICdsaWdodCddO1xuXG4gIHJldHVybiB7XG4gICAgLi4uZGVmYXVsdFN0eWxlcyxcbiAgICAnYmFja2dyb3VuZENvbG9yJzogY29sb3IsXG4gICAgJ2JvcmRlckNvbG9yJzogY29sb3JcbiAgfTtcbn1cblxuVGVjaENoaXAucHJvcFR5cGVzID0ge1xuICB0ZWNoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGZpbHRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3V0bGluZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXJrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGluazogUHJvcFR5cGVzLmJvb2xcbn1cblxuVGVjaENoaXAuZGVmYXVsdFByb3BzID0ge1xuICBmaWx0ZXI6ICcnLFxuICBvdXRsaW5lZDogZmFsc2UsXG4gIGRhcms6IGZhbHNlLFxuICBsaW5rOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWNoQ2hpcChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdiYWRnZScsXG4gICAgJ3JvdW5kZWQtMCcsXG4gICAgJ2FsaWduLWJvdHRvbScsXG4gICAgcHJvcHMuZGFyayA/ICdsaWdodCcgOiAnZGFyaycsXG4gIF1cblxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGVzID1cbiAgICBnZXRPdmVycmlkZUltYWdlU3R5bGVzKCEhcHJvcHMudGVjaC5kYXJrLCAhIXByb3BzLnRlY2gubGlnaHQsIHByb3BzLm91dGxpbmVkKTtcblxuICBpZiAocHJvcHMub3V0bGluZWQpIHtcbiAgICBjbGFzc2VzLnB1c2goJ291dGxpbmVkJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzcz17Y2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICBrZXk9e3Byb3BzLnRlY2gudGl0bGV9XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzcz1cIm1yLTFcIlxuICAgICAgICBzcmM9e3Byb3BzLnRlY2guaW1nfVxuICAgICAgICBhbHQ9e3Byb3BzLnRlY2gudGl0bGV9XG4gICAgICAgIHN0eWxlPXt0ZWNoSW1hZ2VTdHlsZXMoIXByb3BzLmRhcmssIGJhY2tncm91bmRTdHlsZXMsIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICAgIHtwcm9wcy5saW5rID8gKFxuICAgICAgICA8YSBjbGFzcz1cIm0tMSBhbGlnbi1taWRkbGVcIiB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e3Byb3BzLnRlY2gudXJsfT5cbiAgICAgICAgICA8TWF0Y2hIaWdobGlnaHRlciB2YWx1ZT17cHJvcHMudGVjaC50aXRsZX0gcXVlcnk9e3Byb3BzLmZpbHRlcn0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLTEgYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgPE1hdGNoSGlnaGxpZ2h0ZXIgdmFsdWU9e3Byb3BzLnRlY2gudGl0bGV9IHF1ZXJ5PXtwcm9wcy5maWx0ZXJ9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG5cbiAgICA8L3NwYW4+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})