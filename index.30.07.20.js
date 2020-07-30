// under humanitarian agpl license:  You are not allowed to use, produce from or design from this or its part, anything contained with the aim to kill, to torture, or without their consent, to cause harm to or to monitor people and any permission beside this restriction is granted here only under the Agpl License! https://hopeisback.com/#hagpl


///////////
function toggel2edit(){ //as ctr+S as complete document  
/*let a=document.body;
document.body.contenteditable='true';
document.body.designMode=’on’;
void 0;
*/
}

function sendform(a,b,c,d){ 
		return (a+	
		"The title is: "+	
		document.getElementById(b).value+
		"@ItsEnd"+
		document.getElementById(c).value+
		"@ItsEnd"+
		d);}
	
function contentApply(container,txt){
	let	bein = container.children[0].checked,
		bebefore = container.children[1].checked;
	if( !bein&&!bebefore)return "";
	let	location = container.children[2].value,
		name = container.children[4].value,
		title = container.children[6].value,	
		icon = container.children[8].value,
		img = container.children[9].value,
		toinsert = '<div class="flding" id="' 
			+name+'"> <input id="i'
			+name+'" class="toggle" type="checkbox"> <label for="i'
			+name+'"class="lbl-toggle">'
			+title+' </label><div class="fcontent" "content-inner">please replace  your content with this one.</div></div>',
		cutAt = txt.indexOf('<div class="flding" id="'+location);
	console.log(
	"children",container.children ,
	"location : ",container.children[2].value,
	"name : ",container.children[4].value,
	"title : ",container.children[6].value,	
		"icon : ",container.children[8].value,
			"img : ",container.children[9].value,
	"toinsert:",toinsert,
	 "cutat",cutAt,
	 "txt.slice(0,cutAt)",txt.slice(0,cutAt),
	 "txt.slice(cutAt,txt.length)",txt.slice(cutAt,txt.length),
	 " txt= ",txt);
	//todo 
	if (cutAt===-1) return "";
	
	let inmenu=txt.indexOf('<div class="dropdown-content">'),
	    endmenu=txt.indexOf('</div>',inmenu);
	if (inmenu!==-1){
		let into=txt.indexOf(location,inmenu);
		//also insert if inmenu exist in <div class="dropdown-content">
	}
	//complete image and icon
	    
	if(bebefore)	return txt.slice(0,cutAt)+toinsert+txt.slice(cutAt,txt.length);
	let endit='"content-inner"';
	cutAt = txt.slice(cutAt,txt.length).indexOf(endit)+endit.length;	
	return txt.slice(0,cutAt)+toinsert+txt.slice(cutAt,txt.length);}

function restruct (container,steps) {
	let c = document.getElementById(container),p=document.getElementById(steps);
	if(p.value ===0){c.value=[1,loadfile(),""];p.value=1;} // [step,filename, filecontent]
	else switch(c.value[0]){
		case 1:	c.value=[2,c.value[1].files[0],""];
			window.open(c.value[1].name);//,"bemodified", "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes").document.innerHTML;
			c.style.display="block";
			c.innerHTML+="In ";        
			addfield(c,"radio","locatingit") ;//container.children[0]
			c.innerHTML+="or Before :";
			addfield(c,"radio","locatingit","checked");//container.children[1] 
		    addfield(c,"text","lname","br","The locating name");//container.children[2]	
		    addfield(c,"text","fname","br","The name of this element");//container.children[4]
		    addfield(c,"text","tname","br","The title of this element");//container.children[6]
		    c.innerHTML  +="Its Icon: ";
		    addfield(c,"file","icnname").accept="image/png, image/jpeg";//container.children[8]
		    c.innerHTML  +="Its Image: ";
		    addfield(c,"file","imgname","br").accept="image/png, image/jpeg";//container.children[9]		  
			let reader = new FileReader();
			reader.onload = function () {		
				c.value=[2,c.value[1],reader.result];
		 	 p.value=2;//		 	 
		 	    }
			reader.readAsBinaryString(c.value[1]);
    break;
		case 2: c.value[2]=contentApply(c,c.value[2]);	
				if(c.value[2]){p.value=3;
				saveas(c.value[1].name,c.value[2]);
		   //todo here after save window.open(c.value[1].name).. 
		  //p.value=0;//		   
				}else {while (c.firstChild) c.removeChild(c.firstChild);
					   p.value=0;}
				c.value[0]=0;
    break;// todo insert contenteditable="true" into <body > to edit then after save undo it 
		}}/*  * usage eg:
 <div id="create-item" ></div>
    <a href="javascript:void(0);" 
         onclick="restruct('create-item','create-item-progress');">       
	   <progress value="0" max="3" id="create-item-progress">
	</progress></a> 
 **/
	

