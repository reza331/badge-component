import { useEffect, useRef, useState } from "react"

const useInView = () => {

    const elemRef = useRef<HTMLDivElement | null>(null)
    const [isInView, setIsInView] = useState<boolean>(false)

    useEffect(() => {
        if (!elemRef.current) return
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInView(true)
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.4, rootMargin: "0px 0px -100px 0px" })
        if (elemRef.current) observer.observe(elemRef.current)
        return () => observer.disconnect();
    }, [])

    return { isInView, elemRef }
}

export default useInView