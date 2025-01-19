class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "--->" +[...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }
    
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
        console.log(`Deleting the edge from ${vertex1} to ${vertex2}`);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return "Not found";
        }

        console.log(`Deleting the vertex ${vertex}`);
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex);
        }
        
    }

    bfs(startVertex){
        const visited = new Set();
        const queue = [startVertex];
        const result = [];

        visited.add(startVertex);
        while(queue.length){
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach((neighbour) => {
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    result.push(neighbour);
                }
            })
        }
        return result;
    }

    dfs(startVertex){
        const visited = new Set();
        const stack = [startVertex];
        const result = [];

        visited.add(startVertex);
        while(stack.length){
            const vertex = stack.pop();
            if(!visited.has(vertex)){
                visited.add(vertex);
                result.push(vertex);

                this.adjacencyList[vertex].forEach((neighbour) => {
                    if(!visited.has(neighbour)){
                        stack.push(neighbour);
                    }
                })
            }
        }
        return result;
    }

    isCyclic(){
        const visited = new Set();

        const dfs = (vertex, parent)=>{
            visited.add(vertex)

            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    if(dfs(neighbour, vertex)) return true
                }else if(neighbour !== parent){
                    return true
                }
            }
            return false
        }
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfs(vertex, null)) return true
            }
        }
        return false
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.addEdge("B","D")
graph.addEdge("D","E")

console.log("bfs traversal : ",graph.bfs("A"))
console.log("dfs traversal : ",graph.dfs("A"))
console.log("isCyclic : ",graph.isCyclic())

graph.display()

console.log(graph.hasEdge("A", "B"))
console.log(graph.hasEdge("A", "C"))

graph.removeEdge("A", "B")
graph.display()
graph.removeVertex("B")
graph.display()