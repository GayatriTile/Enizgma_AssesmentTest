

export const STATUSES = {
    ACCEPTABLE: 'Acceptable',
    COMPLETED: 'Completed',
    IN_PROGRESS: 'In Progress',
    NOT_STARTED: 'Not Started',
}

export const TASK_DATA = [
    {
        id: '1',
        userName: 'User 1',
        dueDate: '2021-10-10',
        priority: 'High',
        comments: 'Misaligment Motor',
        status: STATUSES.ACCEPTABLE,
    },
    {
        id: '2',
        userName: 'User 2',
        dueDate: '2021-10-10',
        priority: 'High',
        comments: 'Rubin or friction Motor',
        status: STATUSES.COMPLETED,
    },
    {
        id: '4',
        userName: 'User 4',
        dueDate: '2021-10-10',
        priority: 'Low',
        status: STATUSES.NOT_STARTED,
    },
    {
        id: '5',
        userName: 'User 6',
        dueDate: '2021-10-10',
        priority: 'Normal',
        status: STATUSES.NOT_STARTED,
    },
    {
        id: '6',
        userName: 'User 7',
        dueDate: '2021-10-10',
        priority: 'Low',
        status: STATUSES.ACCEPTABLE,
        comments: 'Misaligment Motor',
    },
]