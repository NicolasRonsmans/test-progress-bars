jest.unmock('../src/actions');
jest.unmock('../src/reducer');

import * as actions from '../src/actions';
import reducer from '../src/reducer';

describe('Redux', () => {
  it('should change the selectedBar state value when SELECT_BAR action is triggered', () => {
    let state = reducer();

    state = reducer(state, { type: actions.SELECT_BAR, value: 0 });
    expect(state.selectedBar).toBe(0);

    state = reducer(state, { type: actions.SELECT_BAR, value: 2 });
    expect(state.selectedBar).toBe(2);

    state = reducer(state, { type: actions.SELECT_BAR, value: 1 });
    expect(state.selectedBar).toBe(1);
  });

  it('should update the selectedBar progress state value when UPDATE_PROGRESS action is triggered', () => {
    let state = reducer();

    expect(state.progressBars[state.selectedBar]).toBe(0);
    state = reducer(state, { type: actions.UPDATE_PROGRESS, value: -25 });
    expect(state.progressBars[state.selectedBar]).toBe(0);

    state = reducer(state, { type: actions.UPDATE_PROGRESS, value: 10 });
    expect(state.progressBars[state.selectedBar]).toBe(10);

    state = reducer(state, { type: actions.SELECT_BAR, value: 1 });
    expect(state.progressBars[state.selectedBar]).toBe(0);
    state = reducer(state, { type: actions.UPDATE_PROGRESS, value: 25 });
    expect(state.progressBars[state.selectedBar]).toBe(25);
  });
});
