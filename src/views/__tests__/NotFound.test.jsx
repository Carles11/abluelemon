// @flow

import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound'

describe('<NotFound />', () => {
  it('should render itself', () => {
    const component = shallow(<NotFound />)
    expect(component).toMatchSnapshot()
  })
})