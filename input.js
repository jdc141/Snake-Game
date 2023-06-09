let inputDirection = {x: 0, y:0}
let lastInputDIrection = {x:0, y:0}

window.addEventListener("keydown", e => {
    switch (e.key) {
			case "ArrowUp":
                if (lastInputDIrection.y !== 0) break
				inputDirection = { x: 0, y: -1 };
				break;
			case "ArrowDown":
                if (lastInputDIrection.y !== 0) break
				inputDirection = { x: 0, y: 1 };
				break;
			case "ArrowLeft":
                if (lastInputDIrection.x !== 0) break
				inputDirection = { x: -1, y: 0 };
				break;
			case "ArrowRight":
                if (lastInputDIrection.x !== 0) break
				inputDirection = { x: 1, y: 0 };
				break;
		}
})

export function getInputDirection(){
    lastInputDIrection = inputDirection
    return inputDirection
}