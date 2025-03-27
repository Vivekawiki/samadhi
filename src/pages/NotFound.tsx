
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/shared/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout title="Page Not Found">
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-heading font-bold text-spiritual-600 mb-6">404</h1>
          <h2 className="text-2xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="flex justify-center space-x-4">
            <Button href="/" variant="primary">
              Return to Home
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
