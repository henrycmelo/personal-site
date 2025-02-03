import {supabase} from '../lib/supabase'

export const reviewsAPI = {
    getAllEntries: async () =>{
        let {data, error} = await supabase
        .from('reviews')
        .select('*')
        
    
    if (error) throw error

    console.log("Henry", data, "or", error)

    return data
}
}