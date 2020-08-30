import React from 'react';
import githubContext from '../../context/github/githubContext';
import { useContext } from 'react';
import Repoitem from './Repoitem';

const Repos = () => {
  const githubcontext = useContext(githubContext);

  return githubcontext.repos.map((repo) => (
    <Repoitem repo={repo} key={repo.id} />
  ));
};
export default Repos;
