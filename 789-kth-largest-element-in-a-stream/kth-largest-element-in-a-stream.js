var KthLargest = function(k, nums) {
    this.k = k
    this.minHeap = new MinPriorityQueue()
    for(const num of nums){
      this.add(num)
    }
};

KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val)
    if(this.minHeap.size() > this.k){
      this.minHeap.dequeue()
    }
    const top = this.minHeap.front()
    return top && typeof top === 'object' && 'element' in top ? top.element : top
};