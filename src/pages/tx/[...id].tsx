import React from 'react';

import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { IoMdCopy } from 'react-icons/io';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { Section } from '@components/layout';
import { Modal } from '@components/modal';
import { Search } from '@components/search';
import { useActions } from '@overmind/index';
import { copyToClipboard } from '@utils/helper';

const TxDetails = () => {
  const { showModal } = useActions();
  const blockNumber = '14337225';
  const address = 'BWQyzbv91RiqL94DoCcXTYUqvpUrYdMF3N1N6qHNFtJm';

  return (
    <Section>
      <div className="flex flex-row sm:flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center mb-10">
        <h1 className="text-xl sm:text-3xl font-bold mb-0 sm:mb-5 lg:mb-0">
          Transaction details
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

      <div className="flex flex-col rounded-2xl shadow-md bg-white divide-y sm:divide-gray-divider">
        <div className="px-5 py-3">
          <h4 className="text-md font-bold">Overview</h4>
        </div>
        <div className="px-5 py-5 sm:py-3 flex flex-col sm:grid sm:grid-cols-4 gap-2 sm:gap-4 text-sm">
          <div className="text-gray-text font-bold sm:my-3">
            Transaction Hash
          </div>
          <div className="col-span-3 mb-3 sm:my-3 font-medium break-all">
            0x73a201a8694c1a689153c3f320d410e290d0504a7e9775c931eeed5dbade8f7c
          </div>
          <div className="text-gray-text font-bold sm:mb-3">Status</div>
          <div className="col-span-3 mb-3 text-green-500 font-bold">
            <p className="flex flex-row items-center">
              <IoCheckmarkCircle
                size={15}
                className="mr-2"
                color="rgba(97, 196, 84, 1);"
              />{' '}
              Success
            </p>
          </div>
          <div className="text-gray-text font-bold sm:mb-3">Block</div>
          <div className="col-span-3 mb-3 font-medium">
            <Link href={`/block/${blockNumber}`} passHref>
              <a className="text-primary break-all">{blockNumber}</a>
            </Link>
          </div>
          <div className="text-gray-text font-bold sm:mb-3">Timestamp</div>
          <div className="col-span-3 mb-3 font-medium">
            4 hrs 16 mins ago (Mar-09-2022 12:11:18 PM +UTC)
          </div>
          <div className="text-gray-text font-bold sm:mb-3">From</div>
          <div className="col-span-3 mb-3 font-medium">
            <p>
              <Link href={`/address/${address}`} passHref>
                <a className="text-primary inline break-all">{address}</a>
              </Link>
              <IoMdCopy
                size={15}
                className="cursor-pointer mx-2 inline"
                color="#6151FF"
                onClick={() => {
                  copyToClipboard(address);
                }}
              />
            </p>
          </div>
          <div className="text-gray-text font-bold sm:mb-3">To</div>
          <div className="col-span-3 mb-3 font-medium">
            <p>
              <Link href={`/address/${address}`} passHref>
                <a className="text-primary inline break-all">{address}</a>
              </Link>
              <IoMdCopy
                size={15}
                className="cursor-pointer mx-2 inline"
                color="#6151FF"
                onClick={() => {
                  copyToClipboard(address);
                }}
              />
            </p>
          </div>
          <div className="text-gray-text font-bold sm:mb-3">Value</div>
          <div className="col-span-3 mb-3 font-medium">0.4283 VSL</div>
          <div className="text-gray-text font-bold sm:mb-3">
            Transaction Fee
          </div>
          <div className="col-span-3 mb-3 font-medium">0.00289 VSL($7.32)</div>
          <div className="text-gray-text font-bold sm:mb-3">Gas Price</div>
          <div className="col-span-3 mb-3 font-medium">0.000000035134 VSL</div>
          <div className="text-gray-text font-bold sm:mb-3">Notes</div>
          <div className="col-span-3 mb-3 font-medium">ERC 20 Transfers</div>
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
      </div>
    </Section>
  );
};
export default TxDetails;
