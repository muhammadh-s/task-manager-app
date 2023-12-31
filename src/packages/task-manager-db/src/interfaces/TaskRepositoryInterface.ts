import { Task } from '../entities';

export interface TaskRepositoryInterface {
  save(task: Task): Promise<void>;
  findById(id: number): Promise<Task | null>;
  // Add other query methods if needed
}
