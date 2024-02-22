import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="text-center my-auto min-h-[27rem] flex justify-center items-center flex-col">
      <p className="text-4xl font-semibold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-sm bg-primary px-3.5 py-2.5 text-lg transition-all duration-300 font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Go back home
        </Link>
        <Link
          href="/contact-us"
          className="text-lg font-semibold text-gray-900"
        >
          Contact support <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
