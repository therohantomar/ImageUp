import { Link } from "react-router-dom";

export type urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

function Photocard({
  id,
  slug,
  urls,
}: {
  id: string;
  slug: string;
  width: number;
  height: number;
  urls: urls;
}) {
  return (
    <div>
      <Link to={"photos/" + id}>
        <img
          loading="eager"
          src={urls.small}
          className="hover:shadow-xl  hover:rounded-md w-full h-auto "
          alt={slug}
        />
      </Link>
    </div>
  );
}

export default Photocard;
