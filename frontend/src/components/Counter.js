import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasStarted = useRef(false);

    const animateCounter = () => {
        // console.log("Starting counter animation...");

        const duration = 4000; // Total duration of the animation in milliseconds
        const startTime = performance.now();

        const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Ensures progress doesn’t exceed 1

            // Apply ease-out effect to the progress
            const easedProgress = easeOutExpo(progress);

            // Calculate the current count based on the eased progress
            const currentCount = Math.floor(easedProgress * target);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCounter); // Continue animation
            } else {
                setCount(target); // Ensure it lands exactly on the target value at the end
                // console.log("Reached target:", target);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    useEffect(() => {
        // console.log("Setting up IntersectionObserver...");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    // console.log("Element is in view. Starting counter.");
                    hasStarted.current = true;
                    animateCounter();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        } else {
            console.warn("counterRef is null");
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [target]);

    return (
        <div ref={counterRef} className="counter">
            {count}
        </div>
    );
};

export default Counter;