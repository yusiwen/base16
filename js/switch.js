$(function() {
  // $( '#scheme-select a' ).click( function( evt ) {
  //   evt.preventDefault();

  //   var $this = $( this ),
  //     file = $this.attr( 'href' ).substring( 1 ),
  //     $link = $( '#scheme' );

  //   $.ajax('css/base16-' + file + '.css').complete(function( data ) {
  //     $link.remove();
  //     $( '.scheme' ).text( 'Preview: ' + file.charAt(0).toUpperCase() + file.substring( 1 ) );
  //     swapOut( data.responseText );
  //   });
  // });

  // function swapOut( style ) {
  //   var $newScheme = $( '<style id="scheme" type="text/css">' + style + '</style>' );
  //   $( 'head' ).append( $newScheme );
  // }

  function loadTheme(theme) {
    $('link.theme').attr('disabled', true);
    $('link' + '.' + theme).attr('disabled', false);
  }

  $(window).hashchange( function(){
    var theme = location.hash ? location.hash.replace('#', '') : 'default';
    loadTheme(theme);
  });

  $(window).hashchange();
});
