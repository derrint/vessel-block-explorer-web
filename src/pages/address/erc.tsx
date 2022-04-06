import React from 'react';

import moment from 'moment';
import Link from 'next/link';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

import { TransactionDataDummy as Data } from '@data/index';

const ERCs = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-2xl">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 bg-white">
          <tr>
            <th scope="col" className="px-6 py-4">
              Txn Hash
            </th>
            <th scope="col" className="px-6 py-4">
              <span className="flex items-center">
                Age{' '}
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
            <th scope="col" className="px-6 py-4">
              Token
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
              <td className="px-6 py-3">{moment(item.time).fromNow()}</td>
              <td className="px-6 py-3">
                <Link href={`/address/${item.from}`} passHref>
                  <a className="text-primary truncate w-28 block">
                    {item.from}
                  </a>
                </Link>
              </td>
              <td className="px-6 py-3">
                <Link href={`/address/${item.to}`} passHref>
                  <a className="text-primary truncate w-28 block">{item.to}</a>
                </Link>
              </td>
              <td className="px-6 py-3">{item.value}</td>
              <td className="px-6 py-3">{item.token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ERCs;
