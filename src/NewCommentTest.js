import React from 'react';
import ReactDOM from 'react-dom';
import NewComment from './NewComment'

import { shallow, mount,render } from 'enzyme'

describe('<NewComment />', () => {
    const postNewCommentMock = jest.fn()
    it('renders without crashing', () => {
        const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />)
        expect(wrapper.length).toBe(1)
    })
    it('handle Enter', () => {
        const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />)
        const eventMock = {
            keyCode: 13,
            preventDefault: jest.fn()
        }
        wrapper.instance().handleEnter(eventMock)
        console.log(eventMock)
        console.log(postNewCommentMock)
        //expect(wrapper.length).toBe(1)
    })


})

