/*
 *
 *  *
 *  *  * Copyright 2018-2021 Antoniazzi Holding BV
 *  *  *
 *  *  * This program is free software: you can redistribute it and/or modify it
 *  *  * under the terms of the GNU General Public License as published by
 *  *  * the Free Software Foundation, either version 3 of the License,
 *  *  * or (at your option) any later version.
 *  *  *
 *  *  * This program is distributed in the hope that it will be useful,
 *  *  * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  *  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  *  * GNU General Public License for more details.
 *  *  *
 *  *  * You should have received a copy of the GNU General Public License
 *  *  * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *  *
 *
 */

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
