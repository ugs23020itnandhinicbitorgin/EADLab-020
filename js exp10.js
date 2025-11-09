<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Check</title>
</head>
<body>
    <h1>Check if a Number is Prime</h1>
    <label for="numberInput">Enter a number: </label>
    <input type="number" id="numberInput" placeholder="Enter a number">
    <button onclick="checkPrime()">Check</button>
    <p id="result"></p>

    <script>
        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        function checkPrime() {
            const num = document.getElementById('numberInput').value;
            const resultElement = document.getElementById('result');
            if (num === '') {
                resultElement.innerText = 'Please enter a valid number!';
                return;
            }
            if (isPrime(Number(num))) {
                resultElement.innerText = `${num} is a prime number.`;
            } else {
                resultElement.innerText = `${num} is not a prime number.`;
            }
        }
    </script>
</body>
</html>
