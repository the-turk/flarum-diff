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








/**
 * The `DiffButton` component composes a button
 * for all revisions created in DiffList.
 */

var DiffButton =
/*#__PURE__*/
function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DiffButton, _Button);

  function DiffButton() {
    return _Button.apply(this, arguments) || this;
  }

  var _proto = DiffButton.prototype;

  // see the following link to find out why i'm overriding this at all
  // https://discuss.flarum.org/d/22728-passing-an-object-to-a-custom-button-component
  _proto.view = function view() {
    var attrs = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props);

    delete attrs.item;
    delete attrs.subButton;
    delete attrs.postDate;
    attrs.type = 'button';
    return m("button", attrs, this.getButtonContent());
  };

  _proto.getButtonContent = function getButtonContent() {
    var revision = this.props.item;
    var actor = revision.actor();
    var buttonText = revision.revision() == 0 ?
    /* {username} created {ago} */
    flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(app.translator.trans('the-turk-diff.forum.createdTooltip', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(revision.actor()),
      ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(this.props.postDate)
    })) :
    /* {username} edited {ago} */
    flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(app.translator.trans('core.forum.post.edited_tooltip', {
      username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(revision.actor()),
      ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(revision.createdAt())
    }));

    if (revision.deletedAt()) {
      if (this.props.subButton === false) {
        /* {username} did something {ago} (deleted) */
        buttonText = buttonText + ' ' + app.translator.trans('the-turk-diff.forum.deletedText');
      } else {
        /* sub button text that appears when you click on caret icon */
        actor = revision.deletedUser();
        /* {actor} deleted this content {ago} */

        buttonText = flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(app.translator.trans('the-turk-diff.forum.deletedTooltip', {
          username: flarum_helpers_username__WEBPACK_IMPORTED_MODULE_5___default()(revision.deletedUser()),
          ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(revision.deletedAt())
        }));
      }
    }

    return [// we also should consider deleted users here
    actor.username() ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_3___default()(actor) : '', // does this button have an icon?
    revision.deletedAt() && this.props.subButton === false ? flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-caret-down', {
      className: 'Button-caret'
    }) : '', // button label
    m("span", {
      className: "Button-label",
      title: buttonText
    }, revision.deletedAt() && this.props.subButton === true ?
    /* emphasize deleted revision's information */
    m("em", null, buttonText) : buttonText)];
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




/**
 * The `DiffDropdown` component is the entrance point for this extension.
 * It's the component that you see when you click on "Edited" button.
 * It also contains DiffList components.
 */

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
    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */


    this.post = this.props.post;
    /**
     * Create a new revision list.
     * This approach may not work with newer Mithril versions.
     *
     * @type {DiffList}
     */

    this.list = new _DiffList__WEBPACK_IMPORTED_MODULE_2__["default"]({
      post: this.post,
      forModal: false,
      selectedItem: null,
      moreResults: null
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
    }, m("div", {
      className: "DiffList-header"
    }, m("h4", null, app.translator.transChoice('the-turk-diff.forum.revisionInfo', this.props.post.revisionCount(), {
      revisionCount: this.props.post.revisionCount()
    }))), this.showing ? this.list.render() : '');
  }
  /**
   * Load revision list.
   */
  ;

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
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_touchDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/touchDevice */ "./src/forum/utils/touchDevice.js");
/* harmony import */ var _utils_redrawPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/redrawPost */ "./src/forum/utils/redrawPost.js");









