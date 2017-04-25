export class CounterService {
  activeToInactiveCount = 0;
  inactiveToInactiveCount = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCount++;
    console.log(`activeToInactiveCount: ${this.activeToInactiveCount}`);
  }

  incrementinactiveToInactive() {
    this.inactiveToInactiveCount++;
    console.log(`inactiveToInactiveCount: ${this.inactiveToInactiveCount}`);
  }

}
