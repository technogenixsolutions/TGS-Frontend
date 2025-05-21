import { CiFilter, CiSearch } from "react-icons/ci";

function CareersSearchFilter() {
    const filters = [
        { name: "All", active: true },
        { name: "Development", active: false },
        { name: "Design", active: false },
        { name: "Marketing", active: false },
        { name: "AI/ML", active: false },
        { name: "BPO", active: false },
    ];

    return (
        <section>
            <div className="rounded-xl p-4 md:p-6 mb-5 md:mb-10 border border-gray-300">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search for jobs..."
                            value=""
                            readOnly
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background 
              placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1
               disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 h-12"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </div>

                    {/* Search Button */}
                    <div className="md:flex-shrink-0">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm md:text-base 
              font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              text-primary-foreground md:h-10 md:px-8 py-6 bg-primary hover:bg-[#008c44] h-12 px-6"
                        >
                            <CiSearch />
                            Search
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <span className="text-gray-300 mr-2 flex gap-x-2 items-center">
                        <CiFilter />
                        Filter:
                    </span>

                    {filters.map((filter, idx) => (
                        <div
                            key={idx}
                            className={`inline-flex items-center rounded-full border transition-colors focus:outline-none 
              focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer px-4 py-2 text-sm font-normal 
              ${filter.active
                                    ? "bg-primary text-primary-foreground border-transparent hover:bg-primary/80"
                                    : "bg-transparent text-foreground border hover:bg-primary/90 hover:text-white"
                                }`}
                        >
                            {filter.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CareersSearchFilter;