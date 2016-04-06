'use strict';

jest.unmock('../src/components/views/Select');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Select from '../src/components/views/Select';

describe('Select', () => {
  it('should exists', () => {
    const select = TestUtils.renderIntoDocument(
      <div>
        <Select progressBars={[]} />
      </div>
    );

    expect(select).toBeTruthy();
  });

  it('should have 2 children when progressBars prop = [0, 0]', () => {
    const select = TestUtils.renderIntoDocument(
      <div>
        <Select progressBars={[0, 0]} />
      </div>
    );

    const selectNode = ReactDOM.findDOMNode(select.children[0]);

    expect(selectNode.children.length).toBe(2);
  });

  it('should has the corresponding selected option index as the selectedBar prop', () => {
    const select = TestUtils.renderIntoDocument(
      <div>
        <Select progressBars={[0, 0, 0]} selectedBar={2} />
      </div>
    );

    const selectNode = ReactDOM.findDOMNode(select.children[0]);

    expect(parseInt(selectNode.value, 10)).toBe(2);
  });

  it('should invoke the selectBar cb when selecting an option', () => {
    let selectedBar = 0;
    const selectBar = e => { selectedBar = parseInt(e.target.value, 10); };
    const select = TestUtils.renderIntoDocument(
      <div>
        <Select progressBars={[0, 0]} selectBar={selectBar} />
      </div>
    );

    const selectNode = ReactDOM.findDOMNode(select.children[0]);

    TestUtils.Simulate.change(selectNode, { target: { value: 1 } });
    expect(selectedBar).toBe(1);

    TestUtils.Simulate.change(selectNode, { target: { value: 0 } });
    expect(selectedBar).toBe(0);
  });
});
