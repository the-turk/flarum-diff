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

/***/ "./src/forum/components/DiffButton.js":
/*!********************************************!*\
  !*** ./src/forum/components/DiffButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);







/**
 * The `DiffButton` component composes a button
 * for all revisions created in DiffList.
 */

var DiffButton = /*#__PURE__*/function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffButton, _Button);

  function DiffButton() {
    return _Button.apply(this, arguments) || this;
  }

  var _proto = DiffButton.prototype;

  // see the following link to find out why i'm overriding this at all
  // https://discuss.flarum.org/d/22728-passing-an-object-to-a-custom-button-component
  _proto.view = function view() {
    var attrs = Object.assign({}, this.attrs);
    delete attrs.item;
    delete attrs.subButton;
    delete attrs.postDate;
    attrs.type = 'button';
    return m("button", attrs, this.getButtonContent());
  };

  _proto.getButtonContent = function getButtonContent() {
    var revision = this.attrs.item;
    var actor = revision.actor();
    var buttonText = revision.revision() == 0 ?
    /* {username} created {ago} */
    flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(app.translator.trans('the-turk-diff.forum.createdInfo', {
      username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(revision.actor()),
      ago: flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(this.attrs.postDate)
    })) :
    /* {username} edited {ago} */
    flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(app.translator.trans('the-turk-diff.forum.editedInfo', {
      username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(revision.actor()),
      ago: flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(revision.createdAt())
    }));

    if (revision.deletedAt()) {
      if (this.attrs.subButton === false) {
        /* {username} did something {ago} (deleted) */
        buttonText = buttonText + ' ' + app.translator.trans('the-turk-diff.forum.deletedText');
      } else {
        /* sub button text that appears when you click on caret icon */
        actor = revision.deletedUser();
        /* {actor} deleted this content {ago} */

        buttonText = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(app.translator.trans('the-turk-diff.forum.deletedInfo', {
          username: flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(revision.deletedUser()),
          ago: flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(revision.deletedAt())
        }));
      }
    }

    return [// we also should consider deleted users here
    actor.username() ? flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(actor) : '', // does this button have an icon?
    revision.deletedAt() && this.attrs.subButton === false ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('fas fa-caret-down', {
      className: 'Button-caret'
    }) : '', // button label
    m("span", {
      className: "Button-label",
      title: buttonText
    }, revision.deletedAt() && this.attrs.subButton === true ?
    /* emphasize deleted revision's information */
    m("em", null, buttonText) : buttonText)];
  };

  return DiffButton;
}(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DiffList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiffList */ "./src/forum/components/DiffList.js");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _states_DiffListState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/DiffListState */ "./src/forum/states/DiffListState.js");





/**
 * The `DiffDropdown` component is the entrance point for this extension.
 * It's the component that you see when you click on "Edited" button.
 * It also contains DiffList components.
 */

var DiffDropdown = /*#__PURE__*/function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffDropdown, _Dropdown);

  function DiffDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  DiffDropdown.initAttrs = function initAttrs(attrs) {
    attrs.className = 'DiffDropdown';
    attrs.buttonClassName = 'Button Button--link';
    attrs.menuClassName = attrs.menuClassName;
    attrs.label = app.translator.trans('the-turk-diff.forum.editedText');
    attrs.icon = 'fas fa-history';

    _Dropdown.initAttrs.call(this, attrs);
  };

  var _proto = DiffDropdown.prototype;

  _proto.oninit = function oninit(vnode) {
    _Dropdown.prototype.oninit.call(this, vnode);
    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */


    this.post = this.attrs.post;
    /**
     * Create a new revision list.
     *
     * @type {DiffListState}
     */

    this.listState = new _states_DiffListState__WEBPACK_IMPORTED_MODULE_4__["default"](this.post, false, null);
  };

  _proto.getButton = function getButton() {
    var vdom = _Dropdown.prototype.getButton.call(this);

    vdom.attrs.title = this.attrs.label;
    vdom.attrs.onclick = this.onclick.bind(this);
    return vdom;
  };

  _proto.getButtonContent = function getButtonContent() {
    return [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()(this.attrs.icon, {
      className: 'Button-icon'
    }), m("span", {
      className: "Button-label"
    }, this.attrs.label)];
  };

  _proto.getMenu = function getMenu() {
    var revisionCount = this.attrs.post.revisionCount();
    return m("div", {
      className: 'Dropdown-menu ' + this.attrs.menuClassName
    }, m("div", {
      className: "DiffList-header"
    }, m("h4", null, app.translator.trans('the-turk-diff.forum.revisionInfo', {
      revisionCount: revisionCount
    }))), this.showing ? m(_DiffList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: this.listState
    }) : '');
  }
  /**
   * Load revision list.
   */
  ;

  _proto.onclick = function onclick() {
    this.listState.load();
  };

  return DiffDropdown;
}(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DiffButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DiffButton */ "./src/forum/components/DiffButton.js");
/* harmony import */ var _DiffModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DiffModal */ "./src/forum/components/DiffModal.js");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);







