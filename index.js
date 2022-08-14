let gameboard_holder = (() => {
    let gameboard = ['x','o','x','x','o','x','o','x','o'];
    return { gameboard };
})();

let player = (name , symbol) => {
    return { name , symbol };
}

let controller = (() => {

})

let display_container = (() => {
    let display_area = document.querySelector('.display-area');
    
    let display = () => {
        gameboard_holder.gameboard.forEach(board_element => {
            let cur_board_el = document.createElement('div');
            cur_board_el.textContent = board_element;
    
            display_area.appendChild(cur_board_el);
        });
    }

    return {display};
    
})();

display_container.display();

