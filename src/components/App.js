import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup, Settings } from './';
import { authenticateUser } from '../actions/auth';

// const Login = () => <div>Login</div>;

// const Signup = ( ) => <div>Signup</div>;

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
// const Settings = () => <div>Setting</div>;
const PrivateRoute = (privateRoutesProps) => {
  const { isLoggedin, path, component: Component } = privateRoutesProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { posts, auth } = this.props;
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
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedin={auth.isLoggedin}
            />
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
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
