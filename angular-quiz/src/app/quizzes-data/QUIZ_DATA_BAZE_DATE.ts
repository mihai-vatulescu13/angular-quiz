export const quizzesListBazeDeDate = [
  {
    id: 1,
    category: 'baze de date',
    question: 'Intre avantajele bazelor de date se numara:',
    options: [
      {
        label: 'nepartajarea datelor intre utilizatori',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'organizarea datelor pe doua niveluri -fzic si logic',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'gestionarea centralizata a datelor printr-un SGBD',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'integrarea in aceeasi structura a tuturor datelor pertinente ale unui sistem informatic',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'independenta datelor fata de programele de aplicatii',
        tag: 'E',
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 2,
    category: 'baze de date',
    question: 'O entitate se caracterizeaza prin:',
    options: [
      {
        label: 'este identifcata unic printr-un nume',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'cuprinde, in general, mai multe valori sau realizari',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'administreaza obiecte',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'semnifca un obiect concret sau abstract, reprezentat prin proprietatile sale',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'semnifica o caracteristica a unui obiect concret',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 3,
    category: 'baze de date',
    question:
      'O entitate din modelul Entitate-Asociere are urmatoarele caracteristici:',
    options: [
      {
        label: 'are o existenta proprie',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'este intotdeauna concreta',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'trebuie defnita fara ambiguitati',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'este intotdeauna legata de o alta entitate printr-o asociatie',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'este identifcata unic prin ansamblul atributelor sale',
        tag: 'E',
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 4,
    category: 'baze de date',
    question: 'Administratorul bazei de date asigura:',
    options: [
      {
        label: 'scrierea programelor in cod-masina',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'autorizarea accesului la date',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'realizarea obiectivelor si functiilor sistemului',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'defnirea strategiei de salvare si restaurare a bazei de date',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'crearea programelor de aplicatii',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 5,
    category: 'baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/baze-de-date/q5.PNG',
    options: [
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q5a.PNG',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q5b.PNG',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q5c.PNG',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q5d.PNG',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q5e.PNG',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 6,
    category: 'baze de date',
    question: 'Urmatoarele operatii sunt echivalente:',
    options: [
      {
        label: 'R3= R1U R2 si R3= APPEND(R1,R2);',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R3= R1-R2 si R3 = R1 OR R2;',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R3 = R1XR2 si R3 = PRODUCT(R1,R2);',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'R3=R1U R2 si R3= UNION(R1,R2);',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'R3=R1-(R1-R2) si AND(R1,R2);',
        tag: 'E',
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 7,
    category: 'baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/baze-de-date/q7.PNG',
    options: [
      {
        label:
          'SELECT Nrchitanta, Suma, Data FROM CHITANTE WHERE COUNT(NrChitanta)>2;',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'SELECT Nrchitanta, Suma, Data FROM CHITANTE HAVING COUNT(NrChitanta)>2;',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'SELECT CHITANTE.Data FROM CHITANTE GROUP BY Data HAVING COUNT(NrChitanta)> 2;',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'SELECT COUNT(Data), COUNT(NrChitanta) FROM CHITANTE WHERE Data IS Unique;',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'SELECT Data FROM CHITANTE WHERE COUNT(NrChitanta) > 2;',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 8,
    category: 'baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/baze-de-date/q8.PNG',
    options: [
      {
        label:
          'DELETE FROM Angajati WHERE DataAngajare < ”1/1/2006” AND profesia = ”profesor”;',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'DELETE * FROM Angajati WHERE profesia LIKE ”profesor” HAVING YEAR(DataAngajare)<2007;',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'DELETE Angajati WHERE DataAngajare < "1/1/2007" AND profesia LIKE "*profesor*";',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'UPDATE Angajati SET CodAngaj = Null WHERE DataAngajare < ”1/1/2006” AND profesia = ”profesor”;',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'niciuna',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 9,
    category: 'baze de date',
    question:
      'Fie tabelul proiecte(CodP roiect;CodAng; functie; suma) cu cheia (CodP roiect;CodAng), de stocare a informatiilor privind repartizarea pe proiecte a salariatilor unei firme. Suma obtinuta depinde de CodAng si de functia in acel proiect (CodAng; functie) ! suma. Aplicand a doua forma normala care din schemele urmatoare este corecta?',
    options: [
      {
        label: 'R1=(CodProiect,CodAng,functie),R2=(CodProiect,functie,suma)',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'R1=(CodProiect,CodAng, suma), R2=(CodAng,functie)',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=(CodProiect,CodAng, suma), R2=(CodProiect,functie)',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=(CodProiect,CodAng), R2=(CodProiect,functie)',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Niciuna',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 10,
    category: 'baze de date',
    question:
      'Fie relatia r de schema R si X C R; Y C R si dependenta tranzitiva K -> X -> Y . Care din urmatoarele descompuneri sunt in forma normala trei?',
    options: [
      {
        label: 'R1=K(R-Y), R2=(KY)',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=K(R-Y), R2=(XY)',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'R1=K(R-Y), R2=(XX)',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=(R-Y), R2=(XX)',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=KY, R2=(XX)',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 11,
    category: 'baze de date',
    question:
      'Fie relatia r de schema R;X C R; Y C R;Z = R-XY si dependenta multivoca X -> Y . Care din urmatoarele descompuneri sunt in forma normala patru?',
    options: [
      {
        label: 'R1=XZ , R2=(XY)',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'R1=XZ, R2=(X)',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=K(R-Y), R2=(XZ)',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=XY, R2=(XZ)',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1=KX, R2=(XZ)',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 12,
    category: 'baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/baze-de-date/q12.PNG',
    options: [
      {
        label: 'R1= NrLeg, LimbaStraina, R2= NrLeg, Masina',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'R1= Masina,LimbaStraina, R2= NrLeg, LimbaStraina,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1= NrLeg,LimbaStraina R2= NrLeg,LimbaStraina,Masina',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1= NrLeg,Masina R2= NrLeg,LimbaStraina',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'R1= NrLeg,Masina R2= NrLeg,LimbaStraina,Masina',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 13,
    category: 'baze de date',
    question: 'Restrictiile referentiale intre 2 tabele sunt date de:',
    options: [
      {
        label: 'Cheile primare si cheile externe',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Coloanele commune',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Coloanele din clauza CHECK',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Coloanele din SELECT',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Chei externe',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 14,
    category: 'baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/baze-de-date/q14.PNG',
    options: [
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q14a.PNG',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q14b.PNG',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q14c.PNG',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q14d.PNG',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/baze-de-date/q14e.PNG',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 15,
    category: 'baze de date',
    question: 'Pentru o baza de date relationala algebra relationala este:',
    options: [
      {
        label: 'Completa (permite sa extrag orice informatii din baza)',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Procedurala (Arata si modul cum se obtin informatiile din baza de date)',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Complexa (permite sa extrag informatii obiectuale)',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Limbaj formal',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Limbaj de interogare',
        tag: 'E',
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 16,
    category: 'baze de date',
    question:
      'Restrictiile date de dependentele functionale pentru un tabel se testeaza cu ajutorul:',
    options: [
      {
        label: 'Axiomelor de inferenta',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Algoritmul de satisfacere(satisfie)',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Algoritmul de inchidere',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Algoritmul de sortare',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Algoritmul de normalizare',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 17,
    category: 'baze de date',
    question:
      'Fiind data apriori o multime de restrictii data de o multime de dependente funtionale F. Elaborarea unei reguli de validare pentru o dependenta functionala X -> Y presupune:',
    options: [
      {
        label: 'Verificarea deductibilitatii din F',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Verificarea incluziunii X C Y',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Verificarea incluziunii X C X+',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Normalizarea schemei de relatie XY',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Toate',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 18,
    category: 'baze de date',
    question:
      'Fiind data apriori o multime de restrictii data de o multime de dependente funtionale F. Elaborarea unei proceduri pentru a verifica dependenta functionala X -> Y presupune mai intai:',
    options: [
      {
        label: 'Verificarea redundantei acesteia',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Inlaturarea atributelor eliminabile din determinantul X',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Inlaturarea atributelor eliminabile din determinantul Y',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Inlaturarea atributelor eliminabile din X si Y',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Niciuna',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 19,
    category: 'baze de date',
    question:
      'Fiind data apriori o multime de restrictii data de o multime de dependente funtionale F. Aceasta este folosita la:',
    options: [
      {
        label: 'Normalizarea bazei de date',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'La validarea starii bazei de date',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Crearea bazei de date',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Crearea procedurilor de interogare',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Constructia algebrei relationale',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 20,
    category: 'baze de date',
    question: 'Interogarile din SQL sunt la fel de expresive cu:',
    options: [
      {
        label: 'Algebra relationala',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Calculul relational al tuplurilor',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Calculul relational al domeniilor',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Calculul procedural',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Calculul bazat pe tablouri',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
];
