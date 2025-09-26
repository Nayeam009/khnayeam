import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { OrganicBackground } from "@/components/OrganicElements";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <OrganicBackground />
      
      <div className="max-w-md mx-auto px-6 text-center relative z-10">
        <Card className="border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle className="text-6xl font-bold text-primary mb-4">404</CardTitle>
            <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The page you're looking for seems to have grown elsewhere. 
              Let's get you back to fertile ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button className="w-full sm:w-auto shadow-lg">
                  <Home size={20} className="mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto"
              >
                <ArrowLeft size={20} className="mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
