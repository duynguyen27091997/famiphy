//general
$('.header__user').click(()=>{
   $('.header__user-dropdown').slideToggle();
});
$('.navbar-toggler').click(()=>{
    $('.header__side-list').toggleClass('show');
});
$(window).on('resize',()=>{
   if(window.innerWidth>=767){
        $('.header__side-list').removeClass('show');
    }
});
$('.header__main-list .nav-item .nav-item').has('ul.navbar-nav').append('<i class="fas fa-angle-right"></i>');
$('.header__side-list .nav-item').has('ul.navbar-nav').append('<i class="fas fa-plus"></i>');
$('.header__side-list .nav-link').add('.header__side-list i').click((event)=>{
    $(event.target).siblings('ul.navbar-nav').slideToggle().siblings('i').toggleClass('fa-plus').toggleClass('fa-minus');

});
//account
$('.account__switch li').click(function(){
    $(this).addClass('active').siblings('li').removeClass('active');
    const typeForm = $(this).attr('data-type-form');
    const formShow =$(`.account__form-${typeForm}`);
    $('.account__form').not(formShow).hide();
    formShow.show();
});