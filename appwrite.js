import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") 
  .setProject("67d3d62b002f53956689");

const account = new Account(client);

export { account };