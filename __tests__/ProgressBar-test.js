'use strict';

jest.unmock('../src/components/views/ProgressBar');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ProgressBar from '../src/components/views/ProgressBar';

describe('ProgressBar', () => {
  it('should exists', () => {
    const progressBar = TestUtils.renderIntoDocument(
      <div>
        <ProgressBar />
      </div>
    );

    expect(progressBar).toBeTruthy();
  });

  it('should have a progress text value of 50% when progress prop = 50', () => {
    const progressBar = TestUtils.renderIntoDocument(
      <div>
        <ProgressBar progress="50" />
      </div>
    );

    const progressBarNode = ReactDOM.findDOMNode(progressBar.children[0]);
    const progressText = progressBarNode.children[1].textContent;
    expect(progressText).toBe('50%');
  });

  it('should have a progress background width of 75% when progress prop = 75', () => {
    const progressBar = TestUtils.renderIntoDocument(
      <div>
        <ProgressBar progress="75" />
      </div>
    );

    const progressBarNode = ReactDOM.findDOMNode(progressBar.children[0]);
    const progressBackground = progressBarNode.children[0];
    expect(progressBackground.style.width).toBe('75%');
  });

  it('should have a progress text value of -20% and background width of 0% when progress prop = -20', () => {
    const progressBar = TestUtils.renderIntoDocument(
      <div>
        <ProgressBar progress="-20" />
      </div>
    );

    const progressBarNode = ReactDOM.findDOMNode(progressBar.children[0]);
    const progressText = progressBarNode.children[1].textContent;
    const progressBackground = progressBarNode.children[0];
    expect(progressText).toBe('-20%');
    expect(progressBackground.style.width).toBe('0%');
  });

  it('should have a progress text value of 210% and background width of 100% when progress prop = 210', () => {
    const progressBar = TestUtils.renderIntoDocument(
      <div>
        <ProgressBar progress="210" />
      </div>
    );

    const progressBarNode = ReactDOM.findDOMNode(progressBar.children[0]);
    const progressText = progressBarNode.children[1].textContent;
    const progressBackground = progressBarNode.children[0];
    expect(progressText).toBe('210%');
    expect(progressBackground.style.width).toBe('100%');
  });
});
