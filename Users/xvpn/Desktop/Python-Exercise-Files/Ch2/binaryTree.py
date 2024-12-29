
class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

def print_tree(node, level=0, label=''):
    print(' ' * 4 * level + label + str(node.value))
    if node.left:
        print_tree(node.left, level + 1, '<')
    if node.right:
        print_tree(node.right, level + 1, '>')

# Create a sample binary tree
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# Print the binary tree
print_tree(root)