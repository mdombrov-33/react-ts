// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };
import { type PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>ID: {id}</p>
      {children}
    </div>
  );
}

export default Component;
