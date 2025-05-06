#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName;
    string lastName;
    cout << "Enter your first name : \n";
    getline(cin, firstName);
    cout << "Enter your last name : \n";
    getline(cin, lastName);
    cout << "Your fullname is " << firstName << " " << lastName << ", Welcome.";
    return 0;
}