function addfield(container,type,name,sofix,placeholder){           
          let i = document.createElement("input");// Create an <input> element, set its type and name attributes
          i.type = type;
          i.name = name;
          if(placeholder)i.placeholder=placeholder;
          container.appendChild(i);
          if(sofix)if(sofix ==="checked")
				  i.outerHTML=i.outerHTML.slice(0,i.outerHTML.length-1)+"checked>";//default is checked by replace '>' with "checked>"
			 else container.appendChild(document.createElement(sofix));// Append a line break 
     return i ;} 	

function saveas(filename, text) {let a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    a.setAttribute('download', filename);
    if (document.createEvent){let event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);  
          a.dispatchEvent(event);
  }  else a.click();}
     
     
function loadfile(){
	let i = document.createElement("input");// Create an input element          // this function must be called from  a user    ,,,https://stackoverflow.com/questions/6463439/how-to-open-a-file-browse-dialog-using-javascript
    i.type   = "file";						// Set its type to file
    i.accept = ".html";    					// Set accept to the file types you want the user to select.   Include both the file extension and the mime type
    i.id     = "loadFile";                  // set it id  
    i.dispatchEvent(new MouseEvent("click"));// dispatch a click event to open the file dialog
	return i;}//  i.addEventListener("change", beforeload(i));// set onchange event to call callback when user has selected file


	function swtichTo(my,n){	  my.style.display="none";
		
		let i=document.getElementById(n);//my.parentElement.childern[n];
		i.style.display="block";
		}
//	function diveto(){let a=location.hash,al=a.length;if(al)return a.substr(1,al-1);return null;}//	location is	window.location,
//function diveto(){let a=location.hash,al=a.length;						if(al)return a.substr(1,al-1);return null;}						
/////////
function divein(a){// working with inner <a href= "javascript:void(0);" onclick="go('id');"> and as external link #id
	if(a!==null)
{let x=a;for(;a.tagName!=='BODY';a=a.parentElement)if(a.className==='flding')
	     {let b=a.childNodes[1];if(!b.checked)b.click();}
	focuson(x);
	
	// 
	//console.log(browser.tabs.reload(2, {bypassCache: true}));
//if (navigator.userAgent.indexOf("Chrome") > -1)   console.log( "Google Chrome or Chromium user, please switch between tabs (to fix google rendering bug) ");
  
//	document.location.reload(true);
	 //location.reload(); 
	//	window.reload() ;
//location.reload();
	}}
	//if(a.tagName!=='BODY'&&a.className==='flding')
	//a.childNodes[1].click();

