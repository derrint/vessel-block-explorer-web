import React, { Fragment } from 'react';

import { Tab, Transition, Popover } from '@headlessui/react';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import { HiOutlineQrcode } from 'react-icons/hi';
import { IoMdCopy } from 'react-icons/io';
import QRCode from 'react-qr-code';

import { Section } from '@components/layout';
import { Modal } from '@components/modal';
import { Search } from '@components/search';
import { useActions } from '@overmind/index';
import { copyToClipboard } from '@utils/helper';

import ERCs from './erc';
import Transactions from './txs';

const BlocksDetails = () => {
  const { showModal } = useActions();

  const address = '0x2281774720dab09c';
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabs = [
    {
      id: 'txs',
      label: 'Transactions',
      content: <Transactions />,
    },
    {
      id: 'erc-20',
      label: 'ERC 20',
      content: <ERCs />,
    },
    {
      id: 'erc-1155',
      label: 'ERC 1155',
      content: <ERCs />,
    },
  ];

  const tokens = [
    {
      name: 'Matic Token',
      icon: 'https://derrint.sirv.com/Images/vessel/block-explorer/icons/icon-matic.png',
      amount: '24,880 MATIC',
      price: '$33,177',
      value: '$1.37',
    },
    {
      name: 'USD Coin',
      icon: 'https://derrint.sirv.com/Images/vessel/block-explorer/icons/icon-usdc.png',
      amount: '66 USDC',
      price: '$24,300',
      value: '$1.40',
    },
  ];

  return (
    <Section>
      <div className="flex flex-row sm:flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center mb-10">
        <h1 className="text-xl sm:text-3xl font-bold mb-0 sm:mb-5 lg:mb-0">
          Wallet details
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

      <div className="flex items-center gap-4 mb-5">
        <img
          id="icon"
          className="u-xs-avatar rounded-full w-8"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA5BJREFUeF7t3b2xFWcQRdG5NhaZUCUPosAlBaJRHDJIArAgFizkSkEs41RL+/k9X7/de86dv5p5ffrz3T/P4b+Pf7yZdv/l5+/p+rr4KwEMYQIYP64uAQxhCWD8nhIAAWp5CWAESwDjVwIgPy4vAQxhCWD8SgDkx+UlgCEsAYxfCYD8uLwEMIQlgPErAZAfl5cAhrAEMH4lAPLj8hLAEJYAxq8EWO+BOL/z5XozihMgAbYOJcCW/3z1BJiPYNtAAmz5z1dPgPkItg0kwJb/fPUEmI9g20ACbPnPV0+A+Qi2DSTAlv989QSYj2DbQAJs+c9XT4D5CLYNJMCW/3z1BJiPYNvAeQH0H1jfjl73r+vPnwfQfyAB7AUVCYAJvhZY10+ABLB3BGkEq8G6Ps6fHwrV/pVfCYAG6AASAN+ypQBx/iWADmC9ByUAvicwAew0bM2vYwCMgHWC6foJkACdBooDugf2E9BZgPjHZyH9BBD+hwdQApQApKD+BJUAhP8/kACff/xN3wv49e09IrRyjVBb3QXQ9d9++E6beCUA8eNjAFv9eRLgf/7FkARIAAqRfgIIX8cATweBdjMI/esYoLOAzgJ0J6J6vRBDiz+dBTwlQAmgOxHVlwBdCSSBtLjrAF0HIIe6DkD4ug7QdQC8nY3+dR2gs4DOAnQnovrzZwHXPx9P06v44SeCYnibQALcnh93nwCM8PYGEuD2/Lj7BGCEtzeQALfnx90nACO8vYEEuD0/7j4BGOHtDSTA7flx9wnACG9vIAFuz4+7TwBGeHsDCXB7ftx9AjDC2xt4/fX1A70fYP1AxG383r0+EZUAPoPpFhJgin+/eALsZzDtIAGm+PeLJ8B+BtMOEmCKf794AuxnMO0gAab494snwH4G0w4SYIp/v3gC7Gcw7SABpvj3iyfAfgbTDhJgin+/eALsZzDtgAW4/n4ABaDTu/48xPknghLAFE4A4zf/YAS2f/8NISWAKVACGL8SAPlxeQlgCEsA41cCID8uLwEMYQlg/EoA5MflJYAhLAGMXwmA/Li8BDCEJYDxKwGQH5eXAIawBDB+JQDy4/ISwBByAugArt9PN/wPf/dQ+SWAThDr1ztQAuAAtTwBxl/d0gFqfQIkADnUMQDh2xeXACUAWVgCEL59cQlQApCFJQDh2xeXACUAWVgCEL59cQlQApCFJQDh2xeXACUAWVgCEL598ToB/gVk5De+2egiggAAAABJRU5ErkJggg=="
          alt=""
        />
        <h2 className="text-lg sm:text-2xl font-bold">{address}</h2>
        <IoMdCopy
          size={24}
          className="cursor-pointer"
          color="#6151FF"
          onClick={() => {
            copyToClipboard(address);
          }}
        />
        <HiOutlineQrcode
          size={24}
          className="cursor-pointer"
          color="#6151FF"
          onClick={() => {
            showModal('qr-address');
          }}
        />

        <Modal name="qr-address">
          <div className="max-w-md p-6 pt-16 text-center bg-white shadow-xl rounded-2xl">
            <h3 className="text-xl font-bold leading-6 text-gray-900">
              {address}
            </h3>
            <div className="mt-5 flex justify-center">
              <QRCode value={address} size={180} />
            </div>
          </div>
        </Modal>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-6/12 flex flex-col rounded-2xl shadow-md bg-white sm:divide-y sm:divide-gray-divider">
          <div className="px-5 pt-5 pb-3">
            <h4 className="text-md font-bold">Overview</h4>
          </div>
          <div className="px-5 py-5 lg:py-3 flex flex-col lg:grid lg:grid-cols-4 gap-2 lg:gap-4 text-sm">
            <div className="text-gray-text font-bold lg:my-3">Balance</div>
            <div className="col-span-3 mb-3 lg:my-3 font-bold">
              0.309860
              <img
                src="https://derrint.sirv.com/Images/vessel/block-explorer/icons/icon-vessel.png"
                alt=""
                className="w-6 inline mx-2"
              />
              <span className="font-medium">VSL</span>
            </div>
            <div className="text-gray-text font-bold lg:mb-3">Created at</div>
            <div className="col-span-3 mb-3 font-medium">
              22 February 2021, 16:03:08
            </div>
            <div className="text-gray-text font-bold lg:mb-3">Assets</div>
            <div className="col-span-3 lg:mb-3 flex items-center gap-3 font-bold">
              $5.87
              <Popover className="relative">
                {({ open }) => {
                  const chevronClassNames = `${open ? '' : 'text-opacity-70'}
                  ml-2 h-4 w-4 text-primary group-hover:text-opacity-80 transition ease-in-out duration-150`;

                  return (
                    <>
                      <Popover.Button
                        className={`
                          ${open ? '' : 'text-opacity-90'}
                          text-primary group bg-[#0034B914] px-3 py-2 rounded-md inline-flex items-center text-xs font-bold hover:text-opacity-100`}
                      >
                        <span>5 Tokens</span>
                        {open ? (
                          <FiChevronUp
                            className={chevronClassNames}
                            aria-hidden="true"
                          />
                        ) : (
                          <FiChevronDown
                            className={chevronClassNames}
                            aria-hidden="true"
                          />
                        )}
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
                          <div className="overflow-hidden bg-white p-2 rounded-lg shadow-lg">
                            <div className="px-4 py-3 grid grid-cols-4 gap-4 text-sm text-gray-text font-bold">
                              <div></div>
                              <div>Amount</div>
                              <div>Price</div>
                              <div>Value</div>
                            </div>
                            {tokens.map((item, idx) => (
                              <div
                                key={idx}
                                className="px-4 py-3 grid grid-cols-4 gap-4 text-sm font-bold text-[#333333] items-center"
                              >
                                <div className="flex gap-2 items-center">
                                  <img
                                    src={item.icon}
                                    className="w-5 h-5"
                                    alt=""
                                  />
                                  {item.name}
                                </div>
                                <div>{item.amount}</div>
                                <div>{item.price}</div>
                                <div>{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  );
                }}
              </Popover>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-6/12 flex flex-col rounded-2xl shadow-md bg-white sm:divide-y sm:divide-gray-divider">
          <div className="px-5 pt-5 pb-3">
            <h4 className="text-md font-bold">More info</h4>
          </div>
          <div className="px-5 py-5 lg:py-3 flex flex-col lg:grid lg:grid-cols-4 gap-2 lg:gap-4 text-sm">
            <div className="text-gray-text font-bold lg:my-3">
              Not available
            </div>
            <div className="col-span-3 lg:my-3"></div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={(idx: any) => {
            setSelectedIndex(idx);
          }}
        >
          <Tab.List className="flex max-w-min p-1 space-x-1 rounded-2xl bg-gray-background">
            {tabs.map((item: any) => (
              <Tab
                key={item.id}
                className={`py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap text-sm sm:text-base leading-5 font-bold rounded-2xl
                    ${
                      tabs[selectedIndex]?.id === item.id
                        ? ' text-primary bg-white shadow-md'
                        : ' text-black '
                    }`}
              >
                {item.label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6 bg-gradient-gray-end">
            {tabs.map((item, idx) => (
              <Tab.Panel key={idx} className="w-full">
                {item.content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
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
export default BlocksDetails;
