import React from 'react';

import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

import { DropdownMenu } from '@components/dropdown';

type ISearchProps = {
  isHome?: boolean;
};

const Search = ({ isHome }: ISearchProps) => {
  const filters = [
    {
      id: 'all',
      label: 'All filters',
    },
    {
      id: 'txs',
      label: 'Transaction',
    },
    {
      id: 'blocks',
      label: 'Block',
    },
    {
      id: 'address',
      label: 'Wallet Tx',
    },
  ];

  const [searchParams, setSearchParams] = React.useState({
    q: '',
    filter: 'all',
  });

  const { q, filter } = searchParams;

  return (
    <div className="flex justify-center items-center text-center relative">
      <div className="border-x border-y border-gray-200 bg-white px-5 h-14 rounded-2xl text-sm focus-within:border-primary flex justify-start items-center shadow-md">
        <DropdownMenu
          title={filters.find((x) => x.id === filter)?.label as any}
          items={filters}
          onChange={(v: any) => {
            setSearchParams({ ...searchParams, filter: v });
          }}
        />
        <input
          className={`focus:outline-none ml-3 font-medium 
            ${isHome ? 'w-72' : 'w-[calc(100vw-276px)] lg:w-72'}`}
          type="search"
          name="search"
          placeholder="Search transaction, block, wallet (tx)"
          onChange={(e) => {
            setSearchParams({ ...searchParams, q: e.target.value });
          }}
        />
      </div>
      <Link
        href={{
          pathname: '/search',
          query: { q, filter },
        }}
        passHref
      >
        <button
          type="submit"
          className="flex items-center justify-center bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end h-14 w-16 rounded-2xl ml-3 shadow-md text-white"
        >
          <FiSearch size={20} />
        </button>
      </Link>
    </div>
  );
};

export { Search };
