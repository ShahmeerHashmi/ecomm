// components/ClientWrapper.tsx
"use client"
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Custom functions to match Clerk's RouterFn type
  const routerPush = (url: string) => router.push(url);
  const routerReplace = (url: string) => router.replace(url);
    const publishableKey:string = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  return (
    <ClerkProvider
      routerPush={routerPush}
      routerReplace={routerReplace}
      publishableKey={publishableKey}
    >
      {children}
    </ClerkProvider>
  );
}