webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/tech-chip.jsx":
/*!**********************************!*\
  !*** ./components/tech-chip.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TechChip; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _match_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-highlighter */ \"./components/match-highlighter.jsx\");\n\n\nvar _jsxFileName = \"/home/geebo/Projects/gabriel-ratener-site/components/tech-chip.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_geebo_Projects_gabriel_ratener_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar getOverrideImageStyles = function getOverrideImageStyles() {\n  var dark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var outlined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  if (outlined) {\n    return {\n      'light': dark ? 'black' : 'transparent',\n      'dark': light ? 'white' : 'transparent'\n    };\n  } else {\n    return {\n      'light': light ? 'black' : 'transparent',\n      'dark': dark ? 'white' : 'transparent'\n    };\n  }\n};\n\nvar techImageStyles = function techImageStyles(dark, background) {\n  var defaultStyles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var combined = _objectSpread({\n    light: 'transparent',\n    dark: 'transparent'\n  }, background);\n\n  var color = combined[dark ? 'dark' : 'light'];\n  return _objectSpread(_objectSpread({}, defaultStyles), {}, {\n    'backgroundColor': color,\n    'borderColor': color\n  });\n};\n\nTechChip.propTypes = {\n  tech: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  outlined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  dark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool\n};\nTechChip.defaultProps = {\n  filter: '',\n  outlined: false,\n  dark: false,\n  link: false\n};\nfunction TechChip(props) {\n  var classes = ['badge', 'rounded-0', 'align-bottom', props.dark ? 'light' : 'dark'];\n  var backgroundStyles = getOverrideImageStyles(!!props.tech.dark, !!props.tech.light, props.outlined);\n\n  if (props.outlined) {\n    classes.push('outlined');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    \"class\": classes.join(' '),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      \"class\": \"mr-1\",\n      src: props.tech.img,\n      alt: props.tech.title,\n      style: techImageStyles(props.dark, backgroundStyles, {\n        height: 20\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), props.link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      \"class\": \"m-1 align-middle\",\n      target: \"blank\",\n      href: props.tech.url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      \"class\": \"m-1 align-middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_match_highlighter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        value: props.tech.title,\n        query: props.filter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, this)]\n  }, props.tech.title, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n_c = TechChip;\n\nvar _c;\n\n$RefreshReg$(_c, \"TechChip\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4P2JkMWUiXSwibmFtZXMiOlsiZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyIsImRhcmsiLCJsaWdodCIsIm91dGxpbmVkIiwidGVjaEltYWdlU3R5bGVzIiwiYmFja2dyb3VuZCIsImRlZmF1bHRTdHlsZXMiLCJjb21iaW5lZCIsImNvbG9yIiwiVGVjaENoaXAiLCJwcm9wVHlwZXMiLCJ0ZWNoIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZpbHRlciIsInN0cmluZyIsImJvb2wiLCJsaW5rIiwiZGVmYXVsdFByb3BzIiwicHJvcHMiLCJjbGFzc2VzIiwiYmFja2dyb3VuZFN0eWxlcyIsInB1c2giLCJqb2luIiwiaW1nIiwidGl0bGUiLCJoZWlnaHQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBbUQ7QUFBQSxNQUFsREMsSUFBa0QsdUVBQTNDLEtBQTJDO0FBQUEsTUFBcENDLEtBQW9DLHVFQUE1QixLQUE0QjtBQUFBLE1BQXJCQyxRQUFxQix1RUFBVixLQUFVOztBQUVoRixNQUFJQSxRQUFKLEVBQWM7QUFDWixXQUFPO0FBQ0wsZUFBU0YsSUFBSSxHQUFHLE9BQUgsR0FBYSxhQURyQjtBQUVMLGNBQVFDLEtBQUssR0FBRyxPQUFILEdBQWE7QUFGckIsS0FBUDtBQUlELEdBTEQsTUFLTztBQUNMLFdBQU87QUFDTCxlQUFTQSxLQUFLLEdBQUcsT0FBSCxHQUFhLGFBRHRCO0FBRUwsY0FBUUQsSUFBSSxHQUFHLE9BQUgsR0FBYTtBQUZwQixLQUFQO0FBSUQ7QUFDRixDQWJEOztBQWVBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0gsSUFBRCxFQUFPSSxVQUFQLEVBQTBDO0FBQUEsTUFBdkJDLGFBQXVCLHVFQUFQLEVBQU87O0FBQ2hFLE1BQU1DLFFBQVE7QUFDWkwsU0FBSyxFQUFFLGFBREs7QUFFWkQsUUFBSSxFQUFFO0FBRk0sS0FHVEksVUFIUyxDQUFkOztBQUtBLE1BQU1HLEtBQUssR0FBR0QsUUFBUSxDQUFDTixJQUFJLEdBQUcsTUFBSCxHQUFZLE9BQWpCLENBQXRCO0FBRUEseUNBQ0tLLGFBREw7QUFFRSx1QkFBbUJFLEtBRnJCO0FBR0UsbUJBQWVBO0FBSGpCO0FBS0QsQ0FiRDs7QUFlQUMsUUFBUSxDQUFDQyxTQUFULEdBQXFCO0FBQ25CQyxNQUFJLEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREo7QUFFbkJDLFFBQU0sRUFBRUgsaURBQVMsQ0FBQ0ksTUFGQztBQUduQmIsVUFBUSxFQUFFUyxpREFBUyxDQUFDSyxJQUhEO0FBSW5CaEIsTUFBSSxFQUFFVyxpREFBUyxDQUFDSyxJQUpHO0FBS25CQyxNQUFJLEVBQUVOLGlEQUFTLENBQUNLO0FBTEcsQ0FBckI7QUFRQVIsUUFBUSxDQUFDVSxZQUFULEdBQXdCO0FBQ3RCSixRQUFNLEVBQUUsRUFEYztBQUV0QlosVUFBUSxFQUFFLEtBRlk7QUFHdEJGLE1BQUksRUFBRSxLQUhnQjtBQUl0QmlCLE1BQUksRUFBRTtBQUpnQixDQUF4QjtBQU9lLFNBQVNULFFBQVQsQ0FBa0JXLEtBQWxCLEVBQXlCO0FBQ3RDLE1BQU1DLE9BQU8sR0FBRyxDQUNkLE9BRGMsRUFFZCxXQUZjLEVBR2QsY0FIYyxFQUlkRCxLQUFLLENBQUNuQixJQUFOLEdBQWEsT0FBYixHQUF1QixNQUpULENBQWhCO0FBT0EsTUFBTXFCLGdCQUFnQixHQUNwQnRCLHNCQUFzQixDQUFDLENBQUMsQ0FBQ29CLEtBQUssQ0FBQ1QsSUFBTixDQUFXVixJQUFkLEVBQW9CLENBQUMsQ0FBQ21CLEtBQUssQ0FBQ1QsSUFBTixDQUFXVCxLQUFqQyxFQUF3Q2tCLEtBQUssQ0FBQ2pCLFFBQTlDLENBRHhCOztBQUdBLE1BQUlpQixLQUFLLENBQUNqQixRQUFWLEVBQW9CO0FBQ2xCa0IsV0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBYjtBQUNEOztBQUVELHNCQUNFO0FBQ0UsYUFBT0YsT0FBTyxDQUFDRyxJQUFSLENBQWEsR0FBYixDQURUO0FBQUEsNEJBSUU7QUFDRSxlQUFNLE1BRFI7QUFFRSxTQUFHLEVBQUVKLEtBQUssQ0FBQ1QsSUFBTixDQUFXYyxHQUZsQjtBQUdFLFNBQUcsRUFBRUwsS0FBSyxDQUFDVCxJQUFOLENBQVdlLEtBSGxCO0FBSUUsV0FBSyxFQUFFdEIsZUFBZSxDQUFDZ0IsS0FBSyxDQUFDbkIsSUFBUCxFQUFhcUIsZ0JBQWIsRUFBK0I7QUFDbkRLLGNBQU0sRUFBRTtBQUQyQyxPQUEvQjtBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFZR1AsS0FBSyxDQUFDRixJQUFOLGdCQUNDO0FBQUcsZUFBTSxrQkFBVDtBQUE0QixZQUFNLEVBQUMsT0FBbkM7QUFBMkMsVUFBSSxFQUFFRSxLQUFLLENBQUNULElBQU4sQ0FBV2lCLEdBQTVEO0FBQUEsNkJBQ0UscUVBQUMsMERBQUQ7QUFBa0IsYUFBSyxFQUFFUixLQUFLLENBQUNULElBQU4sQ0FBV2UsS0FBcEM7QUFBMkMsYUFBSyxFQUFFTixLQUFLLENBQUNMO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZ0JBS0M7QUFBTSxlQUFNLGtCQUFaO0FBQUEsNkJBQ0UscUVBQUMsMERBQUQ7QUFBa0IsYUFBSyxFQUFFSyxLQUFLLENBQUNULElBQU4sQ0FBV2UsS0FBcEM7QUFBMkMsYUFBSyxFQUFFTixLQUFLLENBQUNMO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUEsS0FFT0ssS0FBSyxDQUFDVCxJQUFOLENBQVdlLEtBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDtLQXhDdUJqQixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy90ZWNoLWNoaXAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBNYXRjaEhpZ2hsaWdodGVyIGZyb20gXCIuL21hdGNoLWhpZ2hsaWdodGVyXCJcblxuY29uc3QgZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyA9IChkYXJrID0gZmFsc2UsIGxpZ2h0ID0gZmFsc2UsIG91dGxpbmVkID0gZmFsc2UpID0+IHtcblxuICBpZiAob3V0bGluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2xpZ2h0JzogZGFyayA/ICdibGFjaycgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgJ2RhcmsnOiBsaWdodCA/ICd3aGl0ZScgOiAndHJhbnNwYXJlbnQnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAnbGlnaHQnOiBsaWdodCA/ICdibGFjaycgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgJ2RhcmsnOiBkYXJrID8gJ3doaXRlJyA6ICd0cmFuc3BhcmVudCdcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdGVjaEltYWdlU3R5bGVzID0gKGRhcmssIGJhY2tncm91bmQsIGRlZmF1bHRTdHlsZXMgPSB7fSkgPT4ge1xuICBjb25zdCBjb21iaW5lZCA9IHtcbiAgICBsaWdodDogJ3RyYW5zcGFyZW50JyxcbiAgICBkYXJrOiAndHJhbnNwYXJlbnQnLFxuICAgIC4uLmJhY2tncm91bmRcbiAgfVxuICBjb25zdCBjb2xvciA9IGNvbWJpbmVkW2RhcmsgPyAnZGFyaycgOiAnbGlnaHQnXTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG4gICAgJ2JhY2tncm91bmRDb2xvcic6IGNvbG9yLFxuICAgICdib3JkZXJDb2xvcic6IGNvbG9yXG4gIH07XG59XG5cblRlY2hDaGlwLnByb3BUeXBlcyA9IHtcbiAgdGVjaDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG91dGxpbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGFyazogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbms6IFByb3BUeXBlcy5ib29sXG59XG5cblRlY2hDaGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsdGVyOiAnJyxcbiAgb3V0bGluZWQ6IGZhbHNlLFxuICBkYXJrOiBmYWxzZSxcbiAgbGluazogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVjaENoaXAocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnYmFkZ2UnLFxuICAgICdyb3VuZGVkLTAnLFxuICAgICdhbGlnbi1ib3R0b20nLFxuICAgIHByb3BzLmRhcmsgPyAnbGlnaHQnIDogJ2RhcmsnLFxuICBdXG5cbiAgY29uc3QgYmFja2dyb3VuZFN0eWxlcyA9XG4gICAgZ2V0T3ZlcnJpZGVJbWFnZVN0eWxlcyghIXByb3BzLnRlY2guZGFyaywgISFwcm9wcy50ZWNoLmxpZ2h0LCBwcm9wcy5vdXRsaW5lZCk7XG5cbiAgaWYgKHByb3BzLm91dGxpbmVkKSB7XG4gICAgY2xhc3Nlcy5wdXNoKCdvdXRsaW5lZCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3M9e2NsYXNzZXMuam9pbignICcpfVxuICAgICAga2V5PXtwcm9wcy50ZWNoLnRpdGxlfVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJtci0xXCJcbiAgICAgICAgc3JjPXtwcm9wcy50ZWNoLmltZ31cbiAgICAgICAgYWx0PXtwcm9wcy50ZWNoLnRpdGxlfVxuICAgICAgICBzdHlsZT17dGVjaEltYWdlU3R5bGVzKHByb3BzLmRhcmssIGJhY2tncm91bmRTdHlsZXMsIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwXG4gICAgICAgIH0pfVxuICAgICAgLz5cbiAgICAgIHtwcm9wcy5saW5rID8gKFxuICAgICAgICA8YSBjbGFzcz1cIm0tMSBhbGlnbi1taWRkbGVcIiB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e3Byb3BzLnRlY2gudXJsfT5cbiAgICAgICAgICA8TWF0Y2hIaWdobGlnaHRlciB2YWx1ZT17cHJvcHMudGVjaC50aXRsZX0gcXVlcnk9e3Byb3BzLmZpbHRlcn0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLTEgYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgPE1hdGNoSGlnaGxpZ2h0ZXIgdmFsdWU9e3Byb3BzLnRlY2gudGl0bGV9IHF1ZXJ5PXtwcm9wcy5maWx0ZXJ9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG5cbiAgICA8L3NwYW4+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tech-chip.jsx\n");

/***/ })

})