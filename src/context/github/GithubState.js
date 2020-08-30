import React, { useReducer } from 'react';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';

const GithubState = (props) => {
  const initialstate = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialstate);

  //search users

  const searchuser = async (text) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  // clear users

  const clear = () => {
    dispatch({ type: CLEAR_USERS });
  };
  // set loading
  const setloading = () => {
    dispatch({ type: SET_LOADING });
  };
  // get user
  const getuser = async (login) => {
    setloading();
    const res = await axios.get(`https://api.github.com/users/${login}`);
    dispatch({ type: GET_USER, payload: res.data });
  };
  // get repos
  const getrepos = async (login) => {
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };
  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchuser,
        clear,
        getuser,
        getrepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