/**
 * The `DiffList` component displays a list of the post's revisions.
 * It's been using on both DiffDropdown & DiffModal components.
 * It also contains DiffButton components.
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
     * Whether or not the revisions are loading.
     *
     * @type {Boolean}
     */
    this.loading = false;
    /**
     * The post that we're working with.
     *
     * @type {Post[]}
     */

    this.post = this.props.post;
    /**
     * Whether or not there are more results that can be loaded.
     *
     * @type {Boolean|Null}
     */

    if (null !== this.props.moreResults) {
      this.moreResults = this.props.moreResults;
    } else {
      this.moreResults = false;
    }
    /**
     * Whether if this list for the DiffModal Component or not.
     * Because the DiffList also can be used for DiffDropdown.
     *
     * @type {Boolean}
     */


    this.forModal = this.props.forModal;
    /**
     * Whether there is a pre-selected revision or not.
     * If user clicks a revision in this list while DiffModal open,
     * we'll use this value to active & disable selected revision's
     * DiffButton component.
     *
     * @type {Number|Null}
     */

    this.selectedItem = this.props.selectedItem;

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs) {
      /**
       * Initialize the cache if it isn't already initialized.
       *
       * @type {Array}
       */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs = [];
    }
  };

  _proto.view = function view() {
    var _this = this;

    var pages = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()] || [];
    return m("div", {
      className: "DiffList-container"
    }, m("div", {
      className: "DiffList-content"
    }, m("ul", null, pages.length ? pages.map(function (diffs) {
      var items = []; // This allows us to use .map function

      diffs.forEach(function (diff) {
        items.push(diff);
      });
      return items.map(function (item) {
        // we can use this class to customize all tooltips
        // provided by this extension
        var tooltipClass = 'diffTooltip';
        var diffButton = _DiffButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
          postDate: _this.post.createdAt(),
          subButton: false,
          item: item,
          onclick: function onclick() {
            if (!item.deletedAt()) {
              flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _DiffModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
                item: item,
                post: _this.post,
                moreResults: _this.moreResults
              })); // fix for Chrome
              // tooltips are not disappearing onclick

              $('.' + tooltipClass).tooltip('hide');

              if (_this.forModal) {
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
          config: function config(elm, isInitialized) {
            return Object(_utils_touchDevice__WEBPACK_IMPORTED_MODULE_7__["default"])() === false && !isInitialized ? $(elm).tooltip({
              trigger: 'hover',
              placement: 'left',
              container: 'body'
            }).attr('data-original-title', flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(item.revision() == _this.post.revisionCount() ? // we're hovering on latest revision's button
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.mostRecent') : item.revision() == 0 ? // we're hovering on zeroth revision's button
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.originalContent') : // we're hovering on other revision's button
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revisionWithNumber', {
              number: item.revision()
            }))) // this is a workaround for adding custom
            // classes into bootstrap tooltips
            // https://stackoverflow.com/a/29879041/12866913
            .data('bs.tooltip').tip().addClass(item.deletedAt() ? tooltipClass + 'deletedDiffTooltip' : tooltipClass) : '';
          }
        }); // returns the template for revision list items

        return [m("li", {
          className: 'Diff ParentDiff' + (item.deletedAt() ? ' has-sub' : ''),
          id: 'parentDiff' + item.id()
        }, diffButton), item.deletedAt() ? m("li", {
          className: "Diff SubDiff",
          id: 'subDiff' + item.id()
        }, _DiffButton__WEBPACK_IMPORTED_MODULE_3__["default"].component({
          postDate: _this.post.createdAt(),
          subButton: true,
          item: item
        })) : ''];
      });
    }) : '', this.loading ? flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      className: 'LoadingIndicator--block'
    }) : !pages.length ? m("div", {
      className: "DiffList-empty"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.emptyText')) : '')));
  };

  _proto.config = function config(isInitialized, context) {
    var _this2 = this;

    if (isInitialized) return;

    if (this.forModal && this.selectedItem) {
      var $selectedItem = this.$('li#parentDiff' + this.selectedItem);
      $selectedItem.find('button').prop('disabled', true);
      $selectedItem.addClass('active');
    }

    var $revisions = this.$('.DiffList-content');
    var $scrollParent = $revisions.css('overflow') === 'auto' ? $revisions : $(window); // Lazy-loading implementation for the revision list
    // simply checks if we're bottom of the list
    // and if there are more results to show

    var scrollHandler = function scrollHandler() {
      var scrollTop = $scrollParent.scrollTop();
      var viewportHeight = $scrollParent.height();
      var contentTop = $scrollParent === $revisions ? 0 : $revisions.offset().top;
      var contentHeight = $revisions[0].scrollHeight;

      if (_this2.moreResults && !_this2.loading && scrollTop + viewportHeight >= contentTop + contentHeight) {
        _this2.loadMore();
      }
    };

    $scrollParent.on('scroll', scrollHandler);

    context.onunload = function () {
      $scrollParent.off('scroll', scrollHandler);
    };
  }
  /**
   * Load revisions.
   *
   * @public
   */
  ;

  _proto.load = function load() {
    // don't do anthing if we already cached revisions for the post.
    // lazy-loading will perform loadMore() if there are moreResults
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()]) return this.redrawList();
    this.loadMore();
  }
  /**
   * Load the next page of revision results.
   *
   * @public
   */
  ;

  _proto.loadMore = function loadMore() {
    var _this3 = this;

    this.loading = true;
    this.redrawList(); // don't do anthing if we already cached ALL revisions for the post.

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()] && flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()].length == this.post.revisionCount()) {
      return;
    } // set URL parameters


    var params = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()] ? {
      id: this.post.id(),
      page: {
        offset: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()].length * 10
      }
    } : {
      id: this.post.id()
    };
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('diff', params).then(this.parseResults.bind(this))["catch"](function () {}).then(function () {
      _this3.loading = false;

      _this3.redrawList();
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
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()] = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()] || [];
    if (results.length) flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[this.post.id()].push(results);
    this.moreResults = !!results.payload.links.next;
    return results;
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
    return Object(_utils_redrawPost__WEBPACK_IMPORTED_MODULE_8__["default"])(this.post);
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
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_touchDevice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/touchDevice */ "./src/forum/utils/touchDevice.js");
/* harmony import */ var _utils_redrawPost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/redrawPost */ "./src/forum/utils/redrawPost.js");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _DiffList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DiffList */ "./src/forum/components/DiffList.js");














