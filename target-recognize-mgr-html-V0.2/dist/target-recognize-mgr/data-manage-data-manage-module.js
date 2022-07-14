(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-manage-data-manage-module"],{

/***/ "./node_modules/dragselect/dist/DragSelect.js":
/*!****************************************************!*\
  !*** ./node_modules/dragselect/dist/DragSelect.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/***

 ~~~ Version 2.3.1 ~~~

 ******************************************

    ____                   _____      __          __ 
   / __ \_________ _____ _/ ___/___  / /__  _____/ /_
  / / / / ___/ __ `/ __ `/\__ \/ _ \/ / _ \/ ___/ __/
 / /_/ / /  / /_/ / /_/ /___/ /  __/ /  __/ /__/ /_  
/_____/_/   \__,_/\__, //____/\___/_/\___/\___/\__/  
               /____/                              

 ******************************************
 
 {*} {*} STAR THIS PLUGIN ON GITHUB {*} {*}

 https://github.com/ThibaultJanBeyer/DragSelect
 Please give it a like, this is what makes me happy :-)
 Thank You

 {*} {*} STAR THIS PLUGIN ON GITHUB {*} {*}

 ******************************************
 ********* The MIT License (MIT) **********
 ******************************************
 Created 2017 by ThibaultJanBeyer
 web: http://www.thibaultjanbeyer.com/
 github: https://github.com/ThibaultJanBeyer/DragSelect

*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * The Settings to be passed to the Class
   * @typedef {Object} Settings
   * @property {HTMLElement|SVGElement|HTMLDocument} [area=document] area in which you can drag. If not provided it will be the whole document
   * @property {DSInputElements} [selectables=[]] the elements that can be selected
   * @property {number} [autoScrollSpeed=5] Speed in which the area scrolls while selecting (if available). Unit is pixel per movement.
   * @property {Vect2} [overflowTolerance={x:25,y:25}] Tolerance for autoScroll (how close one has to be near an edges for autoScroll to start)
   * @property {number} [zoom=1] Zoom scale factor (in case of using CSS style transform: scale() which messes with real positions). Unit scale zoom.
   * @property {boolean} [customStyles=false] if set to true, no styles (except for position absolute) will be applied by default
   * @property {boolean} [multiSelectMode=false] Add newly selected elements to the selection instead of replacing them
   * @property {boolean} [multiSelectToggling=true] Whether or not to toggle already active elements while multi-selecting
   * @property {DSMultiSelectKeys} [multiSelectKeys=['Control', 'Shift', 'Meta']] Keys that allows switching to the multi-select mode (see the multiSelectMode option). Any key value is possible ([see MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)). Note that the best support is given for <kbd>Control</kbd>, <kbd>Shift</kbd> and <kbd>Meta</kbd>. Provide an empty array `[]` if you want to turn off the functionality.
   * @property {HTMLElement} [selector=HTMLElement] the square that will draw the selection
   * @property {boolean} [draggability=true] When a user is dragging on an already selected element, the selection is dragged.
   * @property {boolean} [immediateDrag=true] Whether an element is draggable from the start or needs to be selected first
   * @property {boolean} [keyboardDrag=true] Whether or not the user can drag with the keyboard (we don't recommend disabling it)
   * @property {DSDragKeys} [dragKeys={up:['ArrowUp'],down:['ArrowDown'],left:['ArrowLeft'],righ:['ArrowRight']}] The keys available to drag element using the keyboard.
   * @property {number} [keyboardDragSpeed=10] The speed at which elements are dragged using the keyboard. In pixels per keydown.
   * @property {boolean} [useTransform=true] Whether to use hardware accelerated css transforms when dragging or top/left instead
   * @property {string} [hoverClass=ds-hover] the class assigned to the mouse hovered items
   * @property {string} [selectableClass=ds-selectable] the class assigned to the elements that can be selected
   * @property {string} [selectedClass=ds-selected] the class assigned to the selected items
   * @property {string} [selectorClass=ds-selector] the class assigned to the square selector helper
   * @property {string} [selectorAreaClass=ds-selector-area] the class assigned to the square in which the selector resides. By default it's invisible
   * @property {DSCallback} [callback] Deprecated: please use DragSelect.subscribe('callback', callback) instead
   * @property {DSCallback} [onDragMove] Deprecated: please use DragSelect.subscribe('onDragMove', onDragMove) instead
   * @property {DSCallback} [onDragStartBegin] Deprecated: please use DragSelect.subscribe('onDragStartBegin', onDragStartBegin) instead
   * @property {DSCallback} [onDragStart] Deprecated: please use DragSelect.subscribe('onDragStart', onDragStart) instead
   * @property {DSCallback} [onElementSelect] Deprecated: please use DragSelect.subscribe('onElementSelect', onElementSelect) instead
   * @property {DSCallback} [onElementUnselect] Deprecated: please use DragSelect.subscribe('onElementUnselect', onElementUnselect) instead
   */

  /**
   * The Object that is passed back to any callback method
   * @typedef {Object} CallbackObject
   * @property {Array<HTMLElement|SVGElement|any>} [items] The items currently selected
   * @property {MouseEvent|TouchEvent|KeyboardEvent|Event} [event] The respective event object
   * @property {HTMLElement|SVGElement|any} [item] The single item currently interacted with
   * @property {boolean} [isDragging] Whether the interaction is a drag or a select
   * @property {boolean} [isDraggingKeyboard] Whether or not the drag interaction is via keyboard
   * @property {string} [key] Pressed key (lowercase)
   * @property {Array.<'top'|'bottom'|'left'|'right'|undefined>} [scroll_directions]
   * @property {number} [scroll_multiplier]
   */

  /**
   * @typedef {function} DSCallback
   * @param {CallbackObject} data
   */

  /** @typedef {{x: number, y: number}} Vect2 */

  /** @typedef {{x:number,y:number,w:number,h:number,r:number,b:number}} DSElementPos */

  /** @typedef {Array.<'top'|'bottom'|'left'|'right'|undefined>} DSEdges */

  /** @typedef {HTMLElement|SVGElement|HTMLDocument} DSArea area within which you can drag */

  /** @typedef {HTMLElement} DSSelectorArea area in which you can drag */

  /** @typedef {Array.<HTMLElement|SVGElement> | HTMLElement | SVGElement} DSInputElements the elements that can be selected */

  /** @typedef {Array.<HTMLElement|SVGElement>} DSElements the elements that can be selected */

  /** @typedef {HTMLElement|SVGElement} DSElement a single element that can be selected */

  /** @typedef {MouseEvent|TouchEvent} DSEvent en event from a touch or mouse interaction */

  /** @typedef {Array.<'Shift'|'Control'|'Meta'|string>} DSMultiSelectKeys An array of keys that allows switching to the multi-select mode */

  /** @typedef {'dragmove'|'autoscroll'|'dragstart'|'elementselect'|'elementunselect'|'callback'} DSEventNames */

  /** @typedef {'Interaction:init'|'Interaction:start'|'Interaction:end'|'Interaction:update'|'Area:modified'|'Area:scroll'|'PointerStore:updated'|'Selected:added'|'Selected:removed'|'Selectable:click'|'Selectable:pointer'|'KeyStore:down'|'KeyStore:up'} DSInternalEventNames */

  /** @typedef {'Interaction:init:pre'|'Interaction:start:pre'|'Interaction:end:pre'|'Interaction:update:pre'|'Area:modified:pre'|'Area:scroll:pre'|'PointerStore:updated:pre'|'Selected:added:pre'|'Selected:removed:pre'|'Selectable:click:pre'|'Selectable:pointer:pre'|'KeyStore:down:pre'|'KeyStore:up:pre'} DSInternalEventNamesPre */

  /** @typedef {DSEventNames|DSInternalEventNames|DSInternalEventNamesPre} DSCallbackNames the name of the callback */

  /** @typedef {{top:number,left:number,bottom:number,right:number,width:number,height:number}} DSBoundingRect */

  /** @typedef {{up:string[],down:string[],left:string[],right:string[]}} DSDragKeys */

  /**
   * @callback DSModificationCallback
   * @param {*} event
   */

  // @ts-check
  /**
   * @param {Vect2} v1
   * @param {'+'|'-'|'*'|'/'} operator
   * @param {Vect2} v2
   * @return {Vect2}
   */

  var calc = function calc(_ref, operator, _ref2) {
    var x1 = _ref.x,
        y1 = _ref.y;
    var x2 = _ref2.x,
        y2 = _ref2.y;
    var calculations = {
      '+': {
        x: x1 + x2,
        y: y1 + y2
      },
      '-': {
        x: x1 - x2,
        y: y1 - y2
      },
      '*': {
        x: x1 * x2,
        y: y1 * y2
      },
      '/': {
        x: x1 / x2,
        y: y1 / y2
      }
    };
    return calculations[operator];
  };
  /**
   * @param {{left:number,top:number}} rect
   * @returns {Vect2}
   */

  var rect2vect = function rect2vect(rect) {
    return {
      x: rect.left,
      y: rect.top
    };
  };
  /**
   * @param {Vect2} vect
   * @param {number} dimension
   * @returns {DSBoundingRect}
   */

  var vect2rect = function vect2rect(vect) {
    var dimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      left: vect.x,
      top: vect.y,
      right: vect.x,
      bottom: vect.y,
      width: dimension,
      height: dimension
    };
  };
  /**
   * @param {number} n
   * @returns {Vect2}
   */

  var num2vect = function num2vect(n) {
    return {
      x: n,
      y: n
    };
  };

  // @ts-check
  /**
   * Adds event-listeners to the selectorArea
   * @param {DSArea[]} nodes
   * @param {DSModificationCallback} callback
   * @param {MutationObserver} modificationObserver
   */

  var addModificationObservers = (function (nodes, callback, modificationObserver) {
    window.addEventListener('resize', callback);
    window.addEventListener('scroll', callback);
    nodes.forEach(function (el, i) {
      modificationObserver.observe(el, {
        childList: i !== 0,
        attributes: true
      });
    });
  });

  // @ts-check
  /**
   * Checks whether the area can scroll or not
   * @param {DSArea} area
   * @return {boolean} scroll X/Y
   */

  var canScroll = (function (area) {
    var scroll = getCurrentScroll(area);
    if (scroll.x || scroll.y) return true;

    if (area instanceof HTMLDocument) {
      if (area.body) return !!(area.body.scrollTop = 1);else return !!(area.documentElement.scrollTop = 1);
    }

    return !!(area.scrollTop = 1);
  });

  // @ts-check
  /**
   * Creates the SelectorArea
   * @param {string} selectorAreaClass
   * @return {HTMLDivElement}
   */

  var createSelectorAreaElement = (function (selectorAreaClass) {
    var node = document.createElement('div');
    node.style.position = 'fixed';
    node.style.overflow = 'hidden';
    node.style.pointerEvents = 'none';
    node.style.zIndex = '999999999999999999';
    node.classList.add(selectorAreaClass);
    return node;
  });

  // @ts-check
  /**
   * Create the selector node
   * @param {boolean} customStyles
   * @return {HTMLElement}
   */

  var createSelectorElement = (function (customStyles) {
    var selector = document.createElement('div');
    selector.style.position = 'absolute';

    if (!customStyles) {
      selector.style.background = 'rgba(0, 0, 255, 0.1)';
      selector.style.border = '1px solid rgba(0, 0, 255, 0.45)';
      selector.style.display = 'none';
      selector.style.pointerEvents = 'none'; // fix for issue #8 (ie11+)
    }

    return selector;
  });

  // @ts-check
  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * `wait` milliseconds. All credits to [Trey Huffine]{@link https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086}
   * @param {*} func
   * @param {number} wait
   * @returns {DSModificationCallback}
   */

  var debounce = (function (func, wait) {
    var timeout; // This is the function that is returned and will be executed many times
    // We spread (...args) to capture any number of parameters we want to pass

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // The callback function to be executed after
      // the debounce time has elapsed
      var later = function later() {
        // null timeout to indicate the debounce ended
        timeout = null; // Execute the callback

        func.apply(void 0, args);
      }; // This will reset the waiting every function execution.
      // This is the step that prevents the function from
      // being executed because it will never reach the
      // inside of the previous setTimeout


      clearTimeout(timeout); // Restart the debounce waiting period.
      // setTimeout returns a truthy value (it differs in web vs Node)

      timeout = setTimeout(later, wait);
    };
  });

  // @ts-check
  var documentScroll = (function () {
    var _document$body, _document$documentEle, _document$body2, _document$documentEle2;

    return {
      y: ((_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.scrollTop) || ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) || 0,
      x: ((_document$body2 = document.body) === null || _document$body2 === void 0 ? void 0 : _document$body2.scrollLeft) || ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.scrollLeft) || 0
    };
  });

  // @ts-check
  /**
   * Returns the top/left/bottom/right/width/height
   * values of an area. If area is document then everything
   * except the sizes will be nulled.
   * @param {DSArea} area
   * @param {number} zoom
   * @returns {DSBoundingRect}
   */

  var getAreaRect = (function (area, zoom) {
    if (area instanceof Document) return {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
    var rect = area.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      width: (area.clientWidth || rect.width) * zoom,
      height: (area.clientHeight || rect.height) * zoom
    };
  });

  // @ts-check
  /**
   * @param {DSArea} [area]
   * @return {Vect2} scroll X/Y
   */

  var getCurrentScroll = (function (area) {
    if (!area || area instanceof Document) return documentScroll();
    return {
      x: area.scrollLeft >= 0 ? area.scrollLeft : documentScroll().x,
      y: area.scrollTop >= 0 ? area.scrollTop : documentScroll().y
    };
  });

  // @ts-check
  /**
   * Returns the edges that an element is overflowing
   * @param {Object} p
   * @param {DSBoundingRect} p.elementRect
   * @param {DSBoundingRect} p.containerRect
   * @param {Vect2} [p.tolerance]
   * @returns {DSEdges}
   */

  var getOverflowEdges = (function (_ref) {
    var elementRect = _ref.elementRect,
        containerRect = _ref.containerRect,
        _ref$tolerance = _ref.tolerance,
        tolerance = _ref$tolerance === void 0 ? {
      x: 0,
      y: 0
    } : _ref$tolerance;
    var edges = [];
    if (elementRect.top - tolerance.y < containerRect.top) edges.push('top');
    if (elementRect.left - tolerance.x < containerRect.left) edges.push('left');
    if (elementRect.bottom + tolerance.y > containerRect.bottom) edges.push('bottom');
    if (elementRect.right + tolerance.y > containerRect.right) edges.push('right');
    return (
      /** @type {DSEdges} */
      edges
    );
  });

  // @ts-check
  /**
   * Returns cursor x, y position based on event object
   * @param {Object} p
   * @param {MouseEvent|Touch} p.event
   * @return {Vect2} cursor X/Y position
   */

  var getPointerPos = (function (_ref) {
    var event = _ref.event;
    return {
      x: event.clientX,
      y: event.clientY
    };
  });

  // @ts-check
  /**
   * Reliably returns the exact x,y,w,h positions of the selector element
   * @param {{ scrollAmount:Vect2, initialPointerPos:Vect2, pointerPos:Vect2 }} p
   * @returns {{left:number,top:number,width:number,height:number}}
   */

  var getSelectorPosition = (function (_ref) {
    var scrollAmount = _ref.scrollAmount,
        initialPointerPos = _ref.initialPointerPos,
        pointerPos = _ref.pointerPos;

    /** check for direction
     *
     * This is quite complicated, so also quite complicated to explain. Lemme’ try:
     *
     * Problem #1:
     * Sadly in HTML we can not have negative sizes.
     * so if we want to scale our element 10px to the right then it is easy,
     * we just have to add +10px to the width. But if we want to scale the element
     * -10px to the left then things become more complicated, we have to move
     * the element -10px to the left on the x axis and also scale the element
     * by +10px width to fake a negative sizing.
     *
     * One solution to this problem is using css-transforms scale() with
     * transform-origin of top left. BUT we can’t use this since it will size
     * everything, then when your element has a border for example, the border will
     * get inanely huge. Also transforms are not widely supported in IE.
     *
     * Example #1:
     * Unfortunately, things get even more complicated when we are inside a scroll-able
     * DIV. Then, let’s say we scroll to the right by 10px and move the cursor right by 5px in our
     * checks we have to subtract 10px from the initialcursor position in our check
     * (since the initial position is moved to the left by 10px) so in our example:
     * 1. pointerPos.x (5) > initialPointerPos.x (0) - scrollAmount.x (10) === 5 > -10 === true
     * then set the x position to the cursors start position
     * selectorPos.x = initialPointerPos.x (0) - scrollAmount.x (10) === 10 // 2.
     * then we can calculate the elements width, which is
     * the new cursor position minus the initial one plus the scroll amount, so in our example:
     * 3. selectorPos.w = pointerPos.x (5) - initialPointerPos.x (0) + scrollAmount.x (10) === 15;
     *
     * let’s say after that movement we now scroll 20px to the left and move our cursor by 30px to the left:
     * 1b. pointerPos.x (-30) > initialPointerPos.x (0) - scrollAmount.x (-20) === -30 < --20 === -30 < +20 === false;
     * 2b. selectorPos.x = pointerPos.x (-30) === -30; move left position to cursor (for more info see Problem #1)
     * 3b. selectorPos.w = initialPointerPos.x (0) - pointerPos.x (-30) - scrollAmount.x (-20) === 0--30--20 === 0+30+20 === 50;  // scale width to original left position (for more info see Problem #1)
     *
     * same thing has to be done for top/bottom
     *
     * I hope that makes sense. Try stuff out and play around with variables to get a hang of it.
     */
    var selectorPos = {}; // right

    if (pointerPos.x > initialPointerPos.x - scrollAmount.x) {
      // 1.
      selectorPos.left = initialPointerPos.x - scrollAmount.x; // 2.

      selectorPos.width = pointerPos.x - initialPointerPos.x + scrollAmount.x; // 3.
      // left
    } else {
      // 1b.
      selectorPos.left = pointerPos.x; // 2b.

      selectorPos.width = initialPointerPos.x - pointerPos.x - scrollAmount.x; // 3b.
    } // bottom


    if (pointerPos.y > initialPointerPos.y - scrollAmount.y) {
      selectorPos.top = initialPointerPos.y - scrollAmount.y;
      selectorPos.height = pointerPos.y - initialPointerPos.y + scrollAmount.y; // top
    } else {
      selectorPos.top = pointerPos.y;
      selectorPos.height = initialPointerPos.y - pointerPos.y - scrollAmount.y;
    }

    return selectorPos;
  });

  // @ts-check
  /**
   * @param {DSElement} element
   * @return {Vect2}
   */

  var getComputedTranslatePositions = function getComputedTranslatePositions(element) {
    var position = {
      x: 0,
      y: 0
    };
    var computed = window.getComputedStyle(element);
    if (!computed.transform || computed.transform === 'none') return position;

    if (computed.transform.indexOf('3d') >= 0) {
      var match = computed.transform.trim().match(/matrix3d\((.*?)\)/);

      if (match && match.length) {
        var _match$;

        var values = (_match$ = match[1]) === null || _match$ === void 0 ? void 0 : _match$.split(',');
        position.x = parseInt(values[12]) || 0;
        position.y = parseInt(values[13]) || 0;
      }

      return position;
    } else {
      var _match = computed.transform.trim().match(/matrix\((.*?)\)/);

      if (_match && _match.length) {
        var _match$2;

        var _values = (_match$2 = _match[1]) === null || _match$2 === void 0 ? void 0 : _match$2.split(',');

        position.x = parseInt(_values[4]) || 0;
        position.y = parseInt(_values[5]) || 0;
      }

      return position;
    }
  };
  /**
   * @param {DSElement} element
   * @return {Vect2}
   */


  var getTranslatedPositions = function getTranslatedPositions(element) {
    var transform = element.style.transform;
    if (!transform || transform.indexOf('translate') < 0) return getComputedTranslatePositions(element);
    var position = {
      x: 0,
      y: 0
    };
    var match = transform.trim().match(/translate[3dD]*?\(.*?\)/);

    if (match) {
      var _match$3;

      var split = (_match$3 = match[0]) === null || _match$3 === void 0 ? void 0 : _match$3.split('(');

      if (split) {
        var _split$;

        var values = (_split$ = split[1]) === null || _split$ === void 0 ? void 0 : _split$.split(',');
        position.x = parseInt(values[0]) || 0;
        position.y = parseInt(values[1]) || 0;
      }
    }

    if (!position.x && !position.x) return getComputedTranslatePositions(element);
    return position;
  };
  /**
   * @param {DSElement} element
   * @return {Vect2}
   */


  var getTopLeftPosition = function getTopLeftPosition(element) {
    var style = element.style;
    var position = {
      x: parseInt(style.left) || 0,
      y: parseInt(style.top) || 0
    }; // initial positions

    if (!position.x && !position.x) {
      var computed = window.getComputedStyle(element);
      return {
        x: parseInt(computed.left) || 0,
        y: parseInt(computed.top) || 0
      };
    }

    return position;
  };
  /**
   * Returns the X and Y coordinates based on styles
   * Can handle translate and top/left
   * @param {DSElement} element
   * @param {boolean} [useTranslate]
   * @return {Vect2}
   */


  var getStylePosition = (function (element, useTranslate) {
    if (useTranslate) return getTranslatedPositions(element);else return getTopLeftPosition(element);
  });

  // @ts-check
  /**
   * pushes element back the overflow amount
   * (top - top gives overflow, then new position pushed back by overflow)
   * @param {Object} p
   * @param {DSElement} p.element
   * @param {DSEdges} p.edges
   * @param {DSBoundingRect} p.elementRect
   * @param {DSBoundingRect} p.containerRect
   * @param {Vect2} p.elementPos
   * @param {boolean} p.useTransform
   */

  var handleElementOverflow = (function (_ref) {
    var element = _ref.element,
        edges = _ref.edges,
        elementRect = _ref.elementRect,
        containerRect = _ref.containerRect,
        elementPos = _ref.elementPos,
        useTransform = _ref.useTransform;

    if (edges.includes('top')) {
      setStylePosition(element, {
        y: elementPos.y + containerRect.top - elementRect.top,
        x: elementPos.x
      }, useTransform);
    }

    if (edges.includes('left')) {
      setStylePosition(element, {
        y: elementPos.y,
        x: elementPos.x + containerRect.left - elementRect.left
      }, useTransform);
    }

    if (edges.includes('bottom')) {
      setStylePosition(element, {
        y: elementPos.y + containerRect.bottom - elementRect.bottom,
        x: elementPos.x
      }, useTransform);
    }

    if (edges.includes('right')) {
      setStylePosition(element, {
        y: elementPos.y,
        x: elementPos.x + containerRect.right - elementRect.right
      }, useTransform);
    }
  });

  // @ts-check
  /**
   * Fix: some elements have to have a special position attribute for calculations
   * @param {Object} p
   * @param {CSSStyleDeclaration} p.computedStyle
   * @param {DSArea} p.node
   */

  var handleElementPositionAttribute = (function (_ref) {
    var computedStyle = _ref.computedStyle,
        node = _ref.node;
    var position = computedStyle.position;
    var isPositioned = position === 'absolute' || position === 'relative' || position === 'fixed';
    if (!(node instanceof HTMLDocument) && !isPositioned) node.style.position = 'relative';
  });

  // @ts-check
  /**
   * @typedef {function} ScrollCallback
   * @property {Array.<'top'|'bottom'|'left'|'right'|undefined>} directions
   * @property {number} multiplier
   */

  /**
   * @param {Object} p
   * @param {string} p.key the keyboard key that was pressed
   * @param {boolean} p.shiftKey
   * @param {boolean} p.canScroll
   * @param {number} p.keyboardDragSpeed
   * @param {number} p.zoom
   * @param {ScrollCallback} p.scrollCallback
   * @param {Vect2} p.scrollDiff
   * @param {DSDragKeys} p.dragKeys
   * @returns {Vect2}
   */

  var handleKeyboardDragPosDifference = (function (_ref) {
    var shiftKey = _ref.shiftKey,
        keyboardDragSpeed = _ref.keyboardDragSpeed,
        zoom = _ref.zoom,
        key = _ref.key,
        dragKeys = _ref.dragKeys,
        scrollDiff = _ref.scrollDiff,
        canScroll = _ref.canScroll,
        scrollCallback = _ref.scrollCallback;
    var posDirection = {
      x: 0,
      y: 0
    };
    var increase = shiftKey ? keyboardDragSpeed * 4 * zoom : keyboardDragSpeed * zoom;

    if (dragKeys.left.includes(key)) {
      posDirection.x = scrollDiff.x || -increase;
      if (!shiftKey && !scrollDiff.x && canScroll) scrollCallback(['left'], keyboardDragSpeed);
    }

    if (dragKeys.right.includes(key)) {
      posDirection.x = scrollDiff.x || increase;
      if (!shiftKey && !scrollDiff.x && canScroll) scrollCallback(['right'], keyboardDragSpeed);
    }

    if (dragKeys.up.includes(key)) {
      posDirection.y = scrollDiff.y || -increase;
      if (!shiftKey && !scrollDiff.y && canScroll) scrollCallback(['top'], keyboardDragSpeed);
    }

    if (dragKeys.down.includes(key)) {
      posDirection.y = scrollDiff.y || increase;
      if (!shiftKey && !scrollDiff.y && canScroll) scrollCallback(['bottom'], keyboardDragSpeed);
    }

    return posDirection;
  });

  // @ts-check
  /**
   * Logic when an element is selected
   * @param {Object} p
   * @param {DSElement} p.element
   * @param {boolean} p.force
   * @param {boolean} p.multiSelectionToggle
   * @param {Set} p.SelectedSet
   * @param {string} p.hoverClassName
   */

  var handleSelection = (function (_ref) {
    var element = _ref.element,
        force = _ref.force,
        multiSelectionToggle = _ref.multiSelectionToggle,
        SelectedSet = _ref.SelectedSet,
        hoverClassName = _ref.hoverClassName;
    if (element.classList.contains(hoverClassName) && !force) return;
    if (!SelectedSet.has(element)) SelectedSet.add(element);else if (multiSelectionToggle) SelectedSet["delete"](element);
    element.classList.add(hoverClassName);
  });

  // @ts-check
  /**
   * Logic when an element is de-selected
   * @param {Object} p
   * @param {DSElement} p.element
   * @param {boolean} p.force
   * @param {Set} p.SelectedSet
   * @param {Set} p.PrevSelectedSet
   * @param {string} p.hoverClassName
   */

  var handleUnSelection = (function (_ref) {
    var element = _ref.element,
        force = _ref.force,
        SelectedSet = _ref.SelectedSet,
        PrevSelectedSet = _ref.PrevSelectedSet,
        hoverClassName = _ref.hoverClassName;
    if (!element.classList.contains(hoverClassName) && !force) return false;
    var inSelection = SelectedSet.has(element);
    var inPrevSelection = PrevSelectedSet.has(element);
    /**
     * Special for issue #9.
     * if a multi-select-key is pressed, ds 'remembers' the last selection and reverts
     * to that state if the selection is not kept, to mimic the natural OS behaviour
     * = if item was selected and is not in selection anymore, reselect it
     * = if item was not selected and is not in selection anymore, unselect it
     */

    if (inSelection && !inPrevSelection) SelectedSet["delete"](element);else if (!inSelection && inPrevSelection) SelectedSet.add(element);
    element.classList.remove(hoverClassName);
  });

  // @ts-check
  /**
   * Axis-Aligned Bounding Box Collision Detection.
   * Imagine following Example:
   *
   *
   *        b01
   *     a01[1]a02
   *        b02      b11
   *              a11[2]a12
   *                 b12
   *
   *
   * to check if those two boxes collide we do this AABB calculation:
   * 1. a01 < a12 (left border pos box1 smaller than right border pos box2)
   * 2. a02 > a11 (right border pos box1 larger than left border pos box2)
   * 3. b01 < b12 (top border pos box1 smaller than bottom border pos box2)
   * 4. b02 > b11 (bottom border pos box1 larger than top border pos box2)
   * {@link https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box Wikipedia}
   * {@link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection MDN}
   * @param {{left:number,right:number,top:number,bottom:number}} el1
   * @param {{left:number,right:number,top:number,bottom:number}} el2
   * @returns {boolean}
   */

  var isCollision = (function (el1, el2) {
    if (el1.left < el2.right && // 1.
    el1.right > el2.left && // 2.
    el1.top < el2.bottom && // 3.
    el1.bottom > el2.top // 4.
    ) return true; // collision detected!
    else return false;
  });

  // @ts-check
  /**
   * Moves the element in a posDirection
   * @param {Object} p
   * @param {DSElement} p.element
   * @param {Vect2} p.posDirection
   * @param {DSBoundingRect} p.containerRect
   * @param {boolean} p.useTransform
   */

  var moveElement = (function (_ref) {
    var element = _ref.element,
        posDirection = _ref.posDirection,
        containerRect = _ref.containerRect,
        useTransform = _ref.useTransform;
    var elementPos = getStylePosition(element, useTransform);
    var newPos = calc(elementPos, '+', posDirection);
    setStylePosition(element, newPos, useTransform);
    var elementRect = element.getBoundingClientRect();
    var edges = getOverflowEdges({
      elementRect: elementRect,
      containerRect: containerRect
    });
    handleElementOverflow({
      element: element,
      edges: edges,
      elementRect: elementRect,
      containerRect: containerRect,
      elementPos: newPos,
      useTransform: useTransform
    });
  });

  // @ts-check
  /**
   * Removes event-listeners to the selectorArea
   * @param {MutationObserver} modificationObserver
   * @param {DSModificationCallback} callback
   */

  var removeModificationObservers = (function (modificationObserver, callback) {
    window.removeEventListener('resize', callback);
    window.removeEventListener('scroll', callback);
    modificationObserver.disconnect();
  });

  // @ts-check
  /**
   * Scroll the element in the specified direction
   * @param {DSArea} element
   * @param {Array.<'top'|'bottom'|'left'|'right'|undefined>} directions
   * @param {number} multiplier
   */

  var scrollElement = (function (element, directions, multiplier) {
    if (!directions.length) return;
    var docEl = document && document.documentElement && document.documentElement.scrollTop && document.documentElement;

    var _element = element instanceof HTMLDocument ? docEl || document.body : element;

    var scrollTop = directions.includes('top') && _element.scrollTop > 0;

    var scrollBot = directions.includes('bottom') && _element.scrollTop < _element.scrollHeight;

    var scrollLeft = directions.includes('left') && _element.scrollLeft > 0;

    var scrollRight = directions.includes('right') && _element.scrollLeft < _element.scrollWidth;

    if (scrollTop) _element.scrollTop -= 1 * multiplier;
    if (scrollBot) _element.scrollTop += 1 * multiplier;
    if (scrollLeft) _element.scrollLeft -= 1 * multiplier;
    if (scrollRight) _element.scrollLeft += 1 * multiplier;
  });

  // @ts-check
  /**
   * Sets the style position to the X and Y coordinates
   * Can handle translate and top/left
   * @param {DSElement} element
   * @param {Vect2} values
   * @param {boolean} [useTranslate]
   * @return {DSElement}
   */

  var setStylePosition = (function (element, values, useTranslate) {
    if (useTranslate) {
      var prevTransform = element.style.transform;
      element.style.transform = "translate3d(".concat(values.x, "px,").concat(values.y, "px,1px) ").concat(prevTransform.replace(/translate.*?\)/g, ''));
    } else {
      element.style.left = "".concat(values.x, "px");
      element.style.top = "".concat(values.y, "px");
    }

    return element;
  });

  /**
   * @typedef {function} DSSubscribe
   * @param {DSCallbackNames} eventName
   * @param {DSCallback} callback
   * @returns {number} event id, can be used to unsubscribe more efficiently
   */

  /**
   * @typedef {function} DSPublish
   * @param {DSCallbackNames} eventName
   * @param {CallbackObject} data passed to the subscription method
   */

  /**
   * Maps internal events to external ones
   *
   * @param {Object} p
   * @param {DSSubscribe} p.subscribe
   * @param {DSPublish} p.publish
   * @param {Interaction} p.Interaction
   * @param {SelectedSet} p.SelectedSet
   */

  var subscriberAliases = (function (_ref) {
    var subscribe = _ref.subscribe,
        publish = _ref.publish,
        Interaction = _ref.Interaction,
        SelectedSet = _ref.SelectedSet;
    var mapping = {
      'Selected:added': [{
        name: 'elementselect'
      }],
      'Selected:removed': [{
        name: 'elementunselect'
      }],
      'Area:scroll': [{
        name: 'autoscroll'
      }],
      // scroll_directions, scroll_multiplier
      'Interaction:start': [{
        name: 'dragstart'
      }],
      // event, isDraggingKeyboard
      'Interaction:update': [{
        name: 'dragmove',
        condition: function condition(data) {
          return data.event;
        }
      }],
      // event, isDraggingKeyboard
      'Interaction:end': [{
        name: 'callback'
      }] // event, isDraggingKeyboard

    };

    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          sub_name = _Object$entries$_i[0],
          pubs = _Object$entries$_i[1];

      ['pre', false].forEach(function (filler) {
        return subscribe(filler ? "".concat(sub_name, ":").concat(filler) : sub_name, function (data) {
          return pubs.forEach(function (pub) {
            return (!pub.condition || pub.condition(data)) && publish(filler ? "".concat(filler).concat(pub.name) : pub.name, _objectSpread2({
              items: SelectedSet.elements,
              isDragging: Interaction.isDragging
            }, data));
          });
        });
      });
    };

    for (var _i = 0, _Object$entries = Object.entries(mapping); _i < _Object$entries.length; _i++) {
      _loop();
    }
  });

  /**
   * Transforms any list or single item to an array so user doesn’t have to care.
   * @param {DSInputElements} items a single item, a Node-list or any element group
   * @return {DSElements}
   */

  var toArray = (function (items) {
    if (!items) return [];
    if (!Array.isArray(items) && (items instanceof HTMLElement || items instanceof SVGElement)) return [items];
    return _toConsumableArray(items);
  });

  // @ts-check
  /**
   * Updates element style left, top, width, height values
   * according to pos input object.
   * @param {HTMLElement} element
   * @param {{left:number,top:number,width:number,height:number}} pos
   */

  var updateElementStylePos = (function (element, pos) {
    element.style.left = "".concat(pos.left, "px");
    element.style.top = "".concat(pos.top, "px");
    element.style.width = "".concat(pos.width, "px");
    element.style.height = "".concat(pos.height, "px");
  });

  /**
   * @typedef {Object} AreaProps
   * @property {DSArea} area
   * @property {PubSub} PS
   * @property {number} zoom
   */

  var Area = /*#__PURE__*/function () {
    /**
     * @type {DSModificationCallback}
     * @private
     */

    /**
     * @type {MutationObserver}
     * @private
     */

    /**
     * @type {number}
     * @private
     */

    /**
     * @type {DSArea}
     * @private
     */

    /**
     * @type {DSArea[]}
     * @private
     */

    /**
     * @type {CSSStyleDeclaration}
     * @private
     * */

    /**
     * @type {{top:number,bottom:number,left:number,right:number}}
     * @private
     * */

    /**
     * @type {DSBoundingRect}
     * @private
     * */

    /**
     * @constructor Area
     * @param {AreaProps} settings
     * @ignore
     */
    function Area(_ref) {
      var _this = this;

      var _area = _ref.area,
          PS = _ref.PS,
          zoom = _ref.zoom;

      _classCallCheck(this, Area);

      _defineProperty(this, "_modificationCallback", void 0);

      _defineProperty(this, "_modificationObserver", void 0);

      _defineProperty(this, "_zoom", void 0);

      _defineProperty(this, "_node", void 0);

      _defineProperty(this, "_parentNodes", void 0);

      _defineProperty(this, "_computedStyle", void 0);

      _defineProperty(this, "_computedBorder", void 0);

      _defineProperty(this, "_rect", void 0);

      _defineProperty(this, "setArea", function (area) {
        _this._node = area;
        handleElementPositionAttribute({
          computedStyle: _this.computedStyle,
          node: _this._node
        }); // first immediate debounce to update values after dom-update

        setTimeout(function () {
          _this.PubSub.publish('Area:modified:pre', {
            item: _this
          });

          _this.reset();

          _this.PubSub.publish('Area:modified', {
            item: _this
          });
        });
      });

      _defineProperty(this, "start", function () {
        addModificationObservers(_this.parentNodes, _this._modificationCallback, _this._modificationObserver);
      });

      _defineProperty(this, "reset", function () {
        _this._computedStyle = undefined;
        _this._rect = undefined;
        _this._computedBorder = undefined;
        _this._parentNodes = undefined;
      });

      _defineProperty(this, "stop", function () {
        removeModificationObservers(_this._modificationObserver, _this._modificationCallback);

        _this.reset();
      });

      _defineProperty(this, "scroll", function (directions, multiplier) {
        var data = {
          scroll_directions: directions,
          scroll_multiplier: multiplier
        };

        _this.PubSub.publish('Area:scroll:pre', data);

        scrollElement(_this._node, directions, multiplier);

        _this.PubSub.publish('Area:scroll', data);
      });

      this._zoom = zoom;
      this.PubSub = PS;
      this.setArea(_area);
      this._modificationCallback = debounce(function (event) {
        _this.PubSub.publish('Area:modified:pre', {
          event: event,
          item: _this
        });

        _this.reset();

        _this.PubSub.publish('Area:modified', {
          event: event,
          item: _this
        });
      }, 60);
      this._modificationObserver = new MutationObserver(this._modificationCallback);
      this.PubSub.subscribe('Interaction:init', this.start);
      this.PubSub.subscribe('Interaction:end', this.reset);
    }
    /** @param {DSArea} area */


    _createClass(Area, [{
      key: "HTMLNode",
      //////////////////////////////////////////////////////////////////////////////////////
      // Node Getters
      get: function get() {
        return (
          /** @type {DSArea} */
          this._node
        );
      }
      /**
       * The computed border from the element (caches result)
       * @type {{top:number,bottom:number,left:number,right:number}}
       */

    }, {
      key: "computedBorder",
      get: function get() {
        if (this._computedBorder) return this._computedBorder;
        return {
          top: parseInt(this.computedStyle.borderTopWidth),
          bottom: parseInt(this.computedStyle.borderBottomWidth),
          left: parseInt(this.computedStyle.borderLeftWidth),
          right: parseInt(this.computedStyle.borderRightWidth)
        };
      }
      /**
       * The computed styles from the element (caches result)
       * @type {CSSStyleDeclaration}
       */

    }, {
      key: "computedStyle",
      get: function get() {
        if (this._computedStyle) return this._computedStyle;
        if (this.HTMLNode instanceof HTMLDocument) return this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement);else return this._computedStyle = window.getComputedStyle(this.HTMLNode);
      }
      /**
       * The element rect (caches result) (without scrollbar or borders)
       * @type {DSBoundingRect}
       */

    }, {
      key: "rect",
      get: function get() {
        if (this._rect) return this._rect;
        return this._rect = getAreaRect(this.HTMLNode, this._zoom);
      }
    }, {
      key: "parentNodes",
      get: function get() {
        if (this._parentNodes) return this._parentNodes;

        var traverse = function traverse(toWatch) {
          var _toWatch$index;

          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var parent = (_toWatch$index = toWatch[index]) === null || _toWatch$index === void 0 ? void 0 : _toWatch$index.parentNode;

          if (parent) {
            toWatch.push(parent);
            index++;
            return traverse(toWatch, index);
          } else {
            return toWatch;
          }
        };

        this._parentNodes = traverse([this.HTMLNode]);
        return this._parentNodes;
      }
    }]);

    return Area;
  }();

  var Drag = /*#__PURE__*/function () {
    /**
     * @type {boolean}
     * @private
     */

    /**
     * @type {Vect2}
     * @private
     */

    /**
     * @type {Vect2}
     * @private
     */

    /**
     * @type {DSElements}
     * @private
     */

    /**
     * @type {boolean}
     * @private
     */

    /**
     * @type {DSDragKeys}
     * @private
     */

    /**
     * @type {string[]}
     * @private
     */

    /**
     * @type {boolean}
     * @private
     */

    /**
     * @type {number}
     * @private
     */

    /**
     * @type {number}
     * @private
     */

    /**
     * @param {Object} p
     * @param {DragSelect} p.DS
     * @param {boolean} p.draggability
     * @param {boolean} p.useTransform
     * @param {DSDragKeys} p.dragKeys
     * @param {boolean} p.keyboardDrag
     * @param {number} p.keyboardDragSpeed
     * @param {number} p.zoom
     * @ignore
     */
    function Drag(_ref) {
      var _this = this;

      var DS = _ref.DS,
          dragKeys = _ref.dragKeys,
          draggability = _ref.draggability,
          keyboardDrag = _ref.keyboardDrag,
          keyboardDragSpeed = _ref.keyboardDragSpeed,
          useTransform = _ref.useTransform,
          zoom = _ref.zoom;

      _classCallCheck(this, Drag);

      _defineProperty(this, "_useTransform", void 0);

      _defineProperty(this, "_prevCursorPos", void 0);

      _defineProperty(this, "_prevScrollPos", void 0);

      _defineProperty(this, "_elements", []);

      _defineProperty(this, "_draggability", void 0);

      _defineProperty(this, "_dragKeys", void 0);

      _defineProperty(this, "_dragKeysFlat", void 0);

      _defineProperty(this, "_keyboardDrag", void 0);

      _defineProperty(this, "_keyboardDragSpeed", void 0);

      _defineProperty(this, "_zoom", void 0);

      _defineProperty(this, "keyboardDrag", function (_ref2) {
        var event = _ref2.event,
            key = _ref2.key;
        if (!_this._keyboardDrag || !_this._dragKeysFlat.includes(key) || !_this.DS.SelectedSet.size || !_this._draggability || _this.DS["continue"]) return;
        var publishData = {
          event: event,
          isDragging: true,
          isDraggingKeyboard: true
        };

        _this.DS.publish(['Interaction:start:pre', 'Interaction:start'], publishData);

        _this._elements = _this.DS.getSelection();

        _this.handleZIndex(true);

        var posDirection = handleKeyboardDragPosDifference({
          shiftKey: _this.DS.stores.KeyStore.currentValues.includes('shift'),
          keyboardDragSpeed: _this._keyboardDragSpeed,
          zoom: _this._zoom,
          key: key,
          scrollCallback: _this.DS.Area.scroll,
          scrollDiff: _this._scrollDiff,
          canScroll: _this.DS.stores.ScrollStore.canScroll,
          dragKeys: _this._dragKeys
        });

        _this._elements.forEach(function (element) {
          return moveElement({
            element: element,
            posDirection: posDirection,
            containerRect: _this.DS.SelectorArea.rect,
            useTransform: _this._useTransform
          });
        });

        _this.DS.publish(['Interaction:update:pre', 'Interaction:update'], publishData);
      });

      _defineProperty(this, "keyboardEnd", function (_ref3) {
        var event = _ref3.event,
            key = _ref3.key;
        if (!_this._keyboardDrag || !_this._dragKeysFlat.includes(key) || !_this.DS.SelectedSet.size || !_this._draggability) return;
        var publishData = {
          event: event,
          isDragging: _this._draggability,
          isDraggingKeyboard: true
        };

        _this.DS.publish(['Interaction:end:pre', 'Interaction:end'], publishData);
      });

      _defineProperty(this, "start", function (_ref4) {
        var isDragging = _ref4.isDragging,
            isDraggingKeyboard = _ref4.isDraggingKeyboard;
        if (!isDragging || isDraggingKeyboard) return;
        _this._prevCursorPos = null;
        _this._prevScrollPos = null;
        _this._elements = _this.DS.getSelection();

        _this.handleZIndex(true);
      });

      _defineProperty(this, "stop", function (evt) {
        if (evt !== null && evt !== void 0 && evt.isKeyboard) return;
        _this._prevCursorPos = null;
        _this._prevScrollPos = null;

        _this.handleZIndex(false);

        _this._elements = [];
      });

      _defineProperty(this, "update", function (_ref5) {
        var isDragging = _ref5.isDragging,
            isDraggingKeyboard = _ref5.isDraggingKeyboard;
        if (!isDragging || !_this._elements.length || isDraggingKeyboard || _this.DS["continue"]) return;
        var posDirection = calc(_this._cursorDiff, '+', _this._scrollDiff);

        _this._elements.forEach(function (element) {
          return moveElement({
            element: element,
            posDirection: posDirection,
            containerRect: _this.DS.SelectorArea.rect,
            useTransform: _this._useTransform
          });
        });
      });

      _defineProperty(this, "handleZIndex", function (add) {
        _this._elements.forEach(function (element) {
          return element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) + add ? 9999 : -9998);
        });
      });

      this.DS = DS;
      this._useTransform = useTransform;
      this._keyboardDragSpeed = keyboardDragSpeed;
      this._keyboardDrag = keyboardDrag;
      this._zoom = zoom;
      this._draggability = draggability;
      this._dragKeys = {
        up: dragKeys.up.map(function (k) {
          return k.toLowerCase();
        }),
        down: dragKeys.down.map(function (k) {
          return k.toLowerCase();
        }),
        left: dragKeys.left.map(function (k) {
          return k.toLowerCase();
        }),
        right: dragKeys.right.map(function (k) {
          return k.toLowerCase();
        })
      };
      this._dragKeysFlat = [].concat(_toConsumableArray(this._dragKeys.up), _toConsumableArray(this._dragKeys.down), _toConsumableArray(this._dragKeys.left), _toConsumableArray(this._dragKeys.right));
      this.DS.subscribe('Interaction:start', this.start);
      this.DS.subscribe('Interaction:end', this.stop);
      this.DS.subscribe('Interaction:update', this.update);
      this.DS.subscribe('KeyStore:down', this.keyboardDrag);
      this.DS.subscribe('KeyStore:up', this.keyboardEnd);
    }

    _createClass(Drag, [{
      key: "_cursorDiff",
      get: function get() {
        var currentPointerVal = this.DS.stores.PointerStore.currentVal;
        var cursorDiff = this._prevCursorPos ? calc(currentPointerVal, '-', this._prevCursorPos) : {
          x: 0,
          y: 0
        };
        this._prevCursorPos = currentPointerVal;
        return cursorDiff;
      }
    }, {
      key: "_scrollDiff",
      get: function get() {
        var currentScrollVal = this.DS.stores.ScrollStore.currentVal;
        var scrollDiff = this._prevScrollPos ? calc(currentScrollVal, '-', this._prevScrollPos) : {
          x: 0,
          y: 0
        };
        this._prevScrollPos = currentScrollVal;
        return scrollDiff;
      }
    }]);

    return Drag;
  }();

  var Interaction = /*#__PURE__*/function () {
    /**
     * @type {DSArea}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /** @type {boolean} */

    /** @type {boolean} */

    /**
     * @constructor Interaction
     * @param {Object} obj
     * @param {DragSelect} obj.DS
     * @param {DSArea} obj.areaElement
     * @param {boolean} obj.draggability
     * @param {boolean} obj.immediateDrag
     * @param {string} obj.selectableClass
     * @ignore
     */
    function Interaction(_ref) {
      var _this = this;

      var DS = _ref.DS,
          areaElement = _ref.areaElement,
          draggability = _ref.draggability,
          immediateDrag = _ref.immediateDrag,
          selectableClass = _ref.selectableClass;

      _classCallCheck(this, Interaction);

      _defineProperty(this, "_areaElement", void 0);

      _defineProperty(this, "_draggability", void 0);

      _defineProperty(this, "_immediateDrag", void 0);

      _defineProperty(this, "_selectableClass", void 0);

      _defineProperty(this, "isInteracting", void 0);

      _defineProperty(this, "isDragging", void 0);

      _defineProperty(this, "init", function () {
        return _this.DS.publish('Interaction:init:pre', {});
      });

      _defineProperty(this, "_init", function () {
        _this.stop();

        _this._areaElement.addEventListener('mousedown', _this.start);

        _this._areaElement.addEventListener('touchstart', _this.start, {
          passive: false
        });

        _this.DS.publish('Interaction:init', {});
      });

      _defineProperty(this, "start", function (event) {
        return _this.DS.publish('Interaction:start:pre', {
          event: event,
          isDragging: _this.isDragging
        });
      });

      _defineProperty(this, "_start", function (event) {
        if (event.type === 'touchstart') event.preventDefault(); // Call preventDefault() to prevent double click issue, see https://github.com/ThibaultJanBeyer/DragSelect/pull/29 & https://developer.mozilla.org/vi/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent

        if (!_this._canInteract(event)) return;
        _this.isInteracting = true;
        _this.isDragging = _this.isDragEvent(event);

        _this.DS.publish('Interaction:start', {
          event: event,
          isDragging: _this.isDragging
        });

        document.addEventListener('mouseup', _this.reset);
        document.addEventListener('touchend', _this.reset);
      });

      _defineProperty(this, "isDragEvent", function (event) {
        var clickedElement =
        /** @type {Element} */
        event.target.closest(".".concat(_this._selectableClass));
        if (!_this._draggability || _this.DS.stores.KeyStore.isMultiSelectKeyPressed(event) || !clickedElement) return false;

        if (_this._immediateDrag) {
          if (!_this.DS.SelectedSet.size) _this.DS.SelectedSet.add(
          /** @type {DSElement} */
          clickedElement);else if (!_this.DS.SelectedSet.has(clickedElement)) {
            _this.DS.SelectedSet.clear();

            _this.DS.SelectedSet.add(
            /** @type {DSElement} */
            clickedElement);
          }
        }

        if (_this.DS.SelectedSet.has(clickedElement)) return true;
        return false;
      });

      _defineProperty(this, "onClick", function (_ref2) {
        var event = _ref2.event;
        if (!_this._canInteract(event)) return;
        if (event.detail > 0) return; // mouse interaction

        var _this$DS = _this.DS,
            _this$DS$stores = _this$DS.stores,
            PointerStore = _this$DS$stores.PointerStore,
            KeyStore = _this$DS$stores.KeyStore,
            SelectableSet = _this$DS.SelectableSet,
            SelectedSet = _this$DS.SelectedSet;
        PointerStore.start(event);
        var node =
        /** @type {any} */
        event.target;
        if (!SelectableSet.has(node)) return;
        if (!KeyStore.isMultiSelectKeyPressed(event)) SelectedSet.clear();
        SelectedSet.toggle(node);

        _this.reset(); // simulate mouse-up (that does not exist on keyboard)

      });

      _defineProperty(this, "stop", function () {
        _this.isInteracting = false;
        _this.isDragging = false;

        _this._areaElement.removeEventListener('mousedown', _this.start);

        _this._areaElement.removeEventListener('touchstart', _this.start, {
          // @ts-ignore
          passive: false
        });

        document.removeEventListener('mouseup', _this.reset);
        document.removeEventListener('touchend', _this.reset);
      });

      _defineProperty(this, "update", function (_ref3) {
        var event = _ref3.event,
            scroll_directions = _ref3.scroll_directions,
            scroll_multiplier = _ref3.scroll_multiplier;
        if (_this.isInteracting) _this.DS.publish(['Interaction:update:pre', 'Interaction:update'], {
          event: event,
          scroll_directions: scroll_directions,
          scroll_multiplier: scroll_multiplier,
          isDragging: _this.isDragging
        });
      });

      _defineProperty(this, "reset", function (event) {
        return _this.DS.publish('Interaction:end:pre', {
          event: event,
          isDragging: _this.isDragging
        });
      });

      _defineProperty(this, "_reset", function (event) {
        var isDragging = _this.isDragging;

        _this.stop();

        _this.init();

        _this.DS.publish('Interaction:end', {
          event: event,
          isDragging: isDragging
        });
      });

      this._areaElement = areaElement;
      this._draggability = draggability;
      this._immediateDrag = immediateDrag;
      this._selectableClass = selectableClass;
      this.DS = DS;
      this.DS.subscribe('PointerStore:updated', this.update);
      this.DS.subscribe('Selectable:click', this.onClick);
      this.DS.subscribe('Selectable:pointer', function (_ref4) {
        var event = _ref4.event;
        return _this.start(event);
      });
      this.DS.subscribe('Interaction:start:pre', function (_ref5) {
        var event = _ref5.event;
        return _this._start(event);
      });
      this.DS.subscribe('Interaction:init:pre', this._init);
      this.DS.subscribe('Interaction:end:pre', function (_ref6) {
        var event = _ref6.event;
        return _this._reset(event);
      });
      this.DS.subscribe('Area:scroll', this.update);
    }

    _createClass(Interaction, [{
      key: "_canInteract",

      /**
       * @param {DSEvent} event
       */
      value: function _canInteract(event) {
        var isKeyboardClick =
        /** @type {MouseEvent} */
        event.clientX === 0 &&
        /** @type {MouseEvent} */
        event.clientY === 0 &&
        /** @type {MouseEvent} */
        event.detail === 0 && event.target;
        if (
        /** @type {MouseEvent} */
        event.button === 2 || // right-clicks
        this.isInteracting || // fix double-click issues
        event.target && !this.DS.SelectorArea.isInside(
        /** @type {DSElement} */
        event.target) || //fix outside elements issue
        !isKeyboardClick && !this.DS.SelectorArea.isClicked(event) // make sure the mouse click is inside the area
        ) return false;
        return true;
      }
      /**
       * @param {DSEvent} event
       */

    }]);

    return Interaction;
  }();

  var PubSub = function PubSub(_ref) {
    var _this = this;

    var DS = _ref.DS;

    _classCallCheck(this, PubSub);

    _defineProperty(this, "subscribers", {});

    _defineProperty(this, "subscribe", function (eventName, callback) {
      if (!Array.isArray(_this.subscribers[eventName])) _this.subscribers[eventName] = [];

      _this.subscribers[eventName].push(callback);

      return _this.subscribers[eventName].length - 1;
    });

    _defineProperty(this, "unsubscribe", function (eventName, callback, id) {
      if (id >= 0) _this.subscribers[eventName].splice(id, 1);else if (callback) _this.subscribers[eventName] = _this.subscribers[eventName].filter(function (cb) {
        return cb !== callback;
      });
    });

    _defineProperty(this, "publish", function (eventName, data) {
      if (Array.isArray(eventName)) eventName.forEach(function (name) {
        return _this._publish(name, data);
      });else _this._publish(eventName, data);
    });

    _defineProperty(this, "_publish", function (eventName, data) {
      var subscribers = _this.subscribers[eventName];
      if (!Array.isArray(subscribers)) return;
      if (eventName.includes(":pre")) _this._handlePrePublish(subscribers, data);else _this._handlePublish(subscribers, data);
    });

    _defineProperty(this, "_handlePublish", function (subscribers, data) {
      for (var i = 0, il = subscribers.length; i < il; i++) {
        if (_this.DS.stopped) return;
        subscribers[i](data);
      }
    });

    _defineProperty(this, "_handlePrePublish", function (subscribers, data) {
      var i = subscribers.length;

      while (i--) {
        if (_this.DS.stopped) return;
        subscribers[i](data);
      }
    });

    this.DS = DS;
  }
  /**
   * Subscribe to an event
   * @memberof DragSelect#
   * @function subscribe
   * @param {DSCallbackNames} eventName
   * @param {DSCallback} callback
   * @returns {number} event id, can be used to unsubscribe more efficiently
   */
  ;

  var SelectableSet = /*#__PURE__*/function (_Set) {
    _inherits(SelectableSet, _Set);

    var _super = _createSuper(SelectableSet);

    /**
     * @type {DSElements}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @constructor SelectableSet
     * @param {Object} p
     * @param {DSInputElements} p.elements
     * @param {DragSelect} p.DS
     * @param {string} p.className
     * @param {string} p.hoverClassName
     * @param {boolean} p.useTransform
     * @param {boolean} p.draggability
     * @ignore
     */
    function SelectableSet(_ref) {
      var _this;

      var _elements = _ref.elements,
          className = _ref.className,
          hoverClassName = _ref.hoverClassName,
          draggability = _ref.draggability,
          useTransform = _ref.useTransform,
          DS = _ref.DS;

      _classCallCheck(this, SelectableSet);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "_initElements", void 0);

      _defineProperty(_assertThisInitialized(_this), "_className", void 0);

      _defineProperty(_assertThisInitialized(_this), "_hoverClassName", void 0);

      _defineProperty(_assertThisInitialized(_this), "_useTransform", void 0);

      _defineProperty(_assertThisInitialized(_this), "_draggability", void 0);

      _defineProperty(_assertThisInitialized(_this), "init", function () {
        return _this._initElements.forEach(function (el) {
          return _this.add(el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "clear", function () {
        return _this.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "_onClick", function (event) {
        return _this.DS.publish(['Selectable:click:pre', 'Selectable:click'], {
          event: event
        });
      });

      _defineProperty(_assertThisInitialized(_this), "_onPointer", function (event) {
        return _this.DS.publish(['Selectable:pointer:pre', 'Selectable:pointer'], {
          event: event
        });
      });

      _defineProperty(_assertThisInitialized(_this), "addAll", function (elements) {
        return elements.forEach(function (el) {
          return _this.add(el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "deleteAll", function (elements) {
        return elements.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _this.DS = DS;
      _this._initElements = toArray(_elements);
      _this._className = className;
      _this._hoverClassName = hoverClassName;
      _this._useTransform = useTransform;
      _this._draggability = draggability;

      _this.DS.subscribe('Interaction:init', _this.init);

      return _this;
    }

    _createClass(SelectableSet, [{
      key: "add",

      /** @param {DSElement} element */
      value: function add(element) {
        element.classList.add(this._className);
        element.addEventListener('click', this._onClick);
        element.addEventListener('mousedown', this._onPointer);
        element.addEventListener('touchstart', this._onPointer, {
          // @ts-ignore
          passive: false
        });
        if (this._draggability && !this._useTransform) handleElementPositionAttribute({
          computedStyle: window.getComputedStyle(element),
          node: element
        });
        return _get(_getPrototypeOf(SelectableSet.prototype), "add", this).call(this, element);
      }
      /** @param {DSElement} element */

    }, {
      key: "delete",
      value: function _delete(element) {
        element.classList.remove(this._className);
        element.classList.remove(this._hoverClassName);
        element.removeEventListener('click', this._onClick);
        element.removeEventListener('mousedown', this._onPointer);
        element.removeEventListener('touchstart', this._onPointer, {
          // @ts-ignore
          passive: false
        });
        return _get(_getPrototypeOf(SelectableSet.prototype), "delete", this).call(this, element);
      }
    }, {
      key: "elements",

      /** @return {DSElements} */
      get: function get() {
        return Array.from(this.values());
      }
    }]);

    return SelectableSet;
  }( /*#__PURE__*/_wrapNativeSuper(Set));

  var SelectedSet = /*#__PURE__*/function (_Set) {
    _inherits(SelectedSet, _Set);

    var _super = _createSuper(SelectedSet);

    /**
     * @type {string}
     * @private
     * */

    /**
     * @constructor SelectableSet
     * @param {Object} p
     * @param {DragSelect} p.DS
     * @param {string} p.className
     * @ignore
     */
    function SelectedSet(_ref) {
      var _this;

      var className = _ref.className,
          DS = _ref.DS;

      _classCallCheck(this, SelectedSet);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "_className", void 0);

      _defineProperty(_assertThisInitialized(_this), "clear", function () {
        return _this.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "addAll", function (elements) {
        return elements.forEach(function (el) {
          return _this.add(el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "deleteAll", function (elements) {
        return elements.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _this.DS = DS;
      _this._className = className;
      return _this;
    }
    /** @param {DSElement} element */


    _createClass(SelectedSet, [{
      key: "add",
      value: function add(element) {
        if (_get(_getPrototypeOf(SelectedSet.prototype), "has", this).call(this, element)) return;
        var publishData = {
          items: this.elements,
          item: element
        };
        this.DS.publish('Selected:added:pre', publishData);

        _get(_getPrototypeOf(SelectedSet.prototype), "add", this).call(this, element);

        element.classList.add(this._className);
        element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) + 1);
        this.DS.publish('Selected:added', publishData);
        return this;
      }
      /** @param {DSElement} element */

    }, {
      key: "delete",
      value: function _delete(element) {
        if (!_get(_getPrototypeOf(SelectedSet.prototype), "has", this).call(this, element)) return;
        var publishData = {
          items: this.elements,
          item: element
        };
        this.DS.publish('Selected:removed:pre', publishData);

        var deleted = _get(_getPrototypeOf(SelectedSet.prototype), "delete", this).call(this, element);

        element.classList.remove(this._className);
        element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) - 1);
        this.DS.publish('Selected:removed', publishData);
        return deleted;
      }
    }, {
      key: "toggle",

      /**
       * Adds/Removes an element. If it is already selected = remove, if not = add.
       * @param {DSElement} element
       * @return {DSElement}
       */
      value: function toggle(element) {
        if (this.has(element)) this["delete"](element);else this.add(element);
        return element;
      }
      /** @param {DSElements} elements */

    }, {
      key: "elements",

      /** @return {DSElements} */
      get: function get() {
        return Array.from(this.values());
      }
    }]);

    return SelectedSet;
  }( /*#__PURE__*/_wrapNativeSuper(Set));

  var Selection = /*#__PURE__*/function () {
    /**
     * @type {Set}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @constructor Selection
     * @param {{ DS:DragSelect, hoverClassName:string, multiSelectToggling:boolean }} p
     * @ignore
     */
    function Selection(_ref) {
      var _this = this;

      var DS = _ref.DS,
          hoverClassName = _ref.hoverClassName,
          multiSelectToggling = _ref.multiSelectToggling;

      _classCallCheck(this, Selection);

      _defineProperty(this, "_prevSelectedSet", void 0);

      _defineProperty(this, "_hoverClassName", void 0);

      _defineProperty(this, "_multiSelectToggling", void 0);

      _defineProperty(this, "start", function (_ref2) {
        var event = _ref2.event,
            isDragging = _ref2.isDragging;
        if (isDragging) return;

        _this._storePrevious(event);

        _this._handleInsideSelection(true, event);
      });

      _defineProperty(this, "update", function (_ref3) {
        var isDragging = _ref3.isDragging;
        if (isDragging || _this.DS["continue"]) return;

        _this._handleInsideSelection();
      });

      _defineProperty(this, "_handleInsideSelection", function (force, event) {
        var _this$DS = _this.DS,
            SelectableSet = _this$DS.SelectableSet,
            SelectorArea = _this$DS.SelectorArea,
            Selector = _this$DS.Selector;
        /** @type {any} */

        var elPosCombo = SelectableSet.elements.map(function (element) {
          return [element, element.getBoundingClientRect()];
        });
        var select = [];
        var unselect = [];

        for (var i = 0, il = elPosCombo.length; i < il; i++) {
          if (!SelectorArea.isInside(elPosCombo[i][0], elPosCombo[i][1])) continue;
          if (isCollision(elPosCombo[i][1], Selector.rect)) select.push(elPosCombo[i][0]);else unselect.push(elPosCombo[i][0]);
        }

        var multiSelectionToggle = _this.DS.stores.KeyStore.isMultiSelectKeyPressed(event) && _this._multiSelectToggling;

        if (_this.DS["continue"]) return;
        select.forEach(function (element) {
          return handleSelection({
            element: element,
            force: force,
            multiSelectionToggle: multiSelectionToggle,
            SelectedSet: _this.DS.SelectedSet,
            hoverClassName: _this._hoverClassName
          });
        });
        unselect.forEach(function (element) {
          return handleUnSelection({
            element: element,
            force: force,
            SelectedSet: _this.DS.SelectedSet,
            hoverClassName: _this._hoverClassName,
            PrevSelectedSet: _this._prevSelectedSet
          });
        });
      });

      this._hoverClassName = hoverClassName;
      this._multiSelectToggling = multiSelectToggling;
      this.DS = DS;
      this.DS.subscribe('Interaction:start', this.start);
      this.DS.subscribe('Interaction:update', this.update);
    }
    /**
     * Stores the previous selection (solves #9)
     * @param {DSEvent} event
     * @private
     * */


    _createClass(Selection, [{
      key: "_storePrevious",
      value: function _storePrevious(event) {
        var _this$DS2 = this.DS,
            KeyStore = _this$DS2.stores.KeyStore,
            SelectedSet = _this$DS2.SelectedSet;
        if (KeyStore.isMultiSelectKeyPressed(event)) this._prevSelectedSet = new Set(SelectedSet);else this._prevSelectedSet = new Set();
      }
      /** @param {{event:DSEvent,isDragging:boolean}} event */

    }]);

    return Selection;
  }();

  var Selector = /*#__PURE__*/function () {
    /**
     * @type {DSBoundingRect}
     * @private
     */

    /**
     * @constructor Selector
     * @param {Object} p
     * @param {DragSelect} p.DS
     * @param {HTMLElement} p.selector
     * @param {string} p.selectorClass
     * @param {boolean} p.customStyles
     * @ignore
     */
    function Selector(_ref) {
      var _this = this;

      var DS = _ref.DS,
          selector = _ref.selector,
          selectorClass = _ref.selectorClass,
          customStyles = _ref.customStyles;

      _classCallCheck(this, Selector);

      _defineProperty(this, "_rect", void 0);

      _defineProperty(this, "start", function (_ref2) {
        var isDragging = _ref2.isDragging;
        if (isDragging) return;
        var PointerStore = _this.DS.stores.PointerStore;
        var pPos = PointerStore.initialValArea;
        updateElementStylePos(_this.HTMLNode, vect2rect(pPos, 1));
        _this.HTMLNode.style.display = 'block';
        _this._rect = null;
      });

      _defineProperty(this, "stop", function () {
        _this.HTMLNode.style.width = '0';
        _this.HTMLNode.style.height = '0';
        _this.HTMLNode.style.display = 'none';
      });

      _defineProperty(this, "update", function (_ref3) {
        var isDragging = _ref3.isDragging;
        if (isDragging || _this.DS["continue"]) return;
        var _this$DS$stores = _this.DS.stores,
            ScrollStore = _this$DS$stores.ScrollStore,
            PointerStore = _this$DS$stores.PointerStore;
        var pos = getSelectorPosition({
          scrollAmount: ScrollStore.scrollAmount,
          initialPointerPos: PointerStore.initialValArea,
          pointerPos: PointerStore.currentValArea
        });
        updateElementStylePos(_this.HTMLNode, pos);
        _this._rect = null;
      });

      this.DS = DS;
      this.HTMLNode = selector || createSelectorElement(customStyles);
      this.HTMLNode.classList.add(selectorClass);
      this.DS.subscribe('Interaction:start', this.start);
      this.DS.subscribe('Interaction:update', this.update);
      this.DS.subscribe('Interaction:end', this.stop);
    }

    _createClass(Selector, [{
      key: "rect",
      get: function get() {
        if (this._rect) return this._rect;
        return this._rect = this.HTMLNode.getBoundingClientRect();
      }
    }]);

    return Selector;
  }();

  var SelectorArea = /*#__PURE__*/function () {
    /**
     * @type {number}
     * @private
     * */

    /**
     * @type {*}
     * @private
     * */

    /**
     * @type {DSBoundingRect}
     * @private
     */

    /**
     * @type {DSEdges}
     * @private
     */

    /**
     * @type {Vect2}
     * @private
     */

    /**
     * @class SelectorArea
     * @constructor SelectorArea
     * @param {{ DS:DragSelect, selectorAreaClass:string, autoScrollSpeed:number, overflowTolerance:Vect2}} obj
     * @ignore
     */
    function SelectorArea(_ref) {
      var _this = this;

      var DS = _ref.DS,
          selectorAreaClass = _ref.selectorAreaClass,
          autoScrollSpeed = _ref.autoScrollSpeed,
          overflowTolerance = _ref.overflowTolerance;

      _classCallCheck(this, SelectorArea);

      _defineProperty(this, "_autoScrollSpeed", void 0);

      _defineProperty(this, "_scrollInterval", void 0);

      _defineProperty(this, "_rect", void 0);

      _defineProperty(this, "currentEdges", []);

      _defineProperty(this, "_overflowTolerance", void 0);

      _defineProperty(this, "start", function () {
        return _this.applyElements('append');
      });

      _defineProperty(this, "applyElements", function () {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'append';
        var docEl = document.body ? 'body' : 'documentElement';
        var methodName = "".concat(method, "Child");

        _this.HTMLNode[methodName](_this.DS.Selector.HTMLNode);

        document[docEl][methodName](_this.HTMLNode);
      });

      _defineProperty(this, "updatePos", function () {
        _this._rect = null;
        var rect = _this.DS.Area.rect;
        var border = _this.DS.Area.computedBorder;
        var style = _this.HTMLNode.style;
        var top = "".concat(rect.top + border.top, "px");
        var left = "".concat(rect.left + border.left, "px");
        var width = "".concat(rect.width, "px");
        var height = "".concat(rect.height, "px");
        if (style.top !== top) style.top = top;
        if (style.left !== left) style.left = left;
        if (style.width !== width) style.width = width;
        if (style.height !== height) style.height = height;
      });

      _defineProperty(this, "stop", function (remove) {
        _this.stopAutoScroll();

        if (remove) _this.applyElements('remove');
      });

      _defineProperty(this, "startAutoScroll", function () {
        _this.currentEdges = [];
        _this._scrollInterval = setInterval(function () {
          return _this.handleAutoScroll();
        }, 16);
      });

      _defineProperty(this, "handleAutoScroll", function () {
        if (_this.DS["continue"]) return;
        var _this$DS = _this.DS,
            PointerStore = _this$DS.stores.PointerStore,
            Area = _this$DS.Area;
        _this.currentEdges = getOverflowEdges({
          elementRect: vect2rect(PointerStore.currentVal),
          containerRect: _this.rect,
          tolerance: _this._overflowTolerance
        });
        if (_this.currentEdges.length) Area.scroll(_this.currentEdges, _this._autoScrollSpeed);
      });

      _defineProperty(this, "stopAutoScroll", function () {
        _this.currentEdges = [];
        clearInterval(_this._scrollInterval);
      });

      _defineProperty(this, "isInside", function (element, elementRect) {
        if (_this.DS.Area.HTMLNode.contains(element) && _this.DS.stores.ScrollStore.canScroll) return true;
        return isCollision(_this.rect, elementRect || element.getBoundingClientRect());
      });

      this._autoScrollSpeed = autoScrollSpeed;
      this._overflowTolerance = overflowTolerance;
      this.DS = DS;
      this.HTMLNode = createSelectorAreaElement(selectorAreaClass);
      this.DS.subscribe('Area:modified', this.updatePos);
      this.DS.subscribe('Interaction:init', this.start);
      this.DS.subscribe('Interaction:start', this.startAutoScroll);
      this.DS.subscribe('Interaction:end', function () {
        _this.updatePos();

        _this.stopAutoScroll();
      });
    }

    _createClass(SelectorArea, [{
      key: "isClicked",

      /**
       * checks if the click was triggered on the area.
       * @param {DSEvent} [event]
       * @returns {boolean}
       */
      value: function isClicked(event) {
        var PointerStore = this.DS.stores.PointerStore;
        var initialVal = event ? PointerStore.getPointerPosition(event) : PointerStore.initialVal;
        return isCollision({
          left: initialVal.x,
          top: initialVal.y,
          right: initialVal.x,
          bottom: initialVal.y
        }, this.rect);
      }
    }, {
      key: "rect",
      get: function get() {
        if (this._rect) return this._rect;
        return this._rect = this.HTMLNode.getBoundingClientRect();
      }
    }]);

    return SelectorArea;
  }();

  var KeyStore = /*#__PURE__*/function () {
    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {DSMultiSelectKeys}
     * @private
     * */

    /**
     * @type {Set<string>}
     * @private
     * */

    /**
     * @type {{control:string,shift:string,meta:string}}
     * @private
     * */

    /**
     * @class KeyStore
     * @constructor KeyStore
     * @param {{DS:DragSelect,multiSelectKeys:DSMultiSelectKeys,multiSelectMode:boolean}} p
     * @ignore
     */
    function KeyStore(_ref) {
      var _this = this;

      var DS = _ref.DS,
          multiSelectKeys = _ref.multiSelectKeys,
          multiSelectMode = _ref.multiSelectMode;

      _classCallCheck(this, KeyStore);

      _defineProperty(this, "_multiSelectMode", void 0);

      _defineProperty(this, "_multiSelectKeys", void 0);

      _defineProperty(this, "_currentValues", new Set());

      _defineProperty(this, "_keyMapping", {
        control: 'ctrlKey',
        shift: 'shiftKey',
        meta: 'metaKey'
      });

      _defineProperty(this, "init", function () {
        document.addEventListener('keydown', _this.keydown);
        document.addEventListener('keyup', _this.keyup);
        window.addEventListener('blur', _this.reset);
      });

      _defineProperty(this, "keydown", function (event) {
        var key = event.key.toLowerCase();

        _this.DS.publish('KeyStore:down:pre', {
          event: event,
          key: key
        });

        _this._currentValues.add(key);

        _this.DS.publish('KeyStore:down', {
          event: event,
          key: key
        });
      });

      _defineProperty(this, "keyup", function (event) {
        var key = event.key.toLowerCase();

        _this.DS.publish('KeyStore:up:pre', {
          event: event,
          key: key
        });

        _this._currentValues["delete"](key);

        _this.DS.publish('KeyStore:up', {
          event: event,
          key: key
        });
      });

      _defineProperty(this, "stop", function () {
        document.removeEventListener('keydown', _this.keydown);
        document.removeEventListener('keyup', _this.reset);
        window.removeEventListener('blur', _this.reset);

        _this.reset();
      });

      _defineProperty(this, "reset", function () {
        return _this._currentValues.clear();
      });

      this.DS = DS;
      this._multiSelectMode = multiSelectMode; // @TODO: remove after deprecation

      this._multiSelectKeys = multiSelectKeys.map(function (key) {
        var deprecatedKeys = {
          ctrlKey: 'Control',
          shiftKey: 'Shift',
          metaKey: 'Meta'
        };
        /** @type {string} */

        var newName = deprecatedKeys[key];

        if (newName) {
          console.warn("[DragSelect] ".concat(key, " is deprecated. Use \"").concat(newName, "\" instead. Act Now!. See docs for more info"));
          return newName.toLowerCase();
        }

        return key.toLowerCase();
      });
      this.DS.subscribe('Interaction:init', this.init);
    }

    _createClass(KeyStore, [{
      key: "isMultiSelectKeyPressed",

      /** @param {KeyboardEvent|MouseEvent|TouchEvent} [event] */
      value: function isMultiSelectKeyPressed(event) {
        var _this2 = this;

        if (this._multiSelectMode) return true;
        if (this.currentValues.some(function (key) {
          return _this2._multiSelectKeys.includes(key);
        })) return true;
        if (event && this._multiSelectKeys.some(function (key) {
          return event[_this2._keyMapping[key]];
        })) return true;
        return false;
      }
    }, {
      key: "currentValues",
      get: function get() {
        return Array.from(this._currentValues.values());
      }
    }]);

    return KeyStore;
  }();

  var PointerStore = /*#__PURE__*/function () {
    /** @type {boolean} */
    // Pointer Positions within Area

    /**
     * @type {Vect2}
     * @private
     * */

    /**
     * @type {Vect2}
     * @private
     * */

    /**
     * @type {Vect2}
     * @private
     * */
    // General Pointer Position

    /**
     * @type {Vect2}
     * @private
     * */

    /**
     * @type {Vect2}
     * @private
     * */

    /**
     * @type {Vect2}
     * @private
     * */

    /**
     * @type {TouchEvent}
     * @private
     * */

    /**
     * @class PointerStore
     * @constructor PointerStore
     * @param {{DS:DragSelect}} p
     * @ignore
     */
    function PointerStore(_ref) {
      var _this = this;

      var DS = _ref.DS;

      _classCallCheck(this, PointerStore);

      _defineProperty(this, "_isMouseInteraction", false);

      _defineProperty(this, "_initialValArea", void 0);

      _defineProperty(this, "_currentValArea", void 0);

      _defineProperty(this, "_lastValArea", void 0);

      _defineProperty(this, "_initialVal", void 0);

      _defineProperty(this, "_currentVal", void 0);

      _defineProperty(this, "_lastVal", void 0);

      _defineProperty(this, "_lastTouch", void 0);

      _defineProperty(this, "init", function () {
        document.addEventListener('mousemove', _this.update);
        document.addEventListener('touchmove', _this.update, {
          // @ts-ignore
          passive: false
        });
      });

      _defineProperty(this, "getPointerPosition", function (event) {
        return getPointerPos({
          event: _this._normalizedEvent(event)
        });
      });

      _defineProperty(this, "update", function (event) {
        if (!event) return;

        _this.DS.publish('PointerStore:updated:pre', {
          event: event
        });

        _this.currentVal = _this.getPointerPosition(event);
        if (!_this._isMouseInteraction) return;

        _this.DS.publish('PointerStore:updated', {
          event: event
        });
      });

      _defineProperty(this, "stop", function () {
        document.removeEventListener('mousemove', _this.update);
        document.removeEventListener('touchmove', _this.update, {
          // @ts-ignore
          passive: false
        }); // debounce in order "onClick" to work

        setTimeout(function () {
          return _this._isMouseInteraction = false;
        }, 100);
      });

      _defineProperty(this, "reset", function (event) {
        if (!event) return;
        _this.currentVal = _this.lastVal = _this.getPointerPosition(event);

        _this.stop();

        _this.init();
      });

      this.DS = DS;
      this.DS.subscribe('Interaction:init', this.init);
      this.DS.subscribe('Interaction:start', function (_ref2) {
        var event = _ref2.event;
        return _this.start(event);
      });
      this.DS.subscribe('Interaction:end', function (_ref3) {
        var event = _ref3.event;
        return _this.reset(event);
      });
    }

    _createClass(PointerStore, [{
      key: "start",

      /** @param {DSEvent} [event] */
      value: function start(event) {
        if (!event) return;
        this._isMouseInteraction = true;
        this.currentVal = this.initialVal = this.getPointerPosition(event);
      }
      /** @param {DSEvent} event */

    }, {
      key: "_normalizedEvent",

      /**
       * @param {DSEvent} event
       * @return {MouseEvent|Touch}
       * @private
       */
      value: function _normalizedEvent(event) {
        // touchend has not touches. so we take the last touch if a touchevent, we need to store the positions
        if ('touches' in event && event.type !== 'touchend') this._lastTouch = event; // if a touchevent, return the last touch rather than the regular event
        // we need .touches[0] from that event instead

        return 'touches' in event ? this._lastTouch.touches[0] : event;
      }
      /** First recorded pointer position within the area */

    }, {
      key: "initialValArea",
      get: function get() {
        if (!this._initialValArea) return {
          x: 0,
          y: 0
        };
        return this._initialValArea;
      }
      /** Current pointer position within the area */

    }, {
      key: "currentValArea",
      get: function get() {
        if (!this._currentValArea) return {
          x: 0,
          y: 0
        };
        return this._currentValArea;
      }
      /** Last recorded pointer position within the area */

    }, {
      key: "lastValArea",
      get: function get() {
        if (!this._lastValArea) return {
          x: 0,
          y: 0
        };
        return this._lastValArea;
      }
      /** First recorded pointer position */

    }, {
      key: "initialVal",
      get: function get() {
        if (!this._initialVal) return {
          x: 0,
          y: 0
        };
        return this._initialVal;
      }
      /** Current pointer position */
      ,
      set: function set(value) {
        this._initialVal = value;
        this._initialValArea = value && calc(value, '-', calc(rect2vect(this.DS.Area.rect), '+', rect2vect(this.DS.Area.computedBorder)));
      }
    }, {
      key: "currentVal",
      get: function get() {
        if (!this._currentVal) return {
          x: 0,
          y: 0
        };
        return this._currentVal;
      }
      /** Last recorded pointer position */
      ,
      set: function set(value) {
        this._currentVal = value;
        this._currentValArea = value && calc(value, '-', calc(rect2vect(this.DS.Area.rect), '+', rect2vect(this.DS.Area.computedBorder)));
      }
    }, {
      key: "lastVal",
      get: function get() {
        if (!this._lastVal) return {
          x: 0,
          y: 0
        };
        return this._lastVal;
      },
      set: function set(value) {
        this._lastVal = value;
        this._lastValArea = value && calc(value, '-', calc(rect2vect(this.DS.Area.rect), '+', rect2vect(this.DS.Area.computedBorder)));
      }
    }]);

    return PointerStore;
  }();

  var ScrollStore = /*#__PURE__*/function () {
    /**
     * @type {Vect2}
     * @private */

    /**
     * @type {Vect2}
     * @private */

    /**
     * @type {DSArea}
     * @private */

    /**
     * @type {boolean}
     * @private */

    /**
     * @class ScrollStore
     * @constructor ScrollStore
     * @param {{ DS:DragSelect, areaElement: DSArea, zoom:number }} p
     * @ignore
     */
    function ScrollStore(_ref) {
      var _this = this;

      var DS = _ref.DS,
          areaElement = _ref.areaElement,
          zoom = _ref.zoom;

      _classCallCheck(this, ScrollStore);

      _defineProperty(this, "_initialVal", void 0);

      _defineProperty(this, "_currentVal", void 0);

      _defineProperty(this, "_areaElement", void 0);

      _defineProperty(this, "_canScroll", void 0);

      _defineProperty(this, "init", function () {
        return _this._areaElement.addEventListener('scroll', _this.update);
      });

      _defineProperty(this, "start", function () {
        _this._currentVal = _this._initialVal = getCurrentScroll(_this._areaElement);

        _this._areaElement.addEventListener('scroll', _this.update);
      });

      _defineProperty(this, "update", function () {
        return _this._currentVal = getCurrentScroll(_this._areaElement);
      });

      _defineProperty(this, "stop", function () {
        _this._areaElement.removeEventListener('scroll', _this.update);

        _this._initialVal = {
          x: 0,
          y: 0
        };
        _this._canScroll = null;
      });

      _defineProperty(this, "reset", function () {
        _this.stop();

        _this.start();
      });

      this._areaElement = areaElement;
      this.DS = DS;
      this.zoom = zoom;
      this.DS.subscribe('Interaction:init', this.init);
      this.DS.subscribe('Interaction:start', function () {
        return _this.start();
      });
      this.DS.subscribe('Interaction:end', function () {
        return _this.reset();
      });
    }

    _createClass(ScrollStore, [{
      key: "canScroll",
      get: function get() {
        if (typeof this._canScroll === 'boolean') return this._canScroll;
        return this._canScroll = canScroll(this._areaElement);
      }
    }, {
      key: "scrollAmount",
      get: function get() {
        var scrollDiff = calc(this.currentVal, '-', this.initialVal); // if area is zoomed, the scroll values are skewed, we need to fix that manually :(

        var zoom = num2vect(this.zoom);
        var zoomScroll = calc(calc(scrollDiff, '*', zoom), '-', scrollDiff);
        return {
          x: scrollDiff.x + zoomScroll.x,
          y: scrollDiff.y + zoomScroll.y
        };
      }
    }, {
      key: "initialVal",
      get: function get() {
        if (!this._initialVal) return {
          x: 0,
          y: 0
        };
        return this._initialVal;
      }
    }, {
      key: "currentVal",
      get: function get() {
        if (!this._currentVal) this._currentVal = getCurrentScroll(this._areaElement);
        return this._currentVal;
      }
    }]);

    return ScrollStore;
  }();

  //////////////////////////////////////////////////////////////////////////////////////

  var DragSelect = /*#__PURE__*/function () {
    /**
     * used to skip all current Selection and dragNdrop functionality
     * @type {boolean}
     */

    /**
     * @class DragSelect
     * @constructor DragSelect
     * @param {Settings} settings
     */
    function DragSelect(_ref) {
      var _this = this;

      var _ref$area = _ref.area,
          area = _ref$area === void 0 ? document : _ref$area,
          _ref$selectables = _ref.selectables,
          selectables = _ref$selectables === void 0 ? [] : _ref$selectables,
          _ref$autoScrollSpeed = _ref.autoScrollSpeed,
          autoScrollSpeed = _ref$autoScrollSpeed === void 0 ? 5 : _ref$autoScrollSpeed,
          _ref$overflowToleranc = _ref.overflowTolerance,
          overflowTolerance = _ref$overflowToleranc === void 0 ? {
        x: 25,
        y: 25
      } : _ref$overflowToleranc,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
          _ref$customStyles = _ref.customStyles,
          customStyles = _ref$customStyles === void 0 ? false : _ref$customStyles,
          _ref$multiSelectMode = _ref.multiSelectMode,
          multiSelectMode = _ref$multiSelectMode === void 0 ? false : _ref$multiSelectMode,
          _ref$multiSelectToggl = _ref.multiSelectToggling,
          multiSelectToggling = _ref$multiSelectToggl === void 0 ? true : _ref$multiSelectToggl,
          _ref$multiSelectKeys = _ref.multiSelectKeys,
          multiSelectKeys = _ref$multiSelectKeys === void 0 ? ['Control', 'Shift', 'Meta'] : _ref$multiSelectKeys,
          _ref$selector = _ref.selector,
          selector = _ref$selector === void 0 ? undefined : _ref$selector,
          _ref$draggability = _ref.draggability,
          draggability = _ref$draggability === void 0 ? true : _ref$draggability,
          _ref$immediateDrag = _ref.immediateDrag,
          immediateDrag = _ref$immediateDrag === void 0 ? true : _ref$immediateDrag,
          _ref$keyboardDrag = _ref.keyboardDrag,
          keyboardDrag = _ref$keyboardDrag === void 0 ? true : _ref$keyboardDrag,
          dragKeys = _ref.dragKeys,
          _ref$keyboardDragSpee = _ref.keyboardDragSpeed,
          keyboardDragSpeed = _ref$keyboardDragSpee === void 0 ? 10 : _ref$keyboardDragSpee,
          _ref$useTransform = _ref.useTransform,
          useTransform = _ref$useTransform === void 0 ? true : _ref$useTransform,
          _ref$hoverClass = _ref.hoverClass,
          hoverClass = _ref$hoverClass === void 0 ? 'ds-hover' : _ref$hoverClass,
          _ref$selectableClass = _ref.selectableClass,
          selectableClass = _ref$selectableClass === void 0 ? 'ds-selectable' : _ref$selectableClass,
          _ref$selectedClass = _ref.selectedClass,
          selectedClass = _ref$selectedClass === void 0 ? 'ds-selected' : _ref$selectedClass,
          _ref$selectorClass = _ref.selectorClass,
          selectorClass = _ref$selectorClass === void 0 ? 'ds-selector' : _ref$selectorClass,
          _ref$selectorAreaClas = _ref.selectorAreaClass,
          selectorAreaClass = _ref$selectorAreaClas === void 0 ? 'ds-selector-area' : _ref$selectorAreaClas,
          callback = _ref.callback,
          onDragMove = _ref.onDragMove,
          onDragStartBegin = _ref.onDragStartBegin,
          onDragStart = _ref.onDragStart,
          onElementSelect = _ref.onElementSelect,
          onElementUnselect = _ref.onElementUnselect;

      _classCallCheck(this, DragSelect);

      _defineProperty(this, "continue", false);

      _defineProperty(this, "start", function () {
        _this.stopped = false;

        _this.Interaction.init();
      });

      _defineProperty(this, "break", function () {
        return _this["continue"] = true;
      });

      _defineProperty(this, "getSelection", function () {
        return _this.SelectedSet.elements;
      });

      _defineProperty(this, "getSelectables", function () {
        return _this.SelectableSet.elements;
      });

      _defineProperty(this, "getInitialCursorPosition", function () {
        return _this.stores.PointerStore.initialVal;
      });

      _defineProperty(this, "getCurrentCursorPosition", function () {
        return _this.stores.PointerStore.currentVal;
      });

      _defineProperty(this, "getPreviousCursorPosition", function () {
        return _this.stores.PointerStore.lastVal;
      });

      _defineProperty(this, "getInitialCursorPositionArea", function () {
        return _this.stores.PointerStore.initialValArea;
      });

      _defineProperty(this, "getCurrentCursorPositionArea", function () {
        return _this.stores.PointerStore.currentValArea;
      });

      _defineProperty(this, "getPreviousCursorPositionArea", function () {
        return _this.stores.PointerStore.lastValArea;
      });

      _defineProperty(this, "isMultiSelect", function (event) {
        return _this.stores.KeyStore.isMultiSelectKeyPressed(event);
      });

      _defineProperty(this, "isDragging", function () {
        return _this.Interaction.isDragging;
      });

      this.PubSub = new PubSub({
        DS: this
      });
      this.subscribe = this.PubSub.subscribe;
      this.unsubscribe = this.PubSub.unsubscribe;
      this.publish = this.PubSub.publish;

      this._callbacksTemp({
        callback: callback,
        onDragMove: onDragMove,
        onDragStart: onDragStart,
        onDragStartBegin: onDragStartBegin,
        onElementSelect: onElementSelect,
        onElementUnselect: onElementUnselect
      });

      this.stores = {
        PointerStore: new PointerStore({
          DS: this
        }),
        ScrollStore: new ScrollStore({
          DS: this,
          areaElement: area,
          zoom: zoom
        }),
        KeyStore: new KeyStore({
          DS: this,
          multiSelectKeys: multiSelectKeys,
          multiSelectMode: multiSelectMode
        })
      };
      this.Area = new Area({
        area: area,
        PS: this.PubSub,
        zoom: zoom
      });
      this.Selector = new Selector({
        DS: this,
        selector: selector,
        selectorClass: selectorClass,
        customStyles: customStyles
      });
      this.SelectorArea = new SelectorArea({
        DS: this,
        selectorAreaClass: selectorAreaClass,
        autoScrollSpeed: autoScrollSpeed,
        overflowTolerance: overflowTolerance
      });
      this.SelectableSet = new SelectableSet({
        elements: selectables,
        DS: this,
        className: selectableClass,
        hoverClassName: hoverClass,
        useTransform: useTransform,
        draggability: draggability
      });
      this.SelectedSet = new SelectedSet({
        DS: this,
        className: selectedClass
      });
      this.Selection = new Selection({
        DS: this,
        hoverClassName: hoverClass,
        multiSelectToggling: multiSelectToggling
      });
      this.Drag = new Drag({
        DS: this,
        draggability: draggability,
        useTransform: useTransform,
        keyboardDrag: keyboardDrag,
        dragKeys: Object.assign({
          up: ['ArrowUp'],
          down: ['ArrowDown'],
          left: ['ArrowLeft'],
          right: ['ArrowRight']
        }, dragKeys),
        zoom: zoom,
        keyboardDragSpeed: keyboardDragSpeed
      });
      this.Interaction = new Interaction({
        areaElement: area,
        DS: this,
        draggability: draggability,
        immediateDrag: immediateDrag,
        selectableClass: selectableClass
      }); // Subscriber Aliases

      subscriberAliases({
        subscribe: this.subscribe,
        publish: this.publish,
        SelectedSet: this.SelectedSet,
        Interaction: this.Interaction
      });
      this.subscribe('Interaction:end', function () {
        return _this["continue"] = false;
      });
      this.start();
    } // @TODO: remove after deprecation


    _createClass(DragSelect, [{
      key: "_callbacksTemp",
      value: function _callbacksTemp(_ref2) {
        var callback = _ref2.callback,
            onDragMove = _ref2.onDragMove,
            onDragStart = _ref2.onDragStart,
            onDragStartBegin = _ref2.onDragStartBegin,
            onElementSelect = _ref2.onElementSelect,
            onElementUnselect = _ref2.onElementUnselect;

        var warnMessage = function warnMessage(name, newName) {
          return console.warn("[DragSelect] ".concat(name, " is deprecated. Use DragSelect.subscribe(\"").concat(newName, "\", (callbackObject) => {}) instead. Act Now! See docs for more info"));
        };

        if (callback) {
          warnMessage('callback', 'callback');
          this.subscribe('callback', function (_ref3) {
            var items = _ref3.items,
                item = _ref3.item,
                event = _ref3.event;
            return callback(items, event);
          });
        }

        if (onDragMove) {
          warnMessage('onDragMove', 'dragmove');
          this.subscribe('dragmove', function (_ref4) {
            var items = _ref4.items,
                item = _ref4.item,
                event = _ref4.event;
            return onDragMove(event);
          });
        }

        if (onDragStart) {
          warnMessage('onDragStart', 'dragstart');
          this.subscribe('dragstart', function (_ref5) {
            var items = _ref5.items,
                item = _ref5.item,
                event = _ref5.event;
            return onDragStart(event);
          });
        }

        if (onDragStartBegin) {
          warnMessage('onDragStartBegin', 'dragstart');
          this.subscribe('dragstart', function (_ref6) {
            var items = _ref6.items,
                item = _ref6.item,
                event = _ref6.event;
            return onDragStartBegin(event);
          });
        }

        if (onElementSelect) {
          warnMessage('onElementSelect', 'elementselect');
          this.subscribe('elementselect', function (_ref7) {
            var items = _ref7.items,
                item = _ref7.item,
                event = _ref7.event;
            return onElementSelect(item, event);
          });
        }

        if (onElementUnselect) {
          warnMessage('onElementUnselect', 'elementunselect');
          this.subscribe('elementunselect', function (_ref8) {
            var items = _ref8.items,
                item = _ref8.item,
                event = _ref8.event;
            return onElementUnselect(item, event);
          });
        }
      } // Useful methods for the user
      //////////////////////////////////////////////////////////////////////////////////////

      /**
       * Initializes the functionality. Automatically triggered when created.
       * Also, reset the functionality after a teardown
       */

    }, {
      key: "stop",

      /**
       * Complete function teardown
       * Will teardown/stop the whole functionality
       * @param {boolean} [remove] - if elements should be removed.
       * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
       * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
       */
      value: function stop() {
        var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var fromSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var withCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (withCallback) this.publish('callback', {
          items: this.getSelection()
        });
        this.Interaction.stop();
        this.Area.stop();
        this.Drag.stop();
        this.Selector.stop();
        this.SelectorArea.stop(remove);
        this.stores.KeyStore.stop();
        this.stores.PointerStore.stop();
        this.stores.ScrollStore.stop();
        if (remove) this.SelectableSet.clear();
        if (fromSelection) this.SelectedSet.clear();
        this.stopped = true;
      }
      /**
       * Utility to override DragSelect internal functionality:
       * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
       * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
       */

    }, {
      key: "addSelection",

      /**
       * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
       * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
       * @param {DSInputElements} elements one or multiple elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
       * @return {DSElements} all selected elements
       */
      value: function addSelection(elements) {
        var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var dontAddToSelectables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.SelectedSet.addAll(toArray(elements));
        if (!dontAddToSelectables) this.addSelectables(elements);
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Removes specific elements from the selection
       * Multiple elements can be given at once, in contrary to unselect
       * @param {DSInputElements} elements one or multiple elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
       * @return {DSElements} all selected elements
       */

    }, {
      key: "removeSelection",
      value: function removeSelection(elements) {
        var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var removeFromSelectables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.SelectedSet.deleteAll(toArray(elements));
        if (removeFromSelectables) this.removeSelectables(elements);
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Toggles specific elements from the selection:
       * If element is not in selection it will be added, if it is already selected, it will be removed.
       * Multiple elements can be given at once.
       * @param {DSInputElements} elements one or multiple elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [alsoSelectables] - if element should not be added/removed to the list of selectable elements accordingly
       * @return {DSElements} all selected elements
       */

    }, {
      key: "toggleSelection",
      value: function toggleSelection(elements) {
        var _this2 = this;

        var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var alsoSelectables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        toArray(elements).forEach(function (el) {
          return _this2.SelectedSet.has(el) ? _this2.removeSelection(elements, triggerCallback, alsoSelectables) : _this2.addSelection(elements, triggerCallback, alsoSelectables);
        });
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Sets the current selected elements and optionally run the callback
       * By default, adds new elements also to the list of selectables
       * @param {DSInputElements} elements – dom elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
       * @return {DSElements}
       */

    }, {
      key: "setSelection",
      value: function setSelection(elements) {
        var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var dontAddToSelectables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.clearSelection();
        this.addSelection(elements, triggerCallback, dontAddToSelectables);
        return this.getSelection();
      }
      /**
       * Unselect / Deselect all current selected Nodes
       * @param {boolean} [triggerCallback] - if callback should be called
       * @return {DSElements} this.selected, should be empty
       */

    }, {
      key: "clearSelection",
      value: function clearSelection() {
        var triggerCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.SelectedSet.clear();
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Add elements that can be selected. No node is added twice
       * @param {DSInputElements} elements dom element(s)
       * @param {boolean} [addToSelection] if elements should also be added to current selection
       * @return {DSInputElements} the added element(s)
       */

    }, {
      key: "addSelectables",
      value: function addSelectables(elements) {
        var addToSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var els = toArray(elements);
        this.SelectableSet.addAll(els);
        if (addToSelection) this.SelectedSet.addAll(els);
        return elements;
      }
      /**
       * Gets all nodes that can potentially be selected
       * @return {DSElements} this.selectables
       */

    }, {
      key: "setSelectables",

      /**
       * Sets all elements that can be selected.
       * Removes all current selectables (& their respective classes).
       * Adds the new set to the selectables set, thus replacing the original set.
       * @param {DSInputElements} elements – dom element(s)
       * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
       * @param {boolean} [addToSelection] if elements should also be added to current selection
       * @return {DSInputElements} elements – the added element(s)
       */
      value: function setSelectables(elements) {
        var removeFromSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var addToSelection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.removeSelectables(elements, removeFromSelection);
        return this.addSelectables(elements, addToSelection);
      }
      /**
       * Remove elements from the elements that can be selected.
       * @param {DSInputElements} elements – dom element(s)
       * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
       * @return {DSInputElements} the removed element(s)
       */

    }, {
      key: "removeSelectables",
      value: function removeSelectables(elements) {
        var removeFromSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.SelectableSet.deleteAll(toArray(elements));
        if (removeFromSelection) this.removeSelection(elements);
        return elements;
      }
      /** The starting/initial position of the cursor/selector @return {Vect2} */

    }, {
      key: "getCursorPositionDifference",

      /**
       * Utility method that returns the cursor position difference between start and now
       * @param {boolean} [usePreviousCursorDifference] if true, it will output the cursor position difference between the previous selection and now
       * @param {boolean} [useAreaPositions] if true, it will use cursor positions relative to the area
       * @return {Vect2}
       * @deprecated
       */
      value: function getCursorPositionDifference() {
        var usePreviousCursorDifference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var useAreaPositions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        console.warn('[DragSelect] Using .getCursorPositionDifference is deprecated. Calculate yourself instead. i.e. `.getCurrentCursorPosition().x - .getInitialCursorPosition().x`');
        var posA = useAreaPositions ? this.getCurrentCursorPositionArea() : this.getCurrentCursorPosition();
        var posB = usePreviousCursorDifference ? useAreaPositions ? this.getPreviousCursorPositionArea() : this.getPreviousCursorPosition() : useAreaPositions ? this.getInitialCursorPositionArea() : this.getInitialCursorPosition();
        return calc(posA, '-', posB);
      }
      /**
       * Whether the user is currently drag n dropping elements (instead of selection)
       * @return {boolean}
       */

    }]);

    return DragSelect;
  }();

  return DragSelect;

})));


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-add-sample.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-add-sample.component.ts ***!
  \***********************************************************************/
/*! exports provided: DataManageAddSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageAddSampleComponent", function() { return DataManageAddSampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");







class DataManageAddSampleComponent {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.addForm = this.fb.group({
            sampleTypeName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(45)]],
            isLeaf: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    getAddFormValue() {
        if (this.addForm.valid) {
            const formValue = this.addForm.value;
            return {
                imageCount: 0,
                isLeaf: false,
                id: formValue.id,
                sampleTypeNumber: 0,
                sampleTypeName: formValue.sampleTypeName,
                sampleUpId: this.sampleUpId,
                samplePath: formValue.samplePath
            };
        }
        return null;
    }
}
DataManageAddSampleComponent.ɵfac = function DataManageAddSampleComponent_Factory(t) { return new (t || DataManageAddSampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DataManageAddSampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageAddSampleComponent, selectors: [["ng-component"]], inputs: { sampleUpId: "sampleUpId" }, decls: 7, vars: 5, consts: [["nz-form", "", 3, "formGroup"], ["nzRequired", "", "nzFor", "sampleTypeName", 3, "nzXl", "nzMd"], [3, "nzXl", "nzMd"], ["nz-input", "", "formControlName", "sampleTypeName", "name", "sampleTypeName"]], template: function DataManageAddSampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u5206\u7C7B\u540D\u79F0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 6)("nzMd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 16)("nzMd", 16);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["[_nghost-%COMP%]     .ant-radio-group {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS1hZGQtc2FtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RhdGEtbWFuYWdlLWFkZC1zYW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFVSSxlQUFBO0FDUkoiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RhdGEtbWFuYWdlLWFkZC1zYW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuYW50LXRyZWUtc2hvdy1saW5lIC5hbnQtdHJlZS1zd2l0Y2hlciB7XG4gICAgLy9iYWNrZ3JvdW5kOiAjMTg5MGZmO1xuICB9XG5cbiAgLmFudC10cmVlIHtcbiAgICAvL2JhY2tncm91bmQ6ICMxODkwZmY7XG4gIH1cblxuICAuYW50LXJhZGlvLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageAddSampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage-add-sample.component.html',
                styleUrls: ['./data-manage-add-sample.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { sampleUpId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataManageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageDetailComponent", function() { return DataManageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["lineEchart"];
class DataManageDetailComponent {
    constructor(http, nzMessage, nzModal) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.secondaryData = [];
    }
    ngOnInit() {
        this.secondaryData.forEach((images) => {
            if (images.id === this.sampleOssId) {
                this.sampleOssFile = images;
                return;
            }
        });
    }
    ngAfterViewInit() {
        this.loadCharts();
    }
    nextImage() {
        for (let i = 0; i < this.secondaryData.length; i++) {
            if (this.secondaryData[i].id === this.sampleOssId) {
                if (i < this.secondaryData.length - 1) {
                    this.sampleOssFile = this.secondaryData[i + 1];
                    this.sampleOssId = this.secondaryData[i + 1].id;
                    return;
                }
                else {
                    this.nzMessage.error('已经是最后一张啦!');
                }
            }
        }
    }
    lastImage() {
        for (let i = 0; i < this.secondaryData.length; i++) {
            if (this.secondaryData[i].id === this.sampleOssId) {
                if (i === 0) {
                    this.nzMessage.error('已经是第一张啦!');
                }
                else {
                    this.sampleOssId = this.secondaryData[i - 1].id;
                    this.sampleOssFile = this.secondaryData[i - 1];
                    return;
                }
            }
        }
    }
    loadCharts() {
        const lineChartOption = {
            xAxis: {
                // data: [122, 130, 170],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: ['浏览次数', '下载次数', '训练次数'],
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                interval: 0
            },
            grid: {
                x: 100
            },
            series: [
                {
                    data: [122, 130, 170],
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            color: (params) => {
                                console.log('params is :', params);
                                const colors = [{
                                        start: '#88c9ec',
                                        end: '#5599FF'
                                    }, {
                                        start: '#b0efb6',
                                        end: '#1ef50f'
                                    }, {
                                        start: '#7f8ae8',
                                        end: '#2e31ea'
                                    }];
                                return new echarts__WEBPACK_IMPORTED_MODULE_1__["graphic"].LinearGradient(0, 0, 1, 0, [
                                    { offset: 0, color: colors[params.dataIndex].start },
                                    { offset: 1, color: colors[params.dataIndex].end }
                                ]);
                            }
                        }
                    }
                }
            ]
        };
        if (!this.lineEchart) {
            this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.lineEchartElm.nativeElement);
        }
        this.lineEchart.setOption(lineChartOption);
    }
}
DataManageDetailComponent.ɵfac = function DataManageDetailComponent_Factory(t) { return new (t || DataManageDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"])); };
DataManageDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageDetailComponent, selectors: [["ng-component"]], viewQuery: function DataManageDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineEchartElm = _t.first);
    } }, inputs: { sampleOssId: "sampleOssId", secondaryData: "secondaryData" }, decls: 50, vars: 8, consts: [[1, "main", "flex-column"], [1, "search-form", "flex-row"], [1, "btn", "m-r"], [1, "btn", "btn-remove"], [1, "detail", "flex-column"], [1, "detail-image", "flex-row"], ["src", "assets/images/pre.png", "alt", "\u4E0A\u4E00\u5F20", 1, "pre", "pointer", 3, "click"], [1, "detail-box", "flex-column"], [1, "target-image", "flex-row"], ["alt", "\u56FE\u7247", 1, "img-responsive", 3, "src"], [1, "target-quantity"], ["src", "assets/images/next.png", "alt", "\u4E0B\u4E00\u5F20", 1, "next", "pointer", 3, "click"], [1, "detail-info", "flex-row"], [1, "detail-info-box", "flex-column", "m-r"], [1, "detail-info-type", "flex-row"], [1, "detail-info-param"], [1, "detail-info-value"], [1, "is_mark"], [1, "detail-info-box", "p-a"], [1, "echarts"], [1, "demo-chart", 2, "height", "240px"], ["lineEchart", ""]], template: function DataManageDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u9501\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageDetailComponent_Template_img_click_8_listener() { return ctx.lastImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "ossPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "80 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageDetailComponent_Template_img_click_15_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u56FE\u5F62\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u9A71\u9010\u8230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u56FE\u7247\u5C3A\u5BF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u662F\u5426\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u662F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u4E0A\u4F20\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u4E0A\u4F20\u4F5C\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "echarts \u7EDF\u8BA1\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, ctx.sampleOssFile.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssFile.height + "*" + ctx.sampleOssFile.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 5, ctx.sampleOssFile.createdTime, "yyyy-MM-dd HH:mm:ss"));
    } }, pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_4__["OssPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["[_nghost-%COMP%]     .prev-image, [_nghost-%COMP%]     .next-image {\n  position: absolute;\n  top: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 50%;\n  padding: 5px;\n}\n[_nghost-%COMP%]     .prev-image > i, [_nghost-%COMP%]     .next-image > i {\n  font-size: 30px;\n  color: #FFF;\n}\n[_nghost-%COMP%]     .prev-image:hover, [_nghost-%COMP%]     .next-image:hover {\n  transform: scale(1.2);\n}\n[_nghost-%COMP%]     .prev-image {\n  left: 10px;\n}\n[_nghost-%COMP%]     .next-image {\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCIuLi9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2UtZGV0YWlsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7QURYQTs7RUFjTSxlQUFBO0VBQ0EsV0FBQTtBQ0NOO0FERUk7O0VBQ0UscUJBQUE7QUNDTjtBRHBCQTtFQXdCSSxVQUFBO0FDREo7QUR2QkE7RUE0QkksV0FBQTtBQ0ZKIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuXG4gIC5wcmV2LWltYWdlLCAubmV4dC1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICA+IGkge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yKTtcbiAgICB9XG4gIH1cblxuICAucHJldi1pbWFnZSB7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuXG4gIC5uZXh0LWltYWdlIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wcmV2LWltYWdlLFxuOmhvc3QgOjpuZy1kZWVwIC5uZXh0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJldi1pbWFnZSA+IGksXG46aG9zdCA6Om5nLWRlZXAgLm5leHQtaW1hZ2UgPiBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJldi1pbWFnZTpob3Zlcixcbjpob3N0IDo6bmctZGVlcCAubmV4dC1pbWFnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJldi1pbWFnZSB7XG4gIGxlZnQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5leHQtaW1hZ2Uge1xuICByaWdodDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage-detail.component.html',
                styleUrls: ['./data-manage-detail.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }]; }, { sampleOssId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondaryData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lineEchartElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['lineEchart']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageRoutingModule", function() { return DataManageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manage.component */ "./src/app/pages/data-manage/data-manage.component.ts");
/* harmony import */ var _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-leaf/not-leaf.data-manage.component */ "./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts");
/* harmony import */ var _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaf/leaf.data-manage.component */ "./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts");
/* harmony import */ var _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.data-manage.component */ "./src/app/pages/data-manage/detail/detail.data-manage.component.ts");
/* harmony import */ var _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.data-manage.component */ "./src/app/pages/data-manage/edit/edit.data-manage.component.ts");









class DataManageRoutingModule {
}
DataManageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataManageRoutingModule });
DataManageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataManageRoutingModule_Factory(t) { return new (t || DataManageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                    path: '', component: _data_manage_component__WEBPACK_IMPORTED_MODULE_2__["DataManageComponent"],
                    children: [
                        {
                            path: 'not-leaf', component: _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_3__["NotLeafDataManageComponent"]
                        },
                        {
                            path: 'leaf', component: _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_4__["LeafDataManageComponent"]
                        },
                        {
                            path: 'edit', component: _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_6__["EditDataManageComponent"]
                        },
                        {
                            path: 'detail', component: _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_5__["DetailDataManageComponent"],
                            runGuardsAndResolvers: 'paramsChange',
                        }
                    ]
                }])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataManageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                            path: '', component: _data_manage_component__WEBPACK_IMPORTED_MODULE_2__["DataManageComponent"],
                            children: [
                                {
                                    path: 'not-leaf', component: _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_3__["NotLeafDataManageComponent"]
                                },
                                {
                                    path: 'leaf', component: _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_4__["LeafDataManageComponent"]
                                },
                                {
                                    path: 'edit', component: _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_6__["EditDataManageComponent"]
                                },
                                {
                                    path: 'detail', component: _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_5__["DetailDataManageComponent"],
                                    runGuardsAndResolvers: 'paramsChange',
                                }
                            ]
                        }])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataManageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageUploadComponent", function() { return DataManageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");









