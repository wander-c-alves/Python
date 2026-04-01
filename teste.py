def maior_idade(idade: int) -> str:
    if idade >18:
        return f'{idade} é maior de idade'
    else: 
        return f'{idade} é menor de idade'
    
def main():
    try:

        idade_d = int(input('Digite a sua idade: '))
        resultado = maior_idade(idade_d)
        print(resultado)

    except ValueError:
        print('Erro!! Digite apenas numeros inteiros')


if __name__ == '__main__':
    main()
    



