import React from 'react'
import { any, string } from 'prop-types'

import Components from './components'

import background from './../../assets/imgs/background.jpg'

const Settings = ({ children, title }) => {
  return (
    <Components.Wrapper background={background}>
      <Components.Container>
        <Components.Header>
          <h1>{title}</h1>
        </Components.Header>
        {children}
      </Components.Container>
    </Components.Wrapper>
  );
}

Settings.propTypes = {
  children: any.isRequired,
  title: string.isRequired
}

export default Settings
