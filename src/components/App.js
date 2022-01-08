import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404 } from './';

const Login = () => <div>Login</div>;

const Signup = () => <div>Signup</div>;

// const Home = (props) => {
//   console.log('props', props);
//   /* we will get thin in c.log this values and we will be reciving from this router props
//   history: {length: 1, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: '/', search: '', hash: '', state: undefined}
// match: {path: '/', url: '/', isExact: true, params: {…}}
// staticContext: undefined
//   */
//   return <div>Home</div>;
// };

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          {/* here we are making exact path mathc for avoiding the incorrect issue */}
          {/* <Route exact path="/" component={Home}  // here by this we cannot pass the post value as the props there fore we have to pass it by using render methods /> */}
          {/* here we are adding this statement to render the componenet and avoifd Page404 concatination into the compomement */}
          <Switch>
            {/* this switch statement will return as soon ot match the route  and won't add any other components apart from this */}
            <Route
              exact
              path="/"
              render={(props) => {
                // inorder to solve the history match and location gone problem we can solve this issu by passing a props value inside the arrow function (props) and we can pass like this {...props} in teh Home Compoenets
                return <Home {...props} posts={posts} />;
              }}
            />

            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
            {/* //here we this comp i.e Page404 will also render there fore we have to use other componete to make swithh in teh componenets  */}
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
