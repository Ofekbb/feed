import { httpService } from './http.service.js';

export const taskService = {
    query,
    perform,
    toggleWorker,
    remove
  }

async function query() {
    try {
        const tasks = await httpService.get('task');
        return tasks;
    } catch {
        console.log('Couldnt get task')
    }
}

async function perform(task) {
    try {
        await httpService.put(`task/${task._id}/start`, task);
        return task;
    } catch {
        console.log('Couldnt get task')
    }
}

async function toggleWorker(isWorkerOn) {
    try {
        console.log('asking from back to toggle worker', isWorkerOn)
        await httpService.post(`task/toggleWorker`, {isWorkerOn});
    } catch {
        console.log('Cannot toggle worker')
    }
}

async function remove(taskId) {
    try {
        await httpService.delete(`task/${taskId}`);
    } catch {
        console.log('Couldnt get task')
    }
}