import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";

function getHashPath(): string {
  try {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#/") return "/";
    const path = hash.startsWith("#") ? hash.slice(1) : hash;
    return path || "/";
  } catch {
    return "/";
  }
}

function navigate(to: string) {
  window.location.hash = to;
}

export function Link({
  to,
  children,
  className,
  onClick,
  "data-ocid": dataOcid,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  "data-ocid"?: string;
}) {
  return (
    <a
      href={`#${to}`}
      className={className}
      data-ocid={dataOcid}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export function useNavigate() {
  return (to: string) => navigate(to);
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blobs min-h-screen bg-background flex flex-col relative">
      <div className="blob-mid" aria-hidden="true" />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  const [path, setPath] = useState(() => getHashPath());

  useEffect(() => {
    function handleHashChange() {
      setPath(getHashPath());
    }
    window.addEventListener("hashchange", handleHashChange);
    // Handle direct link with no hash — redirect to home
    if (!window.location.hash) {
      window.location.hash = "/";
    }
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  let page: React.ReactNode;
  if (path === "/" || path === "") page = <Home />;
  else if (path === "/services") page = <Services />;
  else if (path === "/pricing") page = <Pricing />;
  else if (path === "/about") page = <About />;
  else if (path === "/contact") page = <Contact />;
  else page = <Home />;

  return <RootLayout>{page}</RootLayout>;
}
