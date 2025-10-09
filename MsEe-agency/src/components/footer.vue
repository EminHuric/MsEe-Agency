<template>
    <div class="footer">


        <hr class="line">
        <p class="msee">© 2025 MsEe</p>

    </div>
</template>
<style scoped>
.msee {
    color: white;
    position: absolute; 
    bottom: 40px;
    margin-left: 20%;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.line {
    position: absolute; 
    bottom: 100px;
    left: 18%;
    width: 50%;
    margin: 0;   
    border: 2px solid orange;
    width: 68%;
}
.footer {
    border: 3px solid rgb(8, 5, 1);
    position: relative;
    bottom: 0px;
    margin-top: 350px;
    height: 500px;
    width: 100%;
    background-color: rgb(10, 6, 1);
}

@media (max-width: 420px) {
    .footer {
        width: 100%;
        background-color: rgb(14, 8, 2);
        border: none;
        margin-top: 250px;
    }
}

@media (min-width: 421px) and (max-width: 533px) {
    .footer {
        width: 100%;
        background-color: rgb(14, 8, 2);
        border: none;
        margin-top: 250px;
    }
}

@media (min-width: 533px) and (max-width: 754px) {
    .footer {
        width: 100%;
        background-color: rgb(14, 8, 2);
        border: none;
        margin-top: 250px;
    }
}

@media (min-width: 755px) and (max-width: 768px) {
    .footer {
        width: 100%;
        background-color: rgb(14, 8, 2);
        border: none;
        margin-top: 250px;
    }
}

@media (min-width: 768px) and (max-width: 875px) {
    .footer {
        width: 100%;
        background-color: rgb(14, 8, 2);
        border: none;
        margin-top: 250px;
    }
}
</style>