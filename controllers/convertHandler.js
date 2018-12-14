/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getFirstLetterIndex = function(input) {
    const regex = /[a-zA-Z]/;
    return input.indexOf(input.match(regex));
  }
  this.getNum = function(input) {
    let result;
    const firstLetterIndex = this.getFirstLetterIndex(input);

    if (firstLetterIndex == 0) return 1;    
    result = input.slice(0, firstLetterIndex);

    if(result.includes('//')) return 'invalid number';
    try{
     result = eval(result);
    }catch(err) {
      result = 'invalid number';
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    const firstLetterIndex = this.getFirstLetterIndex(input);

    if (firstLetterIndex < 0 ) return 'invalid unit';
    
    const unit = input.slice(firstLetterIndex);
    const validUnit = validUnits.includes(unit);
    
    validUnit ? result = unit : result = 'invalid unit';
    
    return result;
  };
  this.getReturnUnit = function(initUnit) {
    const initUnitLowerCase = initUnit.toLowerCase();
    const units = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    }
    
    return units[initUnitLowerCase];
  };

  this.spellOutUnit = function(unit) {
    const unitLowerCase = unit.toLowerCase();
    const units = {
      gal: 'gallons',
      l: 'litters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms'
    }

    return units[unitLowerCase];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const convertTable = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg
    };
    
    // round to 5 decimal digits
    const result = Math.round(initNum * convertTable[initUnit.toLowerCase()] * 10**5) / 10**5;

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {   
    if (initNum == 'invalid number') {
      return initNum;
    }
    if (initUnit == 'invalid unit') {
      return initUnit;
    }
    if (initNum == 'invalid number' && initUnit == 'invalid unit') {
      return 'invalid number and unit';
    } else {
    return initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    }
  };
  
}

module.exports = ConvertHandler;
