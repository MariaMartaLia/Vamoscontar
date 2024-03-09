function clicar(){
var n1=window.document.getElementById('n1')
var n2 =window.document.getElementById('n2')
var p1 = window.document.getElementById('p1')
var res=window.document.getElementById('res')

if (n1.value.length == 0 || n2.value.length == 0 || p1.value.length == 0){
  window.alert('[ERRO} reveja os dados')
} else {
    res.innerHTML =`Contando: ` 
   var n1= Number(n1.value)
   var n2= Number(n2.value)
   var n3 = Number(p1.value)
    for( let c= n1; c<=n2; c+=n3){
      res.innerHTML +=   `${c} \u{1F449}`
}
res.innerHTML +=`\u{1f3c1} `
}
}











/*
  }
  }*/
  /**/