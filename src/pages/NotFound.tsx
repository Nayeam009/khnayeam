import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-6xl font-bold gradient-text font-serif mb-4">404</p>
        <h1 className="text-2xl font-semibold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for seems to have grown elsewhere.
          Let's get you back to fertile ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto rounded-full gap-2 min-h-[48px]">
              <Home size={18} /> Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto rounded-full gap-2 min-h-[48px]"
          >
            <ArrowLeft size={18} /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
