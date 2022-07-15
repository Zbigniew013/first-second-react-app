const stringContains = (stringOne, stringTwo) => {
 
  if(stringOne.toLowerCase().includes(stringTwo.toLowerCase())) {
    return true;
    } else {
    return false;
    }
};

export default stringContains;