import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h3>404 Not Found</h3>

      <Link to="/" className="link notFoundPageLink">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
