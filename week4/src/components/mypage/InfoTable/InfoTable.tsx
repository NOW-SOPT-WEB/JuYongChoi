import { tableStyle } from "./InfoTable.style";

interface InfoTableProps extends React.HTMLAttributes<HTMLUListElement> {}

const InfoTable = ({ children }: InfoTableProps) => {
  return <ul css={tableStyle}>{children}</ul>;
};

export default InfoTable;
