class SimpleSums
  # Before add any method to this calss, we want to be able to give it some initial data in this case we want the class SimpleSums
  #to know the print_number we add the method initialize to the class and make the method take an argument which will be our number.

  def initialize number
    # At this point number is loval to the initialize method, so by declaring @number,
    #it's scope will be global to other methods within the SimpleSums clas.
    @number = number
  end

  def print_number
    @number
  end

  def s1
    @number % 2
  end

  def s2
    # calculate the addition from 1 to n
    @number*(@number +1))/2
  end


end


# Whenever you call the method new on a class, as in SimpleSums.new, the class will create a new instance of itself.
#It will them, internally, call the method initialize on the new Object.
#Doing so it will simply pass all the arguments that you passed to new on to the method initialize.
sum = SimpleSums.new(4)

p sum.print_number

p sum.s1
p sum.s2