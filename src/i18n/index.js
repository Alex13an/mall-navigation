import ru from './ru';
import en from './en';

const defaultLng = 'ru';

const config = {
  lng: defaultLng,
  fallbackLng: 'en',
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
};

export default config;
