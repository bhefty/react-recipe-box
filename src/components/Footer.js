import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer'>
           <div className='container-fluid row'>
             <p><span className='hidden-xs'>Connect with me on: &nbsp;</span>
              <a href='https://github.com/bhefty' target='_blank'><i className='fa fa-github-square' aria-hidden='true'></i> GitHub</a> | &nbsp;
              <a href='https://twitter.com/billhefty' target='_blank'><i className='fa fa-twitter-square' aria-hidden='true'></i> Twitter</a> | &nbsp;
              <a href='https://www.linkedin.com/in/bill-hefty-6b973689' target='_blank'><i className='fa fa-linkedin-square' aria-hidden='true'></i> LinkedIn</a> | &nbsp;
              <a href='https://www.freecodecamp.com/bhefty' target='_blank'><i className='fa fa-fire' aria-hidden='true'></i> FreeCodeCamp</a>
              <br className='visible-xs'/><span className='hidden-xs'> | &nbsp;</span>
              <a href='mailto:billhefty@gmail.com'><i className='fa fa-envelope-o' aria-hidden='true'></i> billhefty@gmail.com</a>
             </p>
           </div>
         </footer>
      </div>
    )
  }
}

export default Footer
