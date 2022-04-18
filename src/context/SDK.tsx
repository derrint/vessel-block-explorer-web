/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { ethers } from 'ethers';

import { rpcUrl, chainId, networkName } from '@constant/config';

type IDefaultContextProps = {
  provider: ethers.providers.JsonRpcProvider;
};

const provider = new ethers.providers.JsonRpcProvider(rpcUrl, {
  name: networkName,
  chainId,
});

export const SDKContext = React.createContext<IDefaultContextProps>({
  provider,
});

export const SDKProvider = ({ children }: any) => {
  return (
    <SDKContext.Provider value={{ provider }}>{children}</SDKContext.Provider>
  );
};
