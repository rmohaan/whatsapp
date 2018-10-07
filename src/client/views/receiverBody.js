'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import mohaan from '../images/pp.jpeg';

class ReceiverBody extends React.Component {
    constructor() {
        super();
        this.state = {
            layout: {}
        }
    }

    render() {
        let contact = this.props.layout;
        return (
            <div className="row message-body">
                <div className="col-sm-12 message-main-receiver">
                    <div className="receiver">
                        <img style={{width:"90%"}} src={contact.wishesPic} />
                        <div className="message-text">
                            {contact.msg}
                            <span className="message-time pull-right">
                               {contact.msgDay} {contact.msgTime}
                            </span>
                         </div>
                    </div>
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
  
export default connect(select)(ReceiverBody);