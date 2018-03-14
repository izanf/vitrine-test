import React from 'react';

// import Tabs from '../../components/Tabs';
import Template from '../../templates/Settings';

import Magazines from './Magazines';

export default () => (
  <Template title="Revistas">
    <Magazines />

    {/* <Tabs initialTab="Próximas Consultas">
      <Appointments key="Próximas Consultas" />
      <Appointments key="Histórico" isHistory />
    </Tabs> */}
  </Template>
);
