document.addEventListener("DOMContentLoaded", function(){
	window.bar = new progressBar();
	window.bar.use(new progressBar.extensions.autoSize())
		.use(new progressBar.extensions.autoClear());
	function generate(){
		var done = parseInt(document.getElementById("done").value);
		var goal = parseInt(document.getElementById("goal").value);
		var unit = document.getElementById("unit").value;
		var theme= document.getElementById("theme").value;
		var notANumber = parseInt("");
		var generator = document.getElementById("generator").value + "Generator";
		if(!done){
			alert("Done is required");
			window.app.page = 1;
			return;
		}
		if(!goal){
			alert("Goal is required");
			window.app.page = 1;
			return;
		}
		if(done > goal){
			alert("You need to increase your goal!");
			window.app.page = 1;
			return;
		}
		if(goal == 0){
			alert("Zero isn't a valid goal!");
			window.app.page = 1;
			return;
		}
		bar.use(new progressBar.themes[theme]())
			.use(new progressBar.generators[generator]("#canvas"))
			.setProgress(done, goal)
			.setUnit(unit);
		bar.generate();
		document.getElementById("canvas").toBlob(function(blob){
			window.app.downloadLink = URL.createObjectURL(blob);
		}, "image/png");
	}
	window.app = new Vue({
		el: "#app",
		data: {
			page: 1,
			downloadLink: "javascript:alert('Not generated')"
		},
		methods: {
			next: function(){
				window.app.page = window.app.page + 1;
				if(window.app.page == 4){
					generate();
				}
			},
			restart: function(){
				window.app.page = 1;
			},
			back: function(){
				window.app.page = window.app.page - 1;
			},
			generate: generate
		}
	});
});