import { A } from "@solidjs/router";

const Header = () => {
  return (
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center">
        <div class="mr-auto flex items-center gap-6 md:gap-10">
          <A href="/" class="flex items-center space-x-2">
            <svg class="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3.06V1h-2v2.06A10.014 10.014 0 003.06 11H1v2h2.06A10.014 10.014 0 0011 20.94V23h2v-2.06A10.014 10.014 0 0020.94 13H23v-2h-2.06A10.014 10.014 0 0013 3.06zM12 19a7 7 0 110-14 7 7 0 010 14z" />
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <span class="hidden font-bold sm:inline-block">Audiobooks</span>
          </A>
          <nav class="hidden gap-6 md:flex">
            <A 
              href="/" 
              class="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClass="text-foreground"
              end
            >
              Home
            </A>
            <a 
              href="#featured" 
              class="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Featured
            </a>
            <a 
              href="#how-it-works" 
              class="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              How It Works
            </a>
          </nav>
        </div>
        <div class="flex items-center justify-end space-x-4">
          <nav class="flex items-center space-x-2">
            <button class="btn btn-ghost">
              Log In
            </button>
            <button class="btn btn-primary">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;