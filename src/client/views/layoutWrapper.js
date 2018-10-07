/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './sideBar';
import ConvoLayout from './conversationLayout';

class Home extends React.Component {
  render() {
    return (
      <div className="container app">
        <div className="row app-one">
          <SideBar />
          <ConvoLayout />          
        </div>
      </div>
    );
  }
}

export default Home;
