'use strict';

import * as actionEvents from './events';
import * as dataRequests from './dataRequests';

export function setLayoutData (data) {
  return {
    type: actionEvents.SET_LAYOUT_DATA,
    payload: data
  };
}