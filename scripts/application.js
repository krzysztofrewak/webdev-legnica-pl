new SimpleBar(document.getElementById("application"))

new Vue({
	el: "#application",
	data() {
		return {
			patrons: [],
			meetups: [],
			allTopics: [],
			upcomingMeetup: null,
		}
	},
	mounted() {
		this.patrons = patrons
		this.meetups = meetups

		if(this.meetups) {
			this.upcomingMeetup = this.meetups[0]
		}

		this.meetups.forEach(meetup => {
			meetup.agenda.filter(meetup => meetup.significant).forEach(topic => {
				topic.meetup = meetup.number
				this.allTopics.push(topic)
			})
		})
	},
})
