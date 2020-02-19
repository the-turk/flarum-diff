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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/DiffButton.js":
/*!********************************************!*\
  !*** ./src/forum/components/DiffButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);









var DiffButton =
/*#__PURE__*/
function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DiffButton, _Button);

  function DiffButton() {
    return _Button.apply(this, arguments) || this;
  }

  var _proto = DiffButton.prototype;

  _proto.view = function view() {
    var attrs = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

    delete attrs.item;
    delete attrs.subButton;
    attrs.type = 'button';
    return m("button", attrs, this.getButtonContent());
  }
  /**
   * Get the template for the button's content.
   *
   * @return {*}
   * @protected
   */
  ;

  _proto.getButtonContent = function getButtonContent() {
    var diff = this.props.item;
    var actor = diff.actor();
    var editedInfo = flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(app.translator.trans('core.forum.post.edited_tooltip', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(diff.actor()),
      ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(diff.createdAt())
    }));

    if (diff.deletedAt()) {
      if (this.props.subButton === false) {
        editedInfo = editedInfo + ' ' + app.translator.trans('the-turk-diff.forum.deletedText');
      } else {
        actor = diff.deletedUser();
        editedInfo = flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(app.translator.trans('the-turk-diff.forum.deletedTooltip', {
          username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(diff.deletedUser()),
          ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(diff.deletedAt())
        }));
      }
    }

    return [actor.username() ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(actor) : '', diff.deletedAt() && this.props.subButton === false ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-caret-down', {
      className: 'Button-caret'
    }) : '', m("span", {
      className: "Button-label",
      title: editedInfo
    }, diff.deletedAt() && this.props.subButton === true ? m("em", null, editedInfo) : editedInfo)];
  };

  return DiffButton;
}(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/DiffDropdown.js":
/*!**********************************************!*\
  !*** ./src/forum/components/DiffDropdown.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DiffList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiffList */ "./src/forum/components/DiffList.js");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);





var DiffDropdown =
/*#__PURE__*/
function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffDropdown, _Dropdown);

  function DiffDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  DiffDropdown.initProps = function initProps(props) {
    props.className = 'DiffDropdown';
    props.buttonClassName = 'Button Button--link';
    props.menuClassName = props.menuClassName;
    props.label = app.translator.trans('core.forum.post.edited_text');
    props.icon = 'fas fa-history';

    _Dropdown.initProps.call(this, props);
  };

  var _proto = DiffDropdown.prototype;

  _proto.init = function init() {
    _Dropdown.prototype.init.call(this);

    var post = this.props.post;
    var largeModal = this.props.largeModal;
    this.list = new _DiffList__WEBPACK_IMPORTED_MODULE_2__["default"]({
      post: post
    });
  };

  _proto.getButton = function getButton() {
    var vdom = _Dropdown.prototype.getButton.call(this);

    vdom.attrs.title = this.props.label;
    vdom.attrs.onclick = this.onclick.bind(this);
    return vdom;
  };

  _proto.getButtonContent = function getButtonContent() {
    return [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(this.props.icon, {
      className: 'Button-icon'
    }), m("span", {
      className: "Button-label"
    }, this.props.label)];
  };

  _proto.getMenu = function getMenu() {
    return m("div", {
      className: 'Dropdown-menu ' + this.props.menuClassName
    }, this.showing ? this.list.render() : '');
  };

  _proto.onclick = function onclick() {
    this.list.load();
  };

  return DiffDropdown;
}(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/DiffList.js":
/*!******************************************!*\
  !*** ./src/forum/components/DiffList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DiffButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiffButton */ "./src/forum/components/DiffButton.js");
/* harmony import */ var _DiffModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DiffModal */ "./src/forum/components/DiffModal.js");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);






/**
 * The `DiffList` component displays a list of the post's diffs.
 */

