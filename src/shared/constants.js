// 是否已通过顶部栏询问过用户设置语言
export const INQUIRED_LOCALE_SETTING_KEY = 'locale_setting_inquired';

export const RISE_FALL_STYLE_KEY = 'style_of_rise_and_fall';

export const SUPPORTED_LOCALES = [
  { value: 'en-US', key: 'english' },
  { value: 'zh-CN', key: 'chinese' },
];

export const SUPPORTED_RISE_FALL_STYLES = [
  { value: 'green-up-red-down', key: 'GURD' },
  { value: 'green-down-red-up', key: 'GDRU' }
];
