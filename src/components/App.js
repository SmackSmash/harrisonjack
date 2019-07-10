import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/modules/App.scss';
import Nav from './Nav';

const App = props => {
  const meta = (
    <Helmet>
      <title>Helmet is awesome!</title>
      <meta name="description" content="This is a test description" />
      <meta name="keywords" content="Photography, Manchester" />
    </Helmet>
  );

  return (
    <div>
      {meta}
      <div>App Works</div>
      <Nav />
    </div>
  );
};

export default App;
