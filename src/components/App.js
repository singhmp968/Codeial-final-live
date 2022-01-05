import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';
//import { PostsList } from './';
//import { PostsList } from './PostsList';
import PropsTypes from 'prop-types';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="posts-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1641400582~hmac=d17ebdb620bd704911fc8a732ba00356"
                    alt="user-pic"
                  />
                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>

                <div className="post-actions">
                  <div className="post-like">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                      alt="likes-icon"
                    />
                    <span>{post.likes.length}</span>
                  </div>

                  <div className="post-comments-icon">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/1947/premium/1947247.png?token=exp=1641400689~hmac=03b24ecf8fd981253caf0f77f93dac2a"
                      alt="comments-icon"
                    />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
                <div className="post-comment-box">
                  <input placeholder="Start typing a comment" />
                </div>

                <div className="post-comments-list">
                  <div className="post-comments-item">
                    <div className="post-comment-header">
                      <span className="post-comment-author">Bill</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">22</span>
                    </div>

                    <div className="post-comment-content">Random comment</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <PostsList posts={posts} /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.PropsTypes = {
  posts: PropsTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
