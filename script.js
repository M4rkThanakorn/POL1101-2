const quizData = [
    {
        id: 1,
        question: "1. การปกครองระบอบประชาธิปไตยเกิดขึ้นครั้งแรก ณ ที่ใด และมีลักษณะการปกครองแบบใด?",
        options: [
            "ก. นครรัฐสปาร์ตา – ประชาธิปไตยโดยอ้อม",
            "ข. นครรัฐกรีกโบราณ – ประชาธิปไตยโดยตรง",
            "ค. กรุงโรมโบราณ – ประชาธิปไตยแบบผู้แทน",
            "ง. ประเทศอังกฤษ – ประชาธิปไตยแบบรัฐสภา"
        ],
        correct: 1,
        explanations: [
            "ก. ผิด เพราะนครรัฐสปาร์ตามีการปกครองแบบเผด็จการทหาร",
            "ข. ถูกต้อง เพราะเกิดขึ้นบริเวณนครรัฐกรีกโบราณ (ประมาณ 500 ปีก่อน ค.ศ.) เป็นประชาธิปไตยโดยตรงเนื่องจากอาณาเขตและประชากรยังน้อย",
            "ค. ผิด เพราะกรุงโรมโดดเด่นเรื่องระบอบสาธารณรัฐและกฎหมาย",
            "ง. ผิด เพราะอังกฤษเป็นต้นแบบประชาธิปไตยยุคใหม่"
        ]
    },
    {
        id: 2,
        question: "2. สิทธิเสรีภาพประเภทใดที่มีค่าสูงมาก หากเปิดให้แสดงออกอย่างเสรีแล้วจะช่วยป้องกันความขัดแย้งรุนแรงได้?",
        options: [
            "ก. เสรีภาพในการประกอบอาชีพ",
            "ข. เสรีภาพในการนับถือศาสนา",
            "ค. เสรีภาพในการพูด การพิมพ์ และการแสดงความคิดเห็น",
            "ง. สิทธิในทรัพย์สินส่วนบุคคล"
        ],
        correct: 2,
        explanations: [
            "ก. ผิด เพราะเป็นสิทธิส่วนบุคคลเกี่ยวกับการดำรงชีวิต",
            "ข. ผิด เพราะเป็นเรื่องความศรัทธาส่วนบุคคล",
            "ค. ถูกต้อง เพราะเอกสารระบุว่าหากยอมให้ทุกฝ่ายได้แสดงความคิดเห็นอย่างเสรี การขัดแย้งกันอย่างรุนแรงจะไม่เกิดขึ้น",
            "ง. ผิด เพราะเป็นสิทธิที่รัฐต้องคุ้มครองทรัพย์สินของประชาชน"
        ]
    },
    {
        id: 3,
        question: "3. ข้อใดคือตัวอย่างของ 'ความเสมอภาคในโอกาส' (Equality of Opportunity) ที่ปรากฏในเอกสาร POL1101?",
        options: [
            "ก. การจัดเก็บภาษีในอัตราก้าวหน้า",
            "ข. การกำหนดอัตราค่าจ้างขั้นต่ำ",
            "ค. การจัดตั้งมหาวิทยาลัยรามคำแหง",
            "ง. นโยบาย 30 บาทรักษาทุกโรค"
        ],
        correct: 2,
        explanations: [
            "ก. ผิด เพราะเป็นเครื่องมือสร้างความเสมอภาคทางเศรษฐกิจ (กระจายรายได้)",
            "ข. ผิด เพราะเป็นความเสมอภาคทางเศรษฐกิจ (สร้างความมั่นคงในรายได้)",
            "ค. ถูกต้อง เพราะการมีมหาวิทยาลัยรามคำแหงเป็นตัวอย่างของการให้โอกาสทุกคนในการศึกษาเพื่อเลื่อนฐานะทางสังคม",
            "ง. ผิด เพราะเป็นความเสมอภาคทางเศรษฐกิจด้านสวัสดิการการรักษาพยาบาล"
        ]
    },
    {
        id: 4,
        question: "4. ตามวาทะของ อับราฮัม ลินคอล์น คำว่า 'รัฐบาลโดยประชาชน' (Government by the people) มีความหมายตรงกับข้อใด?",
        options: [
            "ก. ประชาชนอยู่ในฐานะเป็นเจ้าของรัฐบาลและเป็นเจ้าของอำนาจอธิปไตย",
            "ข. ประชาชนทุกคนมีสิทธิที่จะเป็นผู้ปกครองได้ โดยไม่ถูกจำกัดไว้เฉพาะชนชั้นใดชนชั้นหนึ่ง",
            "ค. รัฐบาลต้องมีจุดประสงค์เพื่อบำบัดทุกข์บำรุงสุขให้กับประชาชน",
            "ง. รัฐบาลต้องมีการกำหนดวาระการดำรงตำแหน่งทุก 4 ปี"
        ],
        correct: 1,
        explanations: [
            "ก. ผิด เพราะข้อนี้เป็นความหมายของ 'รัฐบาลของประชาชน' (Of the people)",
            "ข. ถูกต้อง เพราะ 'รัฐบาลโดยประชาชน' หมายถึงประชาชนทุกคนมีสิทธิเป็นผู้ปกครองได้หากได้รับเสียงสนับสนุนจากประชาชนส่วนใหญ่",
            "ค. ผิด เพราะข้อนี้เป็นความหมายของ 'รัฐบาลเพื่อประชาชน' (For the people)",
            "ง. ผิด เพราะเป็นเพียงกลไกประกันการปกครองเพื่อประชาชน"
        ]
    },
    {
        id: 5,
        question: "5. การปกครองโดยเสียงข้างมากในระบอบประชาธิปไตย หากละเมิดหรือก้าวก่ายสิทธิของเสียงข้างน้อยจะถือเป็นการกระทำตามข้อใด?",
        options: [
            "ก. การใช้อำนาจตามหลักกฎหมาย (Rule by Law)",
            "ข. การใช้ 'กฎหมู่'",
            "ค. การประนีประนอมทางการเมือง",
            "ง. การยึดหลักเหตุผลนิยม"
        ],
        correct: 1,
        explanations: [
            "ก. ผิด เพราะการละเมิดสิทธิผู้อื่นขัดกับหลักกฎหมายประชาธิปไตย",
            "ข. ถูกต้อง เพราะเอกสารระบุชัดเจนว่า หากเสียงข้างมากละเมิดสิทธิขั้นพื้นฐานของเสียงข้างน้อย ถือเป็นการใช้ 'กฎหมู่'",
            "ค. ผิด เพราะการประนีประนอมคือการหลีกเลี่ยงความรุนแรงและรับฟังกัน",
            "ง. ผิด เพราะหลักเหตุผลนิยมต้องเคารพสิทธิของผู้อื่นด้วย"
        ]
    },
    {
        id: 6,
        question: "6. ข้อใดจัดเป็น 'อุปสรรคสำคัญ' ต่อระบอบประชาธิปไตยในสังคมไทย ที่เกิดจากการยึดตัวบุคคลมากกว่าหลักการ?",
        options: [
            "ก. ระบบอุปถัมภ์ (Patronage System)",
            "ข. การลงคะแนนแบบลับ (Secret Ballot)",
            "ค. หลักเหตุผลนิยม (Rationalism)",
            "ง. ความสำนึกรับผิดชอบต่อสังคมส่วนรวม (Public Spirit)"
        ],
        correct: 0,
        explanations: [
            "ก. ถูกต้อง เพราะระบบอุปถัมภ์เกิดจากการยึดตัวบุคคลมากกว่าหลักการ ซึ่งเป็นค่านิยมที่เป็นอุปสรรคต่อประชาธิปไตย",
            "ข. ผิด เพราะการลงคะแนนแบบลับเป็นหลักประกันเสรีภาพในการเลือกตั้ง",
            "ค. ผิด เพราะหลักเหตุผลนิยมคือการเคารพเหตุผล ซึ่งส่งเสริมประชาธิปไตย",
            "ง. ผิด เพราะ Public Spirit เป็นวิถีชีวิตประชาธิปไตยที่พึงประสงค์"
        ]
    },
    {
        id: 7,
        question: "7. คุณลักษณะในข้อใด **ไม่ใช่วิถีชีวิตแบบประชาธิปไตย** ตามที่ระบุในบทเรียน?",
        options: [
            "ก. มีความกตัญญูและเคารพผู้อาวุโส แต่ไม่ยึดติดในตัวบุคคลจนเคร่งครัดระบบอาวุโสเกินไป",
            "ข. ยอมรับการแก้ไขปัญหาความขัดแย้งด้วยสันติวิธีและการประนีประนอม",
            "ค. ปฏิบัติตามกฎหมายอย่างสม่ำเสมอ และหากเห็นว่ากฎหมายไม่เป็นธรรมให้ใช้วิธีฝ่าฝืนทันที",
            "ง. มีความสำนึกว่าตนเองเป็นเจ้าของประเทศและช่วยดูแลรักษาพยาบาลสาธารณสมบัติ"
        ],
        correct: 2,
        explanations: [
            "ก. ผิด (สอดคล้องกับประชาธิปไตย) เอกสารระบุให้เคารพผู้อาวุโสแต่ต้องเคารพเหตุผลมากกว่าบุคคล",
            "ข. ผิด (สอดคล้องกับประชาธิปไตย) เพราะรู้จักการประนีประนอมและไม่นิยมความรุนแรง",
            "ค. ถูกต้อง (เพราะข้อนี้ขัดกับประชาธิปไตย) เอกสารระบุว่าหากกฎหมายไม่เป็นธรรม ต้องหาทางเรียกร้องให้มีการแก้ไข มิใช่ฝ่าฝืนหรือไม่ยอมรับ",
            "ง. ผิด (สอดคล้องกับประชาธิปไตย) เป็นลักษณะของ Public Spirit"
        ]
    },
    {
        id: 8,
        question: "8. ข้อความ 'A hungry man is not a freeman' ถูกยกขึ้นมาอธิบายเรื่องความเสมอภาคในด้านใด?",
        options: [
            "ก. ความเสมอภาคทางการเมือง",
            "ข. ความเสมอภาคทางกฎหมาย",
            "ค. ความเสมอภาคทางเศรษฐกิจ",
            "ง. ความเสมอภาคทางสังคม"
        ],
        correct: 2,
        explanations: [
            "ก. ผิด เพราะเน้นเรื่องสิทธิทางการเมืองอย่างการเลือกตั้ง",
            "ข. ผิด เพราะเน้นการห้ามใช้มาตรฐานสองมาตรฐาน (Double Standard)",
            "ค. ถูกต้อง เพราะคนที่ยังหิวโหย (กังวลเรื่องปากท้อง) จะขาดความสนใจความเป็นไปของบ้านเมือง จึงต้องมีความมั่นคงทางเศรษฐกิจพอสมควร",
            "ง. ผิด เพราะเน้นเรื่องการเคารพศักดิ์ศรีความเป็นมนุษย์เท่ากัน"
        ]
    },
    {
        id: 9,
        question: "9. ในระบอบประชาธิปไตยมีหลักการปกครองโดยกฎหมาย ซึ่งในเอกสารได้ใช้วงเล็บคำศัพท์ภาษาอังกฤษไว้ว่าอย่างไร?",
        options: [
            "ก. Rule of Law",
            "ข. Rule by Law",
            "ค. Rule by Majority",
            "ง. Rule of People"
        ],
        correct: 1,
        explanations: [
            "ก. ผิด แม้จะเป็นคำสากลที่นิยมใช้ แต่ในเอกสารชีท POL1101 บทที่ 2 ระบุคำว่า Rule by Law ไว้โดยเฉพาะ",
            "ข. ถูกต้อง เอกสารหน้า 4 ระบุว่า 'ประชาธิปไตย คือการปกครองโดยกฎหมาย (Rule by Law)'",
            "ค. ผิด หมายถึงการปกครองโดยเสียงข้างมาก",
            "ง. ผิด ไม่ใช่คำศัพท์ทางรัฐศาสตร์ที่ระบุไว้ในบทเรียนนี้"
        ]
    },
    {
        id: 10,
        question: "10. ตามรัฐธรรมนูญในบทบัญญัติเกี่ยวกับสิทธิเสรีภาพ ข้อใดคือการกระทำที่ **รัฐไม่สามารถกระทำได้**?",
        options: [
            "ก. การจับกุมบุคคลเมื่อมีคำสั่งหรือหมายของศาล",
            "ข. การคุมขังบุคคลเมื่อมีคำสั่งศาล",
            "ค. การเนรเทศบุคคลสัญชาติไทยออกนอกราชอาณาจักร",
            "ง. การจำกัดเสรีภาพในการพูดที่หยาบคายลามกหรือหมิ่นประมาท"
        ],
        correct: 2,
        explanations: [
            "ก. ผิด รัฐทำได้หากมีหมายศาล (มาตรา 28)",
            "ข. ผิด รัฐทำได้หากมีคำสั่งศาล",
            "ค. ถูกต้อง ตามมาตรา 39 การเนรเทศผู้มีสัญชาติไทยออกนอกราชอาณาจักร หรือห้ามผู้มีสัญชาติไทยเข้าประเทศ จะกระทำมิได้",
            "ง. ผิด รัฐสามารถจำกัดการพูดที่ละเมิดสิทธิผู้อื่นหรือหยาบคายลามกได้"
        ]
    }
];

