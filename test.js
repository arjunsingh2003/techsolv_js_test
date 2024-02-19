var outsideClick = function (e) {
	var container = document.getElementsByClassName(".customDrp");
	if (
		!container.is(e.target) &&
		container.has(e.target).length === 0 &&
		container.is(":visible")
	) {
		container.removeClass("active");
		document.removeEventListener("click", outsideClick);
	}
};
var customDropdwon = document.getElementsByClassName("customDropDwon");
customDropdwon.addEventListener("click", function (e) {
	if (
		e.target.classlist.contains("crossString") ||
		e.target.classlist.contains("bowiro")
	) {
		return false;
	}
	if (e.target.is("a")) {
		return true;
	}
	e.preventDefault();
	if (
		e.target.classlist.contains("language") ||
		e.target.parent().classlist.contains("language")
	) {
		languageFunc();
	}
	if (window.matchMedia("(max-width:1170px)").matches) {
		document.body.style.overflow = "hidden";
	}
	if (this.document.getElementsByClassName("customDrp").length) {
		this.document.getElementsByClassName("customDrp").classlist.add("active");
	} else {
		document.getElementsByClassName(".customDrp").this.classlist.add("active");
	}
	e.stopPropagation();
	document.addEventListener("click", outsideClick);
});

let basic_banner_read_btn = false;
document
	.getElementsByClassName("basic_banner_read_btn")
	.addEventListener("click", function () {
		if (basic_banner_read_btn == false) {
			document.querySelectorAll(this).innerHtml = "Read Less";
			var slidetoggle = document.getElementsByClassName("basic_banner_text");
			slidetoggle.addEventListener("click", function () {
				if (slidetoggle.style.display === "none") {
					slidetoggle.style.display = "block";
				} else {
					slidetoggle.style.display = "none";
				}
			});
			basic_banner_read_btn = true;
		} else {
			var slidetoggle = document.getElementsByClassName("basic_banner_text");
			slidetoggle.addEventListener("click", function () {
				if (slidetoggle.style.display === "none") {
					slidetoggle.style.display = "block";
				} else {
					slidetoggle.style.display = "none";
				}
			});
			document.querySelectorAll(this).innerHtml = "Read More";
			basic_banner_read_btn = false;
		}
	});
document
	.getElementsByClassName("filterToggelBtn")
	.addEventListener("click", function () {
		var slidetoggle = document.getElementsByClassName("filterToggel");
		slidetoggle.addEventListener("click", function () {
			if (slidetoggle.style.display === "none") {
				slidetoggle.style.display = "block";
			} else {
				slidetoggle.style.display = "none";
			}
		});
		document
			.getElementsByClassName("hideCustomDrp")
			.addEventListener("click", function () {
				document.getElementsByClassName("customDrp").removeClass("active");
			});
		document
			.getElementsByClassName("closeIcon")
			.addEventListener("click", function () {
				document.getElementsByClassName("customPopup").removeClass("active");
				document.getElementsByClassName("commonPopup").removeClass("active");
				if (
					!document.querySelector(".headerMain").classList.contains("active")
				) {
					document.body.style.overflow = "auto";
				}
			});
		document
			.getElementsByClassName(".mainTable")
			.addEventListener("scroll", function (e) {
				let isScroll = e.currentTarget.scrollLeft;
				if (isScroll) {
					document
						.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)")
						.classList.add("before");
				} else {
					document
						.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)")
						.removeClass("before");
				}
			});
	});