var DiffList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffList, _Component);

  function DiffList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DiffList.prototype;

  _proto.init = function init() {
    /**
     * Whether or not the diffs are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs) {
      /**
       * Initialize the cache.
       *
       * @type {Array}
       */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs = [];
    }
  };

  _proto.view = function view() {
    var _this = this;

    var post = this.props.post;
    var pages = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[post.id()] || [];
    var postRevisionCount = post.revisionCount();
    return m("div", {
      className: "DiffList"
    }, m("div", {
      className: "DiffList-header"
    }, m("h4", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.transChoice('the-turk-diff.forum.revisionInfo', postRevisionCount, {
      revisionCount: postRevisionCount
    }))), m("div", {
      className: "DiffList-content"
    }, m("ul", null, pages.length ? pages.map(function (diffs) {
      var items = [];
      diffs.forEach(function (diff) {
        items.push(diff);
      });
      return items.map(function (item) {
        var diffButton = _DiffButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
          subButton: false,
          item: item,
          onclick: function onclick() {
            if (!item.deletedAt()) {
              flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _DiffModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
                item: item,
                post: post
              }));
            } else {
              _this.toggleSubDiff(item.id());
            }
          }
        });
        return m("div", {
          className: "DiffList-holder"
        }, m("li", {
          className: 'Diff ParentDiff' + (item.deletedAt() ? ' has-sub' : ''),
          id: 'parentDiff' + item.id()
        }, diffButton), item.deletedAt() ? m("li", {
          className: "Diff SubDiff",
          id: 'subDiff' + item.id(),
          style: "display:none;"
        }, _DiffButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
          item: item,
          subButton: true
        })) : '');
      });
    }) : '', this.loading ? flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: 'LoadingIndicator--block'
    }) : pages.length ? '' : m("div", {
      className: "DiffList-empty"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.emptyText')))));
  }
  /**
   * Load diff results.
   *
   * @public
   */
  ;

  _proto.load = function load() {
    var _this2 = this;

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.props.post.id()]) {
      m.redraw(); // also redraw the post because it sometimes
      // appears and sometimes doesn't after editing a post

      return this.postRedrawer();
    }

    this.loading = true;
    m.redraw(); // redraw for this view()

    this.postRedrawer();
    var postId = this.props.post.id();
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('diff', postId).then(this.parseResults.bind(this))["catch"](function () {}).then(function () {
      _this2.loading = false;
      m.redraw(); // redraw for this view()

      _this2.postRedrawer();
    });
  }
  /**
   * Parse results and append them to the diff list.
   *
   * @param {Diff[]} results
   * @return {Diff[]}
   */
  ;

  _proto.parseResults = function parseResults(results) {
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.props.post.id()] = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.props.post.id()] || [];

    if (results.length) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.props.post.id()].push(results);
    }

    return results;
  }
  /**
   * Redraw the post.
   * Workaround for:
   * https://discuss.flarum.org/d/22755-mithril-related-issues-on-poststream-items
   */
  ;

  _proto.postRedrawer = function postRedrawer() {
    return this.props.post.save({}).then(function () {
      return m.redraw();
    });
  }
  /**
   * @param id
   */
  ;

  _proto.toggleSubDiff = function toggleSubDiff(id) {
    var $subDiff = this.$('.DiffList-holder #subDiff' + id);
    var $parentDiff = this.$('.DiffList-holder #parentDiff' + id);
    var $icon = $parentDiff.find('.icon');
    $subDiff.toggle();

    if ($icon.hasClass('fa-caret-down')) {
      $icon.removeClass('fa-caret-down').addClass('fa-caret-up');
    } else {
      $icon.removeClass('fa-caret-up').addClass('fa-caret-down');
    }
  };

  return DiffList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/DiffModal.js":
