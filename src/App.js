
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Beers from './beers';
import './App.css';

console.clear()


class App extends Component {
  

  render() {
    console.log('i rendered')
    return <div className="App">
      <Beers />
    </div>;
  }
}

export default App;
