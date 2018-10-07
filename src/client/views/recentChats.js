import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

import{ contacts } from '../utils/constants';

class RecentChats extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedContact: contacts[0]
        }

        this.showMessage = (contact) => this._showMessage(contact);
    }

    _showMessage(contact) {
        this.props.dispatch(actions.setLayoutData(contact));
    }

    render() {
        let recentContacts = contacts.map((contact) =>
        <div className="row sideBar-body" onClick={() => this.showMessage(contact)}>
            <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                    <img src={contact.pic} />
                </div>
            </div>
            <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                        <span className="name-meta">{contact.name}
                </span>
                    </div>
                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                        <span className="time-meta pull-right">{contact.msgTime}
                </span>
                    </div>
                </div>
            </div>
        </div>
    );
        return (
            <div className="row sideBar">
                {recentContacts}
            </div>
        );
    }
}

export default connect()(RecentChats);