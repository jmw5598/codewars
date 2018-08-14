/*
  Training JS #18:
  Methods of String object--concat() split() and its good friend join()

  This time we learn two methods to split or merge string:split() and concat().
  also learn a good friend of the split() method: join().

  Task:
    Coding in function splitAndMerge, function accept 2 parameters:str and sp.
    str is a sentence. sp is a char as separator.

    First we need to divide the sentence into words(Use separator space); and
    then divide each word into characters(Use separator empty string); and then
    merge each characters with the specified sp; at last merge all the words
    (Use separator space) and return it.

  Example:
    - splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
    - splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
    - splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
    - splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
*/

function splitAndMerge(str,sp){
  return str.split(' ').map(word => word.split('').join(sp)).join(' ');
}
