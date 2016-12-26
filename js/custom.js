/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
                  $('#text1').bind({
                      focus: function(){
                          $(this).val('');                                 
                      },
                      blur: function(){
                          $(this).val('Enter Some Text');
                      }
                  });
                  
                  $('.li1').bind('click', function(){
                      $(this).css('background-color','red');
                  });
                  
                  $('#select1').bind('change', function(){
                     alert('You selected '+$(this).val()); 
                  });
                  
                  $('#button1').bind('click', function(){
                      alert('Unbinded select CHANGE, the alert will not show again.')
                      $('select').unbind('change');
                  });
                  
                  $('#button2').click(function(){                    
                    $('.block').append("<div class='future'> I'm a new DIV</div>");
                  });
                  
                  //o primeiro seletor pode ser qualquer elemento pai do futuro elemento
                  $('body').on('click','.future', function(){
                      $(this).css({'color':'blue', 'font-weight': 'bold'}).html('You Clicked Me');
                  });
                  
                  $("#submitButton").click(function(){
                      $("#myForm").submit();
                  });
                  
                  //Checking missing images
                  var images = ["img1.jpg", "img2.jpg", "noimage.jpg", "img3.jpg", "img4.jpg"];
                  var html = "";
                  $.each(images, function(key, value){
                      html+= "<img class='misimgtest' src='assets/"+value+"' />";                      
                  });
                  $('#imageContainer').html(html);
                  $('img').error(function(){
                      $(this).replaceWith("<img class='misimgtest' src='assets/cnl.jpg' />")
                  });
                  
                  //select/unselect checkboxes                  
                  $("#handle").change(function(){  
                        var status = this.checked; 
                        alert (status);
                        $('.toggle').each(function(){ 
                            this.checked = status; 
                        });
                  });
                  $('.toggle').change(function(){                     
                    if(this.checked == false){ 
                        $("#handle")[0].checked = false; 
                    }                       
                    if ($('.toggle:checked').length == $('.toggle').length ){ 
                        $("#handle")[0].checked = true; 
                    }
                    });
                    
                    //get value from checks
                    $('#getValues').click(function(){                        
                        var values = '';                        
                        if($(".toggle:checked").length){
                            $(".toggle:checked").each(function(){
                                values+= $(this).next('label').html()+" ";
                            });
                            $('#selected').html("Selected values are: "+values);
                        }
                        else $('#selected').html('Nothing Selected');
                    });
                    
                    //tooltip
                    $(".hoverMe").hover(function(){
                        $("#tip").fadeIn("slow")
                    }, function(){
                        $("#tip").fadeOut("slow")
                    });
                    
                    //tooltip move com o mouse
                    $(".hoverMe").mousemove(function(e){
                        var topPosition = e.pageY+5;
                        var leftPosition = e.pageX+5;                        
                        $("#tip").css({
                            'top': topPosition+'px',
                            'left': leftPosition+'px'
                        });
                    });
                    
                    //keyboard shortcuts
                    var altPressed = false;
                    $(document).keydown(function(event){
                        if(event.which ===18){
                            altPressed = true;
                        }
                        if (altPressed){
                            switch(event.which){
                                case 83 : $("#ksc1").slideToggle("slow");
                                    return false;
                                    break;
                                
                                case 71 : $("#ksc2").slideToggle("slow");
                                    return false;
                                    break;
                                    
                                case 66 : $(".ksc").slideToggle("slow");
                                    return false;
                                    break;
                            }
                        }
                    });
                    $(document).keyup(function(event){
                        if (event.which === 18) altPressed=false;
                    });
            });