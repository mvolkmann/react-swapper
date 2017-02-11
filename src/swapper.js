import React, {Component, PropTypes as t} from 'react';
import Select from './select';
import {firstInArrayNot} from './array-util';

class Swapper extends Component {
  static propTypes = {
    leftItems: t.arrayOf(t.string).isRequired,
    onMoveLeft: t.func.isRequired,
    onMoveRight: t.func.isRequired,
    rightItems: t.arrayOf(t.string).isRequired,
    size: t.number
  };

  state = {
    leftSelected: '',
    rightSelected: ''
  };

  onLeftSelect = event => {
    const {value} = event.target;
    this.setState({leftSelected: value});
  };

  onRightSelect = event => {
    const {value} = event.target;
    this.setState({rightSelected: value});
  };

  moveLeft = () => {
    const selected = this.state.rightSelected;
    this.props.onMoveLeft(selected);
    this.setState({
      leftSelected: selected,
      rightSelected: firstInArrayNot(this.props.rightItems, selected)
    });
  };

  moveRight = () => {
    const selected = this.state.leftSelected;
    this.props.onMoveRight(selected);
    this.setState({
      leftSelected: firstInArrayNot(this.props.leftItems, selected),
      rightSelected: selected
    });
  };

  render() {
    const {leftItems, rightItems, size} = this.props;
    const {leftSelected, rightSelected} = this.state;

    return (
      <div className="swapper">
        <Select
          items={leftItems}
          onSelect={this.onLeftSelect}
          size={size}
          value={leftSelected}
        />
        <div className="buttons">
          <button disabled={!leftSelected} onClick={this.moveRight}>
            &#x21e8;
          </button>
          <button disabled={!rightSelected} onClick={this.moveLeft}>
            &#x21e6;
          </button>
        </div>
        <Select
          items={rightItems}
          onSelect={this.onRightSelect}
          size={size}
          value={rightSelected}
        />
      </div>
    );
  }
}

export default Swapper;
