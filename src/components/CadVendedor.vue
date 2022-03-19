<template>
    <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
            <h1
            class="text-center display-1 text--accent-3"
            >Faça seu cadastro</h1>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Este campo é obrigatório']"
            :error-messages="errorMessages"
            label="Nome completo"
            placeholder="João Paulo"
            required
          ></v-text-field>

          <v-text-field
            ref="nameloja"
            v-model="nameloja"
            :rules="[() => !!nameloja || 'Este campo é obrigatório']"
            :error-messages="errorMessages"
            label="Nome da loja"
            placeholder="Doceria da João"
            required
          ></v-text-field>

          <v-text-field
            ref="address"
            v-model="address"
            :rules="[
              () => !!address || 'Este campo é obrigatório',
              () => !!address && address.length <= 25 || 'Endereço deve ter 25 caracteres',
              addressCheck
            ]"
            label="Endereço"
            placeholder="Rua Páscoa, 123"
            counter="25"
            required
          ></v-text-field>

          <v-text-field
            ref="city"
            v-model="city"
            :rules="[() => !!city || 'Este campo é obrigatório', addressCheck]"
            label="Cidade"
            placeholder="São Paulo"
            required
          ></v-text-field>

          <v-text-field
            ref="state"
            v-model="state"
            :rules="[() => !!state || 'Este campo é obrigatório']"
            label="Estado"
            required
            placeholder="SP"
          ></v-text-field>

          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[() => !!zip || 'Este campo é obrigatório']"
            label="CEP"
            required
            placeholder="15910-000"
          ></v-text-field>

          <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || 'Este campo é obrigatório']"
            :items="countries"
            label="País"
            placeholder="Selecionar..."
            required
          ></v-autocomplete>

         <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Digite uma senha"
            hint="A senha deve conter no mínimo 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

        </v-card-text>


        
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="Cadastrar"
          >
            Cadastrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
      name: "CadVendedor",

data () {
      return {
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Obrigatório colocar uma senha',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
        countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      errorMessages: '',
      name: null,
      nameloja: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail obrigatório',
        v => /.+@.+/.test(v) || 'Insira um e-mail válido',
      ],
      }
    },

    

    computed: {
      form () {
        return {
          name: this.name,
          nameloja: this.nameloja,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country,
          email: this.email,
          password: this.password
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      Cadastrar () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)

        })

      },
    },
  }
</script>

<style scoped>

h1{
    color: #BA68C8;
}

</style>