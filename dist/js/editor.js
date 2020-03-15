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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blocks_recovery__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blocks_recovery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_blocks_recovery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_block__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_filters_default_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_filters_default_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__core_filters_default_classnames__);
/*
* Import Wordpress dependencies
*/
var __ = wp.i18n.__;

/**
 * Import components
 */
// import '../components/animations';



/**
 * Import blocks
 */


/**
 * Import filters
 */


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Import wordpress dependencies
 */
var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var registerPlugin = wp.plugins.registerPlugin;

/**
 * Check for invalid blocks and tries to resolve them, if valid, check for
 * invalid innerBlocks
 * @function resolveBlocks
 * @param  {[type]}      id [block clientId]
 * @return {[type]}         [null]
 */

var resolveBlocks = function resolveBlocks(id) {
	var blocks = id ? select('core/block-editor').getBlock(id).innerBlocks : select('core/block-editor').getBlocks();

	if (Array.isArray(blocks)) {
		blocks.map(function (block) {
			if (!block.isValid) {
				var newBlock = createBlock(block.name, block.attributes, block.innerblocks);
				dispatch('core/block-editor').replaceBlock(block.clientId, newBlock);
			} else {
				resolveBlocks(block.clientId);
			};
		});
	};
};

var ResolveBlocks = function ResolveBlocks() {
	return React.createElement(
		PluginMoreMenuItem,
		{
			icon: 'forms',
			onClick: function onClick() {
				return resolveBlocks();
			}
		},
		__('Attempt All Blocks Recovery', 'gutenberg-blocks-recovery')
	);
};

registerPlugin('gutenberg-blocks-recovery', { render: ResolveBlocks });

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attributes_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_editor_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_renderer_js__ = __webpack_require__(24);
/*
* Internal dependencies
*/





/*
* Import Wordpress dependencies
*/
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

/*
* Define settings
*/

var blockSettings = {
  title: __('Example Block'),

  icon: __WEBPACK_IMPORTED_MODULE_1__icon_js__["a" /* default */],

  category: 'layout',

  // helper: Uncomment to support ID and alignment
  // supports: {
  //     anchor: true,
  //     align: true
  // },

  keywords: [__('Boilerplate'), __('Test'), __('Example')],

  attributes: __WEBPACK_IMPORTED_MODULE_0__attributes_js__["a" /* default */],

  edit: __WEBPACK_IMPORTED_MODULE_2__js_editor_js__["a" /* default */],

  save: __WEBPACK_IMPORTED_MODULE_3__js_renderer_js__["a" /* default */]

  /**
   * Register block
   */
};registerBlockType('custom-blocks/example-block', blockSettings);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var attributes = {
	content: {
		default: 'Hello World',
		type: 'string'
	}
};

/* harmony default export */ __webpack_exports__["a"] = (attributes);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = 'smiley';

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inspector_js__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wordpress dependencies
 */
var Component = wp.element.Component;

/*
 * Internal dependencies
 */



/*
 * Editor component
 */

var Editor = function (_Component) {
    _inherits(Editor, _Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));
    }

    _createClass(Editor, [{
        key: 'render',
        value: function render() {

            // Destruct important props
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes,
                isSelected = _props.isSelected,
                clientId = _props.clientId,
                className = _props.className;

            _objectDestructuringEmpty(attributes);

            return React.createElement(
                'div',
                { className: className },
                React.createElement(__WEBPACK_IMPORTED_MODULE_0__inspector_js__["a" /* default */], null),
                React.createElement(
                    'span',
                    null,
                    'Example Block'
                )
            );
        }
    }]);

    return Editor;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Editor);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wordpress dependencies
 */
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var InspectorControls = wp.blockEditor.InspectorControls;
var Component = wp.element.Component;
var __ = wp.i18n.__;

/*
* Editor component
*/

