import React from "react";

type Props = {
    children: React.ReactNode;
};

const Container: React.FC<Props> = ({children}: Props) => <div className="mx-auto my-0 w-9/12">{children}</div>;

export default Container;