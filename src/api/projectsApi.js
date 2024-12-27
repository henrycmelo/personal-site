import { supabase } from "../lib/supabase";

export const projectsAPI = {
    getAllEntries: async() =>{
        const {data, error} = await supabase
        .from('case_studies')
        .select('*') 

    if (error) throw error

    return data
    }
}