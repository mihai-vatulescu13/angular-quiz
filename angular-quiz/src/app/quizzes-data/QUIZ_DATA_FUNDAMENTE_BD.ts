//     questionImg: '../../../assets/quizzes-images/fundamenteBD/q14.PNG',
//       ansImg: '../../../assets/quizzes-images/fundamenteBD/q14a.PNG',
export const quizzesListfundamenteBD = [
  {
    id: 1,
    category: 'fundamente baze de date',
    question: 'O baza de date distribuita este:',
    options: [
      {
        label:
          'O colectie de date si de scheme partajate si interconectate logic, distribuite fizic pe calculatoarele unei retele,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'O colectie de date impartita in mai multe fragmente,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'O colectie de date impartita in mai multe replici,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'O colectie de fragmente mixte.',
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
    id: 2,
    category: 'fundamente baze de date',
    question: 'O tranzactie este:',
    options: [
      {
        label: 'O unitate de program ce realizeaza citiri si scrieri,',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'O multime finita si ordonata de operatii de citire, scriere si terminare,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'O multime de instructiuni executabile dintr-un limbaj gazda,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'O serie finita de opeartii de modificare a datelor dintr-o baza de date ORACLE',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'O multime finita de operatii coerente, executate de un SGBD, care manip-uleaza datele unei baze de date.',
        tag: 'E',
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 3,
    category: 'fundamente baze de date',
    question: 'Numele unei coloane dintr-un tabel in ORACLE :',
    options: [
      {
        label: 'trebuie sa fie unic in cadrul tabelului,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'trebuie sa fie unic in cadrul bazei de date,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'are asociat un index ,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'trebuie sa aparaa in instructiunea CREATE TABLE,',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'rebuie sa fie specificat a in instructiunea ALTER TABLE.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 4,
    category: 'fundamente baze de date',
    question: 'O tranzactie urmeaza un protocol in doua faze daca:',
    options: [
      {
        label: 'Blocheaza accesul la un element de date,',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Toate opratiile de blocare preced prima operatie de deblocare,',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Cere mai intai deblocarea si apoi realizeaza blocarea accesului la un element de date,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Blocheaza tabelul la care are acces,',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Blocheaza accesul altor utilizatori la o baza de date.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 5,
    category: 'fundamente baze de date',
    question: 'Proprietatea de consistenta a tranzactiei consta din:',
    options: [
      {
        label: 'Transformarea unei stari consistente intr-o stare consistenta,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Eliminarea redundantelor,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Izolarea tranzactiilor in executie,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Transparenta,',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Durabilitate.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 6,
    category: 'fundamente baze de date',
    question: 'Un cursor este:',
    options: [
      {
        label: 'Un pointer catre un set de rezultate,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'un set de rezultate ale instructiunii select,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'o metoda de analiza a performantei,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'o colectie de randuri ale unei tabele,',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Sun buffer care pastreaza rezultatul unei istructiuni SELECT.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 7,
    category: 'fundamente baze de date',
    question: 'Abordarea distribuita a unei baze de date oglindeste:',
    options: [
      {
        label: 'Structura organizationala,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Paralelismul prelucrarilor',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Gestiunile locale ale bazelor de date,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Seriabilitatea tranzactiilor,',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Toate.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 8,
    category: 'fundamente baze de date',
    question: 'O baza de date distribuita se gaseste implementata numai:',
    options: [
      {
        label: 'Intr-o retea de calculatoare,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Pe un calculator performant,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Pe mai multe calculatoare izolate, conectate la Internet,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Pe un Calculator client,',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Pe un laptop.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 9,
    category: 'fundamente baze de date',
    question: 'Tranzactiile se numesc in 2 faze daca :',
    options: [
      {
        label: 'Satisfac protocolul in 2 faze,',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Sunt formate numai din citiri si scrieri,',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Contin comenzile commit si rollback,',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Contin 2 faze de executie,',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Contin 2 faze, una de definire a datelor, si alta de prelucrare a lor.',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 10,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q10.PNG',
    options: [
      {
        label:
          'Venitul maxim al unui angajat dintr-un compartiment utilizand expresii tabela',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Angajatul sau angajatii cu cel mai mare venit utiliz^and expresii tabela',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Venitul de baza al unui angajat utilizand operatorul INNER JOIN',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Veniturile angajatilor in ordine descrescatoare utilizand expresii tabela',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Numele angajatului din fiecare compartiment cu venitul cel mai mare',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 11,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q11.PNG',
    options: [
      {
        label: 'Introduce inregistrari numai pentru zilele nelucratoare',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Populeaza cu inregistrari tabela pe o luna dintr-un an',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Nu populeaza tabela datorita exceptiei DUP-VAL-ON-INDEX',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Daca se executa de doua ori succesiv, nu produce rezultate',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Daca se executa de doua ori succesiv, dubleaza inregistrarile din tabela',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 12,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q12.PNG',
    options: [
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/fundamenteBD/q12a.PNG',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/fundamenteBD/q12b.PNG',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/fundamenteBD/q12c.PNG',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/fundamenteBD/q12d.PNG',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '',
        ansImg: '../../../assets/quizzes-images/fundamenteBD/q12e.PNG',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 13,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q13.PNG',
    options: [
      {
        label: 'Nu avem linii in tabela',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Avem un student cu numele Ionescu',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Nu putem sa facem Rollback mai mult de o data pe un punct de reluare',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Ultimul UPDATE esueaza deoarece studentul cu CNP-ul 100 a fost sters',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Tranzactia esueaza deoarece avem mai multe puncte de reluare',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 14,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q14.PNG',
    options: [
      {
        label: 'Diferenta, proiectia si join',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Selectia, proiectia si join',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Selectia, intersectia si join',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Intersectia, proiectia si join',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Diferenta, intersectia si join',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 15,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q15.PNG',
    options: [
      {
        label:
          'Declansatorul D1 atribuie o valoare maxima atributului CNP inainte de o noua inserare',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Cele doua declasatoare produc acelasi rezultat',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Declansatorul D2 nu violeaza restrictia de cheie primara',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Declansatorul D1 poate viola restrictia de cheie primara',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Cele doua declasatoare nu produc acelasi rezultat',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 16,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q16.PNG',
    options: [
      {
        label:
          'Comanda UPDATE trebuie sa se limiteze numai la o linie a tabelei COM-PARTIMENT',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Declansatorul implementeaza optiunea UPDATE CASCADE din Oracle',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Declansatorul se va lansa numai la modicarea atributului ID-Compart din tabela COMPARTIMENT',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Comanda UPDATE poate modica mai multe linii din tabela ANGAJATI',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Comanda UPDATE nu poate modifica mai multe linii din tabela ANGAJATI',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 17,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q17.PNG',
    options: [
      {
        label: 'Blocul mareste cu 10 lei salariul orar al tuturor angajatilor',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Este un exemplu de cursor implicit',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Blocul mareste cu 10 lei salariul orar al angajatilor cu o vechime de peste 15 ani',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          'Pentru afisarea la ecran a mesajelor din bloc, trebuie lansata comanda SETSERVEROUTPUT',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Blocul mareste cu 12 lei salariul orar al tuturor angajatilor',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 18,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q18.PNG',
    options: [
      {
        label: 'Procedura nu permite incalcarea restrictiei de cheie primara',
        tag: 'A',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Variabilele an si luna sunt parametrii formali',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Procedura populeaza tabela PONTAJE pe o luna si un an cu date din tabela PERSONAL',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Apelul se face astfel: populare(07,2008);',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Apelul se face astfel: populare(2008,07);',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 19,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q19.PNG',
    options: [
      {
        label: 'Interogarea produce o singura valoare',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: 'Apelul functiei nu este plasat corect in interogare',
        tag: 'B',
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          'Functia calculeaza numarul de ani dintre o data si prima zi a lunii de referinta',
        tag: 'C',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Functia si interogarea sunt corecte',
        tag: 'D',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: 'Interogarea produce mai multe valori',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 20,
    category: 'fundamente baze de date',
    question: '',
    questionImg: '../../../assets/quizzes-images/fundamenteBD/q20.PNG',
    options: [
      {
        label: '3,2,1,4,5',
        tag: 'A',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '3,1,2,5,4',
        tag: 'B',
        isCorrect: true,
        isSelected: false,
      },
      {
        label: '2,3,1,5,4',
        tag: 'C',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '1,3,2,4,5',
        tag: 'D',
        isCorrect: false,
        isSelected: false,
      },
      {
        label: '2,1,3,4,5',
        tag: 'E',
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
];
