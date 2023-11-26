"use client";

import { FC, ReactNode } from "react";
import { SidebarItemProps } from ".";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarIconItemProps extends SidebarItemProps {
  icon: ReactNode;
}

export const SidebarIconItem: FC<SidebarIconItemProps> = (props) => {
  const { active, href, children, icon } = props;
  const pathname = usePathname();
  const isActive = active || pathname === href;
  return (
    <li>
      <Link
        className={[
          "group flex items-center lg:text-sm lg:leading-6 mb-4",
          `${
            isActive
              ? "font-semibold text-sky-500 dark:text-sky-400"
              : "font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          }`,
        ].join(" ")}
        href={href}
      >
        <div
          className={[
            "mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10",
            `${
              isActive
                ? "group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10"
                : " group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5"
            }`,
          ].join(" ")}
        >
          {icon}
        </div>
        {children}
      </Link>
    </li>
  );
};
