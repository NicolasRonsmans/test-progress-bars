'use strict';

jest.unmock('../src/components/views/ProgressBars');
jest.unmock('../src/components/views/ProgressBar');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ProgressBars from '../src/components/views/ProgressBars';

describe('ProgressBars', () => {
  it('should exists', () => {
    const progressBars = TestUtils.renderIntoDocument(
      <div>
        <ProgressBars progressBars={[]} />
      </div>
    );

    expect(progressBars).toBeTruthy();
  });

  it('should have 2 children when progressBars prop = [0, 0]', () => {
    const progressBars = TestUtils.renderIntoDocument(
      <div>
        <ProgressBars progressBars={[0, 0]} />
      </div>
    );

    const progressBarsNode = ReactDOM.findDOMNode(progressBars.children[0]);

    expect(progressBarsNode.children.length).toBe(2);
  });
});
