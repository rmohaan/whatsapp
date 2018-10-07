'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReceiverBody from './receiverBody';
import SenderBody from './senderBody';

class ConvoBody extends React.Component {
    render() {
        return (
            <div className="row message" id="conversation">
                <ReceiverBody />
                <SenderBody />
            </div>
        );
    }
}

export default ConvoBody;