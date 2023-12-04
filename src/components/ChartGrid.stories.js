import React from 'react';

import ChartGrid from './ChartGrid';

export default {
  component: ChartGrid,
  title: 'ChartGrid',
};

const Template = (args) => <ChartGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  bearerToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMzYwYWYyOS1hYzFhLTQ2OTctYTNhNi0wZDE0YmExNzI3ZjgiLCJhdWQiOiJqYXJ2aXMiLCJpc3MiOiJzYW0ud2FuZy4wNzIzQGdtYWlsLmNvbSIsInN1YiI6IjQ4MzcyNzYyOTE0MTE0Nzk1MSIsImV4cCI6MTcwMjA4MTI3MH0.xl1Fs-gxcSDR9AVgIw9-TiY3ycdgonHuUBnNSIbeP8o',
};
