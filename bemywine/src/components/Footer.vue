<template>
<div class="fondo">
    <div class="row">
            <div class="col-6 menuArriba">
                <div class="otro">
                <h1 class="titulo">Nuestro Contenido</h1>
                
                <a href="#" class="sub">Vinos</a><br>
                <a href="#" class="sub">Regalos</a><br>
                <a href="#" class="sub">Blog</a><br>
                <a href="#" class="sub">Quienes somos</a>
                </div>
            </div>
            <div class="col-3 preguntas">
                <h1 class="subTitulo">Ayuda</h1>
                <hr>
                <a href="#" class="sub">Preguntas frecuentes</a><br>
                <a href="#" class="sub">Metodos de pagos</a><br>
                <a href="#" class="sub">Envios</a><br>
            </div>
            <div class="col-3 redes">
                <h1 class="subTitulo">Redes Sociales</h1>
                <hr>
                <a href="#" class="sub">Facebook</a><br>
                <a href="#" class="sub">Instagram</a><br>
                <a href="#" class="sub">Whatsapp: 686-666-6666</a><br>
            </div>
    </div>
    <nav class="navbar navbar-light  footer">
        <span class="navbar-text">
            ©2021 by Be my Wine 
        </span>
    </nav>
</div>

</template>
<style scoped>
.fondo{
   padding-top: 10vh;
    background-color: rgb(219, 219, 219);
}
.footer{
    margin-top: 50px;
    border-top:double;
}
.menuArriba{
    text-align:center;
}
.titulo{
    font: italic normal normal 36px/1.4em didot-w01-italic,serif;
}
.otro{
    margin-left: 30%;
    width: 50%;
    text-align: left;
}
.sub{
    width: 10%;
    color: gray;
    text-align: left;
    font: italic normal normal 16px/1.4em didot-w01-italic,serif;
}
.subTitulo{
    font: italic normal normal 26px/1.4em didot-w01-italic,serif;
}

</style>