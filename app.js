let x = document.getElementById('output');
x.style.visibility = 'hidden';        

document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    if(lbs === 0 || lbs === ''){
        
        x.style.visibility = 'hidden';        
    }else{
        x.style.visibility = 'visible'; 
        // document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsOuput').innerHTML = lbs/0.0022046;
        document.getElementById('kgOuput').innerHTML = lbs/2.2046;
        document.getElementById('ozOuput').innerHTML = lbs*16;
    
    }


});
