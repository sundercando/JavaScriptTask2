
function Feed(id,type){
	this.id=id;;
	this.type=type;	
}

Feed.prototype.getID = function(){
	return this.id;
};
Feed.prototype.getType = function(){
	return this.type;
};

function TextFeed(id,text){
	this.id = id;
	this.text = text;
	this.time= new Date();
}

TextFeed.prototype = Object.create(Feed.prototype);

TextFeed.prototype.getFeed = function(){
	return this.text;
}
function URLFeed(id,url){
   alert(" this is in URL Feed");
	this.url=url;
	this.time= new Date();
}
URLFeed.prototype = Object.create(Feed.prototype);

URLFeed.prototype.getFeed = function(){
	return this.url;
}

var feedNew = [];
var feedsArray = [];


var feedService = function(){
       
		  var createFeed;
		  var inputText = document.feedForm.inputText.value;
        
		  
		  return { 
		    
			    createFeed:  function(){
						 
				 if(inputText.length > 4 && (inputText.substring(0,4).toUpperCase() == "HTTP" || inputText.substring(0,3).toUpperCase() == "WWW")){
		               if(inputText.substring(0,3).toUpperCase() == "WWW") {
			    
						inputText ="http://"+inputText;
						feedsArray.push(inputText);
						reloadFeeds(feedsArray, 'URL');
						}
							feed = new URLFeed(1,inputText);
					} else {
							feed = new TextFeed(1,inputText);
							feedsArray.push(inputText);
							reloadFeeds(feedsArray, 'text');
					}
				},
				
				deleteFeed: function(id){
				
				      alert("Hai "+id );
							feedsArray=feedNew;
							feedsArray.splice(id,1);	
							var myfeed = document.getElementById("loadFeeds");
								while (myfeed.firstChild) {
									myfeed.removeChild(myfeed.firstChild);
								}			
						reloadFeeds(feedsArray);
				}
		  };
	  
}


function reloadFeeds(feedsArray, identifier){	

    
	var element = document.getElementById("loadFeeds");	

	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}	
	var feeds = feedsArray;	

	feedNew=feeds;

	var div = document.createElement("div");
	
	var userFeed,userFeedText,userFeedDelete,userFeedDate,img,node,input,node1,index,userIcon;
	
		for(var i=0,l=feeds.length;i<l;i++){
		
			userFeed = getElement("div","userFeed");
			userFeedText = getElement("div","UserFeedText");
			userFeedDelete = getElement("div","UserFeedDelete");
			userFeedDate = getElement("div","UserFeedDate");
			userIcon = getElement("div","userIcon");
			
			
			img = document.createElement("img");		
			img.setAttribute("src", "../images/vodo.jpg");
			img.setAttribute("height", "40px");
			img.setAttribute("width", "40px");
			
			
			userIcon.appendChild(img);
			userIcon.setAttribute("id", "img1");
			node = document.createElement("a");
			if(identifier === 'URL'){
			//alert("this is URL "+feeds[i]);
			    node.setAttribute("href", feeds[i]);
			} 
			//else{
			//node.setAttribute("id", "txt");
			//}
			//if(feeds[i] instanceof URLFeed){
    		//	node.setAttribute("href", feeds[i].getFeed());		
			//}
			
			node.setAttribute("id", "txt");
		 //	node.innerHTML=feeds[i].getFeed();
		    node.innerHTML = feeds[i];
			userFeedText.appendChild(node);
			
			input = document.createElement("input");		
			input.setAttribute("type", "button");
			input.setAttribute("value", "Remove");
			input.setAttribute("onclick", ("deleteFeeds("+i+")"));
			input.setAttribute("id", "but");
			
			
			userFeedDelete.appendChild(input);
			
			node1 = document.createTextNode(getDateString(new Date()));
		
     		userFeedDate.appendChild(node1);
			userFeed.setAttribute("id", "feedDiv");
			userFeed.appendChild(userIcon);
			userFeed.appendChild(userFeedText);
			userFeed.appendChild(userFeedDelete);
			userFeed.appendChild(userFeedDate);
			div.appendChild(userFeed);
			
	
		}
	element.appendChild(div);
	
	
	
	
	
}


function getElement(type,styleClass){
	var element = document.createElement(type);
	element.setAttribute("class",styleClass);
	return element;
}

var createFeeds = function(){
  alert("from other function"); 
   var fObj= feedService();
      fObj.createFeed();
}


var deleteFeeds = function(id){
  alert("going to Delete"); 
   var fObj= feedService();
      fObj.deleteFeed(id);
}

function getDateString(date){
	return (date.getMonth()+1) +"/"+ (date.getDate()) + "/"+(date.getFullYear()) + " " + (date.getHours() > 12 ? date.getHours() - 12 : date.getHours() )+":"+(date.getMinutes()) + " " + (date.getHours() > 12 ? "PM" : "AM" );
}