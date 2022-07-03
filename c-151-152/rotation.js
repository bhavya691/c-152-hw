AFRAME.registerComponent("rotate", {
    schema:{
        rotateY:{type: "number", default:0}
    },
    tick: function(){
        window.addEventListener("click", (e) => {
            this.data.rotateY += 0.05;
        })
        var rotate = this.el.getAttribute("rotation")
        rotate.y = rotate.y+this.data.rotateY;
        this.el.setAttribute("rotation", {
            x:rotate.x,
            y:rotate.y,
            z:rotate.z
        })
    }
});