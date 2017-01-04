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
      open: true,
      selected_pic: 1,
    };
  }

  // Open lightbox if a photo is selected, otherwise close
  toggleLightbox(pic) {
    // What pic is currently open
    const current_pic = this.state.selected_pic;

    // If pic index is 0, it won't show (bc null)
    if(pic === 0) {
      this.setState({
        open: true,
        selected_pic: 0,
      });
    } else if(!pic) {
      // If no pic, close the lightbox
      this.setState({
        open: false,
        selected_pic: null,
      });
    } else {
      // Open the selected pic
      this.setState({
        open: true,
        selected_pic: pic,
      });
    }
  }

  // For navigating to the next photo while the lightbox is open
  toggleArrow(pic, dir) {
    let change = 0; // where to move in array
    let current_pic = pic; // current index
    let count = this.props.photos.length; // how many posts

    // Check to see which direction was clicked
    if (dir === 'next') {
      change = 1; // go up in array
    } else if (dir === 'prev') {
      change = -1; // reverse in array
    }

    // Set new pic index
    let new_index = current_pic + change;

    // Check current position in array
    // If +/- 1 in that direction is more than 0 or count, adjust accordingly
    if (new_index + 1 > count) { // +1 because index starts at 0
      // At the last post, loop to beginning
      this.setState({
        open: true,
        selected_pic: 0,
      });
    } else if (new_index < 0) {
      // At first post, loop to end
      this.setState({
        open: true,
        selected_pic: count - 1,
      });
    } else {
      // Else update selected_pic with the new index
      this.setState({
        open: true,
        selected_pic: new_index,
      });
    }

    console.log(dir);
    console.log(pic);
  }


  render() {
    const { photos } = this.props;

    return (
      <section className="gallery">
        <div className="content">
          { this.state.open &&
            // Show lightbox if a pic is selected
            <Lightbox
              photos={photos}
              selected_pic={this.state.selected_pic}
              toggleArrow={(pic, dir) => this.toggleArrow(pic, dir)}
              toggleLightbox={(pic) => this.toggleLightbox(pic)}
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