var CustomInspector = function (_Component) {
	_inherits(CustomInspector, _Component);

	function CustomInspector(props) {
		_classCallCheck(this, CustomInspector);

		return _possibleConstructorReturn(this, (CustomInspector.__proto__ || Object.getPrototypeOf(CustomInspector)).call(this, props));
	}

	_createClass(CustomInspector, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				InspectorControls,
				null,
				React.createElement(
					PanelBody,
					{
						title: __('My Block Settings', 'custom-blocks'),
						icon: 'welcome-widgets-menus',
						initialOpen: true
					},
					React.createElement(
						PanelRow,
						null,
						'My Panel Inputs and Labels'
					)
				)
			);
		}
	}]);

	return CustomInspector;
}(Component);

;

/* harmony default export */ __webpack_exports__["a"] = (CustomInspector);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
* Wordpress dependencies
*/

var Renderer = function Renderer(props) {

  // Destruct important props
  var attributes = props.attributes,
      className = props.className;


  return React.createElement(
    "span",
    null,
    "Example Block"
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Renderer);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * setCoreBlockCustomClassName sets default class names
 * prevents blocks from invalid rendering after gutenberg update
 * @param {string} className
 * @param {string} blockName
 */
function setCoreBlockCustomClassName(className, blockName) {
    // If core block, set default class based on block name
    if (blockName.startsWith('core/')) {
        newClass = "wp-block-" + blockName.replace('core/', '');
        return newClass;
    }

    // Leave custom blocks untouched
    return className;
}

// Adding the filter
wp.hooks.addFilter('blocks.getBlockDefaultClassName', 'custom-blocks/set-core-block-custom-class-name', setCoreBlockCustomClassName);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODFjYjc4ZmI3ZGM2ZDZkNDhiY2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY29tcG9uZW50cy9ibG9ja3MtcmVjb3ZlcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Jsb2Nrcy9leGFtcGxlLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9ibG9ja3MvZXhhbXBsZS1ibG9jay9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9ibG9ja3MvZXhhbXBsZS1ibG9jay9pY29uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9ibG9ja3MvZXhhbXBsZS1ibG9jay9qcy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Jsb2Nrcy9leGFtcGxlLWJsb2NrL2pzL2luc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYmxvY2tzL2V4YW1wbGUtYmxvY2svanMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2NvcmUtZmlsdGVycy9kZWZhdWx0LWNsYXNzbmFtZXMvaW5kZXguanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJjcmVhdGVCbG9jayIsImJsb2NrcyIsIlBsdWdpbk1vcmVNZW51SXRlbSIsImVkaXRQb3N0IiwiZGF0YSIsInNlbGVjdCIsImRpc3BhdGNoIiwicmVnaXN0ZXJQbHVnaW4iLCJwbHVnaW5zIiwicmVzb2x2ZUJsb2NrcyIsImlkIiwiZ2V0QmxvY2siLCJpbm5lckJsb2NrcyIsImdldEJsb2NrcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImJsb2NrIiwiaXNWYWxpZCIsIm5ld0Jsb2NrIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJpbm5lcmJsb2NrcyIsInJlcGxhY2VCbG9jayIsImNsaWVudElkIiwiUmVzb2x2ZUJsb2NrcyIsInJlbmRlciIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tTZXR0aW5ncyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJlZGl0IiwiRWRpdG9yIiwic2F2ZSIsIlJlbmRlcmVyIiwiY29udGVudCIsImRlZmF1bHQiLCJ0eXBlIiwiQ29tcG9uZW50IiwiZWxlbWVudCIsInByb3BzIiwic2V0QXR0cmlidXRlcyIsImlzU2VsZWN0ZWQiLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJJbnNwZWN0b3JDb250cm9scyIsImJsb2NrRWRpdG9yIiwiQ3VzdG9tSW5zcGVjdG9yIiwic2V0Q29yZUJsb2NrQ3VzdG9tQ2xhc3NOYW1lIiwiYmxvY2tOYW1lIiwic3RhcnRzV2l0aCIsIm5ld0NsYXNzIiwicmVwbGFjZSIsImhvb2tzIiwiYWRkRmlsdGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztJQUdRQSxFLEdBQU9DLEdBQUdDLEksQ0FBVkYsRTs7QUFFUjs7O0FBR0E7O0FBQ0E7O0FBRUE7OztBQUdBOztBQUdBOzs7Ozs7Ozs7QUNqQkE7OztJQUdRQSxF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QUFqRCxFQUE2RDtBQUN6RDtBQUNBLFFBQUlBLFVBQVVDLFVBQVYsQ0FBc0IsT0FBdEIsQ0FBSixFQUFxQztBQUNqQ0MsbUJBQVcsY0FBY0YsVUFBVUcsT0FBVixDQUFrQixPQUFsQixFQUEyQixFQUEzQixDQUF6QjtBQUNBLGVBQU9ELFFBQVA7QUFDSDs7QUFFRDtBQUNBLFdBQU9WLFNBQVA7QUFDSDs7QUFFRDtBQUNBL0MsR0FBRzJELEtBQUgsQ0FBU0MsU0FBVCxDQUNJLGlDQURKLEVBRUksZ0RBRkosRUFHSU4sMkJBSEosRSIsImZpbGUiOiIvanMvZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgxY2I3OGZiN2RjNmQ2ZDQ4YmNiIiwiLypcbiogSW1wb3J0IFdvcmRwcmVzcyBkZXBlbmRlbmNpZXNcbiovXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEltcG9ydCBjb21wb25lbnRzXG4gKi9cbi8vIGltcG9ydCAnLi4vY29tcG9uZW50cy9hbmltYXRpb25zJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9ibG9ja3MtcmVjb3ZlcnknO1xuXG4vKipcbiAqIEltcG9ydCBibG9ja3NcbiAqL1xuaW1wb3J0ICcuL2V4YW1wbGUtYmxvY2snO1xuXG5cbi8qKlxuICogSW1wb3J0IGZpbHRlcnNcbiAqL1xuaW1wb3J0ICcuLi9jb3JlLWZpbHRlcnMvZGVmYXVsdC1jbGFzc25hbWVzJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9ibG9ja3MvaW5kZXguanMiLCIvKipcbiAqIEltcG9ydCB3b3JkcHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IGNyZWF0ZUJsb2NrIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IFBsdWdpbk1vcmVNZW51SXRlbSx9ID0gd3AuZWRpdFBvc3Q7XG5jb25zdCB7IHNlbGVjdCwgZGlzcGF0Y2ggfSA9IHdwLmRhdGE7XG5jb25zdCB7IHJlZ2lzdGVyUGx1Z2luIH0gPSB3cC5wbHVnaW5zO1xuXG4vKipcbiAqIENoZWNrIGZvciBpbnZhbGlkIGJsb2NrcyBhbmQgdHJpZXMgdG8gcmVzb2x2ZSB0aGVtLCBpZiB2YWxpZCwgY2hlY2sgZm9yXG4gKiBpbnZhbGlkIGlubmVyQmxvY2tzXG4gKiBAZnVuY3Rpb24gcmVzb2x2ZUJsb2Nrc1xuICogQHBhcmFtICB7W3R5cGVdfSAgICAgIGlkIFtibG9jayBjbGllbnRJZF1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbbnVsbF1cbiAqL1xuY29uc3QgcmVzb2x2ZUJsb2NrcyA9IChpZCkgPT4ge1xuXHRjb25zdCBibG9ja3MgPSBpZCA/XG5cdFx0c2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpLmdldEJsb2NrKGlkKS5pbm5lckJsb2Nrc1xuXHRcdDogc2VsZWN0KCdjb3JlL2Jsb2NrLWVkaXRvcicpLmdldEJsb2NrcygpO1xuXG5cdGlmICggQXJyYXkuaXNBcnJheShibG9ja3MpICkge1xuXHRcdGJsb2Nrcy5tYXAoIChibG9jaykgPT4ge1xuXHRcdFx0aWYgKCFibG9jay5pc1ZhbGlkKSB7XG5cdFx0XHRcdGNvbnN0IG5ld0Jsb2NrID0gY3JlYXRlQmxvY2soIGJsb2NrLm5hbWUsIGJsb2NrLmF0dHJpYnV0ZXMsIGJsb2NrLmlubmVyYmxvY2tzKTtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvYmxvY2stZWRpdG9yJykucmVwbGFjZUJsb2NrKCBibG9jay5jbGllbnRJZCwgbmV3QmxvY2sgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmVCbG9ja3MoYmxvY2suY2xpZW50SWQpXG5cdFx0XHR9O1xuXHRcdH0gKTtcblx0fTtcbn07XG5cbmNvbnN0IFJlc29sdmVCbG9ja3MgPSAoKSA9PiAoXG5cdDxQbHVnaW5Nb3JlTWVudUl0ZW1cblx0XHRpY29uPVwiZm9ybXNcIlxuXHRcdG9uQ2xpY2s9eyAoKSA9PiByZXNvbHZlQmxvY2tzKCkgfVxuXHQ+XG5cdFx0eyBfXyggJ0F0dGVtcHQgQWxsIEJsb2NrcyBSZWNvdmVyeScsICdndXRlbmJlcmctYmxvY2tzLXJlY292ZXJ5JyApIH1cblx0PC9QbHVnaW5Nb3JlTWVudUl0ZW0+XG4pO1xuXG5yZWdpc3RlclBsdWdpbiggJ2d1dGVuYmVyZy1ibG9ja3MtcmVjb3ZlcnknLCB7IHJlbmRlcjogUmVzb2x2ZUJsb2NrcyB9ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvY29tcG9uZW50cy9ibG9ja3MtcmVjb3ZlcnkvaW5kZXguanMiLCIvKlxuKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiovXG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanMnO1xuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uLmpzJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9qcy9lZGl0b3IuanMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vanMvcmVuZGVyZXIuanMnO1xuXG4vKlxuKiBJbXBvcnQgV29yZHByZXNzIGRlcGVuZGVuY2llc1xuKi9cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8qXG4qIERlZmluZSBzZXR0aW5nc1xuKi9cbmxldCBibG9ja1NldHRpbmdzID0ge1xuICB0aXRsZTogX18oICdFeGFtcGxlIEJsb2NrJyApLFxuXG4gIGljb246IGljb24sXG5cbiAgY2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG4gIC8vIGhlbHBlcjogVW5jb21tZW50IHRvIHN1cHBvcnQgSUQgYW5kIGFsaWdubWVudFxuICAvLyBzdXBwb3J0czoge1xuICAvLyAgICAgYW5jaG9yOiB0cnVlLFxuICAvLyAgICAgYWxpZ246IHRydWVcbiAgLy8gfSxcblxuICBrZXl3b3JkczogW1xuICAgICAgX18oICdCb2lsZXJwbGF0ZScgKSxcbiAgICAgIF9fKCAnVGVzdCcgKSxcbiAgICAgIF9fKCAnRXhhbXBsZScgKSxcbiAgXSxcblxuICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuXG4gIGVkaXQ6IEVkaXRvcixcblxuICBzYXZlOiBSZW5kZXJlcixcblxufVxuXG5cbi8qKlxuICogUmVnaXN0ZXIgYmxvY2tcbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2N1c3RvbS1ibG9ja3MvZXhhbXBsZS1ibG9jaycsIGJsb2NrU2V0dGluZ3MpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYmxvY2tzL2V4YW1wbGUtYmxvY2svaW5kZXguanMiLCJjb25zdCBhdHRyaWJ1dGVzID0ge1xuXHRjb250ZW50OiB7XG5cdFx0ZGVmYXVsdDogJ0hlbGxvIFdvcmxkJyxcblx0XHR0eXBlOiAnc3RyaW5nJ1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9ibG9ja3MvZXhhbXBsZS1ibG9jay9hdHRyaWJ1dGVzLmpzIiwiY29uc3QgaWNvbiA9ICdzbWlsZXknO1xuXG5leHBvcnQgZGVmYXVsdCBpY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Jsb2Nrcy9leGFtcGxlLWJsb2NrL2ljb24uanMiLCIvKipcbiAqIFdvcmRwcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IEN1c3RvbUluc3BlY3RvciBmcm9tICcuL2luc3BlY3Rvci5qcydcblxuLypcbiAqIEVkaXRvciBjb21wb25lbnRcbiAqL1xuY2xhc3MgRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIERlc3RydWN0IGltcG9ydGFudCBwcm9wc1xuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGlzU2VsZWN0ZWQsIGNsaWVudElkLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW5zcGVjdG9yIC8+XG5cbiAgICAgICAgICAgICAgICA8c3Bhbj5FeGFtcGxlIEJsb2NrPC9zcGFuPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Jsb2Nrcy9leGFtcGxlLWJsb2NrL2pzL2VkaXRvci5qcyIsIi8qKlxuICogV29yZHByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IFBhbmVsQm9keSwgUGFuZWxSb3cgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLypcbiogRWRpdG9yIGNvbXBvbmVudFxuKi9cbmNsYXNzIEN1c3RvbUluc3BlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnTXkgQmxvY2sgU2V0dGluZ3MnLCAnY3VzdG9tLWJsb2NrcycpfVxuXHRcdFx0XHRcdGljb249XCJ3ZWxjb21lLXdpZGdldHMtbWVudXNcIlxuXHRcdFx0XHRcdGluaXRpYWxPcGVuPXt0cnVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0TXkgUGFuZWwgSW5wdXRzIGFuZCBMYWJlbHNcblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0KVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbnNwZWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYmxvY2tzL2V4YW1wbGUtYmxvY2svanMvaW5zcGVjdG9yLmpzIiwiLyoqXG4qIFdvcmRwcmVzcyBkZXBlbmRlbmNpZXNcbiovXG5cbmNvbnN0IFJlbmRlcmVyID0gKHByb3BzKSA9PiB7XG5cbiAgLy8gRGVzdHJ1Y3QgaW1wb3J0YW50IHByb3BzXG4gIGNvbnN0IHsgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPHNwYW4+RXhhbXBsZSBCbG9jazwvc3Bhbj5cblxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYmxvY2tzL2V4YW1wbGUtYmxvY2svanMvcmVuZGVyZXIuanMiLCIvKipcbiAqIHNldENvcmVCbG9ja0N1c3RvbUNsYXNzTmFtZSBzZXRzIGRlZmF1bHQgY2xhc3MgbmFtZXNcbiAqIHByZXZlbnRzIGJsb2NrcyBmcm9tIGludmFsaWQgcmVuZGVyaW5nIGFmdGVyIGd1dGVuYmVyZyB1cGRhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBibG9ja05hbWVcbiAqL1xuZnVuY3Rpb24gc2V0Q29yZUJsb2NrQ3VzdG9tQ2xhc3NOYW1lKCBjbGFzc05hbWUsIGJsb2NrTmFtZSApIHtcbiAgICAvLyBJZiBjb3JlIGJsb2NrLCBzZXQgZGVmYXVsdCBjbGFzcyBiYXNlZCBvbiBibG9jayBuYW1lXG4gICAgaWYgKGJsb2NrTmFtZS5zdGFydHNXaXRoKCAnY29yZS8nICkpIHtcbiAgICAgICAgbmV3Q2xhc3MgPSBcIndwLWJsb2NrLVwiICsgYmxvY2tOYW1lLnJlcGxhY2UoJ2NvcmUvJywgJycpO1xuICAgICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuXG4gICAgLy8gTGVhdmUgY3VzdG9tIGJsb2NrcyB1bnRvdWNoZWRcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG4vLyBBZGRpbmcgdGhlIGZpbHRlclxud3AuaG9va3MuYWRkRmlsdGVyKFxuICAgICdibG9ja3MuZ2V0QmxvY2tEZWZhdWx0Q2xhc3NOYW1lJyxcbiAgICAnY3VzdG9tLWJsb2Nrcy9zZXQtY29yZS1ibG9jay1jdXN0b20tY2xhc3MtbmFtZScsXG4gICAgc2V0Q29yZUJsb2NrQ3VzdG9tQ2xhc3NOYW1lXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2NvcmUtZmlsdGVycy9kZWZhdWx0LWNsYXNzbmFtZXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9