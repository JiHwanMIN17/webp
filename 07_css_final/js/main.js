
const backToTop = document.getElementById('backtotop');
//backtotop이라는 id를 가지는 요소를 가지고 와야하는것을 backToTop으로 선언
function checkScroll(){
    /*
        웹페이지가 얼마나 스크롤 되어있나
    */
        let pageYOffset = window.pageYOffset;
        //yOffset에 스크롤값이 들어가 있게된다.
        
        if(pageYOffset !==0){
            backToTop.classList.add('show');
            //결과적으로 a id="backtotop" ></a>안에 show가 들어가게되어
            //a id="backtotop" class="show" ></a>
            //가 성립되어서
            /* #backtotop.show{
                // backtotop에 show라는 클래스가 있을 때 
                opacity: 1;
                visibility: visible;
                background-color: rgb(47,48,49);
              }
              가 성립이 된다.
            */
           
        }
        else{
            backToTop.classList.remove('show');
            //아니라면 class에 붙어있는 show를 삭제한다.
        }
}
function moveBackToTop(){
    //자연스럽게 최상단으로 이동시키기
    if(window.pageYOffset > 0){
        window.scrollTo({top:0, behavior: "smooth"})
        //   어디까지스크롤 +
        //   behavior 로 올라가는 효과가 어떤지 설정
    }
}
window.addEventListener('scroll',checkScroll);
//scroll할때마다 checkScroll을 호출해라
//window에 바로 이벤트를 걸어서 스크롤을 하게되면 어디서든 이 함수가 호출된다.
backToTop.addEventListener('click',moveBackToTop);
//click이라는 이벤트를 강제로 걸어서 moveBackToTop을 호출하는 것
