import React, { useState } from 'react';

import { Tab } from '@headlessui/react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import { Section } from '@components/layout';

import TransactionChart from './transactionchart';
import WalletChart from './walletchart';

const Metrics = () => {
  const router = useRouter();

  const [selectedMetric, setSelectedMetric] = React.useState('' as any);

  React.useEffect(() => {
    console.log(router.query.id);
    if (router.query.id) {
      const mt = router?.query?.id[0];
      setSelectedMetric(mt);
    }

    return () => {};
  }, [router.query]);

  const metrics = [
    {
      id: 'blocks',
      label: {
        primary: 'Blocks',
        total: 'Total Blocks',
      },
      value: '25,410,510',
      hasDetail: true,
      route: '/blocks',
    },
    {
      id: 'txs',
      label: {
        primary: 'Transactions',
        total: 'Total Transactions',
      },
      value: '95,001,163',
      hasDetail: true,
      route: '/txs',
    },
    {
      id: 'wallets',
      label: {
        primary: 'Wallets',
        total: 'Wallets Created',
      },
      value: '3,989,475',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Section>
      <h1 className="text-3xl font-bold">Blockchain Metrics</h1>

      <div className="mt-10">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={(idx: any) => {
            setSelectedIndex(idx);

            const sm = metrics[idx];
            setSelectedMetric(sm?.id);
            const href = `/metrics/${sm?.id}`;

            Router.push(href);
          }}
        >
          <Tab.List className="flex max-w-min p-1 space-x-1 bg-gray-background rounded-2xl">
            {metrics.map((item: any) => (
              <Tab
                key={item.id}
                className={`py-4 px-6 text-base leading-5 font-bold rounded-2xl
                    ${
                      selectedMetric === item.id
                        ? ' text-primary bg-white shadow-md '
                        : ' text-gray-text '
                    }`}
              >
                {item.label.primary}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6">
            {metrics.map((item, idx) => (
              <Tab.Panel key={idx} className="w-full">
                <div className="flex justify-between items-center bg-white px-6 py-5 rounded-2xl	shadow-md">
                  <div>
                    <h4 className="text-sm font-bold text-gray-text">
                      {item.label.total}
                    </h4>
                    <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
                  </div>
                  <div className={item.hasDetail ? '' : 'hidden'}>
                    <Link href={item.route || ''} passHref>
                      <button className="w-full px-5 py-2 font-bold text-sm text-primary text-center rounded-full bg-gradient-to-r from-gradient-gray-start to-gradient-gray-end">
                        View all {item.label.primary.toLowerCase()}
                      </button>
                    </Link>
                  </div>
                </div>
                {item.id === 'txs' && (
                  <div className="flex flex-col bg-white mt-5 px-6 py-5 rounded-2xl	shadow-md">
                    <TransactionChart />
                  </div>
                )}
                {item.id === 'wallets' && (
                  <div className="flex flex-col bg-white mt-5 px-6 py-5 rounded-2xl	shadow-md">
                    <WalletChart />
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Section>
  );
};

export default Metrics;
