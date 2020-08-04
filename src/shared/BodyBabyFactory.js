import ReactDOM from 'react-dom';

class BodyBabyFactory {
  constructor(options) {
    this.element = null;
    this.options = options || {};
    this.createElement();
  }

  get newborn() {
    return this.element;
  }

  createElement = () => {
    const { tag = 'div', cssText } = this.options;
    const element = document.createElement(tag);

    if (cssText) {
      element.style.cssText = cssText;
    }

    this.element = element;

    return this;
  };

  exFactory = Element => {
    document.body.appendChild(this.element);
    ReactDOM.render(
      typeof Element === 'function'
        ? <Element />
        : Element,
      this.element,
    );

    return this.element;
  }
}

export default BodyBabyFactory;
