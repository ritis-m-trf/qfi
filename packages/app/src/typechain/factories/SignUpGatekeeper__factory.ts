/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SignUpGatekeeper,
  SignUpGatekeeperInterface,
} from "../SignUpGatekeeper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract MACI",
        name: "_maci",
        type: "address",
      },
    ],
    name: "setMaciInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class SignUpGatekeeper__factory {
  static readonly abi = _abi;
  static createInterface(): SignUpGatekeeperInterface {
    return new utils.Interface(_abi) as SignUpGatekeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignUpGatekeeper {
    return new Contract(address, _abi, signerOrProvider) as SignUpGatekeeper;
  }
}