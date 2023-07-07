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

$(document).ready(function(){


  let count = 0;
  $(".btnNext").click(function(e){
      count++;
      if(count>2){
          count=0
      }
      e.preventDefault()
      $(".train_sub5>li").removeClass("on")
      $(".train_sub5>li").eq(count).addClass("on")
  })

  $(".btnPrev").click(function(e){
      e.preventDefault()
      count--;
      if(count<0){
          count=2
      }
      $(".train_sub5>li").removeClass("on")
      $(".train_sub5>li").eq(count).addClass("on")
  })
  let timer = setInterval(function(){
      count++;
      if(count>2){
          count=0
      }
      
      $(".train_sub5>li").removeClass("on")
      $(".train_sub5>li").eq(count).addClass("on")

  },2500)

  $(".station_sub5_main").mouseover(function(){
      clearInterval(timer)
  })

  $(".station_sub5_main").mouseout(function(){

      timer = setInterval(function(){
          count++;
          if(count>2){
              count=0
          }
          
          $(".train_sub5>li").removeClass("on")
          $(".train_sub5>li").eq(count).addClass("on")
  
      },2500)


  })
})

//메인에도 슬라이드를 넣으려구요,,,..//

$(document).ready(function(){


  let count = 0;
  $(".btnNext_main").click(function(e){
      count++;
      if(count>2){
          count=0
      }
      e.preventDefault()
      $(".train_banner>li").removeClass("on")
      $(".train_banner>li").eq(count).addClass("on")
  })

  $(".btnPrev_main").click(function(e){
      e.preventDefault()
      count--;
      if(count<0){
          count=2
      }
      $(".train_banner>li").removeClass("on")
      $(".train_banner>li").eq(count).addClass("on")
  })
  let timer = setInterval(function(){
      count++;
      if(count>2){
          count=0
      }
      
      $(".train_banner>li").removeClass("on")
      $(".train_banner>li").eq(count).addClass("on")

  },5000)

  $(".banner_main").mouseover(function(){
      clearInterval(timer)
  })

  $(".banner_main").mouseout(function(){

      timer = setInterval(function(){
          count++;
          if(count>2){
              count=0
          }
          
          $(".train_banner>li").removeClass("on")
          $(".train_banner>li").eq(count).addClass("on")
  
      },5000)


  })
})