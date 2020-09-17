window.onload = function() {
	//"use strict";	

	select();
	sliders();
	getClick();

	function getClick() {
		let btn = document.getElementsByClassName('btn__file')[0];
		let input = document.getElementsByClassName('checkout__file')[0];
		btn.addEventListener('click', function (e) {
			input.click();
		});
	}

	function select() {
		let parent = document.getElementsByClassName('checkout__select')[0];
		let input = parent.getElementsByClassName('select-input')[0];
		let arr = document.getElementsByClassName('select__arr')[0];
		let options = document.getElementsByClassName('options__cover')[0];

		document.addEventListener('click', function (e) {

			if (input.hasAttribute('id')) {

				if (e.target.className == 'checkout__option') {
					// input.setAttribute('value', e.target.innerText);
					input.innerText = e.target.innerText;

				}

				input.removeAttribute('id', 'select-active');
				arr.removeAttribute('id', 'arr-active');
				options.removeAttribute('id', 'options-showed');

			} else {

				if (e.target.classList.contains('select-input') || e.target.classList.contains('select__arr')) {
					input.setAttribute('id', 'select-active');
					arr.setAttribute('id', 'arr-active');
					options.setAttribute('id', 'options-showed');
				}

			}

		});
	}

	function sliders() {

		var tracks = [
			'-webkit-slider-runnable-track',
		];

		var thumbs = [
			'-webkit-slider-thumb',
		];

		initSliders();
		var sliderGroups = document.querySelectorAll('section[data-type=slider-group]');
		for (var i=0;i<sliderGroups.length;i+=1) {
			initSliderGroup(sliderGroups[i]);
		}

		function initSliders() {
			var sliders = document.querySelectorAll('input[type=range]');
			var testAndWK = window.getComputedStyle(sliders[0],'::-webkit-slider-thumb').background;
			for (var i=0;i<sliders.length;i+=1) {
				if (!testAndWK) {
					sliders[i].style.WebkitAppearance = 'slider-horizontal';
				}
				
				var st = document.createElement('style');
				st.id = 's' + sliders[i].id;
				document.head.appendChild(st);


				sliders[i].addEventListener('input',function () {handleSlider(this)},false);
				sliders[i].addEventListener('change',function () {handleSlider(this)},false);

				sliders[i].output = sliders[i].parentNode.querySelector('output');
				var dataSpan = sliders[i].parentNode.querySelector('span');
				if (dataSpan && dataSpan.getAttribute('data-labels')) {
					sliders[i].values = [];
					var values = dataSpan.getAttribute('data-labels').split(';');
					for (var j=0;j<values.length;j+=1) {
						sliders[i].values.push(values[j]);
					}
				}
				
				
				if (sliders[i].value*1) {
					handleSlider(sliders[i]);
				}
			}
		}

		function handleSlider(slider) {		
			var gradValue = Math.round((slider.value/slider.getAttribute('max')*1)*100);
			var grad = 'linear-gradient(90deg,#42a9ed ' + gradValue + '%,#cccccc ' + (gradValue+1) + '%)';
			var rangeSelector = 'input[id='+slider.id+']::';
			var styleString = '';
			var printedValue = (slider.values) ? slider.values[slider.value] : slider.value;
			slider.output.innerHTML = printedValue + '%';
			for (var j=0;j<tracks.length;j+=1) {
				styleString += rangeSelector + tracks[j] + '{background: ' + grad + ';} ';
			}
			document.getElementById('s'+slider.id).textContent = styleString;
		}

		function initSliderGroup(parent) {
			var sliders = parent.querySelectorAll('input[type=range]');
			var max = parent.querySelector('div').getAttribute('data-total')*1;
			var groupRoster = [];
			var timeout;
			for (var i=0;i<sliders.length;i+=1) {
				groupRoster.push(sliders[i]);
				sliders[i].others = [];
				sliders[i].addEventListener('input',trackChange,false);
				sliders[i].addEventListener('change',trackChange,false);
			}
			for (var i=0;i<sliders.length;i+=1) {
				for (var j=0;j<groupRoster.length;j+=1) {
					if (groupRoster[j] !== sliders[i]) {
						sliders[i].others.push(groupRoster[j]);
					}
				}
			}
		
			function trackChange () {
				var that = this;
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					setOtherSliders(that);
				},100);
			}

			function setOtherSliders(slider) {
				var currentTotal = calculateTotal();
				if (currentTotal > max) {
					var excess = currentTotal - max;
					var totalFromOthers = currentTotal - (slider.value*1);
					for (var j=0;j<slider.others.length;j+=1) {
						var newValue = Math.round(slider.others[j].value - ((slider.others[j].value/totalFromOthers)*excess));
						slider.others[j].value = newValue;
						handleSlider(slider.others[j]);
					}
				}
			}

		
			function calculateTotal () {
				var total = 0;
				for (var i=0;i<groupRoster.length;i+=1) {
					total += groupRoster[i].value*1;
				}
				return total;
			}
		
		}
	}

	function $(id) {
		return document.getElementById(id);
	}


};

$(document).ready(function() {
	//var nice = $("html").niceScroll();
	$("#boxscroll").niceScroll({
		cursorborder: "",
		cursorcolor: "#42a9ed",
		cursoropacitymin: 1,
		background: "#3d4050",
		boxzoom: false
	});
});