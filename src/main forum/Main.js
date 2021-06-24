import React from 'react';
import PropTypes from 'prop-types';
import Husky from '../Dog_texts/huskytext';
import Cage from '../Dog_texts/cagetext'
import Race from '../Dog_texts/racetext'
import Wash from '../Dog_texts/washdogs';
import Food from '../Dog_texts/doggofood';
import Our from '../Dog_texts/ourdogs';
import Sleepin from '../Dog_texts/PsieSpanie';

export default function Main({article}) {


  switch(article) {
    case '0':
      return (
        <Race/>
      );
      case '1':
        return (
          <Husky/>
      );
      case '2':
        return (
          <Wash/>
          );
      case '3':
        return (
          <Food/>
          );
      case '4':
        return (
          <Our/>
          );
      case '5':
        return (
          <Sleepin/>
          );
    default:
      return (
        <Cage/>
        );
  }
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};