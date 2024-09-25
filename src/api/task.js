import { TASK_DATA } from '../utils/task-data';

export function getTaskData(query) {
    // TODO: Mock Task Api
    return new Promise((resolve) => {
        setTimeout(() => {
            if (query) {
                resolve({
                    data: {
                        data: TASK_DATA.filter(item => {
                            if (item.status.includes(query)) return item
                        }),
                        message: "OK",
                        success: true,
                    },
                })
            } else {
                resolve({
                    data: {
                        data: TASK_DATA,
                        message: "OK",
                        success: true,
                    },
                })
            }
        }, 1000);
    });
}