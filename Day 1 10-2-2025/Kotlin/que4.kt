// 4. Write a Kotlin program to find the maximum and minimum of three numbers.

fun main() {
    val num1 = 5
    val num2 = 10
    val num3 = 15

    if (num1 >= num2 && num1 >= num3) {
        println("$num1 is the maximum number")
    } else if (num2 >= num1 && num2 >= num3) {
        println("$num2 is the maximum number")
    } else {
        println("$num3 is the maximum number")
    }

    if (num1 <= num2 && num1 <= num3) {
        println("$num1 is the minimum number")
    } else if (num2 <= num1 && num2 <= num3) {
        println("$num2 is the minimum number")
    } else {
        println("$num3 is the minimum number")
    }
}
