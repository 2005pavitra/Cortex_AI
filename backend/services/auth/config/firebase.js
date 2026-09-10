import { initializeApp, cert } from "firebase-admin/app";
import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const serviceAccountPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "serviceAccountKey.json"
);

const serviceAccount = JSON.parse(
  readFileSync(serviceAccountPath, "utf8")
);

export const app = initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id
});

console.log("🔥 Firebase Admin SDK initialized successfully");
console.log("Firebase Project:", serviceAccount.project_id);