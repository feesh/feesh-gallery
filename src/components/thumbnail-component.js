import React from 'react';

class Thumbnail extends React.Component {
  // Pass next photo selection to parent
  toggleLightbox(pic) {
    console.log(pic);
    this.props.toggleLightbox(pic);
  }

  render() {
    const { photo } = this.props;

    return (
      <li
        className="thumbnail"
        onClick={() => this.toggleLightbox(this.props.id)}
      >
        <img
          src={photo.images.low_resolution.url}
          alt={photo.caption.text}
        />
        <div className="meta">
          <span className="likes">❤️ {photo.likes.count} &nbsp;</span>
          <span className="comments">💬 {photo.comments.count}</span>
        </div>
      </li>
    );
  }
}

export default Thumbnail;
