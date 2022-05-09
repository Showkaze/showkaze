import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <footer className='footer sticky-bottom align-items-baseline mb-0 mt-5 bg-dark text-light'>
        <div className='container'>
          <p className='d-flex justify-content-center mb-1 text-light'><i className="fa fa-copyright" aria-hidden="true">2022</i></p>
          <p className='d-flex justify-content-center mb-0 text-light'>Showkaze</p>

        </div>
      </footer>
    );
  }
}
