let options = {
	"particles": {
		"number": {
			"value": 192,
		},
		"size": {
			"value": 3,
			"random": true,
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.33,
			"width": 1,
		},
		"move": {
			"enable": true,
			"speed": 0.33,
		},
	},
	"retina_detect": true,
}

particlesJS("map", options)