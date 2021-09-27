const ratio= 0.2
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
/*---------Revealing elements when scrolling------------*/
const HandleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if(entry.intersectionRatio > ratio)
		{
			entry.target.classList.add('reveal-visible')
			observer.unobserve(entry.target)
		}
	})
}
const observer = new IntersectionObserver(HandleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
	observer.observe(r)
})

/*--------Indicates the section on viewport in the menu-----*/
const ratio2= 0.4
const options2 = {
  root: null,
  rootMargin: '200px 0px 100px 0px',
  threshold: ratio2
}
const NavCheck = function(entries, menu) {
	entries.forEach(function(entry){
		const id = entry.target.id;
		const activeAnchor = document.querySelector(`[data-page = ${id}]`);		
		if(entry.isIntersecting && id!= "intro"){
			activeAnchor.classList.toggle('active')
		}
		else {
			activeAnchor.classList.remove('active')
		}
		
	});
};
const menu = new IntersectionObserver(NavCheck, options2);
document.querySelectorAll('.reveal').forEach(function(r){
		menu.observe(r)
})
/*---------------Change Header style when scrolling---------------*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.paddingTop = "0";
    document.getElementById("header").style.boxShadow = "1px 6px 15px rgb(100,100,100)"; 
  } else {
    document.getElementById("header").style.paddingTop = "20px";
    document.getElementById("header").style.boxShadow = "0px 0px 0px rgb(100,100,100)";     
  }
} 
/*-------------About Me/Scroll Down--------------------*/
function aboutMe() {
  var x = document.getElementById("introduction");
  var y = document.getElementById("bio");
  var z = document.getElementById("button");
  var u = document.getElementById("scroll");

   x.classList.toggle("hidden");
   y.classList.remove("hidden");
   y.classList.toggle("active");
   z.classList.toggle("hidden");
   u.classList.toggle("active");
} 