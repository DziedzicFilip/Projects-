
      var zdj = [ "IMGO/Ny_baner_promka.png","IMGO/seul_baner_promka.png","IMGO/Tokio_baner_baner.png" ];
        function los(){
              
      
         var losowe =Math.floor(Math.random() * 3); ;
            
            
         document.getElementById("banerek").src=zdj[losowe];
            if(losowe==0)
                {
                    document.getElementById("Promka").src="IMGO/Nowy_York/Promocje -50 .png";
                    document.getElementById("jeden").src="IMGO/Nowy_York/NY_tylkoteraz.png";
                document.getElementById("dwa").src="IMGO/Nowy_York/cenna.png";
                document.getElementById("trzy").src="IMGO/Nowy_York/Gratis.png";
                document.getElementById("cztery").src="IMGO/Nowy_York/Hotele.png";
                }
            
            
            if(losowe==2)
            {
                document.getElementById("Promka").src="IMGO/tokio_-40%.png";
                    document.getElementById("jeden").src="IMG/tokio-małe-tylko teraz .png";
                document.getElementById("dwa").src="IMG/tokio-małe_najlepsza.png";
                document.getElementById("trzy").src="IMG/tokio_hotel.png";
                document.getElementById("cztery").src="IMG/Tokio_gwarancja .png";
            }
            
            if(losowe==1){
                    document.getElementById("Promka").src="IMGO/Seul/Seul-20 .png";
                    document.getElementById("jeden").src="IMGO/Seul/tylkoteraz.png";
                document.getElementById("dwa").src="IMGO/Seul/ncenna.png";
                document.getElementById("trzy").src="IMGO/Seul/Najlepsze hotele.png";
                document.getElementById("cztery").src="IMGO/Seul/Gwarancja.png";
            }
            
        }
          los();
    