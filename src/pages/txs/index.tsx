import React from 'react';

import moment from 'moment';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

import { Section } from '@components/layout';
import { Modal } from '@components/modal';
import { Search } from '@components/search';
import { TransactionDataDummy as Data } from '@data/index';
import { useActions } from '@overmind/index';

const Transactions = () => {
  const { showModal } = useActions();

  return (
    <Section>
      <div className="flex flex-row sm:flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center mb-10">
        <h1 className="text-xl sm:text-3xl font-bold mb-0 sm:mb-5 lg:mb-0">
          Transactions
        </h1>

        <Search className="hidden sm:flex" />

        <button
          type="submit"
          className="flex sm:hidden gap-2 items-center justify-center bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end h-14 w-16 rounded-2xl shadow-md text-white"
          onClick={() => showModal('search')}
        >
          <FiSearch size={20} />
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-2xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 bg-white">
            <tr>
              <th scope="col" className="px-6 py-4">
                Txn Hash
              </th>
              <th scope="col" className="px-6 py-4">
                Block
              </th>
              <th scope="col" className="px-6 py-4">
                <span className="flex items-center whitespace-nowrap">
                  Time (UTC){' '}
                  <MdOutlineAccessTimeFilled
                    size={15}
                    className="mx-2"
                    color="#6151FF"
                  />
                </span>
              </th>
              <th scope="col" className="px-6 py-4">
                From
              </th>
              <th scope="col" className="px-6 py-4">
                To
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap">
                Value (VSL)
              </th>
            </tr>
          </thead>
          <tbody>
            {Data.Data.map((item, i) => (
              <tr key={i} className="odd:bg-gray-50 even:bg-white border-b">
                <td scope="row" className="px-6 py-3">
                  <div className="text-primary truncate w-28">
                    <Link href={`/tx/${item.transaction_hash}`} passHref>
                      <a className="text-primary">{item.transaction_hash}</a>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <div className="text-primary truncate w-18">
                    <Link href={`/block/${item.block}`} passHref>
                      <a className="text-primary">{item.block}</a>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {moment(item.time).format('YYYY-MM-DD HH:mm:ss')}
                </td>
                <td className="px-6 py-3">
                  <Link href={`/address/${item.from}`} passHref>
                    <a className="text-primary truncate w-28 block">
                      {item.from}
                    </a>
                  </Link>
                </td>
                <td className="px-6 py-3">
                  <Link href={`/address/${item.to}`} passHref>
                    <a className="text-primary truncate w-28 block">
                      {item.to}
                    </a>
                  </Link>
                </td>
                <td className="px-6 py-3">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal name="search">
        <div className="p-6 pt-12 text-left bg-white shadow-xl rounded-2xl">
          <h1 className="font-bold text-3xl mb-2">Search</h1>
          <p className="font-medium text-sm text-gray-text mb-5">
            Search transaction, block, wallet (tx)
          </p>
          <Search inputClassName="!w-full" />
        </div>
      </Modal>
    </Section>
  );
};
export default Transactions;
