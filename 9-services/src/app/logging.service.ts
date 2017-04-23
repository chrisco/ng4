export class LoggingService {
  logStatusChange(status: string) {
    console.log(`A server status changed. New status: ${status}`);
  }
}
