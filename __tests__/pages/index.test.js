import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages';

describe('Home rendering', () => {
    it('should render hello', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});
