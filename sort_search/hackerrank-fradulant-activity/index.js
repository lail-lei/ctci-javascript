/**
 * 
 * HackerLand National Bank has a simple policy for warning clients
 * about possible fraudulent account activity. 
 * If the amount spent by a client on a particular day is 
 * greater than or equal to  the client's median spending for
 * a trailing number of days, they send the client a notification 
 * about potential fraud. The bank doesn't send the client any notifications
 * until they have at least that trailing number of prior days' transaction data.
 * Given the number of trailing days  and a client's total daily expenditures 
 * for a period of  days, determine the number of times the client will receive a 
 * notification over all  days.
 */

function activityNotifications(expenditure, d) {
    // first sort d-sized array from elements start ... d;
    let sorted = expenditure.slice(0, d).sort((a, b) => {return a-b});
    let notifications = 0;
    
    
    const insertSorted = (value) => {
        
        
        if (value <= sorted[0]){
            sorted = [value, ...sorted];
            return;
        }
        if (value >= sorted[sorted.length-1]){
            sorted = [...sorted, value];
            return;
        }
        
        let low = 0;
        let high = sorted.length;
        let mid;
        
        // O(lg(n))
        while(low < high)
        {
            mid = Math.floor((low + high)/2);
            if(sorted[mid] === value) break;
            if(sorted[mid] > value && sorted[mid-1] <= value) break;
            if(sorted[mid] < value && sorted[mid+1] >= value) {
                mid = mid+1; // we want to insert before mid
                break;
            }
            
            if(sorted[mid] > value) high = mid-1;
            if(sorted[mid] < value) low = mid+1;
        }
        
        sorted.splice(mid, 0, value); // for time optimization, use splice 

    }
    
    
    const deleteSorted = (value) => {
        
        let low = 0;
        let high = sorted.length;
        let mid;
        
        // O(lg(n))
        while(low < high)
        {
            mid = Math.floor((low + high)/2);
            if(sorted[mid] === value) break;
            if(sorted[mid] > value) high = mid-1;
            else low = mid + 1; 
        }
        
        sorted.splice(mid, 1); // for time optimization, use splice 
    }

    const notificationSent = (amount) => {
        let median = getMedian(); // calc current median
        return amount >= median * 2;  
    }
    
    const getMedian = () => {  
        const evenMedian = () => (sorted[(sorted.length/2)] + sorted[(sorted.length/2)-1])/2
        const oddMedian = () => sorted[Math.floor(sorted.length/2)] 
        return d % 2 === 0 ? evenMedian() : oddMedian();
    }
    
    
    for(let i = d; i < expenditure.length; i++){
       
        if(notificationSent(expenditure[i])) notifications++;
        //sets up the next loop iteration
        insertSorted(expenditure[i]);
        deleteSorted(expenditure[i-d])  
    }
    
    // now, do last day
    if(notificationSent(expenditure[expenditure.length-1])) notifications++;
    return notifications;
}