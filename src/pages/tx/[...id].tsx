import React from 'react';

import Link from 'next/link';
import { IoMdCopy } from 'react-icons/io';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { Section } from '@components/layout';
import { Search } from '@components/search';

const TxDetails = () => {
  const blockNumber = '14337225';
  const address = 'BWQyzbv91RiqL94DoCcXTYUqvpUrYdMF3N1N6qHNFtJm';

  return (
    <Section>
      <div className="flex flex-row justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Transaction details</h1>
        <Search />
      </div>
      <div className="flex flex-col rounded-2xl shadow-md bg-white divide-y divide-gray-divider">
        <div className="px-5 py-3">
          <h4 className="text-md font-bold">Overview</h4>
        </div>
        <div className="px-5 py-3 grid grid-cols-4 gap-4 text-sm">
          <div className="text-gray-text font-bold my-3">Transaction Hash</div>
          <div className="col-span-3 my-3">
            0x73a201a8694c1a689153c3f320d410e290d0504a7e9775c931eeed5dbade8f7c
          </div>
          <div className="text-gray-text font-bold mb-3">Status</div>
          <div className="col-span-3 mmby-3 text-green-500">
            <p className="flex flex-row break-words items-center">
              <IoCheckmarkCircle
                size={15}
                className="mr-2"
                color="rgba(97, 196, 84, 1);"
              />{' '}
              Success
            </p>
          </div>
          <div className="text-gray-text font-bold mb-3">Block</div>
          <div className="col-span-3 mb-3">
            <Link href={`/block/${blockNumber}`} passHref>
              <a className="text-primary">{blockNumber}</a>
            </Link>
          </div>
          <div className="text-gray-text font-bold mb-3">Timestamp</div>
          <div className="col-span-3 mb-3">
            4 hrs 16 mins ago (Mar-09-2022 12:11:18 PM +UTC)
          </div>
          <div className="text-gray-text font-bold mb-3">From</div>
          <div className="col-span-3 mb-3">
            <p className="flex flex-row break-words items-center">
              <Link href={`/address/${address}`} passHref>
                <a className="text-primary">{address}</a>
              </Link>
              <IoMdCopy
                size={15}
                className="cursor-pointer mx-2"
                color="#6151FF"
                onClick={() => console.log('copy')}
              />
            </p>
          </div>
          <div className="text-gray-text font-bold mb-3">To</div>
          <div className="col-span-3 mb-3">
            <p className="flex flex-row break-words items-center">
              <Link href={`/address/${address}`} passHref>
                <a className="text-primary">{address}</a>
              </Link>
              <IoMdCopy
                size={15}
                className="cursor-pointer mx-2"
                color="#6151FF"
                onClick={() => console.log('copy')}
              />
            </p>
          </div>
          <div className="text-gray-text font-bold mb-3">Value</div>
          <div className="col-span-3 mb-3">0.4283 VSL</div>
          <div className="text-gray-text font-bold mb-3">Transaction Fee</div>
          <div className="col-span-3 mb-3">0.00289 VSL($7.32)</div>
          <div className="text-gray-text font-bold mb-3">Gas Price</div>
          <div className="col-span-3 mb-3">0.000000035134 VSL</div>
          <div className="text-gray-text font-bold mb-3">Notes</div>
          <div className="col-span-3 mb-3">ERC 20 Transfers</div>
        </div>
      </div>
    </Section>
  );
};
export default TxDetails;
