import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 365 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("w-full h-auto", className)}
        >
            <g
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                className="text-[#B1B6B9] dark:text-[#919598]"
            >
                {/* H */}
                <path d="M 5,10 V 50 M 30,10 V 50 M 5,30 H 30" />

                {/* A 1 */}
                <path d="M 46,50 L 62,10 L 78,50" />

                {/* M */}
                <path d="M 94,50 V 10 L 110,30 L 126,10 V 50" strokeLinejoin="round" />

                {/* A 2 */}
                <path d="M 142,50 L 158,10 L 174,50" />

                {/* A 3 */}
                <path d="M 190,50 L 206,10 L 222,50" />

                {/* K */}
                <path d="M 238,10 V 50 M 264,10 L 238,30 L 264,50" />

                {/* A 4 */}
                <path d="M 280,50 L 296,10 L 312,50" />

                {/* V */}
                <path d="M 328,10 L 344,50 L 360,10" />
            </g>

            <g className="fill-[#68ada1] dark:fill-[#5a9c90]">
                {/* Triangle for A 1 */}
                <polygon points="56,33 68,33 62,43" />

                {/* Triangle for A 2 */}
                <polygon points="152,33 164,33 158,43" />

                {/* Triangle for A 3 */}
                <polygon points="200,33 212,33 206,43" />

                {/* Triangle for A 4 */}
                <polygon points="290,33 302,33 296,43" />
            </g>
        </svg>
    );
}
