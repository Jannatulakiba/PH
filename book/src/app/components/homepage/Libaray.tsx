import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllWorkouts } from "@/lib/workouts";

const Library = async () => {
    const workouts = await getAllWorkouts();

    return (
        <section className="bg-black px-10 py-10 text-white">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold">
                    Workout Library
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    Explore exercises and build your perfect workout.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {workouts.map((workout) => (
                    <Link
                        key={workout.id}
                        href={`/workouts/${workout.id}`}
                        className="block"
                    >
                        <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#171717] transition hover:-translate-y-1 hover:border-gray-600">

                            {/* Image */}
                            <div className="relative h-44 w-full">
                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">

                                <div className="mb-2 flex items-start justify-between gap-2">
                                    <h3 className="font-semibold">
                                        {workout.name}
                                    </h3>

                                    <span className="text-sm text-yellow-400">
                                        ★ {workout.rating}
                                    </span>
                                </div>

                                {/* Muscle Groups */}
                                <div className="mb-3 flex flex-wrap gap-1">
                                    {workout.muscleGroups.map((muscle) => (
                                        <span
                                            key={muscle}
                                            className="rounded-full bg-lime-400/10 px-2 py-1 text-[10px] text-lime-400"
                                        >
                                            {muscle}
                                        </span>
                                    ))}
                                </div>

                                <p className="mb-4 line-clamp-2 text-xs leading-5 text-gray-400">
                                    {workout.description}
                                </p>

                                {/* Info */}
                                <div className="flex items-center justify-between border-t border-gray-800 pt-3 text-xs text-gray-400">
                                    <span>
                                        ⏱ {workout.duration} min
                                    </span>

                                    <span>
                                        🔥 {workout.caloriesBurned} kcal
                                    </span>

                                    <span>
                                        {workout.sets} × {workout.reps}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Library;