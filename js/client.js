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

	var _showDeck = __webpack_require__(1);

	var _showDeck2 = _interopRequireDefault(_showDeck);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener("DOMContentLoaded", function (event) {
	  //showDeck()

	  var btns = document.querySelector('.newGame');
	  btns.addEventListener('click', _showDeck2.default, true);
	  /*  console.log(btns)
	    for(let i=0;i<btns.length;i++){
	      btns[i]
	    }*/
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getData = __webpack_require__(5);

	var _getData2 = _interopRequireDefault(_getData);

	var _generateCards = __webpack_require__(13);

	var _generateCards2 = _interopRequireDefault(_generateCards);

	var _generateScore = __webpack_require__(8);

	var _generateScore2 = _interopRequireDefault(_generateScore);

	var _bindClickToCards = __webpack_require__(14);

	var _bindClickToCards2 = _interopRequireDefault(_bindClickToCards);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (callback) {
	  console.log('i am showing');
	  document.querySelector('.game').className += ' showGame';
	  var result = document.querySelector('#results-container');
	  result ? result.className = '' : console.log('new game');
	  document.querySelector('.newGame').className = 'newGame hidden'; // hide the new game button
	  (0, _getData2.default)('http://localhost:8000/new', function (data) {
	    typeof data != 'number' ? (0, _generateCards2.default)(data) : console.log(data);
	    (0, _generateScore2.default)();
	    (0, _bindClickToCards2.default)();
	  });
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (image, name, rating) {
	buf.push("<div class=\"card playercard\"><img src=\"http://orig08.deviantart.net/a4af/f/2015/017/1/2/neutral_legendary_monster_empty_card_by_demaretc-d8ea24s.png\" class=\"cardTemplate\"><div class=\"name\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</div><div class=\"imageContainer\"><img" + (jade.attr("src", '' + (image) + '', true, true)) + (jade.attr("alt", '' + (name) + '', true, true)) + " class=\"image\"></div><div class=\"rating\">" + (jade.escape((jade_interp = rating) == null ? '' : jade_interp)) + "</div></div>");}.call(this,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"rating" in locals_for_with?locals_for_with.rating:typeof rating!=="undefined"?rating:undefined));;return buf.join("");
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(4).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (playerId, score) {
	buf.push("<div" + (jade.attr("id", 'boutScoreP' + (playerId) + '', true, true)) + " class=\"boutScore\"><div class=\"boutName\">Player" + (jade.escape((jade_interp = playerId) == null ? '' : jade_interp)) + ":</div><div class=\"boutNumber\">" + (jade.escape((jade_interp = score) == null ? '' : jade_interp)) + "</div></div>");}.call(this,"playerId" in locals_for_with?locals_for_with.playerId:typeof playerId!=="undefined"?playerId:undefined,"score" in locals_for_with?locals_for_with.score:typeof score!=="undefined"?score:undefined));;return buf.join("");
	}

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _score = __webpack_require__(6);

	var _score2 = _interopRequireDefault(_score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	      [1, 2].forEach(function (id) {
	            var divid = '#boutContainerP' + id;
	            var scoreDiv = document.querySelector(divid);

	            scoreDiv.innerHTML = (0, _score2.default)({ playerId: id, score: 0 });
	      });
	};

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _postData = __webpack_require__(11);

	var _postData2 = _interopRequireDefault(_postData);

	var _updateScore = __webpack_require__(12);

	var _updateScore2 = _interopRequireDefault(_updateScore);

	var _calculateWinner = __webpack_require__(15);

	var _calculateWinner2 = _interopRequireDefault(_calculateWinner);

	var _showResult = __webpack_require__(16);

	var _showResult2 = _interopRequireDefault(_showResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (event) {
	  var card = event.target;
	  if (card.className == 'name' || card.className == 'rating' || card.className == 'cardTemplate' || card.className == 'imageContainer') {
	    card = card.parentNode;
	  }

	  var name = card.getElementsByClassName('name')[0].innerHTML,
	      rating = card.getElementsByClassName('rating')[0].innerHTML,
	      image = card.getElementsByClassName('image')[0].getAttribute('href');

	  (0, _postData2.default)('http://localhost:8000/round', { name: name, rating: rating, image: image }, function (data) {
	    var numCards = document.querySelectorAll('.playercard').length;
	    if (typeof data != 'number') {
	      var winner = (0, _calculateWinner2.default)(numCards, data.p1, data.p2);
	      !winner ? (0, _updateScore2.default)(data) : (0, _showResult2.default)(data.p1, data.p2, winner);
	    } else console.log('error code ' + data);
	  });
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (url, card, callback) {
	  var request = new XMLHttpRequest();
	  request.open('POST', url, true);
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
	  request.send(JSON.stringify(card));
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (data) {
	  var player1 = document.querySelector('#boutScoreP1'),
	      player2 = document.querySelector('#boutScoreP2');
	  player1.querySelector('.boutNumber').innerHTML = data.p1;
	  player2.querySelector('.boutNumber').innerHTML = data.p2;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _card = __webpack_require__(2);

	var _card2 = _interopRequireDefault(_card);

	var _compCard = __webpack_require__(18);

	var _compCard2 = _interopRequireDefault(_compCard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (cards) {
	    var p1cards = document.querySelector('#cardContainerP1'),
	        // selete the player1's cards container
	    p2cards = document.querySelector('#cardContainerP2'),
	        allcardsP1 = '',
	        allcardsP2 = '';

	    cards.forEach(function (card, i) {
	        allcardsP1 += (0, _card2.default)(card);
	        allcardsP2 += (0, _compCard2.default)();
	    });

	    p1cards.innerHTML = allcardsP1;
	    p2cards.innerHTML = allcardsP2;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getCardInfo = __webpack_require__(10);

	var _getCardInfo2 = _interopRequireDefault(_getCardInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	    // bind click event to player's card
	    var eventCards = document.querySelectorAll('.playercard');
	    for (var i = 0; i < eventCards.length; i++) {
	        eventCards[i].addEventListener('click', _getCardInfo2.default);
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (numCards, p1Score, p2Score) {
	  var winCondition = Math.floor(numCards / 2 + 1);
	  if (p1Score < winCondition && p2Score < winCondition) return false;else return p1Score > p2Score ? 1 : 2;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _result = __webpack_require__(17);

	var _result2 = _interopRequireDefault(_result);

	var _unlisten = __webpack_require__(19);

	var _unlisten2 = _interopRequireDefault(_unlisten);

	var _showDeck = __webpack_require__(1);

	var _showDeck2 = _interopRequireDefault(_showDeck);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (p1Score, p2Score, winner) {
	  var resultDiv = document.getElementById('result-container');
	  resultDiv.innerHTML = (0, _result2.default)({ p1Score: p1Score, p2Score: p2Score, winner: winner });
	  resultDiv.querySelector('.newGame2').addEventListener('click', _showDeck2.default, true);
	  resultDiv.className += ' showResult';
	  (0, _unlisten2.default)();
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (p1Score, p2Score, winner) {
	buf.push("<div class=\"resultPlayer\">Player 1 score: " + (jade.escape((jade_interp = p1Score) == null ? '' : jade_interp)) + "</div><div class=\"resultPlayer\">Player 2 score: " + (jade.escape((jade_interp = p2Score) == null ? '' : jade_interp)) + "</div><div class=\"resultMessage\">Player" + (jade.escape((jade_interp = winner) == null ? '' : jade_interp)) + " wins!</div><button class=\"newGame2\">NEW GAME</button>");}.call(this,"p1Score" in locals_for_with?locals_for_with.p1Score:typeof p1Score!=="undefined"?p1Score:undefined,"p2Score" in locals_for_with?locals_for_with.p2Score:typeof p2Score!=="undefined"?p2Score:undefined,"winner" in locals_for_with?locals_for_with.winner:typeof winner!=="undefined"?winner:undefined));;return buf.join("");
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(3);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"computerCard card\"><img src=\"https://cdn3.vox-cdn.com/uploads/branded_hub/sbnu_logo/395/mmafighting.com.full.383144.png\" alt=\"Computers Card\"></div>");;return buf.join("");
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getCardInfo = __webpack_require__(10);

	var _getCardInfo2 = _interopRequireDefault(_getCardInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  var eventCards = document.querySelectorAll('.playercard');
	  for (var i = 0; i < eventCards.length; i++) {
	    eventCards[i].removeEventListener('click', _getCardInfo2.default, true);
	  }
	};

/***/ }
/******/ ]);