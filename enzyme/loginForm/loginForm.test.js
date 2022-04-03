import Enzyme, {mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react'
import 'jsdom-global/register';
import LoginFormContainer from '../../components/loginForm/LoginFormContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('loginFormContainer', () => {
    const setInput = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<LoginFormContainer/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    });

    
});