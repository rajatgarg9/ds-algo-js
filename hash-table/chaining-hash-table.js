class HashTable {
  constructor(arraySize = 53) {
    this.items = new Array(arraySize);
    this.size = 0;
  }

  getHash(key) {
    return key.toString().length % this.items.length;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  set(key, value) {
    if (!key) {
      return null;
    }
    const index = this.getHash(key);

    if (!this.items[index]) {
      this.items[index] = [];
    }

    const existingItem = this.get(key);

    if (existingItem) {
      existingItem.value = value;
    } else {
      this.items[index].push({ key, value });
      ++this.size;
    }

    return this.items[index];
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
      const subList = this.items[i] || [];
      for (let j = 0; j < subList.length; ++j) {
        result.push(subList[j]);
      }
    }

    return result;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  get(key) {
    if (!key) {
      return undefined;
    }

    const index = this.getHash(key);
    const selectedList = this.items[index] || [];

    for (let i = 0; i < selectedList.length; ++i) {
      if (selectedList[i].key === key) {
        return selectedList[i];
      }
    }

    return undefined;
  }

  /*
   Space Complexity: O(1)

   Time Complexity
     - Best Case : Ω(1)
     - Average Case : Θ(n)
     - Worst Case : O(n)
*/
  delete(key) {
    if (!key) {
      return undefined;
    }
    const index = this.getHash(key);
    const selectedList = this.items[index] || [];
    let deletedObj;

    this.items[index] = selectedList.filter((item) => {
      if (item.key !== key) {
        return true;
      } else {
        --this.size;
        deletedObj = item;
      }
    });

    return deletedObj;
  }
}

const hashTable = new HashTable();

hashTable.set("test", 32);
hashTable.set("tes", 322);
hashTable.set("best", 322);
console.log(hashTable.getAll());
