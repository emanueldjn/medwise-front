const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const questions = [
    {
      text: 'Qual é a principal função do coração?',
      options: ['A: Bombear sangue', 'B: Filtrar toxinas', 'C: Produzir hormônios', 'D: Digestão de nutrientes'],
      correct: 'A',
    },
    {
      text: 'Qual artéria fornece sangue ao miocárdio?',
      options: ['A: Artéria pulmonar', 'B: Artéria coronária', 'C: Artéria carótida', 'D: Artéria femoral'],
      correct: 'B',
    },
    {
      text: 'O que é a hipertensão arterial?',
      options: ['A: Pressão arterial baixa', 'B: Pressão arterial elevada', 'C: Batimento cardíaco irregular', 'D: Insuficiência cardíaca'],
      correct: 'B',
    },
    {
      text: 'Qual válvula separa o átrio esquerdo do ventrículo esquerdo?',
      options: ['A: Tricúspide', 'B: Pulmonar', 'C: Mitral', 'D: Aórtica'],
      correct: 'C',
    },
    {
      text: 'Qual é o principal sintoma de um infarto agudo do miocárdio?',
      options: ['A: Dor torácica', 'B: Febre alta', 'C: Tosse persistente', 'D: Dor abdominal'],
      correct: 'A',
    },
    {
      text: 'O que mede um eletrocardiograma (ECG)?',
      options: ['A: Pressão arterial', 'B: Atividade elétrica do coração', 'C: Nível de oxigênio no sangue', 'D: Função renal'],
      correct: 'B',
    },
    {
      text: 'Qual é a principal causa de aterosclerose?',
      options: ['A: Acúmulo de cálcio nas artérias', 'B: Acúmulo de placas de gordura', 'C: Infecção bacteriana', 'D: Deficiência de vitaminas'],
      correct: 'B',
    },
    {
      text: 'Qual é o nome do ritmo cardíaco anormalmente rápido?',
      options: ['A: Bradicardia', 'B: Taquicardia', 'C: Fibrilação atrial', 'D: Extrassístole'],
      correct: 'B',
    },
    {
      text: 'Qual medicamento é comumente usado para tratar hipertensão?',
      options: ['A: Insulina', 'B: Losartana', 'C: Paracetamol', 'D: Antibióticos'],
      correct: 'B',
    },
    {
      text: 'O que é insuficiência cardíaca?',
      options: ['A: Parada cardíaca súbita', 'B: Incapacidade do coração de bombear sangue adequadamente', 'C: Inflamação do miocárdio', 'D: Bloqueio das artérias coronárias'],
      correct: 'B',
    },
    {
      text: 'Qual é a função da válvula aórtica?',
      options: ['A: Impedir refluxo do ventrículo esquerdo para a aorta', 'B: Conectar átrio e ventrículo direitos', 'C: Regular o fluxo pulmonar', 'D: Filtrar o sangue'],
      correct: 'A',
    },
    {
      text: 'Qual é o principal fator de risco modificável para doenças cardiovasculares?',
      options: ['A: Idade', 'B: Tabagismo', 'C: Genética', 'D: Gênero'],
      correct: 'B',
    },
    {
      text: 'O que é angina pectoris?',
      options: ['A: Dor torácica devido à isquemia miocárdica', 'B: Inflamação do pericárdio', 'C: Arritmia ventricular', 'D: Insuficiência mitral'],
      correct: 'A',
    },
    {
      text: 'Qual é o nome do músculo cardíaco?',
      options: ['A: Endocárdio', 'B: Miocárdio', 'C: Pericárdio', 'D: Epicárdio'],
      correct: 'B',
    },
    {
      text: 'Qual exame de imagem é usado para avaliar as artérias coronárias?',
      options: ['A: Ultrassom abdominal', 'B: Angiografia coronária', 'C: Radiografia de tórax', 'D: Tomografia cerebral'],
      correct: 'B',
    },
    {
      text: 'Qual é a principal causa de fibrilação atrial?',
      options: ['A: Hipertensão arterial', 'B: Infecção viral', 'C: Trauma torácico', 'D: Deficiência de potássio'],
      correct: 'A',
    },
    {
      text: 'O que caracteriza a bradicardia?',
      options: ['A: Frequência cardíaca acima de 100 bpm', 'B: Frequência cardíaca abaixo de 60 bpm', 'C: Ritmo irregular', 'D: Pressão arterial elevada'],
      correct: 'B',
    },
    {
      text: 'Qual é a função do nó sinoatrial?',
      options: ['A: Conduzir impulsos nervosos', 'B: Iniciar o batimento cardíaco', 'C: Regular a pressão arterial', 'D: Filtrar o sangue'],
      correct: 'B',
    },
    {
      text: 'Qual medicamento é usado em emergências para dissolver coágulos em infartos?',
      options: ['A: Aspirina', 'B: Estreptoquinase', 'C: Atorvastatina', 'D: Metformina'],
      correct: 'B',
    },
    {
      text: 'O que é um marca-passo?',
      options: ['A: Dispositivo para monitorar pressão arterial', 'B: Dispositivo para corrigir arritmias', 'C: Medicamento para colesterol', 'D: Exame de imagem'],
      correct: 'B',
    },
    {
      text: 'Qual é o principal sintoma da pericardite?',
      options: ['A: Dor torácica aguda', 'B: Tosse seca', 'C: Febre alta', 'D: Náusea'],
      correct: 'A',
    },
    {
      text: 'Qual é a principal causa de endocardite?',
      options: ['A: Infecção bacteriana', 'B: Trauma cardíaco', 'C: Hipertensão', 'D: Colesterol alto'],
      correct: 'A',
    },
    {
      text: 'Qual válvula separa o ventrículo direito da artéria pulmonar?',
      options: ['A: Mitral', 'B: Tricúspide', 'C: Pulmonar', 'D: Aórtica'],
      correct: 'C',
    },
    {
      text: 'O que é um sopro cardíaco?',
      options: ['A: Ritmo cardíaco irregular', 'B: Som anormal devido ao fluxo sanguíneo', 'C: Parada cardíaca', 'D: Inflamação do miocárdio'],
      correct: 'B',
    },
    {
      text: 'Qual é o principal fator de risco não modificável para infarto?',
      options: ['A: Obesidade', 'B: Tabagismo', 'C: Idade', 'D: Sedentarismo'],
      correct: 'C',
    },
    {
      text: 'Qual exame avalia a função cardíaca por meio de ondas sonoras?',
      options: ['A: Eletrocardiograma', 'B: Ecocardiograma', 'C: Cintilografia', 'D: Angiografia'],
      correct: 'B',
    },
    {
      text: 'O que é dislipidemia?',
      options: ['A: Níveis anormais de lipídios no sangue', 'B: Inflamação do coração', 'C: Ritmo cardíaco irregular', 'D: Pressão arterial baixa'],
      correct: 'A',
    },
    {
      text: 'Qual é a função das veias coronárias?',
      options: ['A: Fornecer oxigênio ao coração', 'B: Drenar sangue do miocárdio', 'C: Regular a pressão arterial', 'D: Transportar nutrientes'],
      correct: 'B',
    },
    {
      text: 'Qual é o principal sintoma de insuficiência cardíaca congestiva?',
      options: ['A: Dor de cabeça', 'B: Edema periférico', 'C: Febre', 'D: Visão embaçada'],
      correct: 'B',
    },
    {
      text: 'O que é a estenose aórtica?',
      options: ['A: Alargamento da válvula aórtica', 'B: Estreitamento da válvula aórtica', 'C: Inflamação do pericárdio', 'D: Bloqueio da artéria pulmonar'],
      correct: 'B',
    },
    {
      text: 'Qual é o principal objetivo da cirurgia de revascularização miocárdica?',
      options: ['A: Reparar válvulas cardíacas', 'B: Restaurar o fluxo sanguíneo coronário', 'C: Tratar arritmias', 'D: Reduzir a pressão arterial'],
      correct: 'B',
    },
    {
      text: 'Qual é o efeito colateral comum dos betabloqueadores?',
      options: ['A: Aumento da frequência cardíaca', 'B: Fadiga', 'C: Febre', 'D: Náusea'],
      correct: 'B',
    },
    {
      text: 'O que é um aneurisma aórtico?',
      options: ['A: Dilatação anormal da aorta', 'B: Bloqueio da aorta', 'C: Inflamação da aorta', 'D: Ruptura das veias coronárias'],
      correct: 'A',
    },
    {
      text: 'Qual é a principal causa de miocardite?',
      options: ['A: Infecção viral', 'B: Trauma torácico', 'C: Hipertensão', 'D: Colesterol alto'],
      correct: 'A',
    },
    {
      text: 'Qual é a função do nó atrioventricular?',
      options: ['A: Iniciar o batimento cardíaco', 'B: Atrasar o impulso elétrico entre átrios e ventrículos', 'C: Regular a pressão arterial', 'D: Filtrar o sangue'],
      correct: 'B',
    },
    {
      text: 'Qual é o principal sintoma de arritmia cardíaca?',
      options: ['A: Dor torácica', 'B: Palpitações', 'C: Febre', 'D: Tosse'],
      correct: 'B',
    },
    {
      text: 'Qual exame é usado para avaliar a fração de ejeção do coração?',
      options: ['A: Eletrocardiograma', 'B: Ecocardiograma', 'C: Teste de esforço', 'D: Holter'],
      correct: 'B',
    },
    {
      text: 'O que é trombose venosa profunda?',
      options: ['A: Formação de coágulo em veia profunda', 'B: Inflamação do miocárdio', 'C: Bloqueio arterial', 'D: Ritmo irregular'],
      correct: 'A',
    },
    {
      text: 'Qual é o principal objetivo do cateterismo cardíaco?',
      options: ['A: Diagnosticar e tratar obstruções coronárias', 'B: Medir a frequência cardíaca', 'C: Tratar insuficiência cardíaca', 'D: Reparar válvulas'],
      correct: 'A',
    },
    {
      text: 'Qual é a principal complicação da hipertensão não controlada?',
      options: ['A: Insuficiência renal', 'B: Anemia', 'C: Infecção respiratória', 'D: Osteoporose'],
      correct: 'A',
    },
    {
      text: 'O que é a cardiomiopatia hipertrófica?',
      options: ['A: Enfraquecimento do miocárdio', 'B: Espessamento anormal do músculo cardíaco', 'C: Inflamação do pericárdio', 'D: Bloqueio arterial'],
      correct: 'B',
    },
    {
      text: 'Qual é o principal sintoma de embolia pulmonar?',
      options: ['A: Dor abdominal', 'B: Dispneia súbita', 'C: Febre alta', 'D: Dor nas costas'],
      correct: 'B',
    },
    {
      text: 'Qual é a função dos inibidores da ECA no tratamento cardíaco?',
      options: ['A: Aumentar a pressão arterial', 'B: Reduzir a pressão arterial', 'C: Tratar infecções', 'D: Reduzir o colesterol'],
      correct: 'B',
    },
    {
      text: 'O que é a síndrome coronariana aguda?',
      options: ['A: Conjunto de sintomas de isquemia miocárdica', 'B: Inflamação do pericárdio', 'C: Ritmo cardíaco irregular', 'D: Insuficiência cardíaca crônica'],
      correct: 'A',
    },
    {
      text: 'Qual é o principal fator de risco para embolia pulmonar?',
      options: ['A: Imobilidade prolongada', 'B: Febre alta', 'C: Deficiência de vitamina D', 'D: Trauma craniano'],
      correct: 'A',
    },
    {
      text: 'Qual é a função do teste de esforço cardíaco?',
      options: ['A: Avaliar a função renal', 'B: Detectar isquemia miocárdica', 'C: Medir níveis de colesterol', 'D: Tratar arritmias'],
      correct: 'B',
    },
    {
      text: 'O que é a valvulopatia?',
      options: ['A: Doença das válvulas cardíacas', 'B: Inflamação do miocárdio', 'C: Bloqueio arterial', 'D: Ritmo irregular'],
      correct: 'A',
    },
    {
      text: 'Qual é o principal efeito dos diuréticos no tratamento cardíaco?',
      options: ['A: Aumentar a pressão arterial', 'B: Reduzir o volume de líquido', 'C: Tratar infecções', 'D: Reduzir o colesterol'],
      correct: 'B',
    },
    {
      text: 'Qual é a principal causa de parada cardíaca súbita?',
      options: ['A: Arritmia ventricular', 'B: Infecção bacteriana', 'C: Trauma torácico', 'D: Hipertensão'],
      correct: 'A',
    },
    {
      text: 'O que é a dissecção aórtica?',
      options: ['A: Ruptura na parede da aorta', 'B: Bloqueio da artéria pulmonar', 'C: Inflamação do miocárdio', 'D: Estenose da válvula mitral'],
      correct: 'A',
    },
  ];

  // Inserir questões no banco
  for (const question of questions) {
    await prisma.question.create({
      data: {
        text: question.text,
        options: question.options,
        correct: question.correct,
      },
    });
  }

  console.log('50 questões de cardiologia inseridas com sucesso!');
}

main()
  .catch(e => {
    console.error('Erro ao inserir questões:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });