import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC, ReactNode } from 'react';
import { notFound } from "next/navigation";
import Link from "next/link";

interface LayoutProps {
    children: ReactNode
};

const Layout = async ({ children }: LayoutProps) => {
    const session = await getServerSession(authOptions);
    if (!session) notFound();
    return <div className="
    w-full
    flex
    h-screen
    ">
        <div className="
        flex 
        h-full 
        w-full 
        max-w-xs 
        grow 
        flex-col 
        gap-y-5
        overflow-y-auto
        border-right
        border-gray-200
        bg-white
        px-6
        ">
            <Link 
            href="/dashboard"
            className="flex h-16 shrink-0 items-center"></Link>
        </div>


        {children}</div>
};

export default Layout;