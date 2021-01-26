import { Moment } from 'moment'
import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { ICourseLanguage } from './CourseLanguageModel'
import { ITypeCourse } from '@/shared/models/productms/TypeCourseModel'

export interface ICourse extends IBaseEntity {
    pageContentJson?: string;
    courseLanguages?: ICourseLanguage[];
    typeCourses?: ITypeCourse[];
}

export class Course implements ICourse {
  constructor (
    public id?: number,
    public createdOn?: Moment,
    public updatedOn?: Moment,
    public version?: number,
    public administrationId?: number,
    public pageContentJson?: string,
    public courseLanguages?: ICourseLanguage[],
    public typeCourses?: ITypeCourse[]
  ) {
  }
};
