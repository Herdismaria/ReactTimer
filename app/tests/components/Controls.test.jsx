var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('Should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));

      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1); //length is how many jQuery found, should be one pause button

    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));

      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1); //length is how many jQuery found, should be one pause button

    });
  });
});
