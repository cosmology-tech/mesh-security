/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.31.6.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, ExecMsg, Uint128, VoteOption, Decimal, Coin, WeightedVoteOption, QueryMsg, QueryMsg1, Addr, Config } from "./StakingProxy.types";
export interface StakingProxyReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<Config>;
}
export class StakingProxyQueryClient implements StakingProxyReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
  }

  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
}
export interface StakingProxyInterface extends StakingProxyReadOnlyInterface {
  contractAddress: string;
  sender: string;
  stake: ({
    validator
  }: {
    validator: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  restake: ({
    amount,
    dstValidator,
    srcValidator
  }: {
    amount: Coin;
    dstValidator: string;
    srcValidator: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: VoteOption;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  voteWeighted: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: WeightedVoteOption[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  withdrawRewards: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  unstake: ({
    amount,
    validator
  }: {
    amount: Coin;
    validator: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  releaseUnbonded: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class StakingProxyClient extends StakingProxyQueryClient implements StakingProxyInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.stake = this.stake.bind(this);
    this.restake = this.restake.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.withdrawRewards = this.withdrawRewards.bind(this);
    this.unstake = this.unstake.bind(this);
    this.releaseUnbonded = this.releaseUnbonded.bind(this);
  }

  stake = async ({
    validator
  }: {
    validator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      stake: {
        validator
      }
    }, fee, memo, _funds);
  };
  restake = async ({
    amount,
    dstValidator,
    srcValidator
  }: {
    amount: Coin;
    dstValidator: string;
    srcValidator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      restake: {
        amount,
        dst_validator: dstValidator,
        src_validator: srcValidator
      }
    }, fee, memo, _funds);
  };
  vote = async ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: VoteOption;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        vote
      }
    }, fee, memo, _funds);
  };
  voteWeighted = async ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: WeightedVoteOption[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      vote_weighted: {
        proposal_id: proposalId,
        vote
      }
    }, fee, memo, _funds);
  };
  withdrawRewards = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw_rewards: {}
    }, fee, memo, _funds);
  };
  unstake = async ({
    amount,
    validator
  }: {
    amount: Coin;
    validator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unstake: {
        amount,
        validator
      }
    }, fee, memo, _funds);
  };
  releaseUnbonded = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release_unbonded: {}
    }, fee, memo, _funds);
  };
}