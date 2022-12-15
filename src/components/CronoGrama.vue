<!-- eslint-disable vue/valid-template-root -->
<template>
     <div class="posts">
    <h1 class="text-black">Cronograma de Actividades </h1>
    <div class="post">
      <img src="../assets/logo1.png" alt="Foto de Cuzco" width="500">
      <h2>Titulo del Post</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste sint amet aliquid, debitis vitae, praesentium adipisci laborum inventore facilis ut ducimus voluptate blanditiis non neque quod dolorem quisquam quo.</p>
    </div>
    
    <div class="post">
      <img src="../assets/logo1.png" alt="Foto de Cuzco" width="500">
      <h2>Basquetball</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste sint amet aliquid, debitis vitae, praesentium adipisci laborum inventore facilis ut ducimus voluptate blanditiis non neque quod dolorem quisquam quo.</p>
    </div>

    <div class="post">
      <img src="#" alt="Foto de Cuzco" width="500">
      <h2>Titulo del Post</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste sint amet aliquid, debitis vitae, praesentium adipisci laborum inventore facilis ut ducimus voluptate blanditiis non neque quod dolorem quisquam quo.</p>
    </div>

    <div class="post">
      <img src="#" alt="Foto de Cuzco" width="500">
      <h2>Titulo del Post</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste sint amet aliquid, debitis vitae, praesentium adipisci laborum inventore facilis ut ducimus voluptate blanditiis non neque quod dolorem quisquam quo.</p>
    </div>

    <div class="post">
      <img src="#" alt="Foto de Cuzco" width="500">
      <h2>Titulo del Post</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste sint amet aliquid, debitis vitae, praesentium adipisci laborum inventore facilis ut ducimus voluptate blanditiis non neque quod dolorem quisquam quo.</p>
    </div>

    <div class="post">
      <img src="#" alt="Foto de Cuzco" width="500">
      <h2>Titulo del Post</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iste sint amet aliquid, debitis vitae, praesentium adipisci laborum inventore facilis ut ducimus voluptate blanditiis non neque quod dolorem quisquam quo.</p>
    </div>

    <div class="text-center text-lg-start mt-4 pt-2">
     <a href="#/LandingProyecto" class="btn btn-success ">Regresar</a>
 </div>
</div>
</template>


<style scoped>
*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(0, 0, 0);
  font-family: sans-serif;
}

.posts {
  width: 100%;
  max-width: 1200px;
  margin: auto;

}

.posts h1 {
  margin: 25px 10px 15px;
  color: white;
}

.post {
  width: 46%;
  background: #f1f1f1;
  overflow: hidden;
  margin: 20px 10px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  float: left;
}

.post img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.post h2 {
  padding: 10px;
}

.post p {
  margin-bottom: 10px;
  text-align: justify;
  padding: 10px;
}

@media only screen and (max-width: 678px) {
  .post {
    width: 96%;
    margin: 2%;
  }
}


</style>

<script>
export default {
  name: 'CronoGrama',
  props: {
    msg: String
  }
}
</script>