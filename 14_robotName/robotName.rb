# create a robot name using 2 letters and 3 numbers
# create a reset method to reset the name of the robot
# create an instruction count command
# create a lifetime and reset timer

class Robot

  attr_reader :instruction_count
  # Remember the initialize method will run as soon as an instance of the class has been created. it will store the variables that have been defined.
  def initialize
    @name = make_name

    @instruction_count = 0

    # we capture the current time with Time class
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i

  end

  # this will create the random name for the robot
  def make_name
    # create an array with alphabetical range from A to Z then sample a random letter
    letters = ("A".."Z").to_a.sample(2)
    # creates an array of numeric strings between 000 and 999
    numbers = ("000".."999").to_a.sample
    # convert the letters to string and concatenate the letters and numbers
    name_pool = letters.join.concat(numbers)
  end

  # getter function that gets the name
  def name
    # Incrementing the count for every action
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1

    @name = make_name
    # reset the reset_at variable
    @reset_at = Time.now.to_i
  end

  # shorter way of writing this method is - attr_reader :instruction_count
  # def instruction_count
  #   @instruction_count
  # end

  def timers
    puts "#{Time.now.to_i - @reset_at} seconds since last boot, #{Time.now.to_i - @created_at} seconds since creation"
  end

end

robot1 = Robot.new
puts robot1.name

puts "=" * 20

robot2 = Robot.new
puts robot2.name
sleep 3
robot2.reset
puts robot2.name
puts robot2.instruction_count

puts "=" * 20

robot3 = Robot.new
puts robot3.name
puts robot3.timers
sleep 3
robot3.reset
puts robot3.name
puts robot3.instruction_count
sleep 3
puts robot3.timers
