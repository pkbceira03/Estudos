var generateTrees = function(n) {
    if (n ===0) return [];
    
    function construir(inicio, fim){
        let listaArvores = []
        if (inicio>fim){
            listaArvores.push(null);
            return listaArvores;
        }

        for (let i = inicio; i <= fim; i++){
            let subLeft = construir(inicio, i-1);
            let subright = construir(i+1, fim);

            for(let l of subLeft){
                for(let r of subright){
                    let raiz = new TreeNode(i);
                    raiz.left = l;
                    raiz.right = r;

                    listaArvores.push(raiz)
                }
            }
        }
        return listaArvores;
    }

    return construir(1, n)
};