
"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });


const GitHubGraph = () => {
    const { resolvedTheme } = useTheme();
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-4xl mx-auto border border-dashed rounded-lg  p-4 overflow-x-auto">
                <GitHubCalendar
                    username="Lokendrakushwah12"
                    colorScheme={resolvedTheme === "light" ? "light" : "dark"}
                />
            </div>
        </div>
    );
}

export default GitHubGraph