import 'whatwg-fetch';
import React from 'react';

import Lightbox from './components/lightbox-section';
import Thumbnails from './components/thumbnails-section';

/*  Gallery viewer app */
class App extends React.Component {
  constructor() {
    super();

    this.toggleLightbox = this.toggleLightbox.bind(this);

    this.state = {
      open: false,
      selected_pic: 1,
    };
  }

  // Open lightbox if a photo is selected, otherwise close
  toggleLightbox(pic) {
    // What pic is currently open
    const current_pic = this.state.selected_pic;

    // Open the selected pic
    this.setState({
      open: true,
      selected_pic: pic,
    });
  }

  // For navigating to the next photo while the lightbox is open
  toggleArrow(pic, dir) {
    // Check to see which direction was clicked
    // Set + or - based on direction
    // Check current position in array
      // If +/- 1 in that direction is more than 0 or count
        // Then loop to the end or the beginning of the array
      // Else update selected_pic with the new index
  }


  render() {
    const { photos } = this.props;

    return (
      <section className="gallery">
        <div className="content">
          { this.state.selected_pic &&
            // Show lightbox if a pic is selected
            <Lightbox
              photos={photos}
              selected_pic={this.state.selected_pic}
              toggleArrow={(pic, dir) => this.toggleArrow(pic, dir)}
            />
          }
          <Thumbnails
            photos={photos}
            toggleLightbox={(pic) => this.toggleLightbox(pic)}
          />
        </div>
      </section>
    );
  }
}

export default App;