let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);

function loadQuestion() {
    const qData = quizData[currentQuestion];
    
    document.getElementById('progress-text').innerText = `ข้อที่ ${currentQuestion + 1} / ${quizData.length}`;
    document.getElementById('question-text').innerText = qData.question;
    
    const optionsContainer = document.getElementById('options-list');
    optionsContainer.innerHTML = '';

    qData.options.forEach((opt, index) => {
        const li = document.createElement('li');
        li.className = 'option-item';
        if (userAnswers[currentQuestion] === index) {
            li.classList.add('selected');
        }
        li.innerText = opt;
        li.onclick = () => selectOption(index);
        optionsContainer.appendChild(li);
    });

    // แสดง/ซ่อนปุ่มตามข้อปัจจุบัน
    if (currentQuestion === quizData.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === null) {
        alert("กรุณาเลือกคำตอบก่อนไปข้อถัดไปครับ");
        return;
    }
    currentQuestion++;
    loadQuestion();
}

function submitQuiz() {
    if (userAnswers[currentQuestion] === null) {
        alert("กรุณาเลือกคำตอบข้อสุดท้ายก่อนส่งข้อสอบครับ");
        return;
    }

    // คำนวณคะแนน
    let score = 0;
    quizData.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });

    // ซ่อนกล่องทำข้อสอบ และแสดงหน้าผลลัพธ์/เฉลย
    document.getElementById('question-box').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');

    document.getElementById('final-score').innerText = score;
    document.getElementById('max-score').innerText = quizData.length;

    showExplanations();
}

