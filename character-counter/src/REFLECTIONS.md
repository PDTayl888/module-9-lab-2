How did you handle state updates when the text changed?
    it was all handled simply by utilizing the useState hook at the appropriate points.

What considerations did you make when calculating reading time?
    I first needed to trim the textarea input and separate it by whitespace. This was saved in an array and i counted the length of said array. Separately a calculation was done wordcount/ 200 to get the reading time.

How did you ensure the UI remained responsive during rapid text input?
    Honestly, I could have used debouncing but I have run out of time.

What challenges did you face when implementing the statistics calculations?
    Not a lot of challenges. Just making sure all of the data was correct so the different calculations were accurate.