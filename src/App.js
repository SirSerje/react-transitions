import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.scss'


export default class App extends React.Component {
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
    console.log(this.state.favorites);
    return (
      <div className="favorites">
        <Button onClick={this.handleAdd}>add</Button>
        <TransitionGroup component="ul">
          {this.state.favorites.map(
            ({ id, name }) => (
              <CSSTransition
                timeout={500}
                classNames="fade"
                key={id}
              >
                <li className="favorite">
                  {name}
                  <Button id={id} onClick={this.handleRemove}>remove</Button>
                </li>
              </CSSTransition>
            ),
          )}
        </TransitionGroup>
      </div>
    );
  }
}