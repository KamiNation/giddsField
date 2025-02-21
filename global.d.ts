// global.d.ts (or inside `types/env.d.ts` if you organize types)
declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_MAPTILER_KEY: string; // Add other environment variables as needed
    }
}
