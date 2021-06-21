module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/DiffSettingsPage.js":
/*!***************************************!*\
  !*** ./src/admin/DiffSettingsPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffSettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);




 // just to make things easier

var settingsPrefix = 'the-turk-diff.';
var localePrefix = 'the-turk-diff.admin.settings.';

var DiffSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffSettingsPage, _ExtensionPage);

  function DiffSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = DiffSettingsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
  };

  _proto.content = function content() {
    var _this = this;

    return [m('.container', [m('.DiffSettingsPage', [m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'mainPostOnly', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'mainPostOnly')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'mainPostOnly')))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'separateBlock', '1')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'separateBlock')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'separateBlock')))]), m('.Form-group', [m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'textFormatting', '1')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'textFormatting')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'textFormatting')))]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'detailLevel')), m('div', flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      options: {
        none: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'noneLevel'),
        line: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'lineLevel'),
        word: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'wordLevel'),
        "char": flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'charLevel')
      },
      onchange: this.setting(settingsPrefix + 'detailLevel'),
      value: this.setting(settingsPrefix + 'detailLevel')() || this.setting(settingsPrefix + 'detailLevel')('line')
    }))]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'neighborLines')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'neighborLinesHelp')), m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'diffSettingsIcon fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'onlyUnsigned'))), m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'neighborLines', '2'),
      placeholder: '2',
      style: 'width:25%'
    })]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'mergeThreshold')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'mergeThresholdHelp')), m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'diffSettingsIcon fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'usePoint'))), m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'mergeThreshold', '0.8'),
      placeholder: '0.8',
      style: 'width:25%'
    })]), m('.Form-group', [m('label', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'dbOptimisation')), m('.helpText', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'archiveInfo')), m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'archiveOlds', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'archiveOlds')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'archiveOlds'))), m('div', {
      className: 'helpText'
    }, m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'archiveOldsInfo'))), m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'diffSettingsIcon fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'usePoint'))), m('div', {
      className: 'diffSettingsFlex'
    }, m('div', m('.Form-group', [m('label', m("strong", null, "A:")), m('div', m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'archiveLimit', '15'),
      placeholder: '15'
    }))])), m('div', m('.Form-group', [m('label', m("strong", null, "m:")), m('div', m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'archiveSlope', '0.4'),
      placeholder: '0.4'
    }))])), m('div', m('.Form-group', [m('label', m("strong", null, "b:")), m('div', m('input[type=text].FormControl', {
      bidi: this.setting(settingsPrefix + 'archiveCoefficient', '0'),
      placeholder: '0'
    }))]))), m('label', flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.setting(settingsPrefix + 'useCrons', '0')() === '1',
      onchange: function onchange(value) {
        _this.setting(settingsPrefix + 'useCrons')(value ? '1' : '0');
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'useCrons'))), m('div', {
      className: 'helpText'
    }, m('i', {
      className: 'diffSettingsIcon fas fa-exclamation-circle'
    }), m('span', flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(localePrefix + 'useCronsHelp')))]), this.submitButton()])])];
  };

  return DiffSettingsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiffSettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffSettingsPage */ "./src/admin/DiffSettingsPage.js");


flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk-diff', function (app) {
  app.extensionData["for"]('the-turk-diff').registerPage(_DiffSettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerPermission({
    // who can view edit history?
    icon: 'fas fa-history',
    label: app.translator.trans('the-turk-diff.admin.permissions.viewEditHistory'),
    permission: 'viewEditHistory',
    allowGuest: false
  }, 'view').registerPermission({
    // who can delete others edit history?
    icon: 'fas fa-times',
    label: app.translator.trans('the-turk-diff.admin.permissions.deleteEditHistory'),
    permission: 'deleteEditHistory',
    allowGuest: false
  }, 'moderate').registerPermission({
    // who can delete their own edit history?
    icon: 'fas fa-times',
    label: app.translator.trans('the-turk-diff.admin.permissions.selfDeleteEditHistory'),
    permission: 'selfDeleteEditHistory',
    allowGuest: false
  }, 'moderate').registerPermission({
    // who can rollback others edit history?
    icon: 'fas fa-history',
    label: app.translator.trans('the-turk-diff.admin.permissions.rollbackEditHistory'),
    permission: 'rollbackEditHistory',
    allowGuest: false
  }, 'moderate').registerPermission({
    // who can rollback their own edit history?
    icon: 'fas fa-history',
    label: app.translator.trans('the-turk-diff.admin.permissions.selfRollbackEditHistory'),
    permission: 'selfRollbackEditHistory',
    allowGuest: false
  }, 'moderate');
});

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map