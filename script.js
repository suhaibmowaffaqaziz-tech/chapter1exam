const questionsData = [
    { id: 1, text: "من هو أول شخص استطاع أن يرى الخلية باستخدام مجهره؟", options: ["روبرت هوك", "فان ليفنهوك", "روبرت براون", "ماثياس شلايدن"], correct: 1 },
    { id: 2, text: "من هو أول شخص استخدم كلمة \"خلية\" (Cell) بعد فحص قشرة شجر البلوط ووصف نسيج الفلين؟", options: ["روبرت هوك", "فان ليفنهوك", "ثيودور شوان", "ماثياس شلايدن"], correct: 0 },
    { id: 3, text: "العالم الذي اكتشف نواة الخلية وقدم وصفاً لها عام 1831م هو:", options: ["ماثياس شلايدن", "ثيودور شوان", "روبرت براون", "روبرت هوك"], correct: 2 },
    { id: 4, text: "توصل العالم ماثياس شلايدن في عام 1838م إلى أن:", options: ["جميع الحيوانات تتكون من خلايا", "جميع النباتات تتكون من خلايا", "النواة هي أساس الخلية", "الخلايا تنتج من انقسام خلايا أخرى"], correct: 1 },
    { id: 5, text: "اكتشف عالم الحيوان ثيودور شوان في عام 1839م أن:", options: ["جميع النباتات تتكون من خلايا", "جميع الحيوانات تتكون من خلايا", "الخلية تحتوي على رايبوسومات", "البكتيريا خلايا بدائية"], correct: 1 },
    { id: 6, text: "يصل قطر بيضة الضفدع إلى حوالي:", options: ["100 مايكرومتر", "1 ملم ويمكن رؤيتها بالعين المجردة", "10 ملم", "0.1 ملم"], correct: 1 },
    { id: 7, text: "لا يتجاوز قطر بيضة الإنسان حوالي:", options: ["1 ملم", "10 مايكرومتر", "100 مايكرومتر", "500 مايكرومتر"], correct: 2 },
    { id: 8, text: "تتبع الكائنات بدائية النواة مثل البكتيريا والطحالب الخضر المزرقة والمايكوبلازما مملكة:", options: ["الطليعيات", "الفطريات", "الأوليات (Monera)", "النباتات"], correct: 2 },
    { id: 9, text: "يتركب الجدار الصلب في الخلية البكتيرية كيميائياً من مركبات هي:", options: ["البروتين والدهون وعديد السكريد", "السليلوز واللغنين فقط", "الدهون المفسفرة والبروتينات الناقلة", "النشا والكلايكوجين"], correct: 0 },
    { id: 10, text: "توجد الخلايا حقيقية النواة في عدة ممالك، عدا مملكة:", options: ["الطليعيات", "الفطريات", "الأوليات (بدائية النواة)", "النباتات والحيوانات"], correct: 2 },
    { id: 11, text: "يقتصر وجود جدار الخلية على:", options: ["الخلايا الحيوانية", "الخلايا النباتية", "البكتيريا والفطريات", "جميع الخلايا حقيقية النواة"], correct: 1 },
    { id: 12, text: "يتركب جدار الخلية النباتية في الخلايا الفتية كيميائياً من مادة:", options: ["الخشبين (اللكنين)", "السليلوز (Cellulose)", "البكتين الخالص", "الدهون المفسفرة"], correct: 1 },
    { id: 13, text: "يتثخن جدار الخلية النباتية في الخلايا المتقدمة في العمر نتيجة إضافة مادة:", options: ["السليلوز", "الكلايكوجين", "الخشبين (اللكنين - Lignin)", "البروتين"], correct: 2 },
    { id: 14, text: "يتألف الغشاء البلازمي كيميائياً من طبقتين رقيقتين من:", options: ["السليلوز والسكريات", "الجزيئات البروتينية الخالصة", "جزيئات الدهون المفسفرة وتتخللها جزيئات بروتينية", "الكربوهيدرات والنشا"], correct: 2 },
    { id: 15, text: "يشكل الماء نسبة مئوية من المكونات الكيميائية للسايتوبلازم تقدر بـ:", options: ["15%", "50%", "80%", "95%"], correct: 2 },
    { id: 16, text: "تشكل البروتينات في السايتوبلازم نسبة مئوية تقدر بـ:", options: ["15%", "80%", "5%", "50%"], correct: 0 },
    { id: 17, text: "تمتاز الشبكة البلازمية الداخلية الخشنة بوجود تراكيب على سطوح نبيباتها تسمى:", options: ["المريكزات", "الرايبوسومات", "الصهاريج", "الأعراف"], correct: 1 },
    { id: 18, text: "تكثر الشبكة البلازمية الداخلية الملساء في خلايا المبايض والخصى والغدتين الكظريتين لأنها تقوم بـ:", options: ["بناء البروتينات", "إفراز الهرمونات السترويدية", "التنفس الخلوي وتوليد ATP", "الهضم داخل الخلية"], correct: 1 },
    { id: 19, text: "يطلق على جهاز كولجي في الخلايا النباتية اسم:", options: ["الدكتيوسوم (Dictyosome)", "الليسوسوم", "الثايلوكويد", "الكرانا"], correct: 0 },
    { id: 20, text: "تتألف ردهات جهاز كولجي من أكياس مسطحة يطلق عليها:", options: ["الفجوات", "الحويصلات", "الصهاريج (Cisternae)", "الأعراف"], correct: 2 },
    { id: 21, text: "تسمى انثناءات وانطواءات الغشاء الداخلي للمايتوكوندريا بـ:", options: ["الكرانا", "الأعراف (Cristae)", "الثايلوكويد", "الصهاريج"], correct: 1 },
    { id: 22, text: "الوظيفة الرئيسية للمايتوكوندريا هي:", options: ["البناء الضوئي", "التنفس الخلوي", "تكوين السيليلوز", "الهضم الذاتي للخلية"], correct: 1 },
    { id: 23, text: "البلاستيدات التي تشكل مراكز لتحول سكر الكلوكوز إلى سكريات متعددة (نشاء) أو شحوم وبروتينات هي:", options: ["البلاستيدات الخضر", "البلاستيدات الملونة", "البلاستيدات عديمة اللون", "الثايلوكويد"], correct: 2 },
    { id: 24, text: "توجد صبغة الكلوروفيل في البلاستيدة الخضراء على أغشية:", options: ["السدى", "الكرانا (Grana)", "الغشاء الخارجي", "الصهاريج"], correct: 1 },
    { id: 25, text: "توجد الإنزيمات التي تختزل ثنائي أوكسيد الكربون (CO₂) في البلاستيدة الخضراء في:", options: ["السدى (Stroma)", "أغشية الكرانا", "الثايلوكويد", "الغشاء الخارجي"], correct: 0 },
    { id: 26, text: "تحاط الجسيمات الحالة بغشاء:", options: ["مزدوج الطبقة", "أحادي الطبقة", "ثلاثي الطبقة", "عديم الغشاء تماماً"], correct: 1 },
    { id: 27, text: "عملية تحرر الإنزيمات من الجسيمات الحالة إلى سايتوبلازم الخلية وموت الخلية تعرف بـ:", options: ["البلعمة", "البلزمة", "التحلل الذاتي (Autolysis)", "النقل النشط"], correct: 2 },
    { id: 28, text: "تتمثل الخيوط الدقيقة في هيكل الخلية بخيوط الأكتين والمايوسين، واللتان تكونان مسؤولتين عن:", options: ["حركة الكروموسومات نحو الأقطاب", "قدرة الخلية على التقلص والانبساط", "بناء البروتين", "إفراز الهرمونات"], correct: 1 },
    { id: 29, text: "تتكون النبيبات الدقيقة في هيكل الخلية من بروتين يدعى:", options: ["الأكتين", "المايوسين", "التيوبيولين (Tubulin)", "اللكنين"], correct: 2 },
    { id: 30, text: "يتركب الجسيم الحركي (الجسيم القاعدي) الذي يتخذ موقعاً عند قاعدة الهدب أو السوط بشكل مشابه لـ:", options: ["المريكزات", "الصهاريج", "النوية", "الرايبوسومات"], correct: 0 },
    { id: 31, text: "الفجوات المتخصصة التي تعمل على تخليص الخلية من الماء الزائد مع المواد الإبرازية في الأميبا والبراميسيوم هي:", options: ["الفجوات الغذائية", "الفجوات المتقلصة (Contractile Vacuoles)", "العصير الخلوي", "الحويصلات الإفرازية"], correct: 1 },
    { id: 32, text: "يملأ النواة سائل هلامي عديم اللون يسمى بـ:", options: ["العصير الخلوي", "السايتوبلازم", "البلازم النووي (Nucleoplasm)", "السدى"], correct: 2 },
    { id: 33, text: "تتكون النوية أساساً من البروتين والحامض النووي الرايبي:", options: ["RNA", "DNA", "ATP", "ADP"], correct: 0 },
    { id: 34, text: "عدد الكروموسومات في الخلايا الجسدية للإنسان هو:", options: ["23 كروموسوماً", "46 كروموسوماً", "64 كروموسوماً", "80 كروموسوماً"], correct: 1 },
    { id: 35, text: "عدد الكروموسومات في خلايا دودة الاسكارس هو:", options: ["2 كروموسوم", "12 كروموسوماً", "26 كروموسوماً", "46 كروموسوماً"], correct: 0 },
    { id: 36, text: "حركة الأيونات والجزيئات خلال وسط معين من المناطق ذات التركيز العالي إلى المناطق ذات التركيز الواطئ تسمى:", options: ["التناضح", "الانتشار (Diffusion)", "النقل النشط", "البلعمة"], correct: 1 },
    { id: 37, text: "حركة جزيئات الماء خلال غشاء اختياري النفاذية تبعاً لاختلاف التركيز تسمى:", options: ["الانتشار", "النفوذية", "التناضح (Osmosis)", "الإخراج الخلوي"], correct: 2 },
    { id: 38, text: "عند وضع خلية حيوانية في محلول واطئ التركيز (Hypotonic)، فإن الخلية:", options: ["تنكمش", "تكتسب الماء وتنتفخ وقد تتمزق", "لا تتأثر نهائياً", "تحدث لها بلزمة"], correct: 1 },
    { id: 39, text: "ابتعاد الغشاء الخلوي عن جدار الخلية النباتية عند وضعها في محلول عالي التركيز يسمى:", options: ["إزالة البلزمة", "البلزمة (Plasmolysis)", "التحلل الذاتي", "البلعمة"], correct: 1 },
    { id: 40, text: "عملية إدخال المواد الصلبة إلى داخل الخلية بواسطة إحاطة غشاء الخلية بها لتكون حويصلة تسمى:", options: ["الشرب الخلوي", "البلعمة (Phagocytosis)", "الإخراج الخلوي", "التناضح"], correct: 1 },
    { id: 41, text: "عملية تحرير بعض المواد من داخل الخلية إلى خارجها (مثل التخلص من الفضلات أو إفراز الهرمونات) تسمى:", options: ["البلزمة", "الشرب الخلوي", "الإخراج الخلوي (Exocytosis)", "الانتشار"], correct: 2 },
    { id: 42, text: "تتم عملية التحلل السكري (Glycolysis) لتنفس الكلوكوز في:", options: ["المايتوكوندريا", "سايتوبلازم الخلية", "نواة الخلية", "البلاستيدة الخضراء"], correct: 1 },
    { id: 43, text: "مقدار الربح الصافي من الطاقة (ATP) الناتج من عملية التحلل السكري لجزيء كلوكوز واحد هو:", options: ["1 ATP", "2 ATP", "4 ATP", "38 ATP"], correct: 1 },
    { id: 44, text: "يحصل التخمر الكحولي في الخميرة والنباتات الخضر عند غياب الأوكسجين متحولاً إلى:", options: ["حامض لبني", "كحول أثيلي وتحرر CO₂", "أستيل كو-A", "حامض أكسالوأسيتيك"], correct: 1 },
    { id: 45, text: "العضية المسؤولة عن تفاعلات دورة كريبس وإنتاج معظم الطاقة في التنفس الهوائي هي:", options: ["جهاز كولجي", "المايتوكوندريا", "الشبكة الملساء", "الجسيمات الحالة"], correct: 1 },
    { id: 46, text: "المجموع الكلي للطاقة الناتجة من أكسدة جزيء غرامي واحد من الكلوكوز أكسدة تامة في التنفس الهوائي هو:", options: ["2 ATP", "12 ATP", "38 ATP", "24 ATP"], correct: 2 },
    { id: 47, text: "نوع انقسام الخلية الذي تنقسم فيه الخلايا دون حصول تغيرات نووية وسايتوبلازمية واضحة في البكتريا والطحالب الخضر المزرقة هو:", options: ["الانقسام الخيطي", "الانقسام المباشر أو اللاخيطي (Amitosis)", "الانقسام الاختزالي", "الانقسام الثاني"], correct: 1 },
    { id: 48, text: "الطور الذي يسبق أطوار الانقسام الخيطي ويتميز بتضاعف جزيئات (DNA) والجسيم المركزي هو:", options: ["الطور التمهيدي", "الطور البيني (Interphase)", "الطور الاستوائي", "الطور الانفصالي"], correct: 1 },
    { id: 49, text: "الدور من أطوار الطور التمهيدي الأول في الانقسام الاختزالي الذي يحدث فيه الاقتران أو التشابك (Synapsis) للكروموسومات المتماثلة هو:", options: ["الدور القلادي", "الدور الازدواجي (Zygotene)", "الدور التغلظي", "الدور الانفراجي"], correct: 1 },
    { id: 50, text: "الدور من أطوار الطور التمهيدي الأول في الانقسام الاختزالي الذي تحدث فيه عملية التعابر (Crossing Over) بين الكروماتيدات غير الشقيقة هو:", options: ["الدور القلادي", "الدور الازدواجي", "الدور التغلظي (Pachytene)", "الدور الحركي"], correct: 2 }
];

