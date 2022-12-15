<template>
<div class="header">
  <div class="img">
<a href="#/LandingProyecto" class="logo"><img src="../assets/logo2.png" width="80%" ></a>
</div>
<div class="header-right">
<a href="#/LandingProyecto" class="Cronograma">Acerca de Nosotros</a>
<a href="#/CronoGrama">Cronograma</a> 
<a href="#/ModalSolicitarCharla">Solicitar Charla</a>
<a href="#/ModalEjemplo">Contactanos</a>      
<a href="#/InicioDeSesion" class="login">Iniciar Sesion</a>
</div>
</div>
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>
<style scoped>
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
.header {
overflow: hidden;
background-color: rgb(11, 137, 59);
padding: 20px 20px;
}
.img{
height: 10%;
 width:  25%;
}
.header a {
float: left;
color: black;
text-align: center;
padding: 12px;
text-decoration: none;
font-size: 18px;
line-height: 30px;
border-radius: 4px;
}

.header a:hover {
background-color: rgb(34, 124, 84);
color: black;
}
.header a.login {
background-color: #0baf21;
color: white;
}   
.header-right {
float: right;
align-items: center;
} 
@media screen and (max-width: 800px) {
.header a {
float: none;
display: block;
text-align: left;
}.header .logo{
width: 100%;
display:flex;
text-align: right;	 
}.header-right {
float: none;
}
}
</style>
