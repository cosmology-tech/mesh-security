# Mesh Security 

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/197502724-4cb0f898-116c-4c14-89c8-3358e89eab70.svg" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/mesh-security/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

Typescript libraries for Mesh Security.

## Packages

#### [mesh-security](packages/mesh-security)

TS library with Cosmos SDK and Mesh Security smart contracts.

## Developing

When first cloning the repo:

```
yarn
yarn bootstrap
yarn build
```

And then get all submodules if necessary:

```
git submodule update --init
```

### Building

```sh
yarn build
```
### Publishing

```
lerna publish
# lerna publish minor
# lerna publish major
```
## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️
