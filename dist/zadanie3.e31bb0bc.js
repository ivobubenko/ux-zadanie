// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/Question.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Question = /*#__PURE__*/function () {
  function Question(number) {
    _classCallCheck(this, Question);
    _defineProperty(this, "_question", void 0);
    _defineProperty(this, "_answers", []);
    _defineProperty(this, "_markup", void 0);
    _defineProperty(this, "_number", void 0);
    this._number = number;
  }
  _createClass(Question, [{
    key: "setQuestion",
    value: function setQuestion(question) {
      this._question = question;
    }
  }, {
    key: "addAnswer",
    value: function addAnswer(answer) {
      var isCorrect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this._answers.push([answer, isCorrect]);
    }
  }, {
    key: "addMultipleAnswers",
    value: function addMultipleAnswers(answerList) {
      var _this = this;
      answerList === null || answerList === void 0 || answerList.forEach(function (answer) {
        console.log();
        _this.addAnswer(_typeof(answer) != "object" ? answer : answer[0], _typeof(answer) == "object" && true);
      });
    }
  }, {
    key: "isSingleCorrect",
    value: function isSingleCorrect() {
      var index = 0;
      this._answers.forEach(function (ans) {
        ans[1] && index++;
      });
      console.log(index);
      return index == 1 ? true : false;
    }
  }, {
    key: "generateAnswer",
    value: function generateAnswer(answer, key) {
      var div = document.createElement("div");
      var label = document.createElement("label");
      var checkbox = document.createElement("input");
      checkbox.type = this.isSingleCorrect() ? "radio" : "checkbox";
      checkbox.name = "question" + this._number;
      checkbox.id = key;
      label.setAttribute("for", key);
      div.classList.add("answer");
      label.innerText = answer[0];
      div.insertAdjacentElement("beforeend", checkbox);
      div.insertAdjacentElement("beforeend", label);
      div.addEventListener("submit--quiz", function (e) {
        e.preventDefault();
        console.log(checkbox.checked);
        if (answer[1] && checkbox.checked) {
          div.classList.add("correct");
        } else if (answer[1]) {
          div.classList.add("correct--unchecked");
        } else if (checkbox.checked) {
          div.classList.add("incorrect");
        }
      });
      return div;
    }
  }, {
    key: "generateMarkup",
    value: function generateMarkup() {
      var _this2 = this;
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this._markup = document.createElement("div");
      this._markup.classList.add("question");
      this._markup.innerHTML = "<p class=\"question--text\">".concat(this._number, ". ").concat(this._question, "</p");
      this._answers.forEach(function (ans) {
        _this2._markup.insertAdjacentElement("beforeend", _this2.generateAnswer(ans, number));
        number++;
      });
      return [this._markup, number];
    }
  }]);
  return Question;
}();
var _default = exports.default = Question;
},{}],"js/Score.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);
  }
  _createClass(Score, [{
    key: "calcScore",
    value: function calcScore() {
      var questionsElArr = _toConsumableArray(document.getElementsByClassName("question"));
      var totalScore = 0;
      var actualScore = 0;
      questionsElArr.forEach(function (el) {
        _toConsumableArray(el.children).forEach(function (el) {
          var qst = _toConsumableArray(el.classList);
          if (qst.includes("correct--unchecked") || qst.includes("correct")) {
            totalScore++;
          }
          //qst.includes("incorrect") && actualScore--;
          qst.includes("correct") && actualScore++;
        });
      });
      console.log(questionsElArr);
      return [actualScore, totalScore];
    }
  }, {
    key: "generateEl",
    value: function generateEl() {
      var scoreBar = document.createElement("div");
      var _ref = _toConsumableArray(this.calcScore()),
        actualScore = _ref[0],
        totalScore = _ref[1];
      scoreBar.id = "score--result";
      scoreBar.classList.add("score");
      scoreBar.textContent = "Skore: " + actualScore + "/" + totalScore;
      return scoreBar;
    }
  }]);
  return Score;
}();
var _default = exports.default = Score;
},{}],"js/Quiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Question = _interopRequireDefault(require("./Question.js"));
var _Score = _interopRequireDefault(require("./Score.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var submitQuizEvent = new CustomEvent("submit--quiz");
var Quiz = /*#__PURE__*/function () {
  function Quiz() {
    _classCallCheck(this, Quiz);
    _defineProperty(this, "questions", []);
  }
  _createClass(Quiz, [{
    key: "addQuestion",
    value: function addQuestion(question) {
      this.questions.push(question);
    }
  }, {
    key: "renderScore",
    value: function renderScore() {}
  }, {
    key: "generateMarkup",
    value: function generateMarkup() {
      var index = 0;
      var quiz = document.createElement("form");
      quiz.classList.add("quiz");
      this.questions.forEach(function (qst) {
        var _ref = _toConsumableArray(qst.generateMarkup(index)),
          questionMarkup = _ref[0],
          newIndex = _ref[1];
        index = newIndex;
        quiz.insertAdjacentElement("beforeend", questionMarkup);
      });
      var submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.innerText = "Odovzdat";
      submitButton.classList.add("submit--quiz");
      submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        var answersArr = _toConsumableArray(document.getElementsByClassName("answer"));
        console.log(answersArr);
        var ScoreCl = new _Score.default();
        answersArr.forEach(function (ans) {
          ans.dispatchEvent(submitQuizEvent);
        });
        if (document.getElementById("score--result")) document.getElementById("score--result").remove();
        quiz.insertAdjacentElement("beforeend", ScoreCl.generateEl(this.questions));
      });
      quiz.insertAdjacentElement("beforeend", submitButton);
      return quiz;
    }
  }]);
  return Quiz;
}();
var _default = exports.default = Quiz;
},{"./Question.js":"js/Question.js","./Score.js":"js/Score.js"}],"questions1.json":[function(require,module,exports) {
module.exports = {
  "question-list": [{
    "question": "Akým príkazom vytvoríme nový priečinok?",
    "answers": [["mkdir", true], "ls", "rm", "create directory", "cd", "ls -la"]
  }, {
    "question": "Akým príkazom zmením adresát?",
    "answers": ["mkdir", "ls", "rm", "create directory", ["cd", true], "ls -la"]
  }, {
    "question": "Ako vyzerá hlavná funkcia jazyka C?",
    "answers": [["int main(){\n    return 0;   \n}", true], "jazyk C nemá hlavnú funkciu", "public static void main(){}"]
  }, {
    "question": "Pomocou akej direktívy vytvoríme v jazyku C makro",
    "answers": [["#include", true], "#define", "#macro", ["#include", true]]
  }, {}]
};
},{}],"questions2.json":[function(require,module,exports) {
module.exports = {
  "question-list": [{
    "question": "Vyberte spávnu deklaráciu celočíselnej premennej",
    "answers": [["int age = 10;", true], "char age = '10';", "float age = 10.0", "age = 10;"]
  }, {
    "question": "V jazyku C sú znaky sú v pamäti reprezentované tiež ako čísla",
    "answers": ["Nepravda", ["Pravda", true]]
  }, {
    "question": "Ak chcem výpis premennej typu float formátovať na 2 desatinné miesta použijem zápis",
    "answers": [["%.2f", true], "%.2d", "%2.f"]
  }]
};
},{}],"questions3.json":[function(require,module,exports) {
module.exports = {
  "question-list": [{
    "question": "Vyberte správnu deklaráciu poľa",
    "answers": [["int array[5]", true], ["float data[10]", true], "int data[]", "data int[]"]
  }, {
    "question": "Polia sa indexuju od cisla",
    "answers": ["-1", "1", "2", ["0", true]]
  }, {
    "question": "Funkcia qsort() sa nachadza v kniznici",
    "answers": [["stdlib.h", true], "stdio.h", "arrays.h"]
  }, {
    "question": "Binary search mozem pouzit iba na usporiadanej mnozine",
    "answers": ["Nepravda", ["Pravda", true]]
  }, {}]
};
},{}],"js/ChangeContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _questions = _interopRequireDefault(require("../questions1.json"));
var _questions2 = _interopRequireDefault(require("../questions2.json"));
var _questions3 = _interopRequireDefault(require("../questions3.json"));
var _Question = _interopRequireDefault(require("./Question.js"));
var _Quiz = _interopRequireDefault(require("./Quiz.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // assert { type: "json" };
// assert { type: "json" };
// assert { type: "json" };
var makeQuiz = function makeQuiz(newQuestions) {
  var data;
  if (newQuestions === "1") {
    data = _questions.default;
  } else if (newQuestions === "2") {
    data = _questions2.default;
  } else {
    data = _questions3.default;
  }
  var questionsListArr = data["question-list"];
  var newQuiz = new _Quiz.default();
  var index = 1;
  questionsListArr.forEach(function (el) {
    if (!(el !== null && el !== void 0 && el.question)) return;
    var QuestionCl = new _Question.default(index);
    QuestionCl.setQuestion(el.question);
    QuestionCl.addMultipleAnswers(el.answers);
    newQuiz.addQuestion(QuestionCl);
    index++;
  });
  return newQuiz;
};
var changeContent = function changeContent(newQuestions) {
  var content = document.querySelector("main");
  _toConsumableArray(content.children).forEach(function (el) {
    return el.remove();
  });
  var courseDiv = document.createElement("div");
  courseDiv.classList.add("course--content");
  var courseHeader = document.createElement("h1");
  courseHeader.innerText = newQuestions + ". Kvíz";
  courseHeader.classList.add("section--name");
  courseDiv.insertAdjacentElement("beforeend", makeQuiz(newQuestions).generateMarkup());
  content.insertAdjacentElement("beforeend", courseHeader);
  content.insertAdjacentElement("beforeend", courseDiv);
};
var _default = exports.default = changeContent;
},{"../questions1.json":"questions1.json","../questions2.json":"questions2.json","../questions3.json":"questions3.json","./Question.js":"js/Question.js","./Quiz.js":"js/Quiz.js"}],"js/Dropdown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ChangeContent = _interopRequireDefault(require("./ChangeContent.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Dropdown = /*#__PURE__*/function () {
  function Dropdown(name, content) {
    _classCallCheck(this, Dropdown);
    _defineProperty(this, "_name", void 0);
    _defineProperty(this, "_content", void 0);
    this._name = name;
    this._content = content;
  }
  _createClass(Dropdown, [{
    key: "createDropdownEl",
    value: function createDropdownEl() {
      var listEl = document.createElement("li");
      var dropdown = document.createElement("a");
      dropdown.classList.add("dropdown");
      dropdown.innerText = this._name;
      var dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");
      this._content.forEach(function (option) {
        var optionEl = document.createElement("a");
        optionEl.innerText = option;
        optionEl.href = "#";
        var text = optionEl.innerText;
        if (text.includes("Kvíz")) {
          optionEl.addEventListener("click", function (e) {
            e.preventDefault();
            (0, _ChangeContent.default)(text.charAt(0));
          });
        }
        dropdownContent.insertAdjacentElement("beforeend", optionEl);
      });
      dropdown.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownContent.classList.toggle("showed");
      });
      listEl.insertAdjacentElement("beforeend", dropdown);
      listEl.insertAdjacentElement("beforeend", dropdownContent);
      return listEl;
    }
  }]);
  return Dropdown;
}();
var _default = exports.default = Dropdown;
/*
 <a class="dropdown" href="#">Kvízy</a>
            <div class="dropdown-content">
              <a href="#">Introduction</a>
              <a href="#">Algorithm properties</a>
              <a href="#">Recursion</a>
              <a href="#">Variables & I/O</a>
              <a href="#">Arrays</a>
              <a href="#">Strings</a>
              <a href="#">2D array</a>
              <a href="#">Curses & Command-line Args</a>
              <a href="#">Files</a>
            </div>

*/
},{"./ChangeContent.js":"js/ChangeContent.js"}],"js/Hamburger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function addHamburgerMenuHandler() {
  var hamburgerEl = document.getElementById("burger");
  hamburgerEl.addEventListener("click", function (event) {
    event.preventDefault();
    var navbarDropdownElArr = _toConsumableArray(document.getElementsByClassName("dropdown"));
    //const navbar = document.querySelector("nav");
    navbarDropdownElArr.forEach(function (el) {
      console.log(el.style);
      if (el.style.display === "block") {
        el.style.setProperty("display", "none");
        //navbar.style.setProperty("height", "auto");
      } else {
        el.style.setProperty("display", "block");
        //navbar.style.setProperty("height", "100%");
        //console.log(navbar);
      }
    });
  });
}
var _default = exports.default = addHamburgerMenuHandler;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Quiz = _interopRequireDefault(require("./js/Quiz.js"));
var _Question = _interopRequireDefault(require("./js/Question.js"));
var _Dropdown = _interopRequireDefault(require("./js/Dropdown.js"));
var _questions = _interopRequireDefault(require("./questions1.json"));
var _Hamburger = _interopRequireDefault(require("./js/Hamburger.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // assert { type: "json" };
var dropdownContainer = _toConsumableArray(document.getElementsByClassName("dropdown"));
var content = document.querySelector(".course--content");

//console.log(content);

var makeQuiz = function makeQuiz() {
  var questionsListArr = _questions.default["question-list"];
  var newQuiz = new _Quiz.default();
  var index = 1;
  questionsListArr.forEach(function (el) {
    if (!(el !== null && el !== void 0 && el.question)) return;
    var QuestionCl = new _Question.default(index);
    QuestionCl.setQuestion(el.question);
    QuestionCl.addMultipleAnswers(el.answers);
    newQuiz.addQuestion(QuestionCl);
    index++;
  });
  return newQuiz;
};
var handleDropdown = function handleDropdown(event) {
  event.preventDefault();
  var navbarContent = event.target.nextSibling.nextSibling;
  navbarContent.classList.toggle("showed");
};
{
  var dropdownArr = document.getElementById("dropdown-list");
  dropdownArr.insertAdjacentElement("beforeend", new _Dropdown.default("Prednášky", ["Introduction", "Algorithm Properties", "Recursion", "Variables & I/0"]).createDropdownEl());
  dropdownArr.insertAdjacentElement("beforeend", new _Dropdown.default("Cvičenia", ["First Steps with Shell", "First Steps with Karel the Robot", "Super Karel", "Super Karel rocks on"]).createDropdownEl());
  dropdownArr.insertAdjacentElement("beforeend", new _Dropdown.default("Zadania", ["Problem Set 0", "Problem Set 1", "Problem Set 2", "Problem Set 3", "Problem Set 4"]).createDropdownEl());
  dropdownArr.insertAdjacentElement("beforeend", new _Dropdown.default("Tutoriály a info", ["Docker", "Etický kódex", "Informácie k hodnoteniu"]).createDropdownEl());
  dropdownArr.insertAdjacentElement("beforeend", new _Dropdown.default("Kvízy", ["1. Kvíz", "2. Kvíz", "3. Kvíz"]).createDropdownEl());
  var QuizCl = makeQuiz();
  content.insertAdjacentElement("beforeend", QuizCl.generateMarkup());
  dropdownContainer.forEach(function (el) {
    el.addEventListener("submit", handleDropdown);
  });
  (0, _Hamburger.default)();
}
},{"./js/Quiz.js":"js/Quiz.js","./js/Question.js":"js/Question.js","./js/Dropdown.js":"js/Dropdown.js","./questions1.json":"questions1.json","./js/Hamburger.js":"js/Hamburger.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51084" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/zadanie3.e31bb0bc.js.map