// x.childNodes[1].click();	 

			   //console.log(a.childNodes)
			   //b.checked = true;
	//		   console.log(b);
			   //console.log("before "+b.checked);
			   
			   //b.checked = !b.checked;
			   
		//	   console.log("after "+b.checked);
			   //break;
			   

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs
//browser.tabs.update();
//browser.tabs.reload();
			   
 /*			   
//x.childNodes[1].click();			   

  *
  https://jsfiddle.net/fjaeger/L9z9t04p/4/ 
  function toggleA() {
    var elm = document.getElementById('check-a');
    elm.checked = !elm.checked;
}

function toggleB() {
    var elm = document.getElementById('check-b');
    elm.click();
}

function toggleJQ() {
    var elm = $('#check-jq');
    elm.prop('checked', !elm.prop('checked'));
    // Use .click() instead
}

function setC(checked) {
    var elm = document.getElementById('check-c');
    if (checked != elm.checked) {
        elm.click();
    }
}
  * */
			//if (checked != b.checked)
   //b.click();//
   	//		   b.dispatchEvent(new Event('change')); 
			    //if (checked != b.checked)     b.click();
  //https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript-jquery-or-vanilla
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click
	/*The HTMLElement.click() method simulates a mouse click on an element.

When click() is used with supported elements (such as an <input>), it fires the element's click event. This event then bubbles up to elements higher in the document tree (or event chain) and fires their click events.*/		   
	//		   b.click();
			   //b.checked = true;
			  // b.setAttribute("checked","checked");
			 //a.childNodes[1].checked = true;
			 
			 
			 //for(;;a=a.parentElement)
	   //  for(;a.tagName!=='body';a=a.parentElement)// upward	 
				   //     {let b=a.childNodes[1]; b.checked = true;} }

function Xdivein(a){if(a!==null)
	//for(;a.name!=='body';a=a.parentElement)
	     for(;a.tagName!=='body';a=a.parentElement)// upward	 
				        {let b=a.childNodes[1]; b.checked = true;} }
							//if(b.className="toggle")b.reload();//&& b.type="checkbox"
							
							//if(b.className="toggle" )
								// firefox or chrom do not agree how to set value???
								
								//b.setAttribute("checked","checked");//firefox
								//b.checked = true;
								//b.checked = "checked";
								
								/*
								 index.js:130 Uncaught TypeError: b.setAttribute is not a function
    at divein (index.js:130)
    at recrelocate (index.js:140)
    at relocate (index.js:165)
    at onfocus (VM13 :51)
								 * */
								//} }		
function focuson(b,at=0){if(b!==null){
						b.scrollIntoView({inline:"end"});
						b.style.borderColor='purple';b.style.borderStyle='double none';
						return(b);}}
function goto(b){divein(focuson(b));}//replace 	href="#id" with href="javascript:void(0);"onclick="go2('id');"

function recrelocate(a,al){while(al){let b  = a.lastIndexOf("#");
   		   divein(document.getElementById(a.substr(b+1,al-1)));
   		   if(b)al -= b; else 
   		     {al  = 0;
				// location.reload() ;
   		   }
   		   }	}

function relocate1(a=location.hash){let al=a.length;if(al)
					goto(document.getElementById(a.substr(1,al-1)));}//  relocate is trigged by url when <body onfocus="relocate()"> and <a   href="#idname"   target="_blank">, 

//relocateid=>go2
function go3(i){location.hash=i;go2();
	window.reload() ;
	return true///	false
	;}


function go(i){location.hash=i;go2();return false;}// go is in the same page trigged only by <a href="javascript:void(0);"  onclick="go('idname');return false;"> //No browser loading new or  refreshing the same page. JavaScript void is often used when, inserting an expression into a web page may produce an unwanted side-effect. By using JavaScript:Void(0), you can eliminate the unwanted side-effect, because it will return the undefined primative value. More see https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm
/////////goto(document.getElementById(i));
							
function go2(a=location.hash){
	
//caleandar(element, events, settings);

	
	if(!a) return;
	let al=a.length,f=a.lastIndexOf("+");//test with #comcomizedabout+greencomcom
	// alert("no a")
//console.log("a"a);
 if(f===-1) {recrelocate(a,al); //
	 //location.reload();
	 // reload() ;
	  }
 else{ console.log("relocate f=== " +f);
	   let b=	 focuson(document.getElementById(a.substr(f+1,al-1)));     
	 //console.log(f); 
	 recrelocate(a,f);
     window.location.href = window.location.href;}}
	// browser.tabs.reload({bypassCache: true});
