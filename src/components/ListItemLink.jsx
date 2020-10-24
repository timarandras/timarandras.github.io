import { ListItem } from '@material-ui/core';
import React from 'react';

export default function ListItemLink(props) {
  return <ListItem button component="a" {...props} />; // eslint-disable-line react/jsx-props-no-spreading
}
