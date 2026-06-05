'use client'
import useInView from "@/hooks/useInView";
import React, { FC } from "react";

interface ScrollWrapperProps {
    delay?: number
    children: React.ReactNode
}

const ScrollWrapper: FC<ScrollWrapperProps> = ({ delay = 0, children }) => {

    const { isInView, elemRef } = useInView()

    return (
        <div
            ref={elemRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-[opacity,translate] duration-900 ease-out transform
        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
      `}
        >
            {children}
        </div>
    );
}

export default ScrollWrapper



