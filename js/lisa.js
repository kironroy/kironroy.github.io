var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var SearchExample = function (_React$Component) {_inherits(SearchExample, _React$Component);function SearchExample() {var _ref;var _temp, _this, _ret;_classCallCheck(this, SearchExample);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchExample.__proto__ || Object.getPrototypeOf(SearchExample)).call.apply(_ref, [this].concat(args))), _this), _this.





    state = { searchString: '' }, _this.
    handleChange = function (e) {
      _this.setState({ searchString: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);} /*  constructor(props) {
                                                             super(props);
                                                             // var self = this;
                                                             this.handleChange = this.handleChange.bind(this);
                                                           }*/_createClass(SearchExample, [{ key: "render", value: function render() {var libraries = this.props.items,searchString = this.state.searchString.trim().toLowerCase();if (searchString.length > 0) {
        libraries = libraries.filter(function (i) {
          return i.name.toLowerCase().match(searchString);
        });
      }
      return (
        React.createElement("div", { className: "row" },
          React.createElement("div", null,
            React.createElement("input", { type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Type here..." }),
            React.createElement("ul", null,
              libraries.map(function (i) {
                return React.createElement("li", null, i.name, " ", React.createElement("a", { href: i.url }, i.url));
              })))));




    } }]);return SearchExample;}(React.Component);


// Constant, library
var libraries = [

{ name: '7 seven Administrative Assistant Questions', url: 'https://www.indeed.com/hire/interview-questions/administrative-assistant' },
{ name: 'Assess administrative assistants', url: 'https://resources.workable.com/tutorial/administrative-assistant-skills-assessment-test' },

{ name: 'Indeed', url: 'https://www.indeed.com/' }];




// put input and display on page
React.render(
React.createElement(SearchExample, { items: libraries }),
document.getElementById('content'));