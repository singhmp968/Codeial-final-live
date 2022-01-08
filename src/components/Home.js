import React, { Component } from 'react';
import { PostsList } from './';

class Home extends Component {
  render() {
    const { posts } = this.props; //  reciving the post value from Home component and then passingg it to post componenets
    console.log('posts and props', this.props);
    // here in the above c.log all the feature  i.e history,match and location and other props value that given to us by route props is gone there fore to solve it we have to pass (prop) like this in the arrow functin and passe thar in the home compo like ttis {...props}
    return (
      <div className="home">
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
