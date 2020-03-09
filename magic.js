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
content[1] = '<h2>Kim jesteśmy?</h2><br/><p>Mauris vehicula molestie magna vehicula convallis. Vestibulum sed ipsum sed velit ornare mattis ut eget nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus est justo, malesuada eget tempus vel, ultrices non quam. Proin vestibulum viverra nisi nec tempor. Morbi ullamcorper mauris eu nulla eleifend condimentum. Donec condimentum a quam in efficitur. Mauris ut sapien aliquet, molestie eros a, mattis ante. Vestibulum vitae consequat augue. Donec mollis vehicula est sed mattis.Mauris ut sapien aliquet, molestie eros a, mattis ante. Vestibulum vitae consequat augue. Donec mollis vehicula est sed mattis.<br/><br/>Sed urna urna, pulvinar id egestas vel, ornare ut ante. Aliquam finibus augue ut mauris facilisis venenatis. Phasellus efficitur laoreet sagittis. Sed sollicitudin est ut dui dictum, eget tempus arcu placerat.  </p>';
content[2] = '<div class="row"><div class="col-sm-6 offset-6"><h2>Zdać algorytmy</h2></div><div class="col-sm-12 col-xl-6"><div class="mb-3"><img src="img/aktualne1.png"></div><div class="mt-3"><img src="img/aktualne1.png"></div></div><div class="col-sm-12 col-xl-6"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur orci at quam dictum tempus. Nulla tempus, augue non efficitur euismod, enim tellus egestas mi, et elementum lorem nisi at dui. Praesent laoreet felis sit amet sagittis porttitor. Praesent et nisl vitae felis sollicitudin imperdiet. Nam semper posuere euismod. Donec posuere maximus metus at scelerisque. In non lectus justo. Nulla consequat tincidunt magna, a dictum nisi dignissim vel.</p></div></div>';
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
tail[2] = 'kafelek5';
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
let animation = 0;

function hide()
{
	console.log(animation);
	if(animation == 0)
	{
		timer = setTimeout('changeContent()',500);
		$('#' + tail[currentNumber]).fadeOut(500);
	}
	else if(animation==1)
	{
		$('#' + tail[currentNumber]).slideUp();
		timer = setTimeout('changeContent()',300);
	}
}
function changeContent()
{
	clearTimeout(timer);

	document.getElementById(tail[currentNumber]).innerHTML = content[currentNumber];
	document.getElementById(tail[currentNumber]).style.backgroundColor = "transparent";
	clicked[currentNumber] = true;

	if(animation==0)
	{
		$('#' + tail[currentNumber]).fadeIn(500);		
	}
	else if (animation==1)
	{	
		$('#' + tail[currentNumber]).slideDown();
	}

	
}
function showContent(nr)
{
	if(animation == 99)
	{
		animation = Math.floor(Math.random() * 2);
	}
	else
	{
		animation++;
	}

	if (animation >=2) 
	{
		animation = Math.floor(Math.random() * 2);
	}

	currentNumber = nr;

	if(clicked[currentNumber] == false)
	{
		hide();
	}
}
function Start()
{
	
	document.getElementById("wrapper").style.display = 'none';
	$('#welcomeImg').fadeOut(1);
	document.getElementById("welcomeImg").innerHTML = '<img  src="img/logo2.png" alt="">';
	
	$('#welcomeImg').fadeIn(5000);
	timer1 = setTimeout('showPage()',6000);
}
function showPage()
{
	console.log('weszło do funkcji')
	clearTimeout(timer1);
	document.getElementById("wrapper").style.display = 'block';
	$("#welcomeScreen").fadeOut(1000);
}
