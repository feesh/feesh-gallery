import React from 'react';
import classNames from 'classnames';

class Lightbox extends React.Component {
  render() {
    const { photos, selected_pic } = this.props;

    return (
      <section className="content__lightbox">
        <p><img src={photos[selected_pic].images.low_resolution.url} /></p>
      </section>
    );
  }
}

export default Lightbox;
