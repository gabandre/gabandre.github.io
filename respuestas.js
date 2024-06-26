function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, nota;

    // 1a pregunta
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p21').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p31').checked==true) {p3=1}
    else {p3=0}
    // 4a pregunta
    if (document.getElementById('p41').checked==true) {p4=1}
    else {p4=0}
    // 5a pregunta
    if (document.getElementById('p55').checked==true) {p5=1}
    else {p5=0}

    //Categoria de Intervalos

    if (document.getElementById('p66').checked==true) {p6=1}
    else {p6=0}
    // 6a pregunta
    if (document.getElementById('p77').checked==true) {p7=1}
    else {p7=0}
    // 7a pregunta
    if (document.getElementById('p88').checked==true) {p8=1}
    else {p8=0}
    // 8a pregunta
    if (document.getElementById('p99').checked==true) {p9=1}
    else {p9=0}
    // 9a pregunta
    if (document.getElementById('p1010').checked==true) {p10=1}
    else {p10=0}

//10a
    if (document.getElementById('p1111').checked==true) {p11=1}
    else {p11=0}
    // 11a pregunta
    if (document.getElementById('p1212').checked==true) {p12=1}
    else {p12=0}

    
    

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12;
    
    
    return nota;
    
}

 
