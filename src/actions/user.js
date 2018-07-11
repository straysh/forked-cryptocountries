/* eslint-disable import/prefer-default-export */
import Web3 from 'web3';
import {
  SET_RUNTIME_VARIABLE,
  SET_ADDRESS,
  SET_TOKEN_LISTS,
  SET_TX_LISTS,
  SET_TOKEN_NEW,
} from '../constants';

// const wsHost = "ws://172.29.1.169:9546";
const wsHost = 'ws://127.0.0.1:8546';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
class UserAction {
  start = () => async (dispatch, getState) => {
    const { context } = getState();
    const logs = context.logs || [];
    logs.push('1234565');
    dispatch({ type: SET_RUNTIME_VARIABLE, payload: { logs } });
  };

  setAddress = address => async (dispatch) => {
    dispatch({ type: SET_ADDRESS, payload: { address } });
  };

  fetchTokens = () => async (dispatch, getState) => {
    const { user } = getState();
    const ws = new Web3.providers.WebsocketProvider(wsHost);
    ws.send(
      {
        jsonrpc: '2.0',
        id: 101,
        method: 'ews_tokens',
        params: [user.address],
      },
      (err, tokens) => {
        console.warn(tokens);
        tokens = tokens ? tokens.result : [];
        dispatch({ type: SET_TOKEN_LISTS, payload: { tokens } });
      },
    );

    ws.send(
      {
        jsonrpc: '2.0',
        id: 102,
        method: 'ews_subscribe',
        params: ['newToken', user.address],
      },
      async (err, d) => {
        for (let i = 0; ; i++) {
          const params = {
            jsonrpc: '2.0',
            id: 1,
            method: 'ews_subscribe',
            params: ['pingPong', d.result],
          };
          ws.send(params, (err, data) => {
            console.warn(`ews_subscribe`, data);
          });
          await wait(1000 * 60 * 4);
        }
      },
    );
    ws.on('data', data => {
      data = data.params.result;
      data = JSON.parse(data);
      data.is_new = true;
      dispatch({ type: SET_TOKEN_NEW, payload: { tokens: [data] } });
    });
  };

  fetchErc20Transactions = (user_address, token_address) => async (
    dispatch,
  ) => {
    const ws = new Web3.providers.WebsocketProvider(wsHost);
    ws.send(
      {
        jsonrpc: '2.0',
        id: 101,
        method: 'ews_transactionContractHistory',
        params: [user_address, token_address, 0],
      },
      (err, transactions) => {
        transactions = transactions ? transactions.result : [];
        dispatch({ type: SET_TX_LISTS, payload: { transactions } });
      },
    );
  };

  fetchEthTransactions = user_address => async (dispatch) => {
    const ws = new Web3.providers.WebsocketProvider(wsHost);
    ws.send(
      {
        jsonrpc: '2.0',
        id: 101,
        method: 'ews_transactionEthHistory',
        params: [user_address, 0],
      },
      (err, transactions) => {
        transactions = transactions ? transactions.result : [];
        dispatch({ type: SET_TX_LISTS, payload: { transactions } });
      },
    );
  };
}

export default new UserAction();
