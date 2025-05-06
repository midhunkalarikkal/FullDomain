#include <iostream>
using namespace std;

int main() {

    int card; // declaration
    card = 14; // initialization

    int newCard;
    newCard = card;

    printf("value of card : %d \n", card);
    printf("value of newCard : %d \n", newCard);
    
    int *myPointer; // pointer declaration
    myPointer = &card; // the myPointer will holds the memory address of card
    
    printf("myPointer %p \n", myPointer);
    
    newCard = *myPointer; // dereferencing , here we are assigning the value of myPointer to the newCard
    
    printf("value of newCard : %d \n", newCard);

    return 0;
}