let dialogos = ['Olá tudo bem?', 'Me chamo Du, vou ser seu guia na sua aventura em Tópicos de Arquitetura Computacional', 'Sua missão será responder a um total de 16 perguntas sobre tópicos de arquitetura computacional, mas cuidado, toda vez que você errar, vamos ter que começar tudo de novo! Está preparado?']

let perguntas = [
        {
            'questao': '1. Como se chama o componente de hardware responsável por todo o processamento de dados dentro do computador?',
            'alternativas': [
                'Mouse',
                'CPU',
                'Monitor',
                'Teclado'
            ],
            'indice': 0
        },
        {
            'questao': '2. Qual a parte do processador responsável por todos os cálculos e operações lógicas?',
            'alternativas': [
                'Placa-Mãe',
                'GPU',
                'ULA',
                'VM'
            ],
            'indice': 1
        },
        {
            'questao': '3. Como se chamam as memórias que operam dentro de um processador?',
            'alternativas': [
                'Registradores',
                'Elétrons',
                'Salvadores',
                'Micro-Memórias'
            ],
            'indice': 2
        },
        {
            'questao': '4. Qual tipo de memória mais se assemelha a descrição “Memória Temporária”?:',
            'alternativas': [
                'ROM',
                'EPROM',
                'FLASH',
                'RAM'
            ],
            'indice': 3
        },
        {
            'questao': '5. Qual tipo de memória mais se assemelha a descrição “Memória somente de leitura”?:',
            'alternativas': [
                'RAM',
                'ROM',
                'EPROM',
                'FLASH'
            ],
            'indice': 4
        },
        {
            'questao': '6. Qual tipo de memória mais se assemelha a descrição “Memória programável e apagável”?:',
            'alternativas': [
                'ROM',
                'FLASH',
                'EPROM',
                'RAM'
            ],
            'indice': 5
        },
        {
            'questao': '7. Qual tipo de memória mais se assemelha a descrição “Memória permanente e rápida”?',
            'alternativas': [
                'FLASH',
                'EPROM',
                'RAM',
                'ROM'
            ],
            'indice': 6
        },
        {
            'questao': '8. Qual tipo de memória mais se assemelha a descrição “Memória persistente”?',
            'alternativas': [
                'RAM',
                'ROM',
                'EPROM',
                'Memória de Massa'
            ],
            'indice': 7
        },
        {
            'questao': '9. Qual o nome da tecnologia que permite a navegação direta de informações entre a memória e os dispositivos de I/O, economizando processamento?',
            'alternativas': [
                'AMD',
                'MAD',
                'DAM',
                'DMA'
            ],
            'indice': 8
        },
        {
            'questao': '10. Qual o nome do componente que permite que um chip passe a ser endereçado?',
            'alternativas': [
                'CHIP CONFIRM (CC)',
                'CHIP TRANSLATE (CT)',
                'CHIP SELECT (CS)',
                'CHIP LOCALIZE (CL)'
            ],
            'indice': 9
        },
        {
            'questao': '11. Como se chama o componente responsável pelo caminho dos endereços entre a memória e o processador?',
            'alternativas': [
                'Data Bus',
                'Adress Bus',
                'Input Bus',
                'Instruction Bus'
            ],
            'indice': 10
        },
        {
            'questao': '12. Como se chama o componente responsável pelo caminho dos dados entre a memória e o processador?',
            'alternativas': [
                'Data bus',
                'Adress bus',
                'Instruction Bus',
                'Input Bus'
            ],
            'indice': 11
        },
        {
            'questao': '13. Um estudante comum, que curte apenas jogos leves, precisa escolher um processador, entre o Intel Core i5 e o Intel Core i7, o que você recomenda para ele?',
            'alternativas': [
                'Snapdragon 4',
                'Intel Core i7',
                'Intel Core i5',
                'Snapdragon 7'
            ],
            'indice': 12
        },
        {
            'questao': '14. Um profissional que trabalha com edição de vídeos e curte jogos pesados, precisa escolher um processador, entre o Intel Core i5 e o Intel Core i7, o que você recomenda para ele?',
            'alternativas': [
                'Snapdragon 4',
                'Intel Core i5',
                'Snapdragon 7',
                'Intel Core i7'
            ],
            'indice': 13
        },
        {
            'questao': '15. Um senhor de idade está em dúvida se o computador que já tem a mais de 10 anos possui dual-core ou quad-core, o que é mais provável que seja o caso?',
            'alternativas': [
                'QUAD_CORE',
                'DUAL_CORE',
                'TRIPLE_CORE',
                'SOLO_CORE'
            ],
            'indice': 14
        },
        {
            'questao': '16. Um estudante no 1°Semestre do curso de Ciência da Computação está para comprar um notebook com o objetivo de estudar, mas também de jogar alguns jogos pesados, está em dúvida entre um notebook dual-core ou quad-core, o que é mais recomendado para ele?',
            'alternativas': [
                'QUAD_CORE',
                'DUAL_CORE',
                'BI_CORE',
                'TRIPLE_CORE'
            ],
            'indice': 15
        }
    ]


let imgsErro = [
    '<img src="img/poseRaiva.png" alt="">',
    '<img src="img/poseConfuso.png" alt="">',
    '<img src="img/poseTriste.png" alt="">'
]

let textosErro = [
    'Vamos ter que recomeçar!',
    'Vamos ter que ir do inicio, dessa vez vai?',
    'Vamos ter que voltar de novo :('
]