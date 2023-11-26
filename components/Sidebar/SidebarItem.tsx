"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

export interface SidebarItemProps {
  active?: boolean;
  href: string;
  children: ReactNode;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { active, href, children } = props;
  const pathname = usePathname();
  const isActive = active || pathname === href;
  return (
    <li data-active={isActive}>
      <Link
        className={[
          "block border-l pl-4 -ml-px border-transparent",
          `${
            isActive
              ? "text-sky-500 border-current font-semibold dark:text-sky-400"
              : "hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          }`,
        ].join(" ")}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
