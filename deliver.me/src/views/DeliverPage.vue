<script>
import { getUserDeliver } from '@/CRUD/deliver/deliver';
import router from '@/router';
export default{
    data() {
        return {
            deliver: {}
        };
    },
    async mounted(){
        let res = await getUserDeliver(this.$store.state.user)
        if(res.message != "found")
            router.push("/")
        this.deliver = res.deliver
        console.log(res)
    }
}
</script>
<template>
<body class="container">
    <section class="row">
        <main class="col-12">
            <div class="card mt-4">
                <div class="card-body">
                    <div class="d-flex flex-row justify-content-center ">
                        <img src="" alt="profile-pic">
                    </div>
                    <div class="w-100 form-group">
                        <textarea class="w-100" contenteditable="true" v-model="this.$store.state.deliver.description">
                        </textarea>
                    </div>
                    <div class="d-flex flex-row justify-content-around mt-2">
                        <div>
                            <span class="mr-4">Avaliação:</span>
                            <span><input  class="w-25 ml-2" type="number" v-model="this.deliver.rating"/></span>
                        </div>
                        <div>
                            <button class="btn btn-success">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-title text-center">
                    <h6>Informações de Contato</h6>
                </div>
                <div class="card-body">
                    <table class="table table-stripe">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-title text-center">
                    <h6>Meios de pagamento</h6>
                </div>
                <div class="card-body">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                          <a class="nav-link active" data-bs-toggle="tab" href="#card">Cartão</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-bs-toggle="tab" href="#pix">PIX</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane container active" id="card">
                            <table class="table table-stripe text-center">
                                <thead>
                                    <tr>
                                        <th>Cartões aceitos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Visa</td>
                                    </tr>
                                    <tr>
                                        <td>MasterCard</td>
                                    </tr>
                                    <tr>
                                        <td>Cielo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane container fade" id="pix">
                            <table class="table table-stripe text-center">
                                <thead>
                                    <tr>
                                        <th colspan="2">Chaves pix</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Telefone</th>
                                        <td>111111111111111</td>
                                    </tr>
                                    <tr>
                                        <th>Aletaório</th>
                                        <td>111111111111111</td>
                                    </tr>
                                    <tr>
                                        <th>CPF</th>
                                        <td>111111111111111</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</body>
</template>