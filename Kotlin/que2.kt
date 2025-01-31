// 2. Write a Kotlin program to perform addition, subtraction, multiplication and division of two numbers.

fun main() {
    print("Enter first number: ")
    val num1 = readLine()!!.toInt()
    print("Enter second number: ")
    val num2 = readLine()!!.toInt()
    println("Sum: ${num1 + num2}")
    println("Difference: ${num1 - num2}")
    println("Product: ${num1 * num2}")
    println("Quotient: ${num1 / num2}")
}