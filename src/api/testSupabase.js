import { projectsAPI } from "./projectsApi";

export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    const projects = await projectsAPI.getAllProjects();
    console.log('✅ Successfully fetched projects:', projects);
    return projects;
  } catch (error) {
    console.error('❌ Failed to fetch projects:', error);
    return null;
  }
};