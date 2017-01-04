import React from 'react';

import Thumbnail from './thumbnail-component';

class Thumbnails extends React.Component {
  renderThumbnailList() {
    const { photos } = this.props;
    const thumbnaillist = photos.map((photo, i) => this.renderThumbnail(i, photo));

    // If there are no photos, don't render a list
    if (!photos.length) return null;

    return (
      <ul className="thumbnails">
        {thumbnaillist}
      </ul>
    );
  }

  renderThumbnail(key, photo) {
    return (
      <Thumbnail key={key} photo={photo} />
    );
  }

  render() {
    return (
      <section className="content__thumbnails">
        {this.renderThumbnailList()}
      </section>
    );
  }
}

export default Thumbnails;