let userAnswers = {};
let timerInterval = null;
let timeRemaining = 40 * 60; // 40 minutes in seconds

// DOM Elements
const startCard = document.getElementById('start-card');
const quizCard = document.getElementById('quiz-card');
const resultCard = document.getElementById('result-card');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const questionsContainer = document.getElementById('questions-container');
const timerDisplay = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const answeredCountDisplay = document.getElementById('answered-count');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', () => finishQuiz(false));
restartBtn.addEventListener('click', () => location.reload());
reviewBtn.addEventListener('click', reviewQuiz);

function startQuiz() {
    startCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    renderQuestions();
    startTimer();
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    const optionPrefixes = ['أ', 'ب', 'ج', 'د'];

    questionsData.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'bg-white rounded-xl shadow-sm p-6 border border-slate-200';
        questionElement.id = `q-card-${q.id}`;

        let optionsHTML = '';
        q.options.forEach((opt, optIndex) => {
            optionsHTML += `
                <div class="relative">
                    <input type="radio" id="q${q.id}_opt${optIndex}" name="question_${q.id}" value="${optIndex}" class="custom-radio hidden" onchange="selectAnswer(${q.id}, ${optIndex})">
                    <label for="q${q.id}_opt${optIndex}" id="label_${q.id}_${optIndex}" class="flex items-center p-4 border-2 border-slate-100 rounded-xl cursor-pointer hover:border-slate-300 transition-all text-slate-700 font-medium">
                        <span class="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm ml-3 shrink-0">${optionPrefixes[optIndex]}</span>
                        <span>${opt}</span>
                    </label>
                </div>
            `;
        });

        questionElement.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <h3 class="text-lg font-bold text-slate-800 leading-snug">
                    <span class="text-blue-600 ml-2">س${index + 1}:</span> ${q.text}
                </h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${optionsHTML}
            </div>
        `;

        questionsContainer.appendChild(questionElement);
    });
}

window.selectAnswer = function(questionId, selectedOptionIndex) {
    userAnswers[questionId] = selectedOptionIndex;
    updateProgress();
};

function updateProgress() {
    const totalQuestions = questionsData.length;
    const answeredCount = Object.keys(userAnswers).length;
    const percentage = (answeredCount / totalQuestions) * 100;
    
    progressBar.style.width = `${percentage}%`;
    answeredCountDisplay.textContent = `الأجوبة الإجمالية: ${answeredCount} / ${totalQuestions}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 300) { // 5 mins left
            document.getElementById('timer-container').className = "flex items-center space-x-2 space-x-reverse bg-red-50 text-red-700 border border-red-200 px-4 py-1.5 rounded-full font-bold text-lg shadow-sm animate-bounce";
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz(true);
        }
    }, 1000);
}

