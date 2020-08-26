import { Amplify } from "@aws-amplify/core/lib-esm"
import { Auth, CognitoUser, CookieStorage, CognitoHostedUIIdentityProvider, appendToCognitoUserAgent } from "@aws-amplify/auth/lib-esm"
import { DataStore, initSchema, Predicates } from "@aws-amplify/datastore/lib-esm"
import { API, graphqlOperation } from "@aws-amplify/api/lib-esm"
import { Analytics, AWSPinpointProvider, AmazonPersonalizeProvider, AWSKinesisFirehoseProvider, AWSKinesisProvider } from "@aws-amplify/analytics/lib-esm"
import { Storage, StorageProvider } from "@aws-amplify/storage/lib-esm"

export {
  Amplify,
  Auth, CognitoUser, CookieStorage, CognitoHostedUIIdentityProvider, appendToCognitoUserAgent,
  DataStore, initSchema, Predicates,
  API, graphqlOperation,
  Analytics, AWSPinpointProvider, AmazonPersonalizeProvider, AWSKinesisFirehoseProvider, AWSKinesisProvider
}

// Datastore depends on a all of Amplify JS libraries (core, auth, api, pubsub, cache). There's no point tree shaking
