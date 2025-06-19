

function max_adjacent_sum(arr=[]){
    let n=arr.length;
    let prev=arr[0]
    let prev2=0
    for(let i=0;i<n;i++){
        let take=arr[i]
        if( i>1)take+=prev2
        let not_take=0+prev

        let curi=Math.max(take,not_take)
        prev2=prev
        prev=curi
    }

    return prev
}


let arr1=[1,2,3,1,3,5,8,1,9]
console.log("llllll",max_adjacent_sum(arr1))




// function rec(nums, idx)
// {
//     if (idx >= nums.length)
//         return 0;
//     return Math.max(nums[idx] + rec(nums, idx + 2), rec(nums, idx + 1));
// }
 
// function findMaxSum(arr, N)
// {
//     return rec(arr, 0);
// }


 



function maxLoot(arr, n) {

    // No item, no value. And one item, 
    // return that value
    if (n <= 0) return 0;
    if (n === 1) return arr[0];

    // Two Choices: Pick the last item 
    // and do not pick the last item
    const pick = arr[n - 1] + maxLoot(arr, n - 2);
    const notPick = maxLoot(arr, n - 1);

    // Return the max of two choices
    return Math.max(pick, notPick);
}

const arr = [6, 7, 1, 3, 8, 2, 4];
const n = arr.length;
console.log(maxLoot(arr, n));
