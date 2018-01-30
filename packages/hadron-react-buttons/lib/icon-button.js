'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');

/**
 * The button constant.
 */
var BUTTON = 'button';

/**
 * Component for a button with an icon.
 */

var IconButton = function (_React$Component) {
  _inherits(IconButton, _React$Component);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: 'shouldComponentUpdate',


    /**
     * By default should not need to to re-render itself.
     *
     * @returns {Boolean} Always false.
     */
    value: function shouldComponentUpdate() {
      return false;
    }

    /**
     * Render the button.
     *
     * @returns {Component} The button component.
     */

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        {
          type: BUTTON,
          title: this.props.title,
          'data-test-id': this.props.dataTestId,
          className: this.props.className,
          onClick: this.props.clickHandler },
        React.createElement('i', { className: this.props.iconClassName, 'aria-hidden': true })
      );
    }
  }]);

  return IconButton;
}(React.Component);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string
};

module.exports = IconButton;