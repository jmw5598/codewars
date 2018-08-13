/*

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
