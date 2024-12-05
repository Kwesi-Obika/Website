import Image from "next/image";
import Link from "next/link";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";
import { ReactDOM } from "react";
import Header from "@/app/components/header/header-main";
async function getPostIDs() {
  return fetch(
    "https://wyi.goc.mybluehost.me/website_71e92601/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: '{posts { nodes { title, id, content}}}',
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(
    (res) => res.json()
  ) 
}

function removeWP(content: String){
    const newContent = content.replaceAll(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,' ')
    const finalContent = newContent.replaceAll(/&#8217;/g,"'")
    return finalContent
}

const client = new ApolloClient({
	uri: "https://wyi.goc.mybluehost.me/website_71e92601/graphql",
	cache: new InMemoryCache()
})
	
export default async function Home({params}: {params: {slug: string}}) {
    const titles = await getPostIDs()

    return (
        <div className="relative flex flex-col items-center justify-items-center min-h-screen p-0 pb-20 sm:p-0 font-[family-name:var(--font-geist-sans)] h-[200vh]">
            <Header/>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className = "heading-menu">
                    <Link href="/">Home</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/workshops">Workshops</Link>
                    <Link href="/contact">Contact</Link>	
                    <Link href="/faqs">FAQs</Link>
                    <Link href="/policy">Policies</Link>
                    <Link href="/docs">Docs</Link>
                </div>

                <ul id="articleList">
                    {
                    titles.data.posts.nodes.map(
                        (node: any) => (
                        <Link href={'../../blog/tech-innovations/'+node.id}><li key={node.id}>{node.title}</li></Link>
                        )
                    )
                    }
                </ul> 
                <h1>
                    {titles.data.posts.nodes[2].title}
                </h1>
                {removeWP(titles.data.posts.nodes[2].content)}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}