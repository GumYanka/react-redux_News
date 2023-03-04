import * as Yup from "yup";
import i18n from '../localization/i18n'

const validationSchema = Yup.object().shape({
  username: Yup.string().required(i18n.t('username-required') as string).min(4, i18n.t('username-min') as string),
  password: Yup.string().required(i18n.t('password-required') as string).min(3, i18n.t('password-min') as string),
});

export default validationSchema;