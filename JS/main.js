//---variables---//

let screen = document.getElementById("screen") ;

let numChar ;

let currentChar, previousChar ;

let operation = [ '+' , '-' , '*' , '/' , '%' ] ; 


//---functions---//

function display ( Num ) {

    screen.value += Num ;

    currentChar = Num ;

    numChar = screen.value.length ;

    getPreviousChar ()

} ;

function ClrScreen () {

    screen.value = "" ;

} ;

function claculate () {

    screen.value = eval(screen.value) ;

} ;

function getPreviousChar () {

    previousChar = screen.value.substring(numChar-2,numChar-1) ;

    checkSyntax () ;

} ;

function checkSyntax () {


    if ( operation.includes(previousChar) && operation.includes(currentChar)) {

        if (previousChar == currentChar){
            removeChar () ;
        }else {
            overWrite () ;
        }

    }

} ;

function removeChar () {

    screen.value =screen.value.substring(0,numChar-1)

}

function overWrite () {

    screen.value = screen.value.slice(0 , -2) + screen.value.slice(-1);

}

function MinusNum () {

}