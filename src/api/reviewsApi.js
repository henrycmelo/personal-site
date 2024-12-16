import {supabase} from '../lib/supabase'

export const reviewsAPI = {
    getAllEntries: async () =>{
        const {data, error} = await supabase
        .from('reviews')
        .select('*')
        
    
    if (error) throw error

    return data
}
}