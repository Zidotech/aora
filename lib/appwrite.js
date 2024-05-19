import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.zido.aora",
  projectId: "6649d25f0019a89b2251",
  databaseId: "6649d426001bd8ec1b6b",
  userCollectionId: "6649d46e0001389bc6a1",
  videoCollectionId: "6649d49d00232f65a3eb",
  storageBucketId: "6649d6af0038cf222cdb",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