function finishQuiz(timeOut = false) {
    clearInterval(timerInterval);
    
    let score = 0;
    questionsData.forEach(q => {
        if (userAnswers[q.id] === q.correct) {
            score++;
        }
    });

    const percentage = Math.round((score / questionsData.length) * 100);
    
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');

    const resultIconContainer = document.getElementById('result-icon-container');
    const resultTitle = document.getElementById('result-title');
    const resultSubtitle = document.getElementById('result-subtitle');

    if (percentage >= 85) {
        resultIconContainer.className += " bg-emerald-100 text-emerald-600";
        resultIconContainer.innerHTML = '<i class="fa-solid fa-trophy"></i>';
        resultTitle.textContent = "ممتاز! أداء استثنائي";
        resultSubtitle.textContent = "لديك فهم ممتاز لمادة الأحياء (الفصل الأول)";
    } else if (percentage >= 50) {
        resultIconContainer.className += " bg-blue-100 text-blue-600";
        resultIconContainer.innerHTML = '<i class="fa-solid fa-medal"></i>';
        resultTitle.textContent = "جيد جداً! نتيجة طيبة";
        resultSubtitle.textContent = "لقد اجتزت الاختبار بنجاح ويمكنك تحسين أدائك أكثر";
    } else {
        resultIconContainer.className += " bg-red-100 text-red-600";
        resultIconContainer.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
        resultTitle.textContent = "تحتاج إلى المزيد من المراجعة";
        resultSubtitle.textContent = "ننصحك بإعادة قراءة الفصل ومراجعة الإجابات الصحيحة";
    }

    document.getElementById('final-score').textContent = `${score} / ${questionsData.length}`;
    document.getElementById('final-percentage').textContent = `${percentage}%`;

    if (timeOut) {
        alert("انتهاء الوقت المحدد للامتحان! تم تسليم الإجابات تلقائياً.");
    }
}

function reviewQuiz() {
    resultCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    submitBtn.classList.add('hidden'); // Hide submit in review mode

    questionsData.forEach(q => {
        const userChoice = userAnswers[q.id];
        const correctChoice = q.correct;

        for (let i = 0; i < q.options.length; i++) {
            const label = document.getElementById(`label_${q.id}_${i}`);
            const radio = document.getElementById(`q${q.id}_opt${i}`);
            radio.disabled = true;

            if (i === correctChoice) {
                label.classList.add('correct-answer');
            } else if (userChoice === i && userChoice !== correctChoice) {
                label.classList.add('wrong-answer');
            }
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}