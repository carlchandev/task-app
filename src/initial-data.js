const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: '行山券' },
    'task-2': { id: 'task-2', content: '運動券' },
    'task-3': { id: 'task-3', content: '婆婆券' },
    'task-4': { id: 'task-4', content: '飲茶券' },
    'task-5': { id: 'task-5', content: '咖啡券' },
    'task-6': { id: 'task-6', content: '睇戲券' },
    'task-7': { id: 'task-7', content: '唔嬲券' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '今日有咩券兌換?!',
      taskIds: [
        'task-1',
        'task-2',
        'task-3',
        'task-4',
        'task-5',
        'task-6',
        'task-7',
      ],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData;
