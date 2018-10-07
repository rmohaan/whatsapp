/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import SearchBox from './searchBox';
import RecentChats from './recentChats';

class SideBar extends React.Component {
  render() {
    return (
      <div className="col-sm-4 side">
        <div className="side-one">
          <Header />
          <SearchBox />
          <RecentChats />
        </div>
      </div>
    );
  }
}

export default SideBar;
