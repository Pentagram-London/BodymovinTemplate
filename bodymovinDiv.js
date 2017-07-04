var anim;
    var elem = document.getElementById('bodymovin')
    var animData = {
        container: elem,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'data.json'
    };
    anim = bodymovin.loadAnimation(animData);

    elem.onclick = function(){
      anim.play()
    };
