import { useEffect, useState } from "react";

const NotFound = () => {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/api/hello')
  //     .then(response => response.text())
  //     .then(data => setMessage(data))
  //     .catch(error => console.error('Error fetching message:', error));
  // }, []);

  return (
    <div className="text-center mt-8">
      <p className="text-base font-semibold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we are still working on the pages.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
