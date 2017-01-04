import React from 'react';
import classNames from 'classnames';

class Lightbox extends React.Component {
  // Pass close signal to parent
  toggleLightbox(pic) {
    console.log('Close lightbox bc overlay or x clicked');
    this.props.toggleLightbox(pic);
  }

  // Pass next or prev click to parent
  toggleArrow(pic, dir) {
    this.props.toggleArrow(pic, dir);
  }

  // Render which type of media it is
  renderPost(pic, type) {
    const { photos } = this.props;

    if (type === 'image') {
      return (
        <img
          src={photos[pic].images.standard_resolution.url}
          alt={photos[pic].caption.text}
        />
      );
    } else if (type === 'video') {
      return (
        <video
          width={photos[pic].videos.standard_resolution.width}
          height={photos[pic].videos.standard_resolution.height}
          title={photos[pic].caption.text}
          controls
        >
          <source
            src={photos[pic].videos.standard_resolution.url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <p>Invalid type</p>
      );
    }
  }

  render() {
    const { photos, selected_pic } = this.props;

    return (
      <section className="content__lightbox">
        <div className="modal">
          <span
            className="bigmoji close"
            onClick={() => this.toggleLightbox(null)}
            title="Close lightbox"
          >
            ❌
          </span>
          <div className="modal-body">
            <span
              className="bigmoji arrow prev"
              onClick={() => this.toggleArrow(selected_pic, 'prev')}
              title="View previous photo"
            >
              ◀️
            ️</span>
            <div className="image">
              {this.renderPost(selected_pic, photos[selected_pic].type)}
              <h3>{photos[selected_pic].caption.text}</h3>
            </div>
            <span
              className="bigmoji arrow next"
              onClick={() => this.toggleArrow(selected_pic, 'next')}
              title="View next photo"
            >
              ▶️
            ️</span>
          </div>
        </div>
        <div
          className="overlay"
          title="Click to close lightbox"
          onClick={() => this.toggleLightbox(null)}
        />
      </section>
    );
  }
}

export default Lightbox;
