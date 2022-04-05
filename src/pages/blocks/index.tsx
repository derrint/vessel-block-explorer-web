import React from 'react';

import moment from 'moment';
import Link from 'next/link';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';

import { Section } from '@components/layout';
import { Search } from '@components/search';
import { BlocksDataDummy as Data } from '@data/index';

const Blocks = () => {
  return (
    <Section>
      <div className="flex flex-row justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Blocks</h1>
        <Search />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 bg-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Block
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
                  Txn
                </th>
                <th scope="col" className="px-6 py-4">
                  Validator
                </th>
                <th scope="col" className="px-6 py-4">
                  Gas used
                </th>
              </tr>
            </thead>
            <tbody>
              {Data.Data.map((item, i) => (
                <tr key={i} className="odd:bg-gray-50 even:bg-white border-b">
                  <th scope="row" className="px-6 py-3">
                    <Link href="/blocks/detail" passHref>
                      <a className="text-primary">{item.block}</a>
                    </Link>
                  </th>
                  <td className="px-6 py-3">{moment(item.age).fromNow()}</td>
                  <td className="px-6 py-3">{item.txn}</td>
                  <td className="px-6 py-3">
                    <Link href={`/address/${item.validator}`} passHref>
                      <a className="text-primary truncate w-28 block">
                        {item.validator}
                      </a>
                    </Link>
                  </td>
                  <td className="px-6 py-3">{item.gas_used}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};
export default Blocks;
