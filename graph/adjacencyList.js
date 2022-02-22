const SingleLinkedList = require("../linked-list/single-linked-list.js");
const Queue = require("../queue");

/*
   Space Complexity: O(|E| + |V|)
*/
class Graph {
  constructor() {
    this.adj = {};
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  addVertex(vertex) {
    if (!this.checkVertex(vertex)) {
      this.adj[vertex] = new SingleLinkedList();
    }

    return this.adj[vertex];
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  checkVertex(vertex) {
    if (this.adj[vertex]) {
      return true;
    }

    return false;
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(1)
     - Worst Case : O(1)
*/
  addEdge(firstVertex, secondVertex) {
    if (!this.checkVertex(firstVertex)) {
      this.addVertex(firstVertex);
    }

    if (!this.checkVertex(secondVertex)) {
      this.addVertex(secondVertex);
    }

    this.adj[firstVertex].add(secondVertex);
    this.adj[secondVertex].add(firstVertex);
  }

  /*
   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(E)
     - Worst Case : O(E)
*/
  deleteEdge(firstVertex, secondVertex) {
    if (this.checkVertex(firstVertex)) {
      this.adj[firstVertex].removeElement(secondVertex);
    }
    if (this.checkVertex(secondVertex)) {
      this.adj[secondVertex].removeElement(firstVertex);
    }
  }

  /*
   Time Complexity
     - Best Case : Ω(E)
     - Average Case : Θ(E ^ 2)
     - Worst Case : O(E ^ 2)
*/
  deleteVertex(vertex) {
    let selectedEdge = this.adj[vertex].head?.element;
    while (selectedEdge) {
      this.deleteEdge(vertex, selectedEdge);
      selectedEdge = this.adj[vertex].head?.element;
    }

    delete this.adj[vertex];
  }

  /*
  Space Complexity: O(|V|)

   Time Complexity
     - Best Case : Ω(|E| + |V|)
     - Average Case : Θ(|E| + |V|)
     - Worst Case : O(|E| + |V|)
*/
  bfs(source) {
    const visitedVertex = {};
    const queue = new Queue();
    const output = [];

    queue.enqueue(source);

    while (queue.size > 0) {
      const selectedVertex = queue.dequeue();
      let selectedEdge = this.adj[selectedVertex]?.head;

      if (!visitedVertex[selectedVertex]) {
        output.push(selectedVertex);
        visitedVertex[selectedVertex] = true;

        while (selectedEdge) {
          if (!visitedVertex[selectedEdge.element]) {
            queue.enqueue(selectedEdge.element);
          }

          selectedEdge = selectedEdge.next;
        }
      }
    }

    return output;
  }

  printGraph() {
    let output = "";
    for (const element of Object.keys(this.adj)) {
      output = `${output}${element}-->${this.adj[element].printList()}\n`;
    }

    console.log(output);
  }
}

const graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addEdge("b", "c");
graph.addEdge("a", "c");
graph.addEdge("b", "d");
graph.addEdge("a", "d");
graph.addEdge("e", "c");

// graph.deleteVertex("b");

graph.printGraph();

console.log(graph.bfs("a"));
