const toggleBtn = document.querySelector('.toggleBtn span');
      function onToggleBtn (event) {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('menu-trigger');
        
        if ( toggleBtn.innerText === 'menu'){
          toggleBtn.innerText = 'close';
          toggleBtn.animate({
          transform: [
            'rotateZ(0deg)',
            'rotateZ(90deg)'
          ]
        }, {
          duration: 350,
          fill: "forwards"
        });
        } else {
          toggleBtn.innerText = 'menu';
          toggleBtn.animate({
          transform: [
            'rotateZ(0deg)',
          ]
        }, {
          duration: 350,
          fill: "forwards"
        });
        }
      }
      toggleBtn.addEventListener('click', onToggleBtn)