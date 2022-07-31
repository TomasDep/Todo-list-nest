import { v4 as uuid } from "uuid";

import { IList } from "src/lists/interfaces/list.interface";

export const LISTS_SEED: IList[] = [
  {
    id: uuid(),
    title: 'title 1',
    tasks: 'tasks 1'
  },
  {
    id: uuid(),
    title: 'title 2',
    tasks: 'tasks 2'
  },
  {
    id: uuid(),
    title: 'title 3',
    tasks: 'tasks 3'
  },
];