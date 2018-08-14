/*
  You are given a node that is the beginning of a linked list. This list always
  contains a tail and a loop.

  Your objective is to determine the length of the loop.

  For example in the following picture the tail's size is 3 and the loop size
  is 11.

  Use the `getNext' method or 'next' property to get the following node.
    - node.getNext()
    - node.next

  Note: do NOT mutate the nodes!
  Thanks to shadchnev, I broke all of the methods from the Hash class.
  Don't miss dmitry's article in the discussion after you pass the Kata !!
*/

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class CanYouGetTheLoop {

    /**
     * Submitted version of using HashMap.
     * Find the length of a circular linked list with a tail.
     * @param node  The head of the linked list.
     * @return      The size of the loop.
     */
    public int loopSize(Node node) {
        Map<Node, Integer> nodes = new HashMap<>();
        Node temp = node;
        int end = 0;
        while(!nodes.containsKey(temp)) {
            nodes.put(temp, end);
            end++;
            temp = temp.getNext();
        }
        return end - nodes.get(temp);
    }

    /**
     * Alternate version using Arraylist instead of Map.
     * Find the length of a circular linked list with a tail.
     * @param node  The head of the linked list
     * @return      Teh size of the loop
     */
    public int loopSize(Node node) {
        List<Node> nodes = new ArrayList<>();
        Node temp = node;
        int end = 0;
        while(!nodes.contains(temp)) {
            nodes.add(temp);
            end++;
            temp = temp.getNext();
        }
        return end - nodes.indexOf(temp);
    }
}
