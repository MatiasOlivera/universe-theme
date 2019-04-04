// https://devhints.io/react
import PropTypes from 'prop-types';
import React from 'react';
import React, { Component } from 'react';
import React, { Component, Fragment } from 'react';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom';


// Components
class Hello extends React.Component {
  render() {
    return <div className="message-box">Hello {this.props.name}</div>;
  }
}
const el = document.body;
ReactDOM.render(<Hello name="John" />, el);

// Import multiple exports
class Hello extends Component {}

// Properties
class Video extends Component {
  render() {
    this.props.fullscreen;
    const { fullscreen, autoplay } = this.props;
  }
}

// Nesting
class Info extends Component {
  render() {
    const { avatar, username } = this.props;

    return (
      <div>
        <UserAvatar src={avatar} />
        <UserProfile username={username} />
      </div>
    );
  }
}

class Info extends Component {
  render() {
    const { avatar, username } = this.props;

    return (
      <Fragment>
        <UserAvatar src={avatar} />
        <UserProfile username={username} />
      </Fragment>
    );
  }
}

// Defaults

// Setting default props
Hello.defaultProps = {
  color: 'blue'
};

// Setting default state

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
}

class Hello extends Component {
  state = { visible: true };
}

// Other components

// Functional components
function MyComponent({ name }) {
  return <div className="message-box">Hello {name}</div>;
}

// Pure components
class MessageBox extends PureComponent {}

// Component API
class MessageBox extends PureComponent {
  render() {
    this.forceUpdate();
    this.setState({});
    this.setState((state) => {});
    this.state;
    this.props;
  }
}

// Lifecycle
class MyComponent extends Component {
  // Mounting
  constructor(props) {}
  componentWillMount() {}
  render() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidCatch() {}

  // Updating
  componentDidUpdate(prevProps, prevState, snapshot) {}
  shouldComponentUpdate(newProps, newState) {}
  render() {}
  componentDidUpdate(prevProps, prevState) {}
}

// DOM nodes

// References
class MyComponent extends Component {
  render() {
    return (
      <div>
        <input ref={(el) => (this.input = el)} />
      </div>
    );
  }

  componentDidMount() {
    this.input.focus();
  }
}

// DOM Events
class MyComponent extends Component {
  render() {
    <input
      type="text"
      value={this.state.value}
      onChange={(event) => this.onChange(event)}
    />;
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }
}

// Other features

// Transferring props
class VideoPlayer extends Component {
  render() {
    return <VideoEmbed {...this.props} />;
  }
}

// Top-level API
React.createClass({});
React.isValidElement(c);
ReactDOM.render(<Component />, domnode, [callback]);
ReactDOM.unmountComponentAtNode(domnode);
ReactDOMServer.renderToString(<Component />);
ReactDOMServer.renderToStaticMarkup(<Component />);

// JSX patterns

// Style shorthand
class MyComponent extends Component {
  render() {
    const style = { height: 10 };
    return <div style={style} />;
  }
}

class MyComponent extends Component {
  render() {
    return <div style={{ margin: 0, padding: 0 }} />;
  }
}

// Conditionals
class MyComponent extends Component {
  render() {
    <Fragment>
      {showMyComponent ? <MyComponent /> : <OtherComponent />}
    </Fragment>;
  }
}

// Inner HTML
function markdownify() {
  return '<p>...</p>';
}

class MyComponent extends Component {
  render() {
    <div dangerouslySetInnerHTML={{ __html: markdownify() }} />;
  }
}

// Lists
class TodoList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item) => (
          <TodoItem item={item} key={item.key} />
        ))}
      </ul>
    );
  }
}

// Short-circuit evaluation
class MyComponent extends Component {
  render() {
    <Fragment>{showPopup && <Popup />}</Fragment>;
  }
}

// New features

// Returning multiple elements
class MyComponent extends Component {
  render() {
    // Don't forget the keys!
    return [<li key="A">First item</li>, <li key="B">Second item</li>];
  }
}

class MyComponent extends Component {
  render() {
    // Fragments don't require keys!
    return (
      <Fragment>
        <li>First item</li>
        <li>Second item</li>
      </Fragment>
    );
  }
}

// Returning strings
class MyComponent extends Component {
  render() {
    return 'Look ma, no spans!';
  }
}

// Portals
class MyComponent extends Component {
  render() {
    return React.createPortal(
      this.props.children,
      document.getElementById('menu')
    );
  }
}

// Errors
class MyComponent extends Component {
  componentDidCatch(error, info) {
    this.setState({ error });
  }
}

// Hydration
const el = document.getElementById('app');
ReactDOM.hydrate(<App />, el);

// Property validation

// PropTypes
// Basic types
MyComponent.propTypes = {
  email: PropTypes.string,
  seats: PropTypes.number,
  callback: PropTypes.func,
  isClosed: PropTypes.bool,
  any: PropTypes.any
};

// Enumerables (oneOf)
MyCo.propTypes = {
  direction: PropTypes.oneOf(['left', 'right'])
};

// Custom validation
MyCo.propTypes = {
  customProp: (props, key, componentName) => {
    if (!/matchme/.test(props[key])) {
      return new Error('Validation failed!');
    }
  }
};

// Required types
MyCo.propTypes = {
  name: PropTypes.string.isRequired
};

// Elements
MyCo.propTypes = {
  // React element
  element: PropTypes.element,

  // num, string, element, or an array of those
  node: PropTypes.node
};

// Arrays and objects
MyCo.propTypes = {
  list: PropTypes.array,
  ages: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.object,
  user: PropTypes.objectOf(PropTypes.number),
  message: PropTypes.instanceOf(Message)
};
MyCo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })
};
