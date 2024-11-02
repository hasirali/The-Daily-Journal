import "server-only";
import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client"; // Ensure the path is correct

export const { sanityFetch, SanityLive } = defineLive({ client });
