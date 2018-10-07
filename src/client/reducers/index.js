'use strict';

import * as actionEvents from '../actions/events';

export function layout (state, action) {
  let actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_LAYOUT_DATA) {
    newState = action.payload;
  }

  return newState;
}
