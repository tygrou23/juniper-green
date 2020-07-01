// define the possibility by * OR  / from currentValue
const CalculValuesPossibility = (playedValues, currentValue, maxValue) =>{

    // On cherche les multiples < maxValue
    let ValuesPossibility = [];
    let result = 0;
    for (let i=2; result<=maxValue; i++){
        result = currentValue*i;
        if(!playedValues.includes(result)&&result<=maxValue)
        ValuesPossibility.push(result);
    }

    //On cherche les divisibles
    for (let i= 1; i <= currentValue; i++)
    {
        if (currentValue %i ===0)
        {
            let factor = currentValue / i;
            if (!playedValues.includes(factor))
            ValuesPossibility.push(factor)
        }
    }
    return ValuesPossibility;
};



const IAStrats = (ValuesPossibility, maxValue, playedValues) => {
    // On crée un nouveau tableau contenant pour chaque nombre qu'il est possible de jouer, le nombre de possibilités au tour d'après
    let values = ValuesPossibility.map(v => ({value: v, possibilities : CalculValuesPossibility(playedValues.concat(v),v,maxValue)}));
        values.sort((a,b)=> a.possibilities.length - b.possibilities.length);

    //On retourne la valeur avec le moins de possibilités
    return values[0].value;
};

export {CalculValuesPossibility, IAStrats}

