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

export type AccountWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

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
  AND?: Maybe<AccountWhereInput[] | AccountWhereInput>;
  OR?: Maybe<AccountWhereInput[] | AccountWhereInput>;
  NOT?: Maybe<AccountWhereInput[] | AccountWhereInput>;
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

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  phone?: Maybe<String>;
}>;

export interface AccountCreateInput {
  id?: Maybe<ID_Input>;
  balance: Float;
  owner: UserCreateOneWithoutAccountInput;
}

export interface UserCreateOneWithoutAccountInput {
  create?: Maybe<UserCreateWithoutAccountInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutAccountInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  phone: String;
  password?: Maybe<String>;
  code?: Maybe<String>;
}

export interface AccountUpdateInput {
  balance?: Maybe<Float>;
  owner?: Maybe<UserUpdateOneRequiredWithoutAccountInput>;
}

export interface UserUpdateOneRequiredWithoutAccountInput {
  create?: Maybe<UserCreateWithoutAccountInput>;
  update?: Maybe<UserUpdateWithoutAccountDataInput>;
  upsert?: Maybe<UserUpsertWithoutAccountInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutAccountDataInput {
  name?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  code?: Maybe<String>;
}

export interface UserUpsertWithoutAccountInput {
  update: UserUpdateWithoutAccountDataInput;
  create: UserCreateWithoutAccountInput;
}

export interface AccountUpdateManyMutationInput {
  balance?: Maybe<Float>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  phone: String;
  password?: Maybe<String>;
  code?: Maybe<String>;
  account?: Maybe<AccountCreateOneWithoutOwnerInput>;
}

export interface AccountCreateOneWithoutOwnerInput {
  create?: Maybe<AccountCreateWithoutOwnerInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountCreateWithoutOwnerInput {
  id?: Maybe<ID_Input>;
  balance: Float;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  code?: Maybe<String>;
  account?: Maybe<AccountUpdateOneWithoutOwnerInput>;
}

export interface AccountUpdateOneWithoutOwnerInput {
  create?: Maybe<AccountCreateWithoutOwnerInput>;
  update?: Maybe<AccountUpdateWithoutOwnerDataInput>;
  upsert?: Maybe<AccountUpsertWithoutOwnerInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountUpdateWithoutOwnerDataInput {
  balance?: Maybe<Float>;
}

export interface AccountUpsertWithoutOwnerInput {
  update: AccountUpdateWithoutOwnerDataInput;
  create: AccountCreateWithoutOwnerInput;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  phone?: Maybe<String>;
  password?: Maybe<String>;
  code?: Maybe<String>;
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

export interface NodeNode {
  id: ID_Output;
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
}

export interface AccountSubscription
  extends Promise<AsyncIterator<Account>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  balance: () => Promise<AsyncIterator<Float>>;
  owner: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AccountNullablePromise
  extends Promise<Account | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  balance: () => Promise<Float>;
  owner: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
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

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

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
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
