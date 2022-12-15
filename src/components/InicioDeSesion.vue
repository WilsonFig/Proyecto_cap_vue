<template>
<section class="vh-100 ">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="../assets/logo1.png"
                class="img-fluid" alt="Sample image">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form >
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3 text-black">Iniciar Sesión</p>
                  
      
               
               
                </div>
      
           
              <form class="needs-validation" novalidate>  
                <div class=" " >
                  <label class="form-label" for="form3Example3  text-dark">Direccion de Correo Electronico</label>
                  <input type="email" id="form3Example3"  class="form-control form-control-lg"
                    placeholder="Ingrese su Correo" required />
                 <br>
                  <div class="valid-feedback">Caracteres Validos</div>
                <div class="invalid-feedback">Caracterers Invalidos</div>
      
                </div>
                
              
                <div class="form-outline  mb-3">
                  <label class="form-label" for="form3Example4">Contraseña</label>
                  <input type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Ingrese su Contraseña" required />
               
                  <div class="valid-feedback">Caracteres Validos</div>
                <div class="invalid-feedback">Caracterers Invalidos</div>
                </div>
                
      
                <div class="d-flex justify-content-between align-items-center">
               
                  <div class="form-check mb-0">
                  
                    
                    <div class="valid-feedback">Caracteres Validos</div>
                <div class="invalid-feedback">Caracterers Invalidos</div>
                  </div>
                  <a href="#/LandingProyecto" class="btn btn-light  ">Iniciar Sesion</a>
      
                <div class="text-center text-lg-start mt-4 pt-2">
                  
                   
               
                </div>
                </div>
              </form>
              </form>
            </div>
          </div>
        </div>
        </section>

</template>
<script>
export default {
  name: 'InicioDeSesion',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
section{
  background-color: rgba(255, 111, 0, 0.954);
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}

</style>

