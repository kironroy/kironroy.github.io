// https://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchExample = function (_React$Component) {
  _inherits(SearchExample, _React$Component);

  function SearchExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchExample.__proto__ || Object.getPrototypeOf(SearchExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = { searchString: '' }, _this.handleChange = function (e) {
      _this.setState({ searchString: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*  constructor(props) {
      super(props);
      // var self = this;
      this.handleChange = this.handleChange.bind(this);
    }*/


  _createClass(SearchExample, [{
    key: "render",
    value: function render() {
      var libraries = this.props.items,
          searchString = this.state.searchString.trim().toLowerCase();
      if (searchString.length > 0) {
        libraries = libraries.filter(function (i) {
          return i.name.toLowerCase().match(searchString);
        });
      }
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Type here..." }),
        React.createElement(
          "ul",
          null,
          libraries.map(function (i) {
            return React.createElement(
              "li",
              null,
              i.name,
              " ",
              React.createElement(
                "a",
                { href: i.url },
                i.url
              )
            );
          })
        )
      );
    }
  }]);

  return SearchExample;
}(React.Component);

// Constant, library


var libraries = [{ name: 'MUSE ', url: 'http://www.newsweek.com/2014/06/06/computer-programming-dying-art-252618.html' },
                 { name: 'JS Statements and expressions', url: 'http://2ality.com/2012/09/expressions-vs-statements.html' },
                 { name: 'functional JS', url: 'https://medium.freecodecamp.org/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276' },
                 { name: 'this.JS', url: 'https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/' },
                 { name: 'JS 2016', url: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f' },
                 { name: 'Haskell', url: 'http://learnyouahaskell.com/introduction#so-whats-haskell' },
                 { name: 'Programming Intro', url: 'http://guyhaas.com/bfoit/itp/Programming.html' },
                 { name: 'DOM intro', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' },
                 { name: 'Programming paradigms', url: 'http://people.cs.aau.dk/~normark/prog3-03/html/notes/paradigms_themes-paradigm-overview-section.html' },
                 { name: 'Underscore', url: 'https://documentcloud.github.io/underscore/' },
                 { name: 'Lodash', url: 'http://lodash.com/' },
                 { name: 'VueJS Nodejs Tutorial', url: 'https://appdividend.com/2017/08/04/vuejs-nodejs-tutorial/' }

                ];

// put input and display on page
React.render(React.createElement(SearchExample, { items: libraries }), document.getElementById('content'));
