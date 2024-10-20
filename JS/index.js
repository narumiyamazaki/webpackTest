const options = {
	type      : 'loop',      // ループを有効にする
	   perPage   : 1,           // 1ページに表示するスライド数
	   perMove   : 1,           // 1度に移動するスライド数
	   autoplay  : 'slide',       // 自動再生を無効にする
	   interval  : 3000,        // 次のスライドが表示されるまでの時間（ミリ秒）
	   pauseOnHover: true,      // マウスホバー時に一時停止
	   pagination: false,       // ページネーションを無効にする
	   arrows    : false,        // 前後の矢印を表示
	   drag      : false,       // ドラッグでの移動を無効にする
	   gap       : 10,
 };
 
 const splide = new Splide(".splide", options);
 
 splide.mount(window.splide.Extensions);