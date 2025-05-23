#include <iostream>
using namespace std;

int main() {
    int score = 200;
    int *myPointer = &score;

    printf("Value of score : %d \n",score);
    printf("Value of myPointer : %p \n",&myPointer);

    int &another_score = score;
    another_score = 800;

    printf("Value of another_score : %p \n",&another_score);
    printf("Value of another_score : %d \n",another_score);
    printf("Value of score : %d \n",score);

    score = 1;

    printf("Value of another_score : %d \n",another_score);
    printf("Value of score : %d \n",score);

    
    return 0;
}