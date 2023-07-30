import { join, resolve } from 'path';
import telescope from '@cosmology/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const meshSecurityDir = resolve(
  join(__dirname, '/../../../mesh-security/contracts')
);

const contracts = [
  {
    name: 'Converter',
    dir: join(meshSecurityDir, 'consumer', 'converter', 'schema')
  },
  {
    name: 'SimplePriceFeed',
    dir: join(meshSecurityDir, 'consumer', 'simple-price-feed', 'schema')
  },
  {
    name: 'VirtualStaking',
    dir: join(meshSecurityDir, 'consumer', 'virtual-staking', 'schema')
  },
  // provider
  {
    name: 'ExternalStaking',
    dir: join(meshSecurityDir, 'provider', 'external-staking', 'schema')
  },
  {
    name: 'NativeStaking',
    dir: join(meshSecurityDir, 'provider', 'native-staking', 'schema')
  },
  {
    name: 'StakingProxy',
    dir: join(meshSecurityDir, 'provider', 'native-staking-proxy', 'schema')
  },
  {
    name: 'Vault',
    dir: join(meshSecurityDir, 'provider', 'vault', 'schema')
  }
];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    prototypes: {
      excluded: {
        packages: [
          'cosmos.auth.v1beta1',
          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.group.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.group.v1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      }
    },
    cosmwasm: {
      contracts,
      outPath: join(__dirname, '../src/codegen'),
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
          scope: 'contracts'
        },
        types: {
          enabled: true
        },
        client: {
          enabled: true
        },
        messageComposer: {
          enabled: true
        },
        useContractsHooks: {
          enabled: true
        },
        reactQuery: {
          enabled: true,
          version: 'v4',
          mutations: true
        }
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
