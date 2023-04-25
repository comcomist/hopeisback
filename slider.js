{function modh(){ 
    	      left.style="width:"+sliderh.value+"%;";
	          right.style="left:"+sliderh.value+"%;";}
             function initSlider(v,a,b){sliderh.value=v; 
	   	           modh();
                   sliderh.addEventListener('change',(e)=>{modh();});
	             if(a)document.getElementById('ileft') .src=a;;
	             if(b)document.getElementById('iright').src=b;} }
