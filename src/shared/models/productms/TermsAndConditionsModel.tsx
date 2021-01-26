import { IBaseEntity } from '@/shared/models/baseEntity.model'
import { ILanguage } from '@/shared/models/language.model'

export interface ITermsAndConditions extends IBaseEntity {
    agreeConditions?: boolean;
    agreePrivacyStatement?: boolean;
    conditionsLinkText?: ILanguage[];
    privacyStatementLinkText?: ILanguage[];
    linkToConditions?: string;
    linkToPrivacyStatement?: string;
}

export class TermsAndConditions implements ITermsAndConditions {
  constructor (
    public agreeConditions?: boolean,
    public agreePrivacyStatement?: boolean,
    public conditionsLinkText?: ILanguage[],
    public privacyStatementLinkText?: ILanguage[],
    public linkToConditions?: string,
    public linkToPrivacyStatement?: string
  ) {
  }
};
