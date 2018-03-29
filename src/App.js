/*jshint esversion: 6 */
import React, {
  Component
} from 'react';

class Aggregate extends Component {
  render() {
    return ( 
    <section className='playlists_Info'>
      <div className='amount_playlists'><h2>Number of playlists</h2> </div>
      <div className='playlists_hours'><h2>Number of Hours</h2></div>
    </section>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <section>
        <img src="" alt=""/>
        <input type="text"/>
        Filter
      </section>
    );
  }
}

class App extends Component {
  render() {
    return ( <div className = "App">
      <h1>Title</h1> 
      <Aggregate></Aggregate>
      <Filter></Filter>
      </div>
    );
  }
}

export default App;