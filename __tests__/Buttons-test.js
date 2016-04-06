'use strict';

jest.unmock('../src/components/views/Buttons');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Buttons from '../src/components/views/Buttons';

describe('Buttons', () => {
  it('should exists', () => {
    const buttons = TestUtils.renderIntoDocument(
      <div>
        <Buttons config={[]} />
      </div>
    );

    expect(buttons).toBeTruthy();
  });

  it('should have 4 buttons when config = [{ text: \'-25\', value: -25 }, {...}, {...}, {...}]', () => {
    const config = [{
      text: '-25',
      value: -25,
    }, {
      text: '-10',
      value: -10,
    }, {
      text: '+10',
      value: 10,
    }, {
      text: '+25',
      value: 25,
    }];

    const buttons = TestUtils.renderIntoDocument(
      <div>
        <Buttons config={config} />
      </div>
    );

    const buttonsNode = ReactDOM.findDOMNode(buttons.children[0]);

    expect(buttons.children[0].children.length).toBe(4);
  });

  it('should invoke the updateProgress cb when clicked', () => {
    let updateProgressWith = 0;
    const config = [{
      text: '-25',
      value: -25,
    }, {
      text: '-10',
      value: -10,
    }, {
      text: '+10',
      value: 10,
    }, {
      text: '+25',
      value: 25,
    }];
    const updateProgress = e => { updateProgressWith = parseInt(e.target.getAttribute('data-value'), 10); };
    const buttons = TestUtils.renderIntoDocument(
      <div>
        <Buttons config={config} updateProgress={updateProgress} />
      </div>
    );
    const buttonsNode = ReactDOM.findDOMNode(buttons.children[0]);

    TestUtils.Simulate.click(buttons.children[0].children[0]);
    expect(updateProgressWith).toBe(-25);

    TestUtils.Simulate.click(buttons.children[0].children[2]);
    expect(updateProgressWith).toBe(10);
  });
});
