"use client";
import { FC, ReactNode } from "react";

interface SidebarProps {
  title?: string;
  children: ReactNode;
  doc?: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { title, children, doc } = props;
  return (
    <>
      {title && (
        <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
          {title}
        </h5>
      )}
      <ul
        className={
          doc
            ? "space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800"
            : ""
        }
      >
        {children}
      </ul>
    </>
  );
};
