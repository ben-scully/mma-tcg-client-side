/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _showDeck = __webpack_require__(2);

	var _showDeck2 = _interopRequireDefault(_showDeck);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener("DOMContentLoaded", function (event) {
	  (0, _showDeck2.default)();
	  document.querySelectorAll('.card').addEventListener('click', getCardInfo, false);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (url, callback) {
	  var request = new XMLHttpRequest();
	  request.open('GET', url, true);
	  request.onload = function () {
	    if (request.status >= 200 && request.status < 400) {
	      // Success!
	      var data = JSON.parse(request.responseText);
	      callback(data);
	    } else {
	      // We reached our target server, but it returned an error
	      callback(request.status);
	    }
	  };
	  request.send();
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _card = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../view/card.jade\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _card2 = _interopRequireDefault(_card);

	var _getData = __webpack_require__(1);

	var _getData2 = _interopRequireDefault(_getData);

	var _score = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../view/score.jade\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _score2 = _interopRequireDefault(_score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  (0, _getData2.default)('http://192.168.1.2:8000/new', function (data) {
	    var cards = void 0,
	        player1Cards = document.querySelector('.player1Cards'),
	        // selete the player1's cards container
	    player2Cards = document.querySelector('.player2Cards'); // selete the player2's cards container

	    typeof data != 'number' ? cards = data : console.log('error code' + data);
	    // insert the cards
	    cards.forEach(function (i, card) {
	      var cardEle = (0, _card2.default)(card);
	      player1Cards.appendChild(cardEle);
	      player2Cards.appendChild((0, _card2.default)({ name: 'pc', rating: i + 1, image: '/' }));
	    })

	    // insert the score
	    [(1, 2)].forEach(function (i, score) {
	      var scoreDiv = document.querySelector('#boutContainerP' + i);

	      scoreDiv.appendChild((0, _score2.default)({ playerId: i, score: 0 }));
	    });
	  });
	};

/***/ }
/******/ ]);