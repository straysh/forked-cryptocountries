import Web3 from 'web3';


const web3 = new Web3();

web3.parsePrice = (price, fixed=4)=>{
  let p = web3.utils.fromWei(price);
  p = parseFloat(p).toFixed(fixed);
  return p;
}

export default web3;
