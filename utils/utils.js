const calculatePossibleValues = (playedValues, currentValue, maxValue) =>{

    //On calcule les multiples et les divisibles de currentValue, et on les mets dans un tableau
    // On cherche les multiples < maxValue
    let possibleValues = [];
    let result = 0;
    for (let i=2; result<=maxValue; i++){
        result = currentValue*i;
        if(!playedValues.includes(result)&&result<=maxValue)
            possibleValues.push(result);
    }

    //On cherche les divisibles
    for (let i= 1; i <= currentValue; i++)
    {
        if (currentValue %i ===0)
        {
            let factor = currentValue / i;
            if (!playedValues.includes(factor))
                possibleValues.push(factor)
        }
    }
    return possibleValues;
};



const computerStrategy = (possibleValues, maxValue, playedValues) => {
    // On crée un nouveau tableau contenant pour chaque nombre qu'il est possible de jouer, le nombre de possibilités au tour d'après
    let values = possibleValues.map(v => ({value: v, possibilities : calculatePossibleValues(playedValues.concat(v),v,maxValue)}));
        values.sort((a,b)=> a.possibilities.length - b.possibilities.length);

    //On retourne la valeur avec le moins de possibilités
    return values[0].value;
};

export {calculatePossibleValues, computerStrategy}

