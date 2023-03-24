export default function Landpage() {
    return (

        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 ">
            <section>
            <h1 className="text-3xl font-bold font-serif text-white">Nana yaw</h1>
            <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">Hey, I&apos;m Nana, <b>a software developer who can turn designs into code</b>. I&apos;m a wizard casting spells with languages like Python and Javascript, but my true superpower is turning <b>designs</b> into code. </p>
            <div className="flex">
                <img className=" rounded-full h-28" src="/images/profile-pic.png" alt="profile" />
                <div className="dark:text-neutral-400 dark:hover:text-neutral-200 mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 ">
                    <a href="" className="flex items-center ">My SideProjects</a>
                    <a href="" className="flex items-center ">My SideProjects</a>
                    <a href="" className="flex items-center ">My SideProjects</a>
                </div>
            </div>
            <p className=" text-neutral-800 dark:text-neutral-200 my-5 max-w-[600px]">When i&apos;m not working on code, you can find me binge-watching the latest anime and manga series or sketching out a new character design. My passion for art and design informs my coding process, as i see the beauty in elegant solutions and clean code.</p>
            <ul className="Follow-links flex gap-4 font-sm text-neutral-500 dark:text-neutral-400 ">
                <li>
                    <a className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all" rel="noopener noreferrer" target="_blank" href="https://twitter.com/aurameow">
                        <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
                        <p className="h-7">follow me on twitter</p>
                        </a>
                    </li>
                <li>
                    <a className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all " href="https://github.com/PikachuUsedSurf">
                        <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
                        <p className="h-7">follow me on github</p>
                    </a>
                </li>
            </ul>
            </section>
        </main>
    )
  }