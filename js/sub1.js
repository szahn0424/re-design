window.onload = function(){

    let swiper = new Swiper(".station_v1", {
        // cssMode: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".pre",
        },
        pagination: {
          el: ".stv1_pg",
          clickable:true
        },
        mousewheel: true,
        keyboard: true,
      });
      let swiper1 = new Swiper(".station_v2", {
        // cssMode: true,
        navigation: {
          nextEl: ".next2",
          prevEl: ".pre2",
        },
        pagination: {
          el: ".stv2_pg",
          clickable:true
        },
        mousewheel: true,
        keyboard: true,
      })
    
 

}