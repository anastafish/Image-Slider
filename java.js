document.querySelector('.next-btn').addEventListener('click', () => {
    for (let i = 1; i <= 13; i++){
        if (document.querySelector(`.img${i}`).style.display != 'none'){            
            if (i < 13){
            document.querySelector(`.img${i}`).style.display = 'none';    
            document.querySelector(`.img${i+1}`).style.display = 'block';
            break;
        }
        else if (i === 13){
            document.querySelector(`.img${i}`).style.display = 'none';
            document.querySelector(`.img${i-12}`).style.display = 'block';

        }
            
        }
    }
})

function keyNext(e){
    if(e.key == "ArrowRight"){
    for (let i = 1; i <= 13; i++){
        if (document.querySelector(`.img${i}`).style.display != 'none'){            
            if (i < 13){
            document.querySelector(`.img${i}`).style.display = 'none';    
            document.querySelector(`.img${i+1}`).style.display = 'block';
            break;
        }
        else if (i === 13){
            document.querySelector(`.img${i}`).style.display = 'none';
            document.querySelector(`.img${i-12}`).style.display = 'block';

        }}
    }
    }
    else if(e.key == "ArrowLeft"){
        for (let i = 1; i <= 13; i++){
            if (document.querySelector(`.img${i}`).style.display != 'none'){        
                if (i > 1){
                console.log(i)
                document.querySelector(`.img${i}`).style.display = 'none';
                document.querySelector(`.img${i-1}`).style.display = 'block';
    
                break;
            }
    
            else if (i === 1){
                console.log(i)
            document.querySelector(`.img${i}`).style.display = 'none';    
            document.querySelector(`.img${i+12}`).style.display = 'block';
    
    
            break;
        }
                
            }
        }
        }
}

 
document.onkeydown = keyNext;


document.querySelector('.back-btn').addEventListener('click', () => {
    for (let i = 1; i <= 13; i++){
        if (document.querySelector(`.img${i}`).style.display != 'none'){        
            if (i > 1){
            console.log(i)
            document.querySelector(`.img${i}`).style.display = 'none';
            document.querySelector(`.img${i-1}`).style.display = 'block';

            break;
        }

        else if (i === 1){
            console.log(i)
        document.querySelector(`.img${i}`).style.display = 'none';    
        document.querySelector(`.img${i+12}`).style.display = 'block';


        break;
    }
            
        }
    }})

    document.querySelectorAll('.images').forEach(img => {
        img.addEventListener('click', () => {
        for (let i = 1; i <= 13; i++){
            if (document.querySelector(`.img${i}`).style.display != 'none'){
                document.querySelector(`.img${i}`).style.display = 'none'
                document.querySelector(`.img${img.getAttribute('data')}`).style.display = 'block';
            }
        }    
        })
    })

    setInterval(imgChange, 5000);

    function imgChange() {
        for (let i = 1; i <= 13; i++){
            if (document.querySelector(`.img${i}`).style.display != 'none'){
                if(i < 13){
                document.querySelector(`.img${i}`).style.display = 'none'
                document.querySelector(`.img${i+1}`).style.display = 'block'
                break;
                }
                else if (i === 13){
                    document.querySelector(`.img${i}`).style.display = 'none'
                    document.querySelector(`.img${i - 12}`).style.display = 'block'
                    break;
                }
            }
        }
    }











// function mobielmenu(option, menu) {
// option.addEventListener('click', () => {
//     if (menu.style.display != 'flex'){
//         console.log('open')
//     menu.style.display = 'flex'
//     option.style.background = 'green'
//     }
//     else {
//         menu.style.display = 'none'
//         option.style.background = 'white'
//         console.log('close')
//     }

// })
// }


// function dropDown(option, menu) {
// option.addEventListener('mouseover', () => {
//     menu.style.display = 'flex'
    
// })

// option.addEventListener('mouseout', () => {
//     menu.style.display = 'none'
// })
// }