/**
 * The `DiffList` component displays a list of the post's revisions.
 * It's been using on both DiffDropdown & DiffModal components.
 * It also contains DiffButton components.
 */

var DiffList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffList, _Component);

  function DiffList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DiffList.prototype;

  _proto.view = function view() {
    var _this = this;

    var state = this.attrs.state;
    var pages = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[state.post.id()] || [];
    return m("div", {
      className: "DiffList-container"
    }, m("div", {
      className: "DiffList-content"
    }, m("ul", null, pages.length ? pages.map(function (diffs) {
      return diffs.map(function (item) {
        // we can use this class to customize all tooltips
        // provided by this extension
        var tooltipClass = 'diffTooltip';
        var diffButton = m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
          position: "left",
          text: item.revision() == state.post.revisionCount() ? // we're hovering on latest revision's button
          flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.tooltips.mostRecent') : item.revision() == 0 ? // we're hovering on zeroth revision's button
          flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.tooltips.originalContent') : // we're hovering on other revision's button
          flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.tooltips.revisionWithNumber', {
            number: item.revision()
          })
        }, _DiffButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
          'data-container': 'body',
          postDate: state.post.createdAt(),
          subButton: false,
          item: item,
          onclick: function onclick() {
            if (!item.deletedAt()) {
              state.selectedItem = item;
              flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_DiffModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
                listState: state
              });

              if (state.forModal) {
                // .DiffList-content container of clicked revision
                var $listContainer = _this.$('li#parentDiff' + item.id()); // disable clicked revision, enable others


                $listContainer.find('button').prop('disabled', true);
                $listContainer.siblings().find('button').prop('disabled', false); // add 'active' class to clicked revision, remove it from others

                $listContainer.siblings().removeClass('active');
                $listContainer.addClass('active');
              }
            } else {
              // if revision is deleted, we'll toggle the info
              // like GitHub does.
              _this.toggleSubDiff(item.id());
            }
          },
          oncreate: function oncreate(vnode) {
            $(vnode.dom) // this is a workaround for adding custom
            // classes into bootstrap tooltips
            // https://stackoverflow.com/a/29879041/12866913
            .data('bs.tooltip').tip().addClass(item.deletedAt() ? tooltipClass + ' deletedDiffTooltip' : tooltipClass);
          }
        })); // returns the template for revision list items

        return [m("li", {
          className: 'Diff ParentDiff' + (item.deletedAt() ? ' DeletedDiff' : ''),
          id: 'parentDiff' + item.id()
        }, diffButton), item.deletedAt() ? m("li", {
          className: "Diff SubDiff",
          id: 'subDiff' + item.id()
        }, m(_DiffButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          postDate: state.post.createdAt(),
          subButton: true,
          item: item
        })) : ''];
      });
    }) : '', state.loading ? flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: 'LoadingIndicator--block'
    }) : !pages.length ? m("div", {
      className: "DiffList-empty"
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.emptyText')) : '')));
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);

    var state = this.attrs.state;

    if (state.forModal && state.selectedItem) {
      var $selectedItem = this.$('li#parentDiff' + state.selectedItem);
      $selectedItem.find('button').prop('disabled', true);
      $selectedItem.addClass('active');
    }

    var $revisions = this.$('.DiffList-content');
    this.$scrollParent = $revisions.css('overflow') === 'auto' ? $revisions : $(window); // Lazy-loading implementation for the revision list
    // simply checks if we're bottom of the list
    // and if there are more results to show

    this.scrollHandler = function () {
      var scrollTop = $scrollParent.scrollTop();
      var viewportHeight = $scrollParent.height();
      var contentTop = $scrollParent === $revisions ? 0 : $revisions.offset().top;
      var contentHeight = $revisions[0].scrollHeight;

      if (state.moreResults && !state.loading && scrollTop + viewportHeight >= contentTop + contentHeight) {
        state.loadMore();
      }
    };

    this.$scrollParent.on('scroll', this.scrollHandler);
  };

  _proto.onremove = function onremove(vnode) {
    this.$scrollParent.off('scroll', this.scrollHandler);
  }
  /**
   * Toggle the deleted revision's information (sub-button).
   *
   * @param {Number} id
   */
  ;

  _proto.toggleSubDiff = function toggleSubDiff(id) {
    var $subDiff = this.$('li.Diff#subDiff' + id);
    var $parentDiff = this.$('li.Diff#parentDiff' + id);
    var $icon = $parentDiff.find('.icon');
    $subDiff.toggle(); // switch caret icon onClick

    if ($icon.hasClass('fa-caret-down')) {
      $icon.removeClass('fa-caret-down').addClass('fa-caret-up');
    } else {
      $icon.removeClass('fa-caret-up').addClass('fa-caret-down');
    }
  };

  return DiffList;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



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
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_touchDevice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/touchDevice */ "./src/forum/utils/touchDevice.js");
/* harmony import */ var _utils_redrawPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/redrawPost */ "./src/forum/utils/redrawPost.js");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DiffList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DiffList */ "./src/forum/components/DiffList.js");
/* harmony import */ var _states_DiffListState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../states/DiffListState */ "./src/forum/states/DiffListState.js");
















