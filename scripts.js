// Funciones de los eventos
function handleClick() {
    alert('Has hecho click en el botón');
  }

  function handleDoubleClick() {
    alert('Has hecho doble click en el botón');
  }

  function handleMouseOver() {
    alert('El mouse pasó sobre el botón');
  }

  function handleMouseOut() {
    alert('El mouse salió del botón');
  }

  function handleMouseDown() {
    document.getElementById('mouseDownButton').style.backgroundColor = 'green';
    setTimeout(function() {
      document.getElementById('mouseDownButton').style.backgroundColor = 'blue';
    }, 100);
  }

  function handleMouseUp() {
    document.getElementById('mouseUpButton').style.backgroundColor = 'yellow';
    setTimeout(function() {
      document.getElementById('mouseUpButton').style.backgroundColor = 'red';
    }, 100);
  }

  function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    document.getElementById('mouseCoordinates').textContent = `Mouse: ${mouseX}, ${mouseY}`;
  }

  // Asignar eventos a los botones
  document.getElementById('clickButton').addEventListener('click', handleClick);
  document.getElementById('dblClickButton').addEventListener('dblclick', handleDoubleClick);
  document.getElementById('mouseOverButton').addEventListener('mouseover', handleMouseOver);
  document.getElementById('mouseOutButton').addEventListener('mouseout', handleMouseOut);
  document.getElementById('mouseDownButton').addEventListener('mousedown', handleMouseDown);
  document.getElementById('mouseUpButton').addEventListener('mouseup', handleMouseUp);
  document.getElementById('container').addEventListener('mousemove', handleMouseMove);

  // Botón para hacer scroll hacia arriba
  document.getElementById('scrollUpButton').addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
  });

  // Botón para hacer scroll hacia abajo
  document.getElementById('scrollDownButton').addEventListener('click', function() {
    window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
    });
  });

  // Botón para ocultar los botones de scroll
  document.getElementById('hideScrollButtonsButton').addEventListener('click', function() {
    var scrollButtons = document.querySelectorAll('#scrollUpButton, #scrollDownButton');
    scrollButtons.forEach(function(button) {
      button.style.display = 'none';
    });
    document.getElementById('hideScrollButtonsButton').style.display = 'none';
    document.getElementById('showScrollButtonsButton').style.display = 'block';
  });

  // Botón para mostrar los botones de scroll
  document.getElementById('showScrollButtonsButton').addEventListener('click', function() {
    var scrollButtons = document.querySelectorAll('#scrollUpButton, #scrollDownButton');
    scrollButtons.forEach(function(button) {
      button.style.display = 'block';
    });
    document.getElementById('hideScrollButtonsButton').style.display = 'block';
    document.getElementById('showScrollButtonsButton').style.display = 'none';
  });