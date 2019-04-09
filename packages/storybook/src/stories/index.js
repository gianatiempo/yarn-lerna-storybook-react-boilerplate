import React from 'react';

import { storiesOf } from '@storybook/react';
import ExternalComponent from "@ariel-demo/external-component";
import ExternalComponent2 from "@ariel-demo/arielito-test";

storiesOf('External Component', module)
  .add('default', () => <ExternalComponent text="default"/>);

storiesOf('External Component 2', module)
  .add('default', () => <ExternalComponent2 text="arielito" />);
