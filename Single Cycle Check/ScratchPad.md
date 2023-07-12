<pre>Approach:
1) initialize visited var to keep track of number of items visited and initizalize pointer
2) traverse through array while the number of nodes is less than the length of array
3) if we ever visit the starting idx again before all nodes in array are visited, return false
4) calcuate next idx by adding curr idx + number at position mod by array.length to account for numbers that go out of bounds on the right side
5) for negative idx, do array.length - moves to take (idx + array[i] % array.length)
5) make sure pointer is located at starting point once it exits while loop

Space/Time Complexity:
Time: O(n) || Space: O(1)
n = array length

Time: we're doing n constant time operations
Space: were not storing anything in auxiliary data structures</pre>