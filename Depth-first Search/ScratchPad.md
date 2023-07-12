<pre>1) Add current node to array
2) call dfs method on all children nodes.

Time: O(v + e)     |     Space: O(v)
v = number of vertices
e = number of edges

Time: the number of edges is equal to the number of children of current node. We branch out (width of tree) based on the number of children

Space: height of tree at worst case is O(v) if tree is unbalanced</pre>