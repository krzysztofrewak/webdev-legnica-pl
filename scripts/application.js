new SimpleBar(document.getElementById("application"))

new Vue({
	el: "#application",
	data() {
		return {
			about: "",
			patrons: [],
			meetups: [],
			allTopics: [],
			upcomingMeetup: null,
		}
	},
	mounted() {
		fetch("./resources/about.md").then(result => result.text()).then(text => {
			let markdown = new showdown.Converter()
			this.about = markdown.makeHtml(text)
		})

		fetch("./resources/meetups.json").then(result => result.json()).then(meetups => {
			for(meetup of meetups) {
				meetup.collapsed = true
			}
			meetups[0].collapsed = false

			this.meetups = meetups
		})

		this.patrons = patrons
	},
})
