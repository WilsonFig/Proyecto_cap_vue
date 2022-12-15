<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
<form class=" needs-validation" novalidate action="#">
    <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal" data-backdrop="false">
                  Solicitar Charla
                </button>
    <!-- Modal -->
    <div class="modal fade  " id="exampleModal"    role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog  " role="document">
        <div class="modal-content  ">
          <div class="modal-header">
            <h5 class="modal-title fw-black text-align: center;" id="exampleModalLabel">SOLICITAR CHARLA</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> 
          </div>
          <div class="modal-body ">
            
            <div class="col-12">
              <div class="row-12 needs-validation">
                  
                  <br>
                  <div class="justify-content-center aling-items-center">
                  <div class="">Nombre y Apellidos Completos </div>
                </div>
                  <br>
                  
                  <div class="display:block">
                  <input type="text" class="form-control" placeholder="Ingrese Su Nombre Completo" aria-label="Nombre de usuario" aria-describedby="addon-wrapping" required>
                  </div>
                  
                  <br>
                  
                      <div class="col-12"> 
                        <div> Seleccione  Fecha  y Hora  </div>
                        <br>
                         <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
                      </div>

                      <br>
                      
  
                  
                  <div>Seleccione Profesional </div>
                  <br>
                  <div class="form-group">
                    
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option selected disabled>Seleccionar...</option>
                      <option>Pofe 1</option>
                      <option>Pofe 2</option>
                      <option>Pofe 3</option>
                      <option>Pofe 4</option>
                      <option>Pofe 5</option>
                    </select>
      
                
                 <br> 
                
                </div>
  
                  <div>Describa el porque de la Charla</div>
                  
                  <textarea  class=" form-control " rows="2" cols="" required></textarea>
                
                  
      
                  <div class="p-3">
                     
              </div>
              </div>
            
          </div>
          <div class="modal-footer ">
            <button type="button" class="btn btn-secondary position-relative" data-dismiss="modal">Cancelar</button>
            <button type="submit" class="btn btn-success position-relative" >Solicitar Charla</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </form>
  
</template>

<script>
export default {
  name: 'ModalSolicitarCharla',
  props: {
    msg: String
  }
}

</script>