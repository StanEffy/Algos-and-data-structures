function sameFrequency(a, b){
    // good luck. Add any arguments you deem necessary.
    let a_str = a.toString();
    let b_str = b.toString();

    if(a_str.length !== b_str.length) return false;

    let keys_a = {}
    let keys_b = {}

    for(let i = 0; i < a_str.length; i++){
        keys_a[a_str[i]] ? keys_a[a_str[i]]++ : keys_a[a_str[i]] = 1
    }

    for(let i = 0; i < b_str.length; i++){
        keys_b[b_str[i]] ? keys_b[b_str[i]]++ : keys_b[b_str[i]] = 1
    }

    for(let key in keys_a){
        if (keys_a[key] !== keys_b[key]) return false
    }

    return true
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
