export const formatDate=(date)=>{
    const isValidDate = (d) => d instanceof Date && !isNaN(d);
    
    const [year, month] = date.split("-");
    const newDate = new Date(Date.UTC(year, parseInt(month)));

    if (!isValidDate(newDate)) {
      return new Error("Invalid Date");
    }
    return newDate.toLocaleDateString("default", {
      year: "numeric",
      month: "short",
    });
  }

export const formatDateRange=(dateInitial, dateFinal)=>{
        const newDateInitial = new Date(Date.UTC(dateInitial.substring(0, 4), parseInt(dateInitial.substring(5)) - 1));
        const newDateFinal = new Date(Date.UTC(dateFinal.substring(0, 4), parseInt(dateFinal.substring(5)) - 1));
        return newDateInitial.toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            timeZone: "UTC"
        }) + " - " + newDateFinal.toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            timeZone: "UTC"
        });
}