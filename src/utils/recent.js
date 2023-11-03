export function isProjectDateRecent(projectDate){
    if(projectDate){
        const date = new Date(projectDate);
        if(isNaN(date)){
            return false;
        }
        const nowTime = Date.now();
       
        const monthDifference = (nowTime - date.getTime())/(1000*60*60*24*30)
        return monthDifference <= 9

    } else {
        return false;
    }
}

