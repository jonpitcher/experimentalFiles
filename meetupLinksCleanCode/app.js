
const app = Vue.createApp({

	data(){

		return {

			url: "http://www.bbc.com",
			meetupLinkPart1: "https://www.meetup.com/find/?location=",
			meetupLinkPart2: "&source=EVENTS&eventType=online&dateRange=startingSoon",
			meetupCities: [
						   {cityURL: "us--ny--New%20York", cityName: "NYC", isChosen: false} //each curly braces is an object...
					      ,{cityURL:"us--ca--Los%20Angeles", cityName: "LA", isChosen: false}
					      ,{cityURL:"ph--Manila", cityName: "MANILA", isChosen: false}
					      ,{cityURL:"gb--Greater%20London--London", cityName: "LONDON", isChosen: false}
					      ,{cityURL:"es--Madrid", cityName: "MADRID", isChosen: false}
					      ,{cityURL:"fr--Paris", cityName: "PARIS", isChosen: false}
					      ,{cityURL:"br--S%C3%A3o%20Paulo", cityName: "SAO PAOLO", isChosen: false}
					      ,{cityURL:"au--Sydney", cityName: "SYDNEY", isChosen: false}
					      ,{cityURL:"tw--Taipei", cityName: "TAIPEI", isChosen: false}
					      ,{cityURL:"ar--Buenos%20Aires", cityName: "BUENOS AIRES", isChosen: false}
					      ,{cityURL:"mx--M%C3%A9xico%20City", cityName: "MEXICO CITY", isChosen: false}
					      ,{cityURL:"co--Bogot%C3%A1", cityName: "BOGOTA", isChosen: false}
					      ,{cityURL:"ca--on--Toronto", cityName: "TORONTO", isChosen: false}
					    
						  ] 
		}
	}, 

	methods: {  


		checkedBoxFunction(){

			z = 0 

			this.meetupCities[z].isChosen = true  

			z++
		},


		openAllLinks(){

			for (var i = this.meetupCities.length-1; i>=0; i--) {

					var finalLinks = this.meetupLinkPart1.concat(this.meetupCities[i].cityURL, this.meetupLinkPart2)

					alert(finalLinks)

				}
		},

		openLinks(){

			for (var i = this.meetupCities.length-1; i>=0; i--) {

					if (this.meetupCities[i].isChosen == true) {

					var finalLinks = this.meetupLinkPart1.concat(this.meetupCities[i].cityURL, this.meetupLinkPart2)

					alert(finalLinks)

					} else{

						alert("not checked")
						continue 
					}

				}

		},

		}

	})

app.mount('#app') 
