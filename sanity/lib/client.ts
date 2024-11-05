import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Using environment variable for project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Using environment variable for dataset
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Using environment variable for API version
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

