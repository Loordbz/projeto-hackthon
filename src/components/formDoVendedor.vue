<template>
    <div>
        <p>Formulário de adição de produtos</p>
        <div>
            <form id="formularioDoVendedor">
                
                <div>
                    <label for="nomeDaLoja">Nome da sua loja:</label>
                    <input type="text" id="nomeDaLoja" v-model="nomeDaLoja" placeholder="Qual é o nome da sua loja?"/> 
                </div>
                
                <div>
                    <label for="produto">Ovo e seu sabor:</label>
                    <input type="text" id="produto" v-model="produto" placeholder="Qual ovo de páscoa você ira anunciar?"/> 
                </div>

                 <div>
                    <label for="endereço">Endereço:</label>
                    <input type="text" id="endereço" v-model="endereço" placeholder="Qual é o endereço da sua loja?"/> 
                </div>

                 <div>
                    <label for="preço">Preço do seu produto:</label>
                    <input type="number" id="preço" v-model="preço" placeholder="Qual é o preço do seu produto?"/> 
                </div>

                <div>
                    <button>Enviar dados</button>
                </div>




            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"formDoVendedor"
}
</script>

<style scoped>

</style>