//	 location.reload(true); 
	 
	 //browser.runtime.reload();
     
     //browser.tabs.reload();
     //location.reload() ;   
     //b.focus();
            
            //location.reload() ;
       //browser.runtime.reload();     
          //browser.tabs.reload();
              			      
   			      
    
	
	
								
    function occurrencesOf(e,v){let r=[];
		for(ontag=0,l=v.length,el=e.length,i=0;i<el;){i=e.indexOf(v,i+l);
			   if(i===-1)break; 			// console.log("occurrencesOf  - r,i:",r,i);
			   ontag=e.lastIndexOf('<',i);//		console.log(x,i);
			   let tag1=e[ontag+1], tag3=e.substr([ontag+1],3);
			   if(tag1!=='a'&&tag3!=="<di")   //   &&tag3!=="<la" and why having 
			       r.push(i);}//// filling r with  found v  only if the tag is not of link	     
	    return r;}	  // else console.log(i," was not pushed tag3=", tag3);			  //console.log("occurrencesOf  - r:",r);
	function removehtag(hiliteTag){let arr = document.getElementsByTagName(hiliteTag);// remove highlighting //console.log("removehtag ",arr);
		while(arr.length && (el = arr[0])) {let parent = el.parentNode;
					parent.replaceChild(el.firstChild, el);
					parent.normalize();}};								
	function unfold(n,oc={}){if(oc.length){	
		let highlight = new Highlight(document.querySelectorAll(".content-inner")[n]); // id of the element to parse
		highlight.apply(document.getElementById("searchItem").value);
		} goto(document.querySelectorAll(".content-inner")[n]);  } 
	function resultb(n,r,i={},l=0){let bu = document.createElement("button");
			bu.innerHTML= l.toString(); // r.toString()+here we should have number of results in the element
		//	bu.onmouseover=marked;// on hover;
			bu.type		="button";	
//			bu.background-color ='purple';				
			bu.addEventListener("click", function(){unfold(n,i);}, false);			
			return bu;}
				
	function cleaning(alsov=true){let res=document.getElementById("searchresults");
	  while(res.childNodes[0]) res.removeChild(res.childNodes[0]);
	  document.getElementById("searchmsg").textContent='';
	  if(alsov){
		  console.log("alsov in cleaning ");
		  removehtag( "MARK");//document.getElementById("searchItem").value||
	  document.getElementById("searchItem").value='';
  }
	  return res;}
	  		
	function findit(a){if(a){//		 console.log("findit a", a);
		let res=cleaning(false);
	  let item = document.querySelectorAll(".content-inner"),//document.querySelec­torAll("content-inner");// getting the hidden element from the doby.
		  maxn = item.length,  r = 0,	n = 0, t = 0;//console.log("maxn="+maxn);
	  for(;n<maxn&&r<100;n++){let i=occurrencesOf(item[n].innerHTML,a);//		  let i=occurrencesOf(item[n].outerHTML,a);//item[n].outerHTML.indexOf(a);//item[n].innerHTML.indexOf(a);					
		   if (i.length){res.appendChild(resultb(n,r++,i,i.length));
				t+=i.length;}}
		   document.getElementById("searchmsg").textContent=t.toString();
		  return t;	 } 
		  else cleaning(true);;
		  }
		  
