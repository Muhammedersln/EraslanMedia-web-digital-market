import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper =(
    {className, children}: {
        className?: string;
        children: React.ReactNode;
    }
) => {

    return (
        <div className={cn("mx-auto w-full max-w-screen-lg px-2.5 md:px-20 " , className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;