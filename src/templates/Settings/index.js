import React from 'react';
import { any, string } from 'prop-types';

import Components from './components';

// import Colors from '../../config/colors';

const Settings = ({ children, title }) => {
  return (
    <Components.Wrapper>
      <Components.Container>
        <Components.Header>
          <h1>{title}</h1>
        </Components.Header>
        {children}
      </Components.Container>
    </Components.Wrapper>
  );
};

Settings.propTypes = {
  children: any.isRequired,
  title: string.isRequired
};

export default Settings;