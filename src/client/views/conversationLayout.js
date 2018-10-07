'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ConvoHeader from './conversationHeading';
import ConvoBody from './conversationBody';

class ConvoLayout extends React.Component {
    render() {
        return (
            <div className="col-sm-8 conversation">
                <ConvoHeader />
                <div className="convoBody">
                    <ConvoBody />
                </div>
            </div>
        );
    }
}

export default ConvoLayout;