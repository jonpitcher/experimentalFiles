
const app = Vue.createApp({

	data(){ //this means variables then...? 

		return {

			trFa: true,
			myName: 'Jonathan',
			myAge: 27,
			books: 'yeah',
			books2: 'yeah',
			familyMember: [{ sibling: 'Adam' }, { sibling: 'Steph' }],
			randomVal: 0,
			url: "http://www.bbc.com",
						//<p> {{ myFamily[0].brother }} </p>

		}
	}, //why a comma here??

	methods: {  //remember method like a function

		changeName(newName){	

			alert("you're changing your name")
			this.myName = newName

			}, //this coma screwed everything up...


		toggleTrFa(){

			this.trFa= false
		}

		}

	})

app.mount('#app') 

	//------template: '<h2> Hola como estas </h2>' //this is injecting the h2 into the #app element

	//template is the root component...

	//don't need to write template necessarily just <h2></h2> inside #app = same thing


//this creates the app wherever you put #app id

//<div id="app"> </div> ----- app controls anything in the div #app

//in the console data-v-app means data from VUE = v app


//dyanmic data is the idea of this... saves itself no database 

//<button v-on> </button>  v is a directive respond to events... o= onclick for example

//this doesn't work for some reason........ <button v-on:click="alert('you clicked')"> see alert </button> 

//@ is short for v-on

	//<button @click="changeName">  DONT NEED THE changeNaame() just changeName

	// <div v-if="true"> MEANS SHOW IF VARIABLE TRUE OR HIDE

	//<div v-show> = just hides using css but still there...

	//adding something and removing from the dom more time consuming than hiding


/*



//<p> {{ myFamily[0].brother }} </p>

//<li v-for= "iterating in familyMember">
	
what went wrong in these two

<ul id="array-rendering">
  				<li v-for="item in familyMember">
  				  {{ item.sibling }}
  					</li>
						</ul>


						<ul>

				<li v-for= "iterating in familyMember">

					<p> {{ interating.sibling }}</p>
					

				</li>

			</ul>


a href = "www.bbc.com" -----a = attribute, attribute binding changing the web address

he's answering my question tried to put {{value}} didnt like it...

<a v-bind:href="url"> my website </a> ---need set url value

shotcut for v-bind is just : 

class attribute...? brain tired

i didnt get what he said about isFav 

	<p v-if="true">testCondition</p>----- u see
		<p v-if="false">testCondition</p>-----u dont see it
 

 a single comma is enough to screw this whole thing up...

 <a v-bind:href="url"> my website </a> ---need set url value

shotcut for v-bind is just : 

class attribute...? brain tired

i didnt get what he said about isFav 

	<p v-if="true">testCondition</p>----- u see
		<p v-if="false">testCondition</p>-----u dont see it
 
*/

//<button @click="toggleTrFa">true false toggle</button>




