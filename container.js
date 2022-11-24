{let base64n,     
	 ThePage,     
	 ContentString, 
	 Inputing;
 const str = ["Welcome - This app.html is made to be useful from any device , op or browser, by using the wasm tech,\
    of whcih files are turn to base64 strings and qt framework.\
   On the left, you can open file, procces it and save (:s) it or add (:a) a file as a named (base64) string.Currently "+base64n+" strings of files are added.\
    On the right you can browse remote site (l:), starting with about namzezam the author or operate plugins.\
    The api is of one or more plugin in one js file of which discription is in its head as comment starting and ending with @#@.\
    ubder the humanitarian-agpl-license https://hopeisback.com/#hagpl  ",   // [0]welcoming msg 
   //"Google.html",//
"hameathel.html",//   "JavaScript2addCSSfile.html",//"template-heb.html",									// [1]first url
   "file.html",//[2]
   "html-help.html"//[3]
     ]; 	 
	 
	 /**
	 you can

    download (ctrl+S) that page, open it in fullscreen mode (f11) and then move the slider curtain to reveal some inactive-icon or active-iframe items, each has small slider:

        click an inactive-icon for loading, when locally is presenet, or first downloded that by its link, only after the checksuming is ok, or

        use a fully embded html app (loaded with its libs) in its active-iframe window, that later could be closed (and unpluged) or resized.

	 The iframe.srcdoc=full html after embedding all its resources files, such as css (document.styleSheets[0].disabled), js (document.scripts[0].disabled), img, wasm etc (to avoid CORS issues in local filesystem), while using:

    <a href="?" download> as “saveAs” file,

    <input type="file" as “open” file and

    Js-obj=bit64(img,Wasm-by-Qt,,)

    FileSystem for browsing local file system.

	
	*/
	
	
	// name         ={bit64}// each sig is the bit64 signed by the maintainer 
 // name_header={sigid,maintainer_id}
 //  Sig[sigid]= sig
 // maintainer_id={pub_key,      communication_means}   // each element shall be autirzed, ag: in a known autrtiztion page
// 
	
	 //oDoc, 
	// sDefTxt, 
	 //onbase64,
	//
   //  destination, //=        document.getElementById('ThePage').contentWindow;//The      contentWindow property returns the Window object of an HTMLIFrameElement, for using Window.postMessage.  https://appradius.co/blog/cross-origin-communication-iframe-parent-website
	// compForm,
	
	 /** **/
//https://stackoverflow.com/questions/37614649/how-can-i-download-and-save-a-file-using-the-fetch-api-node-js
//const fetch = require('node-fetch');
//const {writeFile} = require('fs');
//const {promisify} = require('util');
//const writeFilePromise = promisify(writeFile);

//https://www.geeksforgeeks.org/how-to-load-css-and-js-files-dynamically/

//var filesAdded = '';// The string stores the name of files added till now

//evil mixing of privacy security with copyrights security create server requirement on local file system which its user a huge vulnerability
function newframe(url,x,y,width,height,n){
	let ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", url);
        ifrm.style.x = x;
        ifrm.style.y = y;
        ifrm.style.width = width;
        ifrm.style.height = height;
        //how to disabled?
        
        let a=document.body.appendChild(ifrm);
        // how n points to a?
	let css = document[n].styleSheets,//[0].disabled, 
	//find the last on header the use <link and replace for the content of the url
	    js  = document[n].scripts;//[0].disabled)
	    //replace for the content of the url
	    // also img and wasm to bit64
	    //    audiocanvasembediframeimgMathML mathobjectpictureSVG svgvideo
	// now have its.srcdoc=ist.outterhtml    
	    // enable not hide ...
	
	}
function loadJS(file,body=document.body) {
    let js  = document.createElement("script");// DOM: Create the script element
    js.type = "application/javascript";// set the type attribute
    js.src  = file;// make the script element load file
    body.appendChild(js);// finally insert the element to the body element in order to load the script
}//loadJS('file1.js');

function loadCSS(file,head = document.getElementsByTagName('HEAD')[0]){
       // let head = document.getElementsByTagName('HEAD')[0];// Get HTML head element
        let link = document.createElement('link');// Create new link Element
        link.rel = 'stylesheet';// set the attributes for link element
        link.type = 'text/css';
        link.href = 'style.css';
        head.appendChild(link);// Append link element to HTML head
}
//////////
/*
function loadJS(name){// For loading JS file
// if(filesAdded.indexOf(name+'.js') !== -1) return; // Gives -1 when the given input is not in the string. i.e this file has not been added
 var head   = document.getElementsByTagName('head')[0];// Head tag
 var script = document.createElement('script');// Creating script element
 script.src = name+'.js';
 script.type = 'text/javascript';
 head.append(script);// Adding script element
 //filesAdded += ' '+name+'.js';
 }// Adding the name of the file to keep record

function loadCSS(name) {// To load CSS file
 //if(filesAdded.indexOf(name+'.css') !== -1) return;
 var head = document.getElementsByTagName('head')[0];
 var style = document.createElement('link');// Creating link element
 style.href = name+'.css';
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.append(style);
 //filesAdded += ' '+name+'.css';
 }// Adding the name of the file to keep record
*/
function downloadFilefetch(url, outputPath) {
  return fetch(url)
      .then(x => x.arrayBuffer())
      .then(x => writeFilePromise(outputPath, Buffer.from(x)));
}

     
function insercss(url,head){//		var head = document.getElementsByTagName('HEAD')[0];// Get HTML head element
		var link = document.createElement('link');// Create new link Element
		link.rel = 'stylesheet';// set the attributes for link element
		link.rel.crossOrigin = "anonymous";
		link.type = 'text/css';
		link.href = url;
		
		head.appendChild(link);// Append link element to HTML head
	}

	 function appdata(page,textBox,input,editor){
		          base64n=0;
		          ContentString=""; 
		          onbase64 = false;
				  ThePage  = //page;//
				  document.getElementById('ThePage');
				  Inputing = input;
				  /**/
				  compForm = editor;
				  oDoc     = //textBox;//
				  document.getElementById("textBox");
//				   showid("htmleditor");
				  sDefTxt  = oDoc.innerHTML;
				 
                  if (document.compForm.switchMode.checked){setDocMode(true);}
				  /**/
				   put(str[0]);
				  
				//  Loading(str[1]);
				  }//constructor
	 
function initFILE() {sliderh.value=0; modh();
   sliderh.addEventListener('change',(e)=>{modh();});
   Init();
   }	/*


before using iframe to 
1. given url, loading the html as string 
2. using indexof .js .css 
3. to insert instead each remote file.
4. then iframe srcdoc src the string.
on intiate to 
	 
	loadCSS("index.css");
	* 
	* * */
	/*
	base64n=0; 
	onbase64=false;
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  */
 // if (document.compForm.switchMode.checked){setDocMode(true);}
//   put(str[0]);////put(" Welcome. on the left open file The "+base64n+"th and save or add it after you procces it");

   //sliderv.value=100;
   //modv(); 
   //sliderv.addEventListener('input',(e)=>{modv()});

//fetchFile("index-heb.html");//"https://hopeisback.com/hameathel.html");
/*
 fetch("https://hopeisback.com/hameathel.html")
      .then(x => x.arrayBuffer())
      .then(x => writeFilePromise("hameathel.html", Buffer.from(x)));
      */
//saving("https://hopeisback.com/hameathel.html","hameathel.html");//   browser.downloads.download({url: "https://hopeisback.com/hameathel.html"})
  
  
  //{
//var filesAdded = '';// The string stores the name of files added till now
function loadJS(name){// For loading JS file
 //if(filesAdded.indexOf(name+'.js') !== -1) return; // Gives -1 when the given input is not in the string. i.e this file has not been added
 var head   = document.getElementsByTagName('head')[0];// Head tag
 var script = document.createElement('script');// Creating script element
 script.src = name+'.js';
 script.type = 'text/javascript';
 head.append(script);// Adding script element
 //filesAdded += ' '+name+'.js';
 }// Adding the name of the file to keep record
function loadCSS(name) {// To load CSS file
 //if(filesAdded.indexOf(name+'.css') !== -1) return;
 var head = document.getElementsByTagName('head')[0];
 var style = document.createElement('link');// Creating link element
 style.href = name+'.css';
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.append(style);
 //filesAdded += ' '+name+'.css';
 }// Adding the name of the file to keep record
//}//https://www.geeksforgeeks.org/how-to-load-css-and-js-files-dynamically/

  
  function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
       // downloadBtn.innerText = "Download File";
    });
}
  
