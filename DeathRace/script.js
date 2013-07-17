  
//=================================== variables ==========================================//

  
//----------------------------- score variables------------------------------------------//
			
			var score=0;  
			var scoretimer;
			
//---------------------------- race car variables ---------------------------------------//			
			
			var racecar=document.getElementById("car"); // race car
			
			var speed=10;  // normal speed
			var turbo=0.25; // nitros speed
						
			
			
//-------------------------------- road variables--------------------------------------------//
			
			
			
			var roadTimer ;			
			var roadimg = document.getElementById("road") ; 
			var roadimg1 = document.getElementById("road1") ;
			
			var selectedroad=1;
			var selectedcar=1;
			
//------------------------------ enemy variables-----------------------------------------//
			
			var enemyspeed=20;
			var enemyCarTimer
			
			var enemy1 = document.getElementById("enemy1");
			var enemy2 = document.getElementById("enemy2");
			var enemy3 = document.getElementById("enemy3");
			var enemy4 = document.getElementById("enemy4");
			var enemy5 = document.getElementById("enemy5");
			var enemy6 = document.getElementById("enemy6");
			var enemy7 = document.getElementById("enemy7");
			var enemy8 = document.getElementById("enemy8");
			var enemy9 = document.getElementById("enemy9");
			
			var EnemyArr = [enemy1 , enemy2 , enemy3 , enemy4 , enemy5, enemy6 ,enemy7 ,enemy8 ,enemy9 ] ;
			var EnemyTop = [  -697 , -9000 , -850 , -1000 , -6000 , -785 , -12464 ,-456797,-7898798];
			var EnemyLeft = [ 444 , 325 , 510 , 620 ,290 ,220 , 600 ,610,400];
			

            

	
		
			
		
			

	
//========================================= Functions ================================================//				
		
	function setCookie()
	{
		document.cookie = 'Cookie Name='+12;
	}
	window.onload=setCookie;
			
//---------------------------------------- score calculation ----------------------------------------//			
			
			
function Get() // increment score ---- >
{
	score++;
}			
			
function IncreseScore()
{			
	scoretimer=setInterval("Get()",50);
}				

// display score -------- >

function Score()
{

	setInterval("X()",1);
}

function X(){
				
				myElementId=document.getElementById("score");
				myElementId.value="                "+score;
				
				
			}


//----------------------------------------- repeat road ----------------------------------------------//


function moveRoad()
{ 			
			
				
			  if(roadimg.style.pixelTop >= 0 && roadimg1.style.pixelTop < 0)
				  {
					roadimg.style.pixelTop +=10 ;
					roadimg1.style.pixelTop += 10 ;
				  }
			  
			 else if(roadimg1.style.pixelTop >= 0 && roadimg.style.pixelTop < 0)
				  {
					roadimg.style.pixelTop +=10 ;
					roadimg1.style.pixelTop += 10 ;
				  }
			 
			 else if(roadimg.style.pixelTop == 800 )
				  {
					 roadimg.style.pixelTop = -800;
				  }
				
  			 else if(roadimg1.style.pixelTop == 800 )
				  {
					 roadimg1.style.pixelTop = -800;
				  }		    
            
}
          
function animateRoad()
			{
			  
			  clearInterval(roadTimer);
			  roadTimer = setInterval("moveRoad()",speed) ; 
			
			}

			
//-------------------------------------- car movement -----------------------------------//	

function MoveCar(event)
		
	{
			
		if (event.keyCode==88)//speed on
			{
			  
			  racecar.src="images/1_2.png";
			  clearInterval(roadTimer);
			  roadTimer = setInterval("moveRoad()",turbo);
			  clearInterval(enemyCarTimer);
			  enemyCarTimer = setInterval("moveEnemyCar() " , .5);
			  clearInterval(scoretimer);
			  scoretimer=setInterval("Get()",7);
			
			}
			
		if (event.keyCode==90)//speed off
			{
			  
			  racecar.src="images/1.png";
			  clearInterval(roadTimer);
			  roadTimer = setInterval("moveRoad()",speed);
			  clearInterval(enemyCarTimer);
		      enemyCarTimer = setInterval("moveEnemyCar() " , enemyspeed);
			  clearInterval(scoretimer);
			  scoretimer=setInterval("Get()",50);		
			  
			}	
		
		
		if (event.keyCode==39)//right
			{
				if(racecar.style.pixelLeft <589)
					{
						
					racecar.style.pixelLeft +=15;
					
						
					}
			}
		
		if (event.keyCode==37)//left
			{	
				if(racecar.style.pixelLeft > 200)
					{
					racecar.style.pixelLeft -=15;
					
					}
			}
		
		if (event.keyCode==38)//up
			{
				if(racecar.style.pixelTop >20)
					{
					racecar.style.pixelTop -=10;
					
					speed=7;
					}
			}
		
		if(event.keyCode==40)//down
			{	
				if(racecar.style.pixelTop <500)
					{
					racecar.style.pixelTop +=10;
					
					}
			}				
		
	}
				




//----------------------------------------- enemy cars --------------------------------------------------//


function moveEnemyCar()
{
 
	  for(i = 0 ; i <= 8 ; i++)
	  {
			   if(EnemyArr[i].style.pixelTop <= 800 )
				   {			
					 EnemyArr[i].style.pixelTop +=3;
				   }	
			   
			   else
				   {
					 EnemyArr[i].style.pixelTop = EnemyTop[i] ;
					 EnemyArr[i].style.pixelLeft = EnemyLeft[i];	 
				   }
	  }

  
}


function AnimateEnemyCar()
	{
		 clearInterval(enemyCarTimer);
		 enemyCarTimer = setInterval("moveEnemyCar() " , enemyspeed);
	}


