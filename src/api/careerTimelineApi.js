import { supabase } from '../lib/supabase'

export const careerTimelineAPI = {
  // Get all career timeline entries sorted by date
  getAllEntries: async () => {
    const { data, error } = await supabase
      .from('career_timeline')
      .select('*')
      .order('date', { ascending: false })
    
    if (error) throw error

    return data
  },

  // Get current position
  getCurrentPosition: async () => {
    const { data, error } = await supabase
      .from('career_timeline')
      .select('*')
      .ilike('date', '%present%')
      .single()
    
    if (error) throw error
    return data
  },

  // Get all unique tools/skills
  getAllTools: async () => {
    const { data, error } = await supabase
      .from('all_tools')
      .select('*')
    
    if (error) throw error
    return data
  },

  // Add new career entry
  addEntry: async (entry) => {
    const { data, error } = await supabase
      .from('career_timeline')
      .insert([entry])
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Update career entry
  updateEntry: async (id, updates) => {
    const { data, error } = await supabase
      .from('career_timeline')
      .update(updates)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Delete career entry
  deleteEntry: async (id) => {
    const { error } = await supabase
      .from('career_timeline')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  }
}
