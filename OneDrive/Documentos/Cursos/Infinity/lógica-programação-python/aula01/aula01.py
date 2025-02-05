nome = input('Digite seu nome: ')
idade = int(input('Digite sua idade: '))
altura = float(input('Digite sua altura: '))
print(f"Meu nome é {nome}, tenho {idade} anos de idade , e altura de {altura:.2f}")

nota = []
nota1 = float(input('Digite nota 1: '))
nota2 = float(input('Digite nota 2: '))
nota3 = float(input('Digite nota 3: '))
nota4 = float(input('Digite nota 4: '))
media = (nota1 + nota2 + nota3 + nota4) / 4
print(f" a média final foi {media}")

salario = float(input('Digite seu salário: '))
horas_semana = float(input('Digite quantas horas trabalha por semana: '))
horas_mes = horas_semana * 4
salario_hora = salario / horas_mes
print(salario_hora)

nome = input('Digite seu nome: ')
idade = int(input('Digite sua idade: '))
cidade = input('Cidade natal: ')
print(f"Meu nome é {nome}, tenho {idade} anos, nascido em {cidade}")