//----------------------------------- collision detection -------------------------------------//



function CheckColletion(enemyCar )
{ 
    
	 
   
   
   if( racecar.style.pixelTop >= enemyCar.style.pixelTop )
   {
		if(enemyCar.style.pixelTop + 145 >= racecar.style.pixelTop) // the enemy car in the top 
		{
			 if((enemyCar.style.pixelLeft +  70) > racecar.style.pixelLeft && (enemyCar.style.pixelLeft + 70) < (racecar.style.pixelLeft + 70))
			  {
				window.location = "../crash/crash.html"
				clearInterval(enemyCarTimer);
				clearInterval(roadTimer);
				clearInterval(scoretimer);
				
			
			  }
     
		else if(enemyCar.style.pixelLeft <= racecar.style.pixelLeft + 60 && enemyCar.style.pixelLeft > racecar.style.pixelLeft)
			  {
			   window.location = "../crash/crash.html";
			   clearInterval(enemyCarTimer);
			   clearInterval(roadTimer); 
				clearInterval(scoretimer);			   
			 
			  }

		}
   }
   /////////////////// the enemy car at the bottom ////////////////////////////////
   else if(((racecar.style.pixelTop <= enemyCar.style.pixelTop) && (racecar.style.pixelTop > enemyCar.style.pixelTop+85))|| ((racecar.style.pixelTop+85>=enemyCar.style.pixelTop)&&(racecar.style.pixelTop+85 < enemyCar.style.pixelTop+85))) // the enemy car in the bottom 
   {
    
		 if(((enemyCar.style.pixelLeft +  60) > (racecar.style.pixelLeft)) && ((enemyCar.style.pixelLeft ) < (racecar.style.pixelLeft )))
			  {
				window.location = "../crash/crash.html"
				clearInterval(enemyCarTimer);
				clearInterval(roadTimer);
				clearInterval(scoretimer);
				
			  }
		 else if((enemyCar.style.pixelLeft <= (racecar.style.pixelLeft +60)) && (enemyCar.style.pixelLeft > racecar.style.pixelLeft))
			  {
			    window.location = "../crash/crash.html"
				clearInterval(enemyCarTimer);
				clearInterval(roadTimer);
				clearInterval(scoretimer);
				
				
			  }

   
   }
   
} // end of function 

//function CheckColletions()
//{
	setInterval("CheckColletion(enemy1)" , 0.1);
	setInterval("CheckColletion(enemy2)" , 0.1);
	setInterval("CheckColletion(enemy3)" , 0.1);
	setInterval("CheckColletion(enemy4)" , 0.1);
	setInterval("CheckColletion(enemy5)" , 0.1);
	setInterval("CheckColletion(enemy6)" , 0.1);
	setInterval("CheckColletion(enemy7)" , 0.1);
//}
				
	
//---------------------------------------------- Select Car---------------------------------------------------//

		function Back(){document.getElementById("back").src="images/back _2.gif";}
		function Back2(){document.getElementById("back").src="images/back.gif";}
		
		function Start(){document.getElementById("start").src="images/start_2.gif";}
		function Start2(){document.getElementById("start").src="images/start.gif";}

		function car1(){document.getElementById('1').src='images/1_2.gif';}
		function car2(){document.getElementById('1').src='images/1.gif';}

		function car3(){document.getElementById('2').src='images/2.gif';}
		function car4(){document.getElementById('2').src='images/2_2.gif';}

		function car5(){document.getElementById('3').src='images/3.gif';}
		function car6(){document.getElementById('3').src='images/3_2.gif';}

		function car7(){document.getElementById('4').src='images/4.gif';}
		function car8(){document.getElementById('4').src='images/4_2.gif';}

		function car9(){document.getElementById('5').src='images/5.gif';}
		function car10(){document.getElementById('5').src='images/5_2.gif';}

		function car11(){document.getElementById('6').src='images/6.gif';}
		function car12(){document.getElementById('6').src='images/6_2.gif';}

		function f1(){selectedcar=1;document.getElementById('big').src='images/big_2.gif';window.location = "../race/race 4.html"}
		function f2(){selectedcar=2;document.getElementById('big').src='images/big_6.gif';window.location = "../race/race .html"}
		function f3(){selectedcar=3;document.getElementById('big').src='images/big_3.gif';window.location = "../race/race 2.html"}
		function f4(){selectedcar=4;document.getElementById('big').src='images/big_7.gif';window.location = "../race/race 6.html"}
		function f5(){selectedcar=5;document.getElementById('big').src='images/big_5.gif';window.location = "../race/race 3.html"}
		function f6(){selectedcar=6;document.getElementById('big').src='images/big_4.gif';window.location = "../race/race 5.html"}
		
//---------------------------------------------- Select road---------------------------------------------------//
		function h1()
		{
			document.getElementById("run").src="images/Untitled-3_03.gif";
		}
		
		function h3()
		{
			document.getElementById("run").src="images/road_03.gif";
		}
	
//---------------------------------------------crash-----------------------------------------------//

		function c1(){document.getElementById('retry').src='images/try (2).gif';}
		function c2(){selectedcar=2;document.getElementById('retry').src='images/try.gif';}
		function c3(){selectedcar=3;document.getElementById('menub').src='images/menu (2).gif';}
		function c4(){selectedcar=4;document.getElementById('menub').src='images/menu.gif';}
//--------------------------------------------- open race --------------------------------------------//

function Start()
{
if(selectedcar==1)
	getElementById("start").setAttribute("href", "somelink url");
else if(selectedcar==2)
	getElementById("start").href="../race/race 2.html";
}
	
			
			


		
		