function showExplanations() {
    const expContainer = document.getElementById('explanations-container');
    expContainer.innerHTML = '';

    quizData.forEach((q, index) => {
        const userAns = userAnswers[index];
        const isCorrect = userAns === q.correct;

        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';

        let expItemsHTML = '';
        q.explanations.forEach(exp => {
            expItemsHTML += `<div>• ${exp}</div>`;
        });

        reviewDiv.innerHTML = `
            <div class="review-question">${q.question}</div>
            <div class="user-answer-box">
                คำตอบของคุณ: 
                <span class="${isCorrect ? 'text-correct' : 'text-wrong'}">
                    ${userAns !== null ? q.options[userAns] : 'ไม่ได้ตอบ'} 
                    ${isCorrect ? '✓ (ถูกต้อง)' : '✗ (ผิด)'}
                </span>
            </div>
            ${!isCorrect ? `<div class="user-answer-box text-correct">คำตอบที่ถูกต้อง: ${q.options[q.correct]}</div>` : ''}
            <div class="explanation-list">
                <strong>💡 คำอธิบายเพิ่มเติม:</strong>
                ${expItemsHTML}
            </div>
        `;

        expContainer.appendChild(reviewDiv);
    });
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('question-box').classList.remove('hidden');
    loadQuestion();
}

// เริ่มต้นโหลดข้อแรก
window.onload = loadQuestion;
