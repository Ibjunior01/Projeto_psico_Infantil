#Atividade 09
numero = int(input("Digite um número: "))
if numero %2 == 0:
    print("Número par")
else:
    print("Número ímpar")

#Atividade 10
nota = float(input("Digite uma nota: "))
if nota >=6:
    print("aprovado")
else:
    print("reprovado")

#Atividade 11
numero = float(input("Digite um número: "))

if numero % 2 == 0:
    if numero > 0:
        print(f"O número {numero} é par e positivo.")
    elif numero < 0:
        print(f"O número {numero} é par e negativo.")
    else:
        print(f"O número {numero} é par e zero.")
else:
    if numero > 0:
        print(f"O número {numero} é ímpar e positivo.")
    elif numero < 0:
        print(f"O número {numero} é ímpar e negativo.")
    else:
        print(f"O número {numero} é ímpar e zero.")

#Atividade 12
def calcular_imc(peso, altura):
    return peso / (altura ** 2)

peso = float(input("Digite seu peso: "))
altura = float(input("Digite sua altura: "))
imc = calcular_imc(peso, altura)

if imc < 18.5:
    classificacao = "Abaixo do peso"
elif 18.5 <= imc < 24.9:
    classificacao = "peso normal"
elif 25 <= imc < 29.9:
    classificacao = "Sobrepeso"
else:
    classificacao = "Obesidade"

print(f"Seu IMC é {imc:.2f}. Você está classificado como: {classificacao}.")
