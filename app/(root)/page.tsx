import { STARTUP_QUERIES } from "@/lib/queries";
import SearchForm from "../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../components/StartupCard";
import { stringify } from "querystring";
import { client } from "@/sanity/lib/client"; // Make sure you have a client instance for fetching
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams; // Destructure query from the awaited searchParams
  // const posts = await client.fetch(STARTUP_QUERIES); // Fetch posts from client using STARTUP_QUERIES
  const {data:posts}   = await sanityFetch({query:STARTUP_QUERIES}) // Corrected destructuring syntax
  console.log(JSON.stringify(posts, null, 2)); // Corrected console.log syntax

  // const posts=[{
  //   _createdAt:new Date(),
  //   views:55,
  //   author:{_id:1 ,name:'Hasir ALi'},
  //   description:"this is description",
  //   title:"this is title",
  //   category:"dogs",
  //   image:"https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Lorem ipsum dolor sit amet.</h1>
        <p className="sub-heading !max-w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nostrum magni optio assumenda qui laboriosam veniam numquam vero, id rem debitis quod sapiente ex?
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

       <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
