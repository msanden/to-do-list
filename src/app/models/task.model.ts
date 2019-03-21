export class Task {
  description: string;
  priority: number;
  done: boolean = false;

  constructor(description: string, priority: number) {
  this.description = description;
  this.priority = priority;
 }

}
