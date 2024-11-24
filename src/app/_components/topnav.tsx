import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNavigation() {
  return (
    <nav className="border-b p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-xl font-bold text-white">
          <Link href="/">Gallery</Link>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
