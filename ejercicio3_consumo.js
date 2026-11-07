function consultaClima(ciudad){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(!ciudad || ciudad.trim() === " "){
                reject(`Error: Debes ingresar una ciudad`);
                return;
            }else{
                const clima ={
                    ciudad: ciudad,
                    temperature: "24 C",
                    condicion: "Soleado"
                }
                resolve(clima);
            }

        }, 1500);
    });
}

async function mostrarClima(ciudad){
    try{
        const clima = await consultaClima(ciudad);
        console.log("***CONSULTA DE CLIMA***");
        console.log("Ciudad: " + clima.ciudad);
        console.log("Temperatura: " + clima.temperature);
        console.log("Condición: " + clima.condicion);
    }catch(error){
        console.log(error);
    }
}

mostrarClima("Quito");
mostrarClima("");