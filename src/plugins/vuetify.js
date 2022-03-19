import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.purple.lighten2,
            secondary: colors.orange.lighten2,
            accent: colors.shades.white,
            background: colors.grey.lighten5,
          },
          dark: {
            primary:  colors.purple.lighten3,
            secondary: colors.white,
            background: colors.indigo.base,
          },
        },
      },
});
