(()=>{ //即時関数

//クイズデータ

// テンプレ
// {
//   question:"",
//   answers:[
//     "",
//     "",
//     "",
//     ""
//   ],
//   correct:""
// }

const quiz = [
  {
    question:"日本で一番面積が広い都道府県はどこ？",
    answers:[
      "千葉県",
      "北海道",
      "滋賀県",
      "広島県"
    ],
    correct:"北海道"
  },
  {
    question:"日本で一番面積が大きい湖はどこ？",
    answers:[
      "宍道湖",
      "洞爺湖",
      "霞ヶ浦",
      "琵琶湖"
    ],
    correct:"琵琶湖"
  },
  {
    question:"日本で一番高い山はどこ？",
    answers:[
      "富士山",
      "鋸山",
      "阿蘇山",
      "筑波山"
    ],
    correct:"富士山"
  },
  {
    question:"鬼滅の刃の主人公の名前は？",
    answers:[
      "竈門炭治郎",
      "竈門紋次郎",
      "竈門炎之助",
      "竈門健三郎"
    ],
    correct:"竈門炭治郎"
  },
  {
    question:"『夜に駆ける』を歌っているのは誰？",
    answers:[
      "YONIGE",
      "YOROSHIKU",
      "YOASOBI",
      "YOUKAI"
    ],
    correct:"YOASOBI"
  },
  {
    question:"2008年夏季オリンピックの開催地は？",
    answers:[
      "アテネ",
      "北京",
      "リオデジャネイロ",
      "ロサンゼルス"
    ],
    correct:"北京"
  },
  {
    question:"地球上から見える最も明るい恒星は？",
    answers:[
      "ペテルギウス",
      "プロキオン",
      "デネブ",
      "シリウス"
    ],
    correct:"シリウス"
  }
]

//クイズデータを増やせば、以下は変更不要
//クイズデータを増やせば、以下は変更不要


//定数、変数
const $doc = document;
const $btn = $doc.getElementsByTagName('button');
const $question = $doc.getElementById('js-question')
const $nextBtn = $doc.getElementById('next-button');
const quizLen = quiz.length;
let quizIndex = 0;
let handleIndex = 0;
let score = 0;
const ansLen =  quiz[quizIndex].answers.length;

//クイズセットアップ
const setupQuiz = () =>{
  //次へボタン非表示
  $nextBtn.textContent = "次へ進む";
  $nextBtn.style.display = 'none';
  //問題文表示
  $question.textContent = quiz[quizIndex].question;
  //選択肢表示
  let answersIndex = 0;
  while(answersIndex < ansLen){
    $btn[answersIndex].textContent = quiz[quizIndex].answers[answersIndex];
    answersIndex++;
  };
};

//正誤表示
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    $question.textContent = ('正解！');
    score++;
  }else{
    $question.textContent = ('不正解！');
  }
  btnNone();
  $nextBtn.style.display = 'inline-block';
  quizIndex++;

  $nextBtn.addEventListener('click',(e) => {
    if(quizIndex < quizLen){
      btnOn();
      setupQuiz();
    }else{
      $question.textContent = ('終了！あなたの正解数は ' + score + ' / ' + quizLen + ' でした！');
      reload();
    }
  });
};

//ボタン非表示関数
const btnNone = () =>{
  let btnIndex = 0;
  while(btnIndex < ansLen){
    $btn[btnIndex].style.display = 'none';
    btnIndex++;
  }
};

//ボタン表示関数
const btnOn = () =>{
  let btnIndex = 0;
  while(btnIndex < ansLen){
    $btn[btnIndex].style.display = 'inline-block';
    btnIndex++;
  }
};

//もう一度
const reload = () =>{
  $nextBtn.textContent = "もう一度挑戦する！";
  $nextBtn.addEventListener('click',()=>{
    window.location.reload();
  });
};

//正誤判定
const judge = () =>{
  while(handleIndex < ansLen){
    $btn[handleIndex].addEventListener('click',(e)=>{
      clickHandler(e);
    });
    handleIndex++;
  };
};

setupQuiz();
judge();

})();
