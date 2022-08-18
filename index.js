let gameboard_holder = (() => {
    let gameboard = [['!','!','!'],['!','!','!'],['!','!','!']];
    return { gameboard };
})();

let player = (name , symbol) => {
    return { name , symbol };
}

let logic = (() => {
    let boardelm = gameboard_holder.gameboard;

    let should_print = true;

    let checker = (symbol) => {
        //horizontal 1
        if(
            boardelm[0][0] === boardelm[0][1] && boardelm[0][1] === boardelm[0][2] && 
            boardelm[0][0] !== '!' && boardelm[0][1] !== '!' && boardelm[0][2] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
        }    

        //horizontal 2
        else if(
            boardelm[1][0] === boardelm[1][1] && boardelm[1][1] === boardelm[1][2] && 
            boardelm[1][0] !== '!' && boardelm[1][1] !== '!' && boardelm[1][2] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
        }    

        //horizontal 3
        else if(
            boardelm[2][0] === boardelm[2][1] && boardelm[2][1] === boardelm[2][2] && 
            boardelm[2][0] !== '!' && boardelm[2][1] !== '!' && boardelm[2][2] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
                
        }    

        //vertical 1
        else if(
            boardelm[0][0] === boardelm[1][0] && boardelm[1][0] === boardelm[2][0] && 
            boardelm[0][0] !== '!' && boardelm[1][0] !== '!' && boardelm[2][0] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
                
        }    

        //vertical 2
        else if(
            boardelm[0][1] === boardelm[1][1] && boardelm[1][1] === boardelm[2][1] && 
            boardelm[0][1] !== '!' && boardelm[1][1] !== '!' && boardelm[2][1] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
                
        }    

        //vertical 3
        else if(
            boardelm[0][2] === boardelm[1][2] && boardelm[1][2] === boardelm[2][2] && 
            boardelm[0][2] !== '!' && boardelm[1][2] !== '!' && boardelm[2][2] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
                
        }    

        //diagonal l -> r
        else if(
            boardelm[0][0] === boardelm[1][1] && boardelm[1][1] === boardelm[2][2] && 
            boardelm[0][0] !== '!' && boardelm[1][1] !== '!' && boardelm[2][2] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
        }

        //diagonal r -> l
        else if(
            boardelm[2][0] === boardelm[1][1] && boardelm[1][1] === boardelm[0][2] && 
            boardelm[2][0] !== '!' && boardelm[1][1] !== '!' && boardelm[0][2] !== '!' ){

                let winner_displayelm = document.createElement('div');
                winner_displayelm.textContent = `${symbol} is the winner`;

                if(should_print){
                    document.body.appendChild(winner_displayelm);
                    should_print = false;
                }
        }

        // else{
        //     let winner_displayelm = document.createElement('div');
        //     winner_displayelm.textContent = 'TIE';

        //     if(should_print){
        //         document.body.appendChild(winner_displayelm);
        //         should_print = false;
        //     }
        // }

        if(!should_print){
            restarter();
        }
    }

    return {checker, should_print};

})();

let display_container = (() => {
    let display_area = document.querySelector('.display-area');

    // let display = () => {
    //     gameboard_holder.gameboard.forEach(board_element => {
    //         let cur_board_el = document.createElement('div');
    //         cur_board_el.textContent = board_element;

    //         display_area.appendChild(cur_board_el);
    //     });
    // }

    let player1_turn = true;

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
                        if(player1_turn){
                            symbolEl.textContent = 'x';
                            gameboard_holder.gameboard[rw_index][col_index] = symbolEl.textContent;
                            console.log(gameboard_holder.gameboard);
                            player1_turn = false;
                            logic.checker('x');
                        } else{
                            symbolEl.textContent = 'o';
                            gameboard_holder.gameboard[rw_index][col_index] = symbolEl.textContent;
                            console.log(gameboard_holder.gameboard);
                            player1_turn = true;
                            logic.checker('o');
                        }
                                          
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

    return {display, display_area};

})();

let startelm = document.querySelector('.start-button');
function starter(){
    display_container.display();
    startelm.innerHTML = '';
}

function restarter(){
    startelm.textContent = 'PLAY AGAIN?';
    startelm.addEventListener('click',() => {
        display_container.display_area.innerHTML = '';
        display_container.display();
    });
}

