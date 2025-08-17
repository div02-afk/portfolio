
"use client";
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const GitHubGraph = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-4xl mx-auto border border-dashed rounded-lg  p-4 overflow-x-auto">
                <GitHubCalendar username="Lokendrakushwah12" colorScheme="dark" />
            </div>
        </div>
    )
}

export default GitHubGraph