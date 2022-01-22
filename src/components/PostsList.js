import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CreatePost } from './';
import { addLike } from '../actions/posts';
import posts from '../reducers/posts';
import { connect } from 'react-redux';
//sfdsfsdfsd

class PostsList extends Component {
  handlePostLike = () => {
    const { posts, user } = this.props;
    console.log('dsadsd=>', posts);
    this.props.dispatch(addLike(posts._id, 'Post', user._id));
  };
  render() {
    const { posts, user } = this.props;
    // console.log('postss=>', posts);
    console.log('user=>', this.props);

    // const isPostLikedByUser = posts.likes.includes(user._id);
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <Link to={`/user/${post.user._id}`}>
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-pic"
                  />
                </Link>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <button
                  className="post-like no-btn"
                  onClick={this.handlePostLike}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                    alt="likes-icon"
                  />
                  {/* {isPostLikedByUser ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                      alt="likes-icon"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1076/1076984.png"
                      alt="likes-icon"
                    />
                  )} */}
                  <span>{post.likes.length}</span>
                </button>
                {/* </div> */}

                <div className="post-comments-icon">
                  <img
                    src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
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
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
// need to do in the post for now doing here but need to replace
function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(PostsList);
