'use client';

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAnimate } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

export default function Banner() {
    const ref = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const [scope, animate] = useAnimate();

    useLayoutEffect(() => {
        if (ref.current && targetRef.current) targetRef.current.style.height = `${ref.current.offsetHeight}px`;
    }, [ref, targetRef]);

    useEffect(() => {
        void animate(
            [
                [scope.current, { y: '0%' }, { duration: 0 }],
                [scope.current, { y: '-100%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-200%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-300%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-200%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '-100%' }, { duration: 0.3, at: '+1.3' }],
                [scope.current, { y: '0%' }, { duration: 0.3, at: '+1.3' }],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            }
        )
    }, [animate, scope])

    const descriptions = [
        'Agile',
        'Earnest',
        'Enthusiastic',
        'Independent',
    ]

    const colorGenerator = (num: number) => num % 2 === 0 ? '45deg, #ff1835, #ffc900' : '45deg, #0077ff, #00e7df';

    return (
        <>
            <Typography variant="h1" ref={ref}>This is Jack Kwok.</Typography>
            <Typography variant="h1">An</Typography>
            <Typography ref={targetRef} variant="h1" component="span" sx={{ display: 'inline-flex', overflow: 'hidden' }}>
                <Stack direction="column" ref={scope}>
                    {
                        descriptions.map((text, i) => (
                            <Typography
                                key={i}
                                sx={{
                                    backgroundImage: `linear-gradient(${colorGenerator(i)})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                                variant="h1"
                            >
                                {text}
                            </Typography>
                        ))
                    }
                </Stack>
            </Typography>
            <Typography variant="h1">
                Full Stack Developer.
            </Typography>
        </>
    )
}