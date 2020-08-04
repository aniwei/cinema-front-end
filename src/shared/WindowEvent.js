const isArray = Array.isArray;
const _eventCallbacks = {};
const _eventHandlers = {};
const fire = (e, event) => {
  const callbacks = _eventCallbacks[event];

  if (!callbacks) {
    return;
  }

  if (isArray(callbacks)) {
    for (let i = 0, len = callbacks.length; i < len; i++) {
      const { callback, __ONCE__ } = callbacks[i];

      callback(e);

      if (__ONCE__) {
        callbacks.splice(i, 1);
        i = i === len - 1 ? i : 1;
      }
    }
  } else {
    callbacks.callback();

    if (callbacks.__ONCE__) {
      _eventCallbacks[event] = null;
    }
  }

  !callbacks.length && window.removeEventListener(event, _eventHandlers[event], false);
};

class WindowEvent {
  on(event, callback) {
    if (!_eventCallbacks[event]) {
      _eventCallbacks[event] = [];
      Object.defineProperty(_eventHandlers, event, {
        value: e => fire(e, event),
        configurable: true,
      });
      window.addEventListener(event, _eventHandlers[event], false);
    } else {
      if (!isArray(_eventCallbacks[event])) {
        return;
      }
    }

    _eventCallbacks[event].push({
      callback,
      __ONCE__: false,
      __ONLY__: false,
    });
  }

  only(event, callback) {
    if (!_eventCallbacks[event]) {
      Object.defineProperty(_eventHandlers, event, {
        value: e => fire(e, event),
        configurable: true,
      });
      window.addEventListener(event, _eventHandlers[event], false);
    }

    _eventCallbacks[event] = {
      callback,
      __ONLY__: true,
      __ONCE__: false,
    };
  }

  once(event, callback) {
    if (!_eventCallbacks[event]) {
      _eventCallbacks[event] = [];
      Object.defineProperty(_eventHandlers, event, {
        value: e => fire(e, event),
        configurable: true,
      });
      window.addEventListener(event, _eventHandlers[event], false);
    } else {
      if (!isArray(_eventCallbacks[event])) {
        return;
      }
    }

    _eventCallbacks[event].push({
      callback,
      __ONCE__: true,
      __ONLY__: false,
    });
  }

  onlyOnce(event, callback) {
    if (!_eventCallbacks[event]) {
      Object.defineProperty(_eventHandlers, event, {
        value: e => fire(e, event),
        configurable: true,
      });
      window.addEventListener(event, _eventHandlers[event], false);
    }

    _eventCallbacks[event] = {
      callback,
      __ONLY__: true,
      __ONCE__: true,
    };
  }

  off(event, callback) {
    const callbacks = _eventCallbacks[event];

    if (!callbacks) {
      return;
    }

    if (isArray(callbacks)) {
      for (let i = callbacks.length - 1; i--;) {
        if (callbacks[i] === callback) {
          callbacks.splice(i, 1);
          break;
        }
      }
    } else {
      _eventCallbacks[event] = null;
    }

    !callbacks.length && window.removeEventListener(event, _eventHandlers[event], false);
  }
}

export default new WindowEvent();
