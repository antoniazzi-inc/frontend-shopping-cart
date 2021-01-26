import { IBaseEntity } from '@/shared/models/baseEntity.model'

export interface IAnnouncement extends IBaseEntity {
    sendBeforeNew?: string;
}

export class Announcement implements IAnnouncement {
  constructor (
    public sendBeforeNew?: string
  ) {
  }
};
