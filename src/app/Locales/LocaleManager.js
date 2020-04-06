import enUs from './en_US';
import ruRu from './ru_RU';

class LocaleManager {
  constructor() {
    this.ru_RU = ruRu;
    this.en_US = enUs;
  }

  updateLocale(keyRows, localeCode) {
    keyRows.forEach((keyRow) => {
      keyRow.filter((key) => {
        if (key.key.type === 'char') {
          return key;
        }
        return null;
      }).forEach((key) => {
        const locale = this[localeCode];
        const keyLocale = locale[key.code];
        key.key.updateChar(keyLocale[0], keyLocale[1]);
      });
    });
  }
}

export default LocaleManager;
