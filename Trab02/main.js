function grupos(){
    var p = document.getElementsByClassName('grupo');
    var filhos = p.childNodes;
    for (i = filhos.length - 1; i >= 0; i--){
        if ( filhos[i].tagName == 'li') {
            p.removeChild( filhos[i]);
        }
    }

    var li = document.createElement('li');
    li.innerHTML = 'seis';
    p.appendChild(li);

    var li = document.createElement('li');
    li.innerHTML = 'sete';
    p.appendChild(li);
}