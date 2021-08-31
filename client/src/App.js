import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Home } from './pages/Home';


const useStyles = makeStyles(() => ({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }
  }
));

const App = () => {
  const classes = useStyles();

  return (
    <div className={ classes.wrapper }>
      <Home />
    </div>
  );
};

export default App;