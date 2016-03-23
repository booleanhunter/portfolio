function scrollToElement(elementClass){
    var element = $('.'+elementClass);
    var box = element[0].children[0].children[0];
    if(box.className.indexOf('collapsed-box') !== -1){
        element.find('button')[0].click()
    }
    $("."+elementClass).velocity("scroll", { 
        duration: 1000,
        easing: "easeInBack"
    });
}

function toggleCollapse(event){
    var box = event.currentTarget.parentElement.parentElement.parentElement,
        boxBody = box.children[1],
        icon = event.currentTarget.children[0];

    if(box.className.indexOf('collapsed-box') !== -1) {
        icon.className = icon.className.replace(/fa-plus/g, 'fa-minus');
        $(boxBody).velocity('slideDown', {
            duration: 500,
            easing: 'easeInSine',
            complete: function() {
                box.className = box.className.replace(/ collapsed-box/g, '');
            }
        });
    } else {
        icon.className = icon.className.replace(/fa-minus/g, 'fa-plus');
        $(boxBody).velocity('slideUp', {
            duration: 500,
            easing: 'easeInSine',
            complete: function() {
                box.className += ' collapsed-box';
            }
        });
    }
        }