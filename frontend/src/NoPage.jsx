import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div>
      You have entered wrong url
      <button>
        <Link to="/">Go to home page</Link>
      </button>
    </div>
  );
}
