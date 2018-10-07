'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import mohaan from '../images/pp.jpeg';

class ConvoHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            layout: {}
        }
    }

    render() {
        let contact = this.props.layout,
            headColor = contact.headSubText.includes("typing") ? "green" : "grey";

        return (
            <div className="row heading">
                <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                    <div className="heading-avatar-icon">
                        <img src={contact.pic} />
                    </div>
                </div>
                <div className="col-sm-8 col-xs-7 heading-name">
                    <a className="heading-name-meta">{contact.name}
            </a>
                    <span className="heading-online" style={{color: headColor}}>{contact.headSubText}</span>
                </div>
                <div className="col-sm-1 col-xs-1  heading-dot pull-right">
                    <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}


function select (state) {
    return {
      layout: state.layout
    };
  }
  
export default connect(select)(ConvoHeader);