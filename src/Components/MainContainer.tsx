import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1100px] mx-auto">{children}</div>
    </div>
  );
};

export default MainContainer;
