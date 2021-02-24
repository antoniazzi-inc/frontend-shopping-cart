import BaseEntityService from '@/shared/services/baseEntityService'
import { User } from '@/shared/models/user.model'

export default class RelationService extends BaseEntityService<User> {
  private static instance: RelationService;

  private constructor () {
    super('/api/relationms/api/relations')
  }

  public static getInstance (): RelationService {
    if (!RelationService.instance) {
      return new RelationService()
    }
    return RelationService.instance
  }

  public async login (entity: any): Promise<any> {
    debugger
    return new Promise<any>(resolve => {
      this.postRequest('/api/auth/login', entity).then((resp: any) => {
        resolve(resp)
      })
    })
  }
}
