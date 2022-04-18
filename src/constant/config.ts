/* eslint-disable import/no-anonymous-default-export */
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const rpcUrl = process.env.NEXT_PUBLIC_BLOCKCHAIN_URL;
const chainId = parseInt(process.env.NEXT_PUBLIC_BLOCKCHAIN_ID || '', 10);
const networkName = process.env.NEXT_PUBLIC_BLOCKCHAIN_NAME || '';

export { baseUrl, rpcUrl, chainId, networkName };
