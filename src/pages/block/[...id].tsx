import React from 'react';

import Link from 'next/link';
import { IoMdCopy } from 'react-icons/io';

import { Section } from '@components/layout';
import { Search } from '@components/search';
import { copyToClipboard } from '@utils/helper';

const BlockDetails = () => {
  const blockNumber = 'BWQyzbv91RiqL94DoCcXTYUqvpUrYdMF3N1N6qHNFtJm';
  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
        <h1 className="text-3xl font-bold mb-5 lg:mb-0">Block details</h1>
        <Search />
      </div>
      <div className="flex flex-col rounded-2xl shadow-md bg-white divide-y divide-gray-divider">
        <div className="px-5 py-3">
          <h4 className="text-md font-bold">Overview</h4>
        </div>
        <div className="px-5 py-3 grid grid-cols-4 gap-4 text-sm">
          <div className="text-gray-text font-bold my-3">Block Height</div>
          <div className="col-span-3 my-3">14337225</div>
          <div className="text-gray-text font-bold mb-3">Timestamp</div>
          <div className="col-span-3 mb-3">
            4 hrs 16 mins ago (Mar-09-2022 12:11:18 PM +UTC)
          </div>
          <div className="text-gray-text font-bold mb-3">Transaction</div>
          <div className="col-span-3 mb-3">Total 536 transactions</div>
          <div className="text-gray-text font-bold mb-3">Validator</div>
          <div className="col-span-3 mb-3">
            <p className="flex flex-row break-words items-center">
              <Link href={`/address/${blockNumber}`} passHref>
                <a className="text-primary">{blockNumber}</a>
              </Link>
              <IoMdCopy
                size={15}
                className="cursor-pointer mx-2"
                color="#6151FF"
                onClick={() => {
                  copyToClipboard(blockNumber);
                }}
              />
            </p>
          </div>
          <div className="text-gray-text font-bold mb-3">Gas Used</div>
          <div className="col-span-3 mb-3">7,884,062 (20%)</div>
        </div>
      </div>
    </Section>
  );
};
export default BlockDetails;
