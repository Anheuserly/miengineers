import { Client, Databases, Storage } from "appwrite";

let singletonClient: Client | null = null;

function createClient() {
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

  if (!endpoint || !projectId) {
    return null;
  }

  const client = new Client();

  client.setEndpoint(endpoint).setProject(projectId);

  return client;
}

export function getAppwriteClient() {
  if (singletonClient) {
    return singletonClient;
  }

  singletonClient = createClient();
  return singletonClient;
}

export function isAppwriteConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT &&
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  );
}

export function getDatabases() {
  const client = getAppwriteClient();
  return client ? new Databases(client) : null;
}

export function getStorage() {
  const client = getAppwriteClient();
  return client ? new Storage(client) : null;
}
