import React, {HTMLProps} from "react";
import cn from "classnames";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
                                     className,
                                     active,
                                     disabled,
                                     children,
                                     ...otherProps
                                 }: Props) {
    const customClassName = cn(className, {
        active,
        disabled,
    });

    if (disabled) {
        return <span
            className={`block py-2 px-3 ml-0 leading-tight text-[#70778B] bg-[#FFFFFF] rounded-l-lg sm:text-[16px] sm:leading-[19px] sm:tracking-[1.33333px] ${customClassName}`}>{children}</span>;
    }

    return (
        <a
            className={`className="block py-2 px-3 leading-tight text-[#70778B] bg-[#FFFFFF] sm:text-[16px] sm:leading-[19px] sm:tracking-[1.33333px] ${customClassName === "active" ? "border-b-2 border-[#5876C5] text-[#5876C5]" : ""}`}
            aria-current={active ? 'page' : undefined}
            {...otherProps}
        >
            {children}
        </a>
    );
}

