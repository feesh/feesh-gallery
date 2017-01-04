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

  render() {
    const { photos, selected_pic } = this.props;

    return (
      <section className="content__lightbox">
        <div className="modal">
          <div className="header">
            <span
              className="bigmoji close"
              onClick={() => this.toggleLightbox(null)}
              title="Close lightbox"
            >
              ❌
            </span>
          </div>
          <div className="modal-body">
            <span
              className="bigmoji arrow prev"
              onClick={() => this.toggleArrow(selected_pic, 'prev')}
              title="View previous photo"
            >
              ◀️
            ️</span>
            <div className="image">
              <img
                src={photos[selected_pic].images.standard_resolution.url}
                alt={photos[selected_pic].caption.text}
              />
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
