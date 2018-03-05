'use strict';

import React from 'react';
import { Map } from 'immutable';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FaCog } from 'react-icons/lib/fa';
import ContentView from '../ContentView';

jest.mock('react-scroll-box');
jest.mock('../ScrollViewport');

describe('ContentView', () => {

  beforeAll(() => {
    configure({ adapter: new Adapter() });
    window.__ = jest.fn(key => key);
  });

  it('handles empty', async () => {
    let wrapper = mount(<ContentView />);

    expect(wrapper.text())
      .toBe('contents_view_message');
  });

  it('handles loading', async () => {
    let content = Map({
      isLoading: true,
    });
    let wrapper = mount(<ContentView content={content} />);

    expect(wrapper.find(<FaCog/>))
      .toBeDefined();
  });

  it('handles forbidden', async () => {
    let content = Map({
      isForbidden: true,
    });
    let wrapper = mount(<ContentView content={content} />);

    expect(wrapper.text())
      .toBe('forbidden_message');
  });

  it('handles non-text', async () => {
    let content = Map({
      type: 'OTHER'
    });
    let wrapper = mount(<ContentView content={content} />);

    expect(wrapper.text())
      .toBe('type_OTHER_message');
  });

  it('handles text', async () => {
    let content = Map({
      type: 'TEXT',
      base64: Buffer.from('abc').toString('base64'),
    });
    let wrapper = mount(<ContentView content={content} />);

    expect(wrapper.text())
      .toBe('abc');
  });

});
