window.onload = function() {
    console.log( 'Документ и все ресурсы загружены' );

	var vid = document.getElementById('mulavina');
	console.log("Mulavina video: " + vid);

	document.getElementById('play-button').addEventListener("click", function(e){
	  this.style.display = 'none';
	  vid.play();
	}, false);

};		
