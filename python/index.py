from create_binary_tree import create_binary_tree
from breadth_first_search import breadth_first_search

if __name__ == "__main__":
    root = create_binary_tree(10)
    pirate = breadth_first_search(root)
    if pirate:
        print("The desired element was found:", pirate)
    else:
        print("The desired element was not found in the data structure.")
