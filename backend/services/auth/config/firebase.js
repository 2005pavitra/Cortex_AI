import { initializeApp, cert } from "firebase-admin/app";
import { readFileSync } from "fs";
import { resolve } from "path";

// 1. Read the JSON file safely using Node's native file system tools
const serviceAccountPath = resolve("serviceAccountKey.json");
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

// 2. Initialize the admin SDK instance with certificate clearance
export const app = initializeApp({
    credential: cert(serviceAccount)
});

console.log("🔥 Firebase Admin SDK initialized successfully");
