function verificarEdad(edad){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(edad > 18){
                resolve(`Acceso concedido. Bienvendio a la plataforma`);
            }else{
                reject("Acceso denegado. Registro permitido solo para mayores de 18 años");
            }

        }, 1000);
    });
}

verificarEdad(20).then((mensage) => {
    console.log(mensage);
    }).catch((error) => {
        console.log(error);
    });
    
verificarEdad(15).then((mensage) => {
    console.log(mensage);
    }).catch((error) => {
        console.log(error);
    });