const myTarget = document.querySelector('.fade'); // ...手順(2)の部分

// IntersectionObserverのオプション設定　...手順(3)の部分
let myOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: '0'
};
  
  // myObserverにIntersectionObserverのインスタンスを代入
  const myObserver = new IntersectionObserver(myIntersect, myOptions);
  // observe(対象); として対象を監視
  myObserver.observe(myTarget);

// 条件を満たした実行される関数
function myIntersect(entries, myObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      myTarget.classList.remove('fade');
      myTarget.classList.add('is-animation');
    
	  // 監視を解除(インビューに入った最初だけアニメーションさせる)
	  myObserver.unobserve(myTarget);
	}
  });
}