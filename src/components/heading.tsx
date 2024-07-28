import { PropsWithChildren } from 'react';

const Heading = ({ children }: PropsWithChildren) => {
  return <h1>{children}</h1>;
};

export default Heading;
