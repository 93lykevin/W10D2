import React from 'react';
import Clock from './clock';
import Tab from './tab';
import Weather from './weather';

let stuff = [
  {title: 'tab1', content: 'content1'},
  {title: 'tab2', content: 'content2'}
];
class Component extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Clock />
        <Tab things={stuff} />
        <Weather />
      </div>
      );
    }
  }
export default Component;