<template>
  <div class="total">
    <div class="carrosel">
      <v-container>
        <h3 class="text-h3 text-center mb-2 mt-5"> 🐰Bem-vindo🐰</h3>
      </v-container >
        <v-carousel class="tamanho-img" hide-delimiters>
            <v-carousel-item  v-for="(item,i) in items" :key="i" :src="item.src">
            </v-carousel-item>
        </v-carousel>
    </div>
    <p class="texto">
      Aqui você consegue localizar vendedores de Ovos de Páscoa caseiros por todo o Brasil.
      Se você está interessado em adquirir ovos de páscoa clique em sou comprador, caso queira
      vender o seu próprio ovo de páscoa clique em sou vendedor.
    </p>
    <div class="botoes">
      <button role = "button" class="souVendedor">
          Sou vendendor
      </button>
      <button role = "button" class="Vendas">
          Sou comprador
      </button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'meuInicio',
  data () {
    return {
      items: [
        {
          src: 'https://todateen.com.br/wp-content/uploads/posts-astrallove/papobff/ovo-de-pascoa-ao-leite.jpg',
        },
        {
          src: 'https://img.itdg.com.br/tdg/images/blog/uploads/2018/03/ovo-recheio-creme-de-avela.jpg?w=1200',
        },
        {
          src: 'https://d1uz88p17r663j.cloudfront.net/resized/ecbb50e8869f9ba582952ae3e2f4d4f1_ovo-colher-brigadeiro-nesquik-receitas-nestle_1200_600.jpg',
        },
        {
          src: 'https://img.elo7.com.br/product/original/1CFFB66/ovo-de-pascoa-trufado-com-licor-amarula-300-gramas-ovo-de-pascoa-de-amarula.jpg',
        },
        {
          src: 'https://i.pinimg.com/originals/9a/54/30/9a543012ed8540009e28b11735c4de1b.jpg',
        },
        {
          src: 'https://img.clasf.com.br/2020/04/09/Ovos-de-Pscoa-trufados-20200409022836.5156960015.jpg',
        },
        {
          src: 'https://img.cybercook.com.br/receitas/898/ovo-de-pascoa-recheado-de-brigadeiro-de-maracuja-623x350.jpeg',
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2FdFxlIGgbjHjITSdFq5AULD8NcD7kvbgg&usqp=CAU',
        },
        {
          src: 'https://img.cybercook.com.br/receitas/879/como-fazer-kinder-ovo-caseiro-623x350.jpeg',
        },
        {
          src: 'https://rotaprincipal.com.br/wp-content/uploads/2019/04/selectachocolates_ovo-de-colher-cookies-cream_d.jpg'
        }
      ]
    }
  }
}      
  
</script>

<style scoped>
:root
{
  --primary: #BA68C8;
}
.tamanho-img
{
  width: 90%;
  margin: 20px;
  height: 50vh;
}
.texto /*Propriedades do texto*/
{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  justify-content: space-around;
  font-size: 24px;
  
}
.botoes /*Propriedades do botoes*/
{   
  display: flex;
  margin-top: 40px;
  justify-content: space-around;

}
.Vendas /*propriedades botão Vendas*/
{
  background-color: #BA68C8;
  border: 0px;
  border-radius: 4px;
  color:black;
  padding: 15px 30px;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.Vendas:hover /*propriedades botão Vendas ao passar o mouse*/
{
    background: linear-gradient((#BA68C8, #ba68c89b)100%);
    border: 2px solid rgba(255, 255, 255, 0.7);
    transition: 0.3s;
}

.souVendedor /*propriedades botão souVendedor*/
{
    background-color: #BA68C8;
    border: 0px;
    border-radius: 4px;
    color:black;
    padding: 15px 30px;
    font-size: 20px;
    font-family: Helvetica, Arial, sans-serif;
    cursor: pointer;
}
.souVendedor:hover /*propriedades botão souVendedor ao passar o mouse*/
{
    background: linear-gradient((#BA68C8, #ba68c89b)100%);
    border: 2px solid rgba(255, 255, 255, 0.7);
    transition: 0.3s;
}

</style>
