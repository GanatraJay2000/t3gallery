"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNavigation() {
  const router = useRouter();

  return (
    <nav className="border-b p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-xl font-bold text-white">
          <Link href="/">Gallery</Link>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={() => {
                  router.refresh();
                }}
              />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
