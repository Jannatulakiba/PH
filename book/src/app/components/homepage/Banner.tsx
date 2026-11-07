import React from 'react';
import Image from 'next/image';
import WorkoutImage from '@/assets/banner.png';
const Banner = () => {
    return (
         <section className="w-full px-10 pt-10">
            <div className="relative overflow-hidden rounded-xl bg-[#15171c] min-h-[400px] flex items-center">

                {/* Left Content */}
                <div className="relative z-10 w-1/2 px-40">
                    <p className="mb-3 text-sm font-medium text-lime-400">
                        YOUR FITNESS JOURNEY
                    </p>

                    <h1 className="text-7xl font-bold leading-tight text-white">
                        Train Harder.
                        <br />
                        Feel Stronger.
                    </h1>

                    <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                        Track your workouts, build better habits, and
                        reach your fitness goals with FitLog.
                    </p>

                    <button className="mt-6 rounded-md bg-lime-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-300">
                        Start Workout
                    </button>
                </div>

                {/* Right Image */}
                <div className="absolute right-8 bottom-7 h-[270px] w-[300px]">
                    <Image
                        src={WorkoutImage}
                        alt="Workout"
                        fill
                        className="object-contain object-bottom"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;