import { RECEIVE_PRESENTATION_ITEM } from '../actions/presentation_actions';
import merge from 'lodash/merge';


const _nullPresentationItem = {item: null, type: null};

const PresentationReducer = (oldState = _nullPresentationItem, action) => {
  switch(action.type) {
    case RECEIVE_PRESENTATION_ITEM:
      return {item: action.presentationItem, type: action.presentationType};
    default:
      return oldState;
  }
};

export default PresentationReducer;