//	  console.log('H '+sliderh.value); 
	
//	left.style="width:"+sliderh.value+"%;";
//	right.style="left:"+sliderh.value+"%;";

	     
  

	//  console.log('V '+sliderv.value); 
//	theEditor.style="height:"+sliderv.value+"%;";
	//  	menu.style="top:"+sliderv.value+"%;";

	     
	  
   
function modv() {
	theEditor.style="height:"+sliderv.value+"%;";
	  	menu.style="top:"+sliderv.value+"%;";

	}   
function modh() {
	 
	left.style="width:"+sliderh.value+"%;";
	right.style="left:"+sliderh.value+"%;";
	 }
   
function hideid(id) {document.getElementById(id).style.display = "none";}
function showid(id) {document.getElementById(id).style.display = "block";}
function base64dof(){onbase64=(onbase64)?false:true;}	//switch mode

function saving(content,name){
    let textToSaveAsBlob   = new Blob([content], {type:"text/plain"});
    let textToSaveAsURL    = window.URL.createObjectURL(textToSaveAsBlob);
    let downloadLink       = document.createElement("a");
    downloadLink.download  = name;
//    downloadLink.downloads.saveas =true;
    
    downloadLink.innerHTML = "Download File";
    downloadLink.href 	   = textToSaveAsURL;
    downloadLink.onclick   = destroyClickedElement;
    downloadLink.style.display = "none";
   
    document.body.appendChild(downloadLink);
    downloadLink.click();}//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download

