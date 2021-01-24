export interface Country {
  iso?: string;
  iso3?: string;
  numCode?: string;
  phoneCode?: string;
  nlName?: string;
  enName?: string;
}

export class CountryModel implements Country {
  constructor (
    public iso?: string,
    public iso3?: string,
    public numCode?: string,
    public phoneCode?: string,
    public nlName?: string,
    public enName?: string
  ) {
    this.enName = this.enName ? this.enName : undefined
  }
}
