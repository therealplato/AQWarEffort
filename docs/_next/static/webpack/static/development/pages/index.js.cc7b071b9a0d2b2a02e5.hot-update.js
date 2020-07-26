webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Ally.js":
/*!****************************!*\
  !*** ./components/Ally.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ally; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ \"./components/Item.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/dean/github/aqWarEffort/components/Ally.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Ally = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Ally, _Component);\n\n  var _super = _createSuper(Ally);\n\n  function Ally(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Ally);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Ally, [{\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        prog: {\n          width: \"\".concat(Math.floor(this.props.table.current.sumTotal / this.props.table.total.sumTotal * 100), \"%\")\n        }\n      };\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 7\n        }\n      }, __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_bannerpvp_02.jpg',\n        id: 21436,\n        total: this.props.table.total.sumTotal,\n        current: this.props.table.current.sumTotal,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }\n      }), __jsx(\"hr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_ingot_02.jpg',\n        id: 2840,\n        total: this.props.table.total.copperBar,\n        current: this.props.table.current.copperBar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_leatherscrap_08.jpg',\n        id: 4304,\n        total: this.props.table.total.thickLeather,\n        current: this.props.table.current.thickLeather,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_bandage_11.jpg',\n        id: 14529,\n        total: this.props.table.total.runeclothBandage,\n        current: this.props.table.current.runeclothBandage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_herb_17.jpg',\n        id: 8831,\n        total: this.props.table.total.purpleLotus,\n        current: this.props.table.current.purpleLotus,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_fish_01.jpg',\n        id: 6887,\n        total: this.props.table.total.spottedYellowtail,\n        current: this.props.table.current.spottedYellowtail,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }), __jsx(\"hr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_bandage_15.jpg',\n        id: 1251,\n        total: this.props.table.total.linenBandage,\n        current: this.props.table.current.linenBandage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_bandage_01.jpg',\n        id: 6450,\n        total: this.props.table.total.silkBandage,\n        current: this.props.table.current.silkBandage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_fish_27.jpg',\n        id: 5095,\n        total: this.props.table.total.rainbowFin,\n        current: this.props.table.current.rainbowFin,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_food_50.jpg',\n        id: 12210,\n        total: this.props.table.total.roastRaptor,\n        current: this.props.table.current.roastRaptor,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_herb_11.jpg',\n        id: 3820,\n        total: this.props.table.total.stranglekelp,\n        current: this.props.table.current.stranglekelp,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_herb_13.jpg',\n        id: 8836,\n        total: this.props.table.total.arthasTear,\n        current: this.props.table.current.arthasTear,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_ingot_iron.jpg',\n        id: 3575,\n        total: this.props.table.total.ironBar,\n        current: this.props.table.current.ironBar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_ingot_07.jpg',\n        id: 12359,\n        total: this.props.table.total.thoriumBar,\n        current: this.props.table.current.thoriumBar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_leatherscrap_03.jpg',\n        id: 2318,\n        total: this.props.table.total.lightLeather,\n        current: this.props.table.current.lightLeather,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 9\n        }\n      }), __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        pic: 'inv_misc_leatherscrap_05.jpg',\n        id: 2319,\n        total: this.props.table.total.mediumLeather,\n        current: this.props.table.current.mediumLeather,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return Ally;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsbHkuanM/YmE4NCJdLCJuYW1lcyI6WyJBbGx5IiwicHJvcHMiLCJzdHlsZXMiLCJwcm9nIiwid2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ0YWJsZSIsImN1cnJlbnQiLCJzdW1Ub3RhbCIsInRvdGFsIiwiY29wcGVyQmFyIiwidGhpY2tMZWF0aGVyIiwicnVuZWNsb3RoQmFuZGFnZSIsInB1cnBsZUxvdHVzIiwic3BvdHRlZFllbGxvd3RhaWwiLCJsaW5lbkJhbmRhZ2UiLCJzaWxrQmFuZGFnZSIsInJhaW5ib3dGaW4iLCJyb2FzdFJhcHRvciIsInN0cmFuZ2xla2VscCIsImFydGhhc1RlYXIiLCJpcm9uQmFyIiwidGhvcml1bUJhciIsImxpZ2h0TGVhdGhlciIsIm1lZGl1bUxlYXRoZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsSTs7Ozs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxZQUFJLEVBQUU7QUFDSkMsZUFBSyxZQUFLQyxJQUFJLENBQUNDLEtBQUwsQ0FDUCxLQUFLTCxLQUFMLENBQVdNLEtBQVgsQ0FBaUJDLE9BQWpCLENBQXlCQyxRQUF6QixHQUNDLEtBQUtSLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkcsS0FBakIsQ0FBdUJELFFBRHpCLEdBRUUsR0FITSxDQUFMO0FBREQ7QUFETyxPQUFmO0FBU0EsYUFDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDZDQUFEO0FBQ0UsV0FBRyxFQUFFLHNCQURQO0FBRUUsVUFBRSxFQUFFLEtBRk47QUFHRSxhQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXTSxLQUFYLENBQWlCRyxLQUFqQixDQUF1QkQsUUFIaEM7QUFJ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RUFySCtCQywrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWxseS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxseSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHByb2c6IHtcbiAgICAgICAgd2lkdGg6IGAke01hdGguZmxvb3IoXG4gICAgICAgICAgKHRoaXMucHJvcHMudGFibGUuY3VycmVudC5zdW1Ub3RhbCAvXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRhYmxlLnRvdGFsLnN1bVRvdGFsKSAqXG4gICAgICAgICAgICAxMDBcbiAgICAgICAgKX0lYCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SXRlbVxuICAgICAgICAgIHBpYz17J2ludl9iYW5uZXJwdnBfMDIuanBnJ31cbiAgICAgICAgICBpZD17MjE0MzZ9XG4gICAgICAgICAgdG90YWw9e3RoaXMucHJvcHMudGFibGUudG90YWwuc3VtVG90YWx9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50LnN1bVRvdGFsfVxuICAgICAgICAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfaW5nb3RfMDIuanBnJ31cbiAgICAgICAgICBpZD17Mjg0MH1cbiAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy50YWJsZS50b3RhbC5jb3BwZXJCYXJ9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50LmNvcHBlckJhcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19sZWF0aGVyc2NyYXBfMDguanBnJ31cbiAgICAgICAgICBpZD17NDMwNH1cbiAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy50YWJsZS50b3RhbC50aGlja0xlYXRoZXJ9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50LnRoaWNrTGVhdGhlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19iYW5kYWdlXzExLmpwZyd9XG4gICAgICAgICAgaWQ9ezE0NTI5fVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLnJ1bmVjbG90aEJhbmRhZ2V9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50LnJ1bmVjbG90aEJhbmRhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgcGljPXsnaW52X21pc2NfaGVyYl8xNy5qcGcnfVxuICAgICAgICAgIGlkPXs4ODMxfVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLnB1cnBsZUxvdHVzfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC5wdXJwbGVMb3R1c31cbiAgICAgICAgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19maXNoXzAxLmpwZyd9XG4gICAgICAgICAgaWQ9ezY4ODd9XG4gICAgICAgICAgdG90YWw9e3RoaXMucHJvcHMudGFibGUudG90YWwuc3BvdHRlZFllbGxvd3RhaWx9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50LnNwb3R0ZWRZZWxsb3d0YWlsfVxuICAgICAgICAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19iYW5kYWdlXzE1LmpwZyd9XG4gICAgICAgICAgaWQ9ezEyNTF9XG4gICAgICAgICAgdG90YWw9e3RoaXMucHJvcHMudGFibGUudG90YWwubGluZW5CYW5kYWdlfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC5saW5lbkJhbmRhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgcGljPXsnaW52X21pc2NfYmFuZGFnZV8wMS5qcGcnfVxuICAgICAgICAgIGlkPXs2NDUwfVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLnNpbGtCYW5kYWdlfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC5zaWxrQmFuZGFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19maXNoXzI3LmpwZyd9XG4gICAgICAgICAgaWQ9ezUwOTV9XG4gICAgICAgICAgdG90YWw9e3RoaXMucHJvcHMudGFibGUudG90YWwucmFpbmJvd0Zpbn1cbiAgICAgICAgICBjdXJyZW50PXt0aGlzLnByb3BzLnRhYmxlLmN1cnJlbnQucmFpbmJvd0Zpbn1cbiAgICAgICAgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19mb29kXzUwLmpwZyd9XG4gICAgICAgICAgaWQ9ezEyMjEwfVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLnJvYXN0UmFwdG9yfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC5yb2FzdFJhcHRvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBwaWM9eydpbnZfbWlzY19oZXJiXzExLmpwZyd9XG4gICAgICAgICAgaWQ9ezM4MjB9XG4gICAgICAgICAgdG90YWw9e3RoaXMucHJvcHMudGFibGUudG90YWwuc3RyYW5nbGVrZWxwfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC5zdHJhbmdsZWtlbHB9XG4gICAgICAgIC8+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgcGljPXsnaW52X21pc2NfaGVyYl8xMy5qcGcnfVxuICAgICAgICAgIGlkPXs4ODM2fVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLmFydGhhc1RlYXJ9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50LmFydGhhc1RlYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgcGljPXsnaW52X2luZ290X2lyb24uanBnJ31cbiAgICAgICAgICBpZD17MzU3NX1cbiAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy50YWJsZS50b3RhbC5pcm9uQmFyfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC5pcm9uQmFyfVxuICAgICAgICAvPlxuICAgICAgICA8SXRlbVxuICAgICAgICAgIHBpYz17J2ludl9pbmdvdF8wNy5qcGcnfVxuICAgICAgICAgIGlkPXsxMjM1OX1cbiAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy50YWJsZS50b3RhbC50aG9yaXVtQmFyfVxuICAgICAgICAgIGN1cnJlbnQ9e3RoaXMucHJvcHMudGFibGUuY3VycmVudC50aG9yaXVtQmFyfVxuICAgICAgICAvPlxuICAgICAgICA8SXRlbVxuICAgICAgICAgIHBpYz17J2ludl9taXNjX2xlYXRoZXJzY3JhcF8wMy5qcGcnfVxuICAgICAgICAgIGlkPXsyMzE4fVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLmxpZ2h0TGVhdGhlcn1cbiAgICAgICAgICBjdXJyZW50PXt0aGlzLnByb3BzLnRhYmxlLmN1cnJlbnQubGlnaHRMZWF0aGVyfVxuICAgICAgICAvPlxuICAgICAgICA8SXRlbVxuICAgICAgICAgIHBpYz17J2ludl9taXNjX2xlYXRoZXJzY3JhcF8wNS5qcGcnfVxuICAgICAgICAgIGlkPXsyMzE5fVxuICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRhYmxlLnRvdGFsLm1lZGl1bUxlYXRoZXJ9XG4gICAgICAgICAgY3VycmVudD17dGhpcy5wcm9wcy50YWJsZS5jdXJyZW50Lm1lZGl1bUxlYXRoZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Ally.js\n");

/***/ })

})