# 944. [Excluir colunas para tornar a tabela classificada](https://leetcode.com/problems/delete-columns-to-make-sorted/description/)

Você recebe um array de nstrings strs, todas com o mesmo comprimento.

As cordas podem ser organizadas de forma que haja uma em cada linha, formando uma grade.

- Por exemplo, `strs = ["abc", "bce", "cae"]` pode ser organizado da seguinte forma:
    abc 
    bce 
    cae
Você deseja excluir as colunas que não estão ordenadas lexicograficamente . No exemplo acima ( indexado a partir de 0 ), as colunas 0 ( `'a'`, `'b'`, `'c'`) e 2 ( `'c'`, `'e'`, `'e'`) estão ordenadas, enquanto a coluna 1 ( `'b'`, `'c'`, `'a'`) não está, portanto você excluiria a coluna 1.

Retorne o número de colunas que você irá excluir .

## Exemplo 1:

    Entrada: strs = ["cba","daf","ghi"]
    Saída: 1
    Explicação: A grade tem a seguinte aparência: 
        cba 
        daf 
        ghi 
    As colunas 0 e 2 estão classificadas, mas a coluna 1 não está, portanto você só precisa excluir 1 coluna.

## Exemplo 2:

    Entrada: strs = ["a","b"]
    Saída: 0
    Explicação: A grade tem a seguinte aparência: 
    a 
    b A 
    coluna 0 é a única coluna e está ordenada, portanto você não excluirá nenhuma coluna.

## Exemplo 3:

    Entrada: strs = ["zyx","wvu","tsr"]
    Saída: 3
    Explicação: A grade tem a seguinte aparência: 
        zyx 
        wvu 
        tsr 
    Todas as 3 colunas não estão classificadas, portanto, você deve excluir todas as 3.
 - Restrições:

- `n == strs.length`
- `1 <= n <= 100`
- `1 <= strs[i].length <= 1000`
- `strs[i]` Consiste em letras minúsculas do alfabeto inglês.