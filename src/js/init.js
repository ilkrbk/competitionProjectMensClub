$(function(){
    var r = Raphael('map', 1350, 950),
    attributes = {
            fill: '0a0a0a',
            stroke: 'rgb(255, 192, 0)'
        },
    arr = new Array();
    for (var region in paths) {
        var obj = r.path(paths[region].path);
        console.log(region);
        obj.attr(attributes);
        arr[obj.id] = region;
      
        obj
        .hover(function(){
            this.animate({
                fill: 'rgb(255, 192, 0)'
            }, 300);
        }, function(){
            this.animate({
                fill: attributes.fill
            }, 300);
        })
    }
});