function themeToggle() {

    let q = document.querySelectorAll('#nightify')
    if (q.length) {
      q[0].parentNode.removeChild(q[0])
      var imgElements = document.querySelectorAll('img');
      imgElements.forEach(function(img) {
        img.style.webkitFilter = '';
        var itemElements = document.querySelectorAll('.item');
        itemElements.forEach(function(item) {
          item.style.webkitFilter = '';
        });
      });
      return false
    }
    var h = document.getElementsByTagName('head')[0],
      s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', 'nightify');
    s.appendChild(document.createTextNode('html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(100%) !important; background: #fff;} .line-content {background-color: #fefefe;}'));
    h.appendChild(s);
    // Find each img element and add a new style to invert it again
    var imgElements = document.querySelectorAll('img');
    imgElements.forEach(function(img) {
      // Fixed few images were still inverted
      img.style.webkitFilter = 'invert(100%) hue-rotate(180deg) contrast(100%)';
      // To fix specfic issue with blissos svg
      if (img.id === 'svg') {
      img.style.webkitFilter = 'invert(100%)';
      img.style.filter = 'invert(100%)';
} 
    });
    var itemElements = document.querySelectorAll('.item');
    itemElements.forEach(function(item) {
      item.style.webkitFilter = 'invert(100%) hue-rotate(180deg) contrast(100%)';
    });
    
    return true
  }
