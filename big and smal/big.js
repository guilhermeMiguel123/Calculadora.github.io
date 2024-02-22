window.onload = function() {
    document.querySelector('#expand-button').addEventListener('click', function() {
        var calculator = document.querySelector('.calculator');
        if (calculator.style.width === '800px') {
            calculator.style.width = '300px';
        } else {
            calculator.style.width = '800px';
        }
    });
};

document.getElementById('expand-button').innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHmH_9OuqYGjcKuJdJCWVcdAkERP4mABrgA&usqp=CAU" alt="Ícone de setas ordenadas">';
