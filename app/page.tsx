import Image from "next/image";
import Header from "./components/header/header-main";

async function getPostIDs() {
  return fetch(
    "https://wyi.goc.mybluehost.me/website_71e92601/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: '{posts { nodes { title}}}',
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(
    (res) => res.json()
  ) 
}
/**HomePge
 * 
 * @returns HomePage
 */
export default async function Home() {
  const hello = await getPostIDs()

  //console.log("Hello " + hello.data.posts.nodes[0].title)

  return (
	  <div className="relative flex flex-col items-center justify-items-center min-h-screen p-0 pb-20 sm:p-0 font-[family-name:var(--font-geist-sans)] h-[200vh]">
      <Header/>
      
      <main className="static bg-slate-800 flex flex-col gap-8 row-start-2 items-center sm:items-start h-[100%] w-full">
        
	      <Image
          className=""
          src="/smart-home-blurred-background.jpg"
          alt="Object Oriented Development logo"
          width={1500}
          height={200}
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-ibm">
          <li className="mb-2 font-ibm">
            Get started by editing{" "}
            <div className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family'IBM'] hover:font-heading hover:bg-blue-600">
              app/page.tsx
            </div>
            .
          </li>
          <li className="font-ibm">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className=" static row-start-3 flex gap-6 flex-wrap items-center justify-center bottom-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-bebas-neue)]"
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
