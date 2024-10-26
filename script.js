const questions = [
    { question: "¿Qué es el carbono?", answers: ["A. Un gas", "B. Un metal", "C. Un no metálico", "D. Un metaloide"], correct: "C" },
    { question: "¿Qué significa que el carbono sea tetravalente?", answers: ["A. Puede formar 2 enlaces", "B. Puede formar 4 enlaces", "C. Puede formar 6 enlaces", "D. No puede formar enlaces"], correct: "B" },
    { question: "¿Qué tipo de hibridación tiene el carbono en el metano?", answers: ["A. sp", "B. sp²", "C. sp³", "D. sp⁴"], correct: "C" },
    { question: "¿Cuál es un ejemplo de un compuesto orgánico?", answers: ["A. Agua", "B. Cloruro de sodio", "C. Metano", "D. Ácido sulfúrico"], correct: "C" },
    { question: "¿Qué simboliza la letra 'C' en la tabla periódica?", answers: ["A. Cloro","B. Cromo", "C. Carbono", "D. Calcio"], correct: "c"},
    { question: "¿Cual es el numero atomico del carbono?", answers: [ "A. 12", "B. 6", "C. 8", "D. 14"], correct: "B"},
    { question: "¿Que propiedad permite al carbono formar largas cadenas y estructuras complejas?", answers: ["A. Su electronegatividad", "B. Su baja masa atomica", "C. Su tetrevalencia", "D. Su conductividad"], correct: "C" },
    { question: "¿Cual de las siguientes moleculas es un ejemplo de la estructura de carbono?", answers: [ "A. Propano", "B. Glucosa", "C. Metano", "D. Etileno"], correct: "C"},
    { question: "¿Que tipo de enlace puede formar el carbono", answers: [ "A. Sencillos y dobles", "B. Sencillos, dobles y triples", "C. Solo dobles", "D. Solo secillos"], correct: "B"},
    { question: "¿Que se desmostro con la sintesis de la urea en el laboratorio por Friedrich Wohler?", answers: [ "A. Que los compuestos inoranicos son mas complejos", "B. Que los compuestos se pueden sintetizar en laboratorio", "C. Que el carbono no es esencial para la vida", "D. Que los compuestos organicos son inestables"], correct: "B"},
    { question: "¿Que geometria tiene el carbono en una hibridacion Sp2?", answers: ["A. Tetraedrica", "B. Trigonal planar", "C. Lineal", "D. piramidal"], correct: "B" },
    { question: "¿Cual de los siguientes compuestos tiene una estructura de enlace triple", answers: [ "A. Metano (CH4)", "B. Etileno (C2H4)", "C. Acetileno (C2H2)", "D. Propano (C3H8)"], correct: "C" },
    { question: "¿Que significa que el carbono sea no metalico?", answers: ["A. Que no puede formar enlaces con metales", "B. Que es un mal conductor de electricidad", "C. Que no brilla como los metales", "D. Que no tiene propiedades metalicas,"], correct: "D" },
    { question: "¿Que permitio el estudio de la estructura del carbono en la medicina?", answers: ["A. Crear materiales para construccion", "B. Desarrollar nuevos dispocitivos electronicos", "C. Diseñar farmacos especificos", "D. Mejorar la calidad del aire"], correct: "C" },
    { question: "¿Que es el grefeno", answers: ["A. Un gas", "B. Una forma de carbono en red cristalina", "C. Un metal", "D. Un compuesto inorganico"], correct: "B" },
    { question: "¿Como varia la estructura del carbono en sus diferentes formas?", answers: ["A. Forma solo cadenas lineales", "B. Forma estructuras lineales, ramificadas y anillos cerrados", "C. No puede formar anillos", "D. Forma estructuras cuadradas"], correct: "B" },
    { question: "¿Que tipo de estructura tiene el carbono en el diamante?", answers: ["A. Planar", "B. Lineal", "C. Cistalina tridimensional", "D. Piramidal"], correct: "C" },
    { question: "¿Que propiedad del carbono le permite formar diferentes compuestos sisteticos", answers: ["A. Su baja dencidad", "B. Su baja electronegatividad", "C. Su capacidad de formar multiples tipos de enlaces", "D. Su capacidad de formar redes metalicas"], correct: "C" },
    { question: "¿Cual de la siguientes es una aplicacion moderna de los compuestos de carbono", answers: ["A. Fabricacion de textiles sinteticos", "B. Produccion de diamantes artificiales", "C. Creacion de plasticos biodegradables", "D. Todas las anteriores"], correct: "D" },
    { question: "¿Que tipo de hibridacion permite al carbono tener una geometria lineal?", answers: ["A. sp", "B. sp2", "C. sp3", "D. d2sp3"], correct: "A" },
    { question: "¿Como ayuda la hibridacion sp3 a la estructura del metano?", answers: ["A. Le da una estructura trigonal planar", "B. Permite una estructura lineal", "C. Forma una estructura tetraedrica", "D. Le da una forma cubica"], correct: "C" },
    { question: "¿En que siglo se comenzo a entender la quimica organica moderna", answers: ["A. Siglo XVII", "B. Siglo XVIII", "C. Siglo XIX", "D. Siglo XX"], correct: "C" },
    { question: "¿Cual de los siguinetes NO es una biomolecula importante compuesta de carbono?", answers: ["A. Proteinas", "B. Carbohidratos", "C. Lipidos", "D. Acido sulfurico"], correct: "D" },
    { question: "¿Que compuesto de carbono es esencial para la fotosintesis?", answers: ["A. Metano", "B. Dioxido de carbono", "C. Monoxido de carbono", "D. Etano"], correct: "B" },
    { question: "¿Que permitio el desarrolo de nuevos materiales gracias al estudio del carbono?", answers: ["A. La creacion de nuevos metales", "B. El desarrolo de energias renovables", "C. La produccion de alimentos", "D. La mejora en la calidad del aire"], correct: "B" },
    { question: "¿Que descubrimiento de Friedrich Wohler cambio la percepcion de la quimica organica?", answers: ["A. La sistesis de plasticos", "B. La produccion de diamantes sinteticos", "C. La sistesis de una urea", "D. La destilacion del petroleo"], correct: "C" },
    { question: "Cual es una de la formas mas simples de moleculas organicas basadas en carbono", answers: ["A. Dioxido de azufre", "B. Metano", "C. Cloruro de sodio", "D. Acido nitrico"], correct: "B" },
    { question: "¿Que aspecto hace unico al carbono en la quimica organica?", answers: ["A. Su peso atomico", "B. Su capacidad para formar largas cadenas de atonomos", "C. Su color", "D. Su capacidad para disolver en agua"], Correct: "B" },
    { question: "¿Que geometria adopta el carbono cuando esta en la hibridacion sp3?", answers: ["A. Lineal", "B. Tetraedrica", "C. Planar", "D. Octaedrica"], Correct: "B" },

];

let selectedQuestions = [];

function startQuiz() {
    selectedQuestions = shuffleArray(questions).slice(0, 10);
    displayQuestions();
    document.getElementById("quiz").style.display = "block";
}

function displayQuestions() {
    let questionHTML = '';
    selectedQuestions.forEach((q, index) => {
        questionHTML += `<div>
            <p>${q.question}</p>
            ${q.answers.map((a, i) => `<label><input type="radio" name="q${index}" value="${a.charAt(0)}"> ${a}</label>`).join('<br>')}
        </div>`;
    });
    document.getElementById("questions").innerHTML = questionHTML;
}

function checkAnswers() {
    let score = 0;
    selectedQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correct) {
            score++;
        }
    });
    document.getElementById("score").innerText = `Tu puntuación es: ${score}/10`;
}

function restartQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").innerText = '';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
