import { Link } from "react-router-dom";

export const Button = ({ text, link }) => {
  return (
    <Link to={link} className="btn-primary">
      <span>{text}</span>
    </Link>
  );
};
