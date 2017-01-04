import React from 'react';
import classNames from 'classnames';

class Lightbox extends React.Component {
  // Pass close signal to parent
  toggleLightbox(pic) {
    console.log('Close lightbox bc overlay clicked');
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
          <span
            className="prev"
            onClick={() => this.toggleArrow(selected_pic, 'prev')}
          >
            ⬅️
          ️</span>
          <p><img src={photos[selected_pic].images.standard_resolution.url} /></p>
          <span
            className="next"
            onClick={() => this.toggleArrow(selected_pic, 'next')}
          >
            ➡
          ️</span>
        </div>
        <div
          className="overlay"
          onClick={() => this.toggleLightbox(null)}
        />
      </section>
    );
  }
}

export default Lightbox;
