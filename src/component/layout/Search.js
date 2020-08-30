import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

const Search = ({ setalert, showclear, clear }) => {
  const [text, setText] = useState('');
  const githubcontext = useContext(githubContext);
  const alertcontext = useContext(alertContext);

  const onsubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertcontext.setalert('Please fill the entry', 'light');
    } else {
      githubcontext.searchuser(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onsubmit}>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
          name='text'
          placeholder='Search users....'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubcontext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubcontext.clear}
        >
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;
