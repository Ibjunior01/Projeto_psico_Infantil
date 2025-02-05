# Atividade 01
idade1 = int(input("Digite a primeira idade: "))
idade2 = int(input("Digite a segunda idade: "))
print(idade1 > idade2)

#Atividade 02
palavra1 = input("Digite a primeira palavra: ")
palavra2 = input("Digite a segunda palavra: ")
print(palavra1 == palavra2)

#Atividade 03
idade = int(input("Digite sua idade: "))
habilitacao = input("Você possui habilitação? (sim ou não): ").strip() .lower()

if idade >= 18 and habilitacao == "sim":
    print("Você é maior de idade e possui habilitação.")
elif idade >= 18 and habilitacao == "não":
    print("Você é maior de idade mas não possui habilitacao.")
else:
    print("Menor de idade.")

#Atividade 04
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))

if nota1 >=6 and nota2 >= 6:
    print(f'suas notas são: {nota1} e {nota2} parabêns, está aprovado!!!')
else:
    print("estude mais")

#Atividade 05
preco = float(input("Digite um preço: "))
preco -= preco * 0.05
print(f'O preço com desconto é: {preco:.2f}')

#Atividade 06
valor = float(input("Digite um valor: "))
valor *= 2
print(valor)

#Atividade 07
frase = input("Digite uma frase e inclua um caracter: ")
resultado = "#" in (frase)
print(resultado)

#Atividade 08
frase = input("Digite uma frase e inclua um palavra: ")
resultado = "casa" in (frase)
print(resultado)
