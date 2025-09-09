import { supabase } from "../lib/supabase";

export const projectsAPI = {
  // Get all projects
  async getAllProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Get single project by path
  async getProjectByPath(path) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('path', path)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  },

  // Get single project by ID
  async getProjectById(id) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching project by ID:', error);
      throw error;
    }
  },

  // Create new project
  async createProject(projectData) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([{
          title: projectData.title,
          description: projectData.description,
          keywords: projectData.keywords,
          path: projectData.path,
          type: projectData.type,
          image_url: projectData.image_url || null,
          logo_urls: projectData.logo_urls || []
        }])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  // Update existing project
  async updateProject(id, projectData) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update({
          title: projectData.title,
          description: projectData.description,
          keywords: projectData.keywords,
          path: projectData.path,
          type: projectData.type,
          image_url: projectData.image_url,
          logo_urls: projectData.logo_urls,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },

  // Delete project
  async deleteProject(id) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  },

  // Upload file to storage
  async uploadFile(file, path) {
    try {
      const { data, error } = await supabase.storage
        .from('project-assets')
        .upload(path, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (error) throw error;
      
      // Get public URL
      const { data: urlData } = supabase.storage
        .from('project-assets')
        .getPublicUrl(path);

      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },

  // Delete file from storage
  async deleteFile(path) {
    try {
      const { error } = await supabase.storage
        .from('project-assets')
        .remove([path]);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }
};