//<a onclick="this.href='data:text/html;charset=UTF-8,'+encodeURIComponent(document.documentElement.outerHTML)" href="#" download="page.html">Download</a>

// name         ={maintainer_id,bit64,             sig}// each sig is the bit64 signed by the maintainer 
// maintainer_id={pub_key,      communication_means}// each element shall be autirzed, ag: in autrtiztion page

function addthis2(content,name){
	base64nameMeta=[base64n]  = name;
	base64nameing=[base64n]  = content;
	base64n++;}
function put(s){outputing.innerHTML=s;}	

///////////////
  
function switchto(belocal=true){
 if(belocal){hideid("ThePage");   showid("theEditor");}
 else       {hideid("theEditor"); Loading("index-heb.html");}} 

function isid(id) {return (document.getElementById(id).style.display == "block");}
function hideid(id) {document.getElementById(id).style.display = "none";
	console.log(id+" is "+document.getElementById(id).style.display);}
function showid(id) {document.getElementById(id).style.display = "block";
	console.log(id+" is "+document.getElementById(id).style.display);}

function base64dof(){onbase64=(onbase64)?false:true;}	//switch mode
        

function whichkey(e,v){
	//if (e.key    != 13  ) {dothis(v);return;}	
	if (e.key    != ':' || v.length != 1) return;
        switch( v[0]){ 
        case 's':put("saving to file in the local on the left.");     break;//.to add :s on beem not ticked base64do substr(2)
        case 'a':put("adding to list in the local on the left.");     break;   //to add :a on beem ticked base64do
 // these 2 are able to be non protocol distincuashed by by 
        case '!':put("plugining by wasm/qt in the local on the left.");  break;

         //
        case 'l':put("linking url in the remote on the right.");   break;// Loading(substr(2));// .focus(); on right
        case '?':put("searching expression in the remote on the right.");   break;//.focus(); on right  https://developers.google.com/custom-search
          ///
        default: put(v[0]);} } 
        
 function dothis(v){
	    switch( v[0]){ 
        case 's':put("save to file in the local on the left.");     savethis(); break;//.to add :s on beem not ticked base64do substr(2) 
        case 'a':put("add to list in the local on the left.");      addthis();     break;   //to add :a on beem ticked base64do
        case '!':put("plugin by wasm/qt in the local on the left.");  break;

         //
        case 'l':put("link url in the remote on the right.");Loading(v.substr(2));   break;// Loading(substr(2));// .focus(); on right
        case '?':put("search expression in the remote on the right.");   break;//.focus(); on right  https://developers.google.com/custom-search
          ///
        default: put(v);}	 }
	
function addthis(){if(base64do.checked){ 
	let content = oDoc.innerHTML,//document.getElementById('textBox').innerHTML,
	    name    = Inputing.value.substr(2);//document.getElementById('inputing')
	    
	if(!name){ put(base64n+" paste its loaction and enter");return;}
	put("The "+base64n+"th string is "+ name);		   
	if(content){ContentString+='let '+name+'="'+content+'"\n';document.getElementById('textBox').innerHTML='';base64n++;}
	else if(base64n){saving(ContentString,name);base64n=0;}}}
	/* each line is a js string of which name is able to be mapped from its url 
       eg for normalizing to string punctuation mapping? 
	 _0_  _
	 _1_  /
	 _2_  \
	 _3_  :
	 _4_  .
	 _5_  .
	*/ //todo overloading function fetch(url){return the  64base to blob of that sting by its name ..
	  //else  saving(content,name);
  
