// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.cache = {};
    this.currentSize = 0;
    this.maxSize = maxSize || 1;
    this.keyValueList = new DoublyLinkedList();
  }


  insertKeyValuePair(key, value) {
    if (!this.cache[key]) {
      if (this.currentSize === this.maxSize) this.evictLeastRecent();
      else this.currentSize++;
      this.cache[key] = new DoublyLinkedListNode(key, value);
    } else {
      this.replaceKey(key, value);
    }
    this.updateMostRecent(this.cache[key]);
  }


  getValueFromKey(key) {
    if (!this.cache[key]) return null;
    this.updateMostRecent(this.cache[key]);
    return this.cache[key].value;
  }


  getMostRecentKey() {
    if (this.keyValueList.head === null) return;
    return this.keyValueList.head.key;
  }


  evictLeastRecent() {
    let removeNode =  this.keyValueList.tail.key
    this.keyValueList.removeTail();