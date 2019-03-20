var worker={
    '0': {
        'name':'Johny Depp',
        'description':'Lorem ipsum dolor sitea amet, zixf conseit  adipi cing elit.',
        'links': [ {
            'Twitter':'https://twitter.com',
            'Facebook':'https://facebook.com',
            'VKontakte':'https://vk.ru'
        } ],
        'image':'img/team/1.jpg'
    },
    '1': {
        'name':'Cara Delevin',
        'description':'Lorem ipsum dolor sitea amet, zixf conseit  adipi cing elit.',
        'links': [ {
            'Twitter':'https://twitter.com',
            'Facebook':'https://facebook.com',
            'VKontakte':'https://vk.ru',
            'Instagram':'https://instagram.com'
        } ],
        'image':'img/team/2.jpg'
    },
    '2':{
        'name':'Johny Depp 2',
        'description':'Lorem ipsum dolor sitea amet, zixf conseit.',
        'links': [ {
            'Facebook':'https://facebook.com',
            'VKontakte':'https://vk.ru',
            'Instagram':'https://instagram.com'
        } ],
        'image':'img/team/3.jpg'
    },
    '3':{
        'name':'Gigi Khadid 2',
        'description':'Lorem ipsum dolor sitea ame.',
        'links': [ {
            'Facebook':'https://facebook.com',
            'Instagram':'https://instagram.com'
		} ],
        'image':'img/team/5.jpg'
    }
}
function slider(){
    for(var i=0;i<Object.keys(worker).length;i++){
		if(i==0){
			$('.main_team-slider .main_team-comtainer-about').append('<h3>'+worker[i]['name']+"</h3>");
			$('.main_team-slider .main_team-comtainer-about').append('<p>'+worker[i]['description']+"</p>");
			$('.main_team-slider .main_team-comtainer-about').append('<div class="main_team-container-about-links">');
			var links=Object.keys(worker[i]['links'][0]);
			for(var j=0;j<links.length;j++){
				$('.main_team-slider .main_team-comtainer-about .main_team-container-about-links').append('<a href="'+worker[i]['links'][0][links[j]]+'">'+links[j]+'</a>');
			}
			$('</div>');
            $('.main_team-container-photo').append('<img src="'+worker[i]['image']+'">');
        }

			$('.main_team-slider .main_team-slider-units').append('<div class="main_team-slider-unit">');
			$('.main_team-slider .main_team-slider-units .main_team-slider-unit:nth-child('+(i+1)+')').append('<img src="'+worker[i]["image"]+'">');
			$('.main_team-slider .main_team-slider-units .main_team-slider-unit:nth-child('+(i+1)+')').append('<h3>'+worker[i]["name"]+'</h3>');
			$('.main_team-slider .main_team-slider-units .main_team-slider-unit:nth-child('+(i+1)+')').append('<p>'+worker[i]["description"]+'</p>');
			$('.main_team-slider .main_team-slider-units .main_team-slider-unit:nth-child('+(i+1)+')').append('<div class="links">');
			var links2=Object.keys(worker[i]['links'][0]);
			for(var j=0;j<links2.length;j++){
				$('.main_team-slider .main_team-slider-units .main_team-slider-unit:nth-child('+(i+1)+') .links').append('<a href="'+worker[i]['links'][0][links2[j]]+'">'+links2[j]+'</a>');
			}
			$('.main_team-slider .main_team-slider-units .main_team-slider-unit:nth-child('+(i+1)+')').append('</div>');
			$('.main_team-slider .main_team-slider-units').append('</div>');
        
    }
}
$(document).ready(function(){
    slider();
    $('.main_team-slider .main_team-slider-units .main_team-slider-unit:first-child').addClass('unit_no_displ unit_about');
    $('.main_team-slider .main_team-slider-units .main_team-slider-unit').click(function(){
        $('.main_team-container-photo').html($(this).children('img').clone());
        $('.main_team-slider .main_team-comtainer-about h3').text($(this).children('h3').text());
        $('.main_team-slider .main_team-comtainer-about p').text($(this).children('p').text());
        $('.main_team-slider .main_team-comtainer-about .main_team-container-about-links').html($(this).children('.links').clone());
        $('.main_team-slider .main_team-slider-units .main_team-slider-unit.unit_no_displ.unit_about').toggleClass('unit_no_displ unit_about');
        $(this).toggleClass('unit_no_displ unit_about');
    });
});
$(document).ready(function(){
	$('.header a.menu').click(function(){
		$('.header').addClass('menu_on');
		$(this).toggle();
		$('body').css('overflow','hidden');
	});
});
$(document).on('click','.header.menu_on .close', function(){
		$('.header a.menu').toggle();
		$(".header").removeClass('menu_on');
		$('body').css('overflow','auto');
});