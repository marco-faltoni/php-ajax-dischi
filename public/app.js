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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // creo una var vuota da richiamare dentro l'AJAX
  var array_dischi; // creo una variabile uguale ad un oggetto vuoto.

  var disco1 = {}; // imposto e creo il templete handlebars da richiamre poi nella funzione

  var template_html = $('#template-handlebars').html();
  var template = Handlebars.compile(template_html);
  $.ajax({
    'url': 'database/db.php',
    'method': 'GET',
    'success': function success(data) {
      // assegno, alla variabile creata sopra, il valore response di "data", che ha all'interno 10 oggetti dentro un array. quindi in definita mi estraggo un array con 10 oggetti.
      array_dischi = data; // richiamo la funzione di associazione data - disco

      associo_dischi();
    },
    'error': function error() {
      alert('si è verificato un errore');
    }
  });

  function associo_dischi() {
    // con il ciclo for vado ad assegnare, ad ogni proprietà che creo dentro il mio oggetto vuoto, un valore che deve matchare con quello presente nei data che ho estratto prima. il mio ciclo for dura tanto quanto la lunghezza dell'array che ho estratto (quindi 10).
    for (var i = 0; i < array_dischi.length; i++) {
      // creo proprietà author, che sarà uguale a le keys/nomi "author" presenti dentro l'array che mi sono preso dall'ajax. faccio lo stesso procedimento per tutti le altre keys/nomi che mi interessa prendere
      disco1.author = array_dischi[i].author;
      disco1.title = array_dischi[i].title;
      disco1.year = array_dischi[i].year;
      disco1.poster = array_dischi[i].poster;
      disco1.genre = array_dischi[i].genre; // richiamo la funzione che mi permette di appendere, ad ogni singolo ciclo, l'oggetto che con le proprietà che ho estratto dall'array.

      handlebars(disco1);
    }
  } // con questa funzione appendo, ad ogni singolo ciclo, l'oggetto che con le proprietà che ho estratto dall'array.


  function handlebars(disco) {
    var html = template(disco);
    $('.disco').append(html);
  }
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\Boolean\php-ajax-dischi\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\Boolean\php-ajax-dischi\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });