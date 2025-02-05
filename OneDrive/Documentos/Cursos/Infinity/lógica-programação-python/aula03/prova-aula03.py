numero_secreto = 7

tentativas = 0
tentativas_max = 3

while tentativas < tentativas_max:
    palpite = int(input("Digite o número para acertar entre 1 e 10: "))
    tentativas += 1

    if palpite == numero_secreto:
        print("Parabéns! Você acertou o número.")
        break
else:
    print(f"Que pena! Esgotou suas 3 tentativas. O número era {numero_secreto}")
    
    print("Obrigado por jogar!")