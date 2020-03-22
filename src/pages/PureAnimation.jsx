import React from 'react'
import './styles.scss'

const ANIM_TIME = 300;

class PureAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemToRemove: { id: -1, name: '' },
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
    const itemToRemove = this.state.favorites.filter(i => +e.target.id === i.id)[0].id;

    this.setState({ itemToRemove: itemToRemove });
    setTimeout(() => {
      this.setState({ favorites: items })
    }, ANIM_TIME)
  };


  render() {
    return (
      <div className="page-container">
        <h1>Pure CSS animation</h1>
        <p>an approach to implement animation without libs, only CSS.</p>
        <button onClick={this.handleAdd}>add</button>
        <ul>
          {this.state.favorites.map(
            ({ id, name }) => {
              const toDelete = this.state.itemToRemove === id;
              return (
                <li key={id} className={toDelete && 'kick'}>
                  {name}
                  <button id={id} onClick={this.handleRemove}>remove</button>
                </li>
              )
            },
          )}
        </ul>
      </div>
    )
  }

}

export default PureAnimation