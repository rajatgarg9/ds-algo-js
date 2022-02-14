class HashTable {
  constructor(arraySize = 53) {
    this.items = new Array(arraySize);
    this.size = 0;
  }

  getHash(key, i = 0) {
    return (this.getBaseHash(key) + i) % this.items.length;
  }

  getBaseHash(key) {
    return key.toString().length % this.items.length;
  }

  /*
     Space Complexity: O(1)
  
     Time Complexity
       - Best Case : Ω(1)
       - Average Case : Θ(1)
       - Worst Case : O(n)
  */
  getIndex(key) {
    if (!key) {
      return -1;
    }

    const list = this.items;

    for (let i = 0; i < list.length; ++i) {
      const index = this.getHash(key, i);
      const selectedElement = this.items[index];
      if (selectedElement && selectedElement.key === key) {
        return index;
      }
    }

    return -1;
  }

  /*
     Space Complexity: O(1)
  
     Time Complexity
       - Best Case : Ω(1)
       - Average Case : Θ(1)
       - Worst Case : O(n)
  */
  get(key) {
    return this.items[this.getIndex(key)];
  }

  /*
     Space Complexity: O(1)
  
     Time Complexity
       - Best Case : Ω(1)
       - Average Case : Θ(1)
       - Worst Case : O(n)
  */
  set(key, value) {
    if (!key) {
      return null;
    }

    const list = this.items;

    for (let i = 0; i < list.length; ++i) {
      const index = this.getHash(key, i);
      const selectedElement = this.items[index];

      if (!selectedElement) {
        this.items[index] = { key, value };
        ++this.size;
        return index;
      } else if (selectedElement.key === key) {
        selectedElement.value = value;

        return index;
      }
    }
  }

  /*
     Space Complexity: O(n)
  
     Time Complexity
       - Best Case : Ω(n)
       - Average Case : Θ(n)
       - Worst Case : O(n)
  */
  getAll() {
    const result = [];

    for (let i = 0; i < this.items.length; ++i) {
      if (this.items[i]) {
        result.push(this.items[i]);
      }
    }

    return result;
  }

  /*
     Space Complexity: O(1)
  
     Time Complexity
       - Best Case : Ω(1)
       - Average Case : Θ(1)
       - Worst Case : O(n)
  */
  delete(key) {
    const deletedElementIndex = this.getIndex(key);

    if (deletedElementIndex === -1) {
      return undefined;
    }

    const deletedElement = this.items[deletedElementIndex];
    this.items[deletedElementIndex] = undefined;
    --this.size;

    return deletedElement;
  }
}

const hashTable = new HashTable();

hashTable.set("test", 32);
hashTable.set("tes", 322);
hashTable.set("best", 322);
console.log(hashTable.getAll());
