import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';
import Details from '../../components/Main/Details';
import Video from '../../components/Main/Video';
import Gallery from '../../components/Main/Gallery'

configure({ adapter: new Adapter() });


describe('<Main />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main />)
    })

    it('renders Detail cmp', () => {
        // expect(wrapper.find(Details)).toHaveLength(1)
        expect(wrapper.contains(<Details />)).toEqual(true);
    })
    it('renders Video cmp', () => {
        // expect(wrapper.find(Details)).toHaveLength(1)
        expect(wrapper.contains(<Video />)).toEqual(true);
    })
    it('renders MyGallery cmp', () => {
        // expect(wrapper.find(Details)).toHaveLength(1)
        expect(wrapper.contains(<Gallery />)).toEqual(true);
    })
})
