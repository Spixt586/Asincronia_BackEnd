function retirarDinero(monto){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const saldoDisponible = 500;

            if(monto > 0 && monto <=saldoDisponible){
                const saldoRestante = saldoDisponible - monto;
                resolve(`Retiro exitoso de $${monto}` + ` saldo restante: $${saldoRestante}`);
            }else{
                reject("Fondos insuficientes limite de retiro: $500");
            }

        }, 1500);
    });
}

retirarDinero(200).then((mensage) => {
    console.log(mensage);
    }).catch((error) => {
        console.log(error);
    });
    
retirarDinero(600).then((mensage) => {
    console.log(mensage);
    }).catch((error) => {
        console.log(error);
    });
    