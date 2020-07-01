// define the possibility by * OR  / from currentValue
const CalculValuesPossibility = (ValuesPlayed, currentValue, valueMax) =>{

   //try to define the multiple of the currentValue

    let result = 0;
    let ValuesPossibility = [];
    

    for ( let i = 2 ; result <= valueMax; i++ ){

        //multiple the current value from 2 TO <= valuemax (100)
        result = currentValue*i;
        
        if(!ValuesPlayed.includes(result)&&result<=valueMax)
        //we push result into the valuepossibility tab
        ValuesPossibility.push(result);
    }

    //try to define the divisible from current value
    for (let i= 1; i <= currentValue; i++ )
    {
        if ( currentValue %i ===0)
        {
            //define the factor and set the value of the current value / i
            let factor = currentValue / i;
            //if valueplayed doesnt inclued the factor
            if (!ValuesPlayed.includes(factor))
            //we push factor value into the valueplayed tab
            ValuesPossibility.push(factor)
        }
    }
    return ValuesPossibility;
};

//const IAStrats
const IAStrats = (ValuesPossibility, valueMax, ValuesPlayed) => {
    
    //create a new tab containing each nb we can play and possibility 
    
    let values = ValuesPossibility.map(v => ({value: v, possibilities : CalculValuesPossibility(ValuesPlayed.concat( v ), v, valueMax)}));
    values.sort((a,b)=> a.possibilities.length - b.possibilities.length);
    //return the value with less possibility
    return values[0].value;
};

export {CalculValuesPossibility, IAStrats}

