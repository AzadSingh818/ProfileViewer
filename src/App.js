import React from 'react';
import './style.css';
import './App.css';
import LinkPreviewer from './Linkpreviewer'; // Ensure the casing matches the actual file name

function App() {
  return (
    <div className="container">
      <div>
        Checkout my
        <LinkPreviewer url="https://www.instagram.com/yourprofile">
          <span className='link'>Instagram</span>
        </LinkPreviewer>{' '}
        Profile
      </div>
      <div>
        And my
        <LinkPreviewer url="https://github.com/yourprofile">
          <span className='link'>GitHub</span>
        </LinkPreviewer>{' '}
        Profile
      </div>
      <div>
        And my
        <LinkPreviewer url="https://twitter.com/yourprofile">
          <span className='link'>Twitter</span>
        </LinkPreviewer>{' '}
        Profile
      </div>
    </div >  
  );
}

export default App;