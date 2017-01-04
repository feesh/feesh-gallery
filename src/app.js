import 'whatwg-fetch';
import React from 'react';

import Lightbox from './components/lightbox-section';
import Thumbnails from './components/thumbnails-section';

/*  Gallery viewer app */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selected_pic: null,
    };
  }

  render() {
    const { photos } = this.props;

    return (
      <section className="gallery">
        <div className="content">
          { this.state.selected_pic &&
            // Show lightbox if a pic is selected
            <Lightbox photos={photos} />
          }
          <Thumbnails photos={photos} />
        </div>
      </section>
    );
  }
}

export default App;
