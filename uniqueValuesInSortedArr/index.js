const countUniqueValues = (values) => {
    let value;
    let amount = 0;
    values.forEach(v => {
       if(v !== value) {
           amount++;
           value = v;
       }
    })
};

const countUniqueValuesPointers = (values) => {
    if(!values.length) return 0
    let i = 0;
    for(let j = 1; j < values.length; j++){
        if(values[i] !== values[j]){
            i++;
            values[i] = values[j];
        }
    }
    return i + 1;
};