class DataManageUploadComponent {
    constructor(http, nzMessage, nzModalRef) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModalRef = nzModalRef;
        this.loading = false;
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.fileList = [];
        this.previewImage = '';
        this.previewVisible = false;
        this.imageJson = [];
        this.imageJsons = [];
        this.uploadDeviceImageTwo = ((item) => {
            const formData = new FormData();
            formData.append('files', item.file);
            let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeId', this.sampleUpId + '');
            return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file`, formData, {
                params: httpParams,
                reportProgress: true,
                responseType: 'text',
            }).subscribe((resp) => {
                item.onSuccess(resp, item.file, resp);
            });
        });
        this.beforeImageUpload = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isValidFormat = isJPG || isPNG;
                if (!isValidFormat) {
                    this.nzMessage.error('只能上传jpg或者png格式的图片');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.nzMessage.error('图片最多不能超过 2MB!');
                    observer.complete();
                    return;
                }
                // check height
                this.checkImageDimension(file).then(dimensionRes => {
                    if (!dimensionRes) {
                        this.nzMessage.error('图片尺寸至少 300x300 以上');
                        observer.complete();
                        return;
                    }
                    observer.next(isValidFormat && isLt2M && dimensionRes);
                    observer.complete();
                });
            });
        };
        this.handlePreview = (file) => {
            this.previewImage = file.url || file.thumbUrl;
            this.previewVisible = true;
        };
        this.removeHandle = (file) => {
            this.removeArray(this.fileList, file.uid);
            this.removeArray(this.imageJson, file.uid);
            this.imageJsons = [];
            this.handleImages(this.imageJson);
        };
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    checkImageDimension(file) {
        return new Promise(resolve => {
            const img = new Image(); // create image
            img.src = window.URL.createObjectURL(file);
            img.onload = () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                window.URL.revokeObjectURL(img.src);
                // resolve(width === height && width >= 300);
                resolve(true);
            };
        });
    }
    handleImageChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.deviceImageUrl = img;
                });
                break;
            case 'error':
                this.nzMessage.error('Network error');
                this.loading = false;
                break;
        }
    }
    removeArray(fileArray, uid) {
        fileArray.forEach(s => {
            if (s.uid === uid) {
                const indexOf = fileArray.indexOf(s);
                fileArray.splice(indexOf, 1);
            }
        });
    }
    handleImages(fileArray) {
        fileArray.forEach(s => {
            this.imageJsons.push(s.name);
        });
    }
    ngOnInit() {
    }
}
DataManageUploadComponent.ɵfac = function DataManageUploadComponent_Factory(t) { return new (t || DataManageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"])); };
DataManageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageUploadComponent, selectors: [["ng-component"]], inputs: { sampleUpId: "sampleUpId" }, decls: 5, vars: 7, consts: [[1, "clearfix"], ["nzListType", "picture-card", 3, "nzCustomRequest", "nzBeforeUpload", "nzFileList", "nzShowButton", "nzRemove", "nzPreview", "nzMultiple", "nzChange", "nzFileListChange"], ["nz-icon", "", "nzType", "plus"], [1, "ant-upload-text"]], template: function DataManageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-upload", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function DataManageUploadComponent_Template_nz_upload_nzChange_1_listener($event) { return ctx.handleImageChange($event); })("nzFileListChange", function DataManageUploadComponent_Template_nz_upload_nzFileListChange_1_listener($event) { return ctx.fileList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u4E0A\u4F20\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCustomRequest", ctx.uploadDeviceImageTwo)("nzBeforeUpload", ctx.beforeImageUpload)("nzFileList", ctx.fileList)("nzShowButton", ctx.fileList.length < 100)("nzRemove", ctx.removeHandle)("nzPreview", ctx.handlePreview)("nzMultiple", true);
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage-upload.component.html',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }]; }, { sampleUpId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage.component.ts ***!
  \************************************************************/
/*! exports provided: DataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageComponent", function() { return DataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-manage-add-sample.component */ "./src/app/pages/data-manage/data-manage-add-sample.component.ts");
/* harmony import */ var _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-manage-detail.component */ "./src/app/pages/data-manage/data-manage-detail.component.ts");
/* harmony import */ var _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-manage-upload.component */ "./src/app/pages/data-manage/data-manage-upload.component.ts");
/* harmony import */ var _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rename-sample-type.component */ "./src/app/pages/data-manage/rename-sample-type.component.ts");
/* harmony import */ var _state_rename_sample_oss_type_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state/rename-sample-oss-type.action */ "./src/app/state/rename-sample-oss-type.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");


















const _c0 = ["nzTreeComponent"];
const _c1 = ["nzTreeComponentSar"];
const _c2 = ["nzTreeComponentRemote"];
const _c3 = ["nzTreeComponentInfrared"];
class DataManageComponent {
    constructor(http, nzMessage, nzModal, router, route, store, dataManageService) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.router = router;
        this.route = route;
        this.store = store;
        this.dataManageService = dataManageService;
        this.visibleLight = [];
        this.infrared = [];
        this.sar = [];
        this.remoteSense = [];
        this.titleData = [];
        this.type = { KJG: 'KJG', HW: 'HW', SAR: 'SAR', YG: 'YG' };
        this.dataSet = [];
        //是否最后一级
        this.isEndType = true;
        this.secondaryData = [];
        this.secondaryTotal = 0;
        this.isOperateButton = false;
        this.checkOptionsOne = [];
        //选中类型
        this.chooseType = false;
        this.indeterminate = true;
        this.allChecked = false;
        this.visibleLightRootNode = this.dataManageService.visibleLightRootNode;
        this.infraredRootNode = this.dataManageService.infraredRootNode;
        this.sarRootNode = this.dataManageService.sarRootNode;
        this.remoteSenseRootNode = this.dataManageService.remoteSenseRootNode;
        this.visibleLight = this.dataManageService.visibleLight;
        this.infrared = this.dataManageService.infrared;
        this.sar = this.dataManageService.sar;
        this.remoteSense = this.dataManageService.remoteSense;
        // this.visibleLightRootNode = new NzTreeNode({
        //   title: '可见光',
        //   key: 'KJG',
        //   expanded: true,
        //   isSelected: true,
        // });
        // this.visibleLight.push(this.visibleLightRootNode);
        // this.infraredRootNode = new NzTreeNode({
        //   title: '红外',
        //   key: 'HW',
        //   expanded: true,
        // });
        // this.infrared.push(this.infraredRootNode);
        // this.sarRootNode = new NzTreeNode({
        //   title: 'SAR',
        //   key: 'SAR',
        //   expanded: true,
        // });
        // this.sar.push(this.sarRootNode);
        // this.remoteSenseRootNode = new NzTreeNode({
        //   title: '遥感',
        //   key: 'YG',
        //   expanded: true,
        // });
        // this.remoteSense.push(this.remoteSenseRootNode);
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('sampleUpId')) {
                console.log('this is sampleUpId' + paramMap.get('sampleUpId'));
            }
        });
        // this.checkOptionsOne.push();
        this.dataManageService.loadVisibleLightTree(this);
        this.dataManageService.loadInfraredTree(this);
        this.dataManageService.loadRemoteSenseTree(this);
        this.dataManageService.loadSarTree(this);
        // this.loadVisibleLightTree();
        // this.loadInfraredTree();
        // this.loadSarTree();
        // this.loadRemoteSenseTree();
        this.loadStatInfo();
        this.dragWidth();
    }
    dragWidth() {
        var vbar = document.getElementById('vDragbar');
        var leftd = document.getElementById('treeBox');
        var hctn = document.getElementById("hContainer");
        const vdrag = (e) => {
            leftd.style.flexBasis = (e.pageX - vbar.offsetWidth / 2 - hctn.offsetLeft) + 'px';
        };
        vbar.addEventListener('mousedown', () => {
            document.addEventListener('mousemove', vdrag);
        });
        vbar.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', vdrag);
        });
    }
    // countBigClassNum(Tree,count){
    //  if(Tree[0]){
    //   let numReg =  new RegExp( /\d+/)
    //   if(!numReg.test(Tree[0].title)){
    //     $.each(Tree[0].origin.children,function(i,n){
    //       if(n.imageCount) {count+=n.imageCount} else {count +=0}
    //     })
    //     Tree[0].title = ` ${Tree[0].title}   ${count}`
    //   }
    //  }else{
    //   let numReg =  new RegExp( /\d+/)
    //   if(!numReg.test(Tree.title)){
    //   $.each(Tree.origin.children,function(i,n){
    //     if(n.imageCount) {count+=n.imageCount} else {count +=0}
    //   })
    //   Tree.title += `    ${count}`
    //   }
    //  }
    // }
    // loadVisibleLightTree() {
    //   const httpParams = new HttpParams().append('sampleTypeName', this.type.KJG);
    //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
    //     if (HttpResult.succeed(result.code)) {
    //       const visibleLight = result.data.map((samples: any) => {
    //         return new NzTreeNode({
    //           title: samples.data.sampleTypeName + '    ' + samples.imageCount,
    //           imageCount:samples.imageCount,
    //           key: samples.data.id + '',
    //           data: samples,
    //           isLeaf: samples.data.isLeaf,
    //         });
    //       });
    //       // this.titleData = visibleLight;
    //       if (this.nzTreeComponent.getTreeNodeByKey(this.type.KJG)?.isExpanded) {
    //         this.visibleLightRootNode.clearChildren();
    //         this.visibleLightRootNode.addChildren(visibleLight);
    //       }
    //       this.countBigClassNum(this.visibleLight,0)
    //     this.router.navigate(['not-leaf', {'sampleUpId': 'KJG'}], {relativeTo: this.route});
    //     }
    //   });
    // }
    // loadInfraredTree() {
    //   const httpParams = new HttpParams().append('sampleTypeName', this.type.HW);
    //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
    //     if (HttpResult.succeed(result.code)) {
    //       const infrared = result.data.map((samples: any) => {
    //         return new NzTreeNode({
    //           title: samples.data.sampleTypeName + '    ' + samples.imageCount,
    //           key: samples.data.id + '',
    //           data: samples.data,
    //           isLeaf: samples.data.isLeaf,
    //         });
    //       });
    //       this.titleData = infrared;
    //       if (this.nzTreeComponentInfrared.getTreeNodeByKey(this.type.HW)?.isExpanded) {
    //         this.infraredRootNode.clearChildren();
    //         this.infraredRootNode.addChildren(infrared);
    //       }
    //       this.countBigClassNum(this.infrared,0)
    //     }
    //   });
    // }
    // loadSarTree() {
    //   const httpParams = new HttpParams().append('sampleTypeName', this.type.SAR);
    //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
    //     if (HttpResult.succeed(result.code)) {
    //       if (result.data) {
    //         const sar = result.data.map((samples: any) => {
    //           return new NzTreeNode({
    //             title: samples.data.sampleTypeName + '    ' + samples.imageCount,
    //             key: samples.data.id + '',
    //             data: samples.data,
    //             isLeaf: samples.data.isLeaf,
    //           });
    //         });
    //         this.titleData = sar;
    //         if (this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR)?.isExpanded) {
    //           this.sarRootNode.clearChildren();
    //           this.sarRootNode.addChildren(sar);
    //         }
    //         this.countBigClassNum(this.sar,0)
    //       }
    //     }
    //   });
    // }
    // loadRemoteSenseTree() {
    //   const httpParams = new HttpParams().append('sampleTypeName', this.type.YG);
    //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
    //     if (HttpResult.succeed(result.code)) {
    //       if (result.data) {
    //         const remote = result.data.map((samples: any) => {
    //           return new NzTreeNode({
    //             title: samples.data.sampleTypeName + '    ' + samples.imageCount,
    //             key: samples.data.id + '',
    //             data: samples.data,
    //             isLeaf: samples.data.isLeaf,
    //           });
    //         });
    //         // this.titleData = remote;
    //         if (this.nzTreeComponentRemote.getTreeNodeByKey(this.type.YG)?.isExpanded) {
    //           this.remoteSenseRootNode.clearChildren();
    //           this.remoteSenseRootNode.addChildren(remote);
    //         }
    //         this.countBigClassNum(this.remoteSenseRootNode,0)
    //       }
    //     }
    //   });
    // }
    loadStatInfo() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/stat-infos/`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.statInfo = result.data;
            }
        });
    }
    /**
     * 点击事件
     * @param event
     */
    nzEvent(event) {
        if (event.node.isLeaf) {
            // 袁攀 如果是最后一级
            this.router.navigate(['leaf', { 'sampleUpId': event.node.key }], { relativeTo: this.route });
        }
        else {
            // 袁攀 如果不是最后一级
            console.log('不是最后一级');
            this.router.navigate(['not-leaf', { 'sampleUpId': event.node.key }], { relativeTo: this.route });
        }
        let id = event.node.key;
        let node = event.node;
        this.currentNode = event.node;
        //展开叶子的时候去加载子节点
        console.log(event.eventName + '选中的是谁');
        if (event.eventName === 'click') {
            if (!isNaN(parseInt(id))) {
            }
            else {
                switch (id) {
                    case this.type.KJG:
                        this.sampleUpId = 1;
                        // this.mutexType(id);
                        // this.loadVisibleLightTree();
                        this.dataManageService.loadVisibleLightTree(this);
                        return;
                    case this.type.YG:
                        // this.mutexType(id);
                        this.dataManageService.loadRemoteSenseTree(this);
                        this.sampleUpId = 2;
                        return;
                    case this.type.SAR:
                        // this.mutexType(id);
                        this.sampleUpId = 4;
                        this.dataManageService.loadSarTree(this);
                        // this.loadSarTree();
                        return;
                    case this.type.HW:
                        // this.mutexType(id);
                        this.sampleUpId = 3;
                        this.dataManageService.loadInfraredTree(this);
                        // this.loadInfraredTree();
                        return;
                }
            }
            if (event.node.isSelected) {
                this.sampleUpId = parseInt(event.node.key);
            }
            else {
                this.sampleUpId = null;
            }
        }
        //只加载树菜单
        if (event.eventName === 'expand' && event.node.isExpanded) {
            let params;
            if (!isNaN(parseInt(id))) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleUpId', id);
            }
            else {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', id);
            }
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: params }).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    const data = result.data.map((samples) => {
                        return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                            markTitle: samples.data.sampleTypeName,
                            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                            key: samples.data.id + '',
                            data: samples.data,
                            isLeaf: samples.data.isLeaf,
                            id: samples.data.id
                        });
                    });
                    this.titleData = data;
                    if ((node === null || node === void 0 ? void 0 : node.getChildren().length) === 0) {
                        node.addChildren(data);
                    }
                    // this.dataManageService.setVisibleLightRootNode(this.visibleLight)
                }
            });
        }
    }
    //互斥click事件
    mutexType(type) {
        switch (type) {
            case this.type.KJG:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
                return;
            case this.type.SAR:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
                return;
            case this.type.YG:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
                return;
            case this.type.HW:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
                return;
        }
    }
    /**
     * 新增分类
     */
    addSampleType() {
        if (this.sampleUpId) {
            const addModal = this.nzModal.create({
                nzTitle: '新建下级分类',
                nzContent: _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_5__["DataManageAddSampleComponent"],
                nzComponentParams: {
                    'sampleUpId': this.sampleUpId,
                },
                nzOnOk: (addComponent) => {
                    const formValue = addComponent.getAddFormValue();
                    if (formValue) {
                        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, formValue).subscribe((result) => {
                            //重新加载树 通过选择的key去加载树
                            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                                // debugger;
                                // switch (this.sampleUpId) {
                                //   case 1:
                                //this.loadVisibleLightTree();
                                //     addModal.close();
                                //     return;
                                //   case 2:
                                //this.loadRemoteSenseTree();
                                //     addModal.close();
                                //     return;
                                //   case 4:
                                //this.loadSarTree();
                                //     addModal.close();
                                //     return;
                                //   case 3:
                                //this.loadInfraredTree();
                                addModal.close();
                                //     return;
                                // }
                                // console.log(result.data.isLeaf + 'issss');
                                // this.nzTreeComponent.getTreeNodeByKey(this.sampleUpId + '').addChildren([{
                                //   title: result.data.sampleTypeName,
                                //   key: result.data.id + '',
                                //   isLeaf: result.data.isLeaf,
                                // }]);
                                // this.currentNode. ([{
                                //   markTitle: samples.data.sampleTypeName,
                                //   title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                                //   key: samples.data.id + '',
                                //   data: samples.data,
                                //   isLeaf: samples.data.isLeaf,
                                //   id:samples.data.id
                                // }])
                                this.currentNode.addChildren([new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                                        markTitle: result.data.sampleTypeName,
                                        title: result.data.sampleTypeName + '    ' + result.data.imageCount,
                                        key: result.data.id + '',
                                        data: result.data,
                                        isLeaf: result.data.isLeaf,
                                        id: result.data.id
                                    })]);
                                if (this.currentNode.isLeaf) {
                                    this.currentNode.isLeaf = false;
                                }
                                else {
                                    let params;
                                    var id = this.sampleUpId + '';
                                    if (!isNaN(parseInt(id))) {
                                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleUpId', id);
                                    }
                                    else {
                                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', id);
                                    }
                                    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: params }).subscribe((result) => {
                                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                                            const data = result.data.map((samples) => {
                                                return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                                                    markTitle: samples.data.sampleTypeName,
                                                    title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                                                    key: samples.data.id + '',
                                                    data: samples.data,
                                                    isLeaf: samples.data.isLeaf,
                                                    id: samples.data.id
                                                });
                                            });
                                            this.titleData = data;
                                            this.currentNode.clearChildren();
                                            this.currentNode.addChildren(data);
                                        }
                                    });
                                }
                                // addModal.close();
                            }
                            else {
                                this.nzMessage.error('新增失败！');
                            }
                        });
                    }
                    return false;
                },
            });
        }
        else {
            this.nzMessage.error('请先选择父级菜单！');
        }
    }
    delSampleType() {
        if (this.currentNode) {
            this.nzModal.confirm({
                nzTitle: '确定删除吗？',
                nzContent: `将要删除【${this.currentNode.title}】，是否要继续？`,
                nzOnOk: () => {
                    this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, {
                        params: {
                            id: this.currentNode.key
                        }
                    }).subscribe(() => {
                        this.currentNode.remove();
                        this.currentNode = null;
                    });
                }
            });
        }
    }
    editSampleType() {
        if (this.currentNode) {
            // let targerData = this.currentNode.origin.data.data;
            // const nodeData;
            // if (!nodeData.isLeaf) {
            //   targerData = nodeData.data;
            // } else {
            //   targerData = nodeData;
            // }
            // const currentSampleType = nodeData;
            //查询一下具体的对象 免得要更新 树结构
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types/${this.currentNode.key}`).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    const currentSampleType = result.data;
                    console.log('currentSampleType is :', currentSampleType);
                    const addModal = this.nzModal.create({
                        nzTitle: '重命名分类',
                        nzContent: _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_8__["RenameSampleTypeComponent"],
                        nzComponentParams: {
                            sampleTypeName: currentSampleType.sampleTypeName
                        },
                        nzOnOk: (renameComponent) => {
                            const newName = renameComponent.getNewName();
                            if (newName) {
                                this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v2/sample-oss-types/${currentSampleType.id}/sample-type-name`, {
                                    sampleTypeName: newName
                                }).subscribe((result) => {
                                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                                        this.nzMessage.success('修改成功');
                                        this.currentNode.title = newName + '    ' + result.data.imageCount;
                                        addModal.close();
                                        if (result.data.isLeaf) {
                                            this.store.dispatch(new _state_rename_sample_oss_type_action__WEBPACK_IMPORTED_MODULE_9__["RenameSampleOssTypeAction"](newName)).subscribe((aa) => {
                                                console.log('aa is :', aa);
                                            });
                                            // this.router.navigate(['leaf', {'sampleUpId': result.data.id}], {relativeTo: this.route});
                                        }
                                    }
                                    else {
                                        this.nzMessage.error(result.message);
                                    }
                                });
                            }
                            return false;
                        },
                    });
                }
            });
        }
    }
    loadImage(sampleUpId, sampleType) {
        let httpParams;
        if (!sampleType) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('enumTypeName', sampleType);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/type/${sampleUpId}`, { params: httpParams }).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.dataSet = result.data;
            }
        });
    }
    loadSecondaryImage(sampleUpId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('typeId', sampleUpId + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, { params: params }).subscribe((result) => {
            this.secondaryData = result.data.records;
            this.secondaryTotal = result.data.total;
            const box = this.secondaryData.map((s) => {
                return [{ label: '', value: s.id, checked: false, typeId: s.sampleTypeId }];
            });
            this.checkOptionsOne = box;
        });
    }
    operateMgr(flag) {
        this.isOperateButton = flag;
    }
    //图片详情 包括上一张和下一张操作
    amplify(sampleOssId) {
        this.nzModal.create({
            nzWidth: 800,
            nzContent: _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_6__["DataManageDetailComponent"],
            nzFooter: null,
            nzComponentParams: {
                'sampleOssId': sampleOssId,
                'secondaryData': this.secondaryData,
            },
            nzClosable: false,
            nzBodyStyle: {
                'padding': '0',
            },
        });
    }
    /**
     * 全选
     */
    updateAllChecked() {
        if (this.allChecked) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item), { checked: false })];
            });
            this.allChecked = false;
        }
        else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item), { checked: true })];
            });
            this.allChecked = true;
        }
    }
    /**
     * 单选
     */
    updateSingleChecked() {
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOne.every(item => item.checked)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
    /**
     * 获取选中的图片
     */
    getChooseImage() {
        let ids = '';
        this.checkOptionsOne.map((s) => {
            if (s[0].checked) {
                console.log('被选中的id ' + s[0].typeId);
                ids = ids.concat(s[0].value + ',');
            }
        });
        console.log(ids);
        return ids;
    }
    /**
     * 获取选中的上级id
     */
    getChooseTypeId() {
        let sampleTypeId = '';
        this.checkOptionsOne.map((s) => {
            if (s[0].checked) {
                sampleTypeId = s[0].typeId;
            }
        });
        return sampleTypeId;
    }
    /**
     * 删除
     */
    delete() {
        let ids = this.getChooseImage();
        let sampleTypeId = this.getChooseTypeId();
        console.log('this is ' + ids + '------>' + sampleTypeId);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'DELETE');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params: params }).subscribe((result) => {
            console.log(result.code + '   code');
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.loadSecondaryImage(parseInt(sampleTypeId));
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    move() {
        // this.nzMessage.error('');
    }
    lock() {
        let ids = this.getChooseImage();
        let sampleTypeId = this.getChooseTypeId();
        console.log('this is ' + ids + '------>' + sampleTypeId);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'LOCK');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params: params }).subscribe((result) => {
            console.log(result.code + '   code');
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.loadSecondaryImage(parseInt(sampleTypeId));
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    uploadImages() {
        const modal = this.nzModal.create({
            nzWidth: 1000,
            nzContent: _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_7__["DataManageUploadComponent"],
            nzFooter: null,
            nzComponentParams: {
                'sampleUpId': this.sampleUpId
            },
        });
        modal.afterClose.subscribe(() => {
            //重新加载图片
            this.loadSecondaryImage(this.sampleUpId);
        });
    }
}
DataManageComponent.ɵfac = function DataManageComponent_Factory(t) { return new (t || DataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_manage_service__WEBPACK_IMPORTED_MODULE_12__["DataManageService"])); };
DataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageComponent, selectors: [["ng-component"]], viewQuery: function DataManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponentSar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponentRemote = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponentInfrared = _t.first);
    } }, decls: 23, vars: 8, consts: [["id", "hContainer", 1, "flex-row"], ["id", "treeBox", 1, "tree-box", "flex-column"], [1, "tree-top", 2, "text-align", "left"], [1, "tree-top-title"], [1, "tree-top-add", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"], [2, "padding", "10px", "overflow", "auto"], ["nzShowLine", "", "nzAsyncData", "", 2, "font-size", "18px", "color", "#65CAFF", "line-height", "28px", 3, "nzData", "nzShowIcon", "nzClick", "nzExpandChange"], ["nzTreeComponent", ""], ["nzTreeComponentSar", ""], ["nzTreeComponentRemote", ""], ["nzTreeComponentInfrared", ""], ["id", "vDragbar", 1, "vertical-dragbar"], [1, "main"]], template: function DataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u6240\u6709\u5206\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageComponent_Template_span_click_5_listener() { return ctx.editSampleType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageComponent_Template_span_click_7_listener() { return ctx.addSampleType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageComponent_Template_span_click_9_listener() { return ctx.delSampleType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-tree", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_12_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_12_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-tree", 9, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_14_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_14_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-tree", 9, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_16_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_16_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-tree", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_18_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_18_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.visibleLight)("nzShowIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.sar)("nzShowIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.remoteSense)("nzShowIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.infrared)("nzShowIcon", false);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-tree-show-line .ant-tree-switcher {\n  background: #1890ff;\n}\n[_nghost-%COMP%]     .ant-pagination {\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     .ant-tree-title {\n  color: #ffffff;\n  word-break: keep-all;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .ant-tree-node-selected.active {\n  color: #275081;\n}\n[_nghost-%COMP%]     .ant-tree-title .ng-star-inserted {\n  color: #083899;\n}\n[_nghost-%COMP%]     .ant-tree-title.active {\n  color: #083899;\n}\n[_nghost-%COMP%]     .ant-tree-title.active {\n  color: red;\n}\n[_nghost-%COMP%]     .ant-tree-show-line .ant-tree-switcher {\n  background: #08172e !important;\n  color: #295995;\n}\n[_nghost-%COMP%]     .ant-tree-indent-unit::before {\n  border-color: #295995;\n}\n[_nghost-%COMP%]     .locked-image {\n  border: 2px solid red;\n}\n[_nghost-%COMP%]     .ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {\n  background-color: #083899;\n}\n[_nghost-%COMP%]     .ant-tree .ant-tree-node-content-wrapper:hover {\n  background-color: #083899;\n}\n\n.vertical-dragbar[_ngcontent-%COMP%] {\n  padding: 3px;\n  cursor: col-resize;\n  background: #0b2b54 url('vbar.png') center center no-repeat;\n}\n.vertical-dragbar[_ngcontent-%COMP%]:hover {\n  background-color: #304aac;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUNBSjtBRFFBO0VBRUksbUJBQUE7QUNQSjtBREtBO0VBVUksY0FBQTtBQ1pKO0FERUE7RUFjSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ2JKO0FESEE7RUF3QkksY0FBQTtBQ2xCSjtBRE5BO0VBNEJJLGNBQUE7QUNuQko7QURUQTtFQWdDSSxjQUFBO0FDcEJKO0FEWkE7RUFvQ0csVUFBQTtBQ3JCSDtBRGZBO0VBeUNJLDhCQUFBO0VBQ0EsY0FBQTtBQ3ZCSjtBRG5CQTtFQThDSSxxQkFBQTtBQ3hCSjtBRHRCQTtFQWtESSxxQkFBQTtBQ3pCSjtBRHpCQTtFQXVESSx5QkFBQTtBQzNCSjtBRDVCQTtFQTBESSx5QkFBQTtBQzNCSjtBQUNBLFNBQVM7QUQrQlQ7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtBQzdCRDtBRCtCQTtFQUNDLHlCQUFBO0FDN0JEIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgPiBkaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC8vbnotdHJlZSB7XG4gIC8vICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy99XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5hbnQtdHJlZS1zaG93LWxpbmUgLmFudC10cmVlLXN3aXRjaGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xuICB9XG5cbiAgLmFudC10cmVlIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xuICBcbiAgfVxuICAuYW50LXBhZ2luYXRpb257XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYW50LXRyZWUtdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLy8gLmFudC10cmVlLXRpdGxlOmhvdmVye1xuICAvLyAgIGJhY2tncm91bmQ6ICMxODkwZmY7XG4gXG4gIC8vIH1cblxuICAuYW50LXRyZWUtbm9kZS1zZWxlY3RlZC5hY3RpdmUge1xuICAgIGNvbG9yOiAjMjc1MDgxO1xuICB9XG5cbiAgLmFudC10cmVlLXRpdGxlIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgICBjb2xvcjogIzA4Mzg5OTtcbiAgfVxuXG4gIC5hbnQtdHJlZS10aXRsZS5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDgzODk5O1xuICB9XG5cbiAgLmFudC10cmVlLXRpdGxlLmFjdGl2ZXtcbiAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAuYW50LXRyZWUtc2hvdy1saW5lIC5hbnQtdHJlZS1zd2l0Y2hlciB7XG4gICAgLy9iYWNrZ3JvdW5kOiByZ2IoNDEsIDg5LCAxNDkpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiKDgsIDIzLCA0NikgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDQxLCA4OSwgMTQ5KTtcbiAgfVxuXG4gIC5hbnQtdHJlZS1pbmRlbnQtdW5pdDo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig0MSwgODksIDE0OSk7XG4gIH1cblxuICAubG9ja2VkLWltYWdlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG5cbiAgfVxuXG4gIC5hbnQtdHJlZSAuYW50LXRyZWUtbm9kZS1jb250ZW50LXdyYXBwZXIuYW50LXRyZWUtbm9kZS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4Mzg5OTtcbiAgfVxuICAuYW50LXRyZWUgLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODM4OTkgO1xuICB9XG59XG5cbi8qIOWeguebtGJhciovXG4udmVydGljYWwtZHJhZ2JhciB7XG5cdHBhZGRpbmc6IDNweDtcblx0Y3Vyc29yOiBjb2wtcmVzaXplO1xuXHRiYWNrZ3JvdW5kOiAjMGIyYjU0IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ZiYXIucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbn1cbi52ZXJ0aWNhbC1kcmFnYmFyOmhvdmVye1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0YWFjO1xufVxuIiwiOmhvc3QgPiBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlLXNob3ctbGluZSAuYW50LXRyZWUtc3dpdGNoZXIge1xuICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdHJlZS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUtbm9kZS1zZWxlY3RlZC5hY3RpdmUge1xuICBjb2xvcjogIzI3NTA4MTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUtdGl0bGUgLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBjb2xvcjogIzA4Mzg5OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUtdGl0bGUuYWN0aXZlIHtcbiAgY29sb3I6ICMwODM4OTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlLXRpdGxlLmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlLXNob3ctbGluZSAuYW50LXRyZWUtc3dpdGNoZXIge1xuICBiYWNrZ3JvdW5kOiAjMDgxNzJlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjk1OTk1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdHJlZS1pbmRlbnQtdW5pdDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjk1OTk1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sb2NrZWQtaW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlIC5hbnQtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlci5hbnQtdHJlZS1ub2RlLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4Mzg5OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUgLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4Mzg5OTtcbn1cbi8qIOWeguebtGJhciovXG4udmVydGljYWwtZHJhZ2JhciB7XG4gIHBhZGRpbmc6IDNweDtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBiYWNrZ3JvdW5kOiAjMGIyYjU0IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ZiYXIucG5nKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbn1cbi52ZXJ0aWNhbC1kcmFnYmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNGFhYztcbn1cbiJdfQ== */", "[_nghost-%COMP%]     .tree-box {\n  flex-basis: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .tree-top {\n  height: 44px;\n  line-height: 44px;\n  padding-left: 20px;\n  font-size: 18px;\n  text-align: center;\n  color: #fff;\n  border-bottom: 3px solid;\n  border-image: linear-gradient(90deg, #0b2b55, #2496c6, #0b2b55) 30 30;\n}\n[_nghost-%COMP%]     .tree-top-add {\n  float: right;\n  font-size: 16px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .tree {\n  flex: 1;\n  color: #0282ac;\n  padding: 10px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .main {\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .analyze {\n  flex-basis: 114px;\n  align-items: center;\n  padding-top: 10px;\n  padding-bottom: 16px;\n  justify-content: space-evenly;\n  background: url('bg04.png') repeat-x 0 100%, url('bg06.png') repeat 0 0;\n}\n[_nghost-%COMP%]     .analyze-item {\n  flex-basis: 144px;\n  height: 120px;\n  text-align: center;\n  background: url('bg03.png') no-repeat 0 0 / 100%;\n  width: 220px;\n}\n[_nghost-%COMP%]     .analyze-item-title {\n  height: 36px;\n  line-height: 36px;\n  color: #23a6ec;\n}\n[_nghost-%COMP%]     .analyze-item-value {\n  height: 52px;\n  line-height: 52px;\n  font-size: 14px;\n  color: #01effd;\n}\n[_nghost-%COMP%]     .analyze-item-key {\n  color: #ffffff;\n  font-size: 24px;\n  margin: 0 5px;\n}\n[_nghost-%COMP%]     .pictures {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-bg-x {\n  background: url('bg04.png') repeat-x 0 100%;\n}\n[_nghost-%COMP%]     .picture-bg-y {\n  background: url('bg05.png') repeat-y 100% 0;\n}\n[_nghost-%COMP%]     .picture-left {\n  flex-basis: 41%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-left-top {\n  flex-basis: 60%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-left-bottom {\n  flex-basis: 40%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right {\n  flex-basis: 59%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right-top {\n  flex-basis: 40%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right-top-item, [_nghost-%COMP%]     .picture-right-middle-item, [_nghost-%COMP%]     .picture-right-bottom-item {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right-bottom, [_nghost-%COMP%]     .picture-right-middle {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-title {\n  line-height: 30px;\n  color: #fff;\n  font-size: 24px;\n  padding: 0 10px;\n}\n[_nghost-%COMP%]     .picture-quantity {\n  color: #00eb55;\n  font-size: 18px;\n  margin-left: 5px;\n}\n[_nghost-%COMP%]     .picture-item {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  padding: 10px 11px 11px 5px;\n  background: url('bg06.png') repeat-y 0 0;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .leaf-picture-item {\n  height: 80%;\n}\n[_nghost-%COMP%]     .ant-pagination-options-quick-jumper {\n  color: #Fff;\n}\n[_nghost-%COMP%]     .picture {\n  width: 40px;\n  height: 40px;\n  margin: 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .picture-m {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .picture-box {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n}\n[_nghost-%COMP%]     .picture-mark {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .search-form {\n  padding: 10px 0;\n  align-items: center;\n}\n[_nghost-%COMP%]     .search-form-title {\n  flex: 1;\n  color: #fff;\n}\n[_nghost-%COMP%]     .search-form-quantity {\n  color: #4e6b91;\n  margin-left: 5px;\n}\n[_nghost-%COMP%]     .detail {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-image {\n  flex-basis: 70%;\n  align-items: center;\n  border-bottom: 1px dashed #1f60c2;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-box {\n  flex: 1;\n  height: 100%;\n  margin: 0 10px;\n}\n[_nghost-%COMP%]     .pre, [_nghost-%COMP%]     .next {\n  width: 30px;\n  height: auto;\n}\n[_nghost-%COMP%]     .target-image {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .target-quantity {\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .detail-info {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-box {\n  flex: 1;\n  height: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  color: #25b3e4;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-type {\n  flex-basis: 30px;\n  align-items: center;\n  width: 100%;\n  padding: 0 20px;\n  background: url('bg08.png') no-repeat 0 0 / 100% 100%;\n}\n[_nghost-%COMP%]     .detail-info-param {\n  flex: 1;\n}\n[_nghost-%COMP%]     .is_mark {\n  color: #27f069;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZXIubGVzcyIsIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZXIubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FESkE7RUFTSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHFFQUFBO0FDRko7QURkQTtFQXFCSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEcEJBO0VBNEJJLE9BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRDNCQTtFQW9DSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTko7QURoQ0E7RUEwQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVFQUFBO0FDUEo7QUR4Q0E7RUFtREksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7QUNSSjtBRC9DQTtFQTJESSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDVEo7QURwREE7RUFpRUksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNWSjtBRDFEQTtFQXdFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNYSjtBRC9EQTtFQThFSSxPQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRG5FQTtFQW1GSSwyQ0FBQTtBQ2JKO0FEdEVBO0VBdUZJLDJDQUFBO0FDZEo7QUR6RUE7RUEyRkksZUFBQTtFQUNBLGdCQUFBO0FDZko7QUQ3RUE7RUFnR0ksZUFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEakZBO0VBcUdJLGVBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRHJGQTtFQTBHSSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QUR6RkE7RUErR0ksZUFBQTtFQUNBLGdCQUFBO0FDbkJKO0FEN0ZBOzs7RUFvSEksT0FBQTtFQUNBLGdCQUFBO0FDbEJKO0FEbkdBOztFQXlISSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QUR4R0E7RUE4SEksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNuQko7QUQ5R0E7RUFxSUksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBRG5IQTtFQTJJSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQ3JCSjtBRDVIQTtFQXFKSSxXQUFBO0FDdEJKO0FEL0hBO0VBd0pJLFdBQUE7QUN0Qko7QURsSUE7RUE0SkksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3ZCSjtBRHhJQTtFQW1LSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN4Qko7QUQ3SUE7RUF5S0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN6Qko7QURuSkE7RUFpTEksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzNCSjtBRDNKQTtFQTBMSSxlQUFBO0VBQ0EsbUJBQUE7QUM1Qko7QUQvSkE7RUErTEksT0FBQTtFQUNBLFdBQUE7QUM3Qko7QURuS0E7RUFvTUksY0FBQTtFQUNBLGdCQUFBO0FDOUJKO0FEdktBO0VBeU1JLE9BQUE7RUFDQSxnQkFBQTtBQy9CSjtBRDNLQTtFQThNSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDaENKO0FEakxBO0VBcU5JLE9BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ2pDSjtBRHRMQTs7RUEyTkksV0FBQTtFQUNBLFlBQUE7QUNqQ0o7QUQzTEE7RUFnT0ksT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2xDSjtBRGpNQTtFQXVPSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDbkNKO0FEdE1BO0VBNk9JLGVBQUE7RUFDQSxnQkFBQTtBQ3BDSjtBRDFNQTtFQWtQSSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNyQ0o7QURsTkE7RUEyUEksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUN0Q0o7QUR6TkE7RUFtUUksT0FBQTtBQ3ZDSjtBRDVOQTtFQXVRSSxjQUFBO0FDeENKIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZXIubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC50cmVlLWJveCB7XG4gICAgZmxleC1iYXNpczogMzAwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzE0OWZmZjtcbiAgfVxuXG4gIC50cmVlLXRvcCB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMGIyYjU1LCMyNDk2YzYsIzBiMmI1NSkgMzAgMzAgO1xuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzEwLnBuZycpIG5vLXJlcGVhdCAwIDEwMCU7XG4gIH1cblxuICAudHJlZS10b3AtYWRkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAudHJlZSB7XG4gICAgZmxleDogMTtcbiAgICBjb2xvcjogIzAyODJhYztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmFuYWx5emUge1xuICAgIGZsZXgtYmFzaXM6IDExNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDQucG5nJykgcmVwZWF0LXggMCAxMDAlLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwNi5wbmcnKSByZXBlYXQgMCAwO1xuICB9XG5cbiAgLmFuYWx5emUtaXRlbSB7XG4gICAgZmxleC1iYXNpczogMTQ0cHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDMucG5nJykgbm8tcmVwZWF0IDAgMCB+XCIvXCIgMTAwJTtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cblxuICAuYW5hbHl6ZS1pdGVtLXRpdGxlIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6ICMyM2E2ZWM7XG4gIH1cblxuICAuYW5hbHl6ZS1pdGVtLXZhbHVlIHtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDFlZmZkO1xuICB9XG5cbiAgLmFuYWx5emUtaXRlbS1rZXkge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG5cbiAgLnBpY3R1cmVzIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1iZy14IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwNC5wbmcnKSByZXBlYXQteCAwIDEwMCU7XG4gIH1cblxuICAucGljdHVyZS1iZy15IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwNS5wbmcnKSByZXBlYXQteSAxMDAlIDA7XG4gIH1cblxuICAucGljdHVyZS1sZWZ0IHtcbiAgICBmbGV4LWJhc2lzOiA0MSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5waWN0dXJlLWxlZnQtdG9wIHtcbiAgICBmbGV4LWJhc2lzOiA2MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5waWN0dXJlLWxlZnQtYm90dG9tIHtcbiAgICBmbGV4LWJhc2lzOiA0MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5waWN0dXJlLXJpZ2h0IHtcbiAgICBmbGV4LWJhc2lzOiA1OSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5waWN0dXJlLXJpZ2h0LXRvcCB7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1yaWdodC10b3AtaXRlbSwgLnBpY3R1cmUtcmlnaHQtbWlkZGxlLWl0ZW0sIC5waWN0dXJlLXJpZ2h0LWJvdHRvbS1pdGVtIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1yaWdodC1ib3R0b20sIC5waWN0dXJlLXJpZ2h0LW1pZGRsZSB7XG4gICAgZmxleC1iYXNpczogMzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gIC5waWN0dXJlLXF1YW50aXR5IHtcbiAgICBjb2xvcjogIzAwZWI1NTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuXG4gIC5waWN0dXJlLWl0ZW0ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxMHB4IDExcHggMTFweCA1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDYucG5nJykgcmVwZWF0LXkgMCAwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICBcbiAgfVxuICAubGVhZi1waWN0dXJlLWl0ZW17XG4gICAgaGVpZ2h0OiA4MCU7XG4gIH1cbiAgLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVye1xuICAgIGNvbG9yOiAjRmZmO1xuICB9XG5cbiAgLnBpY3R1cmUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAucGljdHVyZS1tIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnBpY3R1cmUtYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICBcbiAgfVxuXG4gIC5waWN0dXJlLW1hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5zZWFyY2gtZm9ybSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc2VhcmNoLWZvcm0tdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuc2VhcmNoLWZvcm0tcXVhbnRpdHkge1xuICAgIGNvbG9yOiAjNGU2YjkxO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAuZGV0YWlsIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZGV0YWlsLWltYWdlIHtcbiAgICBmbGV4LWJhc2lzOiA3MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMxZjYwYzI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5kZXRhaWwtYm94IHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuXG4gIC5wcmUsIC5uZXh0IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAudGFyZ2V0LWltYWdlIHtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50YXJnZXQtcXVhbnRpdHkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmRldGFpbC1pbmZvIHtcbiAgICBmbGV4LWJhc2lzOiAzMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mby1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgY29sb3I6ICMyNWIzZTQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mby10eXBlIHtcbiAgICBmbGV4LWJhc2lzOiAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA4LnBuZycpIG5vLXJlcGVhdCAwIDAgflwiL1wiIDEwMCUgMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mby1wYXJhbSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5pc19tYXJrIHtcbiAgICBjb2xvcjogIzI3ZjA2OTtcbiAgfVxuXG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLnRyZWUtYm94IHtcbiAgZmxleC1iYXNpczogMzAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAudHJlZS10b3Age1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBiMmI1NSwgIzI0OTZjNiwgIzBiMmI1NSkgMzAgMzA7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyZWUtdG9wLWFkZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAudHJlZSB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjMDI4MmFjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLm1haW4ge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbmFseXplIHtcbiAgZmxleC1iYXNpczogMTE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA0LnBuZycpIHJlcGVhdC14IDAgMTAwJSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDYucG5nJykgcmVwZWF0IDAgMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5hbHl6ZS1pdGVtIHtcbiAgZmxleC1iYXNpczogMTQ0cHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDMucG5nJykgbm8tcmVwZWF0IDAgMCAvIDEwMCU7XG4gIHdpZHRoOiAyMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5hbHl6ZS1pdGVtLXRpdGxlIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICMyM2E2ZWM7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFuYWx5emUtaXRlbS12YWx1ZSB7XG4gIGhlaWdodDogNTJweDtcbiAgbGluZS1oZWlnaHQ6IDUycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMWVmZmQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFuYWx5emUtaXRlbS1rZXkge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDAgNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlcyB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtYmcteCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA0LnBuZycpIHJlcGVhdC14IDAgMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1iZy15IHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDUucG5nJykgcmVwZWF0LXkgMTAwJSAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLWxlZnQge1xuICBmbGV4LWJhc2lzOiA0MSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtbGVmdC10b3Age1xuICBmbGV4LWJhc2lzOiA2MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtbGVmdC1ib3R0b20ge1xuICBmbGV4LWJhc2lzOiA0MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtcmlnaHQge1xuICBmbGV4LWJhc2lzOiA1OSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtcmlnaHQtdG9wIHtcbiAgZmxleC1iYXNpczogNDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXJpZ2h0LXRvcC1pdGVtLFxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXJpZ2h0LW1pZGRsZS1pdGVtLFxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXJpZ2h0LWJvdHRvbS1pdGVtIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1yaWdodC1ib3R0b20sXG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtcmlnaHQtbWlkZGxlIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1xdWFudGl0eSB7XG4gIGNvbG9yOiAjMDBlYjU1O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtaXRlbSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweCAxMXB4IDExcHggNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwNi5wbmcnKSByZXBlYXQteSAwIDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLmxlYWYtcGljdHVyZS1pdGVtIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIHtcbiAgY29sb3I6ICNGZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLW0ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNlYXJjaC1mb3JtIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWFyY2gtZm9ybS10aXRsZSB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWFyY2gtZm9ybS1xdWFudGl0eSB7XG4gIGNvbG9yOiAjNGU2YjkxO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwtaW1hZ2Uge1xuICBmbGV4LWJhc2lzOiA3MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzFmNjBjMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWJveCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnByZSxcbjpob3N0IDo6bmctZGVlcCAubmV4dCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhcmdldC1pbWFnZSB7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YXJnZXQtcXVhbnRpdHkge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwtaW5mbyB7XG4gIGZsZXgtYmFzaXM6IDMwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWluZm8tYm94IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sb3I6ICMyNWIzZTQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbC1pbmZvLXR5cGUge1xuICBmbGV4LWJhc2lzOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwOC5wbmcnKSBuby1yZXBlYXQgMCAwIC8gMTAwJSAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwtaW5mby1wYXJhbSB7XG4gIGZsZXg6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLmlzX21hcmsge1xuICBjb2xvcjogIzI3ZjA2OTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage.component.html',
                styleUrls: ['./data-manage.component.less', './data-manager.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"] }, { type: _data_manage_service__WEBPACK_IMPORTED_MODULE_12__["DataManageService"] }]; }, { nzTreeComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponent', { static: false }]
        }], nzTreeComponentSar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponentSar', { static: false }]
        }], nzTreeComponentRemote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponentRemote', { static: false }]
        }], nzTreeComponentInfrared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponentInfrared', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage.module.ts ***!
  \*********************************************************/
/*! exports provided: DataManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageModule", function() { return DataManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-manage.component */ "./src/app/pages/data-manage/data-manage.component.ts");
/* harmony import */ var _data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manage-routing.module */ "./src/app/pages/data-manage/data-manage-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-manage-add-sample.component */ "./src/app/pages/data-manage/data-manage-add-sample.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-manage-detail.component */ "./src/app/pages/data-manage/data-manage-detail.component.ts");
/* harmony import */ var _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-manage-upload.component */ "./src/app/pages/data-manage/data-manage-upload.component.ts");
/* harmony import */ var _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-leaf/not-leaf.data-manage.component */ "./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts");
/* harmony import */ var _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaf/leaf.data-manage.component */ "./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts");
/* harmony import */ var _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.data-manage.component */ "./src/app/pages/data-manage/detail/detail.data-manage.component.ts");
/* harmony import */ var _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.data-manage.component */ "./src/app/pages/data-manage/edit/edit.data-manage.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/app-common.module */ "./src/app/core/app-common.module.ts");
/* harmony import */ var _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rename-sample-type.component */ "./src/app/pages/data-manage/rename-sample-type.component.ts");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");


















const APP_COMPONENTS = [_data_manage_component__WEBPACK_IMPORTED_MODULE_1__["DataManageComponent"], _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_4__["DataManageAddSampleComponent"], _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_7__["DataManageDetailComponent"],
    _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_8__["DataManageUploadComponent"], _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_9__["NotLeafDataManageComponent"], _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_10__["LeafDataManageComponent"], _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_12__["EditDataManageComponent"],
    _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_11__["DetailDataManageComponent"], _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_15__["RenameSampleTypeComponent"]];
const NG_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_13__["IconsProviderModule"]];
const NZ_MODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzCheckboxModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzUploadModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDividerModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzProgressModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzPaginationModule"]];
class DataManageModule {
}
DataManageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataManageModule });
DataManageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataManageModule_Factory(t) { return new (t || DataManageModule)(); }, providers: [_data_manage_service__WEBPACK_IMPORTED_MODULE_16__["DataManageService"]], imports: [[_data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataManageRoutingModule"], ...NG_MODULES, ...NZ_MODULES, _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataManageModule, { declarations: [_data_manage_component__WEBPACK_IMPORTED_MODULE_1__["DataManageComponent"], _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_4__["DataManageAddSampleComponent"], _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_7__["DataManageDetailComponent"],
        _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_8__["DataManageUploadComponent"], _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_9__["NotLeafDataManageComponent"], _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_10__["LeafDataManageComponent"], _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_12__["EditDataManageComponent"],
        _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_11__["DetailDataManageComponent"], _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_15__["RenameSampleTypeComponent"]], imports: [_data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataManageRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_13__["IconsProviderModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzCheckboxModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzUploadModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDividerModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzProgressModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzPaginationModule"], _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataManageRoutingModule"], ...NG_MODULES, ...NZ_MODULES, _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"]],
                declarations: [...APP_COMPONENTS],
                providers: [_data_manage_service__WEBPACK_IMPORTED_MODULE_16__["DataManageService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage.service.ts ***!
  \**********************************************************/
/*! exports provided: DataManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageService", function() { return DataManageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class DataManageService {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.upLoadZipIsVisible = true;
        this.visibleLight = [];
        this.infrared = [];
        this.sar = [];
        this.remoteSense = [];
        this.titleData = [];
        this.type = { KJG: 'KJG', HW: 'HW', SAR: 'SAR', YG: 'YG' };
        //是否最后一级
        this.isEndType = true;
        this.secondaryTotal = 0;
        this.isOperateButton = false;
        this.checkOptionsOne = [];
        //选中类型
        this.chooseType = false;
        this.visibleLightRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
            title: '可见光',
            key: 'KJG',
            expanded: true,
            isSelected: true,
        });
        this.visibleLight.push(this.visibleLightRootNode);
        this.infraredRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
            title: '红外',
            key: 'HW',
            expanded: true,
        });
        this.infrared.push(this.infraredRootNode);
        this.sarRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
            title: 'SAR',
            key: 'SAR',
            expanded: true,
        });
        this.sar.push(this.sarRootNode);
        this.remoteSenseRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
            title: '遥感',
            key: 'YG',
            expanded: true,
        });
        this.remoteSense.push(this.remoteSenseRootNode);
    }
    countBigClassNum(Tree, count) {
        let numReg = new RegExp(/\d+/);
        var that = this;
        if (!numReg.test(Tree[0].title)) {
            $.each(Tree[0].children, function (i, n) {
                count += that.getTitleNum(n.title);
                //  if(n.imageCount) {count+=n.imageCount} else {count +=0}
            });
            Tree[0].title = ` ${Tree[0].title}   ${count}`;
        }
    }
    loadSarTree(dataManage) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.SAR);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                if (result.data) {
                    const sar = result.data.map((samples) => {
                        return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
                            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                            key: samples.data.id + '',
                            data: samples.data,
                            isLeaf: samples.data.isLeaf,
                        });
                    });
                    this.titleData = sar;
                    if ((_a = dataManage.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                        this.sarRootNode.clearChildren();
                        this.sarRootNode.addChildren(sar);
                    }
                    this.countBigClassNum(this.sar, 0);
                }
            }
        });
    }
    loadRemoteSenseTree(dataManage) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.YG);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                if (result.data) {
                    const remote = result.data.map((samples) => {
                        return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
                            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                            key: samples.data.id + '',
                            data: samples.data,
                            isLeaf: samples.data.isLeaf,
                        });
                    });
                    // this.titleData = remote;
                    if ((_a = dataManage.nzTreeComponentRemote.getTreeNodeByKey(this.type.YG)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                        this.remoteSenseRootNode.clearChildren();
                        this.remoteSenseRootNode.addChildren(remote);
                    }
                    this.countBigClassNum(this.remoteSense, 0);
                }
            }
        });
    }
    loadInfraredTree(dataManage) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.HW);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                const infrared = result.data.map((samples) => {
                    return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
                        title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                        key: samples.data.id + '',
                        data: samples.data,
                        isLeaf: samples.data.isLeaf,
                    });
                });
                // this.titleData = infrared;
                if ((_a = dataManage.nzTreeComponentInfrared.getTreeNodeByKey(this.type.HW)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                    this.infraredRootNode.clearChildren();
                    this.infraredRootNode.addChildren(infrared);
                }
                this.countBigClassNum(this.infrared, 0);
            }
        });
    }
    loadVisibleLightTree(dataManage) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.KJG);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                const visibleLight = result.data.map((samples) => {
                    return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeNode"]({
                        title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                        imageCount: samples.imageCount,
                        key: samples.data.id + '',
                        data: samples,
                        isLeaf: samples.data.isLeaf,
                    });
                });
                if ((_a = dataManage.nzTreeComponent.getTreeNodeByKey(this.type.KJG)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                    this.visibleLightRootNode.clearChildren();
                    this.visibleLightRootNode.addChildren(visibleLight);
                }
                this.countBigClassNum(this.visibleLight, 0);
                dataManage.router.navigate(['not-leaf', { 'sampleUpId': 'KJG' }], { relativeTo: dataManage.route });
            }
        });
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    trimSpace(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == "" || array[i] == null || typeof (array[i]) == "undefined") {
                array.splice(i, 1);
                i = i - 1;
            }
        }
        return array;
    }
    getTitleNum(str) {
        return str.match(/\s\d+/)[0].trim() * 1;
    }
    serchImageCount(samplePath, title, tree) {
        for (let index = 0; index < samplePath.length; index++) {
            const element = samplePath[index];
            if (element == title && element != "可见光" && element != "SAR" && element != "遥感" && element != "红外") {
                let key = tree.parentNode.key;
                let params;
                switch (tree.parentNode.key) {
                    case 'KJG':
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', key);
                        break;
                    case 'SAR':
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', key);
                        break;
                    case 'HY':
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', key);
                        break;
                    case 'YG':
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', key);
                        break;
                    default:
                        var k = key * 1;
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleUpId', k);
                        break;
                }
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: params }).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                        for (let index = 0; index < result.data.length; index++) {
                            let data = result.data[index].data;
                            if (data.sampleTypeName == title) {
                                tree.imageCount = result.data[index].imageCount;
                                // var String1 = data.samplePath.split("/")[0]
                            }
                        }
                        tree.title = `${element}   ${tree.imageCount}`;
                    }
                });
            }
        }
        if (samplePath[0] == "可见光" || samplePath[0] == "红外") {
            this.upLoadZipIsVisible = true;
        }
        else {
            this.upLoadZipIsVisible = false;
        }
    }
    changeTree(tree, samplePath) {
        let title = tree.title.replace(/\s\d+/, "").trim();
        this.serchImageCount(samplePath, title, tree);
        for (let index = 0; index < tree.children.length; index++) {
            const element = tree.children[index];
            this.changeTree(element, samplePath);
        }
    }
    delect(data1, data2) {
        let samplePath = this.trimSpace(data2.samplePath.split('/'));
        // samplePath.shift()
        this.num = data1;
        this.name = samplePath[samplePath.length - 1];
        let httpParams;
        // visibleLight infrared sar remoteSense
        if (samplePath[0] == "可见光") {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.KJG);
            this.changeTree(this.visibleLight[0], samplePath);
        }
        else if (samplePath[0] == "SAR") {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.SAR);
            this.changeTree(this.sar[0], samplePath);
        }
        else if (samplePath[0] == "遥感") {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.YG);
            this.changeTree(this.remoteSense[0], samplePath);
        }
        else if (samplePath[0] == "红外") {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeName', this.type.HW);
            this.changeTree(this.infrared[0], samplePath);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                if (samplePath[0] == "可见光") {
                    let count = 0;
                    for (let index = 0; index < result.data.length; index++) {
                        const element = result.data[index];
                        for (let j = 0; j < this.visibleLight[0].children.length; j++) {
                            const element1 = this.visibleLight[0].children[j];
                            let title = element1.title.replace(/\s\d+/, "").trim();
                            if (element.data.sampleTypeName == title) {
                                element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`;
                            }
                        }
                        count += element.imageCount;
                    }
                    this.visibleLight[0].title = `${samplePath[0]}    ${count}`;
                }
                else if (samplePath[0] == "SAR") {
                    let count = 0;
                    for (let index = 0; index < result.data.length; index++) {
                        const element = result.data[index];
                        for (let j = 0; j < this.sar[0].children.length; j++) {
                            const element1 = this.sar[0].children[j];
                            let title = element1.title.replace(/\s\d+/, "").trim();
                            if (element.data.sampleTypeName == title) {
                                element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`;
                            }
                        }
                        count += element.imageCount;
                    }
                    this.sar[0].title = `${samplePath[0]}    ${count}`;
                }
                else if (samplePath[0] == "遥感") {
                    let count = 0;
                    for (let index = 0; index < result.data.length; index++) {
                        const element = result.data[index];
                        for (let j = 0; j < this.remoteSense[0].children.length; j++) {
                            const element1 = this.remoteSense[0].children[j];
                            let title = element1.title.replace(/\s\d+/, "").trim();
                            if (element.data.sampleTypeName == title) {
                                element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`;
                            }
                        }
                        count += element.imageCount;
                    }
                    this.remoteSense[0].title = `${samplePath[0]}    ${count}`;
                }
                else if (samplePath[0] == "红外") {
                    let count = 0;
                    for (let index = 0; index < result.data.length; index++) {
                        const element = result.data[index];
                        for (let j = 0; j < this.infrared[0].children.length; j++) {
                            const element1 = this.infrared[0].children[j];
                            let title = element1.title.replace(/\s\d+/, "").trim();
                            if (element.data.sampleTypeName == title) {
                                element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`;
                            }
                        }
                        count += element.imageCount;
                    }
                    this.infrared[0].title = `${samplePath[0]}    ${count}`;
                }
            }
        });
    }
}
DataManageService.ɵfac = function DataManageService_Factory(t) { return new (t || DataManageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
DataManageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataManageService, factory: DataManageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/detail/detail.data-manage.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/data-manage/detail/detail.data-manage.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDataManageComponent", function() { return DetailDataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");












const _c0 = ["lineEchart"];
function DetailDataManageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailDataManageComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setFaceModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8BBE\u7F6E\u4E3A\u4EBA\u8138\u6A21\u677F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailDataManageComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeFaceModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5220\u9664\u4EBA\u8138\u6A21\u677F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailDataManageComponent {
    constructor(route, http, nzMessage, nzModal, router, dataManageService) {
        this.route = route;
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.router = router;
        this.dataManageService = dataManageService;
        this.isFaceModel = false;
        this.isExist = false;
    }
    ngOnInit() {
        // 从路由中获取当前图片这一层级的
        this.route.paramMap.subscribe((params) => {
            if (params.has('imageId')) {
                this.imageId = +params.get('imageId');
                console.log('执行-->');
            }
        });
        this.updateBrowseNumber();
        this.loadImages();
        this.loadImageCount();
    }
    ngAfterViewInit() {
    }
    saveRect() {
        const reqBody = {};
        var that = this;
        let featuresArr = [];
        $.each(this.aiLabel.layers[1].features, function (i, rect) {
            featuresArr.push(rect);
        });
        $.each(featuresArr, function (i, rect) {
            rect.props.text = that.aiLabel.layers[2].texts[i].textInfo.text;
            rect.id = that.sampleOssFile.sampleTypeId;
            rect.props.name = that.sampleOssFile.sampleTypeId;
            delete rect.layer;
            rect.shape.x = rect.shape.x / that.mutliple;
            rect.shape.y = rect.shape.y / that.mutliple;
            rect.shape.width = rect.shape.width / that.mutliple;
            rect.shape.height = rect.shape.height / that.mutliple;
            // let xmin = parseInt(rect.shape.x) 
            // let ymin = parseInt(rect.shape.y) ;
            // let xmax = parseInt(rect.shape.x) + parseInt(rect.shape.width);
            // let ymax = parseInt(rect.shape.y) + parseInt(rect.shape.height);
            //   reqBody[rect.id] = {
            //     "xmin": xmin,
            //     "ymin": ymin,
            //     "xmax": xmax,
            //     "ymax": ymax
            //   }
        });
        let saveData = JSON.stringify(featuresArr);
        let sampleOssTypeId = featuresArr[0].id ? featuresArr[0].id : featuresArr[0].props.textId;
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_mark_status`, saveData, {
            params: {
                fileId: this.imageId + '',
                sampleOssTypeId: sampleOssTypeId + '',
                labelMessageObject: saveData
            }
        }).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success("保存成功");
                this.loadImages();
            }
        });
    }
    creatAILabel(Imgdata) {
        var that = this;
        let coordinateData = JSON.parse(Imgdata.labelMessage);
        let ossKey = Imgdata.ossKey;
        // let imgUrl = localStorage.getItem('sampleResourcePath') + '/' + ossKey
        var itemKey;
        switch (Imgdata.bucketName) {
            case "sample-resource":
                itemKey = "sampleResourcePath";
                break;
            case "target-recognize":
                itemKey = "targetRecognizePath";
                break;
            default:
                itemKey = "sampleResourcePath";
                break;
        }
        var imgUrl = localStorage.getItem(itemKey) + `/${ossKey}`;
        let text = Imgdata.samplePath.split("/")[Imgdata.samplePath.split("/").length - 2];
        let img = new Image();
        img.src = imgUrl;
        if (img.complete) {
            var imgWidth = img.width * 1;
            var imgHeight = img.height * 1;
            let zoomWidth = $("#detailLabel").css("width").replace(/[^\d.]/ig, "");
            let zoomHeight = $("#detailLabel").css("height").replace(/[^\d.]/ig, "");
            let labelZoom;
            if (imgWidth >= imgHeight) {
                this.mutliple = zoomWidth / imgWidth;
                imgHeight = imgHeight * this.mutliple;
                imgWidth = zoomWidth;
                labelZoom = imgWidth * 3;
            }
            else {
                this.mutliple = zoomHeight / imgHeight;
                imgWidth = imgWidth * this.mutliple;
                labelZoom = imgHeight * 3;
                imgHeight = zoomHeight;
            }
            // let coordinateData1 = coordinateData.data
            $("#detailLabel").empty();
            this.aiLabel = new AILabel2.Map(`detailLabel`, {
                center: { x: imgWidth / 2, y: imgHeight / 2 },
                zoom: labelZoom,
                mode: 'RECT',
                refreshDelayWhenZooming: false,
                zoomWhenDrawing: true,
                panWhenDrawing: true,
                featureCaptureWhenMove: true,
                zoomWheelRatio: 5,
                withHotKeys: true,
                zoomMax: imgWidth * 10,
                zoomMin: imgWidth / 10
            });
            var imageLayer = new AILabel2.Layer.Image('img', // id
            {
                src: imgUrl,
                width: imgWidth,
                height: imgHeight,
                crossOrigin: true,
                position: {
                    x: 0,
                    y: 0
                },
            }, { name: '第一个图片图层' }, { zIndex: 1 });
            that.aiLabel.addLayer(imageLayer);
            this.gfeatureLayer = new AILabel2.Layer.Feature(`feature`, { name: '第一个矢量图层' }, { zIndex: 19 });
            this.aiLabel.addLayer(this.gfeatureLayer);
            var gFirstTextLayer = new AILabel2.Layer.Text('first-layer-text', // id
            { name: '第一个文本图层' }, // props
            { zIndex: 12, opacity: 1 } // style
            );
            this.aiLabel.addLayer(gFirstTextLayer);
            if (!coordinateData.length) {
                coordinateData = [coordinateData];
            }
            for (let i = 0; i < coordinateData.length; i++) {
                var testData = coordinateData[i];
                var feature;
                var id = testData + `${+new Date()}`;
                if (null == testData.id)
                    testData.id = id;
                if (null == testData.props.text)
                    testData.props.text = text;
                if (null == testData.props.textId)
                    testData.props.textId = id;
                testData.style = { fill: true, fillStyle: "#0f0", globalAlpha: 0, lineWidth: 1, opacity: 1, stroke: true, strokeStyle: "red" };
                if (testData.type == "RECT") {
                    testData.shape.height = testData.shape.height * 1 * this.mutliple;
                    testData.shape.width = testData.shape.width * 1 * this.mutliple;
                    testData.shape.x = testData.shape.x * 1 * this.mutliple;
                    testData.shape.y = testData.shape.y * 1 * this.mutliple;
                    feature = new AILabel2.Feature.Rect(testData.id, testData.shape, testData.props, testData.style);
                }
                else { // if(testData.type == "POLYGON")
                    // testData.shape.height = testData.shape.height *1* this.mutliple
                    // testData.shape.width = testData.shape.width *1* this.mutliple
                    // testData.shape.x = testData.shape.x *1* this.mutliple
                    // testData.shape.y = testData.shape.y *1* this.mutliple
                    console.log();
                    for (let index = 0; index < testData.shape.points.length; index++) {
                        const element = testData.shape.points[index];
                        element.x = element.x * 1 * this.mutliple;
                        element.y = element.y * 1 * this.mutliple;
                    }
                    feature = new AILabel2.Feature.Polygon(testData.id, testData.shape, testData.props, testData.style);
                }
                that.gfeatureLayer.addFeature(feature);
                var { x: ltx, y: lty } = feature.shape;
                var gFirstText = new AILabel2.Text(testData.props.textId, // id
                { text: text, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, 左上角
                { name: '第一个文本对象' }, // props
                { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                );
                that.aiLabel.layers[2].addText(gFirstText);
            }
            this.aiLabel.events.on('featureSelected', (feature) => {
                this.aiLabel.setActiveFeature(feature);
            });
            this.aiLabel.events.on('featureUnselected', () => {
                this.aiLabel.setActiveFeature(null);
            });
            this.aiLabel.events.on('featureUpdated', (feature, shape) => {
                feature.updateShape(shape);
                const markerId = feature.props.deleteMarkerId;
                const textId = feature.props.textId;
                // 更新text位置
                const targetText = gFirstTextLayer.getTextById(textId);
                targetText.updatePosition(feature.getPoints()[0]);
            });
        }
        else {
            setTimeout(() => {
                this.creatAILabel(Imgdata);
            }, 200);
        }
    }
    loadImages() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/${this.imageId}`)
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.sampleOssFiles = result.data;
                this.countImg = result.data.length;
                // let str = $(".search-form-title")[0].innerText
                // let str1 = str.slice(0, str.indexOf(str.match('共[0-9]+个结果|共个结果')[0]))
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].id === this.imageId) {
                        // debugger;
                        // console.log(images.browseNumber + 'images');
                        this.sampleOssFile = result.data[i];
                        this.dataManageService.delect(this.countImg, result.data[i]);
                        if (i === 0) {
                            this.presentIdx = 1;
                        }
                        else {
                            this.presentIdx = i + 1;
                        }
                        this.loadChars();
                        this.creatAILabel(result.data[i]);
                        //  this.queryFaceDetectModel()
                        return;
                    }
                }
                result.data.forEach((images) => {
                    if (images.id === this.imageId) {
                        this.sampleOssFile = images;
                        this.loadChars();
                        return;
                    }
                });
            }
        });
    }
    queryFaceDetectModel() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/face_detect/queryFaceDetectModel?id=${this.imageId}`, { id: this.imageId }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            let data = JSON.parse(result.data.data);
            if (data.isExist) {
                this.isExist = true;
            }
            else {
                this.isExist = false;
            }
            if (data.faceStatus) {
                this.isFaceModel = true;
            }
            else {
                this.isFaceModel = false;
            }
        });
    }
    setFaceModel() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/face_detect/saveFaceDetectModel?id=${this.imageId}`, { id: this.imageId }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            if (result.data.code == 1) {
                this.nzMessage.success(result.data.message);
                this.isFaceModel = true;
            }
            else {
                this.nzMessage.error(result.data.message);
            }
        });
    }
    removeFaceModel() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/face_detect/deleteFaceDetectModel?id=${this.imageId}`, { id: this.imageId }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            if (result.data.code == 1) {
                this.isFaceModel = false;
                this.nzMessage.success(result.data.message);
            }
            else {
                this.nzMessage.error(result.data.message);
            }
        });
    }
    nextImage() {
        for (let i = 0; i < this.sampleOssFiles.length; i++) {
            if (this.sampleOssFiles[i].id === this.imageId) {
                if (i < this.sampleOssFiles.length - 1) {
                    this.sampleOssFile = this.sampleOssFiles[i + 1];
                    this.imageId = this.sampleOssFiles[i + 1].id;
                    // this.presentIdx = i;
                    if (this.presentIdx > 0) {
                        this.presentIdx = this.presentIdx + 1;
                    }
                    this.updateBrowseNumber();
                    this.loadOne(this.imageId).subscribe((result) => {
                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                            this.creatAILabel(result.data);
                            this.sampleOssFile = result.data;
                            this.loadChars();
                        }
                    });
                    return;
                }
                else {
                    this.nzMessage.error('已经是最后一张啦!');
                }
            }
        }
    }
    lastImage() {
        for (let i = 0; i < this.sampleOssFiles.length; i++) {
            if (this.sampleOssFiles[i].id === this.imageId) {
                if (i === 0) {
                    this.nzMessage.error('已经是第一张啦!');
                }
                else {
                    this.imageId = this.sampleOssFiles[i - 1].id;
                    this.sampleOssFile = this.sampleOssFiles[i - 1];
                    this.updateBrowseNumber();
                    this.loadOne(this.imageId).subscribe((result) => {
                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                            this.sampleOssFile = result.data;
                            this.creatAILabel(result.data);
                        }
                    });
                    if (this.presentIdx > 0) {
                        this.presentIdx = this.presentIdx - 1;
                    }
                    return;
                }
            }
        }
    }
    // onChartInit(ec): void {
    //   this.echartsInstance = ec;
    // }
    loadChars() {
        const lineChartOption = {
            xAxis: {
                // data: [122, 130, 170],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: ['训练次数', '下载次数', '浏览次数'],
                type: 'category',
                axisLabel: {
                    color: '#27bef0',
                    // fontWeight: 600,
                    fontSize: 16
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                interval: 0
            },
            grid: {
                x: 100,
                y: 0,
                y2: 0,
                x2: 0,
                right: "5%",
            },
            series: [
                {
                    data: [this.sampleOssFile.trainNumber === null ? 0 : this.sampleOssFile.trainNumber,
                        this.sampleOssFile.downloadNumber === null ? 0 : this.sampleOssFile.downloadNumber, this.sampleOssFile.browseNumber + 1],
                    type: 'bar',
                    barCategoryGap: '50%',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'right',
                                fontSize: 14,
                                color: '#FFFFFF'
                            },
                            color: (params) => {
                                const colors = [{
                                        start: '#7f8ae8',
                                        end: '#2e31ea'
                                    }, {
                                        start: '#01b698',
                                        end: '#1BDDEB'
                                    }, {
                                        start: '#2924B3',
                                        end: '#504AD7'
                                    }];
                                return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    { offset: 0, color: colors[params.dataIndex].start },
                                    { offset: 1, color: colors[params.dataIndex].end }
                                ]);
                            }
                        }
                    }
                }
            ]
        };
        if (!this.lineEchart) {
            this.lineEchart = echarts.init(this.lineEchartElm.nativeElement);
        }
        this.lineEchart.setOption(lineChartOption);
    }
    // lock(): void {
    //   const params = new HttpParams().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'LOCK');
    //   this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
    //     .subscribe((result: HttpResult<SampleOssFile[]>) => {
    //       if (HttpResult.succeed(result.code)) {
    //         this.nzMessage.success('锁定成功');
    //         this.loadSecondaryImage(+this.imageId);
    //       } else {
    //         this.nzMessage.error(result.message);
    //       }
    //     });
    // }
    delete() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'DELETE');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('删除成功');
                this.loadImages();
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/${this.imageId}`)
                    .subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                        console.log(this.sampleOssType, result.data.length);
                    }
                });
                for (let i = 0; i < this.sampleOssFiles.length; i++) {
                    if (this.sampleOssFiles[i].id === this.imageId) {
                        if (i === 0 && this.sampleOssFiles.length === 1) {
                            // this.route.
                            this.router.navigate(['../leaf', { 'sampleUpId': this.sampleOssFiles[0].sampleTypeId }], { relativeTo: this.route });
                        }
                        else if (i === this.sampleOssFiles.length - 1) {
                            // this.presentIdx = i + 1;
                            this.imageId = this.sampleOssFiles[i - 1].id;
                            this.updateBrowseNumber();
                            this.loadOne(this.imageId).subscribe((rs) => {
                                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(rs.code)) {
                                    this.sampleOssFile = rs.data;
                                    this.loadChars();
                                    this.presentIdx = this.presentIdx - 1;
                                    this.sampleOssFiles.splice(i, 1);
                                }
                            });
                            return;
                        }
                        else if (i < this.sampleOssFiles.length - 1) {
                            // this.imageId = this.sampleOssFiles[i + 1].id;
                            this.imageId = this.sampleOssFiles[i + 1].id;
                            this.updateBrowseNumber();
                            this.loadOne(this.imageId).subscribe((rs) => {
                                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(rs.code)) {
                                    this.sampleOssFile = rs.data;
                                    this.loadChars();
                                    // this.presentIdx = this.presentIdx + 1;
                                    this.sampleOssFiles.splice(i, 1);
                                }
                            });
                            return;
                        }
                    }
                }
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    loadSecondaryImage(sampleUpId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('typeId', sampleUpId + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, { params })
            .subscribe((result) => {
            this.sampleOssFiles = result.data.records;
        });
    }
    updateBrowseNumber() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', this.imageId + '');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/browse-number`, null, { params })
            .subscribe((result) => {
            this.queryFaceDetectModel();
        });
    }
    loadImageCount() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('imageId', this.imageId + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types/getTypeByImageId`, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.sampleOssType = result.data;
            }
        });
    }
    loadOne(imageId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/getOne/${imageId}`);
    }
}
DetailDataManageComponent.ɵfac = function DetailDataManageComponent_Factory(t) { return new (t || DetailDataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_manage_service__WEBPACK_IMPORTED_MODULE_7__["DataManageService"])); };
DetailDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailDataManageComponent, selectors: [["ng-component"]], viewQuery: function DetailDataManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineEchartElm = _t.first);
    } }, decls: 61, vars: 20, consts: [[1, "flex-column", 2, "height", "100%"], [1, "search-form", "flex-row"], [1, "search-form-title"], [1, "search-form-quantity"], ["class", "Standard-model", "title", "\u5F53\u524D\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", "style", "object-fit: contain;align-items: center;", 4, "ngIf"], [1, "btn", 2, "margin-right", "12px", 3, "click"], ["class", "btn", "style", "margin-right: 12px;", 3, "click", 4, "ngIf"], ["class", "btn btn-remove", "style", "margin-right: 12px;", 3, "click", 4, "ngIf"], [1, "btn", "btn-remove", 3, "click"], [1, "detail", "flex-column"], [1, "detail-image", "flex-row"], ["src", "assets/images/pre.png", "alt", "\u4E0A\u4E00\u5F20", 1, "pre", "pointer", 2, "user-select", "none", 3, "click"], [1, "detail-box", "flex-column"], [1, "target-image", "flex-row", 2, "position", "relative"], ["id", "detailLabel", 1, "canvas-container", "ai-label", 2, "height", "100%", "width", "100%", "object-fit", "contain", "align-items", "center"], [1, "target-quantity"], ["src", "assets/images/next.png", "alt", "\u4E0B\u4E00\u5F20", 1, "next", "pointer", 2, "user-select", "none", 3, "click"], [1, "detail-info", "flex-row"], [1, "detail-info-box", "flex-column", "m-r"], [1, "detail-info-type", "flex-row"], [1, "detail-info-param"], [1, "detail-info-value"], [1, "is_mark"], [1, "detail-info-box", "p-a"], [2, "height", "100%", "position", "relative"], [2, "position", "absolute", "left", "0", "right", "0", "top", "0", "bottom", "0"], ["lineEchart", ""], ["title", "\u5F53\u524D\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 1, "Standard-model", 2, "object-fit", "contain", "align-items", "center"], ["t", "1646357872681", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "691", "width", "30", "height", "30", 1, "icon", 2, "position", "relative", "top", "7px"], ["d", "M210.285714 320.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429 16.365714-36.571429 36.571428-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM813.714286 320.091429c20.205714 0 36.571429 16.365714 36.571428 36.571428s-16.365714 36.571429-36.571428 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM512 832.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857z", "fill", "#248BFF", "p-id", "692"], ["d", "M301.714286 644.662857m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "693"], ["d", "M483.474286 522.88l-173.714286-84.571429c-2.56-1.188571-5.302857-1.828571-8.045714-1.828571s-5.485714 0.64-8.045715 1.828571l-173.714285 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714285 84.571428c2.56 1.188571 5.302857 1.828571 8.045715 1.828572s5.485714-0.64 8.045714-1.828572l173.714286-84.571428c6.217143-3.108571 10.24-9.508571 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM457.142857 738.651429l-155.428571 75.702857-155.428572-75.702857V550.765714l155.428572-75.702857 155.428571 75.702857v187.885715z", "fill", "#248BFF", "p-id", "694"], ["d", "M228.571429 644.662857c0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857-73.142857 32.731429-73.142857 73.142857z m109.714285 0c0 20.205714-16.365714 36.571429-36.571428 36.571429s-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428 36.571429 16.457143 36.571428 36.571428z", "fill", "#248BFF", "p-id", "695"], ["d", "M722.285714 644.662857m-36.571428 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "696"], ["d", "M693.76 166.308571l-173.714286-84.571428c-2.56-1.28-5.302857-1.828571-8.045714-1.828572s-5.485714 0.64-8.045714 1.828572l-173.714286 84.571428c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571429c2.56 1.188571 5.302857 1.828571 8.045714 1.828571s5.485714-0.64 8.045714-1.828571l173.714286-84.571429c6.217143-3.108571 10.24-9.508571 10.24-16.457143V182.765714c0-7.04-4.022857-13.44-10.24-16.457143zM512 324.662857c-20.205714 0-36.571429-16.365714-36.571429-36.571428s16.365714-36.571429 36.571429-36.571429 36.571429 16.365714 36.571429 36.571429-16.365714 36.571429-36.571429 36.571428z m155.428571 57.417143l-137.142857 66.742857v-89.965714c31.542857-8.137143 54.857143-36.662857 54.857143-70.765714 0-40.411429-32.731429-73.142857-73.142857-73.142858s-73.142857 32.731429-73.142857 73.142858c0 34.102857 23.314286 62.628571 54.857143 70.765714v89.965714l-137.142857-66.742857V194.194286l155.428571-75.702857 155.428571 75.702857v187.885714z", "fill", "#248BFF", "p-id", "697"], ["d", "M512 288.091429m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z", "fill", "#B4D7FE", "p-id", "698"], ["d", "M356.571429 630.948571c-6.308571 0-12.434286-3.291429-15.817143-9.051428-5.12-8.685714-2.102857-19.931429 6.582857-25.051429l109.714286-64c8.777143-5.12 19.931429-2.102857 25.051428 6.582857s2.102857 19.931429-6.582857 25.051429l-109.714286 64c-2.925714 1.737143-6.125714 2.468571-9.234285 2.468571z", "fill", "#248BFF", "p-id", "699"], ["d", "M904.045714 522.88l-173.714285-84.571429c-2.56-1.188571-5.302857-1.828571-8.045715-1.828571s-5.485714 0.64-8.045714 1.828571l-173.714286 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571428c2.56 1.188571 5.302857 1.828571 8.045714 1.828572s5.485714-0.64 8.045715-1.828572l173.714285-84.571428c6.308571-3.017143 10.24-9.417143 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM877.714286 738.651429l-155.428572 75.702857-155.428571-75.702857V575.177143l85.12 49.645714c-1.828571 6.308571-2.834286 12.982857-2.834286 19.84 0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857a73.124571 73.124571 0 0 0-125.074285-51.474286l-86.765715-50.651428L722.285714 475.062857l155.428572 75.702857v187.885715zM685.714286 644.662857c0-20.205714 16.365714-36.571429 36.571428-36.571428s36.571429 16.365714 36.571429 36.571428-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429z", "fill", "#248BFF", "p-id", "700"], [1, "btn", "btn-remove", 2, "margin-right", "12px", 3, "click"]], template: function DetailDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailDataManageComponent_div_6_Template, 11, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_button_click_7_listener() { return ctx.saveRect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u4FDD\u5B58\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailDataManageComponent_button_9_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailDataManageComponent_button_10_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_button_click_11_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_img_click_15_listener() { return ctx.lastImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_img_click_21_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u56FE\u5F62\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u56FE\u7247\u5C3A\u5BF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u662F\u5426\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4E0A\u4F20\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u4E0A\u4F20\u4F5C\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u5F85\u8BAD\u7EC3\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "trainStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssType == null ? null : ctx.sampleOssType.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u5171", ctx.countImg, "\u4E2A\u7ED3\u679C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFaceModel && ctx.isExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFaceModel && ctx.isExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFaceModel && ctx.isExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.presentIdx, " / ", ctx.sampleOssFiles == null ? null : ctx.sampleOssFiles.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssType == null ? null : ctx.sampleOssType.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.sampleOssFile == null ? null : ctx.sampleOssFile.height) + "*" + (ctx.sampleOssFile == null ? null : ctx.sampleOssFile.width));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 13, ctx.sampleOssFile == null ? null : ctx.sampleOssFile.markStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 15, ctx.sampleOssFile == null ? null : ctx.sampleOssFile.createdTime, "yyyy-MM-dd HH:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssFile == null ? null : ctx.sampleOssFile.createdName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 18, ctx.sampleOssFile));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__["MarkStatusPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__["TrainStatusPipe"]], styles: [".Standard-model[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kZXRhaWwvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS1tZ3ItaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGV0YWlsL2RldGFpbC5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kZXRhaWwvZGV0YWlsLmRhdGEtbWFuYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RldGFpbC9kZXRhaWwuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU3RhbmRhcmQtbW9kZWx7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vIGxlZnQ6IDE1MHB4O1xufSIsIi5TdGFuZGFyZC1tb2RlbCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './detail.data-manage.component.html',
                styleUrls: ['./detail.data-manage.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _data_manage_service__WEBPACK_IMPORTED_MODULE_7__["DataManageService"] }]; }, { lineEchartElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['lineEchart']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/edit/edit.data-manage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/data-manage/edit/edit.data-manage.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataManageComponent", function() { return EditDataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EditDataManageComponent {
}
EditDataManageComponent.ɵfac = function EditDataManageComponent_Factory(t) { return new (t || EditDataManageComponent)(); };
EditDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditDataManageComponent, selectors: [["ng-component"]], decls: 107, vars: 0, consts: [[1, "search-form", "flex-row"], [1, "search-form-title"], [1, "search-form-quantity"], ["type", "text", 1, "keyword", "m-r"], [1, "btn", "m-r"], [1, "btn", "btn-remove", "m-r"], [1, "btn", "btn-batch"], [1, "picture-item"], [1, "picture-box"], ["src", "assets/images/img01.png", "alt", "\u56FE\u7247", 1, "picture-m"], ["src", "assets/images/question.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["src", "assets/images/remove.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["src", "assets/images/lock.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["src", "assets/images/right.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"]], template: function EditDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u822A\u7A7A\u6BCD\u8230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5171168\u4E2A\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5168\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u9501\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u79FB\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5B8C\u6210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZWRpdC9lZGl0LmRhdGEtbWFuYWdlLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './edit.data-manage.component.html',
                styleUrls: ['./edit.data-manage.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts ***!
  \**********************************************************************/
/*! exports provided: LeafDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafDataManageComponent", function() { return LeafDataManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/rename-sample-oss-type.state */ "./src/app/state/rename-sample-oss-type.state.ts");
/* harmony import */ var dragselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dragselect */ "./node_modules/dragselect/dist/DragSelect.js");
/* harmony import */ var dragselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dragselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");


















const _c0 = ["filesInput"];
function LeafDataManageComponent_ng_container_8_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u5BFC\u5165\u538B\u7F29\u5305");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeafDataManageComponent_ng_container_8_div_6_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.uploadZip($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u5BFC\u5165\u56FE\u7247");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeafDataManageComponent_ng_container_8_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.uploadImages($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LeafDataManageComponent_ng_container_8_div_6_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.upLoadZipIsVisible);
} }
function LeafDataManageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.updateAllChecked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u5168\u9009");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.lock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u9501\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u4E0B\u8F7D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function LeafDataManageComponent_ng_container_10_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 35);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 36);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 37);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 38);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function LeafDataManageComponent_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-checkbox-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LeafDataManageComponent_ng_container_10_div_2_Template_nz_checkbox_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const idx_r20 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r27.checkOptionsOne[idx_r20] = $event); })("ngModelChange", function LeafDataManageComponent_ng_container_10_div_2_Template_nz_checkbox_group_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.updateSingleChecked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_10_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const item_r19 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.amplify(item_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeafDataManageComponent_ng_container_10_div_2_img_4_Template, 1, 0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LeafDataManageComponent_ng_container_10_div_2_i_5_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LeafDataManageComponent_ng_container_10_div_2_i_6_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LeafDataManageComponent_ng_container_10_div_2_i_7_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeafDataManageComponent_ng_container_10_div_2_i_8_Template, 1, 0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LeafDataManageComponent_ng_container_10_div_2_i_9_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const idx_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r18.checkOptionsOne[idx_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r19.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, item_r19), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.sampleStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.markStatus == 4);
} }
function LeafDataManageComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeafDataManageComponent_ng_container_10_div_2_Template, 10, 11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.secondaryData);
} }
function LeafDataManageComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.hideUploadingProgress = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.hideUploadingProgress = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_div_24_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 49);
} }
function LeafDataManageComponent_div_24_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r35.progress, "%");
} }
function LeafDataManageComponent_div_24_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u7B49\u5F85\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "LocalImgFile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LeafDataManageComponent_div_24_i_11_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LeafDataManageComponent_div_24_span_12_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LeafDataManageComponent_div_24_span_13_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, item_r35.file)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r35.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, item_r35.file.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r35.progress === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r35.progress > 0 && item_r35.progress < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r35.progress === 0);
} }
// declare var DragSelect:any;
class LeafDataManageComponent {
    constructor(route, http, nzMessage, nzModal, router, dataManageService) {
        this.route = route;
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.router = router;
        this.dataManageService = dataManageService;
        this.secondaryData = [];
        this.secondaryTotal = 0;
        this.isOperateButton = true;
        this.type = "jpg/png";
        this.imgUploadSize = "，且大小不能超过10M";
        // sampleTitle: string;
        this.checkOptionsOne = [];
        this.indeterminate = true;
        this.allChecked = false;
        this.pageIndex = 1;
        this.imgNum = 300;
        this.current = 1;
        // files: ProgressDto[] = [];
        this.hideUploadingProgress = true;
        this.hideUploadingPanel = true;
        // uploadingFiles: File[] = [];
        this.uploadingFiles = [];
        /**
         * 全选
         */
        this.allSelect = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.has('sampleUpId')) {
                this.sampleUpId = +params.get('sampleUpId');
                this.loadSecondaryImage(this.sampleUpId);
                this.loadSampleType(this.sampleUpId);
            }
        });
        this.sampleOssTypeName$.subscribe(renameModel => {
            if (renameModel.name) {
                this.sampleOssType.sampleTypeName = renameModel.name;
            }
        });
    }
    dragSelectInit() {
        // var dom:any = document.getElementsByClassName('picture-box')
        // console.log(dom)
        this.ds = new dragselect__WEBPACK_IMPORTED_MODULE_7___default.a({
            area: document.getElementById('pictureUl'),
            selectables: document.getElementsByClassName('ds-box'),
            multiSelectMode: true,
            //选中
            onElementSelect: function (element) {
                $(element).addClass('on').find('input[type="checkbox"]').prop('checked', true);
            },
            //取消选中
            onElementUnselect: function (element) {
                $(element).removeClass('on').find('input[type="checkbox"]').prop('checked', false);
            },
            //鼠标抬起后返回所有选中的元素
            callback: function (elements) {
                console.log(elements);
            }
        });
    }
    // operateMgr(flag: boolean): void {
    //   this.isOperateButton = flag;
    // }
    loadSecondaryImage(sampleUpId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('typeId', sampleUpId + '').append('pageSize', 300 + '').append('pageIndex', this.pageIndex + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, { params })
            .subscribe((result) => {
            setTimeout(() => {
                this.upLoadZipIsVisible = this.dataManageService.upLoadZipIsVisible;
            }, 300);
            // console.log(this.dataManageService.upLoadZipIsVisible)
            // 
            this.secondaryData = result.data.records;
            this.secondaryData.map(x => {
                if (x.markStatus == 0) {
                    x.markStatusText = "未标注";
                }
                else if (x.markStatus == 1) {
                    x.markStatusText = "已标注";
                }
                else if (x.markStatus == 2) {
                    x.markStatusText = "标注错误";
                }
                else if (x.markStatus == 3) {
                    x.markStatusText = "正确的标注(审核通过)";
                }
                else if (x.markStatus == 4) {
                    x.markStatusText = "客户端图片检测纠错过来的数据";
                }
            });
            this.secondaryTotal = result.data.total;
            this.imgNum = this.secondaryData.length;
            // let str = $(".search-form-title")[0].innerText
            // let str1 = str.slice(0, str.indexOf(str.match('共[0-9]+个')[0]))
            setTimeout(() => {
                this.dataManageService.delect(this.secondaryTotal, this.sampleOssType);
            }, 200);
            // console.log(this.secondaryData)
            // if(str1.length > 0) {
            //   this.dataManageService.delect(this.secondaryTotal, str1)
            // }
            const box = this.secondaryData.map((s) => {
                return [{ label: '', value: s.id, checked: false, typeId: s.sampleTypeId }];
            });
            this.checkOptionsOne = box;
            this.allSelect = false;
            // this.dragSelectInit()
        });
    }
    nzPageIndexChange() {
        this.loadSecondaryImage(this.sampleUpId);
    }
    loadSampleType(sampleUpId) {
        // 根据类型查上级id的typename
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types/${sampleUpId}`)
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.sampleOssType = result.data;
            }
        });
    }
    amplify(imageId) {
        this.router.navigate(['../detail', { imageId }], { relativeTo: this.route });
    }
    updateAllChecked() {
        if (this.allSelect) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item[0]), { checked: false })];
            });
            this.allChecked = false;
            this.allSelect = false;
        }
        else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item[0]), { checked: true })];
            });
            this.allChecked = true;
            this.allSelect = true;
        }
    }
    /**
     * 单选
     */
    updateSingleChecked() {
        this.allSelect = false;
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOne.every(item => item.checked)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
    /**
     * 获取选中的图片
     */
    getChooseImage() {
        let ids = [];
        $.each(this.checkOptionsOne, function (i, n) {
            if (n[0].checked) {
                ids.push(n[0].value);
            }
        });
        // let ids = '';
        // this.checkOptionsOne.map((s) => {
        //   console.log(this.allSelect)
        //   if (s[0].checked && !this.allSelect) {
        //     ids = ids.concat(s[0].value + ',');
        //   }
        //   if (s[0].checked && this.allSelect) {
        //     ids = ids.concat(s[0][0].value + ',');
        //   }
        // });
        return ids;
    }
    /**
     * 获取选中的上级id
     */
    getChooseTypeId() {
        let sampleTypeId = '';
        this.checkOptionsOne.map((s) => {
            if (s[0].checked && !this.allSelect) {
                sampleTypeId = s[0].typeId;
            }
            if (s[0].checked && this.allSelect) {
                sampleTypeId = s[0].typeId;
            }
        });
        return sampleTypeId;
    }
    lock() {
        const ids = this.getChooseImage();
        const sampleTypeId = this.getChooseTypeId();
        if (ids === '' && sampleTypeId === '') {
            this.nzMessage.error('请勾选需要操作的图片！');
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'LOCK');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params })
            .subscribe((result) => {
            console.log(result.code + '   code');
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('锁定成功');
                this.loadSecondaryImage(+sampleTypeId);
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    download() {
        const ids = this.getChooseImage();
        const sampleTypeId = this.getChooseTypeId();
        if (ids === '' && sampleTypeId === '') {
            this.nzMessage.error('请勾选需要操作的图片！');
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', '3');
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/downloadFile`, null, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('下载成功');
                window.open(result.data);
                // this.loadSecondaryImage(+sampleTypeId);
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    delete() {
        const ids = this.getChooseImage();
        const sampleTypeId = this.getChooseTypeId();
        if (ids === '' && sampleTypeId === '') {
            this.nzMessage.error('请勾选需要操作的图片！');
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'DELETE');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('删除成功');
                this.loadSecondaryImage(+sampleTypeId);
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    uploadZip(evt) {
        this.hideUploadingProgress = false;
        this.hideUploadingPanel = false;
        this.type = "zip";
        this.imgUploadSize = "";
        const fileList = evt.target.files;
        if (fileList.length > 500) {
            // 限制一次最多上传20张
            this.nzModal.error({
                nzTitle: '单次最多上传500张'
            });
            this.clearFiles();
            return;
        }
        if (fileList.length > 0) {
            const fileCount = fileList.length;
            const uploadingFiles = [];
            for (let i = 0; i < fileCount; i++) {
                // 每个文件单个上传，这样才能对每个文件有进度条
                let type = fileList[i].type;
                if (type == "application/x-zip-compressed") {
                    uploadingFiles.push({
                        file: fileList[i],
                        progress: 0
                    });
                }
                else {
                    this.nzMessage.error('文件格式不正确');
                }
            }
            this.uploadingFiles = uploadingFiles;
            this.uploadingFiles.forEach((file, index) => {
                const formData = new FormData();
                formData.append('files', file.file);
                this.uploadWithFiles(index, formData, "zip");
            });
            const completeInterval = setInterval(() => {
                let complete = true;
                for (let j = 0; j < this.uploadingFiles.length; j++) {
                    if (this.uploadingFiles[j].progress < 100) {
                        complete = false;
                        break;
                    }
                }
                if (complete) {
                    clearInterval(completeInterval);
                    this.clearFiles();
                    this.loadSecondaryImage(this.sampleUpId);
                    this.loadSampleType(this.sampleUpId);
                }
            }, 1000);
        }
    }
    uploadImages(evt) {
        this.hideUploadingProgress = false;
        this.hideUploadingPanel = false;
        this.type = "img/png";
        this.imgUploadSize = "，且大小不能超过10M";
        const fileList = evt.target.files;
        if (fileList.length > 500) {
            // 限制一次最多上传20张
            this.nzModal.error({
                nzTitle: '单次最多上传500张'
            });
            this.clearFiles();
            return;
        }
        if (fileList.length > 0) {
            const fileCount = fileList.length;
            const uploadingFiles = [];
            for (let i = 0; i < fileCount; i++) {
                // 每个文件单个上传，这样才能对每个文件有进度条
                console.log();
                let type = fileList[i].type;
                let size = fileList[i].size;
                if ((type == "image/png" || type == "image/jpeg") && size > (1024 * 5)) {
                    uploadingFiles.push({
                        file: fileList[i],
                        progress: 0
                    });
                }
                else {
                    this.nzMessage.error('文件格式不正确或文件太小');
                }
            }
            this.uploadingFiles = uploadingFiles;
            this.uploadingFiles.forEach((file, index) => {
                const formData = new FormData();
                formData.append('files', file.file);
                this.uploadWithFiles(index, formData, "images");
            });
            const completeInterval = setInterval(() => {
                let complete = true;
                for (let j = 0; j < this.uploadingFiles.length; j++) {
                    if (this.uploadingFiles[j].progress < 100) {
                        complete = false;
                        break;
                    }
                }
                if (complete) {
                    clearInterval(completeInterval);
                    this.clearFiles();
                    //oo
                    this.loadSecondaryImage(this.sampleUpId);
                    this.loadSampleType(this.sampleUpId);
                }
            }, 1000);
        }
    }
    clearFiles() {
        this.filesInputElm.nativeElement.value = '';
        var zipDom = document.querySelector("#zipInput");
        zipDom.value = "";
    }
    uploadWithFiles(index, formData, type) {
        this.tile = true;
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeId', this.sampleUpId + '');
        if (type == "images") {
            this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file`, formData, {
                params: httpParams,
                reportProgress: true,
                responseType: 'text',
                observe: 'events',
            }).subscribe((event) => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    console.log('upload event is :', event);
                    // 根据每个文件进度
                    // const map = formData.getAll('files').map((f: File) => {
                    //   // this.files = [];
                    //   return {name: f.name, jd: event.loaded, id: f.lastModified};
                    // });
                    // this.files = map;
                    // console.log(event.loaded / event.total + '未付费');
                    this.uploadingFiles[index].progress = Math.ceil(event.loaded * 100 / event.total);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                    // console.log('上传完成', event.body);
                    this.uploadingFiles[index].progress = 100;
                }
                // this.nzMessage.success('图片已经上传，进度条还没有完，手动刷新.....未完待续');
            });
        }
        else {
            var id = JSON.parse(localStorage.getItem("userInfo")).id;
            var parentClassString = this.sampleOssType.samplePath.split("/")[0];
            var classValue;
            switch (parentClassString) {
                case '可见光':
                    classValue = 1;
                    break;
                case '红外':
                    classValue = 3;
                    break;
                default:
                    classValue = undefined;
                    break;
            }
            this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/upload-zip-log/uploadZip?type=${classValue}&userId=${id}`, formData, {
                params: httpParams,
                reportProgress: true,
                responseType: 'text',
                observe: 'events',
            }).subscribe((event) => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    console.log('upload event is :', event);
                    // 根据每个文件进度
                    // const map = formData.getAll('files').map((f: File) => {
                    //   // this.files = [];
                    //   return {name: f.name, jd: event.loaded, id: f.lastModified};
                    // });
                    // this.files = map;
                    // console.log(event.loaded / event.total + '未付费');
                    this.uploadingFiles[index].progress = Math.ceil(event.loaded * 100 / event.total);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                    // console.log('上传完成', event.body);
                    this.uploadingFiles[index].progress = 100;
                    this.nzMessage.success('上传zip文件成功，文件解析异步执行！');
                }
            });
        }
    }
}
LeafDataManageComponent.ɵfac = function LeafDataManageComponent_Factory(t) { return new (t || LeafDataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_manage_service__WEBPACK_IMPORTED_MODULE_10__["DataManageService"])); };
LeafDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeafDataManageComponent, selectors: [["ng-component"]], viewQuery: function LeafDataManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filesInputElm = _t.first);
    } }, decls: 25, vars: 19, consts: [[1, "main", "flex-column", 2, "height", "100%"], [1, "search-form", "flex-row"], [1, "search-form-title"], [1, "search-form-quantity"], [2, "margin-left", "30px"], [4, "ngIf"], ["nzShowQuickJumper", "", "nzHideOnSinglePage", "", 3, "nzPageIndex", "nzTotal", "nzPageSize", "nzPageIndexChange"], [1, "uploading-progress-wrap"], [1, "flex-row", "uploading-title"], ["nz-icon", "", "nzType", "border", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [1, "upload-remark"], [1, "uploading-files"], ["class", "uploading-file", 4, "ngFor", "ngForOf"], [1, "import-samples-btn-wrap"], [1, "btn", "m-r", "upload"], ["type", "file", "value", "\u672C\u5730\u4E0A\u4F20", "multiple", "", "accept", "image/jpeg,image/png", 3, "change"], ["filesInput", ""], ["class", "import-samples-btn-wrap", 4, "ngIf"], ["type", "file", "value", "\u672C\u5730\u4E0A\u4F20", "multiple", "", "id", "zipInput", "accept", ".zip", 3, "change"], ["filesInput1", ""], [1, "btn", "m-r", 3, "click"], [1, "btn", "btn-remove", "m-r", 3, "click"], ["id", "pictureUl", 1, "picture-item", "leaf-picture-item", 2, "overflow-y", "scroll", "user-select", "none"], ["class", "picture-box ds-box", 4, "ngFor", "ngForOf"], [1, "picture-box", "ds-box"], [2, "position", "absolute", "left", "2px", 3, "ngModel", "ngModelChange"], ["alt", "\u56FE\u7247", 1, "picture-m", 3, "src", "title", "click"], ["class", "picture-mark", "src", "assets/images/lock.png", "alt", "\u95EE\u9898\u56FE\u7247", 4, "ngIf"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", "style", "color: rgb(19, 111, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", "style", "color: rgb(230, 98, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", "style", "color: rgb(197, 134, 17);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", "style", "color: rgb(22, 187, 63);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "style", "color: red;position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["src", "assets/images/lock.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", 2, "color", "rgb(19, 111, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", 2, "color", "rgb(230, 98, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", 2, "color", "rgb(197, 134, 17)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "rgb(22, 187, 63)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 2, "color", "red", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "border", "nzTheme", "outline", 3, "click"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline", 3, "click"], [1, "uploading-file"], [1, "uploading-file-img"], [3, "src"], [1, "uploading-file-size"], [1, "uploading-file-progress"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"]], template: function LeafDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeafDataManageComponent_ng_container_8_Template, 7, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LeafDataManageComponent_ng_container_9_Template, 9, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LeafDataManageComponent_ng_container_10_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-pagination", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzPageIndexChange", function LeafDataManageComponent_Template_nz_pagination_nzPageIndexChange_12_listener($event) { return ctx.pageIndex = $event; })("nzPageIndexChange", function LeafDataManageComponent_Template_nz_pagination_nzPageIndexChange_12_listener() { return ctx.nzPageIndexChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u5BFC\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LeafDataManageComponent_i_18_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LeafDataManageComponent_i_19_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_Template_i_click_20_listener() { return ctx.hideUploadingPanel = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LeafDataManageComponent_div_24_Template, 14, 12, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sampleOssType == null ? null : ctx.sampleOssType.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u5171", ctx.secondaryTotal, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u5F53\u524D\u7B2C ", ctx.pageIndex, " \u9875\u5171 ", ctx.imgNum, " \u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPageIndex", ctx.pageIndex)("nzTotal", ctx.secondaryTotal)("nzPageSize", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide-progress-panel", ctx.hideUploadingPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideUploadingProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideUploadingProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u53EA\u80FD\u4E0A\u4F20", ctx.type, "\u683C\u5F0F\u7684\u6587\u4EF6", ctx.imgUploadSize, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fold", ctx.hideUploadingProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.uploadingFiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzPaginationComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzCheckboxGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_15__["OssPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_15__["LocalImgFilePipe"], _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_15__["KbPipe"]], styles: [".import-samples-btn-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.import-samples-btn-wrap[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 30px;\n  opacity: 0;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%] {\n  background-color: #051d3c;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 600px;\n  border-top-left-radius: 10px;\n  box-shadow: -4px -4px 10px #202731;\n}\n.uploading-progress-wrap.hide-progress-panel[_ngcontent-%COMP%] {\n  display: none;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-title[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  color: white;\n  font-size: 16px;\n  justify-content: space-between;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-title[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 10px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .upload-remark[_ngcontent-%COMP%] {\n  background-color: #0a425f;\n  color: white;\n  font-size: 12px;\n  padding: 5px 20px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%] {\n  height: 580px;\n  margin-top: 4px;\n  overflow-y: scroll;\n  color: white;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files.fold[_ngcontent-%COMP%] {\n  height: 0;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  display: flex;\n  border-bottom: 1px solid #183780;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 14px;\n  line-height: 40px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]   .uploading-file-progress[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]   .uploading-file-progress[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9sZWFmL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2xlYWYvbGVhZi5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9sZWFmL2xlYWYuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNWTjtBRGVBO0VBS0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUdBLDRCQUFBO0VBQ0Esa0NBQUE7QUNuQkY7QURPRTtFQUNFLGFBQUE7QUNMSjtBREdBO0VBZ0JJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ2hCSjtBREhBO0VBc0JNLFlBQUE7RUFDQSxpQkFBQTtBQ2hCTjtBRFBBO0VBNEJJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2xCSjtBRGJBO0VBbUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFNQSxZQUFBO0FDeEJKO0FEb0JJO0VBQ0UsU0FBQTtBQ2xCTjtBRHRCQTtFQThDTSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ3JCTjtBRDNCQTtFQW1EUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDckJSO0FEaENBO0VBeURRLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN0QlI7QURyQ0E7RUErRFEsaUJBQUE7QUN2QlI7QUR4Q0E7RUFrRVUsa0JBQUE7QUN2QlY7QUQ4QkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQzVCRiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvbGVhZi9sZWFmLmRhdGEtbWFuYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmltcG9ydC1zYW1wbGVzLWJ0bi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgLnVwbG9hZCB7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgLy8gd2lkdGg6IDg4cHg7XG4gICAgLy8gaGVpZ2h0OiAzMHB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gICAgLy8gb3V0bGluZTogbm9uZTtcbiAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzM1N2FmNjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJiArIGlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cblxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIHtcbiAgJi5oaWRlLXByb2dyZXNzLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDI5LCA2MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDYwMHB4O1xuICAvL2hlaWdodDogNjAwcHg7XG5cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogLTRweCAtNHB4IDEwcHggcmdiKDMyLCAzOSwgNDkpO1xuXG4gIC51cGxvYWRpbmctdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGlbbnotaWNvbl0ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnVwbG9hZC1yZW1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgNjYsIDk1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICB9XG5cbiAgLnVwbG9hZGluZy1maWxlcyB7XG4gICAgaGVpZ2h0OiA1ODBweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICAgJi5mb2xkIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAudXBsb2FkaW5nLWZpbGUge1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI0LCA1NSwgMTI4KTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG5cbiAgICAgID4gZGl2IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAudXBsb2FkaW5nLWZpbGUtcHJvZ3Jlc3Mge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBpW256LWljb25dIHtcbiAgICAgICAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLmltcG9ydC1zYW1wbGVzLWJ0bi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaW1wb3J0LXNhbXBsZXMtYnRuLXdyYXAgLnVwbG9hZCArIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MWQzYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IC00cHggLTRweCAxMHB4ICMyMDI3MzE7XG59XG4udXBsb2FkaW5nLXByb2dyZXNzLXdyYXAuaGlkZS1wcm9ncmVzcy1wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkaW5nLXByb2dyZXNzLXdyYXAgLnVwbG9hZGluZy10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51cGxvYWRpbmctcHJvZ3Jlc3Mtd3JhcCAudXBsb2FkaW5nLXRpdGxlIGlbbnotaWNvbl0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWQtcmVtYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhNDI1ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMge1xuICBoZWlnaHQ6IDU4MHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMuZm9sZCB7XG4gIGhlaWdodDogMDtcbn1cbi51cGxvYWRpbmctcHJvZ3Jlc3Mtd3JhcCAudXBsb2FkaW5nLWZpbGVzIC51cGxvYWRpbmctZmlsZSB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTgzNzgwO1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlID4gZGl2IHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlIC51cGxvYWRpbmctZmlsZS1wcm9ncmVzcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlIC51cGxvYWRpbmctZmlsZS1wcm9ncmVzcyBpW256LWljb25dIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_6__["RenameSampleOssTypeState"])
], LeafDataManageComponent.prototype, "sampleOssTypeName$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeafDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './leaf.data-manage.component.html',
                styleUrls: ['./leaf.data-manage.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _data_manage_service__WEBPACK_IMPORTED_MODULE_10__["DataManageService"] }]; }, { filesInputElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['filesInput']
        }], sampleOssTypeName$: [] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotLeafDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLeafDataManageComponent", function() { return NotLeafDataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");












function NotLeafDataManageComponent_ng_container_51_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_51_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_51_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.toDetail(item_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_51_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_51_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_51_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_51_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_51_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_51_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r11.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_51_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.samplePath.indexOf((ctx_r0.titleData[0] == null ? null : ctx_r0.titleData[0].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_58_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_58_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.toDetail(item_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_58_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_58_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_58_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_58_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_58_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_58_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r24.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r24), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_58_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.samplePath.indexOf((ctx_r1.titleData[1] == null ? null : ctx_r1.titleData[1].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_67_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_67_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.toDetail(item_r37.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_67_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_67_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_67_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_67_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_67_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_67_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r37.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r37), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_67_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.samplePath.indexOf((ctx_r2.titleData[2] == null ? null : ctx_r2.titleData[2].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_74_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_74_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.toDetail(item_r50.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_74_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_74_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_74_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_74_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_74_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_74_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r50.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r50), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_74_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.samplePath.indexOf((ctx_r3.titleData[3] == null ? null : ctx_r3.titleData[3].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_82_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_82_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.toDetail(item_r63.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_82_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_82_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_82_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_82_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_82_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_82_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r63.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r63), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_82_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.samplePath.indexOf((ctx_r4.titleData[4] == null ? null : ctx_r4.titleData[4].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_89_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_89_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.toDetail(item_r76.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_89_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_89_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_89_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_89_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_89_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_89_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r76.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r76), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_89_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.samplePath.indexOf((ctx_r5.titleData[5] == null ? null : ctx_r5.titleData[5].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_96_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_96_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const item_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.toDetail(item_r89.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_96_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_96_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_96_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_96_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_96_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_96_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r89.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r89.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r89.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r89), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_96_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r89 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.samplePath.indexOf((ctx_r6.titleData[6] == null ? null : ctx_r6.titleData[6].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_104_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_104_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const item_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.toDetail(item_r102.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_104_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_104_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_104_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_104_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_104_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_104_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r102.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r102.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r102.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r102), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_104_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r102 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.samplePath.indexOf((ctx_r7.titleData[7] == null ? null : ctx_r7.titleData[7].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_111_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_111_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); const item_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.toDetail(item_r115.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_111_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_111_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_111_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_111_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_111_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_111_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r115.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r115.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r115.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r115), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_111_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r115 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.samplePath.indexOf((ctx_r8.titleData[8] == null ? null : ctx_r8.titleData[8].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_118_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_118_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const item_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.toDetail(item_r128.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_118_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_118_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_118_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_118_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_118_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_118_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r128.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r128.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r128.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r128), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_118_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r128 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.samplePath.indexOf((ctx_r9.titleData[9] == null ? null : ctx_r9.titleData[9].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_125_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_125_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r150.toDetail(item_r141.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_125_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_125_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_125_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_125_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_125_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_125_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r141.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r141.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r141.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r141), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_125_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r141 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.samplePath.indexOf((ctx_r10.titleData[10] == null ? null : ctx_r10.titleData[10].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
class NotLeafDataManageComponent {
    constructor(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.dataSet = [];
        this.titleData = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.has('sampleUpId')) {
                this.sampleUpId = params.get('sampleUpId');
                this.loadInitialize();
                this.loadImage();
            }
        });
        this.loadStatInfo();
    }
    // 携带一个分类ID 去查询
    loadImage() {
        let httpParams;
        if (isNaN(+this.sampleUpId)) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', 'KJG');
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/type/0`, { params: httpParams })
                .subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    this.dataSet = result.data;
                    this.dataSet.forEach((x) => {
                        if (x.markStatus == 0) {
                            x.markStatusText = "未标注";
                        }
                        else if (x.markStatus == 1) {
                            x.markStatusText = "已标注";
                        }
                        else if (x.markStatus == 2) {
                            x.markStatusText = "标注错误";
                        }
                        else if (x.markStatus == 3) {
                            x.markStatusText = "正确的标注(审核通过)";
                        }
                        else if (x.markStatus == 4) {
                            x.markStatusText = "客户端图片检测纠错过来的数据";
                        }
                    });
                }
            });
        }
        else {
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/type/${this.sampleUpId}`)
                .subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    this.dataSet = result.data;
                    this.dataSet.forEach((x) => {
                        if (x.markStatus == 0) {
                            x.markStatusText = "未标注";
                        }
                        else if (x.markStatus == 1) {
                            x.markStatusText = "已标注";
                        }
                        else if (x.markStatus == 2) {
                            x.markStatusText = "标注错误";
                        }
                        else if (x.markStatus == 3) {
                            x.markStatusText = "正确的标注(审核通过)";
                        }
                        else if (x.markStatus == 4) {
                            x.markStatusText = "客户端图片检测纠错过来的数据";
                        }
                    });
                }
            });
        }
    }
    loadInitialize() {
        let httpParams;
        if (isNaN(+this.sampleUpId)) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', 'KJG');
        }
        else {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleUpId', this.sampleUpId);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                const visibleLight = result.data.map((samples) => {
                    return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"]({
                        title: samples.data.sampleTypeName + '    ' + samples.count,
                        key: samples.data.id + '',
                        data: samples.data,
                        isLeaf: samples.data.isLeaf,
                        imageCount: samples.imageCount,
                    });
                });
                this.titleData = visibleLight;
            }
        });
    }
    loadStatInfo() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/stat-infos/`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.statInfo = result.data;
                var yhCount;
                var totalUserNum = JSON.parse(this.statInfo.totalUserNum);
                totalUserNum.forEach(element => {
                    if (element.count) {
                        yhCount = element.count;
                    }
                });
                this.statInfo.totalUserNum = yhCount;
            }
        });
    }
    scrollChange(event, key) {
        const id = event.target.children[event.target.childElementCount - 1].id;
        const clientHeight = event.target.clientHeight;
        const scrollTop = event.target.scrollTop;
        const scrollHeight = event.target.scrollHeight;
        // console.log(Math.ceil(scrollTop + clientHeight) + ' ---->' + scrollHeight);
        if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('typeId', key);
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/${id}`, { params }).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    result.data.map((s) => {
                        if (s.markStatus == 0) {
                            s.markStatusText = "未标注";
                        }
                        else if (s.markStatus == 1) {
                            s.markStatusText = "已标注";
                        }
                        else if (s.markStatus == 2) {
                            s.markStatusText = "标注错误";
                        }
                        else if (s.markStatus == 3) {
                            s.markStatusText = "正确的标注(审核通过)";
                        }
                        else if (s.markStatus == 4) {
                            s.markStatusText = "客户端图片检测纠错过来的数据";
                        }
                        this.dataSet.push(s);
                    });
                }
            });
        }
    }
    toDetail(imageId) {
        this.router.navigate(['../detail', { imageId }], { relativeTo: this.route });
        console.log('点击了', imageId);
    }
}
NotLeafDataManageComponent.ɵfac = function NotLeafDataManageComponent_Factory(t) { return new (t || NotLeafDataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NotLeafDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotLeafDataManageComponent, selectors: [["ng-component"]], decls: 126, vars: 40, consts: [[1, "flex-column", 2, "height", "100%"], [1, "analyze", "flex-row"], [1, "analyze-item"], [1, "analyze-item-title"], [1, "analyze-item-value"], [1, "analyze-item-key"], [1, "pictures", "flex-row"], [1, "picture-left", "picture-bg-y", "flex-column"], [1, "picture-left-top", "picture-bg-x", "flex-column"], [1, "picture-title"], [1, "picture-quantity"], [1, "picture-item", 3, "scroll"], [4, "ngFor", "ngForOf"], [1, "picture-left-bottom", "flex-column"], [1, "picture-right", "flex-column"], [1, "picture-right-top", "picture-bg-x", "flex-row"], [1, "picture-right-top-item", "flex-column", "picture-bg-y"], [1, "picture-right-top-item", "flex-column"], [1, "picture-right-middle", "picture-bg-x", "flex-row"], [1, "picture-right-middle-item", "flex-column", "picture-bg-y"], [1, "picture-right-middle-item", "flex-column"], [1, "picture-right-bottom", "flex-row"], [1, "picture-right-bottom-item", "flex-column", "picture-bg-y"], [1, "picture-right-bottom-item", "flex-column"], ["style", "position: relative;", 3, "id", 4, "ngIf"], [2, "position", "relative", 3, "id"], ["alt", "\u56FE\u7247", 1, "picture", 3, "src", "id", "title", "click"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", "style", "color: rgb(19, 111, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", "style", "color: rgb(230, 98, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", "style", "color: rgb(197, 134, 17);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", "style", "color: rgb(22, 187, 63);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "style", "color: red;position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["style", "color: red;position: absolute;top: -10px;left: -5px;width: 10px;height: 10px;", "title", "\u6B64\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 4, "ngIf"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", 2, "color", "rgb(19, 111, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", 2, "color", "rgb(230, 98, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", 2, "color", "rgb(197, 134, 17)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "rgb(22, 187, 63)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 2, "color", "red", "position", "absolute", "bottom", "0", "right", "0"], ["title", "\u6B64\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 2, "color", "red", "position", "absolute", "top", "-10px", "left", "-5px", "width", "10px", "height", "10px"], ["t", "1646357872681", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "691", "width", "20", "height", "20", 1, "icon", 2, "position", "relative", "top", "7px"], ["d", "M210.285714 320.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429 16.365714-36.571429 36.571428-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM813.714286 320.091429c20.205714 0 36.571429 16.365714 36.571428 36.571428s-16.365714 36.571429-36.571428 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM512 832.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857z", "fill", "#248BFF", "p-id", "692"], ["d", "M301.714286 644.662857m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "693"], ["d", "M483.474286 522.88l-173.714286-84.571429c-2.56-1.188571-5.302857-1.828571-8.045714-1.828571s-5.485714 0.64-8.045715 1.828571l-173.714285 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714285 84.571428c2.56 1.188571 5.302857 1.828571 8.045715 1.828572s5.485714-0.64 8.045714-1.828572l173.714286-84.571428c6.217143-3.108571 10.24-9.508571 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM457.142857 738.651429l-155.428571 75.702857-155.428572-75.702857V550.765714l155.428572-75.702857 155.428571 75.702857v187.885715z", "fill", "#248BFF", "p-id", "694"], ["d", "M228.571429 644.662857c0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857-73.142857 32.731429-73.142857 73.142857z m109.714285 0c0 20.205714-16.365714 36.571429-36.571428 36.571429s-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428 36.571429 16.457143 36.571428 36.571428z", "fill", "#248BFF", "p-id", "695"], ["d", "M722.285714 644.662857m-36.571428 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "696"], ["d", "M693.76 166.308571l-173.714286-84.571428c-2.56-1.28-5.302857-1.828571-8.045714-1.828572s-5.485714 0.64-8.045714 1.828572l-173.714286 84.571428c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571429c2.56 1.188571 5.302857 1.828571 8.045714 1.828571s5.485714-0.64 8.045714-1.828571l173.714286-84.571429c6.217143-3.108571 10.24-9.508571 10.24-16.457143V182.765714c0-7.04-4.022857-13.44-10.24-16.457143zM512 324.662857c-20.205714 0-36.571429-16.365714-36.571429-36.571428s16.365714-36.571429 36.571429-36.571429 36.571429 16.365714 36.571429 36.571429-16.365714 36.571429-36.571429 36.571428z m155.428571 57.417143l-137.142857 66.742857v-89.965714c31.542857-8.137143 54.857143-36.662857 54.857143-70.765714 0-40.411429-32.731429-73.142857-73.142857-73.142858s-73.142857 32.731429-73.142857 73.142858c0 34.102857 23.314286 62.628571 54.857143 70.765714v89.965714l-137.142857-66.742857V194.194286l155.428571-75.702857 155.428571 75.702857v187.885714z", "fill", "#248BFF", "p-id", "697"], ["d", "M512 288.091429m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z", "fill", "#B4D7FE", "p-id", "698"], ["d", "M356.571429 630.948571c-6.308571 0-12.434286-3.291429-15.817143-9.051428-5.12-8.685714-2.102857-19.931429 6.582857-25.051429l109.714286-64c8.777143-5.12 19.931429-2.102857 25.051428 6.582857s2.102857 19.931429-6.582857 25.051429l-109.714286 64c-2.925714 1.737143-6.125714 2.468571-9.234285 2.468571z", "fill", "#248BFF", "p-id", "699"], ["d", "M904.045714 522.88l-173.714285-84.571429c-2.56-1.188571-5.302857-1.828571-8.045715-1.828571s-5.485714 0.64-8.045714 1.828571l-173.714286 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571428c2.56 1.188571 5.302857 1.828571 8.045714 1.828572s5.485714-0.64 8.045715-1.828572l173.714285-84.571428c6.308571-3.017143 10.24-9.417143 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM877.714286 738.651429l-155.428572 75.702857-155.428571-75.702857V575.177143l85.12 49.645714c-1.828571 6.308571-2.834286 12.982857-2.834286 19.84 0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857a73.124571 73.124571 0 0 0-125.074285-51.474286l-86.765715-50.651428L722.285714 475.062857l155.428572 75.702857v187.885715zM685.714286 644.662857c0-20.205714 16.365714-36.571429 36.571428-36.571428s36.571429 16.365714 36.571429 36.571428-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429z", "fill", "#248BFF", "p-id", "700"]], template: function NotLeafDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u7C7B \u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u5927\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u5C0F\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6570 \u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u5F20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u6807 \u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u5F20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u6A21 \u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u7528 \u6237");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_50_listener($event) { return ctx.scrollChange($event, ctx.titleData[0] == null ? null : ctx.titleData[0].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, NotLeafDataManageComponent_ng_container_51_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_57_listener($event) { return ctx.scrollChange($event, ctx.titleData[1] == null ? null : ctx.titleData[1].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NotLeafDataManageComponent_ng_container_58_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_66_listener($event) { return ctx.scrollChange($event, ctx.titleData[2] == null ? null : ctx.titleData[2].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, NotLeafDataManageComponent_ng_container_67_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_73_listener($event) { return ctx.scrollChange($event, ctx.titleData[3] == null ? null : ctx.titleData[3].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, NotLeafDataManageComponent_ng_container_74_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_81_listener($event) { return ctx.scrollChange($event, ctx.titleData[4] == null ? null : ctx.titleData[4].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, NotLeafDataManageComponent_ng_container_82_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_88_listener($event) { return ctx.scrollChange($event, ctx.titleData[5] == null ? null : ctx.titleData[5].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, NotLeafDataManageComponent_ng_container_89_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_95_listener($event) { return ctx.scrollChange($event, ctx.titleData[6] == null ? null : ctx.titleData[6].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, NotLeafDataManageComponent_ng_container_96_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_103_listener($event) { return ctx.scrollChange($event, ctx.titleData[7] == null ? null : ctx.titleData[7].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, NotLeafDataManageComponent_ng_container_104_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_110_listener($event) { return ctx.scrollChange($event, ctx.titleData[8] == null ? null : ctx.titleData[8].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, NotLeafDataManageComponent_ng_container_111_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_117_listener($event) { return ctx.scrollChange($event, ctx.titleData[9] == null ? null : ctx.titleData[9].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, NotLeafDataManageComponent_ng_container_118_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_124_listener($event) { return ctx.scrollChange($event, ctx.titleData[10] == null ? null : ctx.titleData[10].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, NotLeafDataManageComponent_ng_container_125_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.largeTypeNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.smallTypeNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.totalNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.markNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.modelTypeNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.modelNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.totalUserNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[0] == null ? null : ctx.titleData[0].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[0] == null ? null : ctx.titleData[0].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[1] == null ? null : ctx.titleData[1].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[1] == null ? null : ctx.titleData[1].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[2] == null ? null : ctx.titleData[2].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[2] == null ? null : ctx.titleData[2].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[3] == null ? null : ctx.titleData[3].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[3] == null ? null : ctx.titleData[3].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[4] == null ? null : ctx.titleData[4].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[4] == null ? null : ctx.titleData[4].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[5] == null ? null : ctx.titleData[5].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[5] == null ? null : ctx.titleData[5].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[6] == null ? null : ctx.titleData[6].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[6] == null ? null : ctx.titleData[6].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[7] == null ? null : ctx.titleData[7].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[7] == null ? null : ctx.titleData[7].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[8] == null ? null : ctx.titleData[8].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[8] == null ? null : ctx.titleData[8].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[9] == null ? null : ctx.titleData[9].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[9] == null ? null : ctx.titleData[9].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[10] == null ? null : ctx.titleData[10].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[10] == null ? null : ctx.titleData[10].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__["OssPathPipe"]], styles: [".analyze-item-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  color: #ffffff;\n  width: 220px;\n  line-height: 44px;\n}\n.analyze-item-value[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #eea200;\n  line-height: 88px;\n  height: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9ub3QtbGVhZi9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9ub3QtbGVhZi9ub3QtbGVhZi5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9ub3QtbGVhZi9ub3QtbGVhZi5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7QUNBRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvZGF0YS1tYW5hZ2Uvbm90LWxlYWYvbm90LWxlYWYuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5hbHl6ZS1pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAyMjBweDtcbiAgLy9oZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAvL2hlaWdodDogMTIwcHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzY1Q0FGRjtcbn1cblxuLmFuYWx5emUtaXRlbS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNlZWEyMDA7XG4gIGxpbmUtaGVpZ2h0OiA4OHB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG4iLCIuYW5hbHl6ZS1pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4uYW5hbHl6ZS1pdGVtLXZhbHVlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2VlYTIwMDtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG4gIGhlaWdodDogODhweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotLeafDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './not-leaf.data-manage.component.html',
                styleUrls: ['./not-leaf.data-manage.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/rename-sample-type.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-manage/rename-sample-type.component.ts ***!
  \*******************************************************************/
/*! exports provided: RenameSampleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameSampleTypeComponent", function() { return RenameSampleTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");







class RenameSampleTypeComponent {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.addForm = this.fb.group({
            sampleTypeName: [this.sampleTypeName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(45)]],
        });
    }
    getNewName() {
        for (const i in this.addForm.controls) {
            this.addForm.controls[i].markAsDirty();
            this.addForm.controls[i].updateValueAndValidity();
        }
        if (this.addForm.valid) {
            return this.addForm.value.sampleTypeName;
        }
        return null;
    }
}
RenameSampleTypeComponent.ɵfac = function RenameSampleTypeComponent_Factory(t) { return new (t || RenameSampleTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RenameSampleTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenameSampleTypeComponent, selectors: [["ng-component"]], inputs: { sampleTypeName: "sampleTypeName" }, decls: 7, vars: 5, consts: [["nz-form", "", 3, "formGroup"], ["nzRequired", "", "nzFor", "sampleTypeName", 3, "nzXl", "nzMd"], [3, "nzXl", "nzMd"], ["nz-input", "", "formControlName", "sampleTypeName", "name", "sampleTypeName"]], template: function RenameSampleTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u5206\u7C7B\u540D\u79F0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 6)("nzMd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 16)("nzMd", 16);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvcmVuYW1lLXNhbXBsZS10eXBlLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenameSampleTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './rename-sample-type.component.html',
                styleUrls: ['./rename-sample-type.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { sampleTypeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=data-manage-data-manage-module.js.map