function produceDrivingRange(blockRange) {
  return function(start, end) {
    totalBlocks = Math.abs((parseInt(end) - parseInt(start)));
    if (totalBlocks > blockRange) {
      return `${Math.abs(blockRange - totalBlocks)} blocks out of range`;
    } else {
      return `within range by ${Math.abs(totalBlocks - blockRange)}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return total * percent;
  }
}

function createDriver() {
  driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
