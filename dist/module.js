define(function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-config/config.html":
/*!********************************!*\
  !*** ./app-config/config.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"page-header\\\">\\n\\tThingSPIN Edge AI Configuration\\n</div>\";\n\n//# sourceURL=webpack:///./app-config/config.html?");

/***/ }),

/***/ "./app-config/config.ts":
/*!******************************!*\
  !*** ./app-config/config.ts ***!
  \******************************/
/*! exports provided: AppConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppConfigCtrl\", function() { return AppConfigCtrl; });\nvar AppConfigCtrl = /** @class */ (function () {\n    function AppConfigCtrl($q) {\n        this.$q = $q;\n        this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this));\n        this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));\n    }\n    AppConfigCtrl.prototype.preUpdate = function () {\n        return this.$q.resolve();\n    };\n    AppConfigCtrl.prototype.postUpdate = function () {\n        return this.$q.resolve();\n    };\n    AppConfigCtrl.template = __webpack_require__(/*! ./config.html */ \"./app-config/config.html\");\n    return AppConfigCtrl;\n}());\n\n\n\n//# sourceURL=webpack:///./app-config/config.ts?");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: ConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-config/config */ \"./app-config/config.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ConfigCtrl\", function() { return _app_config_config__WEBPACK_IMPORTED_MODULE_0__[\"AppConfigCtrl\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./module.ts?");

/***/ })

/******/ })});;