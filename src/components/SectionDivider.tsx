
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("my-12", className)}>
      <div className="w-full max-w-screen-lg mx-auto px-4">
        <hr className="border-t border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
}
