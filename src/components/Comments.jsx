import React from "react";

class Comments extends React.Component {
  state = {
    comments: []
  };

  render() {
    return (
      <>
        {this.props.comments &&
          this.props.comments.map(comment => (
            <div key={comment._id}>
              {comment.author}: {comment.comment}
            </div>
          ))}
        {!this.props.comments && this.props.comments.length > 0 && <h4>No comments</h4>}
      </>
    );
  }
}

export default Comments;
