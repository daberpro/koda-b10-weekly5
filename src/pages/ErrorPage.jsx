import { Link } from "react-router";

export default function ErrorPage({ error }) {
  return (
    <div className="w-full h-screen gap-4 flex items-center flex-col justify-center">
        <h1 className="text-4xl">
          {error.status} {error.statusText}
        </h1>
          <p>{error.data}</p>
          <Link to={"/"} className="px-4 py-2 rounded-lg bg-black text-white">
              Go to Homepage
          </Link>
    </div>
  );
}
