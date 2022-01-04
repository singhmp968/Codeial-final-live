// function App() {
//   return <div className="App">Apps</div>;
// }

// creatinga function componenet
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
class App extends React.Component {
  componentDidMount() {
    console.log('sda');
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PRPOS', this.props);
    return <div>App</div>;
  }
}

function mapStareTOProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStareTOProps)(App);
