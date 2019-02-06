class BloomFilter {
  constructor (capacity, errorRate) {
    var length = Math.ceil((capacity * Math.log(errorRate)) / Math.log(1 / Math.pow(2, Math.log(2))))
    this.bloomfilter = new Array(length)
  }

  static get N_HASHES () {
    return 7
  }

  insertElement (element) {
    for (var i = 0; i < BloomFilter.N_HASHES; i++) {
      var hash = murmurhash3_32_gc(i, element)
      var index = hash % this.bloomfilter.length
      this.bloomfilter[index] = true
    }
    return true
  }

  /**
   * Check if a positive integer may exist in the set.
   * 
   * @param {*} integer Positive integer.
   */
  contains (integer) {
    for (var i = 0; i < BloomFilter.N_HASHES; i++) {
      var hash = murmurhash3_32_gc(i, integer)
      var index = hash % this.bloomfilter.length
      if (this.bloomfilter[index] !== true) {
        return false
      }
    }
    return true
  }

  /**
   * Add either a single positive integer or an array of positive integers.
   * 
   * @param {*} object Integer(s) to "insert" into the bloomfilter.
   */
  insert (object) {
    if (object instanceof Array) {
      for (var i = 0; i < object.length; i++) {
        this.insertElement(object[i], this.bloomfilter)
      }
      return true
    } else {
      return this.insertElement(object)
    }
  }
}
