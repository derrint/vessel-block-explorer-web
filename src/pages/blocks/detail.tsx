import React from 'react';

import { IoMdCopy } from 'react-icons/io';

import { Section } from '@components/layout';
import { Search } from '@components/search';

const BlocksDetails = () => {
  return (
    <Section>
      <div className="flex flex-row justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Block details</h1>
        <Search />
      </div>
      <div className="flex flex-col rounded-2xl shadow-md bg-white divide-y divide-gray-divider">
        <div className="px-5 py-3">
          <h4 className="text-md font-bold">Overview</h4>
        </div>
        <div className="px-5 py-3 grid grid-cols-4 gap-4 text-sm">
          <div className="text-gray-400 my-3">Block Height</div>
          <div className="col-span-3 my-3">14337225</div>
          <div className="text-gray-400 mb-3">Timestamp</div>
          <div className="col-span-3 mb-3">
            4 hrs 16 mins ago (Mar-09-2022 12:11:18 PM +UTC)
          </div>
          <div className="text-gray-400 mb-3">Transaction</div>
          <div className="col-span-3 mb-3">Total 536 transactions</div>
          <div className="text-gray-400 mb-3">Validator</div>
          <div className="col-span-3 text-primary mb-3">
            <p className="flex flex-row break-words items-center">
              BWQyzbv91RiqL94DoCcXTYUqvpUrYdMF3N1N6qHNFtJm{' '}
              <IoMdCopy
                size={15}
                className="cursor-pointer mx-2"
                color="#6151FF"
                onClick={() => console.log('copy')}
              />
            </p>
          </div>
          <div className="text-gray-400 mb-3">Gas Used</div>
          <div className="col-span-3 mb-3">7,884,062 (20%)</div>
        </div>
      </div>
    </Section>
  );
};
export default BlocksDetails;
