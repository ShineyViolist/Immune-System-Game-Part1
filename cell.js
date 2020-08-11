class Cell {
    constructor(panel,offsetX){
        this.cell = createSprite(panel.x - offsetX,panel.y - 100,50,50);
        this.display;
        this.set = 0;
    }

    pressedOver(){
        if(mousePressedOver(this.cell) && this.set == 0){
            this.display = createSprite(mouseX,mouseY,50,50);
            this.set = 1;
        }
        if(this.set == 1){
            this.display.x = mouseX;
            this.display.y = mouseY;
            this.cell.mouseReleased(this.letGo() );
        }
        //this.display = createSprite(mouseX,mouseY,50,50);
    }

    letGo(){
        this.set = 0;
    }

}