import type { OptionShape } from '@alfalab/core-components/select/typings';

import type { ICommonLibWithEducationType as IEducationTypeDTO } from '@/store/reducers/libSlice';
import type { IIprData } from '@/store/reducers/iprSlice';

interface ITasksProps {
  isEmployee: boolean;
  handleTaskValuesChange?: any;
  iprCurrentData: IIprData | null;
}

interface ICoursesOption extends OptionShape {
  value: IEducationTypeDTO;
}

interface IEducation {
  status: boolean;
  education: {
    id: number;
    name: string;
    urlLink: string;
  };
}

interface IFormData {
  id: number;
  name: string;
  closeDate: string;
  description: string;
  education: IEducation[];
  supervisorComment: string;
  commentOfEmployee: string;
}

interface INewTask {
  taskTitle: string;
  closeDate: string;
  description: string;
  courses: string;
  comment: string;
}
// interface IEducation {
// 	id: number;
// 	name: string;
// 	specialty: string;
// 	urlLink: string;
// }

// Не нужно, пример
// алис к id | name | specialty | urlLink
// type TCoursenOptionProp = keyof IEducationTypeDTO;

interface IFilesForTask {
  [taskId: string]: File[];
}

export type { ITasksProps, IEducation, IFormData, ICoursesOption, IEducationTypeDTO, IFilesForTask, INewTask };
