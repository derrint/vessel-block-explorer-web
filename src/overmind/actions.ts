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
  const { block, transactions } = context.state;
  const blockItems = [...block.items];
  const txItems = [...transactions.items];

  for (let i = 0; i < 5; i += 1) {
    const currentBlock = await provider.getBlockWithTransactions(
      block.total - i
    );
    if (!blockItems.find((x: any) => x.number === currentBlock.number)) {
      blockItems.unshift(currentBlock);

      if (currentBlock.transactions.length > 0) {
        const txMapped = currentBlock.transactions.map((tx) => {
          return {
            ...tx,
            timestamp: currentBlock.timestamp,
          };
        });
        txItems.unshift(txMapped);
        console.log(currentBlock.number, txMapped);
      }
    }
  }

  const bciSorted = _.orderBy(blockItems, ['number'], ['desc']);

  context.state.block = {
    ...context.state.block,
    items: bciSorted,
  };

  context.state.transactions = {
    ...context.state.transactions,
    total: txItems.length,
    items: txItems,
  };
};
