import type { Database } from '$lib/database.types';
import type { SupabaseClient } from '@supabase/supabase-js';

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            supabase: SupabaseClient<Database>;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
