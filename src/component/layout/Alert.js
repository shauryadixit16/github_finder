import React from 'react';
import alertContext from '../../context/alert/alertContext';
import { useContext } from 'react';
const Alert = () => {
  const alertcontext = useContext(alertContext);

  return (
    alertcontext.alert !== null && (
      <div className={`alert alert-${alertcontext.alert.type}`}>
        <i className='fas fa-info-circle'>{alertcontext.alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
