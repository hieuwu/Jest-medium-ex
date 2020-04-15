import React from 'react';
import { shallow } from 'enzyme'

import Homepage from './../Homepage.component';

describe('Homepage Test', () => {
    it('should render snapshot test for homepage', () => {
        const homepage = shallow(<Homepage />)
        expect(homepage).toMatchSnapshot();
    })

    it('should show state as message expect when mount component', () => {
        const expectMessage = 'Welcome to user board'
        const homepage = shallow(<Homepage />)
        expect(homepage.state('title')).toEqual(expectMessage);
    })

    it('should navigate to anonymous users', () => {
        let props = {
            navigation: {
                navigate: jest.fn(),
            }
        }
        const homepage = shallow(<Homepage {...props} />)
        homepage.find('TouchableOpacity').at(0).simulate('press');
        expect(props.navigation.navigate).toBeCalledWith('user', { userType: 'anonymous' });
    })

    it('should turn trial version when navigating to anonymous user', () => {
        let props = {
            navigation: {
                navigate: jest.fn(),
            }
        }
        const homepage = shallow(<Homepage {...props} />)
        homepage.find('TouchableOpacity').at(0).simulate('press');
        expect(homepage.state('isTrial')).toBe(true);

    })

    it('should navigate to professional users', () => {

        let props = {
            navigation: {
                navigate: jest.fn(),
            }
        }
        const homepage = shallow(<Homepage {...props} />)
        homepage.find('TouchableOpacity').at(1).simulate('press');
        expect(props.navigation.navigate).toBeCalledWith('user', { userType: 'professional' });
    })

    it('should navigate to premium users', () => {

        let props = {
            navigation: {
                navigate: jest.fn(),
            }
        }
        const homepage = shallow(<Homepage {...props} />)
        homepage.find('TouchableOpacity').at(2).simulate('press');
        expect(props.navigation.navigate).toBeCalledWith('user', { userType: 'premium' });
    })
})