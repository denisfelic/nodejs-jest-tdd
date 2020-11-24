# TDD com Jest em JavaScript

## Instalação
```
$ npm i jest -D 
```
## Utilização

### Salvar o arquivo com o seguinte formato

```
  pessoa.teste.js
```

### A descrição do teste deve seguir o seguinte padrão:
 - DEVE => QUANDO
 - SHOUND => WHEN

 Ex: "Deve retornar zero quando numero passado for maior que 20"

```
 describe('Nome do conjunto de testes', () => {
   it('Deve retornar zero quando numero passado for maior que 20', () => {
      expect(classe.metodo(parametro)).toEqual(0)
   })
   
  it('Deve retornar zero quando numero passado for maior que 20', () => {
      expect(classe.metodo(parametro)).toEqual(0)
   })

   varios outros testes...
 })
```


### Comandos 
```
  $ npx jest
```

```
  $ npx jest --watchAll
```