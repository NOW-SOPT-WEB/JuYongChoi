import { fieldStyle, wrapperStyle } from "./InfoRow.style";

interface InfoRowProps extends React.HTMLAttributes<HTMLLIElement> {
  field?: string;
  value?: string | number;
}

const InfoRow = ({ field, value = "", ...props }: InfoRowProps) => {
  return (
    <li css={wrapperStyle} {...props}>
      <p css={fieldStyle}>{field}</p>
      <p>{value}</p>
    </li>
  );
};

export default InfoRow;
