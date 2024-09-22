function showSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
    }
    function hideSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    }


var typed = new Typed('#text',{
    strings:["Web Devloper","Fullstack Devloper","Web Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 30,
   
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
   
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
                0:{
                        slidesPerView: 1
                },
                768:{
                        slidesPerView: 2
                },
                1024:{
                        slidesPerView: 3
                },
        }
      });

      
      function showInformation(boxId){
        const box = document.getElementById(boxId)
        const moreInfo = box.querySelector('.info')
        const button = box.querySelector('.card-button');
    
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            moreInfo.classList.add('show');
            button.innerHTML = 'See Less';
        } else {
            moreInfo.classList.add('hidden');
            button.innerHTML = 'See More';
        }
    }