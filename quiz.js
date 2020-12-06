// クイズデータ
const quiz = [
  {
  question:"日本で最初の内閣総理大臣はだれ？",
  answers:['大隈重信','板垣退助','伊藤博文','伊能忠敬'],
  correct:'伊藤博文',
  },{
  question:"本能寺の変は何年に起きた？",
  answers:['1582年','1600年','1560年','1467年'],
  correct:'1582年'
  },{
  question:"室町幕府最後の将軍は誰？",
  answers:['足利義満','足利義昭','足利義政','足利義輝'],
  correct:'足利義昭'
  }
]

// 定数、変数
let quizIndex = 0;   //クイズ数カウント定数
let handleIndex = 0;   //選択肢カウント
let score = 0;  //スコアカウント
const $btn = document.getElementsByTagName('button');

// 問題セットアップ関数
const setupQuiz = ()=>{
  let btnIndex = 0;
  // 問題文を表示
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  // 選択肢を表示
  while( btnIndex < quiz[quizIndex].answers.length){
    $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  };
};

// 正誤判定関数
const clickHandler = (e)=>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解です！');
    score++;
  }else{
    window.alert('不正解です！');
  }
  quizIndex++;

  //継続判定関数
  if(quizIndex < quiz.length){
    setupQuiz();
  }else{
    //正解数判定
    if(score === quiz.length){
      window.alert('CONGRATULATIONS!あなたの正解数は'+score+'/'+quiz.length+'で満点です！');
    }else if (score === 0) {
      window.alert('残念！あなたの正解数は'+score+'/'+quiz.length+'です！次は頑張りましょう！');
    }else{
      window.alert('終了！あなたの正解数は'+score+'/'+quiz.length+'です！');
    }
  }
}

// 判定関数
const judge =()=>{
  while(handleIndex < $btn.length){
    $btn[handleIndex].addEventListener('click',(e)=>{
      clickHandler(e);
    });
   handleIndex++;
  };
};

// 実行
setupQuiz();
judge();
// 終了
