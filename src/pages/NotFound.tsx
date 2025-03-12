
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mist px-4">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold text-midnight mb-4">404</h1>
        <p className="text-xl text-sapphire mb-8">The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-sapphire hover:bg-sapphire/90 text-white">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
