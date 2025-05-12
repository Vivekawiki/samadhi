// This script helps ensure that SPA routes work correctly
// It should be included in the index.html file

(function() {
  // Check if we're on a route that should be handled by the SPA
  const path = window.location.pathname;
  
  // If we're on a route that should be handled by the SPA but got a direct request
  if (path.startsWith('/services/seminar-registration')) {
    // Redirect to the root with the correct hash
    const newPath = '/#' + path;
    window.location.replace(newPath);
  }
})();