///////////////



function saveoraddthis(){ 
	let content = document.getElementById('textBox').innerHTML,
	    name    = document.getElementById('inputing').value;
	    put("The "+base64n+"th ");
	 if(!name){ put(base64n+" paste its loaction and enter");
			   return;}
	if(base64do.checked){	
		if(!content && base64n){for(let i=0;i<base64n;i++) 
                  	content+='let '+base64nameMeta[i]+'="'+base64nameing[i]+'"\n';
         	base64n=0;
			saving(content,name);
			inputingDo.innerHTML=base64n+" paste its loaction and enter";
			}
			/** each line is a js string of which name is able to be mapped from its url 
       eg for normalizing to string punctuation mapping? 
	 _0_  _
	 _1_  /
	 _2_  \
	 _3_  :
	 _4_  .
	 _5_  .
	*/ //todo overloading function fetch(url){return the  64base to blob of that sting by its name ..
		else addthis(content,name);}
   else  saving(content,name);}
	  
function loadingFile(file){let f = new FileReader();
    f.onload = function(fileLoadedEvent){if(onbase64){}    
		document.getElementById("textBox").innerHTML = fileLoadedEvent.target.result;}
    if(onbase64) f.readAsDataURL(file);	//loactingstring();//(base64n)?"Having "+base64n+". Add this under the name":"Save as";
    else         f.readAsText(file, "UTF-8");      }
/// Editor ///
function destroyClickedElement(event){document.body.removeChild(event.target);}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {hideid("htmleditor");
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
    document.execCommand("defaultParagraphSeparator", false, "div");
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
      showid("htmleditor");
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();}

