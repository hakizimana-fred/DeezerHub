export class NotFoundError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'Route Not Found';
    this.status = 404;
  }
}
