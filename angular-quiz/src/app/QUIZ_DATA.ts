export const quizzesList = [
  //first question:
  {
    id: 1,
    category: "sisteme de operare",
    question: "Apelul sistem SLEEP produce:",
    options: [
      {
        label:
          "trecerea producatorului in starea BLOCAT daca buffer-ul este gol",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "blocarea procesului pana cand un altul il trezeste prin WAKEUP",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "blocarea procesului pana cand un altul lanseaza apelul SLEEP",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "trecerea procesului precizat de parametrul apelului in starea GATA",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 2,
    category: "sisteme de operare",
    question:
      "Planificarea preemptiva este strategia de planificare conform careia:",
    options: [
      {
        label: "un proces nu poate fi suspendat daca este in starea GATA",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "un proces care din punct de vedere logic poate fi executat este temporar suspendat",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          "un proces odata lansat in executie nu mai este suspendat atunci cand poate fi in executie",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "un proces nu poate fi suspendat temporar daca este in starea BLOCAT",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  // rest of the questions:
  {
    id: 3,
    category: "sisteme de operare",
    question: "Planificarea Round-Robin:",
    options: [
      {
        label:
          "determina atribuirea unei cuante de timp in care procesului ii este permis sa ruleze",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "determina suspendarea unui proces intr-un moment arbitrar",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "determina atribuirea unei prioritati fixe pentru executia unui proces",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "determina lansarea in executie a unui proces daca nu exista altul mai prioritar in executie",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 4,
    category: "sisteme de operare",
    question:
      "Care din urmatoarele functiuni sunt indeplinite de sistemul calculator hardware generator de baza:",
    options: [
      {
        label: "functia de conservare a informatiei",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "functia de generare a informatiei",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "functia de prelucrare a informatiei",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "functia de receptionare a informatiei",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 5,
    category: "sisteme de operare",
    question: "Subunitatile de intrerupere sunt:",
    options: [
      {
        label: "un mijloc de intrerupere al sistemului calculator",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "un mecanism de transmitere a informatillor intre dispozitivele de intrare-iesire",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "un mijloc de terminare a unei operatii de intrare-iesire",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "un mijloc de comunicatie intre sistemul calculator hardware si sistemul de operare",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 6,
    category: "sisteme de operare",
    question:
      "La declansarea unei intreruperi prima actiune desfasurata in sistemul calculator este:",
    options: [
      {
        label: "salvarea registrelor procesului intrerupt in tabela de procese",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "incarcarcarea registrului program counter cu continutul vectorului de intrerupere",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "salvarea starii programului intrerupt in stiva",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "modificarea starii procesului intrerupt",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 7,
    category: "sisteme de operare",
    question: "Mecansimul de adresare al memoriei este:",
    options: [
      {
        label: "mecanismul prin care se incarca programele in memorie",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "mecanismul prin care se traduce memoria virtuala in memorie reala",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "mecanismul prin care se construiesc adresele de memorie",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "mecanismul prin care se depun datele in memoria operativa",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 8,
    category: "sisteme de operare",
    question:
      "Apelurile sistem DOWN si UP actioneaza asupra unei variabile de tip:",
    options: [
      {
        label: "contor",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "semafor",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "contor de evenimente",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "conditie",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 9,
    category: "sisteme de operare",
    question: "Un proces este:",
    options: [
      {
        label: "activitatea unitatii de prelucrare",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "un program compilat",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "un program in executie",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "un program link-editat",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 10,
    category: "sisteme de operare",
    question: "Registrul “contor program” contine:",
    options: [
      {
        label: "adresele operanzilor operatiei ce trebuie executata",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "adresa urmatoarei instructiuni ce trebuie executata",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "chiar operanzii operatiei ce trebuie executata",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "numarul instructiunii ce trebuie executata",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 11,
    category: "sisteme de operare",
    question: "Sectiunile critice sunt:",
    options: [
      {
        label: "secvente de program care trebuie tratate cu mare atentie",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "secvente de tratare a intreruperilor importante",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "secvente din activitatea sistemului calculator cand resursele sunt insuficiente",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "secvente de program unde se acceseaza date partajate",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 12,
    category: "sisteme de operare",
    question:
      "Planificatorul este componenta sistemului de operare care decide:",
    options: [
      {
        label: "care proces trece in starea de executie si pentru cat timp",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "care proces trebuie terminat si care proces trebuie inceput",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "care dispozitiv periferic va fi folosit de catre program",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "care dintre fisierele deschise trebuie inchis la un moment dat",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 13,
    category: "sisteme de operare",
    question:
      "Criteriile generale urm˘arite de algoritmii de planificare sunt:",
    options: [
      {
        label: "corectitudinea (echitabilitatea)",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "respectarea politicii SO",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "eficienta",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "mentenabilitatea",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 14,
    category: "sisteme de operare",
    question: "Un sistem de operare asigura indeplinirea urmatoarelor functii:",
    options: [
      {
        label: "cresterea performantelor unitatii de prelucrare",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "un management ecient al resurselor zice si logice",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          " asistarea utilizatorului printr-un sistem dezvoltat de comunicatie",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "protectia informatiei",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 15,
    category: "sisteme de operare",
    question: "Care din urmatoarele resurse fizice este “preemptibila”:",
    options: [
      {
        label: "banda magnetica",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "memoria",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "scanerul",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "imprimanta",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 16,
    category: "sisteme de operare",
    question: "Exceptiile program sunt:",
    options: [
      {
        label:
          "evenimente care se produc la nivelul dispozitivelor fizice tratate prin intermediul unor secvente de program",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "intreruperi ale masinii abstracte reprezentate prin programul care se executa pe un sistem calculator real",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          "mijloace de autointrerupere a unui program pentru a solicita executarea unor functii de catre sistemul de operare",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          "evenimente datorate executiei unei anume instructiuni din programul care ruleaza",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 17,
    category: "sisteme de operare",
    question:
      "Care dintre urm˘atoarele operatii se pot efectua asupra variabilelor contor?",
    options: [
      {
        label: "ADVANCE",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "AWAIT",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "READ",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "AWAKE",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 18,
    category: "sisteme de operare",
    question: "Principalele functiuni ale sistemelor de operare sunt:",
    options: [
      {
        label: "managementul fsierelor",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "managementul serverelor",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "manegementul memoriei",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "managementul dispozitivelor periferice",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "managementul proceselor",
        tag: "E",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 19,
    category: "sisteme de operare",
    question:
      "Prin constructia sistemului calculator fiecarui nivel de intrerupere i se asociaza:",
    options: [
      {
        label: "un registru de adresare",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "o instructiune de calcul",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "o adresa de memorie specifca",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "un registru general",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 20,
    category: "sisteme de operare",
    question:
      "Tranzitia unui proces din starea in executie in starea blocat are loc atunci cand:",
    options: [
      {
        label:
          "planificatorul decide suspendarea procesului pentru a lansa un altul mai prioritar",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "planificatorul decide blocarea procesului din cauza unei erori",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "procesul asteapta aparitia unor date de care depinde continuarea executiei",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "procesul nu mai poate continua executia din cauza unei erori",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 21,
    category: "sisteme de operare",
    question: "Subsistemul memorie satisface urmatoarele proprietati:",
    options: [
      {
        label: "permite accesul direct la fisiere",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "permite extensia modulara",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "permite alocarea dinamica",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "permite lucrul in paralel",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 22,
    category: "sisteme de operare",
    question: "Planificarea pe doua nivele se utilizeaza atunci cand:",
    options: [
      {
        label:
          "procesele din sistemul calculator nu ocupa intreaga memorie operativa existent",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "in memoria operativa nu se poate pastra la un moment dat decat un singur proces",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "procesele active la un moment dat au prioritati diferite",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "memoria necesara proceselor active la un moment dat depaseste dimensiunea memoriei existente",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 23,
    category: "sisteme de operare",
    question:
      "In sistemele de operare de tip client-server nucleul acestuia realizeaza:",
    options: [
      {
        label: "servirea proceselor server",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "servirea proceselor client",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "transportul mesajelor de la procesele client catre procesele server",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          "accesul la resursele proceselor client si ale proceselor server",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 24,
    category: "sisteme de operare",
    question:
      "Fiecare nivel al ierarhiei sistemului de calcul este un sistem calculator caracterizat de:",
    options: [
      {
        label: "structuri de informatie",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "relatia intre nivele",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "tipuri de date",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "operatii primitive",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 25,
    category: "sisteme de operare",
    question: "Un vector de intrerupere reprezinta:",
    options: [
      {
        label:
          "adresele punctelor de ntrerupere a activitatii sistemului calculator",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "punctul de intrare in sistemul de operare relativ la evenimentul care a deter-minat aparitia intreruperii",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "directia catre care se indreapta sistemul de operare",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "o colectie de registre la care au acces toate subunitatile care pot fi intrerupte de unitatea centrala",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 26,
    category: "sisteme de operare",
    question:
      "Fie un sistem cu 5 procese, notate A,B,C,D,E si 4 resurse R,S,T,U pentru care cunoastem ca:",
    options: [
      {
        label: "nu exista interblocare",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "A-S-D-U-C-T-B",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "A-U-B-S-D-R",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "B-U-A-T-D-R",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "D-S-B-U-A-T",
        tag: "E",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 27,
    category: "sisteme de operare",
    question: "Evacuarea-reincarcarea proceselor (swapping) este procesul de:",
    options: [
      {
        label: "terminare, respectiv incepere a proceselor",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "transfer al datelor in fisiere pe disc",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "lansare in executie a programelor",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "transfer al proceselor intre memorie si disc",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 28,
    category: "sisteme de operare",
    question: "Functia unui operator al unitatii de prelucrare reprezinta:",
    options: [
      {
        label:
          "multimea operatiilor de verificare a operanzilor operatorului respectiv",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "multimea operatiilor primitive diferite care pot fi executate de operatorul respectiv",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "multimea operatiilor binare ale sistemului calculator",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "multimea subprogramelor pe care le poate executa un operator",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 29,
    category: "sisteme de operare",
    question:
      "Un subsistem functional al sistemului calculator este compus din:",
    options: [
      {
        label: "unitate functionala propriu-zisa",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "unitate de control",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "unitate de legatura",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "unitate de comanda",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 30,
    category: "sisteme de operare",
    question: "Operatorii unitatii de prelucrare sunt:",
    options: [
      {
        label: "operatorul binar",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "operatorul virgula fixa",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "operatorul virgula mobila",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "operatorul zecimal",
        tag: "D",
        isCorrect: true,
        isSelected: false,
      },
    ],
  },
  {
    id: 31,
    category: "sisteme de operare",
    question:
      "Tranzitia unui proces din starea in executie in starea gata are loc atunci cand:",
    options: [
      {
        label:
          "planicatorul decide suspendarea procesului pentru ca i-a expirat cuanta de timp alocata",
        tag: "A",
        isCorrect: true,
        isSelected: false,
      },
      {
        label:
          "planificatorul, in urma analizei proceselor active stabileste ca un proces nu poate continua executia",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "procesul nu mai are date de prelucrat si trebuie sa-si termine executia",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "procesul nu mai are date de transferat si poate sa-si continue executia",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 32,
    category: "sisteme de operare",
    question:
      "Intr-un sistem de operare de tip client-server procesele server lucreaza in modul de lucru:",
    options: [
      {
        label: "supervizor",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "kernel",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "utilizator",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "privilegiat",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 33,
    category: "sisteme de operare",
    question: "Cuvantul de stare al programului (PSW):",
    options: [
      {
        label: "asigura interfata intre sistemul calculator si program",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "asigura interfata intre sistemul de operare si program",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "asigura interfata intre unitatea de prelucrare si program",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "asigura interfata intre sistemul calculator si sistemul de operare",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 34,
    category: "sisteme de operare",
    question:
      "Pentru a se evita conditiile de competitie este nevoie sa utilizam:",
    options: [
      {
        label: "variabile partajate",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "fisiere partajate",
        tag: "B",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "excludere mutuala",
        tag: "C",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "sectiuni critice",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 35,
    category: "sisteme de operare",
    question: "Planificarea cu cozi multiple se aplica la:",
    options: [
      {
        label:
          "sistemele calculator la care comutarea intre procese este foarte rapida",
        tag: "A",
        isCorrect: false,
        isSelected: false,
      },
      {
        label:
          "sistemele calculator la care comutarea intre procese este foarte lenta",
        tag: "B",
        isCorrect: true,
        isSelected: false,
      },
      {
        label: "sistemele calculator cu doua procesoare",
        tag: "C",
        isCorrect: false,
        isSelected: false,
      },
      {
        label: "sistemele calculator pentru conducerea proceselor industriale",
        tag: "D",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
];
