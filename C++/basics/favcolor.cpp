#include <iostream>
#include <string>
using namespace std;

int main() {
    string favColor;
    cout << "Enter your favorite color : \n";
    getline(cin, favColor);
    cout << "Hey " << favColor << " is my favorite color too.";
    return 0;
}

// int main() {
//     std::string favColor;
//     std::cout << "Enter you favorite color : \n";
//     std::cin >> favColor;
//     std::cout << "Hey " << favColor << " is my favorite too";
//     return 0;
// }