import { Sidebar, SidebarIconItem, SidebarItem } from "@/components";
import Link from "next/link";

const menu = [
  { href: "/doc", label: "Document" },
  { href: "/doc/abc", label: "abc" },
];

export default function DocLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto  bg-white">
            <nav id="nav" className="lg:text-sm lg:leading-6 relative">
              <div className="sticky top-0 -ml-0.5 pointer-events-none">
                <div className="h-10 bg-white dark:bg-slate-900"></div>
                <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
                  <button
                    type="button"
                    className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      aria-hidden="true"
                      className="mr-3 flex-none"
                    >
                      <path
                        d="m19 19-3.5-3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle
                        cx="11"
                        cy="11"
                        r="6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    Quick search...
                    <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                      ⌘K
                    </span>
                  </button>
                </div>
                <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
              </div>
              <Sidebar>
                {menu.map((item) => (
                  <SidebarIconItem
                    icon={
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                          className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                          className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"
                        ></path>
                      </svg>
                    }
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </SidebarIconItem>
                ))}
                <li className="mt-12 lg:mt-8">
                  <Sidebar title="Getting Started" doc>
                    {menu.map((item) => (
                      <SidebarItem href={item.href} key={item.href}>
                        {item.label}
                      </SidebarItem>
                    ))}
                  </Sidebar>
                </li>
              </Sidebar>
            </nav>
          </div>
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              {children}
            </main>
            <footer className="text-sm leading-6 mt-16">
              <div className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
                <div className="mb-6 sm:mb-0 sm:flex">
                  <p>Copyright © 2023 Tailwind Labs Inc.</p>
                  <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
                    <a
                      className="hover:text-slate-900 dark:hover:text-slate-400"
                      href="/brand"
                    >
                      Trademark Policy
                    </a>
                  </p>
                </div>
                <div className="flex space-x-10 text-slate-400 dark:text-slate-500">
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    className="hover:text-slate-500 dark:hover:text-slate-400"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg width="25" height="24" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="/discord"
                    className="hover:text-slate-500 dark:hover:text-slate-400"
                  >
                    <span className="sr-only">Discord</span>
                    <svg width="23" height="24" fill="currentColor">
                      <path d="M9.555 9.23c-.74 0-1.324.624-1.324 1.385S8.827 12 9.555 12c.739 0 1.323-.624 1.323-1.385.013-.761-.584-1.385-1.323-1.385Zm4.737 0c-.74 0-1.324.624-1.324 1.385S13.564 12 14.292 12c.74 0 1.324-.624 1.324-1.385s-.584-1.385-1.324-1.385Z"></path>
                      <path d="M20.404 0H3.442c-.342 0-.68.065-.995.19a2.614 2.614 0 0 0-.843.536 2.46 2.46 0 0 0-.562.801c-.13.3-.197.62-.196.944v16.225c0 .324.066.645.196.944.13.3.321.572.562.801.241.23.527.412.843.537.315.124.653.189.995.19h14.354l-.67-2.22 1.62 1.428 1.532 1.344L23 24V2.472c0-.324-.066-.644-.196-.944a2.46 2.46 0 0 0-.562-.8A2.614 2.614 0 0 0 21.4.19a2.726 2.726 0 0 0-.995-.19V0Zm-4.886 15.672s-.456-.516-.836-.972c1.659-.444 2.292-1.428 2.292-1.428a7.38 7.38 0 0 1-1.456.707 8.67 8.67 0 0 1-1.836.517 9.347 9.347 0 0 1-3.279-.012 11.074 11.074 0 0 1-1.86-.516 7.621 7.621 0 0 1-.924-.409c-.039-.023-.076-.035-.113-.06-.027-.011-.04-.023-.052-.035-.228-.12-.354-.204-.354-.204s.608.96 2.215 1.416c-.38.456-.848.996-.848.996-2.797-.084-3.86-1.824-3.86-1.824 0-3.864 1.822-6.996 1.822-6.996 1.823-1.296 3.557-1.26 3.557-1.26l.127.145c-2.278.623-3.33 1.57-3.33 1.57s.279-.143.747-.347c1.355-.564 2.43-.72 2.873-.756.077-.012.14-.024.216-.024a10.804 10.804 0 0 1 6.368 1.129s-1.001-.9-3.153-1.526l.178-.19s1.735-.037 3.557 1.259c0 0 1.823 3.133 1.823 6.996 0 0-1.076 1.74-3.874 1.824Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
