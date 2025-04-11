"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Hero() {
    return (
        <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={120}
                    className="w-full h-full"
                    particleColor="#4F46E5"
                />
            </div>
            
            <div className="relative z-20 text-center space-y-4">
                <h1 className={`${spaceGrotesk.className} md:text-7xl text-4xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2 tracking-tight`}>
                    Craft Your Future
                </h1>
                <p className={`${spaceGrotesk.className} text-2xl text-indigo-200 mb-4`}>
                    Build Your Professional Resume in Minutes
                </p>
                <div className={`${spaceGrotesk.className} text-center text-indigo-300 text-xl mt-2`}>
                    <Typewriter
                        words={['Modern Templates', 'AI-Powered Suggestions', 'ATS Optimized', 'Professional Design']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
            </div>

            {/* Beam and additional sparkles container */}
            <div className="w-[40rem] h-40 relative mt-8">
                {/* Beam gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4" />

                {/* Additional sparkles under text */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1500}
                    className="w-full h-full"
                    particleColor="#6366F1"
                />

                {/* Radial gradient mask */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>

            <Link
                href="/builder"
                className="relative z-20 mt-8 inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-indigo-800/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:border-indigo-600/50"
            >
                Create Your Resume →
            </Link>
        </div>
    );
}
