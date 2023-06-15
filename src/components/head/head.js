import React from 'react';
import { Helmet } from 'react-helmet';

export default function Headers() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>1-React</title>
      </Helmet>
    </div>
  );
}