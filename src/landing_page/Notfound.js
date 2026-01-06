import React from 'react';
import { Link } from 'react-router-dom';
function Notfound() {
    return ( 
          <div className="container p-5 mb-5">
        <div className="row text-center">
            <h1> 404 page not found!</h1>
            <p>Page you are looking for does not exist.</p>
           <Link to="/">Back to Homepage</Link>
        </div>
      </div>
     );
}

export default Notfound;