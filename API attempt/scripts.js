var request = new XMLHttpRequest() //THE OBJECT...? DONT GET WHY WE NEED THIS

//OBJECTS STORE DATA BUT WE ARE ALREADY GETTING DATA... I DONT
//UMDERSTAND IF ITS ONE FILE WHY WE NEED OBJECTS AND NOT JUST A VARIABLE
//BECAUSE OF DIFFERENT KINDS OF DATA IS THAT IT...??

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//ABOVE GET THE INFO FROM THE WEBSITE 

request.onload = function () {  //DELAY HERE BECAUSE HAS TO LOAD CANT OPEN AND LOAD SAME TIME THERES A DELAY...?
  // Begin accessing JSON data here
  var data = JSON.parse(this.response) //PARSE THE DATA FROM
  //JSON INTO JAVASCRIPT SO IT CAN UNDERSTAND IT

  if (request.status >= 200 && request.status < 400) {

  	//200 MEANS GOOD CONNECTED 500 BAD 
    data.forEach((movie) => { //DON'T UNDERSTAND FOR EACH

    	//ARE WE LABELING MOVIE OR DO WE HAVE OT KNOW WHAT IT IS...?

      console.log(movie.title) //WRITE OUT MOVIE TITLE 
    })
  } else { //DOESNT WORK THEN ERROR 
    console.log('error')
  }
}

request.send() //CANT SEND THE REQUEST UNTIL IT IS DONE


//actually putting it into the dom is going to be a pain and
//should probably use vue instead of wasting my time with old javascript...


