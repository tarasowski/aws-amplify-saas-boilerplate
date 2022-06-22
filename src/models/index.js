// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PaymentStatusEnum = {
  "STARTED": "STARTED",
  "SUCCESS": "SUCCESS",
  "FAILURE": "FAILURE",
  "CANCELED": "CANCELED",
  "RENEWED": "RENEWED"
};

const { Settings, Mutations } = initSchema(schema);

export {
  Settings,
  PaymentStatusEnum,
  Mutations
};