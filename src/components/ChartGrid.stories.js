import React from 'react';

import ChartGrid from './ChartGrid';
import * as ChartStories from './Chart.stories';

export default {
  component: ChartGrid,
  title: 'ChartGrid',
};

const Template = (args) => <ChartGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  stocks: [
    { ...ChartStories.Default.args, id: '1' },
    { ...ChartStories.Default.args, id: '2' },
    { ...ChartStories.Default.args, id: '3' },
    { ...ChartStories.Default.args, id: '4' },
    { ...ChartStories.Default.args, id: '5' },
  ],
};
