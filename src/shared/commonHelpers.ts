import Store from '@/store'
import RelationService from '@/shared/services/relationService'

export default {
  getMultiLangName (languages: any[]) {
    if (languages && languages.length) {
      const prodLang = languages.find(lang => lang.langKey === Store.state.currentLanguage)
      if (prodLang && prodLang.name) {
        return prodLang.name
      } else {
        return languages[0].name
      }
    } else {
      return ''
    }
  },
  getMultiLangDesc (languages: any[]) {
    if (languages && languages.length) {
      const prodLang = languages.find(lang => lang.langKey === Store.state.currentLanguage)
      if (prodLang && prodLang.description) {
        return prodLang.description
      } else {
        return languages[0].description
      }
    } else {
      return ''
    }
  },
  generatePassword () {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'
    for (let i = 0; i < 12; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
}
