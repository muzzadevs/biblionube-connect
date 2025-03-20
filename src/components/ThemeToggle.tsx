
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="h-9 w-9 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-gray-800 dark:text-gray-400" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Cambiar a tema {theme === "light" ? "oscuro" : "claro"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
