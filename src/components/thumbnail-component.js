import React from 'react';

class Thumbnail extends React.Component {
  render() {
    const { photo } = this.props;

    return (
      <li className="thumbnail">
        <a href="#">
          <img
            src={photo.images.low_resolution.url}
            alt={photo.caption.text}
          />
          <div className="meta">
            <span className="likes">❤️ {photo.likes.count} &nbsp;</span>
            <span className="comments">💬 {photo.comments.count}</span>
          </div>
        </a>
      </li>
    );
  }
}

export default Thumbnail;
