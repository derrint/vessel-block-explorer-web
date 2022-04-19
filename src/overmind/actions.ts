/* eslint-disable no-await-in-loop */
import { ethers } from 'ethers';
import _ from 'lodash';

import { rpcUrl, chainId, networkName } from '@constant/config';

const provider = new ethers.providers.JsonRpcProvider(rpcUrl, {
  name: networkName,
  chainId,
});

// -----
// ----- GLOBAL section -----
// -----

export const setLoading = async (context: any, payload: any) => {
  context.state.isLoading = payload;
};

export const showModal = async (context: any, payload: string) => {
  context.state.modal = {
    ...context.state.modal,
    name: payload,
    isVisible: true,
  };
};

export const hideModal = async (context: any) => {
  context.state.modal = {
    ...context.state.modal,
    type: null,
    isVisible: false,
  };
};

export const updateBlockTotal = async (context: any) => {
  const latestBlockNumber = await provider.getBlockNumber();

  context.state.block = {
    ...context.state.block,
    total: latestBlockNumber,
  };

  return latestBlockNumber;
};

export const updateBlockItems = async (context: any) => {
  const { total, items } = context.state.block;
  const latestBlockItems = [...items];

  for (let i = 0; i < 5; i += 1) {
    const currentBlock = await provider.getBlock(total - i);
    if (!latestBlockItems.find((x: any) => x.number === currentBlock.number)) {
      latestBlockItems.unshift(currentBlock);
    }
  }

  const lbiSorted = _.orderBy(latestBlockItems, ['number'], ['desc']);

  context.state.block = {
    ...context.state.block,
    items: lbiSorted,
  };
};
