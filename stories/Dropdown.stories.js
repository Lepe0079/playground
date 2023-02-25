import React from 'react';
import { Dropdown } from './dropdown';

export default {
  title: 'Custom/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = { 
  label: 'Dropdown' 
};
