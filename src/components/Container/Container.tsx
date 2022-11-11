import React from "react";

type Props = {
    children: React.ReactNode;
};

const Container: React.FC<Props> = ({children}: Props) => <div className="mx-auto my-0 w-9/12 sm:w-[95%] pt-7 sm:pt-2">{children}</div>;

export default Container;