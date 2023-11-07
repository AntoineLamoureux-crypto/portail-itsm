import _ from 'lodash';

export default function mergeThemes(defaultTheme, userTheme) {
  return _.merge(defaultTheme, userTheme);
}
