import Image from "next/image";
import Link from "next/link";
import { getWorkoutById } from "@/lib/workouts";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const WorkoutDetails = async ({ params }: Props) => {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    if (!workout) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">
                        Workout Not Found
                    </h1>

                    <Link
                        href="/"
                        className="mt-4 inline-block text-sm text-lime-400 hover:underline"
                    >
                        ← Back to Library
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black px-5 py-8 text-white md:px-10 lg:px-16">

            {/* Back */}
            <Link
                href="/"
                className="mb-8 inline-block text-sm text-gray-400 transition hover:text-lime-400"
            >
                ← Back to Library
            </Link>

            <section className="mx-auto max-w-7xl">

                {/* Main Content */}
                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative h-[350px] overflow-hidden rounded-2xl bg-[#171717] md:h-[500px]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-400"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Specs */}
                        <div className="mt-8 space-y-4 border-y border-gray-800 py-6">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    EQUIPMENT
                                </span>

                                <span className="text-sm text-white">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    DIFFICULTY
                                </span>

                                <span className="text-sm text-white">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    SETS
                                </span>

                                <span className="text-sm text-white">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    REPS
                                </span>

                                <span className="text-sm text-white">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    DURATION
                                </span>

                                <span className="text-sm text-white">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    CALORIES
                                </span>

                                <span className="text-sm text-white">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500">
                                    RATING
                                </span>

                                <span className="text-sm text-yellow-400">
                                    ★ {workout.rating}
                                </span>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                            <button
                                type="button"
                                className="rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
                            >
                                Add to today&apos;s plan
                            </button>

                            <button
                                type="button"
                                className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400"
                            >
                                Save for later
                            </button>

                        </div>

                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-16 border-t border-gray-800 pt-10">

                    <h2 className="text-2xl font-bold">
                        INSTRUCTIONS
                    </h2>

                    <ol className="mt-6 space-y-4">

                        {workout.instructions.map(
                            (instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-4"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm leading-6 text-gray-300">
                                        {instruction}
                                    </p>
                                </li>
                            )
                        )}

                    </ol>

                </div>

            </section>
        </main>
    );
};

export default WorkoutDetails;