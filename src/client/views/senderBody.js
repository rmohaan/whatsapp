'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class SenderBody extends React.Component {
    
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
                <div className="col-sm-12 message-main-sender">
                    <div className="sender">
                        <div className="message-text">
                            Thank you so much!
                        </div>
                        <span className="message-time pull-right">
                        {contact.msgDay} {contact.msgTime}
                        </span>
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
  
  export default connect(select)(SenderBody);