/**
 * The `DiffModal` component is the main component of this extension.
 * It also contains DiffList components.
 */

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
     * The post that we're working with.
     *
     * @type {Post[]}
     */

    this.post = this.props.post;
    /**
     * This is the current revision object.
     *
     * @type {Diff[]}
     */

    this.revision = this.props.item;
    /**
     * Create a new revision list.
     * This approach may not work with newer Mithril versions.
     *
     * @type {DiffList}
     */

    this.list = new _DiffList__WEBPACK_IMPORTED_MODULE_13__["default"]({
      post: this.post,
      forModal: true,
      selectedItem: this.revision.id(),
      moreResults: this.props.moreResults
    });
    /**
     * This holds information about which revisions are subjects for comparison.
     *
     * @type {Object}
     */

    this.comparisonBetween = JSON.parse(this.revision.comparisonBetween());
  };

  _proto.className = function className() {
    return 'DiffModal';
  };

  _proto.title = function title() {
    return [// we also should consider deleted users here
    this.revision.actor().username() ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_6___default()(this.revision.actor()) : '', this.revision.revision() != 0 ? // x edited y ago
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.post.edited_tooltip', {
      username: m("a", {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(this.revision.actor()),
        config: m.route
      }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(this.revision.actor())),
      ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(this.revision.createdAt())
    }) : // x created y ago
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.createdTooltip', {
      username: m("a", {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(this.revision.actor()),
        config: m.route
      }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_4___default()(this.revision.actor())),
      ago: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(this.post.createdAt())
    })];
  };

  _proto.config = function config(isInitialized) {
    // workaround for missing 'in' class on .ModalManager
    // after redrawing the DiffList component.
    // because i'm done with this shit.
    // https://github.com/flarum/core/pull/2080
    if (this.showing && !$('.ModalManager').hasClass('in')) $('.ModalManager').addClass('in'); // we should re-Initialize this component after user
    // clicks a different revision while modal is open

    if (isInitialized && this.diffId == this.revision.id()) return;
    this.showing = true;
    this.diffId = this.revision.id();

    if (this.revision.revision() != 0 && this.comparisonBetween["new"].revision != this.comparisonBetween.old.revision) {
      // we'll use Side By Side renderer as a fallback
      // if there is no renderer choice
      return this.setDiffContent(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.preferences().diffRenderer ? flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.preferences().diffRenderer : 'sideBySide');
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
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-times',
      onclick: this.hide.bind(this),
      className: 'Button Button--icon Button--link'
    })), this.post.canDeleteEditHistory() && this.revision.revision() != this.post.revisionCount() || this.post.canRollbackEditHistory() ? m(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: "diffCotrollerDropdown App-primaryControl",
      icon: "fas fa-ellipsis-v",
      buttonClassName: "Button",
      menuClassName: "Dropdown-menu--right",
      label: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.optionsButton')
    }, this.post.canRollbackEditHistory() && this.comparisonBetween.old.diffId ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      children: this.revision.revision() == 0 ?
      /* we're viewing the original content */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.rollbackToOriginalButton') : this.revision.revision() == this.post.revisionCount() ? this.comparisonBetween.old.revision != 0 ?
      /* we're comparing this revision with current content. */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revertChangesButton') :
      /* we're comparing this revision with original content */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.rollbackToOriginalButton') :
      /* we're comparing this revision with another revision */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.rollbackButton', {
        number: this.revision.revision()
      }),
      icon: 'fas fa-reply',
      onclick: function onclick() {
        if (confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.confirmRollback', {
          number: _this.revision.revision()
        }))) {
          _this.loading = true;
          m.redraw();
          var rollbackTo = _this.revision.revision() == _this.post.revisionCount() ? _this.comparisonBetween.old.diffId : _this.revision.id();
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
            url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + "/diff/" + rollbackTo,
            method: 'POST'
          }).then(function () {
            Object(_utils_redrawPost__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.post);
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();

            if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs && flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.post.id()]) {
              delete flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.post.id()];
            }

            _this.showAlert('success', 'rollback');
          })["catch"](function () {
            _this.loading = false;
            m.redraw();
            Object(_utils_redrawPost__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.post);

            _this.showAlert('error', 'rollback');
          });
        }
      }
    }) : '', this.post.canDeleteEditHistory() && this.revision.revision() != this.post.revisionCount() ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.post_controls.delete_button'),
      icon: 'far fa-trash-alt',
      onclick: function onclick() {
        if (confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.confirmDelete'))) {
          _this.loading = true;
          m.redraw();

          _this.revision["delete"]().then(function () {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();

            if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs && flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.post.id()]) {
              delete flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.diffs[_this.post.id()];
            }

            _this.showAlert('success', 'delete');
          })["catch"](function () {
            _this.loading = false;
            m.redraw();

            _this.showAlert('error', 'delete');
          });
        }
      }
    }) : '') : '', m("div", {
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
    return [m("div", {
      className: "diff-grid"
    }, m("div", {
      className: "diff-grid-item diff-grid-controls"
    }, m("div", {
      className: "diffSwitcher"
    }, this.revision.revision() != 0 && this.comparisonBetween["new"].revision != this.comparisonBetween.old.revision ? [m("div", {
      className: "tooltip-wrapper",
      "data-original-title": flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.inline')
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-grip-lines',
      onclick: function onclick() {
        // fix for Chrome
        // tooltips are not disappearing onclick
        _this2.$('.' + tooltipClass).tooltip('hide');

        _this2.setDiffContent('inline');
      },
      className: 'Button Button--icon Button--link inlineView',
      config: function config(elm, isInitialized) {
        return Object(_utils_touchDevice__WEBPACK_IMPORTED_MODULE_8__["default"])() === false && !isInitialized ? $(elm).parent().tooltip({
          trigger: 'hover'
        }) // this is a workaround for adding custom
        // classes into bootstrap tooltips
        // https://stackoverflow.com/a/29879041/12866913
        .data('bs.tooltip').tip().addClass(tooltipClass) : '';
      }
    })), m("div", {
      className: "tooltip-wrapper",
      "data-original-title": flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.sideBySide')
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-columns',
      onclick: function onclick() {
        _this2.$('.' + tooltipClass).tooltip('hide');

        _this2.setDiffContent('sideBySide');
      },
      className: 'Button Button--icon Button--link sideBySideView',
      config: function config(elm, isInitialized) {
        return Object(_utils_touchDevice__WEBPACK_IMPORTED_MODULE_8__["default"])() === false && !isInitialized ? $(elm).parent().tooltip({
          trigger: 'hover'
        }).data('bs.tooltip').tip().addClass(tooltipClass) : '';
      }
    })), m("div", {
      className: "tooltip-wrapper",
      "data-original-title": flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.combined')
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'far fa-square',
      onclick: function onclick() {
        _this2.$('.' + tooltipClass).tooltip('hide');

        _this2.setDiffContent('combined');
      },
      className: 'Button Button--icon Button--link combinedView',
      config: function config(elm, isInitialized) {
        return Object(_utils_touchDevice__WEBPACK_IMPORTED_MODULE_8__["default"])() === false && !isInitialized ? $(elm).parent().tooltip({
          trigger: 'hover'
        }).data('bs.tooltip').tip().addClass(tooltipClass) : '';
      }
    }))] : '', m("div", {
      className: "tooltip-wrapper",
      "data-original-title": flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.composer.preview_tooltip')
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'far fa-eye',
      onclick: function onclick() {
        _this2.$('.' + tooltipClass).tooltip('hide');

        _this2.setDiffContent('preview');
      },
      className: 'Button Button--icon Button--link diffPreview',
      config: function config(elm, isInitialized) {
        return Object(_utils_touchDevice__WEBPACK_IMPORTED_MODULE_8__["default"])() === false && !isInitialized ? $(elm).parent().tooltip({
          trigger: 'hover'
        }).attr('data-original-title', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.composer.preview_tooltip')).data('bs.tooltip').tip().addClass(tooltipClass) : '';
      }
    })))), m("div", {
      className: "diff-grid-item diff-grid-info"
    }, m("div", {
      className: "revisionInfo"
    }, m("h4", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.transChoice('the-turk-diff.forum.revisions', this.post.revisionCount(), {
      revisionCount: this.post.revisionCount()
    })), m("p", {
      "class": "diffInfoContainer"
    }))), m("div", {
      className: "diff-grid-item diff-grid-revisions"
    }, this.list.render()), m("div", {
      className: "diff-grid-item diff-grid-diff"
    }, m("div", {
      className: "diffContents"
    }, m("div", {
      className: "previewContainer Post-body"
    }, this.renderHtml(this.revision.data.attributes.previewHtml)), m("div", {
      className: "diffContainer"
    }))), flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11___default.a.component({
      className: 'DiffModal-loading' + (this.loading ? ' active' : '')
    }))];
  }
  /**
   * Slowly scroll to selected revision.
   */
  ;

  _proto.onready = function onready() {
    var $revisions = this.$('.DiffList-content');
    var $selectedItem = this.$('li#parentDiff' + this.revision.id());
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
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_10___default.a({
      type: type,
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(message)
    }));
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
        diffContentHtml = this.renderHtml(this.revision.data.attributes.sideBySideHtml);
        $sideBySideButton.prop('disabled', true); // what a dynasty - LOL

        $sideBySideButton.parent().siblings().children().prop('disabled', false);
      } else if (contentType === 'inline') {
        diffContentHtml = this.renderHtml(this.revision.data.attributes.inlineHtml);
        $inlineButton.prop('disabled', true);
        $inlineButton.parent().siblings().children().prop('disabled', false);
      } else if (contentType === 'combined') {
        diffContentHtml = this.renderHtml(this.revision.data.attributes.combinedHtml);
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
      $diffContainer.html(diffContentHtml);

      if ($previewContainer.is(':visible')) {
        $diffContainer.show();
        $previewContainer.hide();
      } // let's remember their renderer choice


      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.savePreferences({
        'diffRenderer': contentType
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
    var infoContentHtml = !preview && this.revision.revision() != 0 && this.comparisonBetween["new"].revision != this.comparisonBetween.old.revision ? flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.differences', {
      old: this.comparisonBetween.old.revision == -1 ?
      /* we're viewing differences between current content and {new} */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.currentContent') : this.comparisonBetween.old.revision == 0 ?
      /* we're viewing differences between original content and {new} */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.originalContent') :
      /* we're viewing differences between revision X and {new} */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revisionWithNumber', {
        number: this.comparisonBetween.old.revision
      }),
      "new": this.comparisonBetween["new"].revision == 0 ?
      /* we're viewing differences between {old} and original content */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.originalContent') : this.comparisonBetween["new"].revision == this.post.revisionCount() ?
      /* we're viewing differences between {old} and current content */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.currentContent') :
      /* we're viewing differences between {old} and revision X */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revisionWithNumber', {
        number: this.comparisonBetween["new"].revision
      })
    })) : flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.previewMode', {
      content: this.comparisonBetween["new"].revision == 0 ?
      /* we're previewing original content */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.originalContent') : this.comparisonBetween["new"].revision == this.post.revisionCount() ?
      /* we're previewing current content */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.currentContent') :
      /* we're previewing revision X */
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('the-turk-diff.forum.revisionWithNumber', {
        number: this.comparisonBetween["new"].revision
      })
    }));
    return $infoContainer.html(infoContentHtml);
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
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canRollbackEditHistory = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canRollbackEditHistory');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.canDeleteEditHistory = flarum_Model__WEBPACK_IMPORTED_MODULE_5___default.a.attribute('canDeleteEditHistory');
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
  }); // prevent dropdown from closing when user
  // clicks on deleted diff

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'init', function () {
    var $body = $('body');
    $body.on('click', 'li.ParentDiff.has-sub', function (e) {
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
  rollbackedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('rollbackedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  actor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('actor'),
  deletedUser: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('deletedUser'),
  rollbackedUser: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('rollbackedUser'),
  inlineHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('inlineHtml'),
  sideBySideHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('sideBySideHtml'),
  combinedHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('combinedHtml'),
  previewHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('previewHtml'),
  comparisonBetween: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('comparisonBetween')
}));



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