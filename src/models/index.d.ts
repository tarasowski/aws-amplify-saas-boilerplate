import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PaymentStatusEnum {
  OPEN = "OPEN",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  CANCELED = "CANCELED",
  RENEWED = "RENEWED"
}

export declare class Mutations {
  readonly stripeCreateSubscription?: string | null;
  constructor(init: ModelInit<Mutations>);
}

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Settings {
  readonly id: string;
  readonly organizationId: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly stripeCustomerId?: string | null;
  readonly stripeSubscriptionId?: string | null;
  readonly paymentStatus?: PaymentStatusEnum | keyof typeof PaymentStatusEnum | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Settings, SettingsMetaData>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}