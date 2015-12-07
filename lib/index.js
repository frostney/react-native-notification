'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = _reactNative.Dimensions.get('window');

var Notification = (function (_Component) {
  _inherits(Notification, _Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).call(this, props));

    _this.state = {
      opacityValue: new _reactNative.Animated.Value(Notification.minOpacity)
    };
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.fadeIn();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible && !this.props.visible) {
        this.fadeIn();
      } else {
        if (!nextProps.visible && this.props.visible) {
          this.fadeOut();
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      /* if (this.props.message !== nextProps.message) {
        return true;
      }*/

      if (this.props.visible !== nextProps.visible) {
        return true;
      }

      if (this.state.opacityValue.__getValue() !== this.state.opacityValue.__getValue()) {
        return true;
      }

      return false;
    }
  }, {
    key: 'fadeIn',
    value: function fadeIn() {
      _reactNative.Animated.timing(this.state.opacityValue, {
        duration: Notification.fadeTime,
        toValue: Notification.maxOpacity
      }).start();
    }
  }, {
    key: 'fadeOut',
    value: function fadeOut() {
      _reactNative.Animated.timing(this.state.opacityValue, {
        duration: Notification.fadeTime,
        toValue: Notification.minOpacity
      }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var message = this.props.children;

      if (!message) {
        return null;
      }

      return _reactNative2.default.createElement(
        _reactNative.Animated.View,
        { style: [Notification.styles.container, { opacity: this.state.opacityValue }] },
        _reactNative2.default.createElement(
          Text,
          { style: Notification.styles.message },
          message
        )
      );
    }
  }]);

  return Notification;
})(_reactNative.Component);

Notification.propTypes = {
  children: _reactNative.PropTypes.node,
  visible: _reactNative.PropTypes.bool
};
Notification.defaultProps = {
  visible: true
};
Notification.fadeTime = 500;
Notification.minOpacity = 0.0;
Notification.maxOpacity = 0.9;
Notification.styles = {
  container: {
    position: 'absolute',
    top: Screen.height - 35 - 20,
    width: Screen.width - 80,
    left: 40,
    right: 40,
    backgroundColor: '#444',
    alignItems: 'center',
    padding: 6,
    opacity: Notification.minOpacity,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1
    }
  },
  message: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  }
};
exports.default = Notification;