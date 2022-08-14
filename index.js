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
        gameboard_holder.gameboard.forEach(board_element => {
            let rowEl = document.createElement('div');
            rowEl.className = 'row rw-el';

            board_element.forEach(symbol => {
                let symbolEl = document.createElement('div');
                symbolEl.className = 'col symbol-el';
                //symbolEl.textContent = symbol;

                // adding functionality
                symbolEl.addEventListener('click', () => {
                    console.log(symbol);
                    symbolEl.style = "background-color: blue;";
                    symbolEl.textContent = 'x';
                    symbol = symbolEl.textContent;
                    console.log(symbol);
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

