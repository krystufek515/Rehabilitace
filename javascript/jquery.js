$(document).ready(function(){
  
				$("#obsah1").hide();
				$("#obsah2").hide();
			    $("#obsah3").hide();
			    
			    $('#naviround1').css("background-image", "url('images/round_full.png')");
				$('#naviround2').css("background-image", "url('images/round_empty.png')");
				$('#naviround3').css("background-image", "url('images/round_empty.png')");	
				
				$(window).scroll(function(){
					$('#head').css("background-position-y",parseInt($(this).scrollTop()*0.2));
				})
							
				
				$(document).scroll(function () {
				    var y = $(this).scrollTop();
				    if(y < 500 ){
				    	$('#naviround1').css("background-image", "url('images/round_full.png')");
					    $('#naviround1').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        });
				        
				        $('#naviround2').css("background-image", "url('images/round_empty.png')");
				        $('#naviround2').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_empty.png')");
				        });
				        
				        $('#naviround3').css("background-image", "url('images/round_empty.png')");
				        $('#naviround3').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_empty.png')");
				        });
					    
				    }
				    
				    else if(y > 500 && (y + $(window).height() ) < ($(document).height() - 500)) {
				    
				    	$('#naviround1').css("background-image", "url('images/round_empty.png')");
				        $('#naviround1').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_empty.png')");
				        });
				        
				        $('#naviround2').css("background-image", "url('images/round_full.png')");
				        $('#naviround2').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        });
				        
				        $('#naviround3').css("background-image", "url('images/round_empty.png')");
				        $('#naviround3').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_empty.png')");
				        });
				    }
				    else {
				    
				    	$('#naviround1').css("background-image", "url('images/round_empty.png')");
					    $('#naviround1').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_empty.png')");
				        });
				        
				        $('#naviround2').css("background-image", "url('images/round_empty.png')");
				        $('#naviround2').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_empty.png')");
				        });
				        
				        $('#naviround3').css("background-image", "url('images/round_full.png')");
				        $('#naviround3').hover(function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        }, function(){
					        $(this)
					        	.css("background-image", "url('images/round_full.png')");
				        });
					    
				    }
				    
				    
				});
				
				
				
				
				$(".find").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/place_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/place.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
				});
				
				$(".about").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/home_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/home.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
				});
				
				$(".procedury").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/list_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/list.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
				});
				
				
				
				$(".procedury").click(function(){
				    $("#obsah1").slideDown(500);
				    
				    $(".procedury").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/list_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "white")
					    		.css("background-image", "url(menu_icons/list_hover.png)" )
					    		.css("background-position", "center 50px")
					    		.css("color", "#2ecc71");
							
					});
				    
				    $("#obsah2").hide();
				    	$(".find")
						    .css("background-color", "#2ecc71")
					    	.css("background-image", "url(menu_icons/place.png)" )
					   		.css("background-position", "center 35px")
					   		.css("color", "white");
				    
				    
				    $("#obsah3").hide();
				    	$(".about")
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/home.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
				    	
				    $(".find").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/place_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/place.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
					});
					
					$(".about").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/home_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/home.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
					});
				    		
				});
				
				$(".find").click(function(){
				    $("#obsah1").hide(0);
				    	$(".procedury")
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/list.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
				    
				    $(".procedury").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/list_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/list.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
					});				    		
					
				    $("#obsah2").slideDown(500);
				    	$(".find")
						    	.css("background-color", "white")
					    		.css("background-image", "url(menu_icons/place_hover.png)" )
					    		.css("background-position", "center 50px")
					    		.css("color", "#2ecc71");
				    	
				    $(".find").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/place_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "white")
					    		.css("background-image", "url(menu_icons/place_hover.png)" )
					    		.css("background-position", "center 50px")
					    		.css("color", "#2ecc71");
							
					});
				    
				    $("#obsah3").hide(0);
				    	$(".about")
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/home.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
				    
				    $(".about").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/home_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/home.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
					});
				    		
				}); 
				
				$(".about").click(function(){
				    $("#obsah1").hide(0);
				    	$(".procedury")
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/list.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
				    
				    $(".procedury").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/list_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/list.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
					});
				    
				    $("#obsah2").hide(0);
				    	$(".find")
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/place.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
				    
				    $("#obsah3").slideDown(500);
				    	$(".about")
						    	.css("background-color", "white")
					    		.css("background-image", "url(menu_icons/home_hover.png)" )
					    		.css("background-position", "center 50px")
					    		.css("color", "#2ecc71");
				    	
				    $(".about").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/home_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "white")
					    		.css("background-image", "url(menu_icons/home_hover.png)" )
					    		.css("background-position", "center 50px")
					    		.css("color", "#2ecc71");
							
					});
				    		
				
					$(".find").hover(function(){
						$(this)
				    		.css("background-color", "white")
				    		.css("background-image", "url(menu_icons/place_hover.png)" )
				    		.css("background-position", "center 50px")
				    		.css("color", "#2ecc71");
						}, function(){
							$(this)
						    	.css("background-color", "#2ecc71")
					    		.css("background-image", "url(menu_icons/place.png)" )
					    		.css("background-position", "center 35px")
					    		.css("color", "white");
							
					});
				});
				
				
				
				
				
				
});