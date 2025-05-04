#include <iostream>

int main() {
    int num1;
    int num2;
    int result;
    std::cout << "Enter first number ";
    std::cin >> num1;
    std::cout << "Enter second number ";
    std::cin >> num2;
    result = num1 + num2;
    std::cout << "The result is " << result << "\n";
    return 0;
}

//or

// int add(int a , int b) {
//     return a + b;
// }

// int main() {
//     int result = add(3,4);
//     std::cout << "The result is " << result << "\n";
//     return 0;
// }