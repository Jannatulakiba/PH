import type { Workout } from "@/types/app.type";

const WORKOUTS_API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<Workout[]> {
    const response = await fetch(WORKOUTS_API_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch workouts: ${response.status}`);
    }

    return response.json() as Promise<Workout[]>;
}

export async function getWorkoutById(id: string): Promise<Workout | null> {
    const workouts = await getAllWorkouts();
    return workouts.find((workout) => workout.id.toString() === id) ?? null;
}