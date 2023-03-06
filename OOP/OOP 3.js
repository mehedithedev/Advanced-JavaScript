const circle= {
    redius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('From circle 1');
    }
};

const circle2= {
    redius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('From circle 2');
    }
};

circle.draw()
circle2.draw()