import React from 'react'
import './styles.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class CssTransitions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [
        { id: new Date().getTime(), name: new Date().getTime() },
        { id: new Date().getTime() + 1, name: new Date().getTime() + 1 }],
    }
  }

  handleAdd = (e) => {
    const items = this.state.favorites;
    this.setState({ favorites: [...items, { id: new Date().getTime(), name: new Date().getTime() }] })
  };

  handleRemove = (e) => {
    const items = this.state.favorites.filter(i => +e.target.id !== i.id);
    this.setState({ favorites: items })
  };

  render() {
    return (
      <div className="page-container">
        <h1>Transition Group with List</h1>
        <p>Example, where we will use react-transition-group with simple list</p>
        <button onClick={this.handleAdd}>add</button>
        <TransitionGroup component="ul">
          {this.state.favorites.map(
            ({ id, name }) => (
              <CSSTransition
                timeout={500}
                classNames="fade"
                key={id}
              >
                <li>
                  {name}
                  <button id={id} onClick={this.handleRemove}>remove</button>
                </li>
              </CSSTransition>
            ),
          )}
        </TransitionGroup>
      </div>
    )
  }
}

export default  CssTransitions;