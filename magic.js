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
content[0] = "<h2>Coś o kole</h2><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac consectetur libero, non efficitur risus. Suspendisse vestibulum, lacus eu efficitur porta, mi ipsum cursus eros, ac blandit ante ex molestie nisl. Duis ac egestas est. Cras id sapien vel orci suscipit placerat. Pellentesque convallis, arcu at dictum blandit, lectus tortor lacinia nisl, quis luctus urna sem ultricies risus. Aenean a augue lectus. Mauris accumsan, dui at rhoncus convallis, lorem elit convallis velit, vitae tristique sapien erat elementum sem. Ut sed tempor tellus. Nullam quis convallis nibh, quis iaculis purus.</p>";
content[1] = '<div class="row"><div class="col-12"><h2>Kim jesteśmy?</h2><br/><p>W skrócie, grupka studentów którzy mają nadzieje osiągnąc coś więcej niż zaliczenie z prologa. W trochę mniejszym sktócie, drugą generacją koła naukowego uczelni PWSZ w gnieźnie - CodeFly. Małym zgrupowaniem nieco bardziej ambitnych niż normalnie studentów celujących w doskonalenie samych siebie i nabywanie nowych umiejętności. No i zaliczenie prologa.<br/><br/></p></div><div class="col-lg-4 offset-1 pt-4"><p>Chcesz dołączyć? Zraszamy! <br/>Nie chcesz? <br/>Odwiedź nas, może zmienisz zdanie!<br/>Nadal nie zainteresowany? Szkoda... <br/>Wielka, wielka szkoda...</p></div><div class="col-lg-4 offset-1"><img style="width: 100%; height: auto;" src="img/shame.gif" alt=""></div></div>';
content[2] = '<div class="row"><div class="col-sm-6"><h2>Pójść na browarka</h2></div><div class="w-100"></div><div class="col-sm-12 col-xl-6 mb-3"><p>Morbi euismod non metus vel molestie. Nunc lacus tellus, pellentesque sed dui quis, congue suscipit turpis. Aenean nisi dui, consequat sit amet aliquet non, commodo ac lorem. Morbi porta lacus sit amet tellus imperdiet condimentum. Quisque ut ultricies nisi.</p></div><div class="col-sm-12 col-xl-6"><div class="mb-3"><img src="img/aktualne2.png"></div></div></div>';
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
	clicked[currentNumber] = true;

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
	if(animation == 99)	animation = Math.floor(Math.random() * 2);
	else	animation++;

	if (animation >=3) 	animation = Math.floor(Math.random() * 2);

	currentNumber = nr;
	//animation =2;    ////////////////////////// Ustalanie na sztywno animacji
	if(clicked[currentNumber] == false)	hide();
}
/*********** ON LOAD **************/
function Start()
{
	document.getElementById("wrapper").style.display = 'none';
	$('#welcomeImg').fadeOut(1);
	document.getElementById("welcomeImg").innerHTML = '<img  src="img/codefly/CodeFly_FlyOnly_Outline_White.png" alt="">';
	$('#welcomeImg').fadeIn(2000);
	document.getElementById('top').scrollIntoView({behavior: 'smooth'});

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
var numb = Math.floor(Math.random()*3)+1

var timerS1 = 0;
var timerS2 = 0;
var timerS3 = 0;
function hideSlide()
{
	$("#kafelek1").fadeOut(500);
}
function changeSlide()
{
	clearTimeout(timerS3);
	numb++; if(numb >3) numb = 1;
	
	var plik ="<img src=\"img/slajdy/o_nas_slider" + numb +".jpg\"/>";
	
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