function Highlight(id, tag){////https://www.the-art-of-web.com/javascript/search-highlight/  Original JavaScript code by Chirp Internet: www.chirp.com.au // Please acknowledge use of this code by including this header.
  let targetNode = id;//document.getElementById(id) || document.body;
  let hiliteTag = tag || "MARK";
  let skipTags = new RegExp("^(?:" + hiliteTag + "|SCRIPT|FORM|SPAN)$");
  let colors = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"];
  let wordColor = [];
  let colorIdx = 0;
  let matchRegExp = "";
  let openLeft = false;
  let openRight = false; 
  let endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', "g");// characters to strip from start and end of the input string 
  let breakRegExp = new RegExp('[^\\w\'-]+', "g");// characters used to break up the input string into words

  this.setEndRegExp = function(regex) {  endRegExp = regex;
										 return endRegExp; };
  this.setBreakRegExp = function(regex) {breakRegExp = regex;
										return breakRegExp;  };
  this.setMatchType = function(type){switch(type){
      case "left": this.openLeft = false;  this.openRight = true;break;
      case "right":this.openLeft = true;   this.openRight = false;break;
      case "open": this.openLeft = this.openRight = true; break;
      default:        this.openLeft = this.openRight = false;    }  };
  this.setRegex = function(input){
    input = input.replace(endRegExp, "");
    input = input.replace(breakRegExp, "|");
    input = input.replace(/^\||\|$/g, "");
    if(input) { let       re = "(" + input + ")";
      if(!this.openLeft)  re = "\\b" + re;
      if(!this.openRight) re = re + "\\b";
      matchRegExp = new RegExp(re, "i");
      return matchRegExp; }
    return false;  };
  this.getRegex = function() { let retval = matchRegExp.toString();
	retval = retval.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g, "");
    retval = retval.replace(/\|/g, " ");
    return retval;  };
  this.hiliteWords = function(node){// recursively apply word highlighting
    if(node === undefined || !node) 	return;
    if(!matchRegExp) 					return;
    if(skipTags.test(node.nodeName)) 	return;
    if(node.hasChildNodes()){for(let i=0; i < node.childNodes.length; i++)
								this.hiliteWords(node.childNodes[i]);}
    if(node.nodeType == 3) { // NODE_TEXT
      if((nv = node.nodeValue) && (regs = matchRegExp.exec(nv))) {
        if(!wordColor[regs[0].toLowerCase()]) 
			wordColor[regs[0].toLowerCase()] = colors[colorIdx++ % colors.length];
        let match = document.createElement(hiliteTag);
        match.appendChild(document.createTextNode(regs[0]));
        match.style.backgroundColor = wordColor[regs[0].toLowerCase()];
        match.style.color = "#000";
        let after = node.splitText(regs.index);
        after.nodeValue = after.nodeValue.substring(regs[0].length);
        node.parentNode.insertBefore(match, after);
      }    }  };//      }    };  };

  
  this.remove = function(){let arr = document.getElementsByTagName(hiliteTag);// remove highlighting
    while(arr.length && (el = arr[0])) {let parent = el.parentNode;
					parent.replaceChild(el.firstChild, el);
					parent.normalize();    }  };
  
  this.apply = function(input){ this.remove();// start highlighting at target node
    if(input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ""))) return;    
    if(this.setRegex(input)) 
       this.hiliteWords(targetNode);    
    return matchRegExp;};
}// end of Highlight

//////////// calendar
/* https://www.cssscript.com/create-simple-event-calendar-javascript-caleandar-js/

  Author: Jack Ducasse;
  Version: 0.1.0;
  (◠‿◠✿)
*/
var Calendar = function(model, options,date){
//var  date={};

 //console.log ("model=",model);
/*model.value=[
  {'Date': new Date(2020, 2, 1), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2020, 2, 3), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2020, 2, 4), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];

var	options=model.value; 
var	date={};

*/
  // Default Values
  this.Options = {
    Color: '',
    LinkColor: '',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: true,//false,
    DisabledDays: [],
    ModelChange: model
  };
  // Overwriting default values
  for(var key in options){
    this.Options[key] = typeof options[key]=='string'?options[key].toLowerCase():options[key];
  }

  model?this.Model=model:this.Model={};
  this.Today = new Date();

  this.Selected = this.Today
  this.Today.Month = this.Today.getMonth();
  this.Today.Year = this.Today.getFullYear();
  if(date){this.Selected = date}
  this.Selected.Month = this.Selected.getMonth();
  this.Selected.Year = this.Selected.getFullYear();

  this.Selected.Days = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDate();
  this.Selected.FirstDay = new Date(this.Selected.Year, (this.Selected.Month), 1).getDay();
  this.Selected.LastDay = new Date(this.Selected.Year, (this.Selected.Month + 1), 0).getDay();

  this.Prev = new Date(this.Selected.Year, (this.Selected.Month - 1), 1);
  if(this.Selected.Month==0){this.Prev = new Date(this.Selected.Year-1, 11, 1);}
  this.Prev.Days = new Date(this.Prev.getFullYear(), (this.Prev.getMonth() + 1), 0).getDate();
};