function printDoc() {
  if (!validateMode()) { return; }
  var oPrintWin = window.open("","_blank","width=450,ght=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrintWin.document.open();
  oPrintWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
  oPrintWin.document.close();}
  
   function initDoc() {}
 function Init(editing){Loading(str[1],str[2] );}
 function download2(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;}
 
 function download(filename, text) {
			let a = document.createElement('a');
			a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			a.setAttribute('download', filename);
		    if (document.createEvent) {
				let event = document.createEvent('pointer-events');//('MouseEvents');
				event.initEvent('click', true, true);
				a.dispatchEvent(event);
			} else {a.click();}}//https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file		   
            
            
			function iframes(f = window.frames){for(var i=0;i<f.length;i++){ // or = window.parent.frames;
				f[i].document.body.style.background = "red";}} // do something with each subframe as frames[i]
///sec 1 //////// 
   
  		    function hiding(e){document.getElementById(e).style.display = 'none';}
		    function showing(e){document.getElementById(e).style.display = 'block';}            
            function PageOrMenu(a,b=true){
		
		if(b)
		{//saving(a,a);
		//window.location.assign(a);
		//window.open(a,'_parent');
		}	//	try{
		document.getElementById('ThePage').src=a;
		loadCSS("JavaScript2addCSSfile.css",document.getElementsByTagName('HEAD')[1]);
//srcdoc
					       return       document.getElementById('ThePage').src;
					       //}
				//catch(err){return saving(a,a);}
				}
		function iframes(f = window.frames){for(var i=0;i<f.length;i++){ // or = window.parent.frames;
				f[i].document.body.style.background = "red";}} // do something with each subframe as frames[i]
            function Loading(a,b){	
					
				if(b)PageOrMenu(b,false);
			
				let url=PageOrMenu(a);
			
				let p = document.getElementsByTagName("iframe")[0].contentWindow;
				
				}
				
}/// ended here					
	
  /////////////spliter.js   <script type="text/javascript" src="spliter.js">  Security Error: Content at moz-nullprincipal:{27e8d6c8-5fa7-4c3a-995b-78529c83b574}?file:///processing/whoarewe.space/pager2pro/data.html may not load or link to file:///processing/whoarewe.space/pager2pro/spliter.js. 

	// hideid("theEditor") ;
	//str[2]);//"file.html");
	// Loading("https://hopeisback.com/hameathel.html", "file.html");
	 	//"html-help.html"
  		
            /*
            function PageOrMenu(a,b=true){
				//if(!b)return document.getElementById('TheMenu').src=a;
	//								saving(a,a);
				//
				   //try {window.location.assign }catch(err){<a   download="url">  a=window.open .. a.close();}
	
		
				      return document.getElementById('ThePage').src=a;
				      
				      
				      }//doc;
				      
				      */	
            /*
            function Loading0(a,b){	
				PageOrMenu(b,false);
				let url=PageOrMenu(a);
				let p = document.getElementsByTagName("iframe")[0].contentWindow;
				download2(url, url+'myfilename.txt', 'text/plain');}
				*/
		/*	   
			    document.addEventListener('DOMContentLoaded', function(){//Init(); // The loading
                  const resizable = function (resizer) {
                    const direction = resizer.getAttribute('orientation') || 'horizontal';
                    const prevSibling = resizer.previousElementSibling;
                    const nextSibling = resizer.nextElementSibling;
                    // The current position of the pointer 
                    let x = 0;
                    let y = 0;
                    let prevSiblingght = 0;
                    let prevSiblingWidth = 0;
                    // Handle the mousedown event that's triggered when user drags the resizer
                    const mouseDownHandler = function (e) {
                        // Get the current mouse position
                        x = e.clientX;
                        y = e.clientY;
                        const rect = prevSibling.getBoundingClientRect();
                        prevSiblingght = rect.ght;
                        prevSiblingWidth = rect.width;

                        // Attach the listeners to `document`
                        document.addEventListener('mousemove', mouseMoveHandler);
                        document.addEventListener('mouseup', mouseUpHandler);//https://www.w3schools.com/jsref/obj_mouseevent.asp
                        //                        https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
                        //https://www.w3schools.com/jsref/obj_touchevent.asp
                        //https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
                      
                    };

                    const mouseMoveHandler = function (e) {
                        // How far the mouse has been moved
                        const dx = e.clientX - x;
                        const dy = e.clientY - y;

                        switch (direction) {
                            case 'vertical':
                                const h =
                                    ((prevSiblingght + dy) * 100) /
                                    resizer.parentNode.getBoundingClientRect().ght;
                                prevSibling.style.ght = `${h}%`;
                                break;
                            case 'horizontal':
                            default:
                                const w =
                                    ((prevSiblingWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
                                prevSibling.style.width = `${w}%`;
                                break;
                        }

                        const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
                        resizer.style.cursor = cursor;
                        document.body.style.cursor = cursor;

                        prevSibling.style.userSelect = 'none';
                        prevSibling.style.pointerEvents = 'none';

                        nextSibling.style.userSelect = 'none';
                        nextSibling.style.pointerEvents = 'none';
                    };

                    const mouseUpHandler = function () {
                        resizer.style.removeProperty('cursor');
                        document.body.style.removeProperty('cursor');

                        prevSibling.style.removeProperty('user-select');
                        prevSibling.style.removeProperty('pointer-events');

                        nextSibling.style.removeProperty('user-select');
                        nextSibling.style.removeProperty('pointer-events');

                        // Remove the handlers of `mousemove` and `mouseup`
                        document.removeEventListener('mousemove', mouseMoveHandler);
                        document.removeEventListener('mouseup', mouseUpHandler);
                    };
                    resizer.addEventListener('mousedown', mouseDownHandler);};// Attach the handler// onpointerdown
                document.querySelectorAll('.resizer').forEach(function (ele){resizable(ele);});});// Query all resizers
     */       
			
				//
				   //try {window.location.assign }catch(err){<a   download="url">  a=window.open .. a.close();}
	
		
	//			      return document.getElementById('ThePage').src=a;
		
			//	if(!b)return document.getElementById('TheMenu').src=a;
				      //return ;
				      
				      //https://javascript.info/cross-window-communication
				      //<iframe> from another origin: we can
				      //    Getting the reference to the inner window iframe.contentWindow https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow
//    Writing to contentWindow.location . https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow

			//https://javascript.info/cross-window-communication
			
			//<!DOCTYPE html><html><body contenteditable="true"> <textarea id="url" rows="1" cols="50">https://hopeisback.com/hameathel.html</textarea><input type="button" value="Ok" onclick="window.location.assign(url.value);window.open(url.value,'_self');"></body></html>	      
				   //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
				   ////// todo:window.location.assign 
				   
				   //try {window.location.assign }catch(err){<a   download="url">  a=window.open .. a.close();}
				   // myWindow = window.open("", "", "width=200,ght=100");
                  //  myWindow.close();
                  //saveas? <a download="filename"> 
				  //https://www.w3schools.com/jsref/obj_window.asp 
				      //document.getElementById('ThePage').contentWindow.postMessage(src);
//https://dev-bay.com/iframe-and-parent-window-postmessage-communication/
//https://javascriptbit.com/transfer-data-between-parent-window-and-iframe-postmessage-api/
				      //doc;
	

// base64nameMeta=[],base64nameing=[];//for later saveing as base62.js

