import React from 'react';
import { Card } from './cards';

export default {
  title: 'Custom/Cards',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = { 
  label: 'Card' 
};
