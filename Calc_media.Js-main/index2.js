function somar(){

    var media= document.getElementById('media')

    var b1= document.getElementById9('barra1')

    var b2= document.getElementById9('barra2')

    var b3= document.getElementById9('barra3')

    var b1= Number(br1.value)

    var b2= Number(br1.value)

    var br3= Number(br1.value)

    var valor= (br1 * 2+br2 * 3+br3 * 5)/10

    document.getElementById('media').innerHTML=valor

    var resultado= (valor>=60? 'Você atingiu a média!': 'Você não atingiu a média!')

    document.getElementById('aprovado-reprovado').innerHTML= resultado

    if(valor>60){

        document.getElementById('media').style.color='green'

        document.getElementById('aprovado-reprovado').style.color='green'
        
    }
}

 else{

    document.getElementById('media').style.color='red'

    document.getElementById('aprovado-reprovado').style.color='red'
}