# mesh-security

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/197502724-4cb0f898-116c-4c14-89c8-3358e89eab70.svg" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/mesh-security/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>


TS library with Cosmos SDK and Mesh Security smart contracts.

```
npm install mesh-security
```

### Providers

First, make sure to create a provider for the chain you want to use. You can use the `useChain` hook from `cosmos-kit` or pass in `address` and promises to return the query/signing clients:

```tsx
import { ContractsProvider } from 'mesh-security';
import { useChain } from '@cosmos-kit/react';

const ChainContractProvider = ({ chainName, children }: { chainName: string, children: any }) => {
  const { address, getCosmWasmClient, getSigningCosmWasmClient } = useChain(chainName);
  return (
    <ContractsProvider contractsConfig={{
      address,
      getCosmWasmClient,
      getSigningCosmWasmClient
    }}>
      {children}
    </ContractsProvider>
  );
};
```

### Connected Components

After you've created your provider, you can leverage the `useContracts` hook:


```tsx
import { useContracts } from 'mesh-security';
import { useChain } from '@cosmos-kit/react';

const ExampleComponent = ({chainName}:{chainName: string}) => {
  const { converter, externalStaking, nativeStaking, simplePriceFeed } = useContracts();
  const { address, status } = useChain(chainName);

  let msg;
  if (address && converter.cosmWasmClient) {
    const composer = converter.getMessageComposer(converterAddr)
    // do something with composer
      console.log(composer);

    // do something with a signing client from simplePriceFeed
    const feed = simplePriceFeed.getSigningClient(feedAddr);
    feed.updatePrice({
      nativePerForeign: 'something...'
    })

  } else if (nativeStaking.cosmWasmClient) {
    const query = nativeStaking.getQueryClient(nativeStakingAddr);
    // do something with query client from nativeStaking
    console.log(query);
  }

  return (
    <div>
      {address}
    </div>
  );
}
```

### Cosmos SDK clients

```js
import { cosmos } from 'mesh-security';

const main = async () => {
   const { createLCDClient } = cosmos.ClientFactory; 
   const client = await createLCDClient({ restEndpoint: REST_ENDPOINT });

   // now you can query the modules
   const balance = await client.cosmos.bank.v1beta1
        .allBalances({ address: 'cosmos1addresshere' });
};
```

### CosmWasm contracts

#### clients

All contracts are scoped under the `contracts` object:

```js
import { contracts } from 'mesh-security';
const {
    SG721Base,
    VendingFactory,
    VendingMinter,
    Whitelist
} = contracts;
```

Then each contract will have clients, for example for `Whitelist`:

```ts
const {
    WhitelistClient,
    WhitelistMessageComposer,
    WhitelistQueryClient
} = Whitelist;
```

#### Queries 

```js
const queryClient = new WhitelistQueryClient(wasmClient, contractAddress);

const hasStarted = await queryClient.hasStarted()
const members = await queryClient.members({limit: 10})
```
#### Mutations

```js
const client = new WhitelistClient(signingWasmClient, sender, contractAddress);

await client.addMembers({
    toAdd: ['name1', 'name2']
})
```

### CosmWasm Messages

```js
import { cosmwasm } from "mesh-security";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### IBC Messages

```js
import { ibc } from 'mesh-security';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import { cosmos } from 'mesh-security';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

## Connecting with Wallets and Signing Messages

⚡️ For web interfaces, we recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit). Continue below to see how to manually construct signers and clients.
### Initializing the Stargate Client

Use `getSigningPublicawesomeClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningPublicawesomeClient } from 'mesh-security';

const stargateClient = await getSigningPublicawesomeClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
## Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) (recommended)
* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)
### Cosmos Kit

We recommend using [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for creating signers that work with Keplr and other wallets.

### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSignerAmino as getOfflineSigner } from 'cosmjs-utils';
```
### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'stargaze');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'ustars',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const fee: StdFee = {
    amount: [
    {
        denom: 'ustars',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

### Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    publicawesomeAminoConverters,
    publicawesomeProtoRegistry
} from 'stargazejs';

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/stargaze'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...publicawesomeProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...publicawesomeAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

