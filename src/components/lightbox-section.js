import React from 'react';
import classNames from 'classnames';

class Lightbox extends React.Component {
  render() {
    const { photos, selected_pic } = this.props;

    return (
      <section className="content__lightbox">
        <div className="modal">
          <p><img src={photos[selected_pic].images.standard_resolution.url} /></p>
        </div>
        <div className="overlay" />
      </section>
    );
  }
}

export default Lightbox;
