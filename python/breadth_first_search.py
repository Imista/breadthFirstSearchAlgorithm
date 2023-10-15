from multiprocessing import Pool, cpu_count


def breadth_first_search(root):
    if root is None:
        return None

    queue = [root]

    with Pool(cpu_count()) as pool:
        while queue:
            results = pool.map(bfs_search_level, queue)

            for node in results:
                if node is not None:
                    return node

            next_queue = []
            for node in queue:
                if node.left:
                    next_queue.append(node.left)
                if node.right:
                    next_queue.append(node.right)

            queue = next_queue

    return None


def bfs_search_level(node):
    if node.isPirate:
        return node
    return None
