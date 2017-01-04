import React from 'react';

import App from './app';

/*  Container for bringing in the data */
export default class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null,
      selected_pic: null,
    };
  }

  componentDidMount() {
    const token = '206094.9d27cef.2e85cab225e14026ae34d65a5339ca21';
    const userid = 206094;
    const num_photos = 50;

    const url = 'https://api.instagram.com/v1/users/' + userid + '/media/recent';

    $.ajax({
      url: url,
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos},
      success: function(data) {
        console.log(data);

        this.setState({
          data: data,
        });
      }.bind(this),
      error: function(data) {
        console.log(data);
      }
    })
  }

  render() {
    const { data } = this.state;

    if (!data) return <div>Fancy loading gif here...</div>;

    return (
      <main>
        <App photos={data.data} />
      </main>
    );
  }
}
