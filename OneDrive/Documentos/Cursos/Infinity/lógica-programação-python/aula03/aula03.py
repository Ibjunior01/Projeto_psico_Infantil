"""
contador = 1 
while contador <= 10: #While verifica a condição antes de cada iteração. 
    print(contador)
    contador += 1 #incrementa o contador em 1

soma = 0 
numero = 1
while numero <= 100:
    soma += numero
    numero += 1
    print(f"A soma dos números de 1 a 100 é: {soma}")


numero = int(input("Digite um número: "))
contador = 1
while contador <=10:
    resultado = numero * contador
    print(f"{numero} x {contador} = {resultado}")
    contador += 1

contador = 10
while contador >=1:
    print(contador)
    contador -= 1


#Interatividade e Verificação de Entrada
senha = " "
while senha != "12345":
    senha = input("Digite a senha: ")
    if senha == "12345":
    else:
        print("Senha incorreta, tente novamente.")


# Solicita um número ao usuário
numero = int(input("Digite um número: "))

# Inicializa o contador
contador = 1

# Usa um laço while para contar de 1 até o número inserido, exibindo apenas os ímpares
while contador <= numero:
    if contador % 2 != 0:
        print(contador)
    contador += 1  # Incrementa o contador em 1

soma = 0
while True:
    numero = float(input("Digite um número (negativo para parar): "))
    if numero < 0:
        break
    soma += numero 
    print(f"A soma total positivaa é: {soma}")


soma = 0
numero = 1
while soma < 50:
    soma += numero
    numero += 1
print(f"A soma dos números é: {soma}")


numero = int(input("Digite um número entre 1 e 10: "))
while numero < 1 or numero > 10:
    print("Valor invalido!")
numero = int(input("Digite um número entre 1 e 10: ")) 
print(f"Você inseriu um número válido: {numero}")

senha_correta = "12345abcd"
senha = input("Digite sua senha: ")
while senha != senha_correta:
    print("Senha incorreta!")
    senha = input("Digite sua senha: ")
print("Senha correta!")

"""