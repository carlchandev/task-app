const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Dino God' },
    'task-2': { id: 'task-2', content: 'Derrick God' },
    'task-3': { id: 'task-3', content: 'Andy God' },
    'task-4': { id: 'task-4', content: 'Nic God' },
    'task-5': { id: 'task-5', content: 'Dragon God' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Gods of the World',
      taskIds: [
        'task-1',
        'task-2',
        'task-3',
        'task-4',
        'task-5',
      ],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData;
