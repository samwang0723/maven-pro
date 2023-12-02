import React from 'react';
import Chart from './Chart';

export default {
  title: 'Chart',
  component: Chart,
};

const Template = (args) => <Chart {...args} />;

function parseDateToTimestamp(dateString) {
  // Check if the input is valid
  if (!/^\d{8}$/.test(dateString)) {
    throw new Error('Invalid date format. Please use "YYYYMMDD".');
  }

  // Extract year, month, and day from the dateString
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1; // Month is 0-indexed in JavaScript Date
  const day = parseInt(dateString.substring(6, 8), 10);

  // Create a new Date object
  const date = new Date(year, month, day);

  // Return the timestamp
  return date.getTime();
}

function parseStockData(stockData) {
  return stockData.map((item) => {
    // Return a new object with only the required fields
    return {
      timestamp: parseDateToTimestamp(item.date),
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
      volume: item.tradeShares / 1000,
      turnover: item.turnover,
    };
  });
}

const jsonData = [
  {
    id: '488689144961171804',
    createdAt: '2023-11-24T07:30:29Z',
    updatedAt: '2023-11-24T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231124',
    tradeShares: '10295',
    transactions: '12953',
    turnover: '5923187',
    open: 577,
    close: 575,
    high: 578,
    low: 574,
    diff: -3,
    average: {
      ma: {
        21: 560.58,
        8: 579.5,
      },
      mv: {
        13: 24916,
        34: 24897,
        5: 21561,
      },
    },
  },
  {
    id: '488544189982703964',
    createdAt: '2023-11-23T07:30:29Z',
    updatedAt: '2023-11-23T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231123',
    tradeShares: '14818',
    transactions: '15616',
    turnover: '8528477',
    open: 574,
    close: 578,
    high: 578,
    low: 574,
    diff: 1,
    average: {
      ma: {
        21: 558.48,
        8: 579.13,
      },
      mv: {
        13: 25295,
        34: 25336,
        5: 24069,
      },
    },
  },
  {
    id: '488399235071344988',
    createdAt: '2023-11-22T07:30:29Z',
    updatedAt: '2023-11-22T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231122',
    tradeShares: '22734',
    transactions: '31693',
    turnover: '13099227',
    open: 576,
    close: 577,
    high: 579,
    low: 574,
    diff: -8,
    average: {
      ma: {
        21: 556.86,
        8: 578.25,
      },
      mv: {
        13: 26499,
        34: 25776,
        5: 26936,
      },
    },
  },
  {
    id: '488254422162342236',
    createdAt: '2023-11-21T07:31:54Z',
    updatedAt: '2023-11-21T07:31:54Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231121',
    tradeShares: '37470',
    transactions: '35432',
    turnover: '21878482',
    open: 582,
    close: 585,
    high: 585,
    low: 581,
    diff: 8,
    average: {
      ma: {
        21: 555.29,
        8: 575.75,
      },
      mv: {
        13: 25974,
        34: 25544,
        5: 32899,
      },
    },
  },
  {
    id: '488109324510429532',
    createdAt: '2023-11-20T07:30:29Z',
    updatedAt: '2023-11-20T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231120',
    tradeShares: '22492',
    transactions: '21151',
    turnover: '12970911',
    open: 576,
    close: 577,
    high: 579,
    low: 575,
    diff: -3,
    average: {
      ma: {
        21: 553.34,
        8: 572.25,
      },
      mv: {
        13: 25416,
        34: 25203,
        5: 29972,
      },
    },
  },
  {
    id: '487674458786496840',
    createdAt: '2023-11-17T07:30:29Z',
    updatedAt: '2023-11-17T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231117',
    tradeShares: '22831',
    transactions: '22516',
    turnover: '13268057',
    open: 579,
    close: 580,
    high: 583,
    low: 579,
    diff: -3,
    average: {
      ma: {
        21: 552.34,
        8: 569.63,
      },
      mv: {
        13: 24755,
        5: 34653,
      },
    },
  },
  {
    id: '487529503992578376',
    createdAt: '2023-11-16T07:30:29Z',
    updatedAt: '2023-11-16T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231116',
    tradeShares: '29154',
    transactions: '25762',
    turnover: '16946990',
    open: 581,
    close: 583,
    high: 583,
    low: 578,
    diff: 2,
    average: {
      ma: {
        21: 550.72,
        8: 566.5,
      },
      mv: {
        13: 25035,
        5: 32758,
      },
    },
  },
  {
    id: '487384548661789000',
    createdAt: '2023-11-15T07:30:29Z',
    updatedAt: '2023-11-15T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231115',
    tradeShares: '52548',
    transactions: '56101',
    turnover: '30475559',
    open: 583,
    close: 581,
    high: 583,
    low: 575,
    diff: 9,
    average: {
      ma: {
        21: 548.67,
        8: 562.38,
      },
      mv: {
        13: 24473,
        5: 29629,
      },
    },
  },
  {
    id: '487239593599435080',
    createdAt: '2023-11-14T07:30:29Z',
    updatedAt: '2023-11-14T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231114',
    tradeShares: '22836',
    transactions: '29641',
    turnover: '13103743',
    open: 576,
    close: 572,
    high: 576,
    low: 571,
    diff: 1,
    average: {
      ma: {
        21: 547.24,
        8: 558.38,
      },
      mv: {
        13: 21660,
        5: 22313,
      },
    },
  },
  {
    id: '487094638620967240',
    createdAt: '2023-11-13T07:30:29Z',
    updatedAt: '2023-11-13T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231113',
    tradeShares: '45900',
    transactions: '51275',
    turnover: '26336309',
    open: 579,
    close: 571,
    high: 580,
    low: 571,
    diff: 14,
    average: {
      ma: {
        21: 545.96,
        8: 555.25,
      },
      mv: {
        13: 22166,
        5: 20792,
      },
    },
  },
  {
    id: '486659773383573832',
    createdAt: '2023-11-10T07:30:29Z',
    updatedAt: '2023-11-10T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231110',
    tradeShares: '13354',
    transactions: '15336',
    turnover: '7423660',
    open: 555,
    close: 557,
    high: 557,
    low: 554,
    diff: 0,
    average: {
      ma: {
        21: 545.1,
        8: 549.88,
      },
      mv: {
        13: 19922,
        5: 17705,
      },
    },
  },
  {
    id: '486514818119893319',
    createdAt: '2023-11-09T07:30:29Z',
    updatedAt: '2023-11-09T07:44:23Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231109',
    tradeShares: '13509',
    transactions: '12728',
    turnover: '7500113',
    open: 551,
    close: 557,
    high: 557,
    low: 551,
    diff: 1,
    average: {
      ma: {
        21: 544.77,
        8: 546.38,
      },
      mv: {
        13: 20074,
        5: 18217,
      },
    },
  },
  {
    id: '486369862470336839',
    createdAt: '2023-11-08T07:30:29Z',
    updatedAt: '2023-11-08T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231108',
    tradeShares: '15969',
    transactions: '17838',
    turnover: '8858516',
    open: 550,
    close: 556,
    high: 557,
    low: 550,
    diff: 1,
    average: {
      ma: {
        21: 544.15,
        8: 543.25,
      },
      mv: {
        13: 20813,
        5: 21557,
      },
    },
  },
  {
    id: '486224907626086727',
    createdAt: '2023-11-07T07:30:29Z',
    updatedAt: '2023-11-07T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231107',
    tradeShares: '15231',
    transactions: '15350',
    turnover: '8433252',
    open: 552,
    close: 555,
    high: 555,
    low: 550,
    diff: 5,
    average: {
      ma: {
        21: 543,
        8: 540.38,
      },
      mv: {
        13: 23222,
        5: 21143,
      },
    },
  },
  {
    id: '486079952530178375',
    createdAt: '2023-11-06T07:30:29Z',
    updatedAt: '2023-11-06T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231106',
    tradeShares: '30462',
    transactions: '32677',
    turnover: '16859512',
    open: 553,
    close: 550,
    high: 556,
    low: 550,
    diff: 1,
    average: {
      ma: {
        21: 541.72,
        8: 537.38,
      },
      mv: {
        13: 23842,
        5: 23392,
      },
    },
  },
  {
    id: '485645086906908999',
    createdAt: '2023-11-03T07:30:29Z',
    updatedAt: '2023-11-03T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231103',
    tradeShares: '15914',
    transactions: '17904',
    turnover: '8713783',
    open: 547,
    close: 549,
    high: 549,
    low: 545,
    diff: 2,
    average: {
      ma: {
        21: 540.29,
        8: 536.63,
      },
      mv: {
        13: 23564,
        5: 21670,
      },
    },
  },
  {
    id: '485500131592896839',
    createdAt: '2023-11-02T07:30:29Z',
    updatedAt: '2023-11-02T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231102',
    tradeShares: '30212',
    transactions: '32069',
    turnover: '16376034',
    open: 536,
    close: 547,
    high: 547,
    low: 535,
    diff: 19,
    average: {
      ma: {
        21: 539.34,
        8: 536,
      },
      mv: {
        13: 23801,
        5: 21682,
      },
    },
  },
  {
    id: '485355176681537863',
    createdAt: '2023-11-01T07:30:29Z',
    updatedAt: '2023-11-01T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231101',
    tradeShares: '13896',
    transactions: '15449',
    turnover: '7362714',
    open: 533,
    close: 528,
    high: 533,
    low: 527,
    diff: -1,
    average: {
      ma: {
        21: 538.67,
        8: 535.63,
      },
      mv: {
        13: 23036,
        5: 21522,
      },
    },
  },
  {
    id: '485210221652738375',
    createdAt: '2023-10-31T07:30:29Z',
    updatedAt: '2023-10-31T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231031',
    tradeShares: '26477',
    transactions: '32057',
    turnover: '14028904',
    open: 535,
    close: 529,
    high: 535,
    low: 527,
    diff: -3,
    average: {
      ma: {
        8: 539.13,
      },
      mv: {
        13: 24442,
        5: 22088,
      },
    },
  },
  {
    id: '485065266691047751',
    createdAt: '2023-10-30T07:30:29Z',
    updatedAt: '2023-10-30T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231030',
    tradeShares: '21852',
    transactions: '24529',
    turnover: '11605888',
    open: 531,
    close: 532,
    high: 534,
    low: 528,
    diff: -1,
    average: {
      ma: {
        8: 541.25,
      },
      mv: {
        13: 25126,
        5: 19859,
      },
    },
  },
  {
    id: '484630401336213831',
    createdAt: '2023-10-27T07:30:29Z',
    updatedAt: '2023-10-27T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231027',
    tradeShares: '15975',
    transactions: '14768',
    turnover: '8521186',
    open: 534,
    close: 533,
    high: 536,
    low: 532,
    diff: 2,
    average: {
      ma: {
        8: 542.25,
      },
      mv: {
        13: 27150,
        5: 20113,
      },
    },
  },
  {
    id: '484485446223528455',
    createdAt: '2023-10-26T07:30:29Z',
    updatedAt: '2023-10-26T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231026',
    tradeShares: '29412',
    transactions: '45747',
    turnover: '15646436',
    open: 530,
    close: 531,
    high: 535,
    low: 530,
    diff: -13,
    average: {
      ma: {
        8: 544.5,
      },
      mv: {
        13: 27121,
        5: 26374,
      },
    },
  },
  {
    id: '484340491345723911',
    createdAt: '2023-10-25T07:30:29Z',
    updatedAt: '2023-10-25T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231025',
    tradeShares: '16727',
    transactions: '12228',
    turnover: '9147762',
    open: 544,
    close: 544,
    high: 551,
    low: 544,
    diff: 0,
    average: {
      ma: {
        8: 546.25,
      },
      mv: {
        13: 26800,
        5: 25151,
      },
    },
  },
  {
    id: '484195536753132039',
    createdAt: '2023-10-24T07:30:30Z',
    updatedAt: '2023-10-24T07:30:30Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231024',
    tradeShares: '15330',
    transactions: '15631',
    turnover: '8327978',
    open: 543,
    close: 544,
    high: 546,
    low: 540,
    diff: 0,
    average: {
      ma: {
        8: 547.38,
      },
      mv: {
        13: 27802,
        5: 27173,
      },
    },
  },
  {
    id: '484050580835140103',
    createdAt: '2023-10-23T07:30:29Z',
    updatedAt: '2023-10-23T07:30:29Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231023',
    tradeShares: '23122',
    transactions: '23388',
    turnover: '12621622',
    open: 552,
    close: 544,
    high: 553,
    low: 543,
    diff: -12,
    average: {
      ma: {
        8: 548.13,
      },
      mv: {
        13: 27765,
        5: 27906,
      },
    },
  },
  {
    id: '483615856459252014',
    createdAt: '2023-10-20T07:31:53Z',
    updatedAt: '2023-10-20T07:31:53Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231020',
    tradeShares: '47283',
    transactions: '41390',
    turnover: '26088063',
    open: 549,
    close: 556,
    high: 556,
    low: 546,
    diff: 10,
    average: {
      ma: {
        8: 548.13,
      },
      mv: {
        13: 27977,
        5: 27336,
      },
    },
  },
  {
    id: '483470901615001900',
    createdAt: '2023-10-19T07:31:54Z',
    updatedAt: '2023-10-19T07:31:54Z',
    deletedAt: null,
    stockID: '2330',
    date: '20231019',
    tradeShares: '23293',
    transactions: '18303',
    turnover: '12694364',
    open: 540,
    close: 546,
    high: 548,
    low: 540,
    diff: 6,
    average: {
      ma: {
        8: 545.13,
      },
      mv: {
        5: 24315,
      },
    },
  },
];

const dataArray = parseStockData(jsonData);
dataArray.sort((a, b) => a.timestamp - b.timestamp);

export const Default = Template.bind({});
Default.args = {
  data: dataArray,
  id: 'chart',
  stockName: '2330 台積電',
  close: 575,
  diff: '+23.5',
  diffPercent: '+2.56%',
};