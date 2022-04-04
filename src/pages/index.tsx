import Link from 'next/link';
import { AiOutlineSync } from 'react-icons/ai';
import { BiChevronRight, BiCube } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';

import { Section } from '@components/layout';
import { Search } from '@components/search';

const Home = () => {
  const metrics = [
    {
      id: 'blocks',
      label: 'Total Blocks',
      value: '25,410,510',
    },
    {
      id: 'transactions',
      label: 'Total Transactions',
      value: '95,001,163',
    },
    {
      id: 'wallets',
      label: 'Wallets Created',
      value: '3,989,475',
    },
  ];

  const blocks = [
    {
      id: 14337225,
      timestamp: '4 secs ago',
      value: '40 txns',
      icon: <FiLayers size={20} />,
      hash: '0xa15c13e183bfc',
    },
    {
      id: 14337225,
      timestamp: '4 secs ago',
      value: '40 txns',
      icon: <FiLayers size={20} />,
      hash: '0xa15c13e183bfc',
    },
    {
      id: 14337225,
      timestamp: '4 secs ago',
      value: '40 txns',
      icon: <FiLayers size={20} />,
      hash: '0xa15c13e183bfc',
    },
    {
      id: 14337225,
      timestamp: '4 secs ago',
      value: '40 txns',
      icon: <BiCube size={20} />,
      hash: '0xa15c13e183bfc',
    },
    {
      id: 14337225,
      timestamp: '4 secs ago',
      value: '40 txns',
      icon: <BiCube size={20} />,
      hash: '0xa15c13e183bfc',
    },
  ];

  const transactions = [
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfc...',
      to: '0xa15c13e183bfc...',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfc...',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfc...',
      to: '0xa15c13e183bfc...',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfc...',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfc...',
      to: '0xa15c13e183bfc...',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfc...',
      to: '0xa15c13e183bfc...',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfc...',
      to: '0xa15c13e183bfc...',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
  ];

  return (
    <Section>
      <h1 className="text-3xl font-bold text-center mb-6">
        Vessel Blockchain Explorer
      </h1>

      <Search />

      <div className="mt-12">
        <h2 className="text-xt font-bold">Blockchain Metrics</h2>
        <div className="flex justify-between gap-6 mt-4">
          {metrics.map((item: any, index: number) => {
            return (
              <Link key={index} href={`/metrics/${item.id}`}>
                <a className="flex justify-between items-center bg-white px-6 py-5 w-4/12 rounded-2xl	shadow-md">
                  <div>
                    <h4 className="text-sm font-bold text-gray-text">
                      {item.label}
                    </h4>
                    <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
                  </div>
                  <div className="text-primary">
                    <BiChevronRight size={20} />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex justify-between gap-6">
        <div className="w-6/12">
          <h2 className="text-xt font-bold">Latest Blocks</h2>
          <div className="bg-white px-6 py-5 mt-4 rounded-2xl shadow-md divide-y divide-gray-divider ">
            {blocks.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex items-start justify-between mt-3 pt-3 first:mt-0 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex bg-gray-background rounded-lg p-2">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-base font-bold text-primary">
                        {item.id}
                      </div>
                      <div className="text-xs font-medium text-gray-text">
                        {item.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold">{item.value}</div>
                  <div className="text-sm font-medium text-primary">
                    {item.hash}
                  </div>
                </div>
              );
            })}
            <div className="mt-3 pt-5">
              <button className="w-full py-2 font-bold text-sm text-primary text-center rounded-full bg-gradient-to-r from-gradient-gray-start to-gradient-gray-end">
                View all blocks
              </button>
            </div>
          </div>
        </div>

        <div className="w-6/12">
          <h2 className="text-xt font-bold">Latest Transactions</h2>
          <div className="bg-white px-6 py-5 mt-4 rounded-2xl shadow-md divide-y divide-gray-divider ">
            {transactions.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex items-start justify-between mt-3 pt-3 first:mt-0 first:pt-0"
                >
                  <div className="flex items-center gap-4 w-5/12">
                    <div className="flex bg-gray-background rounded-lg p-2">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-base font-bold text-primary truncate w-28">
                        {item.id}
                      </div>
                      <div className="text-xs font-medium text-gray-text">
                        {item.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="w-5/12">
                    <div className="text-sm font-medium truncate w-40">
                      From <span className="text-primary">{item.from}</span>
                    </div>
                    <div className="text-sm font-medium truncate w-40">
                      To <span className="text-primary">{item.to}</span>
                    </div>
                  </div>
                  <div className="text-right text-xs font-medium w-2/12">
                    {item.value}
                  </div>
                </div>
              );
            })}
            <div className="mt-3 pt-5">
              <button className="w-full py-2 font-bold text-sm text-primary text-center rounded-full bg-gradient-to-r from-gradient-gray-start to-gradient-gray-end">
                View all transactions
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
