import * as actions from './actions';

const initialState = {
  selectedBar: 0,
  progressBars: [0, 0, 0],
};

const reducer = (state = initialState, action) => {
  if (action && action.type) {
    switch (action.type) {
      case actions.SELECT_BAR:
        return Object.assign({}, state, {
          selectedBar: action.value,
        });

      case actions.UPDATE_PROGRESS:
        const selectedBar = state.selectedBar;
        const progress = state.progressBars[selectedBar] + action.value > 0
                       ? state.progressBars[selectedBar] + action.value
                       : 0;

        return Object.assign({}, state, {
          progressBars: [
            ...state.progressBars.slice(0, selectedBar),
            progress,
            ...state.progressBars.slice(selectedBar + 1),
          ],
        });

      default:
        break;
    }
  }

  return state;
};


export default reducer;
