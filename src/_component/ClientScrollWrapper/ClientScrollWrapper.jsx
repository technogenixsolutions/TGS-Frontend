'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
function ClientScrollWrapper({ children }) {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            // Cleanup if needed
        }
    }, [])

    return <>{children}</>
}

export default ClientScrollWrapper;