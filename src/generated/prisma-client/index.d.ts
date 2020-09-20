// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  account: (where?: AccountWhereInput) => Promise<boolean>;
  transaction: (where?: TransactionWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  account: (where: AccountWhereUniqueInput) => AccountNullablePromise;
  accounts: (args?: {
    where?: AccountWhereInput;
    orderBy?: AccountOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Account>;
  accountsConnection: (args?: {
    where?: AccountWhereInput;
    orderBy?: AccountOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AccountConnectionPromise;
  transaction: (
    where: TransactionWhereUniqueInput
  ) => TransactionNullablePromise;
  transactions: (args?: {
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Transaction>;
  transactionsConnection: (args?: {
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TransactionConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAccount: (data: AccountCreateInput) => AccountPromise;
  updateAccount: (args: {
    data: AccountUpdateInput;
    where: AccountWhereUniqueInput;
  }) => AccountPromise;
  updateManyAccounts: (args: {
    data: AccountUpdateManyMutationInput;
    where?: AccountWhereInput;
  }) => BatchPayloadPromise;
  upsertAccount: (args: {
    where: AccountWhereUniqueInput;
    create: AccountCreateInput;
    update: AccountUpdateInput;
  }) => AccountPromise;
  deleteAccount: (where: AccountWhereUniqueInput) => AccountPromise;
  deleteManyAccounts: (where?: AccountWhereInput) => BatchPayloadPromise;
  createTransaction: (data: TransactionCreateInput) => TransactionPromise;
  updateTransaction: (args: {
    data: TransactionUpdateInput;
    where: TransactionWhereUniqueInput;
  }) => TransactionPromise;
  updateManyTransactions: (args: {
    data: TransactionUpdateManyMutationInput;
    where?: TransactionWhereInput;
  }) => BatchPayloadPromise;
  upsertTransaction: (args: {
    where: TransactionWhereUniqueInput;
    create: TransactionCreateInput;
    update: TransactionUpdateInput;
  }) => TransactionPromise;
  deleteTransaction: (where: TransactionWhereUniqueInput) => TransactionPromise;
  deleteManyTransactions: (
    where?: TransactionWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  account: (
    where?: AccountSubscriptionWhereInput
  ) => AccountSubscriptionPayloadSubscription;
  transaction: (
    where?: TransactionSubscriptionWhereInput
  ) => TransactionSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TransactionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "amount_ASC"
  | "amount_DESC"
  | "type_ASC"
  | "type_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "receiver_ASC"
  | "receiver_DESC";

export type AccountOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "balance_ASC"
  | "balance_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "password_ASC"
  | "password_DESC"
  | "code_ASC"
  | "code_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpsertWithoutAccountInput {
  update: UserUpdateWithoutAccountDataInput;
  create: UserCreateWithoutAccountInput;
}

export type AccountWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TransactionUpdateInput {
  amount?: Maybe<Float>;
  type?: Maybe<String>;
  initiator?: Maybe<AccountUpdateOneRequiredWithoutTransactionsInput>;
  receiver?: Maybe<ID_Input>;
}

export interface TransactionCreateInput {
  id?: Maybe<ID_Input>;
  amount: Float;
  type: String;
  initiator: AccountCreateOneWithoutTransactionsInput;
  receiver: ID_Input;
}

export interface TransactionUpdateWithoutInitiatorDataInput {
  amount?: Maybe<Float>;
  type?: Maybe<String>;
  receiver?: Maybe<ID_Input>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  phone?: Maybe<String>;
  phone_not?: Maybe<String>;
  phone_in?: Maybe<String[] | String>;
  phone_not_in?: Maybe<String[] | String>;
  phone_lt?: Maybe<String>;
  phone_lte?: Maybe<String>;
  phone_gt?: Maybe<String>;
  phone_gte?: Maybe<String>;
  phone_contains?: Maybe<String>;
  phone_not_contains?: Maybe<String>;
  phone_starts_with?: Maybe<String>;
  phone_not_starts_with?: Maybe<String>;
  phone_ends_with?: Maybe<String>;
  phone_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  code?: Maybe<String>;
  code_not?: Maybe<String>;
  code_in?: Maybe<String[] | String>;
  code_not_in?: Maybe<String[] | String>;
  code_lt?: Maybe<String>;
  code_lte?: Maybe<String>;
  code_gt?: Maybe<String>;
  code_gte?: Maybe<String>;
  code_contains?: Maybe<String>;
  code_not_contains?: Maybe<String>;
  code_starts_with?: Maybe<String>;
  code_not_starts_with?: Maybe<String>;
  code_ends_with?: Maybe<String>;
  code_not_ends_with?: Maybe<String>;
  account?: Maybe<AccountWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface AccountCreateInput {
  id?: Maybe<ID_Input>;
  balance: Float;
  owner: UserCreateOneWithoutAccountInput;
  transactions?: Maybe<TransactionCreateManyWithoutInitiatorInput>;
}

export interface TransactionSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TransactionWhereInput>;
  AND?: Maybe<
    TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput
  >;
  OR?: Maybe<
    TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput
  >;
  NOT?: Maybe<
    TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput
  >;
}

export interface UserCreateOneWithoutAccountInput {
  create?: Maybe<UserCreateWithoutAccountInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  code?: Maybe<String>;
}

export interface UserCreateWithoutAccountInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  phone: String;
  password?: Maybe<String>;
  code?: Maybe<String>;
}

export interface AccountUpdateWithoutOwnerDataInput {
  balance?: Maybe<Float>;
  transactions?: Maybe<TransactionUpdateManyWithoutInitiatorInput>;
}

export interface TransactionCreateManyWithoutInitiatorInput {
  create?: Maybe<
    | TransactionCreateWithoutInitiatorInput[]
    | TransactionCreateWithoutInitiatorInput
  >;
  connect?: Maybe<TransactionWhereUniqueInput[] | TransactionWhereUniqueInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  code?: Maybe<String>;
  account?: Maybe<AccountUpdateOneWithoutOwnerInput>;
}

export interface TransactionCreateWithoutInitiatorInput {
  id?: Maybe<ID_Input>;
  amount: Float;
  type: String;
  receiver: ID_Input;
}

export type TransactionWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface AccountUpdateInput {
  balance?: Maybe<Float>;
  owner?: Maybe<UserUpdateOneRequiredWithoutAccountInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutInitiatorInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  phone: String;
  password?: Maybe<String>;
  code?: Maybe<String>;
  account?: Maybe<AccountCreateOneWithoutOwnerInput>;
}

export interface UserUpdateOneRequiredWithoutAccountInput {
  create?: Maybe<UserCreateWithoutAccountInput>;
  update?: Maybe<UserUpdateWithoutAccountDataInput>;
  upsert?: Maybe<UserUpsertWithoutAccountInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  phone?: Maybe<String>;
}>;

export interface UserUpdateWithoutAccountDataInput {
  name?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  code?: Maybe<String>;
}

export interface AccountUpdateWithoutTransactionsDataInput {
  balance?: Maybe<Float>;
  owner?: Maybe<UserUpdateOneRequiredWithoutAccountInput>;
}

export interface AccountCreateWithoutTransactionsInput {
  id?: Maybe<ID_Input>;
  balance: Float;
  owner: UserCreateOneWithoutAccountInput;
}

export interface AccountWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  balance?: Maybe<Float>;
  balance_not?: Maybe<Float>;
  balance_in?: Maybe<Float[] | Float>;
  balance_not_in?: Maybe<Float[] | Float>;
  balance_lt?: Maybe<Float>;
  balance_lte?: Maybe<Float>;
  balance_gt?: Maybe<Float>;
  balance_gte?: Maybe<Float>;
  owner?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  transactions_every?: Maybe<TransactionWhereInput>;
  transactions_some?: Maybe<TransactionWhereInput>;
  transactions_none?: Maybe<TransactionWhereInput>;
  AND?: Maybe<AccountWhereInput[] | AccountWhereInput>;
  OR?: Maybe<AccountWhereInput[] | AccountWhereInput>;
  NOT?: Maybe<AccountWhereInput[] | AccountWhereInput>;
}

export interface TransactionUpdateManyWithoutInitiatorInput {
  create?: Maybe<
    | TransactionCreateWithoutInitiatorInput[]
    | TransactionCreateWithoutInitiatorInput
  >;
  delete?: Maybe<TransactionWhereUniqueInput[] | TransactionWhereUniqueInput>;
  connect?: Maybe<TransactionWhereUniqueInput[] | TransactionWhereUniqueInput>;
  set?: Maybe<TransactionWhereUniqueInput[] | TransactionWhereUniqueInput>;
  disconnect?: Maybe<
    TransactionWhereUniqueInput[] | TransactionWhereUniqueInput
  >;
  update?: Maybe<
    | TransactionUpdateWithWhereUniqueWithoutInitiatorInput[]
    | TransactionUpdateWithWhereUniqueWithoutInitiatorInput
  >;
  upsert?: Maybe<
    | TransactionUpsertWithWhereUniqueWithoutInitiatorInput[]
    | TransactionUpsertWithWhereUniqueWithoutInitiatorInput
  >;
  deleteMany?: Maybe<
    TransactionScalarWhereInput[] | TransactionScalarWhereInput
  >;
  updateMany?: Maybe<
    | TransactionUpdateManyWithWhereNestedInput[]
    | TransactionUpdateManyWithWhereNestedInput
  >;
}

export interface AccountSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AccountWhereInput>;
  AND?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
  OR?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
  NOT?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
}

export interface TransactionUpdateWithWhereUniqueWithoutInitiatorInput {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateWithoutInitiatorDataInput;
}

export interface AccountUpdateOneWithoutOwnerInput {
  create?: Maybe<AccountCreateWithoutOwnerInput>;
  update?: Maybe<AccountUpdateWithoutOwnerDataInput>;
  upsert?: Maybe<AccountUpsertWithoutOwnerInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface TransactionWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  type?: Maybe<String>;
  type_not?: Maybe<String>;
  type_in?: Maybe<String[] | String>;
  type_not_in?: Maybe<String[] | String>;
  type_lt?: Maybe<String>;
  type_lte?: Maybe<String>;
  type_gt?: Maybe<String>;
  type_gte?: Maybe<String>;
  type_contains?: Maybe<String>;
  type_not_contains?: Maybe<String>;
  type_starts_with?: Maybe<String>;
  type_not_starts_with?: Maybe<String>;
  type_ends_with?: Maybe<String>;
  type_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  initiator?: Maybe<AccountWhereInput>;
  receiver?: Maybe<ID_Input>;
  receiver_not?: Maybe<ID_Input>;
  receiver_in?: Maybe<ID_Input[] | ID_Input>;
  receiver_not_in?: Maybe<ID_Input[] | ID_Input>;
  receiver_lt?: Maybe<ID_Input>;
  receiver_lte?: Maybe<ID_Input>;
  receiver_gt?: Maybe<ID_Input>;
  receiver_gte?: Maybe<ID_Input>;
  receiver_contains?: Maybe<ID_Input>;
  receiver_not_contains?: Maybe<ID_Input>;
  receiver_starts_with?: Maybe<ID_Input>;
  receiver_not_starts_with?: Maybe<ID_Input>;
  receiver_ends_with?: Maybe<ID_Input>;
  receiver_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<TransactionWhereInput[] | TransactionWhereInput>;
  OR?: Maybe<TransactionWhereInput[] | TransactionWhereInput>;
  NOT?: Maybe<TransactionWhereInput[] | TransactionWhereInput>;
}

export interface AccountCreateOneWithoutOwnerInput {
  create?: Maybe<AccountCreateWithoutOwnerInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface TransactionUpsertWithWhereUniqueWithoutInitiatorInput {
  where: TransactionWhereUniqueInput;
  update: TransactionUpdateWithoutInitiatorDataInput;
  create: TransactionCreateWithoutInitiatorInput;
}

export interface AccountUpsertWithoutTransactionsInput {
  update: AccountUpdateWithoutTransactionsDataInput;
  create: AccountCreateWithoutTransactionsInput;
}

export interface TransactionScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  type?: Maybe<String>;
  type_not?: Maybe<String>;
  type_in?: Maybe<String[] | String>;
  type_not_in?: Maybe<String[] | String>;
  type_lt?: Maybe<String>;
  type_lte?: Maybe<String>;
  type_gt?: Maybe<String>;
  type_gte?: Maybe<String>;
  type_contains?: Maybe<String>;
  type_not_contains?: Maybe<String>;
  type_starts_with?: Maybe<String>;
  type_not_starts_with?: Maybe<String>;
  type_ends_with?: Maybe<String>;
  type_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  receiver?: Maybe<ID_Input>;
  receiver_not?: Maybe<ID_Input>;
  receiver_in?: Maybe<ID_Input[] | ID_Input>;
  receiver_not_in?: Maybe<ID_Input[] | ID_Input>;
  receiver_lt?: Maybe<ID_Input>;
  receiver_lte?: Maybe<ID_Input>;
  receiver_gt?: Maybe<ID_Input>;
  receiver_gte?: Maybe<ID_Input>;
  receiver_contains?: Maybe<ID_Input>;
  receiver_not_contains?: Maybe<ID_Input>;
  receiver_starts_with?: Maybe<ID_Input>;
  receiver_not_starts_with?: Maybe<ID_Input>;
  receiver_ends_with?: Maybe<ID_Input>;
  receiver_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<TransactionScalarWhereInput[] | TransactionScalarWhereInput>;
  OR?: Maybe<TransactionScalarWhereInput[] | TransactionScalarWhereInput>;
  NOT?: Maybe<TransactionScalarWhereInput[] | TransactionScalarWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface AccountCreateOneWithoutTransactionsInput {
  create?: Maybe<AccountCreateWithoutTransactionsInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountUpdateManyMutationInput {
  balance?: Maybe<Float>;
}

export interface TransactionUpdateManyDataInput {
  amount?: Maybe<Float>;
  type?: Maybe<String>;
  receiver?: Maybe<ID_Input>;
}

export interface TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput;
  data: TransactionUpdateManyDataInput;
}

export interface AccountUpsertWithoutOwnerInput {
  update: AccountUpdateWithoutOwnerDataInput;
  create: AccountCreateWithoutOwnerInput;
}

export interface AccountUpdateOneRequiredWithoutTransactionsInput {
  create?: Maybe<AccountCreateWithoutTransactionsInput>;
  update?: Maybe<AccountUpdateWithoutTransactionsDataInput>;
  upsert?: Maybe<AccountUpsertWithoutTransactionsInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface TransactionUpdateManyMutationInput {
  amount?: Maybe<Float>;
  type?: Maybe<String>;
  receiver?: Maybe<ID_Input>;
}

export interface AccountCreateWithoutOwnerInput {
  id?: Maybe<ID_Input>;
  balance: Float;
  transactions?: Maybe<TransactionCreateManyWithoutInitiatorInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name?: String;
  phone: String;
  password?: String;
  code?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  code: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  code: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAccount {
  count: Int;
}

export interface AggregateAccountPromise
  extends Promise<AggregateAccount>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAccountSubscription
  extends Promise<AsyncIterator<AggregateAccount>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AccountPreviousValues {
  id: ID_Output;
  balance: Float;
  createdAt: DateTimeOutput;
}

export interface AccountPreviousValuesPromise
  extends Promise<AccountPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  balance: () => Promise<Float>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface AccountPreviousValuesSubscription
  extends Promise<AsyncIterator<AccountPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  balance: () => Promise<AsyncIterator<Float>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AccountEdge {
  node: Account;
  cursor: String;
}

export interface AccountEdgePromise extends Promise<AccountEdge>, Fragmentable {
  node: <T = AccountPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AccountEdgeSubscription
  extends Promise<AsyncIterator<AccountEdge>>,
    Fragmentable {
  node: <T = AccountSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TransactionSubscriptionPayload {
  mutation: MutationType;
  node: Transaction;
  updatedFields: String[];
  previousValues: TransactionPreviousValues;
}

export interface TransactionSubscriptionPayloadPromise
  extends Promise<TransactionSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TransactionPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TransactionPreviousValuesPromise>() => T;
}

export interface TransactionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TransactionSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TransactionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TransactionPreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AccountConnection {
  pageInfo: PageInfo;
  edges: AccountEdge[];
}

export interface AccountConnectionPromise
  extends Promise<AccountConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AccountEdge>>() => T;
  aggregate: <T = AggregateAccountPromise>() => T;
}

export interface AccountConnectionSubscription
  extends Promise<AsyncIterator<AccountConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AccountEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAccountSubscription>() => T;
}

export interface AggregateTransaction {
  count: Int;
}

export interface AggregateTransactionPromise
  extends Promise<AggregateTransaction>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTransactionSubscription
  extends Promise<AsyncIterator<AggregateTransaction>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TransactionConnection {
  pageInfo: PageInfo;
  edges: TransactionEdge[];
}

export interface TransactionConnectionPromise
  extends Promise<TransactionConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TransactionEdge>>() => T;
  aggregate: <T = AggregateTransactionPromise>() => T;
}

export interface TransactionConnectionSubscription
  extends Promise<AsyncIterator<TransactionConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TransactionEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTransactionSubscription>() => T;
}

export interface AccountSubscriptionPayload {
  mutation: MutationType;
  node: Account;
  updatedFields: String[];
  previousValues: AccountPreviousValues;
}

export interface AccountSubscriptionPayloadPromise
  extends Promise<AccountSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AccountPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AccountPreviousValuesPromise>() => T;
}

export interface AccountSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AccountSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AccountSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AccountPreviousValuesSubscription>() => T;
}

export interface Account {
  id: ID_Output;
  balance: Float;
  createdAt: DateTimeOutput;
}

export interface AccountPromise extends Promise<Account>, Fragmentable {
  id: () => Promise<ID_Output>;
  balance: () => Promise<Float>;
  owner: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  transactions: <T = FragmentableArray<Transaction>>(args?: {
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AccountSubscription
  extends Promise<AsyncIterator<Account>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  balance: () => Promise<AsyncIterator<Float>>;
  owner: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  transactions: <T = Promise<AsyncIterator<TransactionSubscription>>>(args?: {
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AccountNullablePromise
  extends Promise<Account | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  balance: () => Promise<Float>;
  owner: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  transactions: <T = FragmentableArray<Transaction>>(args?: {
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Transaction {
  id: ID_Output;
  amount: Float;
  type: String;
  createdAt: DateTimeOutput;
  receiver: ID_Output;
}

export interface TransactionPromise extends Promise<Transaction>, Fragmentable {
  id: () => Promise<ID_Output>;
  amount: () => Promise<Float>;
  type: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  initiator: <T = AccountPromise>() => T;
  receiver: () => Promise<ID_Output>;
}

export interface TransactionSubscription
  extends Promise<AsyncIterator<Transaction>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  amount: () => Promise<AsyncIterator<Float>>;
  type: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  initiator: <T = AccountSubscription>() => T;
  receiver: () => Promise<AsyncIterator<ID_Output>>;
}

export interface TransactionNullablePromise
  extends Promise<Transaction | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  amount: () => Promise<Float>;
  type: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  initiator: <T = AccountPromise>() => T;
  receiver: () => Promise<ID_Output>;
}

export interface User {
  id: ID_Output;
  name?: String;
  phone: String;
  password?: String;
  code?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  code: () => Promise<String>;
  account: <T = AccountPromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  code: () => Promise<AsyncIterator<String>>;
  account: <T = AccountSubscription>() => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  phone: () => Promise<String>;
  password: () => Promise<String>;
  code: () => Promise<String>;
  account: <T = AccountPromise>() => T;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface TransactionEdge {
  node: Transaction;
  cursor: String;
}

export interface TransactionEdgePromise
  extends Promise<TransactionEdge>,
    Fragmentable {
  node: <T = TransactionPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TransactionEdgeSubscription
  extends Promise<AsyncIterator<TransactionEdge>>,
    Fragmentable {
  node: <T = TransactionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TransactionPreviousValues {
  id: ID_Output;
  amount: Float;
  type: String;
  createdAt: DateTimeOutput;
  receiver: ID_Output;
}

export interface TransactionPreviousValuesPromise
  extends Promise<TransactionPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  amount: () => Promise<Float>;
  type: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  receiver: () => Promise<ID_Output>;
}

export interface TransactionPreviousValuesSubscription
  extends Promise<AsyncIterator<TransactionPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  amount: () => Promise<AsyncIterator<Float>>;
  type: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  receiver: () => Promise<AsyncIterator<ID_Output>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Account",
    embedded: false
  },
  {
    name: "Transaction",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
