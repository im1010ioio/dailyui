$(function(){
	var workSubject = [
		// 1 - 10
		"Sign Up", "Landing Page", "Landing Page (above the fold)", "Calculator", "App Icon",
		"User Profile", "Settings", "404 page", "Music Player", "Social Share",

		// 11 - 20
		"Flash Message (Error/Success)", "E-Commerce Shop (Single Item)", "Direct Messaging", "Countdown Timer", "On/Off Switch",
		"Pop-Up / Overlay", "Email Receipt", "Analytics Chart", "Leaderboard", "Location Tracker",

		// 21 - 30
		"Home Monitoring Dashboard", "Search", "Onboarding", "Boarding Pass", "TV App",
		"Subscribe", "Dropdown", "Contact Us", "Map", "Pricing",

		// 31 - 40
		"File Upload", "Crowdfunding Campaign", "Customize Product", "Car Interface", "Blog Post",
		"Special Offer", "Weather", "Calendar", "Testimonials", "Recipe",

		// 41 - 50
		"Workout Tracker", "ToDo List", "Food/Drink Menu", "Favorites", "Info Card",
		"Invoice", "Activity Feed", "Coming Soon", "Notifications", "Job Listing",

		// 51 - 60
		"Press Page", "Daily UI logo", "Header Navigation", "Confirm Reservation", "Icon Set",
		"Breadcrumbs", "Video Player", "Shopping Cart", "Background Pattern", "Color Picker",

		// 61 - 70
		"Redeem Coupon", "Workout of the Day", "Best of 2015", "Select User Type", "Notes Widget",
		"Statistics", "Hotel Booking", "Flight Search", "Trending", "Event Listing",

		// 71 - 80
		"Schedule", "Image Slider", "Virtual Reality", "Download App", "Pre-Order",
		"Loading...", "Thank You", "Pending Invitation", "Itinerary", "Date Picker",

		// 81 - 90
		"Status Update", "Form", "Button", "Badge", "Pagination",
		"Progress Bar", "Tooltip", "Avatar", "Terms of Service", "Create New",

		// 91 - 100
		"Curated For You", "F.A.Q.", "Splash Screen", "News", "Product Tour",
		"Currently In-Stock", "Giveaway", "Advertisement", "Categories", "Redesign Daily UI Landing Page",
	];
	for (i=100 ;i>0 ; i--){
		$(".works").append('<div class="work">' +
								'<div class="pic">'+
									'<img src="images/day'+i+'.jpg" alt="Daily UI #'+i+' '+workSubject[i-1]+'" style="display:none">'+
								'</div>'+
								'<div class="day">'+
									'<p>'+i+'</p>'+
								'</div>'+
								'<div class="subject">'+
									'<span>'+workSubject[i-1]+'</span>'+
								'</div>'+
								'<div class="loader">'+
									'<div class="loader-inner cube-transition">'+
										'<div></div>'+
									'</div>'+
								'</div>'+
							'</div>');

	}

	$(".pic img").load(function(){
			// console.log($(this).attr("src"));
			// console.log($($(this).parent()).attr('class'));
			//console.log($(this).parent.attr('class'));

			$(this).show();
			$(this).parent().parent().find(".loader").hide();
	});

	$(".pic img").error(function(){
			$(this).parent().parent().hide();

	});

		// $.ajax({url:"links.txt",
		// 		type: "GET", 
		// 		data: {},
		// 		cached: false,
		// 		dataType: "json",
		// 		success: function(data){
		// 				// console.log(data);
		// 				$(".user .links .facebook").append("<a href='" + data.facebook + "' target='blank'><i class='mdi mdi-facebook-box'></i></a>")
		// 				$(".user .links .website").append("<a href='" + data.website + "' target='blank'><i class='mdi mdi-web'></i></a>")
		// 				$(".user .links .dribbble").append("<a href='" + data.dribbble + "' target='blank'><i class='mdi mdi-dribbble-box'></i></a>")
		// 				$(".user .links .twitter").append("<a href='" + data.twitter + "' target='blank'><i class='mdi mdi-twitter-box'></i></a>")
		// 				$(".user .links .behance").append("<a href='" + data.behance + "' target='blank'><i class='mdi mdi-behance'></i></a>")
		// 				$(".user .links .linkedin").append("<a href='" + data.linkedin + "' target='blank'><i class='mdi mdi-linkedin-box'></i></a>")
		// 			}
		// 		});	


})