/*!*******************************************!*\
  !*** ./src/forum/components/DiffModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);










var DiffModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffModal, _Modal);

  function DiffModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = DiffModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);
    /**
     * Whether or not the component is loading.
     *
     * @type {Boolean}
     */


    this.loading = false;
  };

  _proto.className = function className() {
    var type = this.props.item.data.attributes.largeModal ? 'large' : 'medium';
    return 'DiffModal Modal--' + type;
  };

  _proto.title = function title() {
    return [this.props.item.actor().username() ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_6___default()(this.props.item.actor()) : '', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.post.edited_tooltip', {
      username: m("a", {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(this.props.item.actor()),
        config: m.route
      }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(this.props.item.actor())),
      ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(this.props.item.createdAt())
    })];
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: 'Modal modal-dialog ' + this.className()
    }, m("div", {
      className: "Modal-content"
    }, m("div", {
      className: "Modal-close App-backControl"
    }, this.props.item.data.attributes.canDeleteEditHistory ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-trash-alt',
      onclick: function onclick() {
        if (confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.confirmDelete'))) {
          _this.toggleDeleteButton('disable');

          _this.loading = true;
          m.redraw();

          _this.props.item["delete"]().then(function () {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();

            if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs && flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.props.post.id()]) {
              delete flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.props.post.id()];
            }

            _this.showDeletionAlert('success');
          })["catch"](function () {
            _this.toggleDeleteButton('enable');

            _this.loading = false;
            m.redraw();

            _this.showDeletionAlert('error');
          });
        }
      },
      className: 'Button DeleteButton Button--icon Button--link'
    }) : '', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-times',
      onclick: this.hide.bind(this),
      className: 'Button Button--icon Button--link'
    })), m("div", {
      className: "Modal-header"
    }, m("h3", {
      className: "App-titleControl App-titleControl--text"
    }, this.title())), this.content()));
  };

  _proto.content = function content() {
    // do we need to worry about m.trust() function?
    // well, Flarum itself doing the same way for rendering
    // post items as seen on:
    // https://github.com/flarum/core/blob/afe06ea750cfd81767461a3884a92a26f0b0ce37/js/src/forum/components/CommentPost.js#L52
    // also, the diff library itself treat all inputs as plain text
    // just before creating JSON data:
    // https://github.com/jfcherng/php-diff/issues/9#issuecomment-526808774
    // so no need to use additional Sanitizer lib for this operation.
    return m("div", {
      className: "Modal-body"
    }, m.trust(this.props.item.data.attributes.contentHtml), flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'DiffModal-loading' + (this.loading ? ' active' : '')
    }));
  }
  /**
   * Show deletion alert of diff.
   *
   * @param {string} type
   */
  ;

  _proto.showDeletionAlert = function showDeletionAlert(type) {
    var message = {
      success: 'the-turk-diff.forum.deleteSuccessMessage',
      error: 'the-turk-diff.forum.deleteErrorMessage'
    }[type];
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_7___default.a({
      type: type,
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(message)
    }));
  };

  _proto.toggleDeleteButton = function toggleDeleteButton(state) {
    var $deleteButton = this.$('.DeleteButton');

    if (state === 'disable') {
      $deleteButton.prop('disabled', true);
    } else if (state === 'enable') {
      $deleteButton.prop('disabled', false);
    }
  };

  return DiffModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Diff */ "./src/forum/models/Diff.js");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DiffDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DiffDropdown */ "./src/forum/components/DiffDropdown.js");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7__);








flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk/diff', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.diff = _models_Diff__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.revisionCount = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('revisionCount');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canViewEditHistory = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canViewEditHistory');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', function (items) {
    var post = this.props.post; // replace "edited" text to "edited" button

    if (post.isEdited() && !post.isHidden() && post.canViewEditHistory() && post.revisionCount() > 0) {
      items.replace('edited', _components_DiffDropdown__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        post: post
      }));
    } // remove diffs cache when post is editing


    if (this.isEditing() && flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.cache.diffs && flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.cache.diffs[this.props.post.id()]) {
      delete flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.cache.diffs[this.props.post.id()];
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'init', function () {
    // prevent dropdown from closing when user
    // clicks on deleted diff
    var $exists = $('body');
    $exists.on('click', 'li.ParentDiff.has-sub', function (e) {
      e.stopPropagation();
    });
    $exists.on('click', 'li.SubDiff', function (e) {
      e.stopPropagation();
    });
  });
});

/***/ }),

/***/ "./src/forum/models/Diff.js":
/*!**********************************!*\
  !*** ./src/forum/models/Diff.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diff; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Diff =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Diff, _mixin);

  function Diff() {
    return _mixin.apply(this, arguments) || this;
  }

  return Diff;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  revision: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('revision'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  deletedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('deletedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  actor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('actor'),
  deletedUser: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('deletedUser'),
  contentHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('contentHtml'),
  canDeleteEditHistory: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canDeleteEditHistory'),
  largeModal: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('largeModal')
}));



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Post":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/Post']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Post'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map