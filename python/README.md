### English

## Python BFS Algorithm

This repository implements the Breadth-First Search (BFS) algorithm in Python, a powerful tool for searching elements in a binary tree. The search process is performed in parallel to improve efficiency.

### Usage

1. Create a binary tree.
2. Perform a BFS search using the `breadth_first_search` function, which utilizes parallel processing with the following code:

```python
with Pool(cpu_count()) as pool:
```

3. Check the result to see if the desired element is found.

---

### Español

## Algoritmo BFS en Python

Este repositorio implementa el algoritmo de Búsqueda en Anchura (BFS) en Python, una herramienta poderosa para buscar elementos en un árbol binario. El proceso de búsqueda se realiza en paralelo para mejorar la eficiencia.

### Uso

1. Crea un árbol binario.
2. Realiza una búsqueda BFS utilizando la función `breadth_first_search`, que utiliza procesamiento en paralelo con el siguiente código:

```python
with Pool(cpu_count()) as pool:
```

3. Verifica el resultado para comprobar si se encontró el elemento deseado.