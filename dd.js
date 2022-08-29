var index=0,len1;
	var bg1=document.getElementsByClassName("img1");
	len1=bg1.length;
	bg1[index].style.display='block';
	function slideShow(){
		index++;
		if(index >= len1) index=0;
		for(var i=0;i<len1;i++){
			bg1[i].style.display='none';
		}
		bg1[index].style.display='block';
	}
	setInterval(slideShow,3000);