function createCalendar(calendar, element, adjuster){
  if(typeof adjuster !== 'undefined'){
    var newDate = new Date(calendar.Selected.Year, calendar.Selected.Month + adjuster, 1);
    calendar = new Calendar(calendar.Model, calendar.Options, newDate);
    element.innerHTML = '';
  }else{
    for(var key in calendar.Options){
      typeof calendar.Options[key] != 'function' && typeof calendar.Options[key] != 'object' && calendar.Options[key]?element.className += " " + key + "-" + calendar.Options[key]:0;
    }
  }
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function AddSidebar(){
    var sidebar = document.createElement('div');
    sidebar.className += 'cld-sidebar';

    var monthList = document.createElement('ul');
    monthList.className += 'cld-monthList';

    for(var i = 0; i < months.length - 3; i++){
      var x = document.createElement('li');
      x.className += 'cld-month';
      var n = i - (4 - calendar.Selected.Month);
      // Account for overflowing month values
      if(n<0){n+=12;}
      else if(n>11){n-=12;}
      // Add Appropriate Class
      if(i==0){
        x.className += ' cld-rwd cld-nav';
        x.addEventListener('click', function(){
          typeof calendar.Options.ModelChange == 'function'?calendar.Model = calendar.Options.ModelChange():calendar.Model = calendar.Options.ModelChange;
          createCalendar(calendar, element, -1);});
        x.innerHTML += '<svg height="15" width="15" viewBox="0 0 100 75" fill="rgba(255,255,255,0.5)"><polyline points="0,75 100,75 50,0"></polyline></svg>';
      }
      else if(i==months.length - 4){
        x.className += ' cld-fwd cld-nav';
        x.addEventListener('click', function(){
          typeof calendar.Options.ModelChange == 'function'?calendar.Model = calendar.Options.ModelChange():calendar.Model = calendar.Options.ModelChange;
          createCalendar(calendar, element, 1);} );
        x.innerHTML += '<svg height="15" width="15" viewBox="0 0 100 75" fill="rgba(255,255,255,0.5)"><polyline points="0,0 100,0 50,75"></polyline></svg>';
      }
      else{
        if(i < 4){x.className += ' cld-pre';}
        else if(i > 4){x.className += ' cld-post';}
        else{x.className += ' cld-curr';}

        //prevent losing var adj value (for whatever reason that is happening)
        (function () {
          var adj = (i-4);
          //x.addEventListener('click', function(){createCalendar(calendar, element, adj);console.log('kk', adj);} );
          x.addEventListener('click', function(){
            typeof calendar.Options.ModelChange == 'function'?calendar.Model = calendar.Options.ModelChange():calendar.Model = calendar.Options.ModelChange;
            createCalendar(calendar, element, adj);} );
          x.setAttribute('style', 'opacity:' + (1 - Math.abs(adj)/4));
          x.innerHTML += months[n].substr(0,3);
        }()); // immediate invocation

        if(n==0){
          var y = document.createElement('li');
          y.className += 'cld-year';
          if(i<5){
            y.innerHTML += calendar.Selected.Year;
          }else{
            y.innerHTML += calendar.Selected.Year + 1;
          }
          monthList.appendChild(y);
        }
      }
      monthList.appendChild(x);
    }
    sidebar.appendChild(monthList);
    if(calendar.Options.NavLocation){
      document.getElementById(calendar.Options.NavLocation).innerHTML = "";
      document.getElementById(calendar.Options.NavLocation).appendChild(sidebar);
    }
    else{element.appendChild(sidebar);}
  }

  var mainSection = document.createElement('div');
  mainSection.className += "cld-main";

  function AddDateTime(){
      var datetime = document.createElement('div');
      datetime.className += "cld-datetime";
      if(calendar.Options.NavShow && !calendar.Options.NavVertical){
        var rwd = document.createElement('div');
        rwd.className += " cld-rwd cld-nav";
        rwd.addEventListener('click', function(){createCalendar(calendar, element, -1);} );
        rwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,50 75,0 75,100"></polyline></svg>';
        datetime.appendChild(rwd);
      }
      var today = document.createElement('div');
      today.className += ' today';
      today.id='cld-mnt';
      today.innerHTML = months[calendar.Selected.Month] + ", " + calendar.Selected.Year;
      datetime.appendChild(today);
      if(calendar.Options.NavShow && !calendar.Options.NavVertical){
        var fwd = document.createElement('div');
        fwd.className += " cld-fwd cld-nav";
        fwd.addEventListener('click', function(){createCalendar(calendar, element, 1);} );
        fwd.innerHTML = '<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="0,0 75,50 0,100"></polyline></svg>';
        datetime.appendChild(fwd);
      }
      if(calendar.Options.DatetimeLocation){
        document.getElementById(calendar.Options.DatetimeLocation).innerHTML = "";
        document.getElementById(calendar.Options.DatetimeLocation).appendChild(datetime);
      }
      else{mainSection.appendChild(datetime);}
  }

  function AddLabels(){
    var labels = document.createElement('ul');
    labels.className = 'cld-labels';
    var labelsList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for(var i = 0; i < labelsList.length; i++){
      var label = document.createElement('li');
      label.className += "cld-label";
      label.innerHTML = labelsList[i];
      labels.appendChild(label);
    }
    mainSection.appendChild(labels);
  }
  function AddDays(){
    // Create Number Element
    function DayNumber(n){
      var number = document.createElement('p');
      number.className += "cld-number";
      
    //  number.value=document.getElementById('cld-mnt').innerHTML+" "+
		//  number.parentNode.className +" " +
		//  number.innerHTML+".";
      //					    <div id="caleandar-clicked" hidden></div>

      number.onclick   =  function (){		  
		  document.getElementsByClassName('cld-main').value +=
		document.getElementById('cld-mnt').innerHTML+" "+
		  this.parentNode.className +" " +
		  this.innerHTML+".";
		  //style.backgroundColor = "red";
		    this.parentElement.style.backgroundColor= "#4CAF50";//"#0080FF";//background="red";//removeChild(this);
		    
		      
    //this.parentElement.color= #fff;
	//console.log(document.getElementsByClassName('cld-main').value);	  
};		
		  //this.parentNode.parentNode.parentNode.className +" "+
		  //this.parentNode.parentNode.className +" "+

  // console.log(a.innerHTML);
 //   this.parentElement.removeChild(this); 
     
      number.innerHTML += n ;
      return number;
    }
    var days = document.createElement('ul');
    days.className += "cld-days";
    // Previous Month's Days
    for(var i = 0; i < (calendar.Selected.FirstDay); i++){
      var day = document.createElement('li');
      day.className += "cld-day prevMonth";
      //Disabled Days
      var d = i%7;
      for(var q = 0; q < calendar.Options.DisabledDays.length; q++){
        if(d==calendar.Options.DisabledDays[q]){
          day.className += " disableDay";
        }
      }

      var number = DayNumber((calendar.Prev.Days - calendar.Selected.FirstDay) + (i+1));
      day.appendChild(number);

      days.appendChild(day);
    }
    // Current Month's Days
    for(var i = 0; i < calendar.Selected.Days; i++){
      var day = document.createElement('li');
      day.className += "cld-day currMonth";
      //Disabled Days
      var d = (i + calendar.Selected.FirstDay)%7;
      for(var q = 0; q < calendar.Options.DisabledDays.length; q++){
        if(d==calendar.Options.DisabledDays[q]){
          day.className += " disableDay";
        }
      }
      var number = DayNumber(i+1);
      // Check Date against Event Dates
      for(var n = 0; n < calendar.Model.length; n++){
        var evDate = calendar.Model[n].Date;
        var toDate = new Date(calendar.Selected.Year, calendar.Selected.Month, (i+1));
        if(evDate.getTime() == toDate.getTime()){
          number.className += " eventday";
          var title = document.createElement('span');
          title.className += "cld-title";
          if(typeof calendar.Model[n].Link == 'function' || calendar.Options.EventClick){
            var a = document.createElement('a');
            a.setAttribute('href', '#');
            a.innerHTML += calendar.Model[n].Title;
            if(calendar.Options.EventClick){
              var z = calendar.Model[n].Link;
              if(typeof calendar.Model[n].Link != 'string'){
                  a.addEventListener('click', calendar.Options.EventClick.bind.apply(calendar.Options.EventClick, [null].concat(z)) );
                  if(calendar.Options.EventTargetWholeDay){
                    day.className += " clickable";
                    day.addEventListener('click', calendar.Options.EventClick.bind.apply(calendar.Options.EventClick, [null].concat(z)) );
                  }
              }else{
                a.addEventListener('click', calendar.Options.EventClick.bind(null, z) );
                if(calendar.Options.EventTargetWholeDay){
                  day.className += " clickable";
                  day.addEventListener('click', calendar.Options.EventClick.bind(null, z) );
                }
              }
            }else{
              a.addEventListener('click', calendar.Model[n].Link);
              if(calendar.Options.EventTargetWholeDay){
                day.className += " clickable";
                day.addEventListener('click', calendar.Model[n].Link);
              }
            }
            title.appendChild(a);
          }else{
            title.innerHTML += '<a href="' + calendar.Model[n].Link + '">' + calendar.Model[n].Title + '</a>';
          }
          number.appendChild(title);
        }
      }
      day.appendChild(number);
      // If Today..
      if((i+1) == calendar.Today.getDate() && calendar.Selected.Month == calendar.Today.Month && calendar.Selected.Year == calendar.Today.Year){
        day.className += " today";
      }
      days.appendChild(day);
    }
    // Next Month's Days
    // Always same amount of days in calander
    var extraDays = 13;
    if(days.children.length>35){extraDays = 6;}
    else if(days.children.length<29){extraDays = 20;}

    for(var i = 0; i < (extraDays - calendar.Selected.LastDay); i++){
      var day = document.createElement('li');
      day.className += "cld-day nextMonth";
      //Disabled Days
      var d = (i + calendar.Selected.LastDay + 1)%7;
      for(var q = 0; q < calendar.Options.DisabledDays.length; q++){
        if(d==calendar.Options.DisabledDays[q]){
          day.className += " disableDay";
        }
      }

      var number = DayNumber(i+1);
      day.appendChild(number);

      days.appendChild(day);
    }
    mainSection.appendChild(days);
  }
  if(calendar.Options.Color){
    mainSection.innerHTML += '<style>.cld-main{color:' + calendar.Options.Color + ';}</style>';
  }
  if(calendar.Options.LinkColor){
    mainSection.innerHTML += '<style>.cld-title a{color:' + calendar.Options.LinkColor + ';}</style>';
  }
  element.appendChild(mainSection);

  if(calendar.Options.NavShow && calendar.Options.NavVertical){
    AddSidebar();
  }
  if(calendar.Options.DateTimeShow){
    AddDateTime();
  }
  AddLabels();
  AddDays();
}

function caleandar(el, data, settings){
  var obj = new Calendar(data, settings);
  createCalendar(obj, el);
}



// end of calendar
//let lv=a.length;//			   console.log(n +"startloop i="+i); //v=document.getElementById("searchItem").value,
//  <body onfocus="relocate()">
// <body onfocus="relocate(data-active-id)"> 

 //<body >					  	
	// src="nicEdit-latest.js" 
    // bkLib.onDomLoaded(nicEditors.allTextAreas);
