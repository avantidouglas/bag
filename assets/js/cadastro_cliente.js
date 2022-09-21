var div = document.getElementById("add_client");
div.onclick = function(){
    escondeCorpo();
    abreCriacaoCliente()
}

function escondeCorpo() {
    var ob = document.getElementById("corpo");
    ob.classList.add("escondido");
}

function abreCriacaoCliente() {
    let html =
    `<div class="col-md-12 mb-lg-0 mb-4">
      <div class="card-header pb-0 p-3">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <h6 class="mb-0">Insira os dados do novo cliente:</h6>
          </div>
          <div class="col-6 text-end">
            <a class="btn bg-gradient-dark mb-0" href="javascript:;">
              <i class="material-icons text-sm">add</i>&nbsp;&nbsp;Adicionar Cliente </a>
          </div>
        </div>
      </div>
      <div class="card-body p-3">
        <div class="row">
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input type="text" class="form-control" placeholder="Emai do Cliente">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input type="text" class="form-control" placeholder="Nome completo do Cliente">
                </div>
            </div>
            
        </div>
        <div class="row mt-2">
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input type="text" class="form-control" placeholder="Endereço Completo do Cliente">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input id="telefone_cliente" type="text" class="form-control" placeholder="Telefone do Cliente">
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input id="cpf_cliente" type="text" class="form-control" placeholder="CPF do Cliente">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input id="cnpj_cliente" type="text" class="form-control" placeholder="CNPJ da Empresa do Cliente">
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-6">
                <div class="input-group input-group-outline">
                    <input id="nasc_cliente" type="text" class="form-control" placeholder="Nascimento do Cliente">
                </div>
            </div>
        </div>
      </div>
  </div>`;

    let div = document.createElement('div');
    div.innerHTML = html;
    document.getElementById('corpo-maior').appendChild(div);

    $('#nasc_cliente').mask('00/00/0000');
    $('#cpf_cliente').mask('000.000.000-00', {reverse: true});
    $('#cnpj_cliente').mask('00.000.000/0000-00', {reverse: true});
    $('#telefone_cliente').mask('(00) 00000-0000');
}