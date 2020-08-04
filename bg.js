const body = document.querySelector("body"); //문서 내 <body> 쿼리

const IMG_NUMBER = 5; //총 이미지 5장

//이미지 불러오기 기능
function handleImgLoad() {
  console.log("finished loading"); //로드 완료시 로그로 완료 전달
}

//이미지 그리기 기능
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage"); //이미지 클래스에 bgImage 추가
  body.prepend(image); //body에 image변수 입력
}

//랜덤 생성 함수
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); //랜덤이 float이라 floor로 내림 소숫점이하 버리기
  return number; //랜덤으로 나온 숫자를 함수 사용시 리턴해줌
}

//bg.js 로드시 실행
function init() {
  const randomNumber = genRandom(); //randomNumber 변수에 임의숫자 생성
  paintImage(randomNumber); //paintImage 함수 불러오면서 숫자 보내줌
}

init(); //실행
