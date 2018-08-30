var examples = {};

//examples['simple'] = function() {
//  $('#sphere').earth3d({
//    dragElement: $('#locations') // where do we catch the mouse drag
//  });
//};
//
//examples['simple_tilted'] = function() {
//  $('#sphere').earth3d({
//    dragElement: $('#locations'), // where do we catch the mouse drag
//    sphere: { // rotation and size of the planet
//      tilt: 40,
//      turn: 20,
//      r: 10
//    }
//  });
//};
//
//examples['simple_mars'] = function() {
//  $('#sphere').earth3d({
//    texture: 'images/mars1024x1024.jpg', // texture used by planet
//    dragElement: $('#locations') // where do we catch the mouse drag
//  });
//};



//Defining locations and draggable of the sphere.Each position must have a key, an alpha and delpa(x, y);
examples['locations'] = function() {
  var locations = {
    obj1: {
      alpha: Math.PI / 4,
      delta: 0,
      name: 'location 1'
    },
    obj2: {
      alpha: 1 * Math.PI / 4,
      delta: -2 * Math.PI / 4,
      name: 'location 2'
    },
    obj3: {
      alpha: 2 * Math.PI / 4,
      delta: 0,
      name: 'location 3'
    },
    obj4: {
      alpha: 3 * Math.PI / 4,
      delta: 3 * Math.PI / 4,
      name: 'location 4'
    },
    obj5: {
      alpha: 2.2 * Math.PI / 4,
      delta: -1.1 * Math.PI / 4,
      name: 'location 5'
    }
  };
  $('#sphere').earth3d({
    locationsElement: $('#locations'),
    dragElement: $('#locations'), // where do we catch the mouse drag
    locations: locations,
    sphere: {
      tilt: 0,
      turn: 40,
      r: 10
    }
  });
};



function selectExample(example) {
  $('#sphere').earth3d('destroy');
  $('#sphere').replaceWith($('<canvas id="sphere" width="800" height="800"></canvas>'));
  $('.location').remove();
  $('.flight').remove();
  $('#flights')[0].getContext('2d').clearRect(0, 0, 800, 800);
  if (example == 'simple_mars') {
    $('#glow-shadows').removeClass('earth').addClass('mars');
  } else {
    $('#glow-shadows').removeClass('mars').addClass('earth');
  }
  var code = examples[example].toString();
  code = code.substring(14);
  code = code.substring(0, code.length - 2);
  var lines = code.split("\n");
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].substring(2);
  }
  code = lines.join("\n");
  $('#example_code').val(code);

  examples[example]();
}


$(document).ready(function() {
  selectExample('locations');

  $('#example').change(function() {
    selectExample($(this).val());
  });
});

function addPath() {
  $('#sphere').earth3d('changePaths', {path2: {
    origin: 'obj1',
    destination: 'obj3'
  }});
}
