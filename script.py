def hello_world():
    """Prints a classic greeting."""
    print("Hello, World!")

def factorial(n):
    """Calculates the factorial of a non-negative integer."""
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

if __name__ == "__main__":
    hello_world()
    num = 5
    print(f"The factorial of {num} is: {factorial(num)}")