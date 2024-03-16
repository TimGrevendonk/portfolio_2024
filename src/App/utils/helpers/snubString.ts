const SnubString = function (value: String, maxlengthOfCharacters?: number): String {
    if (value.length < (maxlengthOfCharacters ?? 50)) {
        return value;
    } else {
      // when longer than given amount, slice off to the amount and add dots.
      return value.slice(0, maxlengthOfCharacters ?? 47) + '...';
    }
}

export default SnubString;
