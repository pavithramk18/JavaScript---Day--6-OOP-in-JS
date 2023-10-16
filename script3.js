//write a class to calculate the uber price.

console.log("Class to calculate the uber price.");

class uber {
  constructor(basfare, kilometer, costperkm, totalfare) {
    this.basfare = basfare;
    this.kilometer = kilometer;
    this.costperkm = costperkm;
    this.totalfare = totalfare;
  }

  getfare() {
    var result = (this.basfare +(this.kilometer * this.costperkm));
    return result;
  }
}

var totalcost = new uber(29, 45.7, 20);
console.log("Total fare for what you travelled on Uber is "+ totalcost.getfare());
