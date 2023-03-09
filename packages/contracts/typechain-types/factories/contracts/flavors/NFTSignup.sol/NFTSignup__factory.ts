/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  NFTSignup,
  NFTSignupInterface,
} from "../../../../contracts/flavors/NFTSignup.sol/NFTSignup";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SignUpNFT",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_recipientId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "RecipientAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_recipientId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "RecipientRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
    ],
    name: "addRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "getRecipientAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecipientCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxRecipients",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract SignUpNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
        internalType: "bytes32",
        name: "_recipientId",
        type: "bytes32",
      },
    ],
    name: "removeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxRecipients",
        type: "uint256",
      },
    ],
    name: "setMaxRecipients",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161126a38038061126a83398101604081905261002f916100ec565b8061003933610084565b600180546001600160a01b039283166001600160a01b03199182161790915560068054938316938216939093179092556007929092556008805493909216921691909117905561012f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100e957600080fd5b50565b60008060006060848603121561010157600080fd5b835161010c816100d4565b602085015160408601519194509250610124816100d4565b809150509250925092565b61112c8061013e6000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c8063148ec9ab146100bf57806324b8fbf6146100e757806347ccca02146100fc578063570ca7351461012757806362564ed41461013a578063715018a61461014d578063739b53841461015557806388a13072146101685780638da5cb5b1461017f578063af99b63f14610187578063b69ef8a81461018f578063d7c9ebdd14610198578063f2fde38b146101ab578063f77c4791146101be575b600080fd5b6100d26100cd366004610dab565b6101d1565b60405190151581526020015b60405180910390f35b6100fa6100f5366004610def565b610275565b005b60085461010f906001600160a01b031681565b6040516001600160a01b0390911681526020016100de565b60065461010f906001600160a01b031681565b61010f610148366004610eb2565b6104bf565b6100fa610640565b6100fa610163366004610ede565b610654565b61017160025481565b6040519081526020016100de565b61010f6107b1565b6101716107c0565b61017160075481565b6100fa6101a6366004610dab565b6107d7565b6100fa6101b9366004610f62565b610825565b60015461010f906001600160a01b031681565b6000600254821015610252576040805162461bcd60e51b81526020600482015260248101919091527f526563697069656e7452656769737472793a204d6178206e756d626572206f6660448201527f20726563697069656e74732063616e206e6f742062652064656372656173656460648201526084015b60405180910390fd5b6001546001600160a01b0316331461026c57506000919050565b50600255600190565b6006546001600160a01b031633146103085760405162461bcd60e51b815260206004820152604a60248201527f5369676e5570546f6b656e476174656b65657065723a206f6e6c79207370656360448201527f6966696564204d41434920696e7374616e63652063616e2063616c6c207468696064820152693990333ab731ba34b7b760b11b608482015260a401610249565b60008180602001905181019061031e9190610f7f565b6008546040516331a9108f60e11b8152600481018390529192506000916001600160a01b03868116921690636352211e90602401602060405180830381865afa15801561036f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103939190610f98565b6001600160a01b03161490506001811461040f5760405162461bcd60e51b815260206004820152603760248201527f5369676e5570546f6b656e476174656b65657065723a20746869732075736572604482015276103237b2b9903737ba1037bbb7103a3432903a37b5b2b760491b6064820152608401610249565b60008281526009602052604090205460ff1680156104a05760405162461bcd60e51b815260206004820152604260248201527f5369676e5570546f6b656e476174656b65657065723a207468697320746f6b6560448201527f6e2068617320616c7265616479206265656e207573656420746f207369676e20606482015261075760f41b608482015260a401610249565b50506000908152600960205260409020805460ff191660011790555050565b60008315806104cf575060055484115b156104dc57506000610639565b600060056104eb600187610fcb565b815481106104fb576104fb610fe2565b9060005260206000200180548060200260200160405190810160405280929190818152602001828054801561054f57602002820191906000526020600020905b81548152602001906001019080831161053b575b5050505050905080516000141561056a576000915050610639565b80516000905b801561063457600083610584600184610fcb565b8151811061059457610594610fe2565b60209081029190910181015160008181526003808452604091829020825160808101845281546001600160a01b031681526001820154958101959095526002810154928501839052015460608401529092508710156105f4575050610622565b60608101511580159061060b575087816060015111155b1561061d578395505050505050610639565b519250505b8061062c81610ff8565b915050610570565b509150505b9392505050565b61064861089e565b61065260006108fd565b565b61065c61089e565b6001600160a01b0383166106c75760405162461bcd60e51b815260206004820152602c60248201527f526563697069656e7452656769737472793a20526563697069656e742061646460448201526b72657373206973207a65726f60a01b6064820152608401610249565b8061072d5760405162461bcd60e51b815260206004820152603060248201527f526563697069656e7452656769737472793a204d6574616461746120696e666f60448201526f20697320656d70747920737472696e6760801b6064820152608401610249565b60008383836040516020016107449392919061100f565b6040516020818303038152906040528051906020012090506000610768828661094d565b9050817fddc3968b1ce25baf13504e6d2de09bbf72f4b32b9d80e2f4914842f0f9217b0d86868685426040516107a2959493929190611037565b60405180910390a25050505050565b6000546001600160a01b031690565b6004546005546000916107d291610fcb565b905090565b6107df61089e565b6107e881610c29565b807fc678e7ee92280740c8b3be4826e92b29fb5477e2ddc3eb2e9ca45f74daa4972e4260405161081a91815260200190565b60405180910390a250565b61082d61089e565b6001600160a01b0381166108925760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610249565b61089b816108fd565b50565b336108a76107b1565b6001600160a01b0316146106525760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610249565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600254116109a45760405162461bcd60e51b815260206004820152602d60248201526000805160206110b783398151915260448201526c1a5d081a5cc81b9bdd081cd95d609a1b6064820152608401610249565b60008381526003602052604090206001015415610a095760405162461bcd60e51b815260206004820152602f60248201526000805160206110d783398151915260448201526e1958591e481c9959da5cdd195c9959608a1b6064820152608401610249565b6005546000908190610a1c906001611088565b90506002548111610abb576040805160018082528183019092529192508291600091602080830190803683370190505090508581600081518110610a6257610a62610fe2565b602090810291909101810191909152600580546001810182556000919091528251610ab4927f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db090920191840190610d4b565b5050610bbb565b600454610b0b5760405162461bcd60e51b815260206004820152602a60248201526000805160206110b78339815191526044820152691a5d081c995858da195960b21b6064820152608401610249565b6004805460009190610b1f90600190610fcb565b81548110610b2f57610b2f610fe2565b906000526020600020015490506004805480610b4d57610b4d6110a0565b60019003818190600052602060002001600090559055600360008281526020019081526020016000206001015492506005600184610b8b9190610fcb565b81548110610b9b57610b9b610fe2565b600091825260208083209091018054600181018255908352912001869055505b50604080516080810182526001600160a01b0380861682526020808301858152428486019081526000606086018181528b82526003948590529690209451855494166001600160a01b0319909416939093178455516001840155905160028301559151910155905092915050565b600081815260036020526040902060010154610ca35760405162461bcd60e51b815260206004820152603360248201527f526563697069656e7452656769737472793a20526563697069656e74206973206044820152726e6f7420696e2074686520726567697374727960681b6064820152608401610249565b6000818152600360208190526040909120015415610d065760405162461bcd60e51b815260206004820152602c60248201526000805160206110d783398151915260448201526b1958591e481c995b5bdd995960a21b6064820152608401610249565b60008181526003602081905260408220429101556004805460018101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0155565b828054828255906000526020600020908101928215610d86579160200282015b82811115610d86578251825591602001919060010190610d6b565b50610d92929150610d96565b5090565b5b80821115610d925760008155600101610d97565b600060208284031215610dbd57600080fd5b5035919050565b6001600160a01b038116811461089b57600080fd5b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610e0257600080fd5b8235610e0d81610dc4565b915060208301356001600160401b0380821115610e2957600080fd5b818501915085601f830112610e3d57600080fd5b813581811115610e4f57610e4f610dd9565b604051601f8201601f19908116603f01168101908382118183101715610e7757610e77610dd9565b81604052828152886020848701011115610e9057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600060608486031215610ec757600080fd5b505081359360208301359350604090920135919050565b600080600060408486031215610ef357600080fd5b8335610efe81610dc4565b925060208401356001600160401b0380821115610f1a57600080fd5b818601915086601f830112610f2e57600080fd5b813581811115610f3d57600080fd5b876020828501011115610f4f57600080fd5b6020830194508093505050509250925092565b600060208284031215610f7457600080fd5b813561063981610dc4565b600060208284031215610f9157600080fd5b5051919050565b600060208284031215610faa57600080fd5b815161063981610dc4565b634e487b7160e01b600052601160045260246000fd5b600082821015610fdd57610fdd610fb5565b500390565b634e487b7160e01b600052603260045260246000fd5b60008161100757611007610fb5565b506000190190565b606084901b6001600160601b0319168152818360148301376000910160140190815292915050565b6001600160a01b03861681526080602082018190528101849052838560a0830137600060a08583010152600060a0601f19601f87011683010190508360408301528260608301529695505050505050565b6000821982111561109b5761109b610fb5565b500190565b634e487b7160e01b600052603160045260246000fdfe526563697069656e7452656769737472793a20526563697069656e74206c696d526563697069656e7452656769737472793a20526563697069656e7420616c72a2646970667358221220c738a94dd1503600d09bb3b1714778db38d233058748d4a4cd600b0031ba3c0a64736f6c634300080a0033";

type NFTSignupConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTSignupConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTSignup__factory extends ContractFactory {
  constructor(...args: NFTSignupConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token: PromiseOrValue<string>,
    _balance: PromiseOrValue<BigNumberish>,
    _operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTSignup> {
    return super.deploy(
      _token,
      _balance,
      _operator,
      overrides || {}
    ) as Promise<NFTSignup>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    _balance: PromiseOrValue<BigNumberish>,
    _operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _balance,
      _operator,
      overrides || {}
    );
  }
  override attach(address: string): NFTSignup {
    return super.attach(address) as NFTSignup;
  }
  override connect(signer: Signer): NFTSignup__factory {
    return super.connect(signer) as NFTSignup__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTSignupInterface {
    return new utils.Interface(_abi) as NFTSignupInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTSignup {
    return new Contract(address, _abi, signerOrProvider) as NFTSignup;
  }
}