/**
 * The `DiffModal` component is the main component of this extension.
 * It also contains DiffList components.
 */

var DiffModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiffModal, _Modal);

  function DiffModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = DiffModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    /**
     * Whether or not the modal is loading.
     *
     * @type {Boolean}
     */


    this.loading = false;
    /**
     * Whether the modal is showing or not.
     *
     * @type {Boolean}
     */

    this.showing = false;
    /**
     * We will use this to change modal's content when
     * user clicks on a revision on the list.
     *
     * @type {Number|Null}
     */

    this.diffId = null;
    /**
     * This holds information about which revisions are subjects for comparison.
     *
     * @type {Object}
     */

    this.comparisonBetween = JSON.parse(this.attrs.listState.selectedItem.comparisonBetween());
  };

  _proto.className = function className() {
    return 'DiffModal';
  };

  _proto.title = function title() {
    return [// we also should consider deleted users here
    this.attrs.listState.selectedItem.actor().username() ? flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_7___default()(this.attrs.listState.selectedItem.actor()) : '', this.attrs.listState.selectedItem.revision() != 0 ? // x edited y ago
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.editedInfo', {
      username: m("a", {
        href: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(this.attrs.listState.selectedItem.actor()),
        config: m.route
      }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(this.attrs.listState.selectedItem.actor())),
      ago: flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(this.attrs.listState.selectedItem.createdAt())
    }) : // x created y ago
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.createdInfo', {
      username: m("a", {
        href: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(this.attrs.listState.selectedItem.actor()),
        config: m.route
      }, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(this.attrs.listState.selectedItem.actor())),
      ago: flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(this.attrs.listState.post.createdAt())
    })];
  };

  _proto.oncreate = function oncreate(vnode) {
    _Modal.prototype.oncreate.call(this, vnode);

    this.config(vnode);
  };

  _proto.onupdate = function onupdate(vnode) {
    this.config(vnode);
  };

  _proto.config = function config(vnode) {
    // workaround for missing 'in' class on .ModalManager
    // after redrawing the DiffList component.
    // because i'm done with this shit.
    // https://github.com/flarum/core/pull/2080
    if (this.showing && !$('.ModalManager').hasClass('in')) $('.ModalManager').addClass('in'); // we should re-Initialize this component after user
    // clicks a different revision while modal is open

    if (this.diffId === this.attrs.listState.selectedItem.id()) return;
    this.showing = true;
    this.diffId = this.attrs.listState.selectedItem.id();
    this.comparisonBetween = JSON.parse(this.attrs.listState.selectedItem.comparisonBetween());

    if (this.attrs.listState.selectedItem.revision() != 0 && this.comparisonBetween["new"].revision != this.comparisonBetween.old.revision) {
      // we'll use Side By Side renderer as a fallback
      // if there is no renderer choice
      return this.setDiffContent(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.preferences().diffRenderer ? flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.preferences().diffRenderer : 'sideBySide');
    } else {
      return this.setDiffContent('preview');
    }
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: 'Modal modal-dialog ' + this.className()
    }, m("div", {
      className: "Modal-content"
    }, m("div", {
      className: "Modal-close App-backControl"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-times',
      onclick: this.hide.bind(this),
      className: 'Button Button--icon Button--link'
    })), this.attrs.listState.post.canDeleteEditHistory() && this.attrs.listState.selectedItem.revision() != this.attrs.listState.post.revisionCount() || this.attrs.listState.post.canRollbackEditHistory() && this.$('.DeletedDiff').length != this.attrs.listState.post.revisionCount() ? m(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: "diffCotrollerDropdown App-primaryControl",
      icon: "fas fa-ellipsis-v",
      buttonClassName: "Button",
      menuClassName: "Dropdown-menu--right",
      label: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.optionsButton')
    }, this.attrs.listState.post.canRollbackEditHistory() && this.comparisonBetween.old.diffId ? flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-reply',
      onclick: function onclick() {
        if (confirm(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.confirmRollback', {
          number: _this.attrs.listState.selectedItem.revision()
        }))) {
          _this.loading = true;
          m.redraw();
          var rollbackTo = _this.attrs.listState.selectedItem.revision() == _this.attrs.listState.post.revisionCount() ? _this.comparisonBetween.old.diffId : _this.attrs.listState.selectedItem.id();
          flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
            url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + "/diff/" + rollbackTo,
            method: 'POST'
          }).then(function () {
            Object(_utils_redrawPost__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.attrs.listState.post);
            flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();

            if (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs && flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.attrs.listState.post.id()]) {
              delete flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.attrs.listState.post.id()];
            }

            _this.showAlert('success', 'rollback');
          })["catch"](function () {
            _this.loading = false;
            m.redraw();
            Object(_utils_redrawPost__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.attrs.listState.post);

            _this.showAlert('error', 'rollback');
          });
        }
      }
    }, this.attrs.listState.selectedItem.revision() == 0 ?
    /* we're viewing the original content */
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.rollbackToOriginalButton') : this.attrs.listState.selectedItem.revision() == this.attrs.listState.post.revisionCount() ? this.comparisonBetween.old.revision != 0 ?
    /* we're comparing this revision with current content. */
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revertChangesButton') :
    /* we're comparing this revision with original content */
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.rollbackToOriginalButton') :
    /* we're comparing this revision with another revision */
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.rollbackButton', {
      number: this.attrs.listState.selectedItem.revision()
    })) : '', this.attrs.listState.post.canDeleteEditHistory() && this.attrs.listState.selectedItem.revision() != this.attrs.listState.post.revisionCount() ? flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'far fa-trash-alt',
      onclick: function onclick() {
        if (confirm(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.confirmDelete'))) {
          _this.loading = true;
          m.redraw();

          _this.attrs.listState.selectedItem["delete"]().then(function () {
            flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();

            if (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs && flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.attrs.listState.post.id()]) {
              delete flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.attrs.listState.post.id()];
            }

            _this.showAlert('success', 'delete');
          })["catch"](function () {
            _this.loading = false;
            m.redraw();

            _this.showAlert('error', 'delete');
          });
        }
      }
    }, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.deleteButton')) : '') : '', m("div", {
      className: "Modal-header"
    }, m("h3", {
      className: "App-titleControl App-titleControl--text"
    }, this.title())), this.content()));
  };

  _proto.content = function content() {
    var _this2 = this;

    // we can use this class to customize all tooltips
    // provided by this extension
    var tooltipClass = 'diffTooltip';
    var revisionCount = this.attrs.listState.post.revisionCount();
    /**
     * `type` is passed to `setDiffContent` and the tooltip.
     */

    var diffSwitches = [{
      type: 'inline',
      icon: 'fas fa-grip-lines',
      "class": 'inlineView'
    }, {
      type: 'sideBySide',
      icon: 'fas fa-columns',
      "class": 'sideBySideView'
    }, {
      type: 'combined',
      icon: 'far fa-square',
      "class": 'combinedView'
    }];
    return [m("div", {
      className: "diff-grid"
    }, m("div", {
      className: "diff-grid-item diff-grid-controls"
    }, m("div", {
      className: "diffSwitcher"
    }, this.attrs.listState.selectedItem.revision() != 0 && this.comparisonBetween["new"].revision != this.comparisonBetween.old.revision ? diffSwitches.map(function (switchData) {
      return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
        text: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("the-turk-diff.forum.tooltips." + switchData.type)
      }, m("div", {
        className: "tooltip-wrapper"
      }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        icon: switchData.icon,
        onclick: function onclick() {
          return _this2.setDiffContent(switchData.type);
        },
        className: "Button Button--icon Button--link " + switchData["class"]
      })));
    }) : '', m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      text: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.tooltips.preview')
    }, m("div", {
      className: "tooltip-wrapper"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      icon: "far fa-eye",
      onclick: function onclick() {
        return _this2.setDiffContent('preview');
      },
      className: "Button Button--icon Button--link diffPreview"
    }))))), m("div", {
      className: "diff-grid-item diff-grid-info"
    }, m("div", {
      className: "revisionInfo"
    }, m("h4", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revisions', {
      revisionCount: revisionCount
    })), m("p", {
      "class": "diffInfoContainer"
    }))), m("div", {
      className: "diff-grid-item diff-grid-revisions"
    }, m(_DiffList__WEBPACK_IMPORTED_MODULE_14__["default"], {
      state: this.attrs.listState
    })), m("div", {
      className: "diff-grid-item diff-grid-diff"
    }, m("div", {
      className: "diffContents"
    }, m("div", {
      className: 'previewContainer Post-body' + (flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('textFormattingForDiffPreviews') === false ? ' diff-skip-formatting' : '')
    }, this.renderHtml(this.attrs.listState.selectedItem.data.attributes.previewHtml)), m("div", {
      className: "diffContainer"
    }))), flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12___default.a.component({
      className: 'DiffModal-loading' + (this.loading ? ' active' : '')
    }))];
  }
  /**
   * Slowly scroll to selected revision.
   */
  ;

  _proto.onready = function onready() {
    var $revisions = this.$('.DiffList-content');
    var $selectedItem = this.$('li#parentDiff' + this.attrs.listState.selectedItem.id());
    $revisions.animate({
      scrollTop: $selectedItem.offset().top - $revisions.offset().top + $revisions.scrollTop()
    });
  }
  /**
   * Show success and error messages for rollback and delete operations.
   *
   * @param {string} type
   * @param {string} key
   */
  ;

  _proto.showAlert = function showAlert(type, key) {
    var message = {
      success: 'the-turk-diff.forum.' + key + 'SuccessMessage',
      error: 'the-turk-diff.forum.' + key + 'ErrorMessage'
    }[type];
    flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_11___default.a, {
      type: type,
      children: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(message)
    });
  }
  /**
   * Render the diff views provided by external lib.
   *
   * do we need to worry about m.trust() function?
   * well, Flarum itself doing the same way for rendering
   * post items as seen on CommentPost.js#L52
   * also, the diff library itself treat all inputs as plain text:
   * https://github.com/jfcherng/php-diff/issues/9#issuecomment-526808774
   * so no need to use additional Sanitizer lib for this operation.
   *
   * @param {string} content
   */
  ;

  _proto.renderHtml = function renderHtml(content) {
    return m.trust(content);
  }
  /**
   * Insert rendered diff views into their container
   * and disable active views' buttons.
   * Disabling buttons is just for indicating
   * so frontend looks good but the backend sucks.
   *
   * @param {string} contentType
   */
  ;

  _proto.setDiffContent = function setDiffContent(contentType) {
    var diffContentHtml;
    var $diffContainer = this.$('.diffContainer');
    var $previewContainer = this.$('.previewContainer');
    var $tooltip = this.$('.diffTooltip'); // buttons

    var $sideBySideButton = this.$('.Button.sideBySideView');
    var $inlineButton = this.$('.Button.inlineView');
    var $combinedButton = this.$('.Button.combinedView');
    var $previewButton = this.$('.Button.diffPreview');

    if (contentType !== 'preview') {
      if (contentType === 'sideBySide') {
        diffContentHtml = this.renderHtml(this.attrs.listState.selectedItem.data.attributes.sideBySideHtml);
        $sideBySideButton.prop('disabled', true); // what a dynasty - LOL

        $sideBySideButton.parent().siblings().children().prop('disabled', false);
      } else if (contentType === 'inline') {
        diffContentHtml = this.renderHtml(this.attrs.listState.selectedItem.data.attributes.inlineHtml);
        $inlineButton.prop('disabled', true);
        $inlineButton.parent().siblings().children().prop('disabled', false);
      } else if (contentType === 'combined') {
        diffContentHtml = this.renderHtml(this.attrs.listState.selectedItem.data.attributes.combinedHtml);
        $combinedButton.prop('disabled', true);
        $combinedButton.parent().siblings().children().prop('disabled', false);
      }
    } else {
      $diffContainer.hide();
      this.$('.previewContainer').show();
      $previewButton.prop('disabled', true);
      $previewButton.parent().siblings().children().prop('disabled', false);
      return this.setInfoContent(true);
    }

    if (diffContentHtml) {
      $diffContainer.html(diffContentHtml.children);

      if ($previewContainer.is(':visible')) {
        $diffContainer.show();
        $previewContainer.hide();
      } // let's remember their renderer choice


      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.savePreferences({
        diffRenderer: contentType
      });
      return this.setInfoContent();
    }

    return;
  }
  /**
   * Set informations about comparisons.
   *
   * @param {Boolean} preview
   */
  ;

  _proto.setInfoContent = function setInfoContent(preview) {
    if (preview === void 0) {
      preview = false;
    }

    var $infoContainer = this.$('.diffInfoContainer');
    var infoContentHtml = !preview && this.attrs.listState.selectedItem.revision() != 0 && this.comparisonBetween["new"].revision != this.comparisonBetween.old.revision ? flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.sentence', {
      old: this.comparisonBetween.old.revision == -1 ?
      /* we're viewing differences between current content and {new} */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.currentContent') : this.comparisonBetween.old.revision == 0 ?
      /* we're viewing differences between original content and {new} */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.originalContent') :
      /* we're viewing differences between revision X and {new} */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.revisionWithNumber', {
        number: this.comparisonBetween.old.revision
      }),
      "new": this.comparisonBetween["new"].revision == 0 ?
      /* we're viewing differences between {old} and original content */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.originalContent') : this.comparisonBetween["new"].revision == this.attrs.listState.post.revisionCount() ?
      /* we're viewing differences between {old} and current content */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.currentContent') :
      /* we're viewing differences between {old} and revision X */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences.revisionWithNumber', {
        number: this.comparisonBetween["new"].revision
      })
    })) : flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.previewMode.sentence', {
      content: this.comparisonBetween["new"].revision == 0 ?
      /* we're previewing original content */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.previewMode.originalContent') : this.comparisonBetween["new"].revision == this.attrs.listState.post.revisionCount() ?
      /* we're previewing current content */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.previewMode.currentContent') :
      /* we're previewing revision X */
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.previewMode.revisionWithNumber', {
        number: this.comparisonBetween["new"].revision
      })
    }));
    return $infoContainer.html(infoContentHtml);
  };

  return DiffModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Diff */ "./src/forum/models/Diff.js");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DiffDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DiffDropdown */ "./src/forum/components/DiffDropdown.js");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7__);








flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk-diff', function () {
  flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models.diff = _models_Diff__WEBPACK_IMPORTED_MODULE_3__["default"];
  flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.revisionCount = flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('revisionCount');
  flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canViewEditHistory = flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canViewEditHistory');
  flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canRollbackEditHistory = flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canRollbackEditHistory');
  flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canDeleteEditHistory = flarum_common_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canDeleteEditHistory');
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', function (items) {
    var post = this.attrs.post; // replace "edited" text to "edited" button

    if (post.isEdited() && !post.isHidden() && post.canViewEditHistory() && post.revisionCount() > 0) {
      items.replace('edited', _components_DiffDropdown__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        post: post
      }));
    } // remove diffs cache when post is editing


    if (this.isEditing() && flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.cache.diffs && flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.cache.diffs[this.attrs.post.id()]) {
      delete flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default.a.cache.diffs[this.attrs.post.id()];
    }
  }); // prevent dropdown from closing when user
  // clicks on deleted diff

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'oninit', function () {
    var $body = $('body');
    $body.on('click', 'li.ParentDiff.DeletedDiff', function (e) {
      e.stopPropagation();
    });
    $body.on('click', 'li.SubDiff', function (e) {
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
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Diff = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Diff, _mixin);

  function Diff() {
    return _mixin.apply(this, arguments) || this;
  }

  return Diff;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  revision: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('revision'),
  createdAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('createdAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  deletedAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('deletedAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  rollbackedAt: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('rollbackedAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  actor: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('actor'),
  deletedUser: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('deletedUser'),
  rollbackedUser: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('rollbackedUser'),
  inlineHtml: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('inlineHtml'),
  sideBySideHtml: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('sideBySideHtml'),
  combinedHtml: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('combinedHtml'),
  previewHtml: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('previewHtml'),
  comparisonBetween: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('comparisonBetween')
}));



/***/ }),

