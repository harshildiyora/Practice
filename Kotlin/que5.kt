// 5. Write a Kotlin program to find the factorial of a given number.

fun main() {
    val number = 5
    var factorial = 1
    for (i in 1..number) {
        factorial *= i
    }
    println("Factorial of $number is $factorial")
}
