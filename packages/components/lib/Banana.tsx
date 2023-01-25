import React from "react";
import { Foo } from "common-libs/interfaces/Foo";

export interface BananaProps {
  foo: Foo;
}

const Banana: React.FC<BananaProps> = ({ foo }) => {
  return <div>{foo.banana}</div>;
};

export default Banana;
