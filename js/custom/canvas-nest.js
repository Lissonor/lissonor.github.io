// build time:Sat Apr 25 2020 12:01:19 GMT+0800 (GMT+08:00)
!function(){function n(n,e,t){return n.getAttribute(e)||t}function e(n){return document.getElementsByTagName(n)}function t(){var t=e("script"),o=t.length,i=t[o-1];return{l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.5),c:n(i,"color","0,0,0"),n:n(i,"count",99)}}function o(){d=a.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,l=a.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function i(){m.clearRect(0,0,d,l);var n,e,t,o,a,u;s.forEach(function(i,r){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>d||i.x<0?-1:1,i.ya*=i.y>l||i.y<0?-1:1,m.fillRect(i.x-.5,i.y-.5,1,1);for(e=r+1;e<y.length;e++){n=y[e];if(null!==n.x&&null!==n.y){o=i.x-n.x;a=i.y-n.y;u=o*o+a*a;u<n.max&&(n===w&&u>=n.max/2&&(i.x-=.03*o,i.y-=.03*a),t=(n.max-u)/n.max,m.beginPath(),m.lineWidth=t/2,m.strokeStyle="rgba("+c.c+","+(t+.2)+")",m.moveTo(i.x,i.y),m.lineTo(n.x,n.y),m.stroke())}}}),r(i)}var a=document.createElement("canvas"),c=t(),u="c_n"+c.l,m=a.getContext("2d"),d,l,r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/45)},x=Math.random,w={x:null,y:null,max:2e4},y;a.id=u;a.style.cssText="position:fixed;top:0;left:0;z-index:"+c.z+";opacity:"+c.o;e("body")[0].appendChild(a);o();window.onresize=o;window.onmousemove=function(n){n=n||window.event;w.x=n.clientX;w.y=n.clientY},window.onmouseout=function(){w.x=null;w.y=null};for(var s=[],f=0;c.n>f;f++){var h=x()*d,g=x()*l,v=2*x()-1,p=2*x()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3})}y=s.concat([w]);setTimeout(function(){i()},100)}();
//rebuild by neat 