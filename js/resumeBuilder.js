var myName = "Alex G Mendoza";
var myRole = "Web Developer"
var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name": myName,
	"role": myRole,
	"welcomeMessage": "Let me bring your website to life!",
	"contacts": {
		"mobile": "410-861-7064",
		"email": "alexgm511@gmail.com",
		"github": "alexgm511",
		"location": "Oakland"
		},
	"pictureURL": "images/agm.jpg",
	"skills": [
		"HTML",
		"CSS",
		"JavaScript"]
}

var education = {
	"schools": [
		{
		"name": "Pratt Institute",
		"city": "New York",
		"major": ["Communications Design"],
		"graduation": "1988"
		}, {
		"name": "University of Florida",
		"city": "Gainesville, FL",
		"major": ["Graphic Design"],
		"graduation": "1978"
		}
	],

  "onLineCourses": [
		{
			"title": "Startup Engineering",
			"school": "Stanford/Coursera",
			"dates": 2012,
			"url": "https://www.coursera.org/course/startup"
		}, 
		{
			"title": "Precalculus: Algebra & Trigonometry",
			"school": "University of Florida",
			"dates": 2010,
			"url": "https://www.coursera.org/course/startup"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Venture Media",
			"title": "IT Director",
			"city": "Baltimore",
			"dates": "",
			"description": "Managed Order Processing System, Web Development for company sites"
		}, 
		{
			"employer": "Mendoza Design",
			"title": "Design Director",
			"city": "Baltimore",
			"dates": "",
			"description": "Designed and produced long list of communication materials and exhibit designs"
		}, 
		{
			"employer": "U.S.News & World Report",
			"title": "Associate Art Director",
			"city": "Washington",
			"dates": "",
			"description": "Managed 19 person Art Department alongside the Art Director"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "LandRider Mobile",
			"dates": "01/2015",
			"description": "Created mobile enabled site for AutoShift bicycle site using jQuery Mobile",
			"images": [
				"images/index.jpg",
				"images/products.jpg"
			]
		}, 
		{
			"title": "imagenIR",
			"dates": "01/2015",
			"description": "Created responsive website to display and analyse infra-red images to evaluate electrical installations using jQuery and Bootstrap",
			"images": [
				"images/index.jpg",
				"images/analyse.jpg"
			]
		}
	]
}

