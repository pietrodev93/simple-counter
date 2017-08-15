import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { count: 0 };
    }

    incrementCount = () => {
		this.setState(
            { count: this.state.count + 1 }
        );
	};
    decrementCount = () => {
      this.setState(
        { count: this.state.count - 1 }
      );
    };

    handleClick() {

      const rand = Math.floor(Math.random()*101);
      this.setState({ count: this.state.count + rand });
    };

    resetCount = () => {
      const reset = 0;
      this.setState(
        { count: this.state.count = reset }
      );
    };

    render() {
      const styles = {
        textAlign: 'center',
        position: 'absolute',
        top: '40%',
        left: 0,
        right: 0
      }
        return (
          <div style={styles}>
            <h1 style={{color: 'white'}}>
				Clicks: { this.state.count }
			</h1>
      <button onClick={ this.incrementCount }>Incrementa </button><button onClick={this.decrementCount}>Decrementa</button>
      <button onClick={this.handleClick}>Numero a caso</button> <button onClick={this.resetCount}>Resetta</button>
      </div>
        );
    }
}

ReactDOM.render(
	<Counter/>,
	document.getElementById('root')
);
