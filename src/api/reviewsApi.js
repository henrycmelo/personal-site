import {supabase} from '../lib/supabase'


export const reviewsAPI = {
    getAllEntries: async () =>{
        let {data, error} = await supabase
        .from('reviews')
        .select('*')
        
    
    if (error) throw error


    return data
},

createReview: async (reviewData) => {
    // Reject if honeypot is filled (bot detection)
    if (reviewData.honeypot) {
        throw new Error("Bot detected");
    }

    // Validate required fields
    if(!reviewData.fullName || !reviewData.reviewerRole || 
       !reviewData.company || !reviewData.reviewText || 
       !reviewData.invitationCode ) {
        throw new Error("Missing Required Field");
    }

    // List of valid invitation codes - duplicated here for extra security
    const VALID_INVITATION_CODES = process.env.REACT_APP_INVITATION_CODES 
    ? process.env.REACT_APP_INVITATION_CODES.split(',') 
    : [];
  
  // Validate against environment variable codes
  if (!VALID_INVITATION_CODES.includes(reviewData.invitationCode)) {
    throw new Error("Invalid invitation code");
  }

    const {data, error} = await supabase
        .from('reviews')
        .insert([
            {
                reviewer_name: reviewData.fullName,
                reviewer_role: reviewData.reviewerRole,
                company: reviewData.company,
                linkedin_url: reviewData.linkedinUrl,
                content: reviewData.reviewText,
                status: "pending", // All new reviews start as pending
                
            }
        ]);

    if (error) throw error;

    return data;
},
approveReview: async (reviewId) => {
    const {data, error} = await supabase
        .from('reviews')
        .update({ status: 'approved' })
        .eq('id', reviewId);
        
    if (error) throw error;
    return data;
},

rejectReview: async (reviewId) => {
    const {data, error} = await supabase
        .from('reviews')
        .update({ status: 'rejected' })
        .eq('id', reviewId);
        
    if (error) throw error;
    return data;
},

// You might also want to add this to get reviews by status
getReviewsByStatus: async (status = 'approved') => {
    const {data, error} = await supabase
        .from('reviews')
        .select('*')
        .eq('status', status);
        
    if (error) throw error;
    return data;
}
}