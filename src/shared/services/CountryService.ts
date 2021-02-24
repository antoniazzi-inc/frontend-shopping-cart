import BaseEntityService from '@/shared/services/baseEntityService'
import { ICountry } from '@/shared/models/country.model'

export default class CountryService extends BaseEntityService<ICountry> {
  private static instance: CountryService;

  private constructor () {
    super('api/administrationms/api/countries')
  }

  public static getInstance (): CountryService {
    if (!CountryService.instance) {
      return new CountryService()
    }
    return CountryService.instance
  }
}
