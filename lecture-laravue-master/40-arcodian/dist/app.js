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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/item.vue":
/*!*****************************!*\
  !*** ./components/item.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item_vue_vue_type_template_id_72de1164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=72de1164& */ \"./components/item.vue?vue&type=template&id=72de1164&\");\n/* harmony import */ var _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js& */ \"./components/item.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _item_vue_vue_type_template_id_72de1164___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _item_vue_vue_type_template_id_72de1164___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/item.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/item.vue?");

/***/ }),

/***/ "./components/item.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./components/item.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/item.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/item.vue?");

/***/ }),

/***/ "./components/item.vue?vue&type=template&id=72de1164&":
/*!************************************************************!*\
  !*** ./components/item.vue?vue&type=template&id=72de1164& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_72de1164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=72de1164& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/item.vue?vue&type=template&id=72de1164&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_72de1164___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_72de1164___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/item.vue?");

/***/ }),

/***/ "./components/question.vue":
/*!*********************************!*\
  !*** ./components/question.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _question_vue_vue_type_template_id_d46265be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.vue?vue&type=template&id=d46265be& */ \"./components/question.vue?vue&type=template&id=d46265be&\");\n/* harmony import */ var _question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question.vue?vue&type=script&lang=js& */ \"./components/question.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _question_vue_vue_type_template_id_d46265be___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _question_vue_vue_type_template_id_d46265be___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/question.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/question.vue?");

/***/ }),

/***/ "./components/question.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./components/question.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./question.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/question.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/question.vue?");

/***/ }),

/***/ "./components/question.vue?vue&type=template&id=d46265be&":
/*!****************************************************************!*\
  !*** ./components/question.vue?vue&type=template&id=d46265be& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_template_id_d46265be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./question.vue?vue&type=template&id=d46265be& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/question.vue?vue&type=template&id=d46265be&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_template_id_d46265be___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_question_vue_vue_type_template_id_d46265be___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/question.vue?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_question_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/question.vue */ \"./components/question.vue\");\n\r\n\r\nlet app = new Vue({\r\n    el: '#pz',\r\n    components:{\r\n        question: _components_question_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    },\r\n    data(){\r\n        return {\r\n            questions: [\r\n                { question: \"hello\", answer: \"world\" },\r\n                { question: \"foo\", answer: \"bar\" },\r\n                { question: \"baz\", answer: \"qux\" },\r\n                { question: \"quux\", answer: \"corge\" },\r\n                { question: \"grault\", answer: \"graply\" },\r\n                { question: \"waldo\", answer: \"fred\" },\r\n                { question: \"plugh\", answer: \"xyzzy\" },\r\n            ]\r\n            \r\n        }\r\n    },\r\n    mounted(){\r\n        \r\n    },\r\n    methods: {\r\n        \r\n    }\r\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    props: [\r\n        'question', 'isOpen'\r\n    ],\r\n    data(){\r\n        return {\r\n\r\n        }\r\n    },\r\n    methods:{\r\n        toggle(){\r\n            this.$emit('toggled', this.$vnode.key);\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./components/item.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/question.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/question.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue */ \"./components/item.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    components:{\r\n        item: _item_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    },\r\n    props: {\r\n        questions : Array\r\n    },\r\n    data() {\r\n        return {\r\n            // isOpen: false\r\n            activeIdx: null\r\n        };\r\n    },\r\n    methods: {\r\n        onToggle(index){\r\n            this.activeIdx = this.activeIdx != index ? index : null;\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./components/question.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/item.vue?vue&type=template&id=72de1164&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/item.vue?vue&type=template&id=72de1164& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"tw-mb-8 tw-flex\" }, [\n    _c(\"div\", { staticClass: \"tw-mr-4\" }, [\n      _c(\n        \"button\",\n        {\n          staticClass:\n            \"tw-border tw-border-solid tw-border-grey-dark tw-rounded-full tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-text-xs tw-text-grey-dark tw-font-bold tw-leading-none tw-cursor-pointer\",\n          on: { click: _vm.toggle }\n        },\n        [\n          _vm.isOpen\n            ? _c(\n                \"svg\",\n                {\n                  staticClass: \"tw-fill-current\",\n                  attrs: {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    width: \"12\",\n                    height: \"16\",\n                    viewBox: \"0 0 12 16\"\n                  }\n                },\n                [\n                  _c(\"path\", {\n                    attrs: {\n                      d:\n                        \"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z\"\n                    }\n                  })\n                ]\n              )\n            : _c(\n                \"svg\",\n                {\n                  staticClass: \"tw-fill-current\",\n                  attrs: {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    width: \"12\",\n                    height: \"16\",\n                    viewBox: \"0 0 12 16\"\n                  }\n                },\n                [_c(\"path\", { attrs: { d: \"M12 9H7v5H5V9H0V7h5V2h2v5h5z\" } })]\n              )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"tw-leading-loose\" }, [\n      _c(\"h3\", {\n        staticClass:\n          \"tw-font-bold tw-text-2xl tw-mb-3 tw-text-black tw-leading-none tw-cursor-pointer\",\n        domProps: { textContent: _vm._s(_vm.question.question) },\n        on: { click: _vm.toggle }\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.isOpen,\n            expression: \"isOpen\"\n          }\n        ],\n        domProps: { innerHTML: _vm._s(_vm.question.answer) }\n      })\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/item.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/question.vue?vue&type=template&id=d46265be&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/question.vue?vue&type=template&id=d46265be& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    _vm._l(_vm.questions, function(question, index) {\n      return _c(\"item\", {\n        key: index,\n        attrs: { question: question, \"is-open\": _vm.activeIdx == index },\n        on: { toggled: _vm.onToggle }\n      })\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/question.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });