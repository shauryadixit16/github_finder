import React, { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';

import alertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = (props) => {
  const initialstate = null;
  const [state, dispatch] = useReducer(alertReducer, initialstate);

  const setalert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state,
        setalert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
