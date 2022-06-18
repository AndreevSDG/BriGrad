$(document).ready(function () {
	//-----------------МЕНЮ----------------
	$('#item-home').click(function () {
		$('.home').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.service').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.about').css('display', 'none');
			$('.contact').css('display', 'none');

		});
	});
	$('#item-service').click(function () {
		$('.service').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.home').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.about').css('display', 'none');
			$('.contact').css('display', 'none');
		});
	});
	$('#item-about').click(function () {
		$('.about').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.home').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.service').css('display', 'none');
			$('.contact').css('display', 'none');

		});
	});
	$('#item-contact').click(function () {
		$('.contact').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.home').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.service').css('display', 'none');
			$('.about').css('display', 'none');


		});
	});

	//----------------ПОПАП Ведение дел в суде----------------
	$('#round1').click(function () {
		$('#litigating').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#litigating').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});

	//----------------ПОПАП Составление правовых документов----------------
	$('#round2').click(function () {
		$('#legal').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#legal').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});
	//----------------ПОПАП Правовое обслуживание деятельности предприятий ----------------
	$('#round3').click(function () {
		$('#law').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#accountant').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});
	//----------------ПОПАП Бухгалтерское обслуживание предприятий и предпринимателей ----------------
	$('#round4').click(function () {
		$('#accountant').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#law').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});
	//----------------ПОПАП Составление бухгалтерских и налоговых документов ----------------
	$('#round5').click(function () {
		$('#document-drafting').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#document-drafting').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});
	//----------------ПОПАП Восстановление бухгалтерского и налогового учета ----------------
	$('#round6').click(function () {
		$('#restoration-accounting').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#restoration-accounting').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});
	//----------------ПОПАП Помощь при ДТП ----------------
	$('#round7').click(function () {
		$('#assistance-car').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#assistance-car').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});
	//----------------ПОПАП Помощь в регистрации ООО или ФЛП ----------------
	$('#round8').click(function () {
		$('#assistance-registration').fadeIn(300, function () {
			$(this).css('display', 'block');
			$('.service').css('filter', 'blur(2px)');
			$('.header').css('filter', 'blur(2px)');
			$('.footer').css('filter', 'blur(2px)');
		});
	});

	//------------При нажатии на крестик----------
	$('.popup__icon--close').click(function () {
		$('#assistance-registration').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	});

});
$(document).ready(function () {
	//-----------------МЕНЮ----------------
	$('#item-burger-home').click(function () {
		$('.home').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.service').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.about').css('display', 'none');
			$('.contact').css('display', 'none');

		});
	});
	$('#item-burger-service').click(function () {
		$('.service').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.home').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.about').css('display', 'none');
			$('.contact').css('display', 'none');
		});
	});
	$('#item-burger-about').click(function () {
		$('.about').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.home').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.service').css('display', 'none');
			$('.contact').css('display', 'none');

		});
	});
	$('#item-burger-contact').click(function () {
		$('.contact').fadeIn(300, function () {
			$(this).css('display', 'block');
		});
		$('.home').fadeOut(300, function () {
			$(this).css('display', 'none');
			$('.service').css('display', 'none');
			$('.about').css('display', 'none');


		});
	});
});
$(document).ready(function () {
	let flagMenu = false;
	$('.header__burger').click(function () {
		if (!flagMenu) {
			$('.header__burger--active').css('display', 'block');
			$('.header__burger-icon').css('display', 'none');
			$('.header__burger-icon--close').css('display', 'block');

		} else {
			$('.header__burger--active').css('display', 'none');
			$('.header__burger-icon').css('display', 'block');
			$('.header__burger-icon--close').css('display', 'none');

		}
		flagMenu = !flagMenu;
	});
});

$(document).ready(function () {
	let wind = $(window).width();
	if (wind <= 576) {
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000
		});
	} else if (wind <= 992) {
		$(".owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000
		});
	} else {
		$(".owl-carousel").owlCarousel({
			items: 4
		});
	}
});

//-------------------------Закрытие чего-либо при нажати в любом месте сайта--------------------------------
$(document).mouseup(function (e) {
	let lunge = $('#lunge');
	if (!lunge.is(e.target) && lunge.has(e.target).length === 0) {
		$('.header__burger--active').css('display', 'none');
		$('.header__burger-icon').css('display', 'block');
		$('.header__burger-icon--close').css('display', 'none');
		$('.popup__item').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	}
});
//-------------------------Закрытие чего-либо при нажати ESC--------------------------------
$(document).on('keyup', function (e) {
	if (e.key == "Escape") {
		$('.header__burger--active').css('display', 'none');
		$('.header__burger-icon').css('display', 'block');
		$('.header__burger-icon--close').css('display', 'none');
		$('#litigating').css('display', 'none');
		$('#legal').css('display', 'none');
		$('#law').css('display', 'none');
		$('#accountant').css('display', 'none');
		$('#document-drafting').css('display', 'none');
		$('#restoration-accounting').css('display', 'none');
		$('#assistance-car').css('display', 'none');
		$('#assistance-registration').css('display', 'none');
		$('.service').css('filter', 'blur(0px)');
		$('.header').css('filter', 'blur(0px)');
		$('.footer').css('filter', 'blur(0px)');
	}
});