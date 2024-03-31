var box = document.getElementById('player');
    var player;
    var Random=(Math.floor(Math.random() * 3) + 1);
    function checkPlayerInput() {
        player = Number(box.value);
        if(player>3 || player<1){
            var OutOfBound=document.getElementById('WinorLoss')
            OutOfBound.textContent="🤦‍♂️Choose Between 1 And 3"
        }
        else if(player==Random){
            var win=document.getElementById('WinorLoss')
            win.textContent="😎Player:Win🏆"
        }
        else{
            var loss=document.getElementById('WinorLoss')
            loss.textContent="Player:Loss💔"
        }
    } 