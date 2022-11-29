//create body class copy some of the constructor functionality from head
// const bodyArray = [];

// class Body {
//     constructor (el, head, direction) {
//         this.node = document.createElement('div'); 
//         this.node.setAttribute('id', 'snakebody');
//         el.appendChild(this.node);
        
//         this.bodyDirection = direction;
//         this.node.style.top = head.style.top;
//         this.node.style.left = head.style.left;

//         bodyArray.push(this);
//         setTimeout(this.moveBody.bind(this), 250);
//     }
    
//     moveBody() {
//         const direction = this.bodyDirection;
        
//         // for(let i = bodyArray.length; i > 0; i--) {
//         //   bodyArray[i] = bodyArray[i-1];
//         //   bodyArray[i] = bodyArray[i-1];
//         // }
//         // bodyArray[0] = head;
        
//         let topPosition = Number(head.style.top.replace('px', ''));
//         let leftPosition = Number(head.style.left.replace('px', ''));

//         if (direction === 'right') {
//           this.node.style.left = `${(leftPosition += 50)}px`;
//         } else if (direction === 'left') {
//           this.node.style.left = `${(leftPosition -= 50)}px`;
//         } else if (direction ==='down') {
//           this.node.style.top = `${(topPosition += 50)}px`;
//         } else if (direction === 'up') {
//           this.node.style.top = `${(topPosition -= 50)}px`;
//         }

//         setTimeout(this.moveBody.bind(this), 250); 
//     }

// }

// console.log(bodyArray)
    // constructor (el, head, direction) {
    //     this.node = document.createElement('div');
    //     this.node.setAttribute('id', 'body');
    //     el.appendChild(this.node);

    //     // const leadingHead = document.getElementById('head');
    //     // console.log(leadingHead);
    //     console.log(head);
    //     this.currentDirection = direction;
    //     this.SPEED = 250;
        
    //     // `${Number(head.style.top.replace('px', '')) + 50}px`
    //     // this.node.style.top = `${Number(head.style.top.replace('px', ''))}px`;
    //     // this.node.style.left = `${Number(head.style.left.replace('px', '')) + 50}px`;
    //     if(direction === 'left') {
    //         this.node.style.top = head.style.top;
    //         this.node.style.left = `${Number(head.style.left.replace('px', '')) + 50}px`;
    //     } else if (direction === 'right') {
    //         this.node.style.top = head.style.top;
    //         this.node.style.left = `${Number(head.style.left.replace('px', '')) - 50}px`;
    //     } else if (direction === 'up') {
    //         this.node.style.left = head.style.left;
    //         this.node.style.top = `${Number(head.style.top.replace('px', '')) + 50}px`;
    //     } else if (direction === 'down') {
    //         this.node.style.left = head.style.left;
    //         this.node.style.top = `${Number(head.style.top.replace('px', '')) - 50}px`;
    //     }

    //     setTimeout(this.moveBody.bind(this), this.SPEED);
    //     bodyArray.push(this);
    // }

    // moveBody() {
    //     const snakeBody = this.node;
    //     const direction = this.currentDirection;
    
    //     let topPosition = Number(snakeBody.style.top.replace('px', ''));
    //     let leftPosition = Number(snakeBody.style.left.replace('px', ''));
        
    //     //add else if condition to make the snake move toward the right direction
    //     if (direction === 'right') {
    //       snakeBody.style.left = `${(leftPosition += 50)}px`;
    //     } else if (direction === 'left') {
    //       snakeBody.style.left = `${(leftPosition -= 50)}px`;
    //     } else if (direction ==='down') {
    //       snakeBody.style.top = `${(topPosition += 50)}px`;
    //     } else if (direction === 'up') {
    //       snakeBody.style.top = `${(topPosition -= 50)}px`;
    //     }

    //     setTimeout(this.moveBody.bind(this), this.SPEED)
    // }