/***/ "./src/forum/states/DiffListState.js":
/*!*******************************************!*\
  !*** ./src/forum/states/DiffListState.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffListState; });
/* harmony import */ var _utils_redrawPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/redrawPost */ "./src/forum/utils/redrawPost.js");


var DiffListState = /*#__PURE__*/function () {
  function DiffListState(post, forModal, moreResults, selectedItem) {
    this.post = post;
    this.forModal = forModal;
    this.moreResults = moreResults || false;
    this.selectedItem = selectedItem;
    this.loading = false;

    if (!app.cache.diffs) {
      app.cache.diffs = [];
    }
  }
  /**
   * Load revisions.
   *
   * @public
   */


  var _proto = DiffListState.prototype;

  _proto.load = function load() {
    // don't do anthing if we already cached revisions for the post.
    // lazy-loading will perform loadMore() if there are moreResults
    if (app.cache.diffs[this.post.id()]) return this.redrawList();
    this.loadMore();
  }
  /**
   * Load the next page of revision results.
   *
   * @public
   */
  ;

  _proto.loadMore = function loadMore() {
    var _this = this;

    this.loading = true;
    this.redrawList(); // don't do anthing if we already cached ALL revisions for the post.

    if (app.cache.diffs[this.post.id()] && app.cache.diffs[this.post.id()].length == this.post.revisionCount()) {
      return;
    } // set URL parameters


    var params = app.cache.diffs[this.post.id()] ? {
      id: this.post.id(),
      page: {
        offset: app.cache.diffs[this.post.id()].length * 10
      }
    } : {
      id: this.post.id()
    };
    return app.store.find('diff', params).then(this.parseResults.bind(this))["catch"](function () {}).then(function () {
      _this.loading = false;

      _this.redrawList();
    });
  }
  /**
   * Parse results and append them to the revision list.
   *
   * @param {Diff[]} results
   * @return {Diff[]}
   */
  ;

  _proto.parseResults = function parseResults(results) {
    app.cache.diffs[this.post.id()] = app.cache.diffs[this.post.id()] || [];
    if (results.length) app.cache.diffs[this.post.id()].push(results);
    this.moreResults = !!results.payload.links.next;
    return results;
  }
  /**
   * Redraw the list based on parent component.
   */
  ;

  _proto.redrawList = function redrawList() {
    m.redraw(); // because we don't need to redraw the post
    // to update DiffList in DiffModal.
    // We just need it for updating DiffDropdown.

    if (this.forModal) return;
    return Object(_utils_redrawPost__WEBPACK_IMPORTED_MODULE_0__["default"])(this.post);
  };

  return DiffListState;
}();



/***/ }),

/***/ "./src/forum/utils/redrawPost.js":
/*!***************************************!*\
  !*** ./src/forum/utils/redrawPost.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return redrawPost; });
/**
 * Redraw the post.
 * Workaround for - SubtreeRetainer doesn't allow redrawing post
 * https://discuss.flarum.org/d/22755-mithril-related-issues-on-poststream-items
 *
 * @param {Object} post
 */
function redrawPost(post) {
  return post.save({}).then(function () {
    return m.redraw();
  });
}

/***/ }),

/***/ "./src/forum/utils/touchDevice.js":
/*!****************************************!*\
  !*** ./src/forum/utils/touchDevice.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return touchDevice; });
/**
 * Tooltips will be skipped for touch devices. Because they're forcing users
 * to double click the buttons. They also working unstable and won't fit to
 * screen sometimes. I'm planning to deal with them later on next versions.
 * https://stackoverflow.com/a/24647710/12866913
 */
function touchDevice() {
  return true == ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
}

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/humanTime":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/humanTime']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/humanTime'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/mixin'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map