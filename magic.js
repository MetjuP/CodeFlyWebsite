window.onload=Start;

const clicked = new Array(10);
clicked[0]=false;
clicked[1]=false;
clicked[2]=false;
clicked[3]=false;
clicked[4]=false;
clicked[5]=false;
clicked[6]=false;
clicked[7]=false;
clicked[8]=false;
clicked[9]=false;
const content = new Array(10);
content[0] = "<h2>Coś o kole</h2><br/><p>Koło naukowe Państwowej Wyższej Szkoły Zawodowej W Gnieźnie. Niewielka, lecz zintegrowana organizacja operująca w sferze informatycznej od lat... No może nie do końca. CodeFly upadał i powracał kilkukrotnie, jednak tym razem powracamy niczym Fenix z popiołów! Albo mucha która uciekła przed laczkiem...<br/><br/>Nowy zarząd, nowe twarze i nowe pomysły. W skrócie, nowa generacja CodeFly!</p>";
content[1] = '<div class="row"><div class="col-12"><h2>Kim jesteśmy?</h2><br/><p>W skrócie, grupka studentów którzy mają nadzieje osiągnąc coś więcej niż zaliczenie z prologa. W trochę mniejszym sktócie, drugą generacją koła naukowego uczelni PWSZ w gnieźnie - CodeFly. Zbieraniną nieco bardziej ambitnych studentów celujących w doskonalenie samych siebie i nabywanie nowych umiejętności. No i zaliczenie prologa.<br/><br/>Pod przewodnictwem Profesora M. Leszka i z lekką atmosferą wokół nas mamy zamiar zaprezentować się światu pracując nad rozmaitymi projektami, klepiąc kod w Pythonie i paląc bramki NAND na zajęciach. A to wszystko w celu promowania uczelni i samego koła. Niech żyje zbrodniczy reżim!</p></div>';
content[2] = '<div class="row"><div class="col-sm-12 col-xl-6 mb-3"><p><h2>Miejsce na twój projekt!</h2>Jesteś studentem naczej uczelni? Masz ciekawy pomysł? Świetnie! przyjdź na nasze spotkanie lub skontaktuj się z nami mailowo i zrealizuj swoje marzenia :)</p></div><div class="col-sm-12 col-xl-6"><div class="mb-3"><img src="img/aktualne2.jpg"></div></div></div>';
content[3] = '';
content[4] = '';
content[5] = '';
content[6] = '';
content[7] = '';
content[8] = '';
content[9] = '';
const tail =new Array(10);
tail[0] = 'kafelek2';
tail[1] = 'kafelek3';
tail[2] = 'kafelek6';
tail[3] = 'kafelek';
tail[4] = 'kafelek';
tail[5] = 'kafelek';
tail[6] = 'kafelek';
tail[7] = 'kafelek';
tail[8] = 'kafelek';
tail[9] = 'kafelek';

let timer = 0;
let timer1 = 0;
let currentNumber = 0;
let currentHeight = 0; 
let animation = 99;
let audioClick = new Audio('click1.wav');

