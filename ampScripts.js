//This is called from col3links.xhtml in the includefiles folder; so appears on all pages.

/* changes top nav link, if not in frame (aka full text pdf framed pages)
if(window.self == window.top){
  var navItem = document.getElementsByClassName("podcasts");
  var newLink = '<a href="/site/video/"><span>VIDEOS</span></a>';
  navItem[0].innerHTML = newLink;
}
*/
//function to capitalize each word in a string
function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//HTML for CTR Collection
var searchCTR = '  <form class="searchbox" action="/search" method="get">'+
  '<fieldset class="search-text">  '+                
        '<legend>SEARCH COLLECTION</legend>'+
        '<label for="adv-search-citation-author1">Author</label>'+
        '<input type="text" id="adv-search-citation-author1" name="author1" value="" /><br />'+
        '<label for="adv-search-citation-title">Title</label>'+ 
        '<input type="text" id="adv-search-citation-title" name="title" value="" />'+
        '<input type="hidden" id="adv-search-bool-title-all" name="andorexacttitle" value="and" checked="checked" /><br />'+
        '<label for="adv-search-citation-abstract-title">Abstract | Title</label>'+
        '<input type="text" id="adv-search-citation-abstract-title" name="titleabstract" value="" />'+
        '<input type="hidden" id="adv-search-bool-abstract-title-all" name="andorexacttitleabs" value="and" checked="checked" /><br />'+
        '<label for="adv-search-citation-text-abstract-title">Text | Abstract | Title</label>'+
        '<input type="text" id="adv-search-citation-text-abstract-title" name="fulltext" />'+
        '<input type="hidden" id="adv-search-bool-text-abstract-title-all" name="andorexactfulltext" value="and" checked="checked" /><br />'+
     '</fieldset>'+
                 '<input type="hidden" name="subj_coll_code" value="4" />'+
                '<input type="hidden" name="submit" value="yes" />'+
                '<input type="reset" class="search-reset" style="margin-left: 30px; margin-right: 10px;" name="reset" value="Clear" />'+
                '<input type="submit" class="search-submit" name="submit" value="Submit" />'+
   '</form>';

//collection pages video link insert and specialized collection insert
var specialcollections = '<h3 style="margin-top:20px;">Special Collections</h3><p style="margin-top:7px;"><a href="http://theoncologist.alphamedpress.org/site/virtual-issues/breast-cancer-2017.xhtml">Breast Cancer Collection</a><br><a href="http://theoncologist.alphamedpress.org/site/collections/ons/index.html">The Importance of Symptom Management and Palliative Care</a><br /><a href="http://theoncologist.alphamedpress.org/site/conference/asco/2016/index.html">Sharing Knowledge: Advancing Medical Wisdom</a><br /><a href="http://theoncologist.alphamedpress.org/site/collections/cancercare/index.xhtml">Value in Cancer Care Series</a></p>';
var mypath = location.pathname;
if( (mypath.indexOf("collection")) != -1 ){ //on a collection page
  var mystart = mypath.lastIndexOf("/")+1;
  var collectionName = mypath.substring(mystart);
  collectionName = collectionName.replace(/-/g,' ');
  collectionName = capitalizeEachWord(collectionName);
  var videoLink = '<a href="/site/video/?vern='+ collectionName +'">' + collectionName + ' Videos</a><br /><br />';
  
  //Clinical Trial Results Collection
  if(collectionName == 'Clinical Trial Results'){
    var myHeader = '<h1><a href="http://clinicaltrialresults.theoncologist.com/visiting/results"><img alt="" src="/site/Images/CTR_submit.png" style="width: 219px; height: 49px; float: right; margin-left: 8px; margin-right: 0px; margin-top: 8px;" /></a><br /> Clinical Trial Results</h1>';
    var myIntro = '<p>Clinical Trial Results (CTR) from <em><strong>The Oncologist</strong></em> promotes the mission of sharing results to speed discoveries. Motivated by the belief that every trial, regardless of outcome, can have a benefit to the research community, <strong><em>The Oncologist</em></strong> has taken a leadership role in providing a forum for the publication of all trials.  </p> <p>We invite you to explore the complete collection of Clinical Trial Results published in support of this mission. From phase I feasibility studies of novel agents to larger-scale phase II trials studying efficacy and tolerability of combination therapies, CTR offers helpful insights into a variety of therapeutic approaches, some successful, others not, but all of which can inform future research. </p>';
    $( "#col-main h1" ).html('');
    $( "#col-main" ).prepend(myHeader + myIntro);
    $( ".sidebar-related-coll:first" ).append( searchCTR );
    videoLink = ''; /* there are no CTR videos */
  }//end if CTR

    //Regulatory Issues: EMA
  if(collectionName == 'Regulatory Issues Ema'){
    var videoLink = '<a href="/site/video/?vern='+ collectionName +'">' + 'Regulatory Issues: EMA' + ' Videos</a><br /><br />';
  }//end if EMA
  
  //Regulatory Issues: FDA
  if(collectionName == 'Regulatory Issues FDA'){
    var videoLink = '<a href="/site/video/?vern='+ collectionName +'">' + 'Regulatory Issues: FDA' + ' Videos</a><br /><br />';
  }//end if FDA

  $( ".sidebar-related-coll:first" ).append( videoLink );
  $( ".reader-note" ).html('');
  $( ".reader-note" ).prepend(specialcollections);
}

//headerbanner check if in iFrame, then hide.  Area used for Cancer of Month or App banner
if(window.self !== window.top){
  $('#headerbanner').hide();
  $('body').css('background-color', '#d2d2d2');
  $('div.hw-gen-page').css('margin-top', 0);
}

//Add register link to login
//var oDiv = document.getElementById("hdr-login-username");
//     if (oDiv) {
//     var div = document.getElementById('hdr-login-username-label');
//     div.innerHTML = div.innerHTML + ' \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="http://www.alphamedpress.org/cgi/register"> Register</a>'; 
//}

var oDiv = document.getElementById("hdr-login-username");
      if (oDiv) {
      var regdiv = document.getElementById('hdr-login-password-label');
      regdiv.insertAdjacentHTML('beforebegin', '\xa0<a href="http://www.alphamedpress.org/cgi/register">Register</a>');       
}


//div.innerHTML = div.innerHTML + ' \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a href="http://www.alphamedpress.org/cgi/register"> Register</a>'; 


//CME full text pdf frame 
//var myCMEtag = '<base target="_blank" />'; 
