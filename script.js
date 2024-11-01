const display = document.getElementById('display');
        const buttons = document.querySelectorAll('button');
        let displayValue = '';

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.value;

                if (value === 'AC') {
                    displayValue = '';
                    display.value = '';
                    console.log('Display cleared'); // Check if this logs
                } else if (value === '=') {
                    try {
                        displayValue = eval(displayValue);
                        display.value = displayValue;
                    } catch (error) {
                        display.value = 'Error';
                    }
                } else {
                    displayValue += value;
                    display.value = displayValue;
                }
            });
        });