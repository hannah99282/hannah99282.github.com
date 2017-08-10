 window.onscroll=function(){
                var topScroll =document.body.scrollTop ||document.documentElement.scrollTop;
                var bignav  = document.getElementById("bignav");
                if(topScroll >= 80){  
                    bignav.style.position = 'fixed';
                    bignav.style.top = '0';
                }else{
                	 bignav.style.position = 'relative';
                }
                 
               var   oScenter=document.getElementById('s-center');
                 var aImg= oScenter.getElementsByClassName('img');
                 var oDiv= document.getElementById('s-cdiv');
                 var oContent=document.getElementById('content');
                 var  aDiv=oContent.getElementsByClassName('mouseover')
                 var  aA=oContent.getElementsByTagName('a');
                var oAboutus=document.getElementById('aboutus');
                var   oImg=document.getElementById('absimg');
                var  oAsdiv=document.getElementById('absdiv');
                 var oBanner=document.getElementById('banner');
                 var oSpan=document.getElementById('bnspan');
                 var  oExample=document.getElementById('example');
                 var  aSpan=oExample.getElementsByTagName('span');
                 var  aExpImg=oExample.getElementsByTagName('img');
                
                
                var arrSrc=[
                    				'img/hone_case01.jpg',
                					'img/hone_case04.jpg',
                					'img/hone_case03.jpg',
                					'img/hone_case02.jpg',
                					'img/case01.jpg',
                ]
                
                 if(topScroll >= 150){
                    aImg[0].style.left='-280px' ;
                   
                      aImg[2].style.left='-280px' ;
                   
                      aImg[1].style.right='-320px' ;
                    
                      aImg[3].style.right='-320px' ;
                      
                       oDiv.style.transform='none';
//                      oDiv.style.MozTransform='none';
//                      oDiv.style.msTransform='none';
                     }
                
         if(topScroll >= 1000){
         	oImg.style.transform='none';
         	oImg.style.MozTransform='none';
            oImg.style.msTransform='none';
     	 oAsdiv.style.transform='none';
//   	  oAsdiv.style.MozTransform='none';
//         oAsdiv.style.msTransform='none';
         }


           oSpan.onclick=function ( ){
        	oBanner.style.display='none';
     }
                  
                  
                  
                  for (var i=0;i<aDiv.length;i++) {
                  	aDiv[i].index=i ;
                  	 aA[i].index=i;
                    aDiv[i].onmousemove=function ( ){
                    	this.style.display='none'; 
                    	aA[this.index].style.display='block';
                    }
                    
                    aA[i].onmouseleave=function () {
                    	this.style.display='none'; 
                    	aDiv[this.index].style.display='block';
                    }
                    }
       
       var  j=0;
    aSpan[0].onclick=function ( ) {	
    	 j-=1;
    	if(j<0){j=4;}
    	for ( var i=0;i<5;i++){
    	 if(j>4){j=0;}

           
    		aExpImg[i].src=arrSrc[j];
    	           j+=1;
    	}
    }
  
       aSpan[1].onclick=function ( ) {
                if( j>4){j=0;}
                 j+=1;		
for ( var i=0;i<5;i++){

         if( j>4){j=0;}
		aExpImg[i].src=arrSrc[j];
			    j+=1;
		
	}
	 
	
}
 
        
        
//			$("#myCarousel").carousel('cycle');
           $("#myCarousel").carousel({interval: 2000});
			   }