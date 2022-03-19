<template>
    <v-app id="inspire">
    <v-main >
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-1"
                        >Faça seu login</h1>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="senha"
                            label="Senha"
                            name="password"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="primary" dark>Logar</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-card-text class="mt-12 mb-12 text-cadastro">
                        <h1 class="text-center display-1" >Você não possui um cadastro?</h1>
                        <h5
                          class="text-center text-cadastrar mt-12 title"
                        >Entre com seus dados pessoais e cadastre seus produtos</h5>
                      </v-card-text>
                      <div class="text-center btn-cadastrar">
                        <v-btn rounded outlined dark @click="step++" color="primary">Cadastre-se</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    export default {
        data: () => ({
            step: 1
        }),
        props: {
            source: String
        }
    };
</script>

<style scoped>

    .btn-cadastrar {
        margin-bottom: 10px;
    }

</style>