/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { createChart } from 'lightweight-charts';

import { DropdownMenu } from '@components/dropdown';
import { ChartDataDummy } from '@data/index';

const TransactionChart = () => {
  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [interval, setInterval] = React.useState('daily');
  const [intervalTitle, setIntervalTitle] = React.useState('Daily');
  const optionsInterval = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
  ];

  // let chart: any = null;
  // let areaSeries: any = null;
  useEffect(() => {
    const chart = createChart(ref.current, {
      width: ref.current.clientWidth,
      height: 300,
      leftPriceScale: {
        scaleMargins: {
          top: 0.2,
          bottom: 0.2,
        },
        visible: true,
        borderVisible: false,
      },
      rightPriceScale: {
        visible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: true,
        // tickMarkFormatter: (time: any) => {
        //   const date = new Date(time.year, time.month, time.day);
        //   return moment(date).format('YYYY/MM/DD');
        // },
      },
      grid: {
        horzLines: {
          color: '#ffffff',
        },
        vertLines: {
          color: '#eee',
        },
      },
    });
    const areaSeries = chart.addAreaSeries({
      lineColor: '#2603FF80',
      topColor: 'rgba(168, 155, 250, 0.31)',
      bottomColor: 'white',
    });
    switch (interval) {
      case 'daily':
        areaSeries.setData(ChartDataDummy.daily);

        break;
      case 'weekly':
        areaSeries.setData(ChartDataDummy.weekly);

        break;
      case 'monthly':
        areaSeries.setData(ChartDataDummy.monthly);

        break;
      default:
        break;
    }
    chart.timeScale().fitContent();
    const handleResize = () => {
      chart.applyOptions({ width: ref.current.clientWidth });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [interval]);

  const handleChange = (v: string) => {
    setInterval(v);
    setIntervalTitle(optionsInterval.find((o) => o.id === v)?.label || '');
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-5">
        <div>
          <h3 className="text-2xl font-bold mt-2">
            {intervalTitle} Transaction
          </h3>
          <h4 className="text-s">All Time</h4>
        </div>
        <div className="flex flex-row items-center">
          <h4 className="text-xs text-gray-text">Interval</h4>
          <div className="mx-3">
            <DropdownMenu
              title={intervalTitle}
              items={optionsInterval}
              className="rounded outline outline-1 pl-2"
              onChange={(v: string) => handleChange(v)}
            />
          </div>
        </div>
      </div>
      <div className="w-full" ref={ref} />
    </>
  );
};

export default TransactionChart;
