$(document).ready(function() {
$('#fullpage').fullpage({
	// anchors:['P1', 'P2', 'P3','P4', 'P5', 'P6','P7', 'P8'],
	menu: '#fixedMenu'
});

//fixed Menu
$(function(){
    $('.fixed__item').on('click', function(e){
               
        var $this=$(this),
           container=$('.fixed__menu'),
           others=container.find('.fixed__item');

          
        if(!$this.hasClass('fixed_active')) {
            others.removeClass('fixed_active');
            $this.addClass('fixed_active');
        } 
    });
   
});

$(function(){
    $('.wrapper').on('wheel',function(e){
        var deltaY=e.originalEvent.deltaY,
            sections=$('.fixed__item'),
            container=$('#fixedMenu'),
            activSection=container.find('.fixed_active'),
            nextSection=activSection.next(),
            prevSection=activSection.prev();
// console.log('da');
//             console.log(sections.eq(1));
// console.log('da');
        

        
            if (deltaY>0 && $(!activSection.find('.last'))){
                setTimeout(function(){
                nextSection.addClass('fixed_active');
                activSection.removeClass('fixed_active');
                },750);
                deltaY=0;
            } 

            if(deltaY<0  && $(!activSection.find('.first'))){
                setTimeout(function(){
                prevSection.addClass('fixed_active');
                activSection.removeClass('fixed_active');
                },750);
                deltaY=0;
            }
        
        
        console.log(activSection); 
        console.log(deltaY);

    });
});



// accordion vertical
$('.kurok').on('click', function(e){
	e.preventDefault();

    var $this=$(this),
    	item=$this.closest('.p4__item'),
    	container=$this.closest('.p4__team'),
    	items=container.find('.p4__item'),
    	content=item.find('.item__teem'),
    	otherContent=container.find('.item__teem');

    if(!item.hasClass('p4-active')){
    	otherContent.slideUp();
    	items.removeClass('p4-active');
    	content.slideDown();
    	item.addClass('p4-active');
    }else{
    	content.slideUp();
    	item.removeClass('p4-active');
    }


})


// accordion horizontal
$(function(){
	$('.accordion__title').on('click', function(e){
 		// e.preventDefault();


 		var $this=$(this),
 			container=$this.closest('.p5'),
 			item=$this.closest('.accordion'),
 			items=container.find('.accordion'),
 			activeItem=items.filter('.accordionActive'),
 			content=item.find('.accordion__textDop'),
 			activeContent=activeItem.find('.accordion__textDop');

 		if(!item.hasClass('accordionActive')){
 			items.removeClass('accordionActive');
 			item.addClass('accordionActive');
 			activeContent.animate({
 				'width':'0px'
 			});
 			content.animate({
 				'width':'540px'
 			});
 			
 		} else{
 			item.removeClass('accordionActive');
 			content.animate({
 				'width':'0px'
 			});
 		}	


 	});
});
	

// FANCYBOX
$(function(){
	$('.fancy__trigger').fancybox({
        type:'inline',
        // maxWidth : 460,
        fitTiView : false,
        padding : 0
    })
});


//form submit
$(function(){
	$('#form').on('submit',function(e){
		e.preventDefault();
		
		var form = $(this),
		formData = form.serialize();

		$.ajax({
			url:'mail.php',
			type: 'POST',
			data: formData,
            // success: function(data){
            //     console.log(data);
            // 
            success: function(data){
                var popup = data.status ? '#success' : '#error';
                // var popup = data.status;
                // if (popup){
                //     console.log('da');
                //     console.log(data.status);
                // } else{
                //     console.log('net');
                //     console.log(data.status);
                // }

                $.fancybox.open([
                    {href:popup}
                ],{
                    type: 'inline',
                    maxWidth: 240,
                    fitToView: false,
                    padding: 0,
                    afterClose: function(){
                        form.trigger('reset');
                    }

                });

				
                
			}
		})
	});

    // $('.p7__fancybox_close').on('click', function(e){
    //     e.preventDefault();
    //     $.fancybox.close();
    // });
})






// Yandex map
$(function(){
	ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [53.90225723693819,27.561831069999915],
            zoom: 11,
            controls: []
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');

    var coords = [
    [53.90631335169517,27.495127088241347], [53.9412148804891,27.59878908760129]
],
    myCollection = new ymaps.GeoObjectCollection({}, {
       iconImageHref: '../images/icons/Layer 1.svg',
       iconImageSize:  [46, 57],
       iconImageOffset: [-26, -52],
  
       draggable: false //их нельзя перемещать
    });
    for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
}

	myMap.geoObjects.add(myCollection);
    }
});

});