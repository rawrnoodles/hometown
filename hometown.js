
var hiddengempicture, imagecaption;

hiddengempicture = ['images/littlevenice.png', 
					'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1658301301/blog/sanbh1okghcs28csvkbf.webp', 
					'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1658301555/blog/ywkyeyeo987y0khggnfj.webp', 
					'https://cdn.thatch.in/cdn-cgi/image/width=2048,format=webp/images/by-user/EyaFUgNijaNrLLqpX6XZATMlWMP2/places/286980/tj6gh3-2f08d608-4f51-45d0-81a3-bca36024b511.jpg', 
					'https://www.churchillarmskensington.co.uk/-/media/sites/pubs-and-hotels/c/the-churchill-arms-kensington-_-p021/images/gallery-2022/churchill-gallery-15.ashx?h=1280&w=1920&la=en&hash=3BF692BC6C52C577F335CFF0212BDF98'
					];
imagecaption = ['Little Venice', 
				'Painted Halls', 
				'Grants Museum of Zoology', 
				'Neal\'s Yard', 
				'The Churchill Arms'
				];

window.addEventListener("DOMContentLoaded", function() {  
	// This code will get executed when the DOM (WHOLE HTML) has successfully loaded. 
	let element_list_image = document.getElementById('image');
	element_list_image.setAttribute("src", hiddengempicture[0]);

	let element_text = document.getElementById('image_caption');
	element_text.innerText = imagecaption[0];
});

function nextImage() {
	let element_list_image3 = document.getElementById('image');
	//element_list_image3.replaceChildren();
	//let new_img3 = document.createElement('img');
	hiddengempicture.push(hiddengempicture.shift());
	element_list_image3.setAttribute("src", hiddengempicture[0]);

	//element_list_image3.appendChild(new_img3);
	let element_text3 = document.getElementById('image_caption');
	imagecaption.push(imagecaption.shift());
	element_text3.innerText = imagecaption[0];
}

function prevImage() {
	let element_list_image2 = document.getElementById('image');
	//element_list_image2.replaceChildren();
	//let new_img2 = document.createElement('img');
	hiddengempicture.unshift(hiddengempicture.pop());
	element_list_image2.setAttribute("src", hiddengempicture[0]);

	//element_list_image2.appendChild(new_img2);
	let element_text2 = document.getElementById('image_caption');
	imagecaption.unshift(imagecaption.pop());
	element_text2.innerText = imagecaption[0];
}