function hide() // ZANIKANIE KAFELKÓW
{
	console.log(animation);
	if(animation == 0)
	{
		timer = setTimeout('changeContent()',500);
		console.log(currentNumber);
		console.log(tail[currentNumber]);
		$('#' + tail[currentNumber]).fadeOut(500);
	}
	else if(animation==1)
	{
		$('#' + tail[currentNumber]).slideUp();
		timer = setTimeout('changeContent()',300);
	}
	else if(animation==2)
	{
		currentHeight = document.getElementById(tail[currentNumber]).offsetHeight;
		$('#' + tail[currentNumber]).animate(
			{width: '30px',
			height: '' + currentHeight + 'px'
			});
		timer = setTimeout('changeContent()',300);
		document.getElementById(tail[currentNumber]).innerHTML = '';
	}
}
function changeContent() // PODMIANA ZAWRTOSCI KAFELKA + WYŁANIANIE
{
	clearTimeout(timer);

	document.getElementById(tail[currentNumber]).innerHTML = content[currentNumber];
	document.getElementById(tail[currentNumber]).style.backgroundColor = "transparent";
	document.getElementById(tail[currentNumber]).style.borderStyle = 'dashed';

	if(animation==0)
	{
		$('#' + tail[currentNumber]).fadeIn();		
	}
	else if (animation==1)
	{	
		$('#' + tail[currentNumber]).slideDown();
	}
	else if(animation==2)
	{
		document.getElementById(tail[currentNumber]).style.maxHeight = "" + currentHeight + "px";
		$('#' + tail[currentNumber]).animate(
			{width: '100%',
			});
		timer = setTimeout('setAutoHeight(tail[currentNumber])', 500);
	}	
}
function setAutoHeight(tail)
{
	console.log('maxHeight 100%')
	document.getElementById(tail).style.maxHeight = 'none';
	document.getElementById(tail).style.height = 'auto';
}
function showContent(nr) //KLIKNIECIE NA KAFELEK
{
	currentNumber = nr;
	if(clicked[currentNumber] == false)	
	{
		clicked[currentNumber] = true;

		if(animation == 99)	animation = Math.floor(Math.random() * 1) +1;
		else	animation++;

		if (animation >=3) 	animation = Math.floor(Math.random() * 1) +1;
		
		hide();
	}
}
/*********** ON LOAD **************/
function Start()
{
	document.getElementById("wrapper").style.display = 'none';
	$('#welcomeImg').fadeOut(1);
	document.getElementById("welcomeImg").innerHTML = '<img  src="img/codefly/CodeFly_FlyOnly_Outline_White.png" alt="">';
	$('#welcomeImg').fadeIn(2000);

	timer1 = setTimeout('showWelcome()',3000);
}
/********** WELCOME SCREEEN *************/
function showWelcome()
{
	audioClick.play();
	clearTimeout(timer1);
	$("#welcomeImg").animate({margin: '7px'},'fast');
	$("#welcomeImg").animate({margin: '0px'},'fast');
	timer1 = setTimeout('hideWelcome()', 300);
}
function hideWelcome()
{
	clearTimeout(timer1);
	document.getElementById("wrapper").style.display = 'block';
	for(i=1;i <= 3;i++)
	{
		$('#event' + i + '_roz').slideUp();
	}
	$("#welcomeScreen").slideUp(1500);
	changeSlide();
	changeProject();
}
/*********** EVENT SLIDER ***************/
function eventSlideDown(nr)
{
	$('#event' + nr+'_roz').slideDown('slow');
	document.getElementById('rozwin_event' +nr).innerHTML = '';
	document.getElementById('event' + nr).style.borderStyle = 'dashed';
}
function eventSlideUp(nr)
{
	$('#event' + nr+'_roz').slideUp();
	document.getElementById('rozwin_event' +nr).innerHTML = 'Sprawdź jak idą przygotowania!';
	document.getElementById('event' + nr).style.borderStyle = 'solid';

	document.querySelector('#event' + nr).scrollIntoView({behavior: 'smooth'});
}

/*******************   SLIDER  *******************/
let numb = Math.floor(Math.random()*3)+1

let timerS1 = 0;
let timerS2 = 0;
let timerS3 = 0;
function hideSlide()
{
	$("#kafelek1").fadeOut(500);
}
function changeSlide()
{
	clearTimeout(timerS3);
	numb++; if(numb >3) numb = 1;
	
	let plik ="<img src=\"img/slajdy/o_nas_slider" + numb +".jpg\"/>";
	
	document.getElementById("kafelek1").innerHTML = plik;
	$("#kafelek1").fadeIn(500);
	
	timerS1 = setTimeout("changeSlide()",5000);
	timerS2 = setTimeout("hideSlide()",4500);

}
function setSlide()
{
	clearTimeout(timerS1);
	clearTimeout(timerS2);
	hideSlide();
	timer3 = setTimeout('changeSlide()',500);

}


/*******************   PROJEKTY  *******************/
const project = new Array(3);
project[0] =  '<div class="row"><div class="col-sm-12 p-3 mt-3"><h2 style="text-align: center;">Konsola w stylu retro</h2><p>Oto nowe dzieło twórców... póki co absolutnie niczego! Najnowszy i już ostatni zawodnik ósmej generacji konsol wkracza na rynek z niezrównana mocą obliczeniową Raspberry Pi 4b i jej niezawodnym 4GB pamięci RAM! A jego imię to PWSZ-X!<br/><br/>Wyposażony w okrągłe 32GB pamięci SD i uzbrojony w zestaw Joysticka i czterech przycisków zaprojektowanych z myślą o prawdziwie oldskulowym doświadczeniu, ta bestia wytrzyma nawet najbardziej wymagające tytuły tej generacji, takie jak: [Tytuł gry]! [Tytuł gry]! [TTytuł gryBA]! I co najważniejsze, kandydat na grę roku [Tytuł gry]!</p></div><div class="col-md-6 p-3"><img src="img/konsola1.jpg" style="height: 220px;"></div><div class="col-md-6 p-3 d-none d-sm-block"><img src="img/konsola2.jpg" style="height: 220px;"></div><div class="col-sm-12 p-3"><p>Doświadcz przyszłości branży gier w rewolucyjnej rozdzielczości FullHD aż do dwóch graczy jednocześnie! A to wszystko całkowicie za darmo! To w końcu świetna cena!</p></div></div>';
project[1] = '';
project[2] = '';

let projNr = 0; // Math.floor(Math.random()*3)

let timerP1 = 0;
let timerP2 = 0;
let timerP3 = 0;
function hideProject()
{
	$("#proj-content").fadeOut(500);
}
function changeProject()
{
	clearTimeout(timerS3);
	
	document.getElementById("proj-content").innerHTML = project[projNr];
	$("#proj-content").fadeIn(500);

}
function setProject(nr)
{
	if(nr != projNr)
	{
		projNr = nr;
		hideProject();
		timer3 = setTimeout('changeProject()',500);
	}

}