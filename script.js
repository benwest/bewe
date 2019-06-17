"use strict"

var $main = document.querySelector('ul');
var $links = Array.from( $main.querySelectorAll('a') );
var $cursor = document.querySelector('.cursor');
var $link = document.querySelector('.link');
var $center = document.querySelector('.center');

function show () {
    $main.classList.remove( 'hidden' );
}

function clamp ( x, min, max ) {
    return Math.min( Math.max( x, min ), max );
}

function contains ( rect, x, y ) {
    return x >= rect.left && x < rect.right && y >= rect.top && y < rect.bottom;
}

function once ( element, event, cb ) {
    function wrapped () {
        element.removeEventListener( event, wrapped );
        cb();
    }
    element.addEventListener( event, wrapped );
}

function render ( x, y ) {
    var c = $center.getBoundingClientRect();
    $main.style.transform = "translate(" + x + 'px, ' + y + 'px)';
    var $hovered = $links.find( function( $link ) {
        return contains( $link.getBoundingClientRect(), c.left, c.top );
    })
    if ( $hovered ) {
        $cursor.classList.add('pointer');
        $link.href = $hovered.href;
        $link.target = $hovered.target;
    } else {
        $cursor.classList.remove('pointer');
        $link.removeAttribute('href');
        $link.removeAttribute('target');
    }
}

function normalizeTouch ( event ) {
    var touch = event.touches[ 0 ];
    return { x: touch.clientX, y: touch.clientY };
}

function ping () {
    var element = document.createElement('div');
    element.classList.add('ping');
    document.body.appendChild( element );
    setTimeout( function () {
        document.body.removeChild( element );
    }, 1000 )
}

if ( 'ontouchstart' in window ) {
    document.documentElement.classList.add( 'touch' );
    show();
    var x = 0, y = 0, lastTouch;
    window.addEventListener( 'touchstart', function ( e ) {
        lastTouch = normalizeTouch( e );
    });
    window.addEventListener( 'touchmove', function ( e ) {
        var touch = normalizeTouch( e );
        var dx = lastTouch.x - touch.x;
        var dy = lastTouch.y - touch.y;
        x -= dx;
        y -= dy;
        x = clamp( x, -window.innerWidth, window.innerWidth );
        y = clamp( y, -window.innerHeight, window.innerHeight );
        render( x, y );
        lastTouch = touch;
    });
    window.addEventListener( 'click', ping )
} else {
    once( window, 'mousemove', show )
    window.addEventListener( 'mousemove', function ( e ) {
        var x = e.clientX;
        var y = e.clientY;
        render( window.innerWidth - x, ( window.innerHeight - y ) - ( window.innerHeight / 2 ) );
    });
}