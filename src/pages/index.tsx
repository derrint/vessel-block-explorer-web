import React from 'react';

import moment from 'moment';
import Link from 'next/link';
import { AiOutlineSync } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';

import { Section } from '@components/layout';
import { Search } from '@components/search';
import { SDKContext } from '@context/SDK';

const Home = () => {
  const transactions = [
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfcefgj898as7sas24',
      to: '0xa15c13e183bfcefgj898as7sas24',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfcefgj898as7sas24',
      to: '0xa15c13e183bfcefgj898as7sas24',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfcefgj898as7sas24',
      to: '0xa15c13e183bfcefgj898as7sas24',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfcefgj898as7sas24',
      to: '0xa15c13e183bfcefgj898as7sas24',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
    {
      id: '0xa15c13e183bfcefgj898as7sas24',
      timestamp: '4 secs ago',
      from: '0xa15c13e183bfcefgj898as7sas24',
      to: '0xa15c13e183bfcefgj898as7sas24',
      value: '0.4283 VSL',
      icon: <AiOutlineSync size={20} />,
    },
  ];

  const { provider } = React.useContext(SDKContext);

  // provider.listAccounts().then((result) => {
  //   console.log(`accounts : ${result}`);
  // });

  const [blockTotal, setBlockTotal] = React.useState(0);
  const [blockItems, setBlockItems] = React.useState([] as any);

  const getAllBlock = async () => {
    const latestBlockNumber = await provider.getBlockNumber();
    setBlockTotal(latestBlockNumber);

    // List blocks in table
    const latestBlocks = [] as any;
    for (let i = 0; i < 20; i += 1) {
      provider.getBlock(latestBlockNumber - i).then((block) => {
        latestBlocks.push(block);
        // console.log(block);
        // provider.getTransaction(block.hash).then((tx) => {
        //   console.log(tx);
        // });
        setBlockItems((oldArray: any) => [...oldArray, block]);
      });
    }
  };

  React.useEffect(() => {
    getAllBlock();

    return () => {};
  }, []);

  const metrics = [
    {
      id: 'blocks',
      label: 'Total Blocks',
      value: blockTotal.toLocaleString(),
    },
    {
      id: 'txs',
      label: 'Total Transactions',
      value: '95,001,163',
    },
    {
      id: 'wallets',
      label: 'Wallets Created',
      value: '3,989,475',
    },
  ];

  return (
    <Section>
      <h1 className="text-3xl font-bold text-center mb-6">
        Vessel Blockchain Explorer
      </h1>

      <Search isHome />

      <div className="mt-12">
        <h2 className="text-xl font-bold">Blockchain Metrics</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-4">
          {metrics.map((item: any, index: number) => {
            return (
              <Link key={index} href={`/metrics/${item.id}`}>
                <a className="flex justify-between items-center bg-white px-6 py-5  w-full lg:w-1/3 rounded-2xl	shadow-md">
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

      <div className="mt-12 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold">Latest Blocks</h2>
          <div className="bg-white px-6 py-5 mt-4 rounded-2xl shadow-md divide-y divide-gray-divider ">
            {blockItems.map((item: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="flex items-start justify-between mt-3 pt-3 first:mt-0 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex bg-gray-background rounded-lg p-2">
                      <FiLayers size={20} />
                    </div>
                    <div>
                      <Link href={`/block/${item.number}`} passHref>
                        <a className="text-sm sm:text-base font-bold text-primary truncate w-24 block">
                          {item.number}
                        </a>
                      </Link>
                      <div className="text-xs font-medium text-gray-text">
                        {moment.unix(item.timestamp).fromNow()}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold hidden lg:block">
                    {item.transactions.length} txns
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold lg:hidden truncate w-28">
                      {item.transactions.length} txns
                    </div>
                    <Link href={`/address/${item.hash}`} passHref>
                      <a className="text-sm font-medium text-primary truncate w-28 sm:w-auto lg:w-28 hidden lg:block">
                        {item.hash}
                      </a>
                    </Link>
                    <div className="text-xs font-medium text-gray-text lg:hidden">
                      {item.difficulty}
                    </div>
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

        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h2 className="text-xl font-bold">Latest Transactions</h2>
          <div className="bg-white px-6 py-5 mt-4 rounded-2xl shadow-md divide-y divide-gray-divider ">
            {transactions.map((item: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start justify-between mt-3 pt-3 first:mt-0 first:pt-0 gap-2 sm:gap-0"
                >
                  <div className="flex items-center gap-4 w-full sm:w-5/12">
                    <div className="bg-gray-background rounded-lg p-2 hidden sm:flex">
                      {item.icon}
                    </div>
                    <div>
                      <Link href={`/tx/${item.id}`} passHref>
                        <a className="text-sm sm:text-base font-bold text-primary truncate w-64 sm:w-28 block">
                          {item.id}
                        </a>
                      </Link>
                      <div className="text-xs font-medium text-gray-text hidden sm:block">
                        {item.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-5/12 flex flex-row sm:flex-col gap-2 sm:gap-0">
                    <div className="text-xs sm:text-sm font-medium truncate w-40">
                      From{' '}
                      <Link href={`/address/${item.from}`} passHref>
                        <a className="text-primary">{item.from}</a>
                      </Link>
                    </div>
                    <div className="text-xs sm:text-sm font-medium truncate w-40">
                      To{' '}
                      <Link href={`/address/${item.to}`} passHref>
                        <a className="text-primary">{item.to}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="text-right text-xs font-medium w-full sm:w-2/12 hidden sm:block">
                    {item.value}
                  </div>
                  <div className="flex sm:hidden bg-[#F0F3FA] rounded-xl px-3 py-1 w-full justify-between">
                    <div className="text-xs font-extrabold text-[#2D4786] flex items-center gap-2">
                      <img
                        src="https://derrint.sirv.com/Images/vessel/block-explorer/icons/icon-vessel.png"
                        alt=""
                        className="w-3 inline"
                      />
                      {item.value}
                    </div>
                    <div className="text-xs font-semibold text-[#9EAFD6]">
                      {item.timestamp}
                    </div>
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
