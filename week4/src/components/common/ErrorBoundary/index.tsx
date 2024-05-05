import { FallbackProps } from "react-error-boundary";

const Fallback = ({ error }: FallbackProps) => {
  return (
    <div>
      <h1>{error}</h1>
    </div>
  );
};

export default Fallback;
