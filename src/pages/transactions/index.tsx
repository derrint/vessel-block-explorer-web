import React from 'react';

import moment from 'moment';
import Link from 'next/link';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

import { Section } from '@components/layout';
import { Search } from '@components/search';
import { TransactionDataDummy as Data } from '@data/index';

const Transactions = () => {
  return (
    <Section>
      <div className="flex flex-row justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <Search />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  <span className="flex items-center">
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
                <th scope="col" className="px-6 py-4">
                  Value (VSL)
                </th>
              </tr>
            </thead>
            <tbody>
              {Data.Data.map((item, i) => (
                <tr key={i} className="odd:bg-gray-50 even:bg-white border-b">
                  <th scope="row" className="px-6 py-3">
                    <div className="text-primary truncate w-28">
                      <Link href="/transactions/detail" passHref>
                        <a className="text-primary">{item.transaction_hash}</a>
                      </Link>
                    </div>
                  </th>
                  <td className="px-6 py-3 text-primary">{item.block}</td>
                  <td className="px-6 py-3">
                    {moment(item.time).format('YYYY-MM-DD HH:mm:ss')}
                  </td>
                  <td className="px-6 py-3">
                    <div className="text-primary truncate w-28">
                      {item.from}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="text-primary truncate w-28">{item.to}</div>
                  </td>
                  <td className="px-6 py-3">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};
export default Transactions;
