let gameboard_holder = (() => {
    let gameboard = [['!','!','!'],['!','!','!'],['!','!','!']];
    return { gameboard };
})();

let player = (name , symbol) => {
    return { name , symbol };
}

let controller = (() => {

})

let display_container = (() => {
    let display_area = document.querySelector('.display-area');

    // let display = () => {
    //     gameboard_holder.gameboard.forEach(board_element => {
    //         let cur_board_el = document.createElement('div');
    //         cur_board_el.textContent = board_element;

    //         display_area.appendChild(cur_board_el);
    //     });
    // }

    let display = () => {
        gameboard_holder.gameboard.forEach((board_row, rw_index) => {
            let rowEl = document.createElement('div');
            rowEl.className = 'row rw-el';

            board_row.forEach((symbol, col_index) => {

                let symbolEl = document.createElement('div');
                symbolEl.className = 'col symbol-el';

                // adding functionality
                symbolEl.addEventListener('click', () => {
                    
                    symbolEl.style = "background-color: blue;";
                    console.log(symbolEl.textContent); // ' ' blank output

                    // if(symbolEl.textContent !== '!'){ //this outer if is useless because div has just been created and is empty
                    //     if(symbolEl.textContent === 'x' || symbolEl.textContent === 'o'){
                    //         //console.log('no entry');
                    //     } else{
                    //         symbolEl.textContent = 'x';
                    //         symbol = symbolEl.textContent;
                            
                    //     }

                    // }

                    if(symbolEl.textContent === 'x' || symbolEl.textContent === 'o'){
                        //console.log('no entry');
                    } else{
                        symbolEl.textContent = 'x';
                        gameboard_holder.gameboard[rw_index][col_index] = symbolEl.textContent;
                        console.log(gameboard_holder.gameboard);                  
                    }

                });
                symbolEl.addEventListener('dblclick', () => {
                    symbolEl.style = "background-color: white;";
                });

                rowEl.appendChild(symbolEl);
            });

            display_area.appendChild(rowEl);
        })
    }

    return {display};

})();

display_container.display();

