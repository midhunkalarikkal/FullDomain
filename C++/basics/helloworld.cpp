#include <cstdio>
using namespace std;

void nothing() {
    puts("This is a nothing function");
}

char charFunction() {
    puts("This is from a character function");
    return 'h';
}

int main() {
    puts("This is using cstdio library");
    nothing();
    charFunction();
    return 0;
}