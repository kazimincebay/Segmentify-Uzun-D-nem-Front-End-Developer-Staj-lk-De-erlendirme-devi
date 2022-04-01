var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });


$( document ).ready(function() {
	$.getJSON("product-list.json", function(data){
		$(".swiper-slide").css("display","flex").css("flex-direction","column")

		var uzunluk = data["responses"][0][0]["params"]["recommendedProducts"]["Size Özel"]
		console.log(uzunluk)
		for(i=1; i<uzunluk.length; i++){
            var resim = data["responses"][0][0]["params"]["recommendedProducts"]["Size Özel"][i]["image"]
			var ad = data["responses"][0][0]["params"]["recommendedProducts"]["Size Özel"][i]["name"]
			var fiyat = data["responses"][0][0]["params"]["recommendedProducts"]["Size Özel"][i]["priceText"]
			var kargo = data["responses"][0][0]["params"]["recommendedProducts"]["Size Özel"][i]["params"]["shippingFee"]
			
			
			
			
			

			
		
			var panel=$(".swiper-wrapper");
        
        
            
            
            panel.append("<div class='swiper-slide'>");
			panel.append("<img src='' alt='' class='cardimage'>");
			$(".cardimage").attr("src",resim);
			panel.append('<div class="card-description">');
			panel.append("<div class='card-title'>");
			panel.append("<h4 class='productName'>Ürün Adı</h4>");
			$(".productName").html(ad);
			panel.append("</div>");
			panel.append("<div class='card-text fiyat'>");
			$(".fiyat").html(fiyat);
			panel.append("</div>");
			panel.append('<div class="kargo">');
			if(kargo=="FREE"){

				$(".kargo").html("* Ücretsiz Kargo");
			}
			panel.append("</div>");
			panel.append("<div class='card-link'>");
			panel.append('<button class="basket">'+"Sepete Ekle"+'</button>');
			panel.append("</div>");
			panel.append("</div>");
			panel.append("</div>");
			
        }
			
				        
		
		
		
	})
})



$(".basket").on("click",function(){
	$(".pop-up").css("display","flex");
})


$(".pop-up-exit").on("click",function(){
	$(".pop-up").css("display","none");
})

