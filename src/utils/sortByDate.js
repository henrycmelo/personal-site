export const sortByDate = (a, b) => {
    const parseDate = (dateStr) => {
        // Handle single year or "present" only first
        if (!dateStr.includes('-')) {
            if (dateStr.toLowerCase() === 'present') {
                return {
                    isPresent: true,
                    startYear: new Date().getFullYear(),
                    endDate: new Date('9999-12-31')
                };
            }
            const year = parseInt(dateStr);
            return {
                isPresent: false,
                startYear: year,
                endDate: new Date(`${year}-12-31`)
            };
        }

        // Handle date ranges
        const [start, end] = dateStr.split('-').map(d => d.trim());
        
        // For entries ending in "present"
        if (end.toLowerCase() === 'present') {
            return {
                isPresent: true,
                startYear: parseInt(start),
                endDate: new Date('9999-12-31')
            };
        }
        
        // For completed date ranges
        return {
            isPresent: false,
            startYear: parseInt(start),
            endDate: new Date(`${end}-12-31`)
        };
    };

    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    // If both are present dates, compare start years
    if (dateA.isPresent && dateB.isPresent) {
        return dateB.startYear - dateA.startYear;
    }
    
    // If only one is present, it should come first
    if (dateA.isPresent) return -1;
    if (dateB.isPresent) return 1;
    
    // Otherwise compare end dates
    return dateB.endDate - dateA.endDate;
};