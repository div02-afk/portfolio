import { formatDate, formatTime, getRepoLastUpdate } from "@/lib/repo-utils";
import { unstable_cache } from "next/cache";

const getCachedPortfolioUpdate = unstable_cache(
    async () => {
        try {
            const lastUpdate = await getRepoLastUpdate({
                owner: 'lokendrakushwah12',
                repo: 'lokendra.tech',
                token: process.env.GITHUB_TOKEN
            });

            return {
                lastUpdated: lastUpdate.lastUpdated,
                lastCommit: lastUpdate.lastCommit,
                // Add formatted date and time
                date: lastUpdate.lastUpdated ? formatDate(lastUpdate.lastUpdated) : null,
                time: lastUpdate.lastUpdated ? formatTime(lastUpdate.lastUpdated) : null
            };
        } catch (error) {
            console.error('Error fetching portfolio update:', error);
            return null;
        }
    },
    ['portfolio-last-update'],
    {
        revalidate: 3600,
        tags: ['portfolio-update']
    }
);

const LastUpdated = async () => {
    // Change from single string to separate date and time variables
    let date = '28th October 2023';
    let time = '10:00 AM';

    if (process.env.NODE_ENV === 'development') {
        date = 'Development';
        time = 'mode';
    } else {
        const portfolioUpdate = await getCachedPortfolioUpdate();
        // Use the formatted date and time from the cached function
        if (portfolioUpdate?.date && portfolioUpdate?.time) {
            date = portfolioUpdate.date;
            time = portfolioUpdate.time;
        }
    }

    return (
        <p className="text-xs font-normal text-muted-foreground">
            Last updated by Lokendra on {date}, {time}
        </p>
    )
}

